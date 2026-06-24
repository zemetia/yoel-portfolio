/**
 * Firestore → PostgreSQL full migration seed.
 *
 * Fetches ALL portfolio data directly from Firestore and seeds into Prisma.
 * This is the canonical way to repopulate the database from the live source.
 *
 * Prerequisites — add to .env:
 *   FIREBASE_PROJECT_ID=your-project-id
 *   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-...@....iam.gserviceaccount.com
 *   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
 *
 * Usage: npx tsx prisma/seed-firestore.ts
 */

import * as admin from 'firebase-admin';
import { PrismaClient } from '../src/lib/generated/prisma';
import { Client as MinioClient } from 'minio';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const prisma = new PrismaClient();

// ─── Firebase Admin Init ──────────────────────────────────────────────────────

function initFirebase(): admin.firestore.Firestore {
  const projectId = process.env['FIREBASE_PROJECT_ID'];
  const clientEmail = process.env['FIREBASE_CLIENT_EMAIL'];
  const privateKey = process.env['FIREBASE_PRIVATE_KEY']?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    console.error('❌ Firebase credentials missing in .env');
    console.error('   Required: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY');
    process.exit(1);
  }

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
    });
  }

  return admin.firestore();
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

type FirestoreDoc = Record<string, unknown>;

function tsToDate(ts: unknown): Date | null {
  if (!ts) return null;
  if (typeof ts === 'object' && ts !== null) {
    if ('toDate' in ts && typeof (ts as { toDate: () => Date }).toDate === 'function') {
      return (ts as { toDate: () => Date }).toDate();
    }
    if ('_seconds' in ts) {
      return new Date((ts as { _seconds: number })._seconds * 1000);
    }
    if ('seconds' in ts) {
      return new Date((ts as { seconds: number }).seconds * 1000);
    }
  }
  if (typeof ts === 'string') {
    const d = new Date(ts);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
}

function str(v: unknown, fallback = ''): string {
  return (v as string) || fallback;
}

function strOrNull(v: unknown): string | null {
  return (v as string) || null;
}

function boolOrDefault(v: unknown, def: boolean): boolean {
  return typeof v === 'boolean' ? v : def;
}

function arrOfStr(v: unknown): string[] {
  return Array.isArray(v) ? (v as string[]) : [];
}

// ─── MinIO ────────────────────────────────────────────────────────────────────

function buildMinio(): MinioClient {
  return new MinioClient({
    endPoint: process.env['MINIO_ENDPOINT'] ?? 'localhost',
    port: parseInt(process.env['MINIO_PORT'] ?? '9000'),
    useSSL: process.env['MINIO_USE_SSL'] === 'true',
    accessKey: process.env['MINIO_ACCESS_KEY'] ?? 'minioadmin',
    secretKey: process.env['MINIO_SECRET_KEY'] ?? '',
  });
}

const BUCKET = process.env['MINIO_BUCKET'] ?? 'portfolio-images';
const PUBLIC_URL = process.env['MINIO_PUBLIC_URL'] ?? 'http://localhost:9000';

async function ensureBucket(minio: MinioClient): Promise<void> {
  const exists = await minio.bucketExists(BUCKET);
  if (!exists) {
    await minio.makeBucket(BUCKET, 'us-east-1');
    const policy = JSON.stringify({
      Version: '2012-10-17',
      Statement: [{ Effect: 'Allow', Principal: { AWS: ['*'] }, Action: ['s3:GetObject'], Resource: [`arn:aws:s3:::${BUCKET}/*`] }],
    });
    await minio.setBucketPolicy(BUCKET, policy);
  }
}

async function uploadBase64(
  minio: MinioClient,
  folder: string,
  filename: string,
  dataUri: string,
): Promise<string> {
  const raw = dataUri.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(raw, 'base64');
  let mime = 'image/jpeg';
  if (dataUri.startsWith('data:')) mime = dataUri.slice(5, dataUri.indexOf(';'));
  const key = `${folder}/${filename}`;
  await minio.putObject(BUCKET, key, buffer, buffer.length, {
    'Content-Type': mime,
    'Cache-Control': 'public, max-age=31536000, immutable',
  });
  return `${PUBLIC_URL}/${BUCKET}/${key}`;
}

async function resolveImages(
  minio: MinioClient,
  raw: unknown,
  folder: string,
  prefix: string,
): Promise<string[]> {
  if (!Array.isArray(raw)) return [];
  const result: string[] = [];
  for (let j = 0; j < (raw as unknown[]).length; j++) {
    const img = (raw as unknown[])[j];
    if (typeof img !== 'string') continue;
    if (img.startsWith('data:')) {
      try {
        result.push(await uploadBase64(minio, folder, `${prefix}-${j}.jpg`, img));
      } catch (e) {
        console.warn(`  ⚠ upload failed ${prefix}-${j}:`, (e as Error).message);
      }
    } else {
      result.push(img);
    }
  }
  return result;
}

// ─── Firestore fetch helpers ──────────────────────────────────────────────────

async function fetchCollection(
  db: admin.firestore.Firestore,
  collectionName: string,
  profileId: string | null,
): Promise<FirestoreDoc[]> {
  // Try profileId-filtered first when profileId is known
  if (profileId) {
    const filtered = await db.collection(collectionName)
      .where('profileId', '==', profileId)
      .get();
    if (!filtered.empty) {
      console.log(`  (filtered by profileId for ${collectionName})`);
      return filtered.docs.map(d => ({ id: d.id, ...d.data() }) as FirestoreDoc);
    }
  }
  // Fall back: get all (single-user portfolio)
  const all = await db.collection(collectionName).get();
  return all.docs.map(d => ({ id: d.id, ...d.data() }) as FirestoreDoc);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const db = initFirebase();
  const minio = buildMinio();
  await ensureBucket(minio);
  console.log('✅ Firebase + MinIO ready\n');

  // ─── 1. Profile ────────────────────────────────────────────────────────────
  let profileDoc: FirestoreDoc | null = null;
  let firestoreProfileId: string | null = null;

  // Try 'profiles' (new structure) then 'profile' (old structure)
  for (const coll of ['profiles', 'profile']) {
    const snap = await db.collection(coll).limit(1).get();
    if (!snap.empty) {
      const doc = snap.docs[0]!;
      profileDoc = { id: doc.id, ...doc.data() } as FirestoreDoc;
      firestoreProfileId = doc.id;
      console.log(`  Found profile in '${coll}' collection (id: ${firestoreProfileId})`);
      break;
    }
  }

  if (!profileDoc) {
    console.error('❌ No profile found in Firestore (tried: profiles, profile)');
    process.exit(1);
  }

  let avatarUrl: string | null = null;
  const photoUrl = str(profileDoc['photoUrl'] || profileDoc['avatarUrl'] || '', '');
  if (photoUrl.startsWith('data:')) {
    console.log('  Uploading avatar...');
    avatarUrl = await uploadBase64(minio, 'avatars', 'avatar-yoel.jpg', photoUrl);
    console.log('  avatar:', avatarUrl);
  } else if (photoUrl) {
    avatarUrl = photoUrl;
  }

  const profilePayload = {
    fullName: str(profileDoc['fullName'] || profileDoc['name']),
    headline: str(profileDoc['headline'] || profileDoc['heroSubtitle']),
    summary: str(profileDoc['summary'] || profileDoc['bio']),
    location: str(profileDoc['location'] || profileDoc['address']),
    phone: str(profileDoc['phone']),
    email: str(profileDoc['email']),
    birthDate: tsToDate(profileDoc['birthDate']),
    website: strOrNull(profileDoc['website']),
    linkedinUrl: strOrNull(profileDoc['linkedinUrl'] || profileDoc['linkedin']),
    githubUrl: strOrNull(profileDoc['githubUrl'] || profileDoc['github']),
    twitterUrl: strOrNull(profileDoc['twitterUrl']),
    instagramUrl: strOrNull(profileDoc['instagramUrl'] || profileDoc['instagram']),
    tiktokUrl: strOrNull(profileDoc['tiktokUrl']),
    facebookUrl: strOrNull(profileDoc['facebookUrl']),
    youtubeUrl: strOrNull(profileDoc['youtubeUrl']),
    mediumUrl: strOrNull(profileDoc['mediumUrl']),
    avatarUrl,
    resumeUrl: strOrNull(profileDoc['resumeUrl']),
    heroSubtitle: strOrNull(profileDoc['heroSubtitle']),
    heroSequences: profileDoc['heroSequences'] != null ? (profileDoc['heroSequences'] as string[]) : null,
    visibleSections: arrOfStr(profileDoc['visibleSections']),
    activeTheme: strOrNull(profileDoc['activeTheme']),
    showPhoto: boolOrDefault(profileDoc['showPhoto'], true),
  };

  const profile = await prisma.profile.upsert({
    where: { slug: 'main' },
    update: profilePayload,
    create: { slug: 'main', ...profilePayload },
  });
  console.log(`✅ Profile: ${profile.fullName}\n`);

  // ─── 2. Skills ─────────────────────────────────────────────────────────────
  await prisma.skill.deleteMany({ where: { profileId: profile.id } });
  const skills = await fetchCollection(db, 'skills', firestoreProfileId);
  for (let i = 0; i < skills.length; i++) {
    const s = skills[i]!;
    await prisma.skill.create({
      data: {
        profileId: profile.id,
        name: str(s['name'] || s['category'], 'General'),
        list: str(s['list']),
        category: strOrNull(s['category']),
        proficiency: typeof s['proficiency'] === 'number' ? s['proficiency'] : null,
        order: typeof s['order'] === 'number' ? s['order'] : i,
      },
    });
  }
  console.log(`✅ Skills: ${skills.length}`);

  // ─── 3. Education ──────────────────────────────────────────────────────────
  await prisma.education.deleteMany({ where: { profileId: profile.id } });
  const educations = await fetchCollection(db, 'education', firestoreProfileId);
  for (let i = 0; i < educations.length; i++) {
    const e = educations[i]!;
    await prisma.education.create({
      data: {
        profileId: profile.id,
        institution: str(e['institution']),
        degree: strOrNull(e['degree']),
        field: strOrNull(e['field']),
        startDate: tsToDate(e['startDate']),
        endDate: tsToDate(e['endDate']),
        isCurrent: boolOrDefault(e['isCurrent'], false),
        gpa: strOrNull(e['gpa']),
        description: strOrNull(e['description']),
        logoUrl: strOrNull(e['logoUrl']),
      },
    });
  }
  console.log(`✅ Education: ${educations.length}`);

  // ─── 4. Experience ─────────────────────────────────────────────────────────
  await prisma.experience.deleteMany({ where: { profileId: profile.id } });
  const experiences = await fetchCollection(db, 'experience', firestoreProfileId);
  for (let i = 0; i < experiences.length; i++) {
    const e = experiences[i]!;
    await prisma.experience.create({
      data: {
        profileId: profile.id,
        company: str(e['company']),
        position: str(e['position'] || e['title']),
        location: strOrNull(e['location']),
        locationType: strOrNull(e['locationType']),
        startDate: tsToDate(e['startDate']),
        endDate: tsToDate(e['endDate']),
        isCurrent: boolOrDefault(e['isCurrent'], false),
        description: strOrNull(e['description']),
        achievements: arrOfStr(e['achievements']),
        companyUrl: strOrNull(e['companyUrl']),
        companyLogo: strOrNull(e['companyLogo']),
        employmentType: strOrNull(e['employmentType']),
        images: arrOfStr(e['images']).filter(img => !img.startsWith('data:')),
        aiHint: strOrNull(e['aiHint']),
        isPublic: boolOrDefault(e['isPublic'], true),
        order: typeof e['order'] === 'number' ? e['order'] : i,
      },
    });
  }
  console.log(`✅ Experience: ${experiences.length}`);

  // ─── 5. Projects ───────────────────────────────────────────────────────────
  await prisma.project.deleteMany({ where: { profileId: profile.id } });
  const projects = await fetchCollection(db, 'projects', firestoreProfileId);
  const usedSlugs = new Set<string>();
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i]!;
    const images = await resolveImages(minio, p['images'], 'projects', `proj-${i}-img`);

    let slug = str(p['slug'] || p['title'], 'untitled')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'project';
    if (usedSlugs.has(slug)) slug = `${slug}-${i}`;
    usedSlugs.add(slug);

    const yearRaw = p['year'];
    const year = typeof yearRaw === 'number'
      ? yearRaw
      : typeof yearRaw === 'string' && /^\d{4}$/.test(yearRaw)
        ? parseInt(yearRaw)
        : null;

    await prisma.project.create({
      data: {
        profileId: profile.id,
        title: str(p['title'], 'Untitled'),
        slug,
        summary: str(p['summary'] || p['description']).slice(0, 300) || null,
        description: strOrNull(p['description']),
        year,
        tags: arrOfStr(p['tags']),
        images,
        techStack: arrOfStr(p['techStack']),
        collaborators: arrOfStr(p['collaborators']),
        client: strOrNull(p['client']),
        liveUrl: strOrNull(p['liveUrl'] || p['projectUrl']),
        githubUrl: strOrNull(p['githubUrl'] || p['repoUrl']),
        isFeatured: boolOrDefault(p['isFeatured'], false),
        status: str(p['status']).toUpperCase() === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
        aiHint: strOrNull(p['aiHint']),
        order: typeof p['order'] === 'number' ? p['order'] : i,
      },
    });
  }
  console.log(`✅ Projects: ${projects.length}`);

  // ─── 6. Publications ───────────────────────────────────────────────────────
  await prisma.publication.deleteMany({ where: { profileId: profile.id } });
  const publications = await fetchCollection(db, 'publications', firestoreProfileId);
  for (let i = 0; i < publications.length; i++) {
    const pub = publications[i]!;
    const yearRaw = pub['year'] as string | undefined;
    const publishedDate =
      tsToDate(pub['publishedDate']) ??
      (yearRaw && /^\d{4}$/.test(yearRaw.trim())
        ? new Date(Date.UTC(parseInt(yearRaw), 0, 1))
        : null);
    const authorsRaw = pub['authors'];
    const authors = Array.isArray(authorsRaw)
      ? (authorsRaw as string[])
      : authorsRaw
        ? [str(authorsRaw)]
        : [];
    await prisma.publication.create({
      data: {
        profileId: profile.id,
        title: str(pub['title']),
        publisher: strOrNull(pub['publisher'] || pub['journal']),
        url: strOrNull(pub['url'] || pub['link']),
        publishedDate,
        authors,
        doi: strOrNull(pub['doi']),
        publicationType: strOrNull(pub['publicationType'] || pub['type']),
        description: strOrNull(pub['description']),
        order: typeof pub['order'] === 'number' ? pub['order'] : i,
      },
    });
  }
  console.log(`✅ Publications: ${publications.length}`);

  // ─── 7. Licenses ───────────────────────────────────────────────────────────
  await prisma.license.deleteMany({ where: { profileId: profile.id } });
  const licenses = await fetchCollection(db, 'licenses', firestoreProfileId);
  for (let i = 0; i < licenses.length; i++) {
    const l = licenses[i]!;
    const images = await resolveImages(minio, l['images'], 'licenses', `lic-${i}-img`);
    await prisma.license.create({
      data: {
        profileId: profile.id,
        name: str(l['name']),
        issuer: str(l['issuer']),
        url: strOrNull(l['url']),
        issueDate: tsToDate(l['issueDate']) ?? tsToDate(l['date']),
        expiryDate: tsToDate(l['expiryDate']),
        doesNotExpire: boolOrDefault(l['doesNotExpire'], false),
        credentialId: strOrNull(l['credentialId']),
        credentialUrl: strOrNull(l['credentialUrl']),
        logoUrl: strOrNull(l['logoUrl']),
        images,
        aiHint: strOrNull(l['aiHint']),
        order: typeof l['order'] === 'number' ? l['order'] : i,
      },
    });
  }
  console.log(`✅ Licenses: ${licenses.length}`);

  // ─── 8. Volunteer Experience ───────────────────────────────────────────────
  await prisma.volunteerExperience.deleteMany({ where: { profileId: profile.id } });
  const volunteers = await fetchCollection(db, 'volunteerExperience', firestoreProfileId);
  for (let i = 0; i < volunteers.length; i++) {
    const v = volunteers[i]!;
    await prisma.volunteerExperience.create({
      data: {
        profileId: profile.id,
        organization: str(v['organization']),
        role: str(v['role']),
        cause: strOrNull(v['cause']),
        location: strOrNull(v['location']),
        startDate: tsToDate(v['startDate']),
        endDate: tsToDate(v['endDate']),
        isCurrent: boolOrDefault(v['isCurrent'], false),
        description: strOrNull(v['description']),
        achievements: arrOfStr(v['achievements']),
        order: typeof v['order'] === 'number' ? v['order'] : i,
      },
    });
  }
  console.log(`✅ Volunteer: ${volunteers.length}`);

  // ─── 9. Organizations ──────────────────────────────────────────────────────
  await prisma.organization.deleteMany({ where: { profileId: profile.id } });
  const orgs = await fetchCollection(db, 'organizations', firestoreProfileId);
  for (let i = 0; i < orgs.length; i++) {
    const o = orgs[i]!;
    await prisma.organization.create({
      data: {
        profileId: profile.id,
        name: str(o['name']),
        role: strOrNull(o['role']),
        url: strOrNull(o['url']),
        logoUrl: strOrNull(o['logoUrl']),
        location: strOrNull(o['location']),
        startDate: tsToDate(o['startDate']),
        endDate: tsToDate(o['endDate']),
        isCurrent: boolOrDefault(o['isCurrent'], false),
        description: strOrNull(o['description']),
        order: typeof o['order'] === 'number' ? o['order'] : i,
      },
    });
  }
  console.log(`✅ Organizations: ${orgs.length}`);

  console.log('\n🎉 Firestore → PostgreSQL migration complete!');
}

main()
  .catch(e => { console.error('❌ Migration failed:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

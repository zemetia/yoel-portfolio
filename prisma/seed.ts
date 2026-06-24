/**
 * Seed script — migrates data from Firebase dump to Prisma.
 *
 * Usage: npx tsx prisma/seed.ts
 * Requires: D:/Hermes/workspace/research/firebase-dump-full.json
 */
import { PrismaClient } from '../src/lib/generated/prisma';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { Client as MinioClient } from 'minio';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const prisma = new PrismaClient();

// ─── Month name → 0-indexed number ───────────────────────────────────────────
const MONTH_MAP: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
  january: 0, february: 1, march: 2, april: 3, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

/** Parse "Aug 2022" / "January 2023" / ISO / YYYY-MM-DD → Date | null */
function parseDate(raw: string | undefined | null): Date | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed || /^present$/i.test(trimmed)) return null;

  // "Mon YYYY" or "Month YYYY"
  const m = trimmed.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (m) {
    const monthIdx = MONTH_MAP[m[1]!.toLowerCase()];
    if (monthIdx !== undefined) {
      return new Date(Date.UTC(parseInt(m[2]!), monthIdx, 1));
    }
  }

  // "YYYY-MM-DD" or full ISO
  const d = new Date(trimmed);
  if (!isNaN(d.getTime())) return d;

  return null;
}

/** "Published" / "Draft" → "PUBLISHED" / "DRAFT" */
function toPublishStatus(raw: string | undefined): 'DRAFT' | 'PUBLISHED' {
  return raw?.toUpperCase() === 'DRAFT' ? 'DRAFT' : 'PUBLISHED';
}

// ─── MinIO helper — used only in seed, avoids server-only import ──────────────
function buildMinioClient(): MinioClient {
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
      Statement: [{
        Effect: 'Allow',
        Principal: { AWS: ['*'] },
        Action: ['s3:GetObject'],
        Resource: [`arn:aws:s3:::${BUCKET}/*`],
      }],
    });
    await minio.setBucketPolicy(BUCKET, policy);
  }
}

/** Upload a base64 data URI to MinIO, return public URL */
async function uploadBase64ToMinio(
  minio: MinioClient,
  folder: string,
  filename: string,
  base64DataUri: string,
): Promise<string> {
  const raw = base64DataUri.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(raw, 'base64');
  let mime = 'image/jpeg';
  if (base64DataUri.startsWith('data:')) {
    mime = base64DataUri.slice(5, base64DataUri.indexOf(';'));
  }
  const key = `${folder}/${filename}`;
  await minio.putObject(BUCKET, key, buffer, buffer.length, {
    'Content-Type': mime,
    'Cache-Control': 'public, max-age=31536000, immutable',
  });
  return `${PUBLIC_URL}/${BUCKET}/${key}`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const dumpPath = path.resolve(
    'D:/Hermes/workspace/research/firebase-dump-full.json',
  );
  if (!fs.existsSync(dumpPath)) {
    console.error('❌ Firebase dump not found at', dumpPath);
    process.exit(1);
  }

  const dump = JSON.parse(fs.readFileSync(dumpPath, 'utf-8'));

  const minio = buildMinioClient();
  await ensureBucket(minio);
  console.log('✅ MinIO bucket ready');

  // ─── 1. Profile ────────────────────────────────────────────────────────────
  const fbProfile = dump.profile?.[0];
  if (!fbProfile) { console.error('❌ No profile in dump'); process.exit(1); }

  // Upload avatar if it's a base64 data URI
  let avatarUrl: string | null = null;
  if (fbProfile.photoUrl?.startsWith('data:')) {
    console.log('  Uploading avatar to MinIO...');
    avatarUrl = await uploadBase64ToMinio(
      minio,
      'avatars',
      'avatar-yoel.jpg',
      fbProfile.photoUrl,
    );
    console.log('  avatar:', avatarUrl);
  } else if (fbProfile.photoUrl) {
    avatarUrl = fbProfile.photoUrl;
  }

  const profileData = {
    fullName: fbProfile.name || '',
    headline: fbProfile.heroSubtitle || '',
    summary: fbProfile.bio || '',
    location: fbProfile.address || '',
    phone: fbProfile.phone || '',
    email: fbProfile.email || '',
    birthDate: fbProfile.birthDate ? new Date(fbProfile.birthDate) : null,
    website: fbProfile.website || null,
    linkedinUrl: fbProfile.linkedin || null,
    githubUrl: fbProfile.github || null,
    instagramUrl: fbProfile.instagram || null,
    avatarUrl,
    visibleSections: fbProfile.visibleSections || [],
    heroSubtitle: fbProfile.heroSubtitle || null,
    heroSequences: fbProfile.heroSequences ?? null,
    activeTheme: fbProfile.activeTheme || null,
    showPhoto: fbProfile.showPhoto !== false,
  };

  const profile = await prisma.profile.upsert({
    where: { slug: 'main' },
    update: profileData,
    create: { slug: 'main', ...profileData },
  });
  console.log(`✅ Profile: ${profile.fullName}`);

  // ─── 2. Skills ─────────────────────────────────────────────────────────────
  await prisma.skill.deleteMany({ where: { profileId: profile.id } });
  let skillCount = 0;
  for (let i = 0; i < (dump.skills || []).length; i++) {
    const s = dump.skills[i];
    await prisma.skill.create({
      data: {
        profileId: profile.id,
        name: s.category || 'General',
        list: typeof s.list === 'string' ? s.list : '',
        category: s.category || 'General',
        order: i,
      },
    });
    skillCount++;
  }
  console.log(`✅ Skills: ${skillCount} categories`);

  // ─── 3. Experiences ────────────────────────────────────────────────────────
  await prisma.experience.deleteMany({ where: { profileId: profile.id } });
  let expCount = 0;
  for (let i = 0; i < (dump.experiences || []).length; i++) {
    const exp = dump.experiences[i];
    const startDate = parseDate(exp.startDate);
    const endDate = parseDate(exp.endDate);

    // Upload non-base64 images; skip base64 (too large for bulk seed)
    const images: string[] = [];
    if (Array.isArray(exp.images)) {
      for (const img of exp.images) {
        if (typeof img === 'string' && !img.startsWith('data:')) {
          images.push(img);
        }
      }
    }

    await prisma.experience.create({
      data: {
        profileId: profile.id,
        company: exp.company || '',
        position: exp.title || '',
        location: exp.location || null,
        locationType: exp.locationType || null,
        startDate,
        endDate,
        isCurrent: !endDate,
        description: exp.description || null,
        achievements: [],
        images,
        employmentType: exp.employmentType || null,
        aiHint: exp.aiHint || null,
        isPublic: exp.isPublic !== false,
        order: i,
      },
    });
    expCount++;
  }
  console.log(`✅ Experiences: ${expCount}`);

  // ─── 4. Projects ───────────────────────────────────────────────────────────
  await prisma.project.deleteMany({ where: { profileId: profile.id } });
  let projCount = 0;
  const usedSlugs = new Set<string>();
  for (let i = 0; i < (dump.projects || []).length; i++) {
    const proj = dump.projects[i];

    const tags = Array.isArray(proj.tags) ? proj.tags.map(String) : [];
    const collaborators = Array.isArray(proj.collaborators)
      ? proj.collaborators.map(String)
      : [];

    // Upload project images from base64
    const images: string[] = [];
    if (Array.isArray(proj.images)) {
      for (let j = 0; j < proj.images.length; j++) {
        const img = proj.images[j];
        if (typeof img === 'string' && img.startsWith('data:')) {
          try {
            const url = await uploadBase64ToMinio(
              minio,
              'projects',
              `proj-${i}-img-${j}.jpg`,
              img,
            );
            images.push(url);
          } catch (e) {
            console.warn(`  ⚠ Failed to upload project ${i} image ${j}:`, (e as Error).message);
          }
        } else if (typeof img === 'string') {
          images.push(img);
        }
      }
    }

    let slug =
      (proj.title || 'untitled')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || 'project';
    if (usedSlugs.has(slug)) slug = `${slug}-${i}`;
    usedSlugs.add(slug);

    await prisma.project.create({
      data: {
        profileId: profile.id,
        title: proj.title || 'Untitled',
        slug,
        summary: (proj.description || '').slice(0, 300) || null,
        description: proj.description || null,
        year: proj.year ? parseInt(String(proj.year)) : null,
        tags,
        images,
        collaborators,
        client: proj.client || null,
        liveUrl: proj.projectUrl || null,
        githubUrl: proj.repoUrl || null,
        status: toPublishStatus(proj.status),
        aiHint: proj.aiHint || null,
        order: i,
      },
    });
    projCount++;
  }
  console.log(`✅ Projects: ${projCount}`);

  // ─── 5. Education ──────────────────────────────────────────────────────────
  await prisma.education.deleteMany({ where: { profileId: profile.id } });
  const rawEducation: unknown[] = dump.educations ?? dump.education ?? [];
  let eduCount = 0;
  for (let i = 0; i < rawEducation.length; i++) {
    const edu = rawEducation[i] as Record<string, unknown>;
    await prisma.education.create({
      data: {
        profileId: profile.id,
        institution: (edu['institution'] as string) || '',
        degree: (edu['degree'] as string) || null,
        field: (edu['field'] as string) || null,
        startDate: parseDate(edu['startDate'] as string | null),
        endDate: parseDate(edu['endDate'] as string | null),
        isCurrent: !(edu['endDate']),
        gpa: (edu['gpa'] as string) || null,
        description: (edu['description'] as string) || null,
      },
    });
    eduCount++;
  }
  console.log(`✅ Education: ${eduCount}`);

  // ─── 6. Publications ───────────────────────────────────────────────────────
  await prisma.publication.deleteMany({ where: { profileId: profile.id } });
  const rawPublications: unknown[] = dump.publications ?? [];
  let pubCount = 0;
  for (let i = 0; i < rawPublications.length; i++) {
    const pub = rawPublications[i] as Record<string, unknown>;
    const yearRaw = pub['year'] as string | undefined;
    const publishedDate = yearRaw && /^\d{4}$/.test(yearRaw.trim())
      ? new Date(Date.UTC(parseInt(yearRaw), 0, 1))
      : parseDate(yearRaw ?? null);
    const authorsRaw = pub['authors'];
    const authors = Array.isArray(authorsRaw)
      ? (authorsRaw as string[])
      : authorsRaw ? [(authorsRaw as string)] : [];
    await prisma.publication.create({
      data: {
        profileId: profile.id,
        title: (pub['title'] as string) || '',
        publisher: (pub['publisher'] as string) || null,
        url: (pub['link'] as string) || (pub['url'] as string) || null,
        publishedDate,
        authors,
        doi: (pub['doi'] as string) || null,
        publicationType: (pub['publicationType'] as string) || (pub['type'] as string) || null,
        description: (pub['description'] as string) || null,
        order: i,
      },
    });
    pubCount++;
  }
  console.log(`✅ Publications: ${pubCount}`);

  // ─── 7. Licenses ───────────────────────────────────────────────────────────
  await prisma.license.deleteMany({ where: { profileId: profile.id } });
  const rawLicenses: unknown[] = dump.licenses ?? [];
  let licCount = 0;
  for (let i = 0; i < rawLicenses.length; i++) {
    const lic = rawLicenses[i] as Record<string, unknown>;
    const images: string[] = [];
    if (Array.isArray(lic['images'])) {
      for (let j = 0; j < (lic['images'] as unknown[]).length; j++) {
        const img = (lic['images'] as unknown[])[j];
        if (typeof img === 'string' && img.startsWith('data:')) {
          try {
            const url = await uploadBase64ToMinio(minio, 'licenses', `lic-${i}-img-${j}.jpg`, img);
            images.push(url);
          } catch (e) {
            console.warn(`  ⚠ Failed to upload license ${i} image ${j}:`, (e as Error).message);
          }
        } else if (typeof img === 'string') {
          images.push(img);
        }
      }
    }
    await prisma.license.create({
      data: {
        profileId: profile.id,
        name: (lic['name'] as string) || '',
        issuer: (lic['issuer'] as string) || '',
        issueDate: parseDate((lic['date'] as string) || (lic['issueDate'] as string) || null),
        credentialId: (lic['credentialId'] as string) || null,
        credentialUrl: (lic['credentialUrl'] as string) || null,
        images,
        aiHint: (lic['aiHint'] as string) || null,
        order: i,
      },
    });
    licCount++;
  }
  console.log(`✅ Licenses: ${licCount}`);

  // ─── 8. Volunteer Experiences ──────────────────────────────────────────────
  await prisma.volunteerExperience.deleteMany({ where: { profileId: profile.id } });
  const rawVolunteer: unknown[] = dump.volunteerExperiences ?? dump.volunteer ?? [];
  let volCount = 0;
  for (let i = 0; i < rawVolunteer.length; i++) {
    const vol = rawVolunteer[i] as Record<string, unknown>;
    await prisma.volunteerExperience.create({
      data: {
        profileId: profile.id,
        organization: (vol['organization'] as string) || '',
        role: (vol['role'] as string) || '',
        cause: (vol['cause'] as string) || null,
        location: (vol['location'] as string) || null,
        startDate: parseDate(vol['startDate'] as string | null),
        endDate: parseDate(vol['endDate'] as string | null),
        isCurrent: !(vol['endDate']),
        description: (vol['description'] as string) || null,
        achievements: Array.isArray(vol['achievements']) ? (vol['achievements'] as string[]) : [],
        order: i,
      },
    });
    volCount++;
  }
  console.log(`✅ Volunteer experiences: ${volCount}`);

  console.log('\n🎉 Seeding complete!');
}

main()
  .catch((e) => { console.error('❌ Seed failed:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

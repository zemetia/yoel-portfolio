/**
 * Seed script — migrates data from Firebase dump to Prisma.
 *
 * Usage: npx tsx prisma/seed.ts
 * Requires: D:/Hermes/workspace/research/firebase-dump-full.json
 */
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  const dumpPath = path.resolve(
    'D:/Hermes/workspace/research/firebase-dump-full.json',
  );

  if (!fs.existsSync(dumpPath)) {
    console.error('❌ Firebase dump not found at', dumpPath);
    console.log('Run: firebase dump script first');
    process.exit(1);
  }

  const dump = JSON.parse(fs.readFileSync(dumpPath, 'utf-8'));

  // ─── 1. Profile ──────────────────────────────────────────────────────────
  const fbProfile = dump.profile?.[0];
  if (!fbProfile) {
    console.error('❌ No profile data in dump');
    process.exit(1);
  }

  const profile = await prisma.profile.upsert({
    where: { slug: 'main' },
    update: {},
    create: {
      slug: 'main',
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
      avatarUrl: fbProfile.photoUrl || null,
      visibleSections: fbProfile.visibleSections || [],
      activeTheme: fbProfile.activeTheme || null,
    },
  });

  console.log(`✅ Profile: ${profile.fullName}`);

  // ─── 2. Skills ───────────────────────────────────────────────────────────
  // Firebase format: [{ category: "Frontend", list: ["React", "Next.js"] }, ...]
  let skillCount = 0;
  for (const skillDoc of dump.skills || []) {
    const category = skillDoc.category || 'General';
    const skillList: string[] = skillDoc.list || [];

    for (let i = 0; i < skillList.length; i++) {
      const name = skillList[i];
      if (!name) continue;

      await prisma.skill.create({
        data: {
          profileId: profile.id,
          name: String(name),
          category,
          proficiency: null,
          order: i,
        },
      });
      skillCount++;
    }
  }
  console.log(`✅ Skills: ${skillCount}`);

  // ─── 3. Experiences ──────────────────────────────────────────────────────
  let expCount = 0;
  for (const exp of dump.experiences || []) {
    const startDate = exp.startDate
      ? new Date(exp.startDate)
      : null;
    const endDate = exp.endDate
      ? new Date(exp.endDate)
      : null;

    // Parse skills array
    const skills: string[] = [];
    if (Array.isArray(exp.skills)) {
      for (const s of exp.skills) {
        skills.push(String(s));
      }
    }

    // Parse images array
    const images: string[] = [];
    if (Array.isArray(exp.images)) {
      for (const img of exp.images) {
        images.push(String(img));
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
        isCurrent: endDate === null,
        description: exp.description || null,
        achievements: [],
        skills,
        images,
        employmentType: exp.employmentType || null,
        aiHint: exp.aiHint || null,
        isPublic: exp.isPublic !== false,
      },
    });
    expCount++;
  }
  console.log(`✅ Experiences: ${expCount}`);

  // ─── 4. Projects ────────────────────────────────────────────────────────
  let projCount = 0;
  for (const proj of dump.projects || []) {
    const tags: string[] = [];
    if (Array.isArray(proj.tags)) {
      for (const t of proj.tags) {
        tags.push(String(t));
      }
    }

    const images: string[] = [];
    if (Array.isArray(proj.images)) {
      for (const img of proj.images) {
        images.push(String(img));
      }
    }

    const collaborators: string[] = [];
    if (Array.isArray(proj.collaborators)) {
      for (const c of proj.collaborators) {
        collaborators.push(String(c));
      }
    }

    await prisma.project.create({
      data: {
        profileId: profile.id,
        title: proj.title || 'Untitled',
        slug:
          (proj.title || 'untitled')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') ||
          'project-' + Date.now(),
        summary: (proj.description || '').slice(0, 300),
        description: proj.description || null,
        year: proj.year ? parseInt(proj.year) : null,
        tags,
        images,
        collaborators,
        client: proj.client || null,
        liveUrl: proj.projectUrl || null,
        githubUrl: proj.repoUrl || null,
        status: (proj.status || 'PUBLISHED') as any,
        aiHint: proj.aiHint || null,
      },
    });
    projCount++;
  }
  console.log(`✅ Projects: ${projCount}`);

  // ─── 5. Publications ─────────────────────────────────────────────────────
  let pubCount = 0;
  for (const pub of dump.publications || []) {
    await prisma.publication.create({
      data: {
        profileId: profile.id,
        title: pub.title || 'Untitled',
        publisher: pub.publisher || null,
        url: pub.url || null,
        publishedDate: pub.publishedDate
          ? new Date(pub.publishedDate)
          : null,
        description: pub.description || null,
        authors: pub.authors || [],
        doi: pub.doi || null,
      },
    });
    pubCount++;
  }
  console.log(`✅ Publications: ${pubCount}`);

  console.log('\n🎉 Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

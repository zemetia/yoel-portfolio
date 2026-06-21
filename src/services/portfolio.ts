// services/portfolio.ts
//
// Composite portfolio service — the primary interface used by pages and API
// routes to fetch portfolio data. Runs ALL child collection fetches in
// parallel regardless of backing store (Firestore live vs Prisma future).
//
// ─── Architecture ────────────────────────────────────────────────────────────
//
//   PortfolioService.getPortfolioData()
//     ├── profile.getByAccountId()         ← Firestore (current)
//     ├── skill.getByField('profileId',)   ← Firestore
//     ├── education.getByField(...)        ← Firestore
//     ├── experience.getByField(...)       ← Firestore
//     ├── project.getByField(...)          ← Firestore
//     ├── publication.getByField(...)      ← Firestore
//     ├── license.getByField(...)          ← Firestore
//     ├── volunteerExperience.getByField() ← Firestore
//     └── organization.getByField(...)     ← Firestore
//
//   Future: swap each import from firestoreService → prismaRepository
//   without changing this module's public interface.
//
// ─── Usage ───────────────────────────────────────────────────────────────────
//
//   import { portfolioService } from '@/services/portfolio';
//   const data = await portfolioService.getPortfolioData('account-id-123');

import { firestoreService } from './firebase';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PortfolioData {
  profile: NonNullable<Awaited<ReturnType<typeof firestoreService.profile.getByAccountId>>> | null;
  skills: Awaited<ReturnType<typeof firestoreService.skill.getByField>>;
  education: Awaited<ReturnType<typeof firestoreService.education.getByField>>;
  experience: Awaited<ReturnType<typeof firestoreService.experience.getByField>>;
  projects: Awaited<ReturnType<typeof firestoreService.project.getByField>>;
  publications: Awaited<ReturnType<typeof firestoreService.publication.getByField>>;
  licenses: Awaited<ReturnType<typeof firestoreService.license.getByField>>;
  volunteerExperience: Awaited<ReturnType<typeof firestoreService.volunteerExperience.getByField>>;
  organizations: Awaited<ReturnType<typeof firestoreService.organization.getByField>>;
}

export interface PublishedProject {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  coverImage: string | null;
  industry: string | null;
  duration: string | null;
  servicesProvided: string[];
  filterTag: string | null;
  techStack: string[];
  isFeatured: boolean;
  publishedAt: Date | null;
  liveUrl: string | null;
  githubUrl: string | null;
}

// ─── Composite fetchers ──────────────────────────────────────────────────────

export const portfolioService = {
  /**
   * Full portfolio composite fetch.
   * Runs all collection queries in parallel for optimal performance.
   * Returns null when the account has no profile.
   */
  async getPortfolioData(accountId: string): Promise<PortfolioData | null> {
    const profile = await firestoreService.profile.getByAccountId(accountId);
    if (!profile || !(profile as unknown as Record<string, unknown>).id) return null;

    const profileId = (profile as unknown as Record<string, string>).id;

    const [skills, education, experience, projects, publications, licenses, volunteerExperience, organizations] =
      await Promise.all([
        firestoreService.skill.getByField('profileId', profileId),
        firestoreService.education.getByField('profileId', profileId),
        firestoreService.experience.getByField('profileId', profileId),
        firestoreService.project.getByField('profileId', profileId),
        firestoreService.publication.getByField('profileId', profileId),
        firestoreService.license.getByField('profileId', profileId),
        firestoreService.volunteerExperience.getByField('profileId', profileId),
        firestoreService.organization.getByField('profileId', profileId),
      ]);

    return {
      profile,
      skills,
      education,
      experience,
      projects,
      publications,
      licenses,
      volunteerExperience,
      organizations,
    };
  },

  /**
   * Get only published projects (for public pages).
   */
  async getPublishedProjects(accountId: string): Promise<PublishedProject[]> {
    const data = await this.getPortfolioData(accountId);
    if (!data) return [];

    return (data.projects as unknown as Array<Record<string, unknown>>)
      .filter((p: Record<string, unknown>) => p.status === 'PUBLISHED')
      .sort(
        (a: Record<string, unknown>, b: Record<string, unknown>) =>
          Number(b.order ?? 0) - Number(a.order ?? 0),
      )
      .map((p: Record<string, unknown>) => ({
        id: p.id as string,
        title: p.title as string,
        slug: p.slug as string,
        summary: (p.summary as string) ?? null,
        coverImage: (p.coverImage as string) ?? null,
        industry: (p.industry as string) ?? null,
        duration: (p.duration as string) ?? null,
        servicesProvided: (p.servicesProvided as string[]) ?? [],
        filterTag: (p.filterTag as string) ?? null,
        techStack: (p.techStack as string[]) ?? [],
        isFeatured: (p.isFeatured as boolean) ?? false,
        publishedAt: (p.publishedAt as Date | null) ?? null,
        liveUrl: (p.liveUrl as string | null) ?? null,
        githubUrl: (p.githubUrl as string | null) ?? null,
      }));
  },

  /**
   * Get a single project by slug.
   */
  async getProjectBySlug(accountId: string, slug: string) {
    const data = await this.getPortfolioData(accountId);
    if (!data) return null;

    const project = (data.projects as unknown as Array<Record<string, unknown>>).find(
      (p: Record<string, unknown>) => p.slug === slug && p.status === 'PUBLISHED',
    );
    return project ?? null;
  },

  /**
   * Quick check: does this account have portfolio data at all?
   */
  async hasPortfolio(accountId: string): Promise<boolean> {
    const profile = await firestoreService.profile.getByAccountId(accountId);
    return profile !== null;
  },
};

export default portfolioService;

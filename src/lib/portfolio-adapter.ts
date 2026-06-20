import { portfolioService, firestoreService } from '@/services';
import type { PortfolioData } from '@/services/portfolio';
import type {
  Profile,
  Skill,
  Experience,
  Project,
  Education,
  SocialLinks,
} from '@/types/portfolio';

// Default account ID for personal portfolio
const DEFAULT_ACCOUNT_ID = process.env['NEXT_PUBLIC_PORTFOLIO_ACCOUNT_ID'] ?? 'default';

/**
 * Fetches portfolio data from the existing service layer
 * and adapts it to the UI component types.
 */
export async function fetchPortfolioData(): Promise<{
  data: {
    profile: Profile | null;
    skills: Skill[];
    experiences: Experience[];
    projects: Project[];
    education: Education[];
  } | null;
  error: string | null;
  fetchedAt: string;
}> {
  const fetchedAt = new Date().toISOString();

  try {
    const raw = await portfolioService.getPortfolioData(DEFAULT_ACCOUNT_ID);

    if (!raw?.profile) {
      return {
        data: null,
        error: !firestoreService.isConfigured
          ? 'Firebase not configured — set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY in .env.local'
          : null,
        fetchedAt,
      };
    }

    // Map ProfileData → Profile (UI type)
    const profile: Profile = {
      name: raw.profile.fullName ?? 'Portfolio',
      tagline: raw.profile.headline ?? '',
      bio: raw.profile.summary ?? '',
      shortBio: raw.profile.summary?.split('\n')[0] ?? '',
      avatar: raw.profile.avatarUrl ?? '',
      location: raw.profile.location ?? '',
      email: raw.profile.email ?? '',
      resumeUrl: raw.profile.resumeUrl ?? undefined,
      socials: {
        github: raw.profile.githubUrl ?? undefined,
        linkedin: raw.profile.linkedinUrl ?? undefined,
        twitter: raw.profile.twitterUrl ?? undefined,
        youtube: raw.profile.youtubeUrl ?? undefined,
        website: raw.profile.website ?? undefined,
        email: raw.profile.email ?? undefined,
      } as SocialLinks,
      available: false,
      availableFor: [],
    };

    // Map SkillData → Skill
    const skills: Skill[] = (raw.skills ?? []).map((s, i) => ({
      id: (s as unknown as { id?: string }).id ?? `skill-${i}`,
      name: s.name,
      category: (s.category as Skill['category']) ?? 'other',
      level: proficiencyToLevel(s.proficiency),
      order: s.order ?? i,
    }));

    // Map ExperienceData → Experience
    const experiences: Experience[] = (raw.experience ?? []).map((e, i) => ({
      id: (e as unknown as { id?: string }).id ?? `exp-${i}`,
      title: e.position,
      company: e.company,
      location: e.location,
      period: formatPeriod(e.startDate, e.endDate, e.isCurrent),
      description: e.description ?? '',
      highlights: e.achievements ?? [],
      tech: [],
      type: 'work' as const,
      order: i,
    }));

    // Map ProjectData → Project
    const projects: Project[] = (raw.projects ?? []).map((p, i) => ({
      id: (p as unknown as { id?: string }).id ?? `proj-${i}`,
      title: p.title,
      description: p.summary ?? '',
      tech: p.techStack ?? [],
      link: p.liveUrl ?? undefined,
      github: p.githubUrl ?? undefined,
      image: p.coverImage ?? undefined,
      featured: p.isFeatured ?? false,
      order: p.order ?? i,
    }));

    // Map EducationData → Education
    const education: Education[] = (raw.education ?? []).map((e, i) => ({
      id: (e as unknown as { id?: string }).id ?? `edu-${i}`,
      school: e.institution,
      degree: e.degree ?? '',
      major: e.field ?? '',
      period: formatPeriod(e.startDate, e.endDate, e.isCurrent),
      gpa: e.gpa,
      achievements: e.description ? [e.description] : [],
      order: i,
    }));

    return {
      data: { profile, skills, experiences, projects, education },
      error: null,
      fetchedAt,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[portfolio-adapter] fetch failed:', message);
    return { data: null, error: message, fetchedAt };
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function proficiencyToLevel(proficiency?: number): Skill['level'] {
  if (!proficiency) return 'intermediate';
  if (proficiency >= 80) return 'expert';
  if (proficiency >= 60) return 'advanced';
  if (proficiency >= 40) return 'intermediate';
  return 'beginner';
}

function formatPeriod(
  startDate?: unknown,
  endDate?: unknown,
  isCurrent?: boolean,
): string {
  const fmt = (date: unknown): string => {
    if (!date) return '';
    if (typeof date === 'string') return date;
    if (typeof date === 'object' && date !== null) {
      const d = date as { toDate?: () => Date; seconds?: number };
      const dt = d.toDate ? d.toDate() : d.seconds ? new Date(d.seconds * 1000) : null;
      if (dt) return dt.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
    return '';
  };

  const start = fmt(startDate);
  const end = isCurrent ? 'Present' : fmt(endDate);
  if (!start && !end) return '';
  return `${start} — ${end}`;
}

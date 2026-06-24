import { prismaPortfolioService } from '@/services/prisma-portfolio';
import type {
  Profile,
  Skill,
  Experience,
  Project,
  Education,
  SocialLinks,
} from '@/types/portfolio';

const PROFILE_SLUG = process.env['NEXT_PUBLIC_PORTFOLIO_SLUG'] ?? 'main';

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
    const raw = await prismaPortfolioService.getPortfolioData(PROFILE_SLUG);

    if (!raw?.profile) {
      return { data: null, error: 'No profile found', fetchedAt };
    }

    const p = raw.profile;

    const profile: Profile = {
      name: p.fullName ?? 'Portfolio',
      tagline: p.headline ?? '',
      bio: p.summary ?? '',
      shortBio: p.summary?.split('\n')[0] ?? '',
      avatar: p.avatarUrl ?? '',
      location: p.location ?? '',
      email: p.email ?? '',
      resumeUrl: p.resumeUrl ?? undefined,
      socials: {
        github: p.githubUrl ?? undefined,
        linkedin: p.linkedinUrl ?? undefined,
        twitter: p.twitterUrl ?? undefined,
        youtube: p.youtubeUrl ?? undefined,
        website: p.website ?? undefined,
        email: p.email ?? undefined,
      } as SocialLinks,
      available: false,
      availableFor: [],
    };

    const skills: Skill[] = (raw.skills ?? []).map((s, i) => ({
      id: s.id,
      name: s.name,
      category: (s.category as Skill['category']) ?? 'other',
      level: proficiencyToLevel(s.proficiency ?? undefined),
      order: s.order ?? i,
    }));

    const experiences: Experience[] = (raw.experience ?? []).map((e, i) => ({
      id: e.id,
      title: e.position,
      company: e.company,
      location: e.location ?? undefined,
      period: formatPeriod(e.startDate, e.endDate),
      description: e.description ?? '',
      highlights: e.achievements ?? [],
      tech: [],
      type: 'work' as const,
      order: i,
    }));

    const projects: Project[] = (raw.projects ?? []).map((proj, i) => ({
      id: proj.id,
      title: proj.title,
      description: proj.summary ?? '',
      tech: proj.techStack ?? [],
      link: proj.liveUrl ?? undefined,
      github: proj.githubUrl ?? undefined,
      image: proj.coverImage ?? undefined,
      featured: proj.isFeatured ?? false,
      order: proj.order ?? i,
    }));

    const education: Education[] = (raw.education ?? []).map((e, i) => ({
      id: e.id,
      school: e.institution,
      degree: e.degree ?? '',
      major: e.field ?? '',
      period: formatPeriod(e.startDate, e.endDate),
      gpa: e.gpa ?? undefined,
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

function formatPeriod(startDate?: Date | null, endDate?: Date | null): string {
  const fmt = (d: Date | null | undefined): string => {
    if (!d) return '';
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  const start = fmt(startDate);
  const end = endDate ? fmt(endDate) : 'Present';
  if (!start) return end;
  return `${start} — ${end}`;
}

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { DataSciTheme } from '@/components/themes/datasci-theme';
import { prismaPortfolioService } from '@/services/prisma-portfolio';
import type { PortfolioData } from '@/types/zemetia-portfolio';

const PROFILE_SLUG = process.env['NEXT_PUBLIC_PORTFOLIO_SLUG'] ?? 'main';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.meta' });

  const raw = await prismaPortfolioService.getPortfolioData(PROFILE_SLUG).catch(() => null);
  const name = (raw?.profile as Record<string, unknown> | null)?.['fullName'] as string | undefined;

  return {
    title: {
      template: `%s | ${name ?? 'Portfolio'}`,
      default: name ? `${name} — Data Science Portfolio` : t('title'),
    },
    description: t('description'),
    metadataBase: new URL(process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000'),
  };
}

export default async function HomePage() {
  const raw = await prismaPortfolioService.getPortfolioData(PROFILE_SLUG).catch(() => null);

  const data: PortfolioData = mapToZemetiaPortfolioData(raw);

  return <DataSciTheme {...data} />;
}

/** Format a Prisma Date → "Aug 2022". Returns null when val is null/undefined. */
function fmtDate(val: Date | string | null | undefined): string | null {
  if (!val) return null;
  if (val instanceof Date) return val.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return val;
}

/** endDate null → "Present", otherwise format the date */
function fmtEnd(endDate: Date | string | null | undefined): string {
  return fmtDate(endDate) ?? 'Present';
}

function mapToZemetiaPortfolioData(raw: Awaited<ReturnType<typeof prismaPortfolioService.getPortfolioData>>): PortfolioData {
  type R = Record<string, unknown>;

  const p = (raw?.profile ?? {}) as R;

  const profile = {
    name: (p['fullName'] as string) ?? 'Portfolio',
    bio: (p['summary'] as string) ?? '',
    email: (p['email'] as string) ?? '',
    phone: (p['phone'] as string) ?? undefined,
    address: (p['location'] as string) ?? undefined,
    linkedin: (p['linkedinUrl'] as string) ?? undefined,
    github: (p['githubUrl'] as string) ?? undefined,
    website: (p['website'] as string) ?? undefined,
    photoUrl: (p['avatarUrl'] as string) ?? (p['photoUrl'] as string) ?? undefined,
    heroSubtitle: (p['heroSubtitle'] as string) ?? undefined,
    heroSequences: (p['heroSequences'] as string[]) ?? undefined,
    activeTheme: 'datasci' as const,
  };

  // Each Skill row = one category with a comma-separated list field
  const skills = ((raw?.skills ?? []) as unknown as R[]).map((s, i) => ({
    id: (s['id'] as string) ?? `skill-${i}`,
    category: (s['category'] as string) ?? (s['name'] as string) ?? 'Other',
    list: (s['list'] as string) ?? (s['name'] as string) ?? '',
    order: (s['order'] as number) ?? i,
  }));

  const educations = ((raw?.education ?? []) as unknown as R[]).map((e, i) => ({
    id: (e['id'] as string) ?? `edu-${i}`,
    degree: (e['degree'] as string) ?? '',
    institution: (e['institution'] as string) ?? '',
    startDate: fmtDate(e['startDate'] as Date | string | null | undefined) ?? '',
    endDate: fmtEnd(e['endDate'] as Date | null),
    isCurrent: !(e['endDate']),
    description: (e['description'] as string) ?? undefined,
    order: (e['order'] as number) ?? i,
  }));

  const experiences = ((raw?.experience ?? []) as unknown as R[]).map((e, i) => ({
    id: (e['id'] as string) ?? `exp-${i}`,
    title: (e['position'] as string) ?? (e['title'] as string) ?? '',
    company: (e['company'] as string) ?? '',
    employmentType: (e['employmentType'] as string) ?? '',
    location: (e['location'] as string) ?? '',
    locationType: (e['locationType'] as string) ?? '',
    startDate: fmtDate(e['startDate'] as Date | string | null | undefined) ?? '',
    endDate: fmtEnd(e['endDate'] as Date | null),
    description: (e['description'] as string) ?? '',
    skills: (e['skills'] as string[]) ?? [],
    images: (e['images'] as string[]) ?? [],
    isPublic: true,
    order: (e['order'] as number) ?? i,
  }));

  const projects = ((raw?.projects ?? []) as unknown as R[]).map((p, i) => ({
    id: (p['id'] as string) ?? `proj-${i}`,
    title: (p['title'] as string) ?? '',
    description: (p['summary'] as string) ?? (p['description'] as string) ?? '',
    projectUrl: (p['liveUrl'] as string) ?? undefined,
    repoUrl: (p['githubUrl'] as string) ?? undefined,
    status: (p['status'] as string) ?? 'PUBLISHED',
    images: (p['images'] as string[]) ?? (p['coverImage'] ? [p['coverImage'] as string] : []),
    tags: (p['techStack'] as string[]) ?? (p['tags'] as string[]) ?? [],
    order: (p['order'] as number) ?? i,
  }));

  const publications = ((raw?.publications ?? []) as unknown as R[]).map((pub, i) => {
    const publishedDate = pub['publishedDate'];
    const yearStr = publishedDate
      ? new Date(publishedDate as string).getFullYear().toString()
      : ((pub['year'] as string) ?? '');
    const authorsRaw = pub['authors'];
    const authorsStr = Array.isArray(authorsRaw)
      ? (authorsRaw as string[]).join(', ')
      : ((authorsRaw as string) ?? '');
    return {
      id: (pub['id'] as string) ?? `pub-${i}`,
      title: (pub['title'] as string) ?? '',
      authors: authorsStr,
      publicationType: ((pub['type'] as string) ?? (pub['publicationType'] as string) ?? 'Journal') as 'Journal' | 'Conference' | 'Book' | 'Article' | 'Other',
      publisher: (pub['publisher'] as string) ?? '',
      year: yearStr,
      doi: (pub['doi'] as string) ?? undefined,
      link: (pub['url'] as string) ?? (pub['link'] as string) ?? undefined,
      order: (pub['order'] as number) ?? i,
    };
  });

  const licenses = ((raw?.licenses ?? []) as unknown as R[]).map((l, i) => {
    const issueDate = l['issueDate'];
    const dateStr = issueDate
      ? fmtDate(issueDate as Date | string) ?? ''
      : ((l['date'] as string) ?? '');
    return {
      id: (l['id'] as string) ?? `lic-${i}`,
      name: (l['name'] as string) ?? '',
      issuer: (l['issuer'] as string) ?? '',
      date: dateStr,
      credentialId: (l['credentialId'] as string) ?? undefined,
      images: (l['images'] as string[]) ?? [],
      order: (l['order'] as number) ?? i,
    };
  });

  const volunteerExperiences = ((raw?.volunteerExperience ?? []) as unknown as R[]).map((v, i) => ({
    id: (v['id'] as string) ?? `vol-${i}`,
    role: (v['role'] as string) ?? '',
    organization: (v['organization'] as string) ?? '',
    startDate: fmtDate(v['startDate'] as Date | string | null | undefined) ?? '',
    endDate: fmtEnd(v['endDate'] as Date | null),
    isCurrent: !(v['endDate']),
    description: (v['description'] as string) ?? '',
    location: (v['location'] as string) ?? undefined,
    order: (v['order'] as number) ?? i,
  }));

  return {
    profile,
    skills,
    educations,
    experiences,
    projects,
    publications,
    licenses,
    volunteerExperiences,
    personalStories: [],
    organizations: [],
  };
}

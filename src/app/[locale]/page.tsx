/**
 * HomePage — Data Science Portfolio entry point.
 * Uses Firebase portfolio data when available, falls back to i18n content.
 * Data Science theme with FadeIn/StaggerContainer animations.
 */

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  HeroSection,
  ProfileSection,
  ExperienceTimeline,
  ProjectsSection,
  VolunteerSection,
  PublicationsSection,
  ContactSection,
} from '@/components/sections';
import { fetchPortfolioData } from '@/lib/portfolio-adapter';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.meta' });

  const portfolio = await fetchPortfolioData().catch(() => null);
  const profile = portfolio?.data?.profile ?? null;

  const defaultTitle = profile?.name
    ? `${profile.name} — Data Science Portfolio`
    : t('title');

  const defaultDescription = profile?.shortBio ?? t('description');

  return {
    title: {
      template: `%s | ${profile?.name ?? 'Data Science'} Portal`,
      default: defaultTitle,
    },
    description: defaultDescription,
    metadataBase: new URL(process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000'),
  };
}

export default async function HomePage() {
  const portfolio = await fetchPortfolioData().catch(() => null);
  const profile = portfolio?.data?.profile ?? null;

  return (
    <>
      <Header profileName={profile?.name} />
      <main>
        {/* Hero — Data Science themed with dynamic profile */}
        <HeroSection />

        {/* Profile — skills, bio, expertise */}
        <ProfileSection />

        {/* Experience — vertical timeline */}
        <ExperienceTimeline />

        {/* Projects — data science project grid */}
        <ProjectsSection />

        {/* Volunteer — community involvement */}
        <VolunteerSection />

        {/* Publications — research & presentations */}
        <PublicationsSection />

        {/* Contact — reach out */}
        <ContactSection />
      </main>
      <Footer profileName={profile?.name} />
    </>
  );
}

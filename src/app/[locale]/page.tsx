import { HeroSection, SkillsSection, ExperienceSection, ProjectsSection, EducationSection, ContactSection } from '@/components/portfolio';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { fetchPortfolioData } from '@/lib/portfolio-adapter';

export default async function HomePage() {
  const portfolio = await fetchPortfolioData();
  const profile = portfolio.data?.profile ?? null;
  const skills = portfolio.data?.skills ?? [];
  const experiences = portfolio.data?.experiences ?? [];
  const projects = portfolio.data?.projects ?? [];
  const education = portfolio.data?.education ?? [];

  return (
    <>
      <Header profileName={profile?.name} />
      <main>
        <HeroSection profile={profile} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <EducationSection education={education} />
        <ContactSection profile={profile} />
      </main>
      <Footer profileName={profile?.name} />
    </>
  );
}

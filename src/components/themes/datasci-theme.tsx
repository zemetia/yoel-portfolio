import { Hero } from '@/components/foundation/Hero';
import { NavHeader } from '@/components/foundation/NavHeader';
import { ProfileSection } from '@/components/foundation/ProfileSection';
import { ProjectsSection } from '@/components/foundation/ProjectsSection';
import { VolunteerSection } from '@/components/foundation/VolunteerSection';
import { PublicationsSection } from '@/components/foundation/PublicationsSection';
import { ExperienceTimeline } from '@/components/foundation/ExperienceTimeline';
import { ContactSection } from '@/components/foundation/ContactSection';
import type { PortfolioData } from '@/types/zemetia-portfolio';

export function DataSciTheme({
  profile,
  projects,
  experiences,
  publications,
  licenses,
  skills,
  volunteerExperiences,
  educations
}: PortfolioData) {
  return (
    <div className="min-h-screen bg-tech-bg text-tech-primary font-sans selection:bg-tech-accent selection:text-white">
      <NavHeader name={profile.name} />

      <Hero
        name={profile.name}
        subtitle={profile.heroSubtitle}
        sequences={profile.heroSequences}
      />

      <div className="mx-auto max-w-desktop w-full px-page-margin">
        <span id="about" className="sr-only" />
        <ProfileSection
          profile={profile}
          projects={projects}
          experiences={experiences}
          publications={publications}
          licenses={licenses}
          skills={skills}
          educations={educations}
        />

        <ProjectsSection projects={projects} />
      </div>

      <div id="experience">
        <ExperienceTimeline experiences={experiences} />
      </div>

      <div className="bg-tech-border/10 w-full">
        <div className="mx-auto max-w-desktop w-full px-page-margin">
          <VolunteerSection volunteerExperiences={volunteerExperiences} />
        </div>
      </div>

      <div id="publications" className="mx-auto max-w-desktop w-full px-page-margin">
        <PublicationsSection publications={publications} />
      </div>

      <ContactSection profile={profile} />
    </div>
  );
}

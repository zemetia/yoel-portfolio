import type { Metadata } from 'next';

import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { fetchPortfolioData } from '@/lib/portfolio-adapter';

export const metadata: Metadata = {
  title: 'About',
};

export default async function AboutPage() {
  const portfolio = await fetchPortfolioData();
  const profile = portfolio.data?.profile ?? null;
  const skills = portfolio.data?.skills ?? [];
  const education = portfolio.data?.education ?? [];

  return (
    <>
      <Header profileName={profile?.name} />
      <main className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <Typography variant="h1" className="mb-4">
            About {profile?.name ?? 'Me'}
          </Typography>

          {profile ? (
            <>
              <Typography variant="lead" className="mb-12 text-foreground-muted">
                {profile.tagline}
              </Typography>

              {/* Bio */}
              <div className="mb-12 space-y-4">
                {profile.bio.split('\n\n').map((paragraph: string, i: number) => (
                  <Typography key={i} variant="p" className="text-foreground-muted leading-relaxed">
                    {paragraph}
                  </Typography>
                ))}
              </div>

              {/* Quick facts */}
              <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-border bg-surface p-4">
                  <p className="text-xs text-foreground-subtle mb-1">Location</p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <p className="text-xs text-foreground-subtle mb-1">Status</p>
                  <p className="text-sm font-medium">
                    {profile.available ? 'Open to opportunities' : 'Portfolio'}
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <p className="text-xs text-foreground-subtle mb-1">Skills</p>
                  <p className="text-sm font-medium">{skills.length} technologies</p>
                </div>
              </div>

              {/* Skills summary */}
              {skills.length > 0 && (
                <div className="mb-12">
                  <Typography variant="h2" className="mb-4 text-xl">
                    Technologies
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill: { id: string; name: string }) => (
                      <Badge key={skill.id} variant="outline">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {education.length > 0 && (
                <div className="mb-12">
                  <Typography variant="h2" className="mb-4 text-xl">
                    Education
                  </Typography>
                  <div className="space-y-4">
                    {education.map(
                      (edu: { id: string; degree: string; major: string; school: string; period: string; gpa?: string }) => (
                        <div key={edu.id} className="rounded-lg border border-border bg-surface p-4">
                          <p className="font-semibold">{edu.degree} in {edu.major}</p>
                          <p className="text-sm text-foreground-muted">{edu.school} &middot; {edu.period}</p>
                          {edu.gpa && (
                            <p className="text-xs text-foreground-subtle mt-1">GPA: {edu.gpa}</p>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-lg border border-border bg-surface p-8 text-center">
              <Typography variant="p" className="text-foreground-muted">
                {portfolio.error
                  ? 'Configure Firebase to load portfolio data. Check your .env.local file.'
                  : 'Portfolio data not available yet.'}
              </Typography>
            </div>
          )}
        </div>
      </main>
      <Footer profileName={profile?.name} />
    </>
  );
}

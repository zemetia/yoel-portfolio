/**
 * HeroSection — profile hero with name, tagline, bio, and CTA links.
 * Server Component — renders from Firebase portfolio data.
 */

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import type { Profile } from '@/types/portfolio';

interface HeroSectionProps {
  profile: Profile | null;
}

export function HeroSection({ profile }: HeroSectionProps) {
  if (!profile) {
    return (
      <section className="container-page flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
        <Typography variant="h1" className="mb-6 max-w-3xl">
          Portfolio
        </Typography>
        <Typography variant="lead" className="mb-10 max-w-xl text-foreground-muted">
          Profile data not available. Configure Firebase to get started.
        </Typography>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: 'var(--color-primary)' }}
        />
      </div>

      {/* Avatar */}
      <div className="mb-6">
        <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20 bg-surface">
          <span className="text-3xl font-bold text-primary">
            {profile.name.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      <Badge variant="secondary" className="mb-6">
        {profile.available ? 'Open to opportunities' : 'Currently busy'}
      </Badge>

      <Typography
        variant="h1"
        className="mb-4 max-w-3xl text-balance bg-gradient-to-b from-foreground to-foreground-muted bg-clip-text text-transparent"
      >
        {profile.name}
      </Typography>

      <Typography variant="h3" className="mb-6 max-w-2xl text-foreground-muted font-normal">
        {profile.tagline}
      </Typography>

      <Typography variant="lead" className="mb-10 max-w-xl text-foreground-muted">
        {profile.shortBio}
      </Typography>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {profile.socials.github && (
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline">
              GitHub
            </Button>
          </a>
        )}
        {profile.socials.linkedin && (
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline">
              LinkedIn
            </Button>
          </a>
        )}
        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">Resume</Button>
          </a>
        )}
      </div>
    </section>
  );
}

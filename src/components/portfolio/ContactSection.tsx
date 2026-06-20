/**
 * ContactSection — contact CTA with email and social links.
 * Server Component.
 */

import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import type { Profile } from '@/types/portfolio';

interface ContactSectionProps {
  profile: Profile | null;
}

const SOCIAL_ICONS: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  youtube: 'YouTube',
  email: 'Email',
  website: 'Website',
};

export function ContactSection({ profile }: ContactSectionProps) {
  if (!profile) return null;

  const socialEntries = Object.entries(profile.socials).filter(
    ([, value]) => !!value,
  );

  if (socialEntries.length === 0) return null;

  return (
    <section className="container-page py-24">
      <div className="mx-auto max-w-xl text-center">
        <Typography variant="h2" className="mb-3">
          Get in Touch
        </Typography>
        <Typography variant="lead" className="mb-8 text-foreground-muted">
          {profile.available
            ? 'I\'m currently open to new opportunities and collaborations.'
            : 'Feel free to reach out — I\'d love to connect.'}
        </Typography>

        <div className="flex flex-wrap justify-center gap-3">
          {socialEntries.map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant={key === 'email' ? 'primary' : 'outline'}>
                {SOCIAL_ICONS[key] ?? key.charAt(0).toUpperCase() + key.slice(1)}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

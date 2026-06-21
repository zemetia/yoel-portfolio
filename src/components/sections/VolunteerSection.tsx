'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { staggerItem, StaggerContainer } from '@/components/animations/StaggerContainer';
import { Typography } from '@/components/ui/Typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { useTranslations } from 'next-intl';

interface VolunteerEntry {
  organization: string;
  role: string;
  description: string;
}

export function VolunteerSection() {
  const t = useTranslations('volunteer');

  const entries: VolunteerEntry[] = [
    {
      organization: t.raw('entries.0.organization') || 'Data Science for Social Good',
      role: t.raw('entries.0.role') || 'Data Science Mentor',
      description:
        t.raw('entries.0.description') ||
        'Mentored aspiring data scientists through a 12-week fellowship program, guiding teams to build impactful ML solutions for nonprofit organizations.',
    },
    {
      organization: t.raw('entries.1.organization') || 'Open Source AI Community',
      role: t.raw('entries.1.role') || 'Core Contributor',
      description:
        t.raw('entries.1.description') ||
        'Contributed to open-source machine learning libraries and maintained documentation. Organized community hackathons and code-review sessions for new contributors.',
    },
    {
      organization: t.raw('entries.2.organization') || 'Local Data Meetup Group',
      role: t.raw('entries.2.role') || 'Co-Organizer & Speaker',
      description:
        t.raw('entries.2.description') ||
        'Co-organized monthly data science meetups featuring talks, workshops, and networking. Delivered presentations on practical ML pipelines and career growth in data.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-background)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-page relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <FadeIn direction="up" delay={0.1}>
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center"
            >
              {t.raw('heading') || 'Volunteer & Community'}
            </Typography>
          </FadeIn>

          {/* Section subheading */}
          <FadeIn direction="up" delay={0.15}>
            <Typography
              variant="body"
              className="text-base sm:text-lg text-center mb-14 max-w-2xl mx-auto"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              {t.raw('subheading') ||
                'Contributing to the data science community through mentorship, open source, and knowledge sharing.'}
            </Typography>
          </FadeIn>

          {/* Volunteer grid */}
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerDelay={0.08}
            delayChildren={0.2}
          >
            {entries.map((entry, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full border border-[var(--color-border)]/50 bg-[var(--color-card)]/40 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-md hover:shadow-[var(--color-primary)]/5 hover:bg-[var(--color-card)]/60">
                  <CardHeader>
                    {/* Organization */}
                    <CardTitle className="text-lg sm:text-xl font-semibold">
                      {entry.organization}
                    </CardTitle>
                    {/* Role */}
                    <span
                      className="inline-block mt-1 text-sm font-medium"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {entry.role}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {entry.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

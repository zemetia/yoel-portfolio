'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Typography } from '@/components/ui/Typography';
import { useTranslations } from 'next-intl';

const skills = [
  'Python',
  'R',
  'SQL',
  'Machine Learning',
  'Deep Learning',
  'Statistics',
  'NLP',
  'Data Visualization',
  'TensorFlow',
  'PyTorch',
  'Big Data',
  'Feature Engineering',
];

export function ProfileSection() {
  const t = useTranslations('profile');

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-background)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-page relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <FadeIn direction="up" delay={0.1}>
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center"
            >
              {t.raw('heading') || 'About Me'}
            </Typography>
          </FadeIn>

          {/* Avatar + Bio row */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-14">
            {/* Avatar placeholder */}
            <FadeIn direction="left" delay={0.2}>
              <div className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 border-2 border-[var(--color-primary)]/30 flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/10">
                <span className="text-5xl sm:text-6xl font-bold text-[var(--color-primary)]">
                  YC
                </span>
              </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn direction="right" delay={0.3}>
              <div className="text-center md:text-left">
                <Typography
                  variant="h3"
                  className="text-2xl sm:text-3xl font-semibold mb-3"
                >
                  {t.raw('name') || 'Yoel'}
                </Typography>
                <Typography
                  variant="p"
                  className="text-base sm:text-lg leading-relaxed max-w-2xl"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  {t.raw('bio') ||
                    'Data Scientist with a passion for turning raw data into meaningful insights. Experienced in building end-to-end machine learning pipelines, statistical modeling, and data visualization. Dedicated to leveraging data-driven approaches to solve complex real-world problems and communicate findings with clarity.'}
                </Typography>
              </div>
            </FadeIn>
          </div>

          {/* Skills section heading */}
          <FadeIn direction="up" delay={0.4}>
            <Typography
              variant="h3"
              className="text-xl sm:text-2xl font-semibold mb-6 text-center"
            >
              {t.raw('skillsHeading') || 'Core Competencies'}
            </Typography>
          </FadeIn>

          {/* Skills badges */}
          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-200 hover:bg-[var(--color-primary)]/20 hover:shadow-sm hover:shadow-[var(--color-primary)]/10 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

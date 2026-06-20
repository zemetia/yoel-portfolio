'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { staggerItem, StaggerContainer } from '@/components/animations/StaggerContainer';
import { Typography } from '@/components/ui/Typography';
import { useTranslations } from 'next-intl';

interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  description: string;
}

export function ExperienceTimeline() {
  const t = useTranslations('experience');

  const experiences: ExperienceEntry[] = [
    {
      company: t.raw('entries.0.company') || 'DataCorp Analytics',
      role: t.raw('entries.0.role') || 'Senior Data Scientist',
      dates: t.raw('entries.0.dates') || 'Jan 2023 - Present',
      description:
        t.raw('entries.0.description') ||
        'Leading end-to-end machine learning projects, building predictive models, and designing data pipelines. Collaborating with cross-functional teams to deliver data-driven solutions that improve business outcomes.',
    },
    {
      company: t.raw('entries.1.company') || 'InsightLab Inc.',
      role: t.raw('entries.1.role') || 'Data Scientist',
      dates: t.raw('entries.1.dates') || 'Jun 2021 - Dec 2022',
      description:
        t.raw('entries.1.description') ||
        'Developed machine learning models for customer segmentation and churn prediction. Automated reporting dashboards using Python and SQL, reducing manual analysis time by 40%.',
    },
    {
      company: t.raw('entries.2.company') || 'Numerix Solutions',
      role: t.raw('entries.2.role') || 'Junior Data Analyst',
      dates: t.raw('entries.2.dates') || 'Mar 2020 - May 2021',
      description:
        t.raw('entries.2.description') ||
        'Performed exploratory data analysis and created visualizations to support strategic decision-making. Built statistical models to identify key business trends and growth opportunities.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-background)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
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
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <FadeIn direction="up" delay={0.1}>
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-center"
            >
              {t.raw('heading') || 'Experience'}
            </Typography>
          </FadeIn>

          {/* Timeline */}
          <StaggerContainer className="relative" staggerDelay={0.15} delayChildren={0.2}>
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)]/40 via-[var(--color-primary)]/20 to-transparent" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
                {/* Timeline dot */}
                <motion.div
                  variants={staggerItem}
                  className="relative z-10 flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)]/40 bg-[var(--color-background)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/10">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  variants={staggerItem}
                  className="flex-1 min-w-0 group"
                >
                  <div className="p-6 rounded-xl border border-[var(--color-border)]/50 bg-[var(--color-card)]/40 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-md hover:shadow-[var(--color-primary)]/5 hover:bg-[var(--color-card)]/60">
                    {/* Dates badge */}
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/8 text-[var(--color-primary)] mb-3">
                      {exp.dates}
                    </span>

                    <Typography
                      variant="h3"
                      className="text-xl sm:text-2xl font-semibold mb-1"
                    >
                      {exp.role}
                    </Typography>

                    <Typography
                      variant="body"
                      className="text-sm font-medium mb-3"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {exp.company}
                    </Typography>

                    <Typography
                      variant="body"
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {exp.description}
                    </Typography>
                  </div>
                </motion.div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

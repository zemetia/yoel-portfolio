'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { staggerItem, StaggerContainer } from '@/components/animations/StaggerContainer';
import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { useTranslations } from 'next-intl';

interface PublicationEntry {
  title: string;
  venue: string;
  year: string;
  type: 'Conference' | 'Journal' | 'Workshop';
}

export function PublicationsSection() {
  const t = useTranslations('publications');

  const publications: PublicationEntry[] = [
    {
      title:
        t.raw('entries.0.title') ||
        'Deep Learning Approaches for Time-Series Forecasting in Financial Markets',
      venue:
        t.raw('entries.0.venue') ||
        'International Conference on Machine Learning (ICML)',
      year: t.raw('entries.0.year') || '2024',
      type: t.raw('entries.0.type') || 'Conference',
    },
    {
      title:
        t.raw('entries.1.title') ||
        'Interpretable AI: A Survey of Explainability Methods for Black-Box Models',
      venue:
        t.raw('entries.1.venue') ||
        'Journal of Artificial Intelligence Research',
      year: t.raw('entries.1.year') || '2023',
      type: t.raw('entries.1.type') || 'Journal',
    },
    {
      title:
        t.raw('entries.2.title') ||
        'Efficient Feature Engineering Pipelines for High-Dimensional Healthcare Data',
      venue:
        t.raw('entries.2.venue') ||
        'Workshop on Data Science for Healthcare (NeurIPS)',
      year: t.raw('entries.2.year') || '2023',
      type: t.raw('entries.2.type') || 'Workshop',
    },
    {
      title:
        t.raw('entries.3.title') ||
        'Transfer Learning for Low-Resource Natural Language Processing Tasks',
      venue:
        t.raw('entries.3.venue') ||
        'Annual Meeting of the Association for Computational Linguistics (ACL)',
      year: t.raw('entries.3.year') || '2022',
      type: t.raw('entries.3.type') || 'Conference',
    },
    {
      title:
        t.raw('entries.4.title') ||
        'Scalable Anomaly Detection in Real-Time Streaming Data Using Ensemble Methods',
      venue:
        t.raw('entries.4.venue') ||
        'IEEE Transactions on Knowledge and Data Engineering',
      year: t.raw('entries.4.year') || '2022',
      type: t.raw('entries.4.type') || 'Journal',
    },
  ];

  const typeStyles: Record<string, string> = {
    Conference:
      'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/12 text-[var(--color-primary)]',
    Journal:
      'border-[var(--color-accent)]/30 bg-[var(--color-accent)]/12 text-[var(--color-accent)]',
    Workshop:
      'border-[var(--color-muted-foreground)]/30 bg-[var(--color-muted-foreground)]/12 text-[var(--color-muted-foreground)]',
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-background)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
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
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <FadeIn direction="up" delay={0.1}>
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center"
            >
              {t.raw('heading') || 'Publications & Presentations'}
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
                'Selected research papers and talks presented at conferences, journals, and workshops.'}
            </Typography>
          </FadeIn>

          {/* Publications list */}
          <StaggerContainer
            className="space-y-0"
            staggerDelay={0.1}
            delayChildren={0.2}
          >
            {publications.map((pub, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="py-6 group">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                    {/* Type badge */}
                    <div className="flex-shrink-0">
                      <Badge
                        className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${typeStyles[pub.type] || typeStyles.Conference}`}
                      >
                        {pub.type}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <Typography
                        variant="h3"
                        className="text-lg sm:text-xl font-semibold mb-1.5 leading-snug"
                      >
                        {pub.title}
                      </Typography>

                      <Typography
                        variant="body"
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--color-muted-foreground)' }}
                      >
                        {pub.venue}
                      </Typography>
                    </div>

                    {/* Year */}
                    <div className="flex-shrink-0">
                      <span
                        className="inline-block text-sm font-mono font-medium"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {pub.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider between entries */}
                {index < publications.length - 1 && (
                  <div
                    className="w-full h-px"
                    style={{
                      background:
                        'linear-gradient(to right, transparent, var(--color-border), transparent)',
                      opacity: 0.4,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const badges = [
  'Python',
  'Machine Learning',
  'Data Analysis',
  'SQL',
  'Deep Learning',
  'Statistics',
  'TensorFlow',
  'Visualization',
];

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--color-background)] via-[var(--color-primary)]/5 to-[var(--color-background)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-[var(--color-primary)]/5 blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-page relative z-10 w-full py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badges */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Name / Greeting */}
          <FadeIn direction="up" delay={0.2}>
            <Typography variant="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-center lg:text-left">
              {t.raw('name') || 'Yoel'}
            </Typography>
          </FadeIn>

          {/* Title */}
          <FadeIn direction="up" delay={0.3}>
            <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left" style={{ color: 'var(--color-primary)' }}>
              {t.raw('title') || 'Data Scientist'}
            </Typography>
          </FadeIn>

          {/* Tagline */}
          <FadeIn direction="up" delay={0.4}>
            <Typography variant="body" className="text-base sm:text-lg max-w-2xl mb-10 text-center lg:text-left leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
              {t.raw('tagline') || 'Turning complex data into actionable insights. Passionate about machine learning, statistical modeling, and data-driven decision making.'}
            </Typography>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/projects" passHref legacyBehavior>
                <Button asChild>
                  <a className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90 hover:shadow-lg hover:shadow-[var(--color-primary)]/25">
                    {t.raw('ctaProjects') || 'View Projects'}
                  </a>
                </Button>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Button asChild variant="outline">
                  <a className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200 border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-accent)] hover:border-[var(--color-primary)]/50">
                    {t.raw('ctaContact') || 'Get in Touch'}
                  </a>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeIn direction="none" delay={1.0}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest uppercase opacity-50" style={{ color: 'var(--color-muted-foreground)' }}>
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-[var(--color-muted-foreground)]/30 flex justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-[var(--color-primary)] animate-bounce" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

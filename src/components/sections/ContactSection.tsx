'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Typography } from '@/components/ui/Typography';
import { useTranslations } from 'next-intl';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:yoel@example.com',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yoel',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yoel',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-background)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-[250px] h-[250px] rounded-full bg-[var(--color-primary)]/5 blur-2xl" />
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
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <FadeIn direction="up" delay={0.1}>
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center"
            >
              {t.raw('heading') || 'Get in Touch'}
            </Typography>
          </FadeIn>

          {/* Section description */}
          <FadeIn direction="up" delay={0.15}>
            <Typography
              variant="p"
              className="text-base sm:text-lg text-center mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              {t.raw('description') ||
                'Have a question, project idea, or just want to say hi? Feel free to reach out — I am always open to interesting conversations and collaborations.'}
            </Typography>
          </FadeIn>

          {/* Contact card */}
          <FadeIn direction="up" delay={0.25}>
            <div className="rounded-xl border border-[var(--color-border)]/50 bg-[var(--color-card)]/40 backdrop-blur-sm p-8 sm:p-10 shadow-lg shadow-[var(--color-primary)]/5">
              <div className="flex flex-col gap-6">
                {contactLinks.map((link, index) => (
                  <FadeIn key={link.label} direction="up" delay={0.3 + index * 0.1}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-[var(--color-accent)] hover:border-[var(--color-primary)]/30 border border-transparent"
                    >
                      {/* Icon container */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] transition-all duration-200 group-hover:bg-[var(--color-primary)]/20 group-hover:scale-105">
                        {link.icon}
                      </div>

                      {/* Label + Value */}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>
                          {link.label}
                        </span>
                        <span className="text-base font-semibold text-[var(--color-foreground)] break-all transition-all duration-200 group-hover:text-[var(--color-primary)]">
                          {link.href.replace('mailto:', '').replace('https://', '')}
                        </span>
                      </div>

                      {/* External link indicator */}
                      {link.href.startsWith('http') && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-60 transition-opacity duration-200"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                      )}
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Bottom CTA */}
          <FadeIn direction="up" delay={0.7}>
            <div className="mt-10 text-center">
              <Typography
                variant="small"
                className="text-sm"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                {t.raw('footer') || 'I typically respond within 24 hours.'}
              </Typography>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

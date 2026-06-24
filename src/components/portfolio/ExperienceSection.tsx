/**
 * ExperienceSection — timeline of work experience.
 * Server Component.
 */

import { Badge } from '@/components/ui/Badge';
import { Typography } from '@/components/ui/Typography';
import type { Experience } from '@/types/portfolio';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section className="container-page py-24">
      <div className="mb-12 text-center">
        <Typography variant="h2" className="mb-3">
          Experience
        </Typography>
        <Typography variant="lead" className="text-foreground-muted">
          Where I&apos;ve worked and what I&apos;ve built
        </Typography>
      </div>

      <div className="mx-auto max-w-3xl">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline line */}
            {idx < experiences.length - 1 && (
              <div
                className="absolute left-[11px] top-3 bottom-0 w-px bg-border"
                aria-hidden="true"
              />
            )}
            {/* Timeline dot */}
            <div
              className="absolute left-0 top-[6px] h-6 w-6 rounded-full border-2 border-primary bg-background"
              aria-hidden="true"
            >
              <div className="m-[3px] h-[14px] w-[14px] rounded-full bg-primary" />
            </div>

            <div>
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Typography variant="h3" className="text-lg font-semibold">
                  {exp.title}
                </Typography>
                <span className="text-sm text-foreground-muted">
                  @ {exp.company}
                </span>
              </div>

              <p className="mb-2 text-xs text-foreground-subtle">
                {exp.period}
                {exp.location ? ` · ${exp.location}` : ''}
              </p>

              <p className="mb-3 text-sm text-foreground-muted leading-relaxed">
                {exp.description}
              </p>

              {exp.highlights.length > 0 && (
                <ul className="mb-3 space-y-1">
                  {exp.highlights.map((hl, i) => (
                    <li
                      key={i}
                      className="ml-4 list-disc text-sm text-foreground-muted"
                    >
                      {hl}
                    </li>
                  ))}
                </ul>
              )}

              {exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

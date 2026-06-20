/**
 * EducationSection — education and academic background.
 * Server Component.
 */

import { Typography } from '@/components/ui/Typography';
import type { Education } from '@/types/portfolio';

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) {
    return null;
  }

  return (
    <section className="container-page py-24">
      <div className="mb-12 text-center">
        <Typography variant="h2" className="mb-3">
          Education
        </Typography>
        <Typography variant="lead" className="text-foreground-muted">
          Academic background
        </Typography>
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <Typography variant="h3" className="mb-1 text-lg font-semibold">
              {edu.degree} in {edu.major}
            </Typography>
            <p className="mb-1 text-sm text-foreground-muted">
              {edu.school}
            </p>
            <p className="mb-3 text-xs text-foreground-subtle">
              {edu.period}
              {edu.gpa ? ` · GPA: ${edu.gpa}` : ''}
            </p>
            {edu.achievements.length > 0 && (
              <ul className="space-y-1">
                {edu.achievements.map((ach, i) => (
                  <li
                    key={i}
                    className="ml-4 list-disc text-sm text-foreground-muted"
                  >
                    {ach}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

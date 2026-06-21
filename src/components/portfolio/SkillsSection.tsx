/**
 * SkillsSection — grouped skill badges by category.
 * Server Component.
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import type { Skill } from '@/types/portfolio';

interface SkillsSectionProps {
  skills: Skill[];
}

const CATEGORY_LABELS: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps & Infrastructure',
  design: 'Design',
  ai: 'AI & Machine Learning',
  other: 'Other',
};

const LEVEL_COLORS: Record<string, string> = {
  beginner: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  intermediate: 'bg-green-500/10 text-green-400 border-green-500/20',
  advanced: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  expert: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) {
    return null;
  }

  // Group skills by category
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category || 'other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  const categories = Object.entries(grouped);

  return (
    <section className="container-page py-24">
      <div className="mb-12 text-center">
        <Typography variant="h2" className="mb-3">
          Skills
        </Typography>
        <Typography variant="lead" className="text-foreground-muted">
          Technologies and tools I work with
        </Typography>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(([category, catSkills]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-wider text-foreground-muted">
                {CATEGORY_LABELS[category] ?? category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                      LEVEL_COLORS[skill.level] ?? LEVEL_COLORS.intermediate
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

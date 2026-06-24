/**
 * ProjectsSection — featured and recent projects grid.
 * Server Component.
 */

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import type { Project } from '@/types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) {
    return null;
  }

  // Featured first, then sorted by order
  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.order - b.order;
  });

  return (
    <section className="container-page py-24">
      <div className="mb-12 text-center">
        <Typography variant="h2" className="mb-3">
          Projects
        </Typography>
        <Typography variant="lead" className="text-foreground-muted">
          Things I&apos;ve built
        </Typography>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project) => (
          <Card
            key={project.id}
            className={`flex flex-col transition-shadow hover:shadow-lg ${
              project.featured ? 'border-primary/30' : ''
            }`}
          >
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                {project.featured && (
                  <Badge variant="default" className="text-[10px]">
                    Featured
                  </Badge>
                )}
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {(project.link || project.github) && (
              <CardFooter className="gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      Live
                    </Button>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="ghost">
                      Source
                    </Button>
                  </a>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

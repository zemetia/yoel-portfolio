"use client"

import { ExpandableCarouselCard } from "@/components/ui/expandable-carousel-card"
import { InfiniteCarousel } from "@/components/ui/infinite-carousel"
import { Project } from "@/types/zemetia-portfolio"
import { SectionHeading } from "./SectionHeading"

interface ProjectsSectionProps {
  projects: Project[]
}

const TYPING_WORDS = ["Projects", "Businesses", "Crafting", "Architecting"];

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="relative py-32 flex flex-col gap-12 overflow-hidden bg-transparent transition-colors">

      <SectionHeading words={TYPING_WORDS} />

      {/* Top Carousel - Moving Right */}
      <div className="w-full relative z-10">
         <InfiniteCarousel direction="right" speed={0.5} pauseOnHover={true}>
            {projects.map((project, i) => (
                <ExpandableCarouselCard
                    key={`top-${project.id || i}`}
                    i={i}
                    title={project.title}
                    description={project.description}
                    image={project.images?.[0]}
                    content={<ProjectContent project={project} />}
                    className="w-[350px] h-[380px]"
                />
            ))}
         </InfiniteCarousel>
      </div>

      {/* Bottom Carousel - Moving Left */}
      <div className="w-full relative z-10">
         <InfiniteCarousel direction="left" speed={0.8} pauseOnHover={true}>
            {projects.map((project, i) => (
                <ExpandableCarouselCard
                    key={`bottom-${project.id || i}`}
                    i={i}
                    title={project.title}
                    description={project.description}
                    image={project.images?.[0]}
                    content={<ProjectContent project={project} />}
                    className="w-[350px] h-[380px]"
                />
            ))}
         </InfiniteCarousel>
      </div>

    </section>
  )
}

function ProjectContent({ project }: { project: Project }) {
    return (
        <div className="space-y-4">
            <p className="text-neutral-300 text-lg leading-relaxed">
                {project.description}
            </p>
            {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                         <span key={tag} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-400 border border-neutral-700">
                             {tag}
                         </span>
                    ))}
                </div>
            )}
             {project.projectUrl && (
                <div className="mt-6">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-tech-primary hover:text-white transition-colors">
                        View Project &rarr;
                    </a>
                </div>
            )}
        </div>
    )
}

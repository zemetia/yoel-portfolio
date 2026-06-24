"use client"

import { ExpandableCarouselCard } from "@/components/ui/expandable-carousel-card"
import { Publication } from "@/types/zemetia-portfolio"
import { SectionHeading } from "./SectionHeading"
import { Book, Link as LinkIcon } from "lucide-react"

interface PublicationsSectionProps {
  publications: Publication[]
}

const TYPING_WORDS = ["Publications", "Journal", "Researching", "Academics"];

export function PublicationsSection({ publications }: PublicationsSectionProps) {
  if (!publications || publications.length === 0) return null;

  return (
    <section className="relative w-full min-h-screen py-24 flex flex-col gap-12 overflow-hidden bg-transparent transition-colors">
      <SectionHeading words={TYPING_WORDS} />
      
      <div className="flex flex-col gap-6 w-full mx-auto px-4">
         {publications.map((pub, i) => (
             <ExpandableCarouselCard
                 key={pub.id || i}
                 i={i}
                 title={pub.title}
                 description={`${pub.publisher} (${pub.year})`}
                 content={<PublicationContent publication={pub} />}
                 className="bg-card/50 border-border/60 hover:border-tech-accent/50 transition-colors w-full"
                 headerContent={
                    <div className="flex flex-col gap-2">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 shrink-0">
                                <Book className="h-6 w-6 text-tech-accent" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-xl font-bold text-neutral-100 truncate">{pub.title}</h3>
                                <p className="text-neutral-400 text-sm mt-1 truncate">{pub.authors}</p>
                            </div>
                        </div>
                        <div className="pl-10 text-sm text-neutral-300 space-y-1">
                             <p>Published in: <span className="font-semibold text-neutral-200">{pub.publisher}</span>, {pub.year}</p>
                             {pub.doi && <p className="text-xs text-neutral-500">DOI: {pub.doi}</p>}
                        </div>
                        {pub.link && (
                            <div className="pl-10 mt-2">
                                <a href={pub.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center p-0 text-tech-accent hover:text-white text-sm font-medium transition-colors">
                                    View Publication <LinkIcon className="ml-2 h-3 w-3" />
                                </a>
                            </div>
                        )}
                    </div>
                 }
             />
         ))}
      </div>
    </section>
  )
}

function PublicationContent({ publication }: { publication: Publication }) {
    return (
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Book className="h-6 w-6 text-tech-accent" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-neutral-100">{publication.title}</h3>
                   <p className="text-neutral-400 mt-1">{publication.authors}</p>
                </div>
            </div>

            <div className="grid gap-2 p-0">
              <p className="text-neutral-300"><span className="font-semibold text-neutral-200">Published in:</span> {publication.publisher}</p>
              <p className="text-neutral-300"><span className="font-semibold text-neutral-200">Type:</span> {publication.publicationType}</p>
              <p className="text-neutral-300"><span className="font-semibold text-neutral-200">Year:</span> {publication.year}</p>
              {publication.doi && <p className="text-neutral-300"><span className="font-semibold text-neutral-200">DOI:</span> {publication.doi}</p>}
            </div>

            {publication.link && (
                <div className="pt-4">
                    <a href={publication.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tech-border text-tech-primary hover:border-tech-accent hover:text-tech-accent text-sm font-medium transition-colors">
                        View Publication <LinkIcon className="h-4 w-4" />
                    </a>
                </div>
            )}
        </div>
    )
}

"use client"

import { ExpandableCarouselCard } from "@/components/ui/expandable-carousel-card"
import { VolunteerExperience } from "@/types/zemetia-portfolio"
import { SectionHeading } from "./SectionHeading"
import { motion } from "framer-motion"
import { HeartHandshake } from "lucide-react"

interface VolunteerSectionProps {
  volunteerExperiences: VolunteerExperience[]
}

const TYPING_WORDS = ["Volunteer", "Organization", "Helping"];

export function VolunteerSection({ volunteerExperiences }: VolunteerSectionProps) {
  if (!volunteerExperiences || volunteerExperiences.length === 0) return null;

  return (
    <section className="relative w-full min-h-screen py-24 flex flex-col gap-12 overflow-hidden transition-colors">
      <SectionHeading words={TYPING_WORDS} />
      
      <motion.div 
        className="flex flex-col gap-6 w-full mx-auto px-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
         {volunteerExperiences.map((exp, i) => (
             <ExpandableCarouselCard
                 key={exp.id || i}
                 i={i}
                 title={exp.role}
                 description={exp.organization}
                 content={<VolunteerContent experience={exp} />}
                 className="bg-transparent border-none hover:bg-neutral-900/50 transition-colors w-full"
                 headerContent={
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-tech-accent mb-1">
                            <HeartHandshake className="w-5 h-5 shrink-0" />
                            <span className="text-sm font-semibold truncate">{exp.organization}</span>
                        </div>
                        <h3 className="text-lg font-bold text-neutral-100">{exp.role}</h3>
                        <p className="text-xs text-neutral-500">{exp.startDate} - {exp.endDate}</p>
                        <p className="text-sm text-neutral-400 line-clamp-2 mt-2">{exp.description}</p>
                    </div>
                 }
             />
         ))}
      </motion.div>
    </section>
  )
}

function VolunteerContent({ experience }: { experience: VolunteerExperience }) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-tech-accent mb-2">
                <HeartHandshake className="w-5 h-5" />
                <span className="text-sm font-semibold">{experience.organization}</span>
            </div>
            
            <p className="text-neutral-400 text-sm">
                {experience.startDate} - {experience.endDate} | {experience.location}
            </p>

            <p className="text-neutral-300 text-lg leading-relaxed whitespace-pre-line">
                {experience.description}
            </p>
        </div>
    )
}

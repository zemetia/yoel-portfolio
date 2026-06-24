"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Grid, Col } from './LayoutWrapper';
import { H2, Body, Meta } from './Typography';
import type { Profile, Project, Experience, Publication, License, Skill, Education } from '@/types/zemetia-portfolio';

interface ProfileSectionProps {
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  publications: Publication[];
  licenses: License[];
  skills: Skill[];
  educations: Education[];
}

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="group">
      <div className="font-heading text-5xl md:text-6xl font-bold text-tech-accent mb-1 tabular-nums">
        {displayValue}
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-tech-secondary/70 group-hover:text-tech-primary transition-colors">
        {label}
      </div>
    </div>
  );
}

function ContentBlock({ title, children, delay }: { title: string; children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className="mb-12 last:mb-0"
    >
      <Meta className="block mb-6 text-tech-accent">{title}</Meta>
      {children}
    </motion.div>
  );
}

export function ProfileSection({
  profile,
  projects,
  experiences,
  publications,
  licenses,
  skills,
  educations
}: ProfileSectionProps) {

  const groupedSkills = skills.reduce((acc, skill) => {
    acc[skill.category] = skill.list.split(',').map(s => s.trim());
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section className="py-24 md:py-32 border-t border-tech-border/30 bg-tech-bg relative">
      <Grid>
        {/* Left Column: Portrait & Identity */}
        <Col span={12} className="lg:col-span-5 mb-16 lg:mb-0">
            <div className="lg:sticky lg:top-0 lg:pt-3">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                     {profile.photoUrl && (
                        <div className="relative w-full max-w-sm aspect-[3/4] mb-8 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                             <Image
                                src={profile.photoUrl}
                                alt={profile.name}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    )}

                    <H2 className="mb-4">{profile.name}</H2>
                    <Meta className="block text-tech-secondary">
                        {profile.email}
                    </Meta>
                </motion.div>
            </div>
        </Col>

        {/* Right Column: Metrics & Content */}
        <Col span={12} className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-24">

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-b border-tech-border/30 pb-16">
                    <Counter value={projects.length} label="Projects" />
                    <Counter value={experiences.length} label="Roles" />
                    <Counter value={publications.length} label="Pubs" />
                    <Counter value={licenses.length} label="Licenses" />
                </div>

                {/* About */}
                <ContentBlock title="// ABOUT" delay={0.1}>
                    <Body className="whitespace-pre-line text-lg md:text-xl leading-relaxed">
                        {profile.bio}
                    </Body>
                </ContentBlock>

                {/* Skills */}
                <ContentBlock title="// SKILLS" delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(groupedSkills).map(([category, skillList]) => (
                            <div key={category}>
                                <div className="font-heading text-lg text-tech-primary mb-3 font-semibold">
                                    {category}
                                </div>
                                <motion.div
                                  className="flex flex-wrap gap-x-3 gap-y-2"
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, margin: "-10%" }}
                                  variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                      opacity: 1,
                                      transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.1
                                      }
                                    }
                                  }}
                                >
                                    {skillList.map(skill => (
                                        <motion.span
                                          key={skill}
                                          className="font-mono text-sm text-tech-secondary inline-block"
                                          variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                                          }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </ContentBlock>

                {/* Education */}
                <ContentBlock title="// EDUCATION" delay={0.3}>
                     <div className="space-y-8">
                        {educations.map((edu) => (
                          <div key={edu.id} className="group">
                             <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                                <h4 className="font-heading text-xl text-tech-primary font-semibold group-hover:text-tech-accent transition-colors">
                                    {edu.degree}
                                </h4>
                                <span className="font-mono text-sm text-tech-secondary/60">
                                    {edu.startDate} — {edu.endDate}
                                </span>
                             </div>
                             <div className="text-tech-secondary">
                                {edu.institution}
                             </div>
                          </div>
                        ))}
                      </div>
                </ContentBlock>

            </div>
        </Col>
      </Grid>
    </section>
  );
}

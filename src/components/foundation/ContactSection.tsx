"use client";

import { useEffect } from 'react';
import { Grid, Col } from './LayoutWrapper';
import { H2, Body } from './Typography';
import { Mail, Phone, MapPin, Send, ExternalLink, GitFork } from 'lucide-react';
import type { Profile } from '@/types/zemetia-portfolio';

interface ContactSectionProps {
  profile: Profile;
}

export function ContactSection({ profile }: ContactSectionProps) {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 border-t border-tech-border/30 bg-tech-bg relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="mx-auto max-w-desktop w-full px-page-margin">
        <Grid className="items-center">
            {/* Left Column: Form */}
            <Col span={12} className="lg:col-span-7 mb-16 lg:mb-0">
                <div
                    className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] bg-neutral-900/40 p-8 md:p-12 rounded-3xl border border-white/5 relative z-10 backdrop-blur-sm"
                >
                    <H2 className="mb-4 text-3xl md:text-4xl">Let&apos;s talk</H2>
                    <Body className="mb-10 max-w-lg text-base md:text-lg opacity-80">
                        To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
                    </Body>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase tracking-wider text-tech-secondary/70 ml-1">Your Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-tech-primary focus:border-tech-accent focus:ring-1 focus:ring-tech-accent/50 outline-none transition-all placeholder:text-white/20 focus:scale-[1.01]"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase tracking-wider text-tech-secondary/70 ml-1">Your Email</label>
                            <input 
                                type="email" 
                                className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-tech-primary focus:border-tech-accent focus:ring-1 focus:ring-tech-accent/50 outline-none transition-all placeholder:text-white/20 focus:scale-[1.01]"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase tracking-wider text-tech-secondary/70 ml-1">Your Message</label>
                            <textarea 
                                rows={4} 
                                className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-tech-primary focus:border-tech-accent focus:ring-1 focus:ring-tech-accent/50 outline-none transition-all placeholder:text-white/20 resize-none focus:scale-[1.01]"
                                placeholder="Type something if you want..." 
                            />
                        </div>

                        <button
                            className="bg-tech-accent text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-tech-accent/90 transition-all shadow-lg shadow-tech-accent/20 w-auto mt-4 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </button>
                    </form>
                </div>
            </Col>

            {/* Right Column: Info & Decorations */}
            <Col span={12} className="lg:col-span-5 lg:pl-12">
                <div
                    className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] relative"
                >
                    {/* Floating Elements - Abstract representation of the illustration */}
                    <div className="relative h-64 mb-12 hidden md:block select-none pointer-events-none">
                        <div 
                            className="absolute top-0 right-10 z-0 animate-[bounce_6s_infinite] ease-in-out"
                        >
                           <div className="w-32 h-32 rounded-full border border-tech-accent/20 bg-tech-accent/5 backdrop-blur-xl flex items-center justify-center">
                                <Mail className="w-10 h-10 text-tech-accent/80" />
                           </div>
                        </div>
                        
                        <div 
                            className="absolute bottom-0 left-10 z-10 animate-[bounce_7s_infinite] ease-in-out delay-1000"
                        >
                            <div className="w-24 h-24 rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-xl flex items-center justify-center rotate-12">
                                <div className="space-y-2 w-12 opacity-50">
                                    <div className="h-2 w-full bg-purple-400/40 rounded-full" />
                                    <div className="h-2 w-3/4 bg-purple-400/40 rounded-full" />
                                    <div className="h-2 w-full bg-purple-400/40 rounded-full" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                    </div>

                    <div className="space-y-8 pl-4 border-l border-white/10">
                        {profile.address && (
                          <div className="group flex items-start gap-4 transition-colors">
                              <div className="bg-white/5 p-3 rounded-lg group-hover:bg-tech-accent/20 transition-colors">
                                  <MapPin className="w-5 h-5 text-tech-accent" />
                              </div>
                              <div>
                                  <div className="text-xs font-mono uppercase tracking-wider text-tech-secondary/50 mb-1">Location</div>
                                  <Body className="text-base text-tech-primary">{profile.address}</Body>
                              </div>
                          </div>
                        )}

                        {profile.phone && (
                          <div className="group flex items-center gap-4 transition-colors">
                              <div className="bg-white/5 p-3 rounded-lg group-hover:bg-tech-accent/20 transition-colors">
                                  <Phone className="w-5 h-5 text-tech-accent" />
                              </div>
                              <div>
                                  <div className="text-xs font-mono uppercase tracking-wider text-tech-secondary/50 mb-1">Phone</div>
                                  <Body className="text-base text-tech-primary">{profile.phone}</Body>
                              </div>
                          </div>
                        )}

                        {profile.email && (
                          <div className="group flex items-center gap-4 transition-colors">
                              <div className="bg-white/5 p-3 rounded-lg group-hover:bg-tech-accent/20 transition-colors">
                                  <Mail className="w-5 h-5 text-tech-accent" />
                              </div>
                              <div>
                                  <div className="text-xs font-mono uppercase tracking-wider text-tech-secondary/50 mb-1">Email</div>
                                  <a href={`mailto:${profile.email}`}>
                                    <Body className="text-base text-tech-primary hover:text-tech-accent transition-colors">{profile.email}</Body>
                                  </a>
                              </div>
                          </div>
                        )}
                    </div>

                    <div className="flex gap-4 mt-12 pl-4">
                        {profile.linkedin && (
                          <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-tech-secondary hover:bg-tech-accent hover:text-white transition-all border border-white/5 hover:border-tech-accent/50 hover:shadow-lg hover:shadow-tech-accent/20 hover:-translate-y-1"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {profile.github && (
                          <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-tech-secondary hover:bg-tech-accent hover:text-white transition-all border border-white/5 hover:border-tech-accent/50 hover:shadow-lg hover:shadow-tech-accent/20 hover:-translate-y-1"
                          >
                            <GitFork className="w-5 h-5" />
                          </a>
                        )}
                        {profile.email && (
                          <a
                            href={`mailto:${profile.email}`}
                            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-tech-secondary hover:bg-tech-accent hover:text-white transition-all border border-white/5 hover:border-tech-accent/50 hover:shadow-lg hover:shadow-tech-accent/20 hover:-translate-y-1"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                    </div>
                </div>
            </Col>
        </Grid>
      </div>
    </section>
  );
}

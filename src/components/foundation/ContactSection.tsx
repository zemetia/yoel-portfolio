"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, Col } from './LayoutWrapper';
import { H2, Body } from './Typography';
import { Mail, Phone, MapPin, Send, ExternalLink, Github } from 'lucide-react';
import type { Profile } from '@/types/zemetia-portfolio';

interface ContactSectionProps {
  profile: Profile;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10%' },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

export function ContactSection({ profile }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/v1/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, profileSlug: process.env['NEXT_PUBLIC_PORTFOLIO_SLUG'] ?? 'main' }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 md:py-32 border-t border-tech-border/30 bg-tech-bg relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="mx-auto max-w-desktop w-full px-page-margin">
        <Grid className="items-center">
          {/* Left Column: Form */}
          <Col span={12} className="lg:col-span-7 mb-16 lg:mb-0">
            <motion.div
              {...fadeUp(0.1)}
              className="bg-tech-border/10 p-8 md:p-12 rounded-2xl border border-tech-border/30 relative z-10 backdrop-blur-sm"
            >
              <H2 className="mb-4 text-3xl md:text-4xl">Let&apos;s talk</H2>
              <Body className="mb-10 max-w-lg text-base md:text-lg opacity-80">
                Want to work together or just say hi? Fill out the form and I&apos;ll get back to you.
              </Body>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-tech-secondary/70 ml-1">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-tech-border/40 rounded-lg p-4 text-tech-primary focus:border-tech-accent focus:ring-1 focus:ring-tech-accent/50 outline-none transition-all placeholder:text-tech-secondary/30"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-tech-secondary/70 ml-1">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-tech-border/40 rounded-lg p-4 text-tech-primary focus:border-tech-accent focus:ring-1 focus:ring-tech-accent/50 outline-none transition-all placeholder:text-tech-secondary/30"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-tech-secondary/70 ml-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-tech-border/40 rounded-lg p-4 text-tech-primary focus:border-tech-accent focus:ring-1 focus:ring-tech-accent/50 outline-none transition-all placeholder:text-tech-secondary/30 resize-none"
                    placeholder="Type something..."
                  />
                </div>

                {status === 'success' && (
                  <p className="font-mono text-sm text-green-400">Message sent — I&apos;ll be in touch soon.</p>
                )}
                {status === 'error' && (
                  <p className="font-mono text-sm text-red-400">Something went wrong. Try again or email me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-tech-accent text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-tech-accent/90 transition-all shadow-lg shadow-tech-accent/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </Col>

          {/* Right Column: Info */}
          <Col span={12} className="lg:col-span-5 lg:pl-12">
            <motion.div {...fadeUp(0.3)} className="relative">
              <div className="space-y-8 pl-4 border-l border-tech-border/30">
                {profile.address && (
                  <div className="group flex items-start gap-4">
                    <div className="bg-tech-border/20 p-3 rounded-lg group-hover:bg-tech-accent/20 transition-colors">
                      <MapPin className="w-5 h-5 text-tech-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-tech-secondary/50 mb-1">Location</div>
                      <Body className="text-base text-tech-primary">{profile.address}</Body>
                    </div>
                  </div>
                )}

                {profile.phone && (
                  <div className="group flex items-center gap-4">
                    <div className="bg-tech-border/20 p-3 rounded-lg group-hover:bg-tech-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-tech-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-tech-secondary/50 mb-1">Phone</div>
                      <Body className="text-base text-tech-primary">{profile.phone}</Body>
                    </div>
                  </div>
                )}

                {profile.email && (
                  <div className="group flex items-center gap-4">
                    <div className="bg-tech-border/20 p-3 rounded-lg group-hover:bg-tech-accent/20 transition-colors">
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
                    className="w-12 h-12 rounded-full bg-tech-border/20 flex items-center justify-center text-tech-secondary hover:bg-tech-accent hover:text-white transition-all border border-tech-border/30 hover:border-tech-accent/50 hover:shadow-lg hover:shadow-tech-accent/20 hover:-translate-y-1"
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
                    className="w-12 h-12 rounded-full bg-tech-border/20 flex items-center justify-center text-tech-secondary hover:bg-tech-accent hover:text-white transition-all border border-tech-border/30 hover:border-tech-accent/50 hover:shadow-lg hover:shadow-tech-accent/20 hover:-translate-y-1"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="w-12 h-12 rounded-full bg-tech-border/20 flex items-center justify-center text-tech-secondary hover:bg-tech-accent hover:text-white transition-all border border-tech-border/30 hover:border-tech-accent/50 hover:shadow-lg hover:shadow-tech-accent/20 hover:-translate-y-1"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          </Col>
        </Grid>
      </div>
    </section>
  );
}

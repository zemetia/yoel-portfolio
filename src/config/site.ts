/**
 * Central "company brain" — single source of truth for all SEO, GEO, and LLMs.txt.
 * Edit this file first whenever you add a page or change brand/product details.
 * Every field here propagates to: metadata, sitemap, robots.txt, structured data, llms.txt.
 *
 * NOTE: For the portfolio, this serves as fallback defaults.
 * When Firebase is configured, profile data from Firebase overrides these values.
 */

import type { MetadataRoute } from 'next';

export type SitemapChangeFreq = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

export interface PageConfig {
  path: string;
  title: string;
  description: string;
  changeFreq: SitemapChangeFreq;
  priority: number;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  company: {
    legalName: string;
    foundedYear: number;
    industry: string;
    targetAudience: string;
    problemSolved: string;
    solution: string;
    keyBenefits: string[];
    contactEmail: string;
    socialLinks: {
      twitter?: string;
      github?: string;
      linkedin?: string;
    };
  };
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    twitterHandle?: string;
    locale: string;
  };
  pages: Record<string, PageConfig>;
}

export const siteConfig: SiteConfig = {
  // ─── Core Identity ───────────────────────────────────────────────────────────
  name: 'Yoel Sitorus',
  tagline: 'Full Stack Developer & AI Agent Orchestrator',
  description:
    'Portfolio of Yoel Sitorus — Full Stack Developer building production web apps and autonomous AI agents. Founder of Zemetia Studio, Youdo POS, and Freshideas Agency.',
  url: process.env['NEXT_PUBLIC_APP_URL'] ?? 'https://yoelsitorus.com',

  // ─── Brand Assets ────────────────────────────────────────────────────────────
  ogImage: '/og.png',

  // ─── Company Details ─────────────────────────────────────────────────────────
  company: {
    legalName: 'Yoel Sitorus',
    foundedYear: 2024,
    industry: 'Software Development / AI',
    targetAudience:
      'Startups and agencies needing full-stack development, AI agent orchestration, and digital product design.',
    problemSolved:
      'Most teams struggle to ship production-quality software fast. Yoel combines full-stack engineering expertise with autonomous AI agent orchestration to deliver complex products efficiently.',
    solution:
      'Portfolio showcasing projects including Youdo POS (restaurant POS serving 2,000+ businesses), Zemetia Studio (web development agency), and Hermes Agent (multi-agent AI orchestration system).',
    keyBenefits: [
      'Full-stack Next.js development expertise',
      'AI agent orchestration and workflow automation',
      'End-to-end product delivery from concept to deployment',
      'Bilingual (EN/ID) — serves both local and international clients',
    ],
    contactEmail: 'yoel@zemetia.id',
    socialLinks: {
      github: 'https://github.com/yoelsitorus',
      linkedin: 'https://linkedin.com/in/yoelsitorus',
    },
  },

  // ─── SEO Settings ────────────────────────────────────────────────────────────
  seo: {
    titleTemplate: '%s | Yoel Sitorus',
    defaultTitle: 'Yoel Sitorus — Full Stack Developer & AI Agent Orchestrator',
    twitterHandle: '@yoelsitorus',
    locale: 'en_US',
  },

  // ─── Pages Registry ──────────────────────────────────────────────────────────
  pages: {
    home: {
      path: '/',
      title: 'Yoel Sitorus — Full Stack Developer & AI Agent Orchestrator',
      description:
        'Portfolio of Yoel Sitorus — Full Stack Developer building production web apps and autonomous AI agents. Explore projects, skills, and experience.',
      changeFreq: 'weekly',
      priority: 1.0,
    },
    about: {
      path: '/about',
      title: 'About Yoel Sitorus',
      description:
        'Learn about Yoel Sitorus — Full Stack Developer, AI Agent Orchestrator, and founder of multiple tech ventures in Indonesia.',
      changeFreq: 'monthly',
      priority: 0.8,
    },
  },
};

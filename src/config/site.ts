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
  tagline: 'Data Scientist & ML Engineer | AI Agent Orchestrator',
  description:
    'Portfolio of Yoel Sitorus — Data Scientist, ML Engineer, and AI Agent Orchestrator. Building production ML systems, NLP pipelines, and autonomous AI agents. Founder of Zemetia Studio, Youdo POS, and Freshideas Agency.',
  url: process.env['NEXT_PUBLIC_APP_URL'] ?? 'https://yoelsitorus.com',

  // ─── Brand Assets ────────────────────────────────────────────────────────────
  ogImage: '/og.png',

  // ─── Company Details ─────────────────────────────────────────────────────────
  company: {
    legalName: 'Yoel Sitorus',
    foundedYear: 2024,
    industry: 'Data Science / AI Engineering',
    targetAudience:
      'Startups and enterprises needing data science solutions, ML pipeline engineering, AI agent orchestration, and intelligent systems development.',
    problemSolved:
      'Most organizations struggle to turn raw data into production ML systems. Yoel combines data science expertise with AI engineering to build intelligent, scalable solutions that drive real business outcomes.',
    solution:
      'Data Science portfolio showcasing projects including NLP pipelines, ML-powered POS analytics, recommendation systems, real-time dashboards, and autonomous AI agents built with modern ML stacks.',
    keyBenefits: [
      'End-to-end ML pipeline engineering — from data ingestion to model deployment',
      'NLP and language AI systems for under-resourced languages',
      'Autonomous AI agents and multi-agent orchestration',
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
    defaultTitle: 'Yoel Sitorus — Data Scientist & ML Engineer',
    twitterHandle: '@yoelsitorus',
    locale: 'en_US',
  },

  // ─── Pages Registry ──────────────────────────────────────────────────────────
  pages: {
    home: {
      path: '/',
      title: 'Yoel Sitorus — Data Scientist & ML Engineer',
      description:
        'Portfolio of Yoel Sitorus — Data Scientist, ML Engineer, and AI Agent Orchestrator. Explore data science projects, ML pipelines, AI systems, and professional experience.',
      changeFreq: 'weekly',
      priority: 1.0,
    },
    about: {
      path: '/about',
      title: 'About Yoel Sitorus',
      description:
        'Learn about Yoel Sitorus — Data Scientist, ML Engineer, AI Agent Orchestrator, and founder of multiple tech ventures including Zemetia Studio, Youdo POS, and Freshideas Agency.',
      changeFreq: 'monthly',
      priority: 0.8,
    },
  },
};

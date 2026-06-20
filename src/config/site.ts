/**
 * Central "company brain" — single source of truth for all SEO, GEO, and LLMs.txt.
 * Edit this file first whenever you add a page or change brand/product details.
 * Every field here propagates to: metadata, sitemap, robots.txt, structured data, llms.txt.
 */

import type { MetadataRoute } from 'next';

export type SitemapChangeFreq = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

export interface PageConfig {
  /** URL path relative to root, e.g. '/about' */
  path: string;
  /** <title> for this page */
  title: string;
  /** Meta description — be specific: include what the visitor gains */
  description: string;
  /** Sitemap change frequency hint */
  changeFreq: SitemapChangeFreq;
  /** Sitemap priority 0.0–1.0 */
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
  /** Registry of all public pages — drives sitemap + LLMs.txt page index */
  pages: Record<string, PageConfig>;
}

export const siteConfig: SiteConfig = {
  // ─── Core Identity ───────────────────────────────────────────────────────────
  name: 'Yoel — Developer & Tech Entrepreneur',
  tagline: 'Building software that moves businesses forward — from POS systems to full-stack platforms.',
  description:
    "Yoel is a full-stack developer and tech entrepreneur based in Indonesia. Building Zemetia Studio (software house), Youdo POS (restaurant POS), and Freshideas Agency (marketing) — turning complex problems into clean, scalable solutions.",
  url: process.env['NEXT_PUBLIC_APP_URL'] ?? 'https://zemetia.sh',

  // ─── Brand Assets ────────────────────────────────────────────────────────────
  ogImage: '/og.png',

  // ─── Company Details (drives Organization schema + LLMs.txt) ─────────────────
  company: {
    legalName: 'Zemetia Studio',
    foundedYear: 2024,
    industry: 'Software Development / SaaS / Agency',
    targetAudience:
      'Restaurant owners needing modern POS systems, businesses seeking custom software solutions, and brands wanting strategic marketing.',
    problemSolved:
      'Most small-to-medium businesses in Indonesia struggle with outdated, disconnected tools — clunky POS systems, bespoke software that never ships, and marketing that doesn\'t convert.',
    solution:
      'Yoel builds end-to-end solutions — Youdo POS for modern restaurant management, Zemetia Studio for custom software, and Freshideas Agency for data-driven marketing — all backed by clean architecture and AI-augmented workflows.',
    keyBenefits: [
      'Full-stack expertise — from React/Next.js frontends to Go/Express backends and PostgreSQL',
      'Product-minded engineering — every project ships with SEO, analytics, monitoring, and documentation',
      'AI-augmented delivery — workflows optimized with AI tooling for speed without sacrificing quality',
    ],
    contactEmail: 'yoel@zemetia.sh',
    socialLinks: {
      twitter: 'https://twitter.com/zemetia',
      github: 'https://github.com/zemetia',
      linkedin: 'https://linkedin.com/in/yoel',
    },
  },

  // ─── SEO Settings ────────────────────────────────────────────────────────────
  seo: {
    titleTemplate: '%s | Yoel',
    defaultTitle: 'Yoel — Full-Stack Developer & Tech Entrepreneur',
    twitterHandle: '@zemetia',
    locale: 'en_US',
  },

  // ─── Pages Registry ──────────────────────────────────────────────────────────
  // Add a new entry here every time you create a new public page.
  // Path is locale-stripped (the sitemap helper adds locale prefixes).
  pages: {
    home: {
      path: '/',
      title: 'Yoel — Full-Stack Developer & Tech Entrepreneur',
      description:
        'Yoel is a full-stack developer building Zemetia Studio, Youdo POS, and Freshideas Agency. Turning complex problems into clean, scalable solutions.',
      changeFreq: 'weekly',
      priority: 1.0,
    },
    about: {
      path: '/about',
      title: 'About Yoel',
      description:
        'Learn about Yoel\'s journey — from coding the first line to building multiple tech businesses in Indonesia.',
      changeFreq: 'monthly',
      priority: 0.8,
    },
  },
};

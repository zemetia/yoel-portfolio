# Blueprint Index

> **AI agents — before planning any fix or feature:** identify which blueprint sections cover the affected area, read them first, then plan. Do not guess at patterns — the blueprint is the source of truth.

---

## Sections

| Section | File |
|---|---|
| **This index + hard constraints** | [INDEX.md](./INDEX.md) |
| Project structure + file locations | [STRUCTURE.md](./STRUCTURE.md) |
| Request lifecycle + integrations | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| **Middleware / rate limit / security headers** | [ARCHITECTURE/04-proxy.md](./ARCHITECTURE/04-proxy.md) |
| **Data layer: Prisma + Firestore + MinIO** | [DATA_LAYER.md](./DATA_LAYER.md) |
| Components + CVA + tests | [COMPONENTS.md](./COMPONENTS.md) |
| Design tokens + Tailwind v4 | [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) |
| Services + API client + Zod | [SERVICES.md](./SERVICES.md) |
| Zustand state + persistence | [STATE.md](./STATE.md) |
| i18n + routing + translations | [I18N.md](./I18N.md) |
| TypeScript + ESLint + anti-patterns | [BEST_PRACTICE.md](./BEST_PRACTICE.md) |
| SEO + GEO + LLMs.txt | [SEO_GEO_LLM.md](./SEO_GEO_LLM.md) |
| Knowledge system rules | [KNOWLEDGE.md](./KNOWLEDGE.md) |

---

## Stack Snapshot

| Category | Library / Tool | Version |
|---|---|---|
| Framework | Next.js | ^16.2 |
| Language | TypeScript (strict) | ^6.0 |
| Styling | Tailwind v4 | ^4.3 |
| i18n | next-intl | ^4.13 |
| Server data | TanStack Query | ^5.101 |
| Global state | Zustand | ^5.0 |
| Validation | Zod | ^4.4 |
| Toast | Sonner | ^2.0 |
| ORM | Prisma | ^6.9 (PostgreSQL) |
| Firestore | firebase-admin | ^14.0 (live data source) |
| Object storage | MinIO (`minio`) | ^8.0 |
| Animation | framer-motion | ^12.40 |
| Icons | lucide-react | ^1.17 |
| Monitoring | Sentry (`@sentry/nextjs`) | ^10 |
| Analytics | PostHog (`posthog-js`) | ^1.38 |
| Rate limiting | next-limitr | ^0.1 |
| Testing | Vitest + RTL | ^4.1 |
| Component dev | Storybook | ^10.4 |

---

## Non-Negotiables (Hard Constraints)

| # | Rule |
|---|---|
| 1 | Navigation: always `@/i18n/navigation`, never `next/navigation` |
| 2 | Server data: TanStack Query only — no `useState` for API responses |
| 3 | Colors: design tokens only — no raw hex / oklch / Tailwind color utilities |
| 4 | `npm run lint` must exit 0 (`--max-warnings 0`) |
| 5 | `'use client'` only when required (hook / event / browser API) |
| 6 | Services are plain objects — never call `fetch`/`apiClient` directly in components |
| 7 | Middleware in `src/middleware.ts` (export `middleware`); modules in `src/proxy/` — do NOT use root `proxy.ts` |
| 8 | Every public page must call `buildMetadata()` in `generateMetadata()` and render `<StructuredData>` |
| 9 | All SEO/GEO/LLMs.txt content driven by `src/config/site.ts` |
| 10 | Database access only via `src/lib/db.ts` (Prisma singleton) — never instantiate PrismaClient directly |
| 11 | Firestore access only via `firestoreService` in `src/services/firebase.ts` |
| 12 | Storage access only via functions in `src/lib/storage.ts` — server-side only (`import 'server-only'`) |
| 13 | localePrefix must be `'always'` — all routes must carry locale prefix |

---

## Pre-task Checklist

- [ ] Identify affected blueprint sections and read them
- [ ] Check `docs/knowledge/LEARN.md` for past mistakes in this area
- [ ] Confirm lint exits 0 before marking task done
- [ ] Update THIS.md / LEARN.md if a new insight or correction emerges

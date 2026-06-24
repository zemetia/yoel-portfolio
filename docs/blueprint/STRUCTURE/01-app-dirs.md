# Structure — 01: App Directories

← [STRUCTURE.md](../STRUCTURE.md) | [Blueprint INDEX](../INDEX.md) | [02 — Modules →](./02-modules.md)

---

## Root

| Path | Type | Purpose |
|---|---|---|
| [`src/`](../../../src/) | dir | All application source |
| [`messages/`](../../../messages/) | dir | i18n JSON files → [I18N.md](../I18N.md) |
| [`docs/blueprint/`](../../../docs/blueprint/) | dir | AI reference docs (this dir) |
| [`public/`](../../../public/) | dir | Static assets |
| [`prisma/`](../../../prisma/) | dir | Prisma schema + migrations → [DATA_LAYER/01-database.md](../DATA_LAYER/01-database.md) |
| [`prisma/schema.prisma`](../../../prisma/schema.prisma) | file | Canonical DB schema |
| [`prisma.config.ts`](../../../prisma.config.ts) | file | Prisma CLI config |
| [`.env.example`](../../../.env.example) | file | Env var template → copy to `.env.local` |
| [`components.json`](../../../components.json) | file | shadcn/ui CLI config → [COMPONENTS.md](../COMPONENTS.md) |
| [`next.config.ts`](../../../next.config.ts) | file | Next.js config + `withSentryConfig` wrapper |
| [`sentry.client.config.ts`](../../../sentry.client.config.ts) | file | Sentry browser init |
| [`sentry.server.config.ts`](../../../sentry.server.config.ts) | file | Sentry Node.js init |
| [`sentry.edge.config.ts`](../../../sentry.edge.config.ts) | file | Sentry Edge runtime init |
| [`tsconfig.json`](../../../tsconfig.json) | file | strict + extra flags → [BEST_PRACTICE.md](../BEST_PRACTICE.md) |
| [`vitest.config.ts`](../../../vitest.config.ts) | file | Vitest + jsdom + `@/` alias |
| [`vitest.setup.ts`](../../../vitest.setup.ts) | file | `@testing-library/jest-dom` matchers |
| [`eslint.config.mjs`](../../../eslint.config.mjs) | file | Flat config, 0-warning policy |
| [`package.json`](../../../package.json) | file | Scripts + dependencies |
| [`docker-compose.hermes.yml`](../../../docker-compose.hermes.yml) | file | Local MinIO + Hermes agent stack |
| [`.env.hermes.example`](../../../.env.hermes.example) | file | Hermes/MinIO env var template |

> **Never create `proxy.ts` at project root.** It has confirmed production-mode bugs and Windows failures in Next.js 16. Use `src/middleware.ts` instead. See [ARCHITECTURE/04-proxy.md](../ARCHITECTURE/04-proxy.md).

---

## src/

| Path | Type | Purpose |
|---|---|---|
| [`src/app/`](../../../src/app/) | dir | App Router pages + API routes |
| [`src/components/`](../../../src/components/) | dir | All React components → [COMPONENTS.md](../COMPONENTS.md) |
| [`src/hooks/`](../../../src/hooks/) | dir | Client-side hooks |
| [`src/i18n/`](../../../src/i18n/) | dir | next-intl config → [I18N.md](../I18N.md) |
| [`src/instrumentation.ts`](../../../src/instrumentation.ts) | file | Next.js instrumentation — Sentry server/edge init |
| [`src/lib/`](../../../src/lib/) | dir | Framework-agnostic utilities + DB singletons |
| [`src/middleware.ts`](../../../src/middleware.ts) | file | Request intercept: rate limit + security headers + intl → [ARCHITECTURE/04-proxy.md](../ARCHITECTURE/04-proxy.md) |
| [`src/providers/`](../../../src/providers/) | dir | React context providers |
| [`src/proxy/`](../../../src/proxy/) | dir | Middleware sub-modules |
| [`src/services/`](../../../src/services/) | dir | ApiClient + Firebase + portfolio → [SERVICES.md](../SERVICES.md) |
| [`src/stores/`](../../../src/stores/) | dir | Zustand global state → [STATE.md](../STATE.md) |
| [`src/types/`](../../../src/types/) | dir | Shared TypeScript types |
| [`src/config/`](../../../src/config/) | dir | Site-level config (SEO, GEO) |
| [`src/generated/`](../../../src/generated/) | dir | Auto-generated Prisma types (do not edit) |

---

## src/app/

| Path | Type | Purpose |
|---|---|---|
| [`src/app/globals.css`](../../../src/app/globals.css) | file | Tailwind v4 `@theme {}` tokens + base → [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md) |
| [`src/app/layout.tsx`](../../../src/app/layout.tsx) | file | Root layout — minimal HTML shell only |
| [`src/app/[locale]/layout.tsx`](../../../src/app/%5Blocale%5D/layout.tsx) | file | Locale layout: fonts, providers, `<Toaster />`, PostHog |
| [`src/app/[locale]/page.tsx`](../../../src/app/%5Blocale%5D/page.tsx) | file | Home page — fetches portfolio from Firestore, renders `<DataSciTheme>` |
| [`src/app/[locale]/about/page.tsx`](../../../src/app/%5Blocale%5D/about/page.tsx) | file | About page (Server Component) |
| [`src/app/api/health/route.ts`](../../../src/app/api/health/route.ts) | file | Health check endpoint — Edge runtime |
| [`src/app/api/upload/route.ts`](../../../src/app/api/upload/route.ts) | file | MinIO image upload — multipart or base64 JSON |
| [`src/app/api/storage/route.ts`](../../../src/app/api/storage/route.ts) | file | MinIO storage listing / management |
| [`src/app/api/v1/`](../../../src/app/api/v1/) | dir | Prisma-backed CRUD REST API → [DATA_LAYER/01-database.md](../DATA_LAYER/01-database.md) |
| [`src/app/api/admin/auth/route.ts`](../../../src/app/api/admin/auth/route.ts) | file | POST login / DELETE logout — sets `admin_token` cookie |
| [`src/app/admin/`](../../../src/app/admin/) | dir | Admin CMS — auth-gated, no intl routing; requires `ADMIN_PASSWORD` env var |
| [`src/app/admin/layout.tsx`](../../../src/app/admin/layout.tsx) | file | Admin shell: provides `<html>`, fonts, `QueryProvider`, `AdminSidebar` |
| [`src/app/admin/login/page.tsx`](../../../src/app/admin/login/page.tsx) | file | Login form (client component) |
| [`src/app/admin/page.tsx`](../../../src/app/admin/page.tsx) | file | Dashboard: entity counts + recent contacts |
| [`src/app/admin/profile/page.tsx`](../../../src/app/admin/profile/page.tsx) | file | Profile editor |
| [`src/app/admin/experiences/`](../../../src/app/admin/experiences/) | dir | Experience CRUD |
| [`src/app/admin/education/`](../../../src/app/admin/education/) | dir | Education CRUD |
| [`src/app/admin/projects/`](../../../src/app/admin/projects/) | dir | Projects CRUD |
| [`src/app/admin/skills/`](../../../src/app/admin/skills/) | dir | Skills CRUD |
| [`src/app/admin/publications/`](../../../src/app/admin/publications/) | dir | Publications CRUD |
| [`src/app/admin/licenses/`](../../../src/app/admin/licenses/) | dir | Licenses CRUD |
| [`src/app/admin/volunteer/`](../../../src/app/admin/volunteer/) | dir | Volunteer experience CRUD |
| [`src/app/admin/organizations/`](../../../src/app/admin/organizations/) | dir | Organizations CRUD |
| [`src/app/admin/contacts/`](../../../src/app/admin/contacts/) | dir | Contact messages viewer (read + delete) |
| [`src/app/admin/_components/`](../../../src/app/admin/_components/) | dir | Admin UI primitives: AdminSidebar, AdminTable, FormModal, FormField, PageHeader |
| [`src/lib/admin-auth.ts`](../../../src/lib/admin-auth.ts) | file | Web Crypto HMAC token create/verify (Edge-compatible) |
| [`src/app/sitemap.ts`](../../../src/app/sitemap.ts) | file | Auto-generated `/sitemap.xml` — driven by `siteConfig.pages` |
| [`src/app/robots.ts`](../../../src/app/robots.ts) | file | Auto-generated `/robots.txt` |
| [`src/app/llms.txt/route.ts`](../../../src/app/llms.txt/route.ts) | file | `/llms.txt` — LLM guidance file, generated from `siteConfig` |

### API v1 routes

Each entity has `route.ts` (collection: GET list + POST create) and `[id]/route.ts` (item: GET + PATCH + DELETE):

```
src/app/api/v1/
├── contacts/
├── education/
├── experiences/
├── licenses/
├── organizations/
├── profiles/      ← GET includes all relations
├── projects/
├── publications/
├── skills/
└── volunteer-experiences/
```

### Provider tree in src/app/[locale]/layout.tsx

```tsx
<html lang={locale} className="--font-noto-sans --font-space-grotesk --font-fira-code">
  <body>
    <NextIntlClientProvider messages={messages}>
      <PostHogProvider>          // src/providers/PostHogProvider.tsx
        {children}
      </PostHogProvider>
      <Toaster />                // src/components/ui/Sonner/Sonner.tsx — ONE mount only
    </NextIntlClientProvider>
  </body>
</html>
```

`QueryProvider` (`src/providers/QueryProvider.tsx`) exists but is **not** mounted in the locale layout — add it when TanStack Query is needed for client-side data fetching.

### Fonts (next/font/google)

| Variable | Font | Weights | Usage |
|---|---|---|---|
| `--font-noto-sans` | Noto Sans | 300–700 | Body text (`font-sans`) |
| `--font-space-grotesk` | Space Grotesk | 400–700 | Headings (`font-heading`) |
| `--font-fira-code` | Fira Code | 400–600 | Monospace (`font-mono`) |

---

## src/components/

| Path | Type | Purpose |
|---|---|---|
| [`src/components/ui/`](../../../src/components/ui/) | dir | Primitive building blocks — no domain logic |
| [`src/components/shared/`](../../../src/components/shared/) | dir | Cross-feature reusable — may use i18n |
| [`src/components/layout/`](../../../src/components/layout/) | dir | Page scaffolding |
| [`src/components/foundation/`](../../../src/components/foundation/) | dir | Portfolio building blocks — domain-aware |
| [`src/components/themes/`](../../../src/components/themes/) | dir | Theme shells — compose foundation components |
| [`src/components/sections/`](../../../src/components/sections/) | dir | Legacy section components (superseded by foundation/) |
| [`src/components/portfolio/`](../../../src/components/portfolio/) | dir | Legacy portfolio components (superseded by foundation/) |
| [`src/components/animations/`](../../../src/components/animations/) | dir | Framer Motion animation wrappers |

### src/components/ui/

| Path | Purpose |
|---|---|
| [`Badge/`](../../../src/components/ui/Badge/) | Badge component |
| [`Button/`](../../../src/components/ui/Button/) | Button with CVA variants |
| [`Card/`](../../../src/components/ui/Card/) | Card + sub-components |
| [`Input/`](../../../src/components/ui/Input/) | Input with label/error/addon |
| [`Sonner/`](../../../src/components/ui/Sonner/) | `<Toaster />` Sonner wrapper |
| [`Typography/`](../../../src/components/ui/Typography/) | Typed heading/text variants |
| [`VantaBackground.tsx`](../../../src/components/ui/VantaBackground.tsx) | Animated Vanta.js canvas background |
| [`expandable-carousel-card.tsx`](../../../src/components/ui/expandable-carousel-card.tsx) | Expandable card carousel |
| [`infinite-carousel.tsx`](../../../src/components/ui/infinite-carousel.tsx) | Auto-scrolling infinite carousel |
| [`index.ts`](../../../src/components/ui/index.ts) | Barrel — re-exports all ui components |

### src/components/foundation/

Domain-aware building blocks consumed by themes. These are flat files (not four-file rule).

| File | Purpose |
|---|---|
| `Hero.tsx` | Full-screen hero with VantaBackground + TypingAnimation |
| `ProfileSection.tsx` | Profile summary, stats, bio |
| `ExperienceTimeline.tsx` | Work experience timeline |
| `ProjectsSection.tsx` | Project cards grid |
| `PublicationsSection.tsx` | Publications list |
| `VolunteerSection.tsx` | Volunteer experience |
| `ContactSection.tsx` | Contact form / info |
| `LayoutWrapper.tsx` | Grid system helpers (`Grid`, `Col`) |
| `SectionHeading.tsx` | Consistent section title |
| `Typography.tsx` | `H1`, `H2`, `Body`, `Mono` primitives |

### src/components/themes/

Theme shells that compose foundation components into a complete page.

| File | Export | Purpose |
|---|---|---|
| `datasci-theme.tsx` | `DataSciTheme` | Data science dark theme — accepts `PortfolioData` props |

`DataSciTheme` is rendered directly from `src/app/[locale]/page.tsx`.

### src/components/animations/

| File | Export | Purpose |
|---|---|---|
| `FadeIn.tsx` | `FadeIn` | Framer Motion fade-in wrapper |
| `StaggerContainer.tsx` | `StaggerContainer` | Staggered children reveal |
| `index.ts` | barrel | |

### src/components/layout/

| Path | Purpose |
|---|---|
| `Header/` | Site header |
| `Footer/` | Site footer |
| `PageWrapper/` | Page layout wrapper |
| `index.ts` | Barrel |

### src/components/shared/

| Path | Purpose |
|---|---|
| `LanguageSwitcher/` | Locale toggle |
| `index.ts` | Barrel |

### Four-file rule (UI components only)

```
ComponentName/
├── ComponentName.tsx          # Implementation — only file with logic
├── ComponentName.stories.tsx  # Storybook
├── ComponentName.test.tsx     # Vitest + RTL
└── index.ts                   # Barrel — no logic
```

Foundation, theme, section, and animation components are **flat files** (no four-file rule).

---

### src/components/typing-animation.tsx

| File | Export | Purpose |
|---|---|---|
| `typing-animation.tsx` | `TypingAnimation` | Typewriter effect — accepts `sequences` array (strings and number delays) |

---

← [STRUCTURE.md](../STRUCTURE.md) | → [02 — Modules](./02-modules.md)

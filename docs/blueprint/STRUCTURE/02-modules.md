# Structure — 02: Module Directories

← [01 — App directories](./01-app-dirs.md) | [STRUCTURE.md](../STRUCTURE.md) | [Blueprint INDEX](../INDEX.md)

---

## src/middleware.ts

Root middleware entry — composes rate limit, security headers, and next-intl routing.
See [ARCHITECTURE/04-proxy.md](../ARCHITECTURE/04-proxy.md) for full detail.

---

## src/proxy/

Middleware sub-modules. No barrel — consumed only by `src/middleware.ts`.

| Path | Export | Purpose |
|---|---|---|
| [`src/proxy/rate-limit.ts`](../../../src/proxy/rate-limit.ts) | `applyRateLimit` | `next-limitr` sliding window rate limiter for `/api/*`; returns `Promise<429 response \| null>` |
| [`src/proxy/security-headers.ts`](../../../src/proxy/security-headers.ts) | `applySecurityHeaders` | Attaches security headers to every `NextResponse` |

---

## src/hooks/

| Path | Signature | Notes |
|---|---|---|
| [`src/hooks/useBreakpoint.ts`](../../../src/hooks/useBreakpoint.ts) | `useBreakpoint(): Breakpoint` | `useSyncExternalStore`, no setState-in-effect |
| [`src/hooks/useBreakpoint.ts`](../../../src/hooks/useBreakpoint.ts) | `useIsMobile(): boolean` | Same file |
| [`src/hooks/useLocalStorage.ts`](../../../src/hooks/useLocalStorage.ts) | `useLocalStorage<T>(key, initial): [T, (v:T)=>void]` | SSR-safe |
| [`src/hooks/useToast.ts`](../../../src/hooks/useToast.ts) | `useToast(): ToastAPI` | Thin sonner wrapper |
| [`src/hooks/index.ts`](../../../src/hooks/index.ts) | barrel | re-exports hooks + `{ toast } from 'sonner'` |

### useToast API

```ts
import { useToast, toast } from '@/hooks';

const t = useToast();
t.success(msg, opts?)    t.error(msg, opts?)    t.warning(msg, opts?)
t.info(msg, opts?)       t.loading(msg, opts?)  t.promise(p, labels)
t.dismiss(id?)           t.custom(jsx, opts?)

toast.error('msg');      // direct sonner fn — outside components
```

---

## src/i18n/

| Path | Purpose |
|---|---|
| [`src/i18n/routing.ts`](../../../src/i18n/routing.ts) | `defineRouting` — locales `['en']`, `localePrefix: 'always'` |
| [`src/i18n/navigation.ts`](../../../src/i18n/navigation.ts) | `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname` |
| [`src/i18n/request.ts`](../../../src/i18n/request.ts) | `getRequestConfig` — loads message JSON per locale per RSC render |

**Active locales:** English only (`['en']`). `localePrefix: 'always'` — every route carries `/en/` prefix.

> **Critical:** Import navigation ONLY from `@/i18n/navigation`, never from `next/navigation` — including in providers and analytics files.

---

## src/config/

| Path | Export | Purpose |
|---|---|---|
| [`src/config/site.ts`](../../../src/config/site.ts) | `siteConfig`, `SiteConfig`, `PageConfig` | Company brain — drives SEO, GEO, sitemap, LLMs.txt → [SEO_GEO_LLM.md](../SEO_GEO_LLM.md) |

---

## src/lib/

Framework-agnostic utilities + singletons. All files are server-safe unless noted.

| Path | Export | Purpose |
|---|---|---|
| [`src/lib/api-helpers.ts`](../../../src/lib/api-helpers.ts) | `ok`, `created`, `bad`, `notFound`, `serverError`, `parseFilters`, `parseBody` | Route handler response helpers + Prisma query builder |
| [`src/lib/cn.ts`](../../../src/lib/cn.ts) | `cn` | `cn(...inputs: ClassValue[]): string` — `twMerge(clsx(...))` |
| [`src/lib/cookies.ts`](../../../src/lib/cookies.ts) | `getCookie` / `setCookie` / `deleteCookie` / `getAllCookies` / `parseCookieHeader` | Cookie helpers |
| [`src/lib/db.ts`](../../../src/lib/db.ts) | `prisma`, `default` | Prisma singleton with dev logging — **use this** → [DATA_LAYER/01-database.md](../DATA_LAYER/01-database.md) |
| [`src/lib/prisma.ts`](../../../src/lib/prisma.ts) | `prisma`, `default` | Minimal Prisma singleton (no log config) — prefer `db.ts` |
| [`src/lib/firebase-admin.ts`](../../../src/lib/firebase-admin.ts) | `getAdminApp`, `getFirestore`, `isFirebaseConfigured` | Firebase Admin SDK lazy init → [DATA_LAYER/02-firestore.md](../DATA_LAYER/02-firestore.md) |
| [`src/lib/portfolio-adapter.ts`](../../../src/lib/portfolio-adapter.ts) | `fetchPortfolioData` | Fetches from `portfolioService`, maps to UI types (`src/types/portfolio.ts`) |
| [`src/lib/sentry.ts`](../../../src/lib/sentry.ts) | `captureError` / `captureMessage` | Sentry wrappers |
| [`src/lib/seo.ts`](../../../src/lib/seo.ts) | `buildMetadata` | Builds full `Metadata` object for every public page → [SEO_GEO_LLM.md](../SEO_GEO_LLM.md) |
| [`src/lib/storage.ts`](../../../src/lib/storage.ts) | `uploadFile`, `uploadBase64`, `uploadFromPath`, `deleteFile`, `listFiles`, `getPresignedUrl`, `fileExists`, `ensureBucket` | MinIO storage — **server-only** → [DATA_LAYER/03-storage.md](../DATA_LAYER/03-storage.md) |
| [`src/lib/structured-data.ts`](../../../src/lib/structured-data.ts) | `organizationSchema`, `webPageSchema`, `faqSchema`, `breadcrumbSchema`, `articleSchema`, `serializeSchema` | JSON-LD schema builders + serializer → [SEO_GEO_LLM.md](../SEO_GEO_LLM.md) |
| [`src/lib/utils.ts`](../../../src/lib/utils.ts) | `formatDate` / `truncate` / `slugify` / `assertNever` | General utilities |
| [`src/lib/validations/common.ts`](../../../src/lib/validations/common.ts) | `emailSchema`, `passwordSchema`, `nameSchema`, `urlSchema`, `uuidSchema`, `paginationSchema` | Zod primitives |
| [`src/lib/validations/index.ts`](../../../src/lib/validations/index.ts) | barrel | re-exports all from `common.ts` |

---

## src/providers/

| Path | Export | Purpose |
|---|---|---|
| [`src/providers/PostHogProvider.tsx`](../../../src/providers/PostHogProvider.tsx) | `PostHogProvider` | posthog-js init + `$pageview` tracking |
| [`src/providers/QueryProvider.tsx`](../../../src/providers/QueryProvider.tsx) | `QueryProvider` | TanStack Query `QueryClientProvider` + DevTools — **not mounted in layout yet** |
| [`src/providers/index.tsx`](../../../src/providers/index.tsx) | barrel | `export { PostHogProvider }` |

To enable TanStack Query client-side fetching, wrap the app with `<QueryProvider>` inside `src/app/[locale]/layout.tsx`.

---

## src/services/

| Path | Export | Purpose |
|---|---|---|
| [`src/services/types.ts`](../../../src/services/types.ts) | `ApiError`, `RequestConfig`, interceptor types | All shared service types |
| [`src/services/client.ts`](../../../src/services/client.ts) | `apiClient` | Singleton `ApiClientInstance` |
| [`src/services/health.service.ts`](../../../src/services/health.service.ts) | `healthService` | Health check service |
| [`src/services/example.service.ts`](../../../src/services/example.service.ts) | `ExampleService` | Example domain service pattern |
| [`src/services/firebase.ts`](../../../src/services/firebase.ts) | `firestoreService`, `ProfileData`, `SkillData`, etc. | Firestore CRUD layer → [DATA_LAYER/02-firestore.md](../DATA_LAYER/02-firestore.md) |
| [`src/services/portfolio.ts`](../../../src/services/portfolio.ts) | `portfolioService`, `PortfolioData`, `PublishedProject` | Composite portfolio fetch — runs all collections in parallel → [DATA_LAYER/02-firestore.md](../DATA_LAYER/02-firestore.md) |
| [`src/services/index.ts`](../../../src/services/index.ts) | barrel | `apiClient`, `ApiError`, all services including `firestoreService`, `portfolioService` |

---

## src/stores/

| Path | Export | Purpose |
|---|---|---|
| [`src/stores/app.store.ts`](../../../src/stores/app.store.ts) | `useAppStore` | Global UI: `theme`, `sidebarOpen` |
| [`src/stores/middleware/cookie-storage.ts`](../../../src/stores/middleware/cookie-storage.ts) | `createCookieStorage` | Zustand persist adapter via `document.cookie` |
| [`src/stores/index.ts`](../../../src/stores/index.ts) | barrel | `useAppStore`, `createCookieStorage` |

---

## src/types/

| Path | Export |
|---|---|
| [`src/types/common.ts`](../../../src/types/common.ts) | `Nullable<T>`, `Maybe<T>`, `Prettify<T>`, `PaginatedResponse<T>`, `ApiResponse<T>` |
| [`src/types/portfolio.ts`](../../../src/types/portfolio.ts) | `Profile`, `Skill`, `Experience`, `Project`, `Education`, `SocialLinks` — adapter UI types |
| [`src/types/zemetia-portfolio.ts`](../../../src/types/zemetia-portfolio.ts) | `PortfolioData`, `Profile`, `Skill`, `Experience`, `Project`, `Education`, `Publication`, `License`, `VolunteerExperience`, `Organization`, `Contact`, and many more — canonical portfolio domain types |
| [`src/types/index.ts`](../../../src/types/index.ts) | barrel — re-exports `common.ts` only |

### src/types/dtos/

Raw API response shapes. Field names mirror the server JSON exactly (snake_case). Consumed only by services — never by pages or components.

| Path | Export |
|---|---|
| [`src/types/dtos/admin.dto.ts`](../../../src/types/dtos/admin.dto.ts) | `AdminDTO`, `AdminListDTO` |
| [`src/types/dtos/index.ts`](../../../src/types/dtos/index.ts) | barrel |

### src/types/value-objects/

Client-ready, display-optimized shapes. Produced by services after transforming DTOs.

| Path | Export |
|---|---|
| [`src/types/value-objects/admin.vo.ts`](../../../src/types/value-objects/admin.vo.ts) | `AdminVO`, `AdminListVO` |
| [`src/types/value-objects/index.ts`](../../../src/types/value-objects/index.ts) | barrel |

### src/generated/prisma/

Auto-generated Prisma TypeScript types. **Do not edit manually.** Regenerate with `npm run db:generate`.

---

## messages/

English only. Namespace key = JSON filename without extension.

| Path | Namespace | Used by |
|---|---|---|
| [`messages/en/common.json`](../../../messages/en/common.json) | `common` | Shared labels, buttons, errors |
| [`messages/en/navigation.json`](../../../messages/en/navigation.json) | `navigation` | Nav labels |
| [`messages/en/home.json`](../../../messages/en/home.json) | `home` | Home page + meta |
| [`messages/en/hero.json`](../../../messages/en/hero.json) | `hero` | Hero section copy |
| [`messages/en/profile.json`](../../../messages/en/profile.json) | `profile` | Profile section copy |
| [`messages/en/experience.json`](../../../messages/en/experience.json) | `experience` | Experience section copy |
| [`messages/en/projects.json`](../../../messages/en/projects.json) | `projects` | Projects section copy |
| [`messages/en/contact.json`](../../../messages/en/contact.json) | `contact` | Contact section copy |

Loaded in [`src/i18n/request.ts`](../../../src/i18n/request.ts).

---

## Environment Variables

Reference: [`.env.example`](../../../.env.example)

| Variable | Required | Runtime | Consumer |
|---|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Yes | client+server | Metadata base URL |
| `NEXT_PUBLIC_API_URL` | Yes | client+server | `src/services/client.ts` baseUrl |
| `NEXT_PUBLIC_PORTFOLIO_ACCOUNT_ID` | Yes | server | Firestore profile lookup key (default: `'default'`) |
| `DATABASE_URL` | Yes | server | Prisma PostgreSQL connection string |
| `FIREBASE_PROJECT_ID` | Yes | server | Firebase Admin SDK |
| `FIREBASE_CLIENT_EMAIL` | Yes | server | Firebase Admin SDK |
| `FIREBASE_PRIVATE_KEY` | Yes | server | Firebase Admin SDK (escape `\n` → newline) |
| `GOOGLE_APPLICATION_CREDENTIALS` | Alt | server | Path to service account JSON (alternative to above 3) |
| `MINIO_ENDPOINT` | Prod | server | MinIO hostname (default: `localhost`) |
| `MINIO_PORT` | Prod | server | MinIO port (default: `9000`) |
| `MINIO_USE_SSL` | Prod | server | MinIO TLS (default: `false`) |
| `MINIO_ACCESS_KEY` | Prod | server | MinIO access key (default: `minioadmin`) |
| `MINIO_SECRET_KEY` | Prod | server | MinIO secret key |
| `MINIO_BUCKET` | Prod | server | MinIO bucket name (default: `portfolio-images`) |
| `MINIO_PUBLIC_URL` | Prod | server | Public CDN base URL (default: `http://localhost:9000`) |
| `NEXT_PUBLIC_SENTRY_DSN` | Prod | client+server | Sentry configs |
| `SENTRY_ORG` | Prod/CI | build | `next.config.ts` `withSentryConfig` |
| `SENTRY_PROJECT` | Prod/CI | build | `next.config.ts` `withSentryConfig` |
| `SENTRY_AUTH_TOKEN` | CI | build | Source map upload |
| `NEXT_PUBLIC_POSTHOG_KEY` | Prod | client | `src/providers/PostHogProvider.tsx` |
| `NEXT_PUBLIC_POSTHOG_HOST` | No | client | Defaults to `https://us.i.posthog.com` |

Missing `FIREBASE_*` vars → Firestore returns `null` everywhere (graceful no-op).  
Missing `NEXT_PUBLIC_SENTRY_DSN` / `NEXT_PUBLIC_POSTHOG_KEY` → integrations are silent no-ops.

---

← [01 — App directories](./01-app-dirs.md) | [STRUCTURE.md](../STRUCTURE.md)

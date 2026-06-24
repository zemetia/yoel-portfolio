# LEARN — Correction & Mistake Log

> Written whenever: (1) the user explicitly corrects the AI, or (2) the AI recognizes it deviated from what was asked or from best practice. Format is compact but lossless.

**Template:** `[YYYY-MM-DD] - [problem] - [solution] - [lesson]`

---

<!-- Entries below, newest first -->

[2026-06-24] - AI kept referencing/using Firebase/Firestore despite repeated corrections — the project has fully committed to Prisma + PostgreSQL as the data layer; Firebase/Firestore must not be introduced, suggested, or kept in any new code — Remove all Firebase usage from services, adapters, and types; replace with prisma-portfolio.ts service; delete firebase.ts and firebase-admin.ts once migration is complete — **NEVER use Firebase or Firestore in this project. Data layer = Prisma + PostgreSQL only.**

[2026-06-23] - Blueprint was stale across all sections: referenced root `proxy.ts` (should be `src/middleware.ts`), wrong locale list (`['en','id']` → `['en']`), wrong localePrefix (`'as-needed'` → `'always'`), wrong fonts (Outfit+JetBrains → Noto Sans+Space Grotesk+Fira Code), missing entire data layer (Prisma, Firestore, MinIO), missing new component dirs (foundation/, themes/, animations/), and missing /api/v1/* routes — Updated blueprint in full pass: INDEX.md stack table, STRUCTURE/01-app-dirs.md, STRUCTURE/02-modules.md, ARCHITECTURE/01-request-state-toast.md, ARCHITECTURE.md, new DATA_LAYER.md + DATA_LAYER/01-03 files — When the stack grows significantly, do a full blueprint pass (read every file, compare to actual source, rewrite) rather than patching one file at a time

[2026-06-09] - Template used root `proxy.ts` (Next.js 16 rename of middleware.ts), which has confirmed production-mode bugs (#85711), Windows 11 `next start` failure (#85243), and Cloudflare/pageExtensions breakage (#86122, #86303) — reverted to `src/middleware.ts` with `export function middleware` — never use root `proxy.ts` in this template; always use `src/middleware.ts`; the `src/proxy/` modules folder is fine to keep

[2026-06-09] - i18n routing used `localePrefix: 'as-needed'` so the default locale had no URL prefix — `/about` served English without redirecting to `/en/about`, violating the "all routes must have a locale prefix" requirement; also `PostHogProvider` used `usePathname`/`useSearchParams` from `next/navigation` breaking the non-negotiable; blueprint docs documented the wrong localePrefix and still showed a deprecated `middleware.ts` example - Fixed `localePrefix` to `'always'`, fixed PostHog to use `@/i18n/navigation` + `useLocale`, and rewrote the blueprint sections - `localePrefix` must be `'always'`; never import from `next/navigation` even in analytics/provider files; blueprint must document `proxy.ts` not `middleware.ts`

[2026-06-06] - Pushed commits to `master` without first checking the repo's default branch (`main`), creating diverged histories - Merged `master` → `main` with `--allow-unrelated-histories`, pushed to `origin/main` - Always check the default branch before the first push; never assume it is `master`

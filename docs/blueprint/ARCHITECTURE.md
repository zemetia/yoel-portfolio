# Architecture

← [Blueprint INDEX](./INDEX.md)

| Part | Coverage |
|---|---|
| [01 — Request, providers, i18n, state, toast](./ARCHITECTURE/01-request-state-toast.md) | Request lifecycle, provider tree, i18n wiring, Zustand, Sonner |
| [02 — ApiClient, Sentry, PostHog](./ARCHITECTURE/02-apiclient-sentry-posthog.md) | ApiClient pipeline, error classification, Sentry init, PostHog tracking |
| [03 — Zod, shadcn, build pipeline](./ARCHITECTURE/03-zod-shadcn-build.md) | Validation placement, shadcn integration, build commands |
| [04 — Proxy / Middleware](./ARCHITECTURE/04-proxy.md) | src/middleware.ts, rate limiting, security headers, adding new proxy logic |
| [05 — DTO → Service → VO](./ARCHITECTURE/05-dto-vo.md) | Data flow: raw API types (DTO) → service transform → display-ready types (VO) |

For data persistence details see the dedicated [DATA_LAYER.md](./DATA_LAYER.md) sections:
- [01 — Prisma + PostgreSQL](./DATA_LAYER/01-database.md)
- [02 — Firestore (live data)](./DATA_LAYER/02-firestore.md)
- [03 — MinIO (object storage)](./DATA_LAYER/03-storage.md)

# Data Layer — 01: Database (Prisma + PostgreSQL)

← [DATA_LAYER.md](../DATA_LAYER.md) | [Blueprint INDEX](../INDEX.md) | [02 — Firestore →](./02-firestore.md)

---

## Overview

Prisma is the **future primary** data store (PostgreSQL). The current live data source is Firestore — see [02 — Firestore](./02-firestore.md). Prisma and Firestore share the same data contract so swapping is drop-in.

---

## Schema Location

| File | Purpose |
|---|---|
| [`prisma/schema.prisma`](../../../prisma/schema.prisma) | Canonical schema — all models and relations |
| [`prisma.config.ts`](../../../prisma.config.ts) | Prisma CLI config (schema path, migrations path, datasource URL) |
| [`src/lib/generated/prisma/`](../../../src/lib/generated/prisma/) | Generated Prisma client (do NOT edit manually) |

Generator output path: `src/lib/generated/prisma` (via `generator client { output = "../src/lib/generated/prisma" }`).

---

## Prisma Singleton

Two singleton files exist — prefer `src/lib/db.ts` (includes logging config):

| File | Export | Notes |
|---|---|---|
| [`src/lib/db.ts`](../../../src/lib/db.ts) | `prisma`, `default` | Preferred — logs queries in dev, warns in prod |
| [`src/lib/prisma.ts`](../../../src/lib/prisma.ts) | `prisma`, `default` | Minimal — identical pattern, no log config |

**Rule:** Always `import { prisma } from '@/lib/db'`. Never instantiate `PrismaClient` directly elsewhere — singleton pattern must be respected across hot reloads.

---

## Data Models

All models belong to a `Profile` (portfolio owner). Collections cascade-delete on `Profile` removal.

| Model | Key Fields | Notes |
|---|---|---|
| `Profile` | `id`, `slug`, `fullName`, `headline`, `summary`, `email`, `avatarUrl`, `heroSequences` (Json), `visibleSections` (String[]), `activeTheme` | Single "main" profile via `slug @unique @default("main")` |
| `Skill` | `name`, `category`, `proficiency` (1-5), `iconSlug`, `order` | `@@index([profileId])` |
| `Education` | `institution`, `degree`, `field`, `startDate`, `endDate`, `isCurrent`, `gpa` | |
| `Experience` | `company`, `position`, `employmentType`, `locationType`, `achievements` (String[]), `images` (String[]), `isPublic` | |
| `Project` | `title`, `slug @unique`, `summary`, `techStack` (String[]), `isFeatured`, `status` (PublishStatus) | Indexed on `slug`, `status` |
| `Publication` | `title`, `publisher`, `authors` (String[]), `doi`, `publicationType` | |
| `License` | `name`, `issuer`, `credentialId`, `credentialUrl`, `doesNotExpire` | |
| `VolunteerExperience` | `organization`, `role`, `cause`, `achievements` (String[]) | |
| `Organization` | `name`, `role` | |
| `Contact` | `name`, `email`, `subject`, `message`, `isRead`, `repliedAt` | Form submissions / inquiry log |

**Enum:**
```prisma
enum PublishStatus {
  DRAFT
  PUBLISHED
}
```

---

## DB Scripts

```bash
npm run db:generate      # Regenerate Prisma client after schema change
npm run db:push          # Push schema to DB without migration (dev only)
npm run db:migrate       # Create and apply migration (dev)
npm run db:migrate:deploy # Apply pending migrations (CI/prod)
npm run db:seed          # Run prisma/seed.ts
npm run db:studio        # Open Prisma Studio GUI
```

All commands use `--schema prisma/schema` (matches `prisma.config.ts`).

---

## REST API Routes (`/api/v1/`)

Full CRUD is exposed at `/api/v1/<collection>/` and `/api/v1/<collection>/[id]/`.

| Route | Methods | Prisma model |
|---|---|---|
| `/api/v1/profiles` | GET, POST | `Profile` (with all relations included on GET) |
| `/api/v1/profiles/[id]` | GET, PATCH, DELETE | `Profile` |
| `/api/v1/skills` | GET, POST | `Skill` |
| `/api/v1/skills/[id]` | GET, PATCH, DELETE | `Skill` |
| `/api/v1/education` | GET, POST | `Education` |
| `/api/v1/education/[id]` | GET, PATCH, DELETE | `Education` |
| `/api/v1/experiences` | GET, POST | `Experience` |
| `/api/v1/experiences/[id]` | GET, PATCH, DELETE | `Experience` |
| `/api/v1/projects` | GET, POST | `Project` |
| `/api/v1/projects/[id]` | GET, PATCH, DELETE | `Project` |
| `/api/v1/publications` | GET, POST | `Publication` |
| `/api/v1/publications/[id]` | GET, PATCH, DELETE | `Publication` |
| `/api/v1/licenses` | GET, POST | `License` |
| `/api/v1/licenses/[id]` | GET, PATCH, DELETE | `License` |
| `/api/v1/volunteer-experiences` | GET, POST | `VolunteerExperience` |
| `/api/v1/volunteer-experiences/[id]` | GET, PATCH, DELETE | `VolunteerExperience` |
| `/api/v1/organizations` | GET, POST | `Organization` |
| `/api/v1/organizations/[id]` | GET, PATCH, DELETE | `Organization` |
| `/api/v1/contacts` | GET, POST | `Contact` |
| `/api/v1/contacts/[id]` | GET, PATCH, DELETE | `Contact` |

**Response envelope** (from `src/lib/api-helpers.ts`):
```json
{ "success": true, "data": [...], "meta": { "total": 42, "page": 1, "limit": 20 } }
{ "success": false, "error": "message" }
```

---

## API Helpers (`src/lib/api-helpers.ts`)

| Export | Signature | Purpose |
|---|---|---|
| `ok(data, meta?)` | `NextResponse` 200 | Standard success response |
| `created(data)` | `NextResponse` 201 | After POST create |
| `bad(message)` | `NextResponse` 400 | Validation error |
| `notFound(message?)` | `NextResponse` 404 | Resource not found |
| `serverError(error)` | `NextResponse` 500 | Unhandled exception |
| `parseFilters(searchParams, searchFields)` | `PrismaQuery` | Parses URL params into `where`, `orderBy`, `skip`, `take` |
| `parseBody(schema, body)` | `{ data?, error? }` | Zod schema validation for request body |

`parseFilters` supports:
- `search` → fuzzy OR across `searchFields` (case-insensitive)
- `ids` / `*Ids` → `{ id: { in: [...] } }`
- `page`, `limit`, `sort`, `order` → pagination (default: page=1, limit=20, sort=createdAt, order=desc)
- Any other key → exact match (booleans and numbers coerced)

---

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string — `postgresql://user:pass@host:5432/dbname` |

---

← [DATA_LAYER.md](../DATA_LAYER.md) | → [02 — Firestore](./02-firestore.md)

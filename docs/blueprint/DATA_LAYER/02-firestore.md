# Data Layer — 02: Firestore (Live Portfolio Data)

← [01 — Database](./01-database.md) | [DATA_LAYER.md](../DATA_LAYER.md) | [Blueprint INDEX](../INDEX.md) | [03 — MinIO →](./03-storage.md)

---

## Overview

**Firestore is the current live data source** for portfolio content. It mirrors the same data model as Prisma so the two can be swapped without changing the `portfolioService` public interface.

```
Page / API Route
  → portfolioService.getPortfolioData(accountId)     [src/services/portfolio.ts]
    → firestoreService.collection.*()                [src/services/firebase.ts]
      → Firebase Admin SDK (Firestore)

Future: swap firestoreService → prismaRepository
without touching portfolioService interface
```

---

## Files

| File | Export | Purpose |
|---|---|---|
| [`src/lib/firebase-admin.ts`](../../../src/lib/firebase-admin.ts) | `getAdminApp`, `getFirestore`, `isFirebaseConfigured` | Lazy Admin SDK init — safe when credentials missing |
| [`src/services/firebase.ts`](../../../src/services/firebase.ts) | `firestoreService` | Collection CRUD factory + typed data interfaces |
| [`src/services/portfolio.ts`](../../../src/services/portfolio.ts) | `portfolioService` | Composite fetch — runs all collections in parallel |

---

## firestoreService

Singleton plain object. Initialized lazily on first call — safe to import server-side.

```ts
import { firestoreService } from '@/services';

firestoreService.isConfigured         // boolean — true when env vars present
firestoreService.db                   // raw Firestore instance (ad-hoc queries)

// Profile (special: queried by accountId, not profileId)
firestoreService.profile.getByAccountId(accountId)   // → ProfileData | null

// All other collections via generic CRUD factory
firestoreService.skill.getAll()
firestoreService.skill.getById(id)
firestoreService.skill.getByField('profileId', profileId)
firestoreService.skill.create(data)
firestoreService.skill.update(id, partial)
firestoreService.skill.delete(id)
```

Collections: `profile`, `skill`, `education`, `experience`, `project`, `publication`, `license`, `volunteerExperience`, `organization`, `contact`.

---

## portfolioService

Primary interface for pages and API routes. Runs all Firestore fetches in parallel.

```ts
import { portfolioService } from '@/services';

// Full composite fetch
const data = await portfolioService.getPortfolioData(accountId);
// Returns: { profile, skills, education, experience, projects,
//            publications, licenses, volunteerExperience, organizations }
// Returns null when no profile exists for accountId

// Published projects only
const projects = await portfolioService.getPublishedProjects(accountId);

// Single project by slug
const project = await portfolioService.getProjectBySlug(accountId, slug);

// Existence check
const exists = await portfolioService.hasPortfolio(accountId);
```

`NEXT_PUBLIC_PORTFOLIO_ACCOUNT_ID` env var selects which Firestore profile to load (default: `'default'`).

---

## Data Adapter (`src/lib/portfolio-adapter.ts`)

Bridges Firestore raw data → typed UI shapes used by older components.

```ts
import { fetchPortfolioData } from '@/lib/portfolio-adapter';

const { data, error, fetchedAt } = await fetchPortfolioData();
// data: { profile: Profile, skills: Skill[], experiences: Experience[],
//         projects: Project[], education: Education[] }
// error: string | null (null on success)
```

Adapter maps snake_case Firestore fields to camelCase UI types defined in `src/types/portfolio.ts`.

---

## Data Type Files

| File | Exports | Purpose |
|---|---|---|
| [`src/types/zemetia-portfolio.ts`](../../../src/types/zemetia-portfolio.ts) | `PortfolioData`, `Profile`, `Skill`, `Experience`, `Project`, `Education`, `Publication`, `License`, `VolunteerExperience`, `Organization`, `Contact`, and many more | Canonical portfolio domain types — consumed by themes and components |
| [`src/types/portfolio.ts`](../../../src/types/portfolio.ts) | `Profile`, `Skill`, `Experience`, `Project`, `Education`, `SocialLinks` | Simplified adapter types — used by `portfolio-adapter.ts` |
| [`src/services/firebase.ts`](../../../src/services/firebase.ts) | `ProfileData`, `SkillData`, `ExperienceData`, etc. | Raw Firestore document shapes — mirrors Prisma schema fields |

---

## Firestore Collections

| Collection | ID type | Key field |
|---|---|---|
| `profiles` | auto | `accountId` |
| `skills` | auto | `profileId` |
| `education` | auto | `profileId` |
| `experience` | auto | `profileId` |
| `projects` | auto | `profileId`, `slug`, `status` |
| `publications` | auto | `profileId` |
| `licenses` | auto | `profileId` |
| `volunteerExperience` | auto | `profileId` |
| `organizations` | auto | `profileId` |
| `contacts` | auto | `profileId` |

---

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `FIREBASE_PROJECT_ID` | Yes | GCP project ID |
| `FIREBASE_CLIENT_EMAIL` | Yes | Service account email |
| `FIREBASE_PRIVATE_KEY` | Yes | Service account private key (`\n` → actual newlines) |
| `GOOGLE_APPLICATION_CREDENTIALS` | Alt | Path to service account JSON (alternative to above three) |
| `NEXT_PUBLIC_PORTFOLIO_ACCOUNT_ID` | Yes | Firestore `profiles.accountId` to load (default: `'default'`) |

When none of the above are set, `firestoreService.isConfigured` returns `false` and all fetches return `null` — the app degrades gracefully with empty portfolio.

---

← [01 — Database](./01-database.md) | → [03 — MinIO](./03-storage.md)

# QA Audit Report — Content Accuracy & Firebase Data Rendering

**Auditor:** Prof. Moriel  
**Date:** 2026-06-21  
**Branch:** refactor/firebase-integration  
**Repo:** D:/Kerja/yoel-portfolio/

---

## 1. CONTENT STRUCTURE AUDIT — i18n Messages

### 1.1 Locale Coverage

| Locale | Status | Files |
|--------|--------|-------|
| `en`   | ✅ Complete | `common.json`, `home.json`, `navigation.json` |
| Other  | ❌ Missing | No `id/`, `ja/`, or any other locale exists |

### 1.2 `messages/en/home.json` — Section Completeness

| Section | Status | Entries | Notes |
|---------|--------|---------|-------|
| `meta` | ✅ | 2 fields | title + description accurate for Yoel |
| `hero` | ✅ | 4 fields | badge, title, description, CTAs. Data matches Yoel (Zemetia, Youdo, Freshideas) |
| `profile` | ✅ | 4 fields | name "Yoel Sitorus", bio accurate |
| `experience` | ✅ | 3 entries | Zemetia Studio, Youdo POS, Freshideas Agency — all correct |
| `projects` | ✅ | 6 entries | Aligns with Yoel's project portfolio |
| `volunteer` | ✅ | 3 entries | Data Science Indonesia, AI for Social Good, Open Source ML |
| `publications` | ✅ | 5 entries | Conference, Journal, Workshop, Talk entries |
| `contact` | ✅ | 3 fields | heading, description, footer |

**Verdict:** English content is complete and accurate for Yoel's profile.

---

## 2. FIREBASE DATA INTEGRATION

### 2.1 Service Architecture (Two Parallel Layers)

There are **two incompatible service layers** with different Firestore collection structures:

#### Layer A: `services/firebase.ts` + `services/portfolio.ts` `[ACTIVE]`
- Uses **top-level Firestore collections**: `profiles`, `skills`, `education`, `experience`, `projects`, `publications`, `licenses`, `volunteerExperience`, `organizations`, `contacts`
- Queries by `profileId` field (e.g., `.where('profileId', '==', accountId)`)
- Exported as `firestoreService` and `portfolioService`
- **This is what the adapter (`portfolio-adapter.ts`) uses**

#### Layer B: `services/portfolio.service.ts` `[UNUSED / ORPHANED]`
- Uses **subcollections**: `portfolio/profile/skills`, `portfolio/profile/experiences`, `portfolio/profile/education`, `portfolio/profile/projects`
- Direct `doc('profile').get()` plus subcollection queries
- NOT exported from `services/index.ts`
- Imports UI types from `@/types/portfolio` instead of service types
- ⚠️ **This service is never called anywhere in the app**

### 2.2 Adapter (`lib/portfolio-adapter.ts`) — Mapping Correctness

| Source (Firestore `ProfileData`) | Target (UI `Profile`) | Status |
|---|---|---|
| `fullName` | `name` | ✅ Correct |
| `headline` | `tagline` | ✅ Correct |
| `summary` | `bio` | ✅ Correct |
| `summary?.split('\n')[0]` | `shortBio` | ✅ Correct (first line of bio) |
| `avatarUrl` | `avatar` | ✅ Correct |
| `location` | `location` | ✅ Correct |
| `email` | `email` | ✅ Correct |
| `resumeUrl` | `resumeUrl` | ✅ Correct |
| `githubUrl/linkedinUrl/twitterUrl/youtubeUrl/website` | `socials.*` | ✅ Correct |
| `available` | **hardcoded `false`** | ⚠️ Mismatch — never reads from Firestore |
| `availableFor` | **hardcoded `[]`** | ⚠️ Mismatch — never reads from Firestore |

| Source (Firestore `SkillData`) | Target (UI `Skill`) | Status |
|---|---|---|
| `name` | `name` | ✅ Correct |
| `category` | `category` | ✅ Correct |
| `proficiency` (0-100) | `level` via `proficiencyToLevel()` | ✅ Correct |
| `order` | `order` | ✅ Correct |

| Source (Firestore `ExperienceData`) | Target (UI `Experience`) | Status |
|---|---|---|
| `position` | `title` | ✅ Correct |
| `company` | `company` | ✅ Correct |
| `location` | `location` | ✅ Correct |
| `startDate/endDate/isCurrent` | `period` via `formatPeriod()` | ✅ Correct |
| `description` | `description` | ✅ Correct |
| `achievements` | `highlights` | ✅ Correct |
| `tech` | **hardcoded `[]`** | ⚠️ Mismatch — ExperienceData has no `tech` field, always empty |
| `type` | **hardcoded `'work'`** | ⚠️ Mismatch — all experience becomes type `'work'`, no volunteer/freelance |

| Source (Firestore `ProjectData`) | Target (UI `Project`) | Status |
|---|---|---|
| `title` | `title` | ✅ Correct |
| `summary` | `description` | ✅ Correct |
| `techStack` | `tech` | ✅ Correct |
| `liveUrl` | `link` | ✅ Correct |
| `githubUrl` | `github` | ✅ Correct |
| `coverImage` | `image` | ✅ Correct |
| `isFeatured` | `featured` | ✅ Correct |
| `order` | `order` | ✅ Correct |

| Source (Firestore `EducationData`) | Target (UI `Education`) | Status |
|---|---|---|
| `institution` | `school` | ✅ Correct |
| `degree` | `degree` | ✅ Correct |
| `field` | `major` | ✅ Correct |
| `startDate/endDate/isCurrent` | `period` via `formatPeriod()` | ✅ Correct |
| `gpa` | `gpa` | ✅ Correct |
| `description` | `achievements[0]` | ⚠️ Weak — single description wrapped in array |

### 2.3 Type Definitions (`types/portfolio.ts`) — Accuracy

| Type | Fields | Status |
|---|---|---|
| `Profile` | name, tagline, bio, shortBio, avatar, location, email, phone?, resumeUrl?, socials, available, availableFor | ✅ Complete |
| `Skill` | id, name, category, level, icon?, order | ✅ Complete |
| `Experience` | id, title, company, location?, period, description, highlights, tech, type, order | ✅ Complete |
| `Project` | id, title, description, tech, link?, github?, image?, featured, order | ✅ Complete |
| `Education` | id, school, degree, major, period, gpa?, achievements, order | ✅ Complete |

### 2.4 Collection Orchestration — `portfolioService.getPortfolioData()`

Queries **8 collections** in parallel: profile, skills, education, experience, projects, publications, licenses, volunteerExperience, organizations

✅ Correct — all 8 collections are properly parallelized  
✅ Graceful return when profile is null  
⚠️ Adapter only maps 5 of 8 collections: publications, licenses, volunteerExperience, organizations are discarded

---

## 3. DATA RENDERING VERIFICATION — THE CRITICAL FINDING

### 3.1 Actual Data Flow

```
Firestore → portfolioService (top-level) → adapter → fetchPortfolioData()
                                                          ↓
                                              Page [locale]/page.tsx
                                              ┌──────────────────────────────┐
                                              │  fetchPortfolioData()        │
                                              │  ↓                            │
                                              │  profileName → Header (only) │
                                              │  profileName → Footer (only) │
                                              │  profile.shortBio → metadata │
                                              │                              │
                                              │  ┌──────────────────────┐    │
                                              │  │ HeroSection          │◄───│ useTranslations('hero')
                                              │  │ ProfileSection       │◄───│ useTranslations('profile')
                                              │  │ ExperienceTimeline   │◄───│ useTranslations('experience')
                                              │  │ ProjectsSection      │◄───│ useTranslations('projects')
                                              │  │ VolunteerSection     │◄───│ useTranslations('volunteer')
                                              │  │ PublicationsSection  │◄───│ useTranslations('publications')
                                              │  │ ContactSection       │◄───│ useTranslations('contact')
                                              │  └──────────────────────┘    │
                                              └──────────────────────────────┘
```

### 3.2 🔴 CRITICAL: Firebase Data Never Reaches Content Sections

**The page imports from `@/components/sections/` not `@/components/portfolio/`.**

| Component Set | Data Source | Rendered? |
|---|---|---|
| `sections/HeroSection` | `useTranslations('hero')` from i18n files | ✅ Yes (on home page) |
| `sections/ProfileSection` | `useTranslations('profile')` from i18n files | ✅ Yes |
| `sections/ExperienceTimeline` | `useTranslations('experience')` from i18n files | ✅ Yes |
| `sections/ProjectsSection` | `useTranslations('projects')` from i18n files | ✅ Yes |
| `sections/VolunteerSection` | `useTranslations('volunteer')` from i18n files | ✅ Yes |
| `sections/PublicationsSection` | `useTranslations('publications')` from i18n files | ✅ Yes |
| `sections/ContactSection` | `useTranslations('contact')` from i18n files | ✅ Yes |
| **`portfolio/HeroSection`** | **Firebase `Profile` props** | ❌ **Never imported** |
| **`portfolio/SkillsSection`** | **Firebase `Skill[]` props** | ❌ **Never imported** |
| **`portfolio/ExperienceSection`** | **Firebase `Experience[]` props** | ❌ **Never imported** |
| **`portfolio/ProjectsSection`** | **Firebase `Project[]` props** | ❌ **Never imported** |
| **`portfolio/EducationSection`** | **Firebase `Education[]` props** | ❌ **Never imported** |
| **`portfolio/ContactSection`** | **Firebase `Profile` props** | ❌ **Never imported** |

**Bottom line:** Firebase data drives **only** the Header brand initial, the Footer copyright name, and SEO meta tags. **Every single content section** (hero, bio, skills, experience, projects, volunteer, publications, contact) renders from i18n static files with hardcoded fallback text.

---

## 4. EDGE CASES

| Edge Case | Handling | Status |
|---|---|---|
| Firebase not configured | `isFirebaseConfigured()` checks env vars | ✅ Graceful |
| Fetch error | try/catch in adapter + portfolioService | ✅ Graceful |
| Null profile | Returns `{ data: null, error: "..." }` | ✅ Graceful |
| Empty skills array | `?? []` in adapter mapping | ✅ Handled |
| Empty experience array | `?? []` in adapter mapping | ✅ Handled |
| Empty projects array | `?? []` in adapter mapping | ✅ Handled |
| Empty education array | `?? []` in adapter mapping | ✅ Handled |
| Missing optional fields | Defaults to `''` or `undefined` | ✅ Handled |
| Language fallback | Only `en` locale exists | ⚠️ Partial — no fallback yet |
| `portfolio/` components (if used) | Empty state: `return null` or fallback text | ✅ Handled within those components |

---

## 5. DUPLICATE / ORPHANED CODE

### 5.1 Duplicate Service Layer

**File:** `src/services/portfolio.service.ts`
- Full reimplementation of portfolio fetching using subcollection structure
- Never imported by anything (not in `services/index.ts`)
- Uses different Firestore paths than the active service
- Has different error handling patterns

### 5.2 Unused Portfolio Components

**Folder:** `src/components/portfolio/`
- 6 fully implemented Server Components: HeroSection, SkillsSection, ExperienceSection, ProjectsSection, EducationSection, ContactSection
- All accept Firebase-typed props and handle empty/null states
- **Zero imports** from any page or layout
- Contains hardcoded English text (headings, descriptions) — NOT i18n-aware

### 5.3 Missing Tests

- 7 UI component tests exist (Button, Badge, Card, Input, Typography, Sonner, Footer)
- **Zero tests** for: `portfolio-adapter.ts`, `services/portfolio.ts`, `services/firebase.ts`, `services/portfolio.service.ts`, `types/portfolio.ts`

---

## 6. SUMMARY OF FINDINGS

### Critical Issues (Blocks Launch)

| # | Issue | Impact |
|---|-------|--------|
| 1 | **Firebase data never reaches content sections** — `page.tsx` renders `sections/*` (i18n-only) instead of `portfolio/*` (Firebase-driven) | All portfolio data from Firebase is invisible on the public page |
| 2 | **Duplicate, incompatible service layers** — `services/portfolio.service.ts` uses subcollections while `services/portfolio.ts` uses top-level collections | Guaranteed runtime failure if the wrong layer is used with actual Firestore data |

### Moderate Issues

| # | Issue | Impact |
|---|-------|--------|
| 3 | Adapter hardcodes `available: false`, `availableFor: []`, experience `tech: []`, experience `type: 'work'` | Firebase data for these fields is discarded |
| 4 | Adapter discards 3 collections: publications, licenses, volunteerExperience, organizations | These data types are fetched but never surfaced |
| 5 | Only `en` locale exists — no i18n fallback mechanism for other languages | Future localization is entirely missing |

### Minor Issues

| # | Issue | Impact |
|---|-------|--------|
| 6 | `portfolio/` components have hardcoded English headings (not i18n) | If they were wired up, they'd skip all translation |
| 7 | No integration tests for the data pipeline | No regression safety |
| 8 | `services/portfolio.service.ts` orphaned with no clear migration path | Dead code |

---

## 7. CONFIDENCE RATING

**Medium** — I have traced every path through the source code on disk and verified the imports/exports. However, there is no running app with real Firebase credentials to verify runtime behavior. The adapter mapping logic *is* structurally correct *if* the Firestore documents follow the `ProfileData`/`SkillData`/etc. schema. The primary risk is structural (wrong components being rendered) rather than data mapping — which is 100% confirmed by static analysis.

### To Reach High Confidence

1. Wire `components/portfolio/*` into `page.tsx` sections (replace `sections/*` imports)
2. Delete or merge `services/portfolio.service.ts` with the active service layer
3. Add unit tests for adapter mapping with mock data
4. Verify with live Firebase credentials

---

*Report generated by Prof. Moriel for Michael review. See `@/lib/portfolio-adapter.ts`, `@/services/portfolio.ts`, `@/services/firebase.ts`, `@/services/portfolio.service.ts`, and `@/components/portfolio/` for the files in scope.*

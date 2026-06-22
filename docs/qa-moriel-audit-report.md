# QA Audit Report: Prof Moriel — Content Accuracy & Firebase Data Rendering

**Auditor:** Prof Moriel  
**Date:** 2026-06-22  
**Branch:** `refactor/portfolio`  
**Repo:** `D:/Kerja/yoel-portfolio/`

---

## 1. Content Structure Audit (i18n messages)

### 1.1 messages/en/ — Structure

| File | Status | Notes |
|------|--------|-------|
| `messages/en/common.json` | ✅ | 18 UI strings (loadMore, backToTop, loading, etc.) — adequate |
| `messages/en/navigation.json` | ✅ | 9 nav strings — adequate |
| `messages/en/home.json` | ⚠️ | See section analysis below |

### 1.2 home.json — Section Coverage

| Section | Present | Component | Status |
|---------|---------|-----------|--------|
| `meta` | ✅ | Used in `generateMetadata` | OK |
| `hero` | ✅ | `sections/HeroSection` | **MISMATCH** (see below) |
| `profile` | ✅ | `sections/ProfileSection` | ✅ Keys align |
| `experience` | ✅ | `sections/ExperienceTimeline` | ✅ Keys align (subheading unused but harmless) |
| `projects` | ✅ | `sections/ProjectsSection` | ✅ Keys align |
| `volunteer` | ✅ | `sections/VolunteerSection` | ✅ Keys align |
| `publications` | ✅ | `sections/PublicationsSection` | ✅ Keys align |
| `contact` | ✅ | `sections/ContactSection` | ✅ Keys align |
| **education** | ❌ **MISSING** | No sections/Education component on page | No i18n heading for Education |
| **skills** | (embedded) | Inside `profile.skillsHeading` in ProfileSection | No standalone skills section i18n |

### 1.3 ⚠️ CRITICAL: HeroSection i18n Key Mismatch

**Component** (`sections/HeroSection.tsx`, line 20–21, 58, 65, 72, 83, 89):  
Uses `useTranslations('hero')` and accesses keys:
- `name` (line 58: `t.raw('name')`)
- `title` (line 65: `t.raw('title')`)
- `tagline` (line 72: `t.raw('tagline')`)
- `ctaProjects` (line 83: `t.raw('ctaProjects')`)
- `ctaContact` (line 89: `t.raw('ctaContact')`)

**home.json** provides these `hero` keys:
- `badge`, `badge2`, `title`, `description`, `ctaPrimary`, `ctaSecondary`

**Only `title` matches.** The other 4 keys will silently fall back to hardcoded defaults:
- `name` → fallback `'Yoel'`
- `tagline` → fallback `'Turning complex data...'`
- `ctaProjects` → fallback `'View Projects'`
- `ctaContact` → fallback `'Get in Touch'`

**Severity: HIGH** — i18n content is loaded but unused; hardcoded fallbacks render instead.

**Note:** The `home.json` hero section has `description` which maps semantically to the HeroSection's `tagline` slot. The key naming diverged between i18n author and component author.

### 1.4 Content Accuracy (name, title, bio)

| Field | i18n Value | Expected (Yoel) | Status |
|-------|-----------|-----------------|--------|
| `profile.name` | "Yoel Sitorus" | Yoel Sitorus | ✅ Accurate |
| `hero.title` | "Turning Data into\nIntelligent Decisions" | Data Science tagline | ✅ Reasonable |
| `profile.bio` | Data Scientist & ML Engineer bio | Reflects Yoel's background | ✅ Accurate content |
| Experience entries | 3 companies matching Yoel's profile | Zemetia, Youdo, Freshideas | ✅ Accurate |
| Project entries | 6 projects | AI/ML projects | ✅ Reasonable |

### 1.5 Content Completeness (English locale)

✅ English (en) locale is complete with all required namespaces.  
⚠️ Only one locale exists (`en`). The `routing.ts` configures `locales: ['en']`, so there is no language fallback to test — the only locale is always the default.

---

## 2. Firebase Data Integration

### 2.1 Architecture Overview

```
Page (page.tsx)
 ├── fetchPortfolioData()       ← portfolio-adapter.ts
 │    └── portfolioService.getPortfolioData()  ← services/portfolio.ts
 │         ├── firestoreService.profile.getByAccountId()  ← 'profiles' collection
 │         ├── skill.getByField()      ← 'skills'
 │         ├── education.getByField()  ← 'education'
 │         ├── experience.getByField() ← 'experience'
 │         ├── project.getByField()    ← 'projects'
 │         ├── publication.getByField()← 'publications'
 │         ├── license.getByField()    ← 'licenses'
 │         ├── volunteerExperience...  ← 'volunteerExperience'
 │         └── organization.getByField() ← 'organizations'
 │
 └── Passes profile?.name to <Header> and <Footer>
     └── Sections use i18n only (no Firebase data passed to section components)
```

**Key finding:** Firebase data flows to Header and Footer (display name) and SEO metadata only. Section components use static i18n data, not Firebase.

### 2.2 Type Definitions (`src/types/portfolio.ts`)

Interface | Fields | Status
----------|--------|-------
`Profile` | `name, tagline, bio, shortBio, avatar, location, email, phone?, resumeUrl?, socials, available, availableFor` | ✅ Correct shape for UI rendering
`Skill` | `id, name, category, level, icon?, order` | ✅ 
`Experience` | `id, title, company, location?, period, description, highlights, tech, type, order` | ✅ 
`Project` | `id, title, description, tech, link?, github?, image?, featured, order` | ✅ 
`Education` | `id, school, degree, major, period, gpa?, achievements, order` | ✅ 
`PortfolioData` | `profile, skills, experiences, projects, education` | ⚠️ **Only 5 collections** — does not include publications, licenses, volunteerExperience, or organizations

**Issue:** `PortfolioData` in `types/portfolio.ts` only has 5 sub-types. The Firebase service fetches 8 collections + profile (9 total), but the UI type only models 5. Publications, licenses, volunteer, organizations have no UI type mapping yet.

### 2.3 Adapter Analysis (`src/lib/portfolio-adapter.ts`)

**Field mapping correctness:**

| UI Type (target) | Firestore Data type (source) | Mapping | Status |
|-----------------|------------------------------|---------|--------|
| `Profile.name` | `ProfileData.fullName` | `raw.profile.fullName` | ✅ 
| `Profile.tagline` | `ProfileData.headline` | `raw.profile.headline` | ✅ 
| `Profile.bio` | `ProfileData.summary` | `raw.profile.summary` | ✅ 
| `Profile.shortBio` | `ProfileData.summary (first line)` | Derived from summary | ✅ 
| `Profile.avatar` | `ProfileData.avatarUrl` | Direct | ✅ 
| `Profile.phone` | `ProfileData.phone` | **NOT MAPPED** | ⚠️ **Missing mapping** |
| `Profile.available` | — | Hardcoded `false` | ⚠️ Not from data |
| `Profile.availableFor` | — | Hardcoded `[]` | ⚠️ Not from data |
| `Skill.icon` | `SkillData.iconSlug` | **NOT MAPPED** | ⚠️ **Missing mapping** |
| `Experience.tech` | — | Hardcoded `[]` | ⚠️ Not from data |
| `Experience.type` | `ExperienceData.employmentType` | **NOT MAPPED** | ⚠️ **Missing mapping** |
| `Experience.highlights` | `ExperienceData.achievements` | ✅ 
| `Project.image` | `ProjectData.coverImage` | ✅ 
| `Project.link` | `ProjectData.liveUrl` | ✅ 
| `Education.school` | `EducationData.institution` | ✅ 
| `Education.major` | `EducationData.field` | ✅ 
| `Education.achievements` | `EducationData.description` (wrapped in array) | ⚠️ **Semantic mismatch** — single desc becomes achievements array |

### 2.4 Service Validation (`src/services/portfolio.ts`)

**Composite fetcher (`getPortfolioData`):**
- ✅ Fetches profile first, then 8 sub-collections in parallel
- ✅ Returns `null` if no profile found
- ⚠️ Claimed "8 Firestore collections" in task body — actually **9 queries** (1 profile + 8 sub-collections)
- ⚠️ Contact collection (10th) not fetched in portfolio data

**`getPublishedProjects`:**
- ✅ Filters by `status === 'PUBLISHED'`
- ⚠️ Uses `as unknown as Array<Record<string, unknown>>` casts — type-unsafe pattern

### 2.5 Dual Service Problem

Two parallel Firebase service layers exist:

| Module | Location | Collections | Used by |
|--------|----------|-------------|---------|
| `portfolio.service.ts` (OLD) | `src/services/portfolio.service.ts` | `portfolio/profile/*` (subcollections) | **NO IMPORTS** — dead code |
| `portfolio.ts` + `firebase.ts` (NEW) | `src/services/portfolio.ts` | `profiles`, `skills`, `education`, `experience`, `projects`, `publications`, `licenses`, `volunteerExperience`, `organizations`, `contacts` | Adapter + imported via `@/services/index.ts` |

✅ The adapter correctly imports the NEW service via `@/services`  
✅ The OLD service was already flagged as dead code in Phase 5 parent

---

## 3. Data Rendering Verification

### 3.1 Data Flow Trace

```
Firestore Document
  ↓
firestoreService.getByAccountId() / getByField()
  ↓  (returns ProfileData, SkillData, etc.)
portfolioService.getPortfolioData()
  ↓  (returns PortfolioData with raw Firestore types)
portfolio-adapter.fetchPortfolioData()
  ↓  (maps to UI types: Profile, Skill, etc.)
page.tsx
  ├── profile.name → <Header profileName={} />
  ├── profile.name → <Footer profileName={} />
  ├── profile.name/tagline → generateMetadata()
  └── profile → (NOT passed to sections — they use i18n)
```

### 3.2 Section Data Sources

| Component | Data Source | Firebase-backed? |
|-----------|-------------|-----------------|
| `Header` | `profileName` prop from Firebase | ✅ Yes (profile name) |
| `Footer` | `profileName` prop from Firebase | ✅ Yes (profile name) |
| `HeroSection` | i18n `home.hero.*` | ❌ No |
| `ProfileSection` | i18n `home.profile.*` | ❌ No |
| `ExperienceTimeline` | i18n `home.experience.*` | ❌ No |
| `ProjectsSection` | i18n `home.projects.*` | ❌ No |
| `VolunteerSection` | i18n `home.volunteer.*` | ❌ No |
| `PublicationsSection` | i18n `home.publications.*` | ❌ No |
| `ContactSection` | i18n `home.contact.*` | ❌ No |
| SEO metadata | Firebase (profile) + i18n fallback | ✅ Partially |

### 3.3 Unused Components (pre-confirmed)

The `src/components/portfolio/` directory has Firebase-data-ready alternatives that are **not imported anywhere**:
- `HeroSection.tsx`, `SkillsSection.tsx`, `ExperienceSection.tsx`, `ProjectsSection.tsx`, `EducationSection.tsx`, `ContactSection.tsx`

These are dead code per the Phase 5 parent audit. Intended for future use when sections switch from i18n to Firebase data.

---

## 4. Edge Cases

### 4.1 Missing / Empty Fields

| Scenario | Component Behavior | Assessment |
|----------|-------------------|------------|
| Firebase not configured (no `.env.local`) | `fetchPortfolioData()` returns `{ data: null, error: "Firebase not configured..." }` → page uses `.catch(() => null)`, `profile?.name ?? null` → Header shows "P" for "Portfolio" | ✅ Graceful |
| Profile exists but empty fields | Adapter uses `?? ''`, `?? 0`, `?? []` defaults | ✅ Null-safe |
| Skills empty array | `(raw.skills ?? []).map(...)` produces `[]` → badge section renders blank | ✅ Graceful |
| All null data | Returns `{ data: null, error: null }` → page has null profile, sections still render from i18n | ✅ Fully graceful |
| Firebase fetch throws | Page catches → `portfolio = null` → all Firebase features disabled | ✅ Safe |
| Missing profile document | `raw.profile` is null → returns `{ data: null, error: null }` | ✅ 
| `shortBio` undefined | `profile?.shortBio ?? t('description')` → i18n fallback | ✅ 

### 4.2 Error States

| Error | Handling | Assessment |
|-------|----------|------------|
| Firebase credentials missing | `isFirebaseConfigured()` returns false early, returns error message | ✅ Clean separation |
| Firestore connection timeout | Caught by try/catch in each fetch function, returns null | ✅ 
| Malformed Firestore data | `(s as unknown as { id?: string }).id` cast pattern handles missing fields | ⚠️ Bypasses TS safety |
| Adapter-level exception | Outer try/catch returns `{ data: null, error: message }` | ✅ 

### 4.3 Language Fallback

Only locale is `en`. The routing config has `locales: ['en']`, so there is no fallback to test. If a second locale were added:
- `i18n/request.ts` would fall back to `en` via `hasLocale()` check ✅
- No non-English message files exist yet

### 4.4 Adapter Data on Render

**Current state:** Firebase data is fetched on every page render (server-side). This is fine for SSR but means:
- ✅ Works with Next.js fetch cache
- ✅ Works with TanStack Query (mentioned in comments)
- ⚠️ No explicit cache strategy or stale-while-revalidate behavior implemented

---

## 5. Findings Summary

### Blocking

| # | Finding | File(s) | Severity |
|---|---------|---------|----------|
| 1 | **HeroSection i18n key mismatch** — component expects `hero.name/tagline/ctaProjects/ctaContact` but i18n provides `hero.badge/description/ctaPrimary/ctaSecondary` | `sections/HeroSection.tsx` vs `messages/en/home.json` | **HIGH** |

### Notable (should fix)

| # | Finding | File(s) | Severity |
|---|---------|---------|----------|
| 2 | `Profile.phone` not mapped from `ProfileData.phone` | `portfolio-adapter.ts` | LOW |
| 3 | `Skill.icon` not mapped from `SkillData.iconSlug` | `portfolio-adapter.ts` | LOW |
| 4 | `Experience.tech` hardcoded to `[]` instead of from data | `portfolio-adapter.ts` | LOW |
| 5 | `Experience.type` not mapped from `ExperienceData.employmentType` | `portfolio-adapter.ts` | LOW |
| 6 | `Education.achievements` mapped from single `description` wrapped in array — semantic loss | `portfolio-adapter.ts` | LOW |
| 7 | No education section heading in i18n (education data comes from Firebase but has no i18n label for when it's rendered) | `messages/en/home.json` | LOW |
| 8 | `PortfolioData` UI type (`types/portfolio.ts`) only covers 5 collections — publications, licenses, volunteerExperience, organizations have no UI mapping | `types/portfolio.ts` | MEDIUM |
| 9 | OLD `services/portfolio.service.ts` is unused dead code (already flagged in parent) | `services/portfolio.service.ts` | LOW (known) |
| 10 | `portfolio/` components (6 files) are unused dead code (already flagged in parent) | `components/portfolio/*` | LOW (known) |

### Design Observations (not bugs)

- Sections use i18n by design (static, SEO-friendly). Firebase powers metadata/Header/Footer only. This is intentional — the `portfolio/` components exist for a future switch to data-driven sections.
- The 2-service transition (Firebase → Prisma) is architecturally sound but means some code paths are unused.
- `firebase.ts` lazy-initializes Admin SDK, which is correct for edge/serverless environments.

---

## 6. Confidence Rating

**Overall: MEDIUM**

**Justification:**
- ✅ i18n content is accurate for Yoel's profile (name, bio, experience, projects)
- ✅ Firebase → adapter → UI type mapping is structurally correct
- ✅ Error handling and graceful degradation are solid
- ✅ Architecture supports planned Prisma migration
- ⚠️ **One HIGH-severity finding** (HeroSection i18n key mismatch) — visual content renders wrong keys
- ⚠️ No tests for the portfolio data layer (services, adapter, types)
- ⚠️ No runtime verification performed (Firebase not configured in this environment)
- ⚠️ The sections/Firebase split means rendering correctness depends on i18n, not data-layer tests

**To raise to HIGH confidence:**  
- Fix the HeroSection i18n key mismatch  
- Add unit tests for portfolio-adapter.ts  
- Add integration tests for the data flow (stub Firestore)  

---

*Report compiled by Prof Moriel. Review requested by Michael.*

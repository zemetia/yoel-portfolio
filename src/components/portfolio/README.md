# Portfolio Components (Firebase Data Integration)

These components are Firebase-data-ready alternatives to the i18n-driven
sections in `src/components/sections/`. Each accepts typed props (Profile,
Skill[], Experience[], etc.) so they render directly from Firebase Firestore
data rather than from `next-intl` translations.

## When to use them

Swap a `sections/` import for the corresponding `portfolio/` component
when the page has Firebase portfolio data available through
`@/lib/portfolio-adapter`:

```tsx
// i18n-driven (current)
import { HeroSection } from '@/components/sections';

// Firebase-data-driven (use when data is available)
import { HeroSection } from '@/components/portfolio';
```

## Component map

| portfolio/ component     | Active sections/ equivalent    |
|--------------------------|-------------------------------|
| `HeroSection`            | `sections/HeroSection`        |
| `SkillsSection`          | (no sections equivalent)      |
| `ExperienceSection`      | `sections/ExperienceTimeline` |
| `ProjectsSection`        | `sections/ProjectsSection`    |
| `EducationSection`       | (no sections equivalent)      |
| `ContactSection`         | `sections/ContactSection`     |

## Null-safe design

Every component handles `null` input gracefully. When Firebase is not
configured or data hasn't been seeded yet, each section renders a
meaningful placeholder so the UI never breaks.

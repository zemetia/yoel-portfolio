/**
 * Portfolio data types — maps to Firebase Firestore collections.
 * All timestamps are Firestore Timestamp serialized to ISO strings.
 */

// ─── Social Links ──────────────────────────────────────────────────────────

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  website?: string;
  email?: string;
}

// ─── Profile ───────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  shortBio: string;
  avatar: string;
  location: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  socials: SocialLinks;
  available: boolean;
  availableFor: string[];
}

// ─── Skill ─────────────────────────────────────────────────────────────────

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'ai' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  order: number;
}

// ─── Experience ────────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  type: 'work' | 'freelance' | 'volunteer';
  order: number;
}

// ─── Project ───────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  featured: boolean;
  order: number;
}

// ─── Education ─────────────────────────────────────────────────────────────

export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  period: string;
  gpa?: string;
  achievements: string[];
  order: number;
}

// ─── Root Portfolio Data ───────────────────────────────────────────────────

export interface PortfolioData {
  profile: Profile | null;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
}

// ─── Service Response ──────────────────────────────────────────────────────

export interface PortfolioServiceResponse<T> {
  data: T | null;
  error: string | null;
  fetchedAt: string;
}

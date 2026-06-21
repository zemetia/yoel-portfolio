/**
 * Portfolio service — fetches all portfolio data from Firebase Firestore.
 *
 * Architecture:
 * - Server-only (uses firebase-admin)
 * - Returns typed PortfolioData with null-safe fields
 * - Graceful fallback when Firebase is not configured (dev/build)
 * - Memoized: Next.js fetch cache + TanStack Query compatible
 */

import 'server-only';

import { getFirestore, isFirebaseConfigured } from '@/lib/firebase-admin';
import type {
  PortfolioData,
  PortfolioServiceResponse,
  Profile,
  Skill,
  Experience,
  Project,
  Education,
} from '@/types/portfolio';
import type { DocumentSnapshot, CollectionReference, DocumentData } from 'firebase-admin/firestore';

// ─── Collection paths ────────────────────────────────────────────────────

const PORTFOLIO_COLLECTION = 'portfolio';

// ─── Internal helpers ─────────────────────────────────────────────────────

function docSnapshotToData<T>(snapshot: DocumentSnapshot | null): T | null {
  if (!snapshot?.exists) return null;
  return snapshot.data() as T;
}

async function collectionToArray<T>(
  collectionRef: CollectionReference<DocumentData>,
): Promise<T[]> {
  const snapshot = await collectionRef.orderBy('order', 'asc').get();
  if (snapshot.empty) return [];
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as T[];
}

// ─── Fetch functions (exported for individual use) ────────────────────────

/**
 * Fetch the profile document.
 */
export async function fetchProfile(): Promise<Profile | null> {
  const db = getFirestore();
  if (!db) return null;

  try {
    const doc = await db.collection(PORTFOLIO_COLLECTION).doc('profile').get();
    return docSnapshotToData<Profile>(doc);
  } catch (err) {
    console.error('[portfolio] fetchProfile failed:', err);
    return null;
  }
}

/**
 * Fetch all skills.
 */
export async function fetchSkills(): Promise<Skill[]> {
  const db = getFirestore();
  if (!db) return [];

  try {
    const ref = db.collection(`${PORTFOLIO_COLLECTION}/profile/skills`);
    return await collectionToArray<Skill>(ref);
  } catch (err) {
    console.error('[portfolio] fetchSkills failed:', err);
    return [];
  }
}

/**
 * Fetch all experiences.
 */
export async function fetchExperiences(): Promise<Experience[]> {
  const db = getFirestore();
  if (!db) return [];

  try {
    const ref = db.collection(`${PORTFOLIO_COLLECTION}/profile/experiences`);
    return await collectionToArray<Experience>(ref);
  } catch (err) {
    console.error('[portfolio] fetchExperiences failed:', err);
    return [];
  }
}

/**
 * Fetch all projects.
 */
export async function fetchProjects(): Promise<Project[]> {
  const db = getFirestore();
  if (!db) return [];

  try {
    const ref = db.collection(`${PORTFOLIO_COLLECTION}/profile/projects`);
    return await collectionToArray<Project>(ref);
  } catch (err) {
    console.error('[portfolio] fetchProjects failed:', err);
    return [];
  }
}

/**
 * Fetch all education entries.
 */
export async function fetchEducation(): Promise<Education[]> {
  const db = getFirestore();
  if (!db) return [];

  try {
    const ref = db.collection(`${PORTFOLIO_COLLECTION}/profile/education`);
    return await collectionToArray<Education>(ref);
  } catch (err) {
    console.error('[portfolio] fetchEducation failed:', err);
    return [];
  }
}

// ─── Composite fetcher ───────────────────────────────────────────────────

/**
 * Fetch ALL portfolio data in parallel.
 * This is the main entry point for page-level Server Components.
 *
 * Returns a typed response with null-safe fields.
 * When Firebase is not configured, returns all-null with a descriptive error.
 */
export async function fetchPortfolioData(): Promise<PortfolioServiceResponse<PortfolioData>> {
  if (!isFirebaseConfigured()) {
    return {
      data: null,
      error: 'Firebase not configured — set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY in .env.local',
      fetchedAt: new Date().toISOString(),
    };
  }

  const fetchedAt = new Date().toISOString();

  try {
    const [profile, skills, experiences, projects, education] = await Promise.all([
      fetchProfile(),
      fetchSkills(),
      fetchExperiences(),
      fetchProjects(),
      fetchEducation(),
    ]);

    const data: PortfolioData = {
      profile,
      skills,
      experiences,
      projects,
      education,
    };

    return { data, error: null, fetchedAt };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error fetching portfolio data';
    console.error('[portfolio] fetchPortfolioData failed:', message);
    return { data: null, error: message, fetchedAt };
  }
}

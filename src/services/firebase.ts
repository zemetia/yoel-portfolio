// services/firebase.ts
//
// Firestore service layer — live data source for portfolio content.
// Prisma is the future migration target; this module maintains the
// same data contracts so switching data sources is a drop-in change.
//
// ─── Architecture ────────────────────────────────────────────────────────────
//
//   Page / API Route
//     → portfolioService.getPortfolioData()    [src/services/portfolio.ts]
//       → firestoreService.collection.*()      [this module]
//         → Firebase Admin SDK (Firestore)
//
//   Future: swap firestoreService for prismaRepository without
//   changing the portfolioService interface.
//
// ─── Usage (server-side only) ────────────────────────────────────────────────
//
//   import { firestoreService } from '@/services/firebase';
//   const profile = await firestoreService.profile.getByAccountId('abc');

import type { Timestamp, DocumentData, CollectionReference } from 'firebase-admin/firestore';

// ─── Types ───────────────────────────────────────────────────────────────────
// Mirrors Prisma schema — same shapes, different backing store.

export interface ProfileData {
  accountId: string;
  fullName?: string;
  headline?: string;
  summary?: string;
  location?: string;
  phone?: string;
  email?: string;
  website?: string | null;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  twitterUrl?: string | null;
  youtubeUrl?: string | null;
  mediumUrl?: string | null;
  avatarUrl?: string | null;
  resumeUrl?: string | null;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface SkillData {
  profileId: string;
  name: string;
  category?: string;
  proficiency?: number;
  iconSlug?: string;
  order?: number;
}

export interface EducationData {
  profileId: string;
  institution: string;
  degree?: string;
  field?: string;
  startDate?: FirebaseFirestore.Timestamp;
  endDate?: FirebaseFirestore.Timestamp;
  isCurrent?: boolean;
  gpa?: string;
  description?: string;
  logoUrl?: string;
}

export interface ExperienceData {
  profileId: string;
  company: string;
  position: string;
  location?: string;
  startDate?: FirebaseFirestore.Timestamp;
  endDate?: FirebaseFirestore.Timestamp;
  isCurrent?: boolean;
  description?: string;
  achievements?: string[];
  companyUrl?: string;
  companyLogo?: string;
  employmentType?: string;
}

export interface ProjectData {
  profileId: string;
  title: string;
  slug: string;
  summary?: string;
  description?: string;
  coverImage?: string;
  gallery?: unknown[];
  body?: unknown[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  caseStudyUrl?: string | null;
  industry?: string;
  duration?: string;
  servicesProvided?: string[];
  filterTag?: string;
  techStack?: string[];
  isFeatured?: boolean;
  status?: 'DRAFT' | 'PUBLISHED';
  publishedAt?: FirebaseFirestore.Timestamp;
  order?: number;
}

export interface PublicationData {
  profileId: string;
  title: string;
  publisher?: string;
  url?: string;
  publishedDate?: FirebaseFirestore.Timestamp;
  description?: string;
  authors?: string[];
  doi?: string;
}

export interface LicenseData {
  profileId: string;
  name: string;
  issuer: string;
  url?: string;
  issueDate?: FirebaseFirestore.Timestamp;
  expiryDate?: FirebaseFirestore.Timestamp;
  doesNotExpire?: boolean;
  credentialId?: string;
  credentialUrl?: string;
  logoUrl?: string;
}

export interface VolunteerExperienceData {
  profileId: string;
  organization: string;
  role: string;
  cause?: string;
  startDate?: FirebaseFirestore.Timestamp;
  endDate?: FirebaseFirestore.Timestamp;
  isCurrent?: boolean;
  description?: string;
  achievements?: string[];
}

export interface OrganizationData {
  profileId: string;
  name: string;
  role?: string;
  url?: string;
  logoUrl?: string;
  startDate?: FirebaseFirestore.Timestamp;
  endDate?: FirebaseFirestore.Timestamp;
  isCurrent?: boolean;
  description?: string;
}

export interface ContactData {
  profileId?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  isRead?: boolean;
  repliedAt?: FirebaseFirestore.Timestamp;
}

// ─── Collection CRUD factory ─────────────────────────────────────────────────

interface CollectionService<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  getByField(field: string, value: string): Promise<T[]>;
  create(data: T): Promise<string>;
  update(id: string, data: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}

function createCollectionService<T extends DocumentData>(
  collectionName: string,
): CollectionService<T> {
  const ref = (): CollectionReference =>
    getFirestore().collection(collectionName);

  return {
    async getAll(): Promise<T[]> {
      const snapshot = await ref().orderBy('createdAt', 'desc').get();
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as unknown as T));
    },

    async getById(id: string): Promise<T | null> {
      const doc = await ref().doc(id).get();
      if (!doc.exists) return null;
      return { id: doc.id, ...doc.data() } as unknown as T;
    },

    async getByField(field: string, value: string): Promise<T[]> {
      const snapshot = await ref().where(field, '==', value).get();
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as unknown as T));
    },

    async create(data: T): Promise<string> {
      const docRef = await ref().add({
        ...data,
        createdAt: FirebaseFirestore.Timestamp.now(),
        updatedAt: FirebaseFirestore.Timestamp.now(),
      });
      return docRef.id;
    },

    async update(id: string, data: Partial<T>): Promise<void> {
      await ref().doc(id).update({
        ...data,
        updatedAt: FirebaseFirestore.Timestamp.now(),
      });
    },

    async delete(id: string): Promise<void> {
      await ref().doc(id).delete();
    },
  };
}

// ─── Lazy initializer ────────────────────────────────────────────────────────
// Firebase Admin SDK is loaded on first access so env vars can be set at runtime.

let _db: FirebaseFirestore.Firestore | null = null;

function getFirestore(): FirebaseFirestore.Firestore {
  if (_db) return _db;

  const admin = require('firebase-admin');

  // Check for service-account-based auth (preferred)
  if (
    process.env['FIREBASE_PROJECT_ID'] &&
    process.env['FIREBASE_CLIENT_EMAIL'] &&
    process.env['FIREBASE_PRIVATE_KEY']
  ) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env['FIREBASE_PROJECT_ID'],
          clientEmail: process.env['FIREBASE_CLIENT_EMAIL'],
          privateKey: (process.env['FIREBASE_PRIVATE_KEY'] || '').replace(/\\n/g, '\n'),
        }),
      });
    }
  } else if (!admin.apps.length) {
    // Fallback: default application credentials (GCP, local emulator)
    admin.initializeApp();
  }

  _db = admin.firestore() as FirebaseFirestore.Firestore;
  return _db;
}

// ─── Exported service ────────────────────────────────────────────────────────

export const firestoreService = {
  /** Returns true when Firebase Admin SDK credentials are available */
  get isConfigured(): boolean {
    return !!(
      process.env['FIREBASE_PROJECT_ID'] ||
      process.env['GOOGLE_APPLICATION_CREDENTIALS']
    );
  },

  /** Lazy-init accessor for raw Firestore instance (for ad-hoc queries) */
  get db(): FirebaseFirestore.Firestore {
    return getFirestore();
  },

  profile: {
    getByAccountId: (accountId: string): Promise<ProfileData | null> =>
      getFirestore()
        .collection('profiles')
        .where('accountId', '==', accountId)
        .limit(1)
        .get()
        .then((snap) => {
          if (snap.empty) return null;
          const doc = snap.docs[0];
          if (!doc) return null;
          return { id: doc.id, ...doc.data() } as unknown as ProfileData;
        }),
    ...createCollectionService<ProfileData>('profiles'),
  },

  skill: createCollectionService<SkillData>('skills'),
  education: createCollectionService<EducationData>('education'),
  experience: createCollectionService<ExperienceData>('experience'),
  project: createCollectionService<ProjectData>('projects'),
  publication: createCollectionService<PublicationData>('publications'),
  license: createCollectionService<LicenseData>('licenses'),
  volunteerExperience:
    createCollectionService<VolunteerExperienceData>('volunteerExperience'),
  organization: createCollectionService<OrganizationData>('organizations'),
  contact: createCollectionService<ContactData>('contacts'),
};

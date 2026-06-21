/**
 * Firebase Admin SDK initializer — server-side only.
 * Lazy-initializes the admin app and provides typed Firestore access.
 *
 * Usage in Server Components / Route Handlers:
 *   import { getFirestore } from '@/lib/firebase-admin';
 *   const db = getFirestore();
 *   const snapshot = await db.collection('portfolio/profile').get();
 */

import type { app, firestore } from 'firebase-admin';

let adminApp: app.App | null = null;
let adminFirestore: firestore.Firestore | null = null;

export interface FirebaseConfig {
  projectId: string;
  clientEmail: string;
  privateKey: string;
  databaseURL?: string;
}

/**
 * Parse Firebase config from environment.
 * Returns null when credentials are missing (safe for dev/build).
 */
function getConfig(): FirebaseConfig | null {
  const projectId = process.env['FIREBASE_PROJECT_ID'];
  const clientEmail = process.env['FIREBASE_CLIENT_EMAIL'];
  const privateKey = process.env['FIREBASE_PRIVATE_KEY']?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  return { projectId, clientEmail, privateKey };
}

/**
 * Get the Firebase Admin app instance.
 * Returns null if credentials are not configured (graceful fallback).
 */
export function getAdminApp(): app.App | null {
  if (adminApp) return adminApp;

  const config = getConfig();
  if (!config) return null;

  // Dynamic import to avoid bundling firebase-admin into client bundles
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const admin = require('firebase-admin') as typeof import('firebase-admin');

  try {
    adminApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: config.projectId,
        clientEmail: config.clientEmail,
        privateKey: config.privateKey,
      }),
      databaseURL: config.databaseURL,
    });
  } catch (err: unknown) {
    // If already initialized, use the existing app
    if (err instanceof Error && err.message?.includes('already exists')) {
      adminApp = admin.app();
    } else {
      console.error('[firebase-admin] init failed:', err instanceof Error ? err.message : String(err));
      return null;
    }
  }

  return adminApp;
}

/**
 * Get the Firestore instance.
 * Returns null if Firebase admin is not configured.
 */
export function getFirestore(): firestore.Firestore | null {
  if (adminFirestore) return adminFirestore;

  const app = getAdminApp();
  if (!app) return null;

  adminFirestore = app.firestore();
  return adminFirestore;
}

/**
 * Check if Firebase admin is configured (useful for graceful fallbacks).
 */
export function isFirebaseConfigured(): boolean {
  return getConfig() !== null;
}

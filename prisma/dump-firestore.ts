/**
 * Firestore explorer + full dump script.
 * Uses client-side Firebase SDK (no service account needed).
 *
 * Usage: npx tsx prisma/dump-firestore.ts
 * Output: D:/Hermes/workspace/research/firebase-dump-complete.json
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';

const firebaseConfig = {
  apiKey: 'AIzaSyDol7ntgBgBHYhqZkxCTuRJGQ5eZn32JnI',
  authDomain: 'lumina-portfolio-yivvo.firebaseapp.com',
  projectId: 'lumina-portfolio-yivvo',
  storageBucket: 'lumina-portfolio-yivvo.firebasestorage.app',
  messagingSenderId: '428284645579',
  appId: '1:428284645579:web:b44a6d758fce7bb2688b4e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const COLLECTIONS = [
  'profile',
  'educations',
  'experiences',
  'projects',
  'publications',
  'skills',
  'volunteerExperiences',
  'contacts',
  'personalStories',
  'publicCvBuilds',
  'cvAnalyses',
  'geminiApiKeys',
  'apiUsageLogs',
  'conversations',
  'visits',
  'users',
];

async function fetchCollection(name: string): Promise<Record<string, unknown>[]> {
  try {
    const snap = await getDocs(query(collection(db, name)));
    if (snap.empty) return [];
    return snap.docs.map(d => {
      const data = d.data();
      // Convert Firestore Timestamps to ISO strings
      const converted = convertTimestamps(data);
      return { id: d.id, ...converted };
    });
  } catch {
    return [];
  }
}

function convertTimestamps(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (val && typeof val === 'object' && 'seconds' in val && 'nanoseconds' in val) {
      // Firestore Timestamp → ISO string
      result[key] = new Date((val as { seconds: number }).seconds * 1000).toISOString();
    } else if (Array.isArray(val)) {
      result[key] = val.map(item =>
        item && typeof item === 'object' ? convertTimestamps(item as Record<string, unknown>) : item
      );
    } else if (val && typeof val === 'object') {
      result[key] = convertTimestamps(val as Record<string, unknown>);
    } else {
      result[key] = val;
    }
  }
  return result;
}

async function main() {
  console.log('🔍 Exploring Firestore collections...\n');

  const dump: Record<string, unknown[]> = {};

  for (const name of COLLECTIONS) {
    const docs = await fetchCollection(name);
    dump[name] = docs;
    if (docs.length > 0) {
      console.log(`✅ ${name}: ${docs.length} docs`);
      // Show field names of first doc
      const fields = Object.keys(docs[0]!).filter(k => k !== 'id');
      console.log(`   fields: ${fields.join(', ')}`);
    } else {
      console.log(`   ${name}: 0 docs`);
    }
  }

  const outPath = path.resolve('D:/Hermes/workspace/research/firebase-dump-complete.json');
  fs.writeFileSync(outPath, JSON.stringify(dump, null, 2), 'utf-8');
  console.log(`\n📦 Saved to: ${outPath}`);

  // Summary
  console.log('\n=== Summary ===');
  for (const [name, docs] of Object.entries(dump)) {
    if (docs.length > 0) console.log(`  ${name}: ${docs.length}`);
  }
}

main().catch(e => { console.error('❌', e); process.exit(1); });

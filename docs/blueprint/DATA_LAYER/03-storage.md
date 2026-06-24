# Data Layer — 03: MinIO Object Storage

← [02 — Firestore](./02-firestore.md) | [DATA_LAYER.md](../DATA_LAYER.md) | [Blueprint INDEX](../INDEX.md)

---

## Overview

MinIO provides S3-compatible object storage for portfolio media (avatars, project screenshots, experience images). All access is **server-side only** (`import 'server-only'` at top of `storage.ts`).

---

## Files

| File | Purpose |
|---|---|
| [`src/lib/storage.ts`](../../../src/lib/storage.ts) | MinIO client singleton + all storage operations |
| [`src/app/api/upload/route.ts`](../../../src/app/api/upload/route.ts) | Upload API — multipart form or base64 JSON |
| [`src/app/api/storage/route.ts`](../../../src/app/api/storage/route.ts) | Storage listing / management API |

---

## Bucket Structure

```
portfolio-images/
  avatars/        ← Profile photo
  projects/       ← Project screenshots / cover images
  experiences/    ← Experience / company logos
  general/        ← Other uploads
```

Bucket is auto-created with public-read policy on first `ensureBucket()` call.

---

## Storage API (`src/lib/storage.ts`)

```ts
import {
  uploadFile,     // Upload Buffer
  uploadBase64,   // Upload base64 string
  uploadFromPath, // Upload from local file path
  deleteFile,     // Delete by object key
  listFiles,      // List all files in a folder
  getPresignedUrl,// Temporary upload URL for browser direct upload
  fileExists,     // Check if object key exists
  ensureBucket,   // Create bucket if not exists (call once at startup)
} from '@/lib/storage';
import type { Folder, UploadResult, ListResult } from '@/lib/storage';

type Folder = 'avatars' | 'projects' | 'experiences' | 'general';

// Returns: { url, key, bucket, etag }
const result: UploadResult = await uploadFile('avatars', 'photo.webp', buffer, 'image/webp');
```

Public URL format: `${MINIO_PUBLIC_URL}/${MINIO_BUCKET}/${folder}/${name}`

---

## Upload API (`POST /api/upload`)

Accepts two formats:

**Multipart form:**
```
POST /api/upload
Content-Type: multipart/form-data
Body: file (File), folder (string, optional — default 'general')
```

**JSON base64:**
```json
POST /api/upload
{ "base64": "data:image/png;base64,...", "name": "avatar.png", "folder": "avatars" }
```

Response: `{ url, key, bucket, etag }` (UploadResult)

**Check existence (`GET /api/upload?key=avatars/photo.webp`)** → `{ key, exists: boolean }`

---

## Environment Variables

| Variable | Default | Purpose |
|---|---|---|
| `MINIO_ENDPOINT` | `localhost` | MinIO server hostname |
| `MINIO_PORT` | `9000` | MinIO API port |
| `MINIO_USE_SSL` | `false` | Connect with TLS |
| `MINIO_ACCESS_KEY` | `minioadmin` | MinIO access key |
| `MINIO_SECRET_KEY` | *(required in prod)* | MinIO secret key |
| `MINIO_BUCKET` | `portfolio-images` | Bucket name |
| `MINIO_PUBLIC_URL` | `http://localhost:9000` | Public CDN / reverse-proxy base URL |

---

## docker-compose

A `docker-compose.hermes.yml` is included at the project root for local MinIO + Hermes agent stack. See `.env.hermes.example` for required variables.

---

← [02 — Firestore](./02-firestore.md) | [DATA_LAYER.md](../DATA_LAYER.md)

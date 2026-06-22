/**
 * MinIO Storage Service
 *
 * Uploads and manages image files for portfolio content (avatars, project screenshots,
 * experience images). Files are stored in a private bucket and served via a public
 * CDN/reverse-proxy URL.
 *
 * ─── Bucket Structure ─────────────────────────────────────────────────────────
 *   portfolio-images/
 *     avatars/          ← Profile photo
 *     projects/         ← Project screenshots / cover images
 *     experiences/      ← Experience / company logos
 *     general/          ← Other uploads
 *
 * ─── Env ──────────────────────────────────────────────────────────────────────
 *   MINIO_ENDPOINT=localhost         (MinIO server hostname)
 *   MINIO_PORT=9000                  (MinIO API port)
 *   MINIO_USE_SSL=false              (connect to MinIO without TLS)
 *   MINIO_ACCESS_KEY=minioadmin
 *   MINIO_SECRET_KEY=...
 *   MINIO_BUCKET=portfolio-images
 *   MINIO_PUBLIC_URL=https://api.storage.zemetia.com   (public CDN/reverse-proxy base)
 */

import 'server-only';

import { Client as MinioClient } from 'minio';

// ─── Config ──────────────────────────────────────────────────────────────────

const ENDPOINT = process.env['MINIO_ENDPOINT'] ?? 'localhost';
const PORT = parseInt(process.env['MINIO_PORT'] ?? '9000', 10);
const USE_SSL = process.env['MINIO_USE_SSL'] === 'true';
const ACCESS_KEY = process.env['MINIO_ACCESS_KEY'] ?? 'minioadmin';
const SECRET_KEY = process.env['MINIO_SECRET_KEY'] ?? '';
const BUCKET = process.env['MINIO_BUCKET'] ?? 'portfolio-images';
const PUBLIC_URL =
  process.env['MINIO_PUBLIC_URL'] ?? 'http://localhost:9000';

// ─── Client Singleton ────────────────────────────────────────────────────────

let _client: MinioClient | null = null;

function getClient(): MinioClient {
  if (_client) return _client;
  _client = new MinioClient({
    endPoint: ENDPOINT,
    port: PORT,
    useSSL: USE_SSL,
    accessKey: ACCESS_KEY,
    secretKey: SECRET_KEY,
  });
  return _client;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export type UploadResult = {
  /** Public URL of the uploaded file */
  url: string;
  /** Object key inside the bucket */
  key: string;
  /** Bucket name */
  bucket: string;
  /** ETag (MD5) returned by MinIO */
  etag: string;
};

export type ListResult = {
  name: string;
  prefix: string;
  size: number;
  etag: string;
  lastModified: Date;
  url: string;
};

export type Folder = 'avatars' | 'projects' | 'experiences' | 'general';

/**
 * Ensure the bucket exists — call once at startup.
 */
export async function ensureBucket(): Promise<void> {
  const client = getClient();
  const exists = await client.bucketExists(BUCKET);
  if (!exists) {
    await client.makeBucket(BUCKET, 'us-east-1');
    // Set public-read policy so CDN / reverse-proxy can serve files
    const policy = {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Principal: { AWS: ['*'] },
          Action: ['s3:GetObject'],
          Resource: [`arn:aws:s3:::${BUCKET}/*`],
        },
      ],
    };
    await client.setBucketPolicy(
      BUCKET,
      JSON.stringify(policy),
    );
    console.warn(`✅ Bucket "${BUCKET}" created with public-read policy`);
  }
}

/**
 * Upload a buffer / file to MinIO.
 *
 * @param folder  Subfolder under the bucket (avatars, projects, etc.)
 * @param name    File name (e.g. "avatar-123.webp" or "project-cover.png")
 * @param buffer  File content as Buffer
 * @param mime    MIME type (e.g. "image/webp", "image/png")
 * @returns       UploadResult with public URL
 */
export async function uploadFile(
  folder: Folder,
  name: string,
  buffer: Buffer,
  mime: string,
): Promise<UploadResult> {
  const client = getClient();
  const key = `${folder}/${name}`;

  const etag = await client.putObject(BUCKET, key, buffer, buffer.length, {
    'Content-Type': mime,
    'Cache-Control': 'public, max-age=31536000, immutable',
  });
  const etagStr = typeof etag === 'string' ? etag : etag.etag || '';

  const url = `${PUBLIC_URL}/${BUCKET}/${key}`;

  return { url, key, bucket: BUCKET, etag: etagStr };
}

/**
 * Upload a base64-encoded image.
 *
 * @param folder  Subfolder
 * @param name    File name
 * @param base64  Base64 string (with or without data:image/... prefix)
 * @returns       UploadResult
 */
export async function uploadBase64(
  folder: Folder,
  name: string,
  base64: string,
): Promise<UploadResult> {
  // Strip data:image/...;base64, prefix if present
  const raw = base64.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(raw, 'base64');

  // Detect MIME from prefix or fallback
  let mime = 'image/png';
  if (base64.startsWith('data:')) {
    mime = base64.slice(5, base64.indexOf(';'));
  }

  return uploadFile(folder, name, buffer, mime);
}

/**
 * Upload a file from a local path.
 *
 * @param folder    Subfolder
 * @param name      File name
 * @param filePath  Absolute path to local file
 * @returns         UploadResult
 */
export async function uploadFromPath(
  folder: Folder,
  name: string,
  filePath: string,
): Promise<UploadResult> {
  const fs = await import('fs/promises');
  const buffer = await fs.readFile(filePath);
  const ext = name.split('.').pop()?.toLowerCase();
  const mimeMap: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    gif: 'image/gif',
    svg: 'image/svg+xml',
    avif: 'image/avif',
  };
  const mime = mimeMap[ext ?? ''] ?? 'application/octet-stream';
  return uploadFile(folder, name, buffer, mime);
}

/**
 * Delete a file from MinIO.
 */
export async function deleteFile(key: string): Promise<void> {
  const client = getClient();
  await client.removeObject(BUCKET, key);
}

/**
 * List all files in a folder.
 */
export async function listFiles(
  folder: Folder,
): Promise<ListResult[]> {
  const client = getClient();
  const stream = client.listObjects(BUCKET, `${folder}/`, true);

  return new Promise((resolve, reject) => {
    const items: ListResult[] = [];
    stream.on('data', (obj) => {
      if (!obj.name) return;
      items.push({
        name: obj.name,
        prefix: folder,
        size: obj.size ?? 0,
        etag: obj.etag ?? '',
        lastModified: obj.lastModified ?? new Date(),
        url: `${PUBLIC_URL}/${BUCKET}/${obj.name}`,
      });
    });
    stream.on('end', () => resolve(items));
    stream.on('error', (err) => reject(err));
  });
}

/**
 * Get a presigned upload URL (temporary, for browser direct uploads).
 */
export async function getPresignedUrl(
  folder: Folder,
  name: string,
  expirySeconds = 3600,
): Promise<string> {
  const client = getClient();
  const key = `${folder}/${name}`;
  return client.presignedPutObject(BUCKET, key, expirySeconds);
}

/**
 * Check if a file exists.
 */
export async function fileExists(key: string): Promise<boolean> {
  const client = getClient();
  try {
    await client.statObject(BUCKET, key);
    return true;
  } catch {
    return false;
  }
}

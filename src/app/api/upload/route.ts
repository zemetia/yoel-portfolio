import { NextRequest, NextResponse } from 'next/server';
import {
  uploadBase64,
  uploadFile,
  ensureBucket,
  fileExists,
} from '@/lib/storage';

/**
 * POST /api/upload
 *
 * Upload an image to MinIO. Accepts:
 *   1. Multipart form with a "file" field
 *   2. JSON with { base64, name, folder }
 *
 * Query params:
 *   folder — one of: avatars, projects, experiences, general (default: general)
 *
 * Response:
 *   { url, key, bucket, etag }
 */
export async function POST(req: NextRequest) {
  try {
    await ensureBucket();

    const contentType = req.headers.get('content-type') || '';

    // ─── Multipart upload ───────────────────────────────────────────────
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      const folder =
        (formData.get('folder') as string) || 'general';

      if (!file) {
        return NextResponse.json(
          { error: 'No file provided' },
          { status: 400 },
        );
      }

      if (!['avatars', 'projects', 'experiences', 'general'].includes(folder)) {
        return NextResponse.json(
          { error: 'Invalid folder. Use: avatars, projects, experiences, general' },
          { status: 400 },
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const name = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;

      const result = await uploadFile(
        folder as any,
        name,
        buffer,
        file.type || 'application/octet-stream',
      );

      return NextResponse.json(result);
    }

    // ─── JSON upload (base64) ────────────────────────────────────────────
    const body = await req.json();
    const { base64, name, folder: rawFolder } = body;
    const folder = rawFolder || 'general';

    if (!base64 || !name) {
      return NextResponse.json(
        { error: 'base64 and name are required' },
        { status: 400 },
      );
    }

    if (!['avatars', 'projects', 'experiences', 'general'].includes(folder)) {
      return NextResponse.json(
        { error: 'Invalid folder. Use: avatars, projects, experiences, general' },
        { status: 400 },
      );
    }

    const result = await uploadBase64(
      folder as any,
      name,
      base64,
    );

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: error?.message || 'Upload failed' },
      { status: 500 },
    );
  }
}

/**
 * GET /api/upload?folder=avatars
 *
 * Check if an object exists in the bucket.
 * Query params:
 *   key — object key (e.g. "avatars/avatar-123.webp")
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get('key');

    if (!key) {
      return NextResponse.json(
        { error: 'key query param is required' },
        { status: 400 },
      );
    }

    const exists = await fileExists(key);
    return NextResponse.json({ key, exists });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Check failed' },
      { status: 500 },
    );
  }
}

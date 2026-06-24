import { NextResponse } from 'next/server';
import { listFiles, type Folder } from '@/lib/storage';

/**
 * GET /api/storage?folder=projects
 *
 * List all stored files in a folder.
 * Query params:
 *   folder — one of: avatars, projects, experiences, general
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = (searchParams.get('folder') || 'general') as Folder;

    if (!['avatars', 'projects', 'experiences', 'general'].includes(folder)) {
      return NextResponse.json(
        { error: 'Invalid folder' },
        { status: 400 },
      );
    }

    const files = await listFiles(folder);
    return NextResponse.json({ folder, files, total: files.length });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'List failed';
    return NextResponse.json(
      { error: msg },
      { status: 500 },
    );
  }
}

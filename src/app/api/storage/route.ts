import { NextResponse } from 'next/server';
import { listFiles } from '@/lib/storage';

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
    const folder = (searchParams.get('folder') || 'general') as any;

    if (!['avatars', 'projects', 'experiences', 'general'].includes(folder)) {
      return NextResponse.json(
        { error: 'Invalid folder' },
        { status: 400 },
      );
    }

    const files = await listFiles(folder);
    return NextResponse.json({ folder, files, total: files.length });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'List failed' },
      { status: 500 },
    );
  }
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LIMIT = 60;
const WINDOW_MS = 60_000; // 1 minute

// In-memory sliding-window rate limiter for the edge middleware.
// Uses a module-level Map — resets on server restart but avoids the
// ioredis dependency that crashes when Redis is unconfigured.
const hitCounts = new Map<string, number[]>();

function getKey(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'anonymous'
  );
}

function shouldRateLimit(key: string): { blocked: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  let timestamps = hitCounts.get(key) ?? [];

  // Prune entries outside the window
  timestamps = timestamps.filter((t) => t > windowStart);

  const blocked = timestamps.length >= LIMIT;
  const remaining = Math.max(0, LIMIT - timestamps.length);
  const oldest = timestamps[0] ?? now;
  const reset = Math.ceil((oldest + WINDOW_MS) / 1000);

  if (!blocked) {
    timestamps.push(now);
    hitCounts.set(key, timestamps);
  }

  return { blocked, remaining, reset };
}

export async function applyRateLimit(request: NextRequest): Promise<NextResponse | null> {
  if (!request.nextUrl.pathname.startsWith('/api')) return null;

  const key = getKey(request);
  const { blocked, reset } = shouldRateLimit(key);

  if (blocked) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': String(Math.max(0, reset - Math.floor(Date.now() / 1000))),
        'X-RateLimit-Limit': String(LIMIT),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': String(reset),
      },
    });
  }

  return null; // not rate limited
}

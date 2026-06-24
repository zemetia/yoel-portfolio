import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { routing } from './i18n/routing';
import { applyRateLimit } from './proxy/rate-limit';
import { applySecurityHeaders } from './proxy/security-headers';
import { ADMIN_COOKIE, verifyAdminToken } from './lib/admin-auth';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rate limit — returns 429 early for /api/* if threshold exceeded
  const rateLimited = await applyRateLimit(request);
  if (rateLimited) return rateLimited;

  // API routes — skip intl routing, only security headers
  if (pathname.startsWith('/api')) {
    return applySecurityHeaders(NextResponse.next());
  }

  // Admin routes — auth gate, no intl routing
  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') {
      return applySecurityHeaders(NextResponse.next());
    }
    const token = request.cookies.get(ADMIN_COOKIE)?.value;
    if (!token || !(await verifyAdminToken(token))) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/admin/login';
      return NextResponse.redirect(loginUrl);
    }
    return applySecurityHeaders(NextResponse.next());
  }

  // Page routes — intl locale routing + security headers
  return applySecurityHeaders(intlMiddleware(request));
}

export const config = {
  matcher: [
    // All routes except static assets — /api is included so rate limiting applies
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};

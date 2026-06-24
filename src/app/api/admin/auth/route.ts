import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, createAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({})) as { password?: string };
  const adminPassword = process.env['ADMIN_PASSWORD'];

  if (!adminPassword) {
    return NextResponse.json({ error: 'Admin not configured — set ADMIN_PASSWORD env var' }, { status: 500 });
  }

  if (body.password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const token = await createAdminToken();
  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}

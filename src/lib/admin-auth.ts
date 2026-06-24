export const ADMIN_COOKIE = 'admin_token';
const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function getSecret(): string {
  return process.env['ADMIN_PASSWORD'] ?? 'dev-secret';
}

async function hmac(secret: string, payload: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const buf = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function createAdminToken(): Promise<string> {
  const payload = `admin:${Date.now() + EXPIRY_MS}`;
  const sig = await hmac(getSecret(), payload);
  return `${payload}.${sig}`;
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  const dot = token.lastIndexOf('.');
  if (dot === -1) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);

  // Check expiry
  const expiry = Number(payload.split(':')[1]);
  if (!expiry || Date.now() > expiry) return false;

  const expected = await hmac(getSecret(), payload);
  return expected === sig;
}

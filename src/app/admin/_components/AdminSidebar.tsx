'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { Route } from 'next';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '◈' },
  { href: '/admin/profile', label: 'Profile', icon: '◉' },
  { href: '/admin/experiences', label: 'Experience', icon: '◎' },
  { href: '/admin/education', label: 'Education', icon: '◑' },
  { href: '/admin/projects', label: 'Projects', icon: '◆' },
  { href: '/admin/skills', label: 'Skills', icon: '◇' },
  { href: '/admin/publications', label: 'Publications', icon: '◈' },
  { href: '/admin/licenses', label: 'Licenses', icon: '◉' },
  { href: '/admin/volunteer', label: 'Volunteer', icon: '◎' },
  { href: '/admin/organizations', label: 'Organizations', icon: '◑' },
  { href: '/admin/contacts', label: 'Contacts', icon: '◆' },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  }

  return (
    <aside
      style={{
        width: 220,
        minHeight: '100vh',
        background: 'var(--color-surface)',
        borderRight: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          padding: '20px 16px 12px',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <p style={{ margin: 0, fontSize: 11, color: 'var(--color-foreground-subtle)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Admin
        </p>
        <p style={{ margin: '2px 0 0', fontSize: 15, fontWeight: 600, color: 'var(--color-foreground)', fontFamily: 'var(--font-heading)' }}>
          Portfolio CMS
        </p>
      </div>

      <nav style={{ flex: 1, padding: '8px 0' }}>
        {NAV.map(({ href, label }) => {
          const active = pathname === href || (href !== '/admin' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href as Route}
              style={{
                display: 'block',
                padding: '8px 16px',
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--color-primary)' : 'var(--color-foreground-muted)',
                background: active ? 'var(--color-primary-subtle)' : 'transparent',
                borderLeft: active ? '2px solid var(--color-primary)' : '2px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--color-border)' }}>
        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '8px 12px',
            fontSize: 13,
            color: 'var(--color-foreground-muted)',
            background: 'transparent',
            border: '1px solid var(--color-border)',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

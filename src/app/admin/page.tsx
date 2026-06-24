import { prisma } from '@/lib/prisma';
import Link from 'next/link';

async function getStats() {
  const [
    experiences,
    education,
    projects,
    skills,
    publications,
    licenses,
    volunteer,
    organizations,
    contacts,
    unreadContacts,
  ] = await Promise.all([
    prisma.experience.count(),
    prisma.education.count(),
    prisma.project.count(),
    prisma.skill.count(),
    prisma.publication.count(),
    prisma.license.count(),
    prisma.volunteerExperience.count(),
    prisma.organization.count(),
    prisma.contact.count(),
    prisma.contact.count({ where: { isRead: false } }),
  ]);
  return { experiences, education, projects, skills, publications, licenses, volunteer, organizations, contacts, unreadContacts };
}

async function getRecentContacts() {
  return prisma.contact.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  });
}

const STAT_CARDS = [
  { label: 'Experience', key: 'experiences', href: '/admin/experiences' },
  { label: 'Education', key: 'education', href: '/admin/education' },
  { label: 'Projects', key: 'projects', href: '/admin/projects' },
  { label: 'Skills', key: 'skills', href: '/admin/skills' },
  { label: 'Publications', key: 'publications', href: '/admin/publications' },
  { label: 'Licenses', key: 'licenses', href: '/admin/licenses' },
  { label: 'Volunteer', key: 'volunteer', href: '/admin/volunteer' },
  { label: 'Organizations', key: 'organizations', href: '/admin/organizations' },
] as const;

export default async function AdminDashboardPage() {
  const [stats, recentContacts] = await Promise.all([getStats(), getRecentContacts()]);

  return (
    <div>
      <h1 style={{ margin: '0 0 4px', fontSize: 24, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
        Dashboard
      </h1>
      <p style={{ margin: '0 0 32px', fontSize: 14, color: 'var(--color-foreground-muted)' }}>
        Overview of your portfolio content
      </p>

      {/* Stats grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 12,
          marginBottom: 40,
        }}
      >
        {STAT_CARDS.map(({ label, key, href }) => (
          <Link
            key={key}
            href={href}
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 10,
                padding: '20px 16px',
                cursor: 'pointer',
                transition: 'border-color 0.15s',
              }}
            >
              <p style={{ margin: '0 0 6px', fontSize: 28, fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                {stats[key]}
              </p>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--color-foreground-muted)' }}>{label}</p>
            </div>
          </Link>
        ))}

        <Link href="/admin/contacts" style={{ textDecoration: 'none' }}>
          <div
            style={{
              background: stats.unreadContacts > 0 ? 'var(--color-primary-subtle)' : 'var(--color-surface)',
              border: `1px solid ${stats.unreadContacts > 0 ? 'var(--color-primary)' : 'var(--color-border)'}`,
              borderRadius: 10,
              padding: '20px 16px',
              cursor: 'pointer',
            }}
          >
            <p style={{ margin: '0 0 6px', fontSize: 28, fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
              {stats.contacts}
            </p>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--color-foreground-muted)' }}>
              Contacts{stats.unreadContacts > 0 ? ` (${stats.unreadContacts} unread)` : ''}
            </p>
          </div>
        </Link>
      </div>

      {/* Recent contacts */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Recent Contact Messages</h2>
          <Link href="/admin/contacts" style={{ fontSize: 13, color: 'var(--color-primary)' }}>
            View all →
          </Link>
        </div>

        {recentContacts.length === 0 ? (
          <p style={{ fontSize: 14, color: 'var(--color-foreground-subtle)' }}>No contact messages yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {recentContacts.map((c) => (
              <div
                key={c.id}
                style={{
                  background: 'var(--color-surface)',
                  border: `1px solid ${!c.isRead ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  borderRadius: 8,
                  padding: '12px 16px',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}
              >
                {!c.isRead && (
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, marginTop: 5 }} />
                )}
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 2px', fontSize: 14, fontWeight: 600 }}>
                    {c.name} <span style={{ fontWeight: 400, color: 'var(--color-foreground-muted)' }}>— {c.email}</span>
                  </p>
                  {c.subject && <p style={{ margin: '0 0 4px', fontSize: 12, color: 'var(--color-primary)' }}>{c.subject}</p>}
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--color-foreground-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 500 }}>
                    {c.message}
                  </p>
                </div>
                <time style={{ fontSize: 11, color: 'var(--color-foreground-subtle)', flexShrink: 0 }}>
                  {new Date(c.createdAt).toLocaleDateString()}
                </time>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

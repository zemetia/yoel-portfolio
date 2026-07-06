'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../../_components/PageHeader';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

type ApiResponse = { success: boolean; data: Contact[] };

export default function ContactsPage() {
  const qc = useQueryClient();
  const [selected, setSelected] = useState<Contact | null>(null);

  const { data: rows = [], isLoading } = useQuery<Contact[]>({
    queryKey: ['admin-contacts'],
    queryFn: async () => {
      const res = await fetch('/api/v1/contacts?limit=100&sort=createdAt&order=desc');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  const markRead = useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/v1/contacts/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isRead: true }) }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-contacts'] }),
  });

  const del = useMutation({
    mutationFn: (id: string) => fetch(`/api/v1/contacts/${id}`, { method: 'DELETE' }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin-contacts'] }); setSelected(null); },
  });

  function openContact(c: Contact) {
    setSelected(c);
    if (!c.isRead) markRead.mutate(c.id);
  }

  const unread = rows.filter((r) => !r.isRead).length;

  if (isLoading) return <p style={{ color: 'var(--color-foreground-muted)' }}>Loading...</p>;

  return (
    <div>
      <PageHeader
        title="Contact Messages"
        description={`${rows.length} total${unread > 0 ? ` Â· ${unread} unread` : ''}`}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 16, height: 'calc(100vh - 160px)' }}>
        {/* List */}
        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
            overflow: 'auto',
          }}
        >
          {rows.length === 0 ? (
            <p style={{ padding: 20, fontSize: 14, color: 'var(--color-foreground-subtle)' }}>No messages yet.</p>
          ) : (
            rows.map((c) => (
              <button
                key={c.id}
                onClick={() => openContact(c)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  background: selected?.id === c.id ? 'var(--color-primary-subtle)' : 'transparent',
                  border: 'none',
                  borderBottom: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                }}
              >
                {!c.isRead && (
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, marginTop: 5 }} />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: '0 0 2px', fontSize: 13, fontWeight: c.isRead ? 400 : 600, color: 'var(--color-foreground)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {c.name}
                  </p>
                  {c.subject && <p style={{ margin: '0 0 2px', fontSize: 12, color: 'var(--color-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.subject}</p>}
                  <p style={{ margin: 0, fontSize: 12, color: 'var(--color-foreground-subtle)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {c.message}
                  </p>
                </div>
                <time style={{ fontSize: 11, color: 'var(--color-foreground-subtle)', flexShrink: 0 }}>
                  {new Date(c.createdAt).toLocaleDateString()}
                </time>
              </button>
            ))
          )}
        </div>

        {/* Detail */}
        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
            padding: 24,
            overflow: 'auto',
          }}
        >
          {!selected ? (
            <p style={{ color: 'var(--color-foreground-subtle)', fontSize: 14 }}>Select a message to read.</p>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div>
                  <h2 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700 }}>{selected.name}</h2>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--color-foreground-muted)' }}>
                    {selected.email} Â· {new Date(selected.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => { if (confirm('Delete this message?')) del.mutate(selected.id); }}
                  style={{ padding: '6px 14px', fontSize: 12, background: 'var(--color-destructive-subtle)', color: 'var(--color-destructive)', border: '1px solid var(--color-destructive)', borderRadius: 6, cursor: 'pointer' }}
                >
                  Delete
                </button>
              </div>
              {selected.subject && (
                <p style={{ margin: '0 0 16px', fontSize: 14, fontWeight: 600, color: 'var(--color-primary)' }}>
                  Subject: {selected.subject}
                </p>
              )}
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--color-foreground)',
                  whiteSpace: 'pre-wrap',
                  background: 'var(--color-surface-raised)',
                  padding: '16px 20px',
                  borderRadius: 8,
                }}
              >
                {selected.message}
              </div>
              <div style={{ marginTop: 20 }}>
                <a
                  href={`mailto:${selected.email}?subject=Re: ${selected.subject ?? ''}`}
                  style={{
                    display: 'inline-block',
                    padding: '8px 18px',
                    fontSize: 13,
                    fontWeight: 600,
                    background: 'var(--color-primary)',
                    color: 'var(--color-primary-foreground)',
                    borderRadius: 6,
                    textDecoration: 'none',
                  }}
                >
                  Reply via Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

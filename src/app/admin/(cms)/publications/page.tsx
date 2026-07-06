'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../../_components/PageHeader';
import { AdminTable } from '../../_components/AdminTable';
import { FormModal } from '../../_components/FormModal';
import { FormField, FormRow, SubmitBar } from '../../_components/FormField';

interface Publication {
  id: string;
  title: string;
  publisher?: string;
  publicationType?: string;
  publishedDate?: string;
  url?: string;
  doi?: string;
  order: number;
}

type ApiResponse = { success: boolean; data: Publication[] };

const EMPTY: Omit<Publication, 'id'> = { title: '', publisher: '', publicationType: 'Journal', publishedDate: '', url: '', doi: '', order: 0 };
const PUB_TYPES = ['Journal', 'Conference', 'Book', 'Article', 'Other'].map((v) => ({ value: v, label: v }));

export default function PublicationsPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Publication | null>(null);
  const [form, setForm] = useState<Omit<Publication, 'id'>>(EMPTY);

  const { data: rows = [], isLoading } = useQuery<Publication[]>({
    queryKey: ['admin-publications'],
    queryFn: async () => {
      const res = await fetch('/api/v1/publications?limit=100');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  function openAdd() { setEditing(null); setForm(EMPTY); setOpen(true); }
  function openEdit(row: Publication) {
    setEditing(row);
    setForm({ title: row.title, publisher: row.publisher ?? '', publicationType: row.publicationType ?? 'Journal', publishedDate: row.publishedDate?.slice(0, 10) ?? '', url: row.url ?? '', doi: row.doi ?? '', order: row.order });
    setOpen(true);
  }

  const save = useMutation({
    mutationFn: async (body: Omit<Publication, 'id'>) => {
      if (editing) {
        await fetch(`/api/v1/publications/${editing.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      } else {
        const pr = await fetch('/api/v1/profiles?slug=main');
        const pj = await pr.json() as { data: { id: string }[] };
        await fetch('/api/v1/publications', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, profileId: pj.data[0]?.id }) });
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin-publications'] }); setOpen(false); },
  });

  const del = useMutation({
    mutationFn: (id: string) => fetch(`/api/v1/publications/${id}`, { method: 'DELETE' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-publications'] }),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'publisher', label: 'Publisher' },
    { key: 'publicationType', label: 'Type' },
    { key: 'publishedDate', label: 'Date', render: (r: Publication) => r.publishedDate?.slice(0, 7) ?? 'â€”' },
  ];

  return (
    <div>
      <PageHeader title="Publications" description={`${rows.length} publications`} action={
        <button onClick={openAdd} style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: 'none', borderRadius: 6, cursor: 'pointer' }}>+ Add</button>
      } />
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        <AdminTable columns={columns} rows={rows} onEdit={openEdit} onDelete={(id) => del.mutate(id)} loading={isLoading} />
      </div>
      <FormModal title={editing ? 'Edit Publication' : 'Add Publication'} open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(form); }}>
          <FormField label="Title" name="title" value={form.title} onChange={handleChange} required />
          <FormRow>
            <FormField label="Publisher" name="publisher" value={form.publisher ?? ''} onChange={handleChange} />
            <FormField label="Type" name="publicationType" value={form.publicationType ?? ''} onChange={handleChange} options={PUB_TYPES} />
          </FormRow>
          <FormField label="Published Date" name="publishedDate" type="date" value={form.publishedDate ?? ''} onChange={handleChange} />
          <FormRow>
            <FormField label="URL" name="url" type="url" value={form.url ?? ''} onChange={handleChange} />
            <FormField label="DOI" name="doi" value={form.doi ?? ''} onChange={handleChange} placeholder="10.1000/xyz123" />
          </FormRow>
          <FormField label="Order" name="order" type="number" value={String(form.order)} onChange={handleChange} />
          <SubmitBar loading={save.isPending} onCancel={() => setOpen(false)} />
        </form>
      </FormModal>
    </div>
  );
}

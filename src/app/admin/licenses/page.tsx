'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../_components/PageHeader';
import { AdminTable } from '../_components/AdminTable';
import { FormModal } from '../_components/FormModal';
import { FormField, FormRow, SubmitBar } from '../_components/FormField';

interface License {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  expiryDate?: string;
  doesNotExpire: boolean;
  credentialId?: string;
  url?: string;
  order: number;
}

type ApiResponse = { success: boolean; data: License[] };

const EMPTY: Omit<License, 'id'> = { name: '', issuer: '', issueDate: '', expiryDate: '', doesNotExpire: false, credentialId: '', url: '', order: 0 };

export default function LicensesPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<License | null>(null);
  const [form, setForm] = useState<Omit<License, 'id'>>(EMPTY);

  const { data: rows = [], isLoading } = useQuery<License[]>({
    queryKey: ['admin-licenses'],
    queryFn: async () => {
      const res = await fetch('/api/v1/licenses?limit=100');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  function openAdd() { setEditing(null); setForm(EMPTY); setOpen(true); }
  function openEdit(row: License) {
    setEditing(row);
    setForm({ name: row.name, issuer: row.issuer, issueDate: row.issueDate?.slice(0, 10) ?? '', expiryDate: row.expiryDate?.slice(0, 10) ?? '', doesNotExpire: row.doesNotExpire, credentialId: row.credentialId ?? '', url: row.url ?? '', order: row.order });
    setOpen(true);
  }

  const save = useMutation({
    mutationFn: async (body: Omit<License, 'id'>) => {
      if (editing) {
        await fetch(`/api/v1/licenses/${editing.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      } else {
        const pr = await fetch('/api/v1/profiles?slug=main');
        const pj = await pr.json() as { data: { id: string }[] };
        await fetch('/api/v1/licenses', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, profileId: pj.data[0]?.id }) });
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin-licenses'] }); setOpen(false); },
  });

  const del = useMutation({
    mutationFn: (id: string) => fetch(`/api/v1/licenses/${id}`, { method: 'DELETE' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-licenses'] }),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  const columns = [
    { key: 'name', label: 'Certification' },
    { key: 'issuer', label: 'Issuer' },
    { key: 'issueDate', label: 'Issue Date', render: (r: License) => r.issueDate?.slice(0, 7) ?? '—' },
    { key: 'doesNotExpire', label: 'Expires', render: (r: License) => r.doesNotExpire ? 'Never' : (r.expiryDate?.slice(0, 7) ?? '—') },
  ];

  return (
    <div>
      <PageHeader title="Licenses & Certifications" description={`${rows.length} entries`} action={
        <button onClick={openAdd} style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: 'none', borderRadius: 6, cursor: 'pointer' }}>+ Add</button>
      } />
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        <AdminTable columns={columns} rows={rows} onEdit={openEdit} onDelete={(id) => del.mutate(id)} loading={isLoading} />
      </div>
      <FormModal title={editing ? 'Edit License' : 'Add License'} open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(form); }}>
          <FormRow>
            <FormField label="Name" name="name" value={form.name} onChange={handleChange} required />
            <FormField label="Issuer" name="issuer" value={form.issuer} onChange={handleChange} required />
          </FormRow>
          <FormRow>
            <FormField label="Issue Date" name="issueDate" type="date" value={form.issueDate ?? ''} onChange={handleChange} />
            <FormField label="Expiry Date" name="expiryDate" type="date" value={form.expiryDate ?? ''} onChange={handleChange} />
          </FormRow>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <input type="checkbox" id="doesNotExpire" checked={form.doesNotExpire} onChange={(e) => setForm((f) => ({ ...f, doesNotExpire: e.target.checked }))} />
            <label htmlFor="doesNotExpire" style={{ fontSize: 13, color: 'var(--color-foreground-muted)' }}>Does not expire</label>
          </div>
          <FormRow>
            <FormField label="Credential ID" name="credentialId" value={form.credentialId ?? ''} onChange={handleChange} />
            <FormField label="Credential URL" name="url" type="url" value={form.url ?? ''} onChange={handleChange} />
          </FormRow>
          <FormField label="Order" name="order" type="number" value={String(form.order)} onChange={handleChange} />
          <SubmitBar loading={save.isPending} onCancel={() => setOpen(false)} />
        </form>
      </FormModal>
    </div>
  );
}

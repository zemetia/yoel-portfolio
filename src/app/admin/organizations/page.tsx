'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../_components/PageHeader';
import { AdminTable } from '../_components/AdminTable';
import { FormModal } from '../_components/FormModal';
import { FormField, FormRow, SubmitBar } from '../_components/FormField';

interface Organization {
  id: string;
  name: string;
  role?: string;
  url?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
  order: number;
}

type ApiResponse = { success: boolean; data: Organization[] };

const EMPTY: Omit<Organization, 'id'> = { name: '', role: '', url: '', location: '', startDate: '', endDate: '', isCurrent: false, description: '', order: 0 };

export default function OrganizationsPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Organization | null>(null);
  const [form, setForm] = useState<Omit<Organization, 'id'>>(EMPTY);

  const { data: rows = [], isLoading } = useQuery<Organization[]>({
    queryKey: ['admin-organizations'],
    queryFn: async () => {
      const res = await fetch('/api/v1/organizations?limit=100');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  function openAdd() { setEditing(null); setForm(EMPTY); setOpen(true); }
  function openEdit(row: Organization) {
    setEditing(row);
    setForm({ name: row.name, role: row.role ?? '', url: row.url ?? '', location: row.location ?? '', startDate: row.startDate?.slice(0, 10) ?? '', endDate: row.endDate?.slice(0, 10) ?? '', isCurrent: row.isCurrent, description: row.description ?? '', order: row.order });
    setOpen(true);
  }

  const save = useMutation({
    mutationFn: async (body: Omit<Organization, 'id'>) => {
      if (editing) {
        await fetch(`/api/v1/organizations/${editing.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      } else {
        const pr = await fetch('/api/v1/profiles?slug=main');
        const pj = await pr.json() as { data: { id: string }[] };
        await fetch('/api/v1/organizations', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, profileId: pj.data[0]?.id }) });
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin-organizations'] }); setOpen(false); },
  });

  const del = useMutation({
    mutationFn: (id: string) => fetch(`/api/v1/organizations/${id}`, { method: 'DELETE' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-organizations'] }),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  const columns = [
    { key: 'name', label: 'Organization' },
    { key: 'role', label: 'Role' },
    { key: 'location', label: 'Location' },
    { key: 'startDate', label: 'Period', render: (r: Organization) => `${r.startDate?.slice(0, 7) ?? '?'} → ${r.isCurrent ? 'Present' : (r.endDate?.slice(0, 7) ?? '?')}` },
  ];

  return (
    <div>
      <PageHeader title="Organizations" description={`${rows.length} memberships`} action={
        <button onClick={openAdd} style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: 'none', borderRadius: 6, cursor: 'pointer' }}>+ Add</button>
      } />
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        <AdminTable columns={columns} rows={rows} onEdit={openEdit} onDelete={(id) => del.mutate(id)} loading={isLoading} />
      </div>
      <FormModal title={editing ? 'Edit Organization' : 'Add Organization'} open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(form); }}>
          <FormRow>
            <FormField label="Name" name="name" value={form.name} onChange={handleChange} required />
            <FormField label="Role" name="role" value={form.role ?? ''} onChange={handleChange} />
          </FormRow>
          <FormRow>
            <FormField label="Website URL" name="url" type="url" value={form.url ?? ''} onChange={handleChange} />
            <FormField label="Location" name="location" value={form.location ?? ''} onChange={handleChange} />
          </FormRow>
          <FormRow>
            <FormField label="Start Date" name="startDate" type="date" value={form.startDate ?? ''} onChange={handleChange} />
            <FormField label="End Date" name="endDate" type="date" value={form.endDate ?? ''} onChange={handleChange} />
          </FormRow>
          <FormField label="Description" name="description" value={form.description ?? ''} onChange={handleChange} multiline />
          <SubmitBar loading={save.isPending} onCancel={() => setOpen(false)} />
        </form>
      </FormModal>
    </div>
  );
}

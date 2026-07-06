'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../../_components/PageHeader';
import { AdminTable } from '../../_components/AdminTable';
import { FormModal } from '../../_components/FormModal';
import { FormField, FormRow, SubmitBar } from '../../_components/FormField';

interface Volunteer {
  id: string;
  organization: string;
  role: string;
  cause?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
  order: number;
}

type ApiResponse = { success: boolean; data: Volunteer[] };

const EMPTY: Omit<Volunteer, 'id'> = { organization: '', role: '', cause: '', location: '', startDate: '', endDate: '', isCurrent: false, description: '', order: 0 };

export default function VolunteerPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Volunteer | null>(null);
  const [form, setForm] = useState<Omit<Volunteer, 'id'>>(EMPTY);

  const { data: rows = [], isLoading } = useQuery<Volunteer[]>({
    queryKey: ['admin-volunteer'],
    queryFn: async () => {
      const res = await fetch('/api/v1/volunteer-experiences?limit=100');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  function openAdd() { setEditing(null); setForm(EMPTY); setOpen(true); }
  function openEdit(row: Volunteer) {
    setEditing(row);
    setForm({ organization: row.organization, role: row.role, cause: row.cause ?? '', location: row.location ?? '', startDate: row.startDate?.slice(0, 10) ?? '', endDate: row.endDate?.slice(0, 10) ?? '', isCurrent: row.isCurrent, description: row.description ?? '', order: row.order });
    setOpen(true);
  }

  const save = useMutation({
    mutationFn: async (body: Omit<Volunteer, 'id'>) => {
      if (editing) {
        await fetch(`/api/v1/volunteer-experiences/${editing.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      } else {
        const pr = await fetch('/api/v1/profiles?slug=main');
        const pj = await pr.json() as { data: { id: string }[] };
        await fetch('/api/v1/volunteer-experiences', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, profileId: pj.data[0]?.id }) });
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin-volunteer'] }); setOpen(false); },
  });

  const del = useMutation({
    mutationFn: (id: string) => fetch(`/api/v1/volunteer-experiences/${id}`, { method: 'DELETE' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-volunteer'] }),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  const columns = [
    { key: 'organization', label: 'Organization' },
    { key: 'role', label: 'Role' },
    { key: 'cause', label: 'Cause' },
    { key: 'startDate', label: 'Period', render: (r: Volunteer) => `${r.startDate?.slice(0, 7) ?? '?'} â†’ ${r.isCurrent ? 'Present' : (r.endDate?.slice(0, 7) ?? '?')}` },
  ];

  return (
    <div>
      <PageHeader title="Volunteer Experience" description={`${rows.length} entries`} action={
        <button onClick={openAdd} style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: 'none', borderRadius: 6, cursor: 'pointer' }}>+ Add</button>
      } />
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        <AdminTable columns={columns} rows={rows} onEdit={openEdit} onDelete={(id) => del.mutate(id)} loading={isLoading} />
      </div>
      <FormModal title={editing ? 'Edit Volunteer' : 'Add Volunteer'} open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(form); }}>
          <FormRow>
            <FormField label="Organization" name="organization" value={form.organization} onChange={handleChange} required />
            <FormField label="Role" name="role" value={form.role} onChange={handleChange} required />
          </FormRow>
          <FormRow>
            <FormField label="Cause" name="cause" value={form.cause ?? ''} onChange={handleChange} placeholder="Education, Environment..." />
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

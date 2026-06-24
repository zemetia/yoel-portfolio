'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../_components/PageHeader';
import { AdminTable } from '../_components/AdminTable';
import { FormModal } from '../_components/FormModal';
import { FormField, FormRow, SubmitBar } from '../_components/FormField';

interface Education {
  id: string;
  institution: string;
  degree?: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  gpa?: string;
  description?: string;
}

type ApiResponse = { success: boolean; data: Education[] };

const EMPTY: Omit<Education, 'id'> = {
  institution: '',
  degree: '',
  field: '',
  startDate: '',
  endDate: '',
  isCurrent: false,
  gpa: '',
  description: '',
};

const DEGREES = ['Bachelor', 'Master', 'PhD', 'Diploma', 'Certificate', 'Associate'].map((v) => ({ value: v, label: v }));

export default function EducationPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Education | null>(null);
  const [form, setForm] = useState<Omit<Education, 'id'>>(EMPTY);

  const { data: rows = [], isLoading } = useQuery<Education[]>({
    queryKey: ['admin-education'],
    queryFn: async () => {
      const res = await fetch('/api/v1/education?limit=100');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  function openAdd() { setEditing(null); setForm(EMPTY); setOpen(true); }
  function openEdit(row: Education) {
    setEditing(row);
    setForm({ ...row, startDate: row.startDate?.slice(0, 10) ?? '', endDate: row.endDate?.slice(0, 10) ?? '' });
    setOpen(true);
  }

  const save = useMutation({
    mutationFn: async (body: Omit<Education, 'id'>) => {
      if (!editing) {
        const pr = await fetch('/api/v1/profiles?slug=main');
        const pj = await pr.json() as { data: { id: string }[] };
        const profileId = pj.data[0]?.id;
        await fetch('/api/v1/education', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...body, profileId }),
        });
      } else {
        await fetch(`/api/v1/education/${editing.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin-education'] }); setOpen(false); },
  });

  const del = useMutation({
    mutationFn: (id: string) => fetch(`/api/v1/education/${id}`, { method: 'DELETE' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-education'] }),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  const columns = [
    { key: 'institution', label: 'Institution' },
    { key: 'degree', label: 'Degree' },
    { key: 'field', label: 'Field' },
    {
      key: 'startDate',
      label: 'Period',
      render: (r: Education) => `${r.startDate?.slice(0, 7) ?? '?'} → ${r.isCurrent ? 'Present' : (r.endDate?.slice(0, 7) ?? '?')}`,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Education"
        description={`${rows.length} education entries`}
        action={
          <button onClick={openAdd} style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
            + Add
          </button>
        }
      />
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        <AdminTable columns={columns} rows={rows} onEdit={openEdit} onDelete={(id) => del.mutate(id)} loading={isLoading} />
      </div>
      <FormModal title={editing ? 'Edit Education' : 'Add Education'} open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(form); }}>
          <FormField label="Institution" name="institution" value={form.institution} onChange={handleChange} required />
          <FormRow>
            <FormField label="Degree" name="degree" value={form.degree ?? ''} onChange={handleChange} options={DEGREES} />
            <FormField label="Field of Study" name="field" value={form.field ?? ''} onChange={handleChange} />
          </FormRow>
          <FormRow>
            <FormField label="Start Date" name="startDate" type="date" value={form.startDate ?? ''} onChange={handleChange} />
            <FormField label="End Date" name="endDate" type="date" value={form.endDate ?? ''} onChange={handleChange} />
          </FormRow>
          <FormField label="GPA" name="gpa" value={form.gpa ?? ''} onChange={handleChange} placeholder="3.8 / 4.0" />
          <FormField label="Description" name="description" value={form.description ?? ''} onChange={handleChange} multiline />
          <SubmitBar loading={save.isPending} onCancel={() => setOpen(false)} />
        </form>
      </FormModal>
    </div>
  );
}

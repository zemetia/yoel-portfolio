'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../../_components/PageHeader';
import { AdminTable } from '../../_components/AdminTable';
import { FormModal } from '../../_components/FormModal';
import { FormField, FormRow, SubmitBar } from '../../_components/FormField';

interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  locationType?: string;
  employmentType?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
  order: number;
}

type ApiResponse = { success: boolean; data: Experience[] };

const EMPTY: Omit<Experience, 'id'> = {
  company: '',
  position: '',
  location: '',
  locationType: '',
  employmentType: '',
  startDate: '',
  endDate: '',
  isCurrent: false,
  description: '',
  order: 0,
};

const EMP_TYPES = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'].map((v) => ({ value: v, label: v }));
const LOC_TYPES = ['On-site', 'Remote', 'Hybrid'].map((v) => ({ value: v, label: v }));

export default function ExperiencesPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Experience | null>(null);
  const [form, setForm] = useState<Omit<Experience, 'id'>>(EMPTY);

  const { data: rows = [], isLoading } = useQuery<Experience[]>({
    queryKey: ['admin-experiences'],
    queryFn: async () => {
      const res = await fetch('/api/v1/experiences?limit=100&sort=order&order=asc');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  function openAdd() {
    setEditing(null);
    setForm(EMPTY);
    setOpen(true);
  }

  function openEdit(row: Experience) {
    setEditing(row);
    setForm({
      company: row.company ?? '',
      position: row.position ?? '',
      location: row.location ?? '',
      locationType: row.locationType ?? '',
      employmentType: row.employmentType ?? '',
      startDate: row.startDate ? row.startDate.slice(0, 10) : '',
      endDate: row.endDate ? row.endDate.slice(0, 10) : '',
      isCurrent: row.isCurrent,
      description: row.description ?? '',
      order: row.order ?? 0,
    });
    setOpen(true);
  }

  const save = useMutation({
    mutationFn: async (body: Omit<Experience, 'id'>) => {
      const profileRes = await fetch('/api/v1/profiles?slug=main');
      const profileJson = await profileRes.json() as { data: { id: string }[] };
      const profileId = profileJson.data[0]?.id;

      const url = editing ? `/api/v1/experiences/${editing.id}` : '/api/v1/experiences';
      const method = editing ? 'PATCH' : 'POST';
      const payload = editing ? body : { ...body, profileId };
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-experiences'] });
      setOpen(false);
    },
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`/api/v1/experiences/${id}`, { method: 'DELETE' });
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-experiences'] }),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  const columns = [
    { key: 'company', label: 'Company' },
    { key: 'position', label: 'Position' },
    { key: 'employmentType', label: 'Type' },
    {
      key: 'startDate',
      label: 'Period',
      render: (r: Experience) =>
        `${r.startDate ? r.startDate.slice(0, 7) : '?'} â†’ ${r.isCurrent ? 'Present' : (r.endDate ? r.endDate.slice(0, 7) : '?')}`,
    },
    { key: 'order', label: 'Order' },
  ];

  return (
    <div>
      <PageHeader
        title="Experience"
        description={`${rows.length} work experience entries`}
        action={
          <button
            onClick={openAdd}
            style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: 'none', borderRadius: 6, cursor: 'pointer' }}
          >
            + Add
          </button>
        }
      />

      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        <AdminTable columns={columns} rows={rows} onEdit={openEdit} onDelete={(id) => del.mutate(id)} loading={isLoading} />
      </div>

      <FormModal title={editing ? 'Edit Experience' : 'Add Experience'} open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(form); }}>
          <FormRow>
            <FormField label="Company" name="company" value={form.company} onChange={handleChange} required />
            <FormField label="Position" name="position" value={form.position} onChange={handleChange} required />
          </FormRow>
          <FormRow>
            <FormField label="Employment Type" name="employmentType" value={form.employmentType ?? ''} onChange={handleChange} options={EMP_TYPES} />
            <FormField label="Location Type" name="locationType" value={form.locationType ?? ''} onChange={handleChange} options={LOC_TYPES} />
          </FormRow>
          <FormField label="Location" name="location" value={form.location ?? ''} onChange={handleChange} placeholder="Jakarta, Indonesia" />
          <FormRow>
            <FormField label="Start Date" name="startDate" type="date" value={form.startDate ?? ''} onChange={handleChange} />
            <FormField label="End Date" name="endDate" type="date" value={form.endDate ?? ''} onChange={handleChange} />
          </FormRow>
          <FormField label="Description" name="description" value={form.description ?? ''} onChange={handleChange} multiline />
          <FormField label="Order" name="order" type="number" value={String(form.order)} onChange={handleChange} />
          <SubmitBar loading={save.isPending} onCancel={() => setOpen(false)} />
        </form>
      </FormModal>
    </div>
  );
}

'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../../_components/PageHeader';
import { AdminTable } from '../../_components/AdminTable';
import { FormModal } from '../../_components/FormModal';
import { FormField, FormRow, SubmitBar } from '../../_components/FormField';

interface Skill {
  id: string;
  name: string;
  list?: string;
  category?: string;
  proficiency?: number;
  order: number;
}

type ApiResponse = { success: boolean; data: Skill[] };

const EMPTY: Omit<Skill, 'id'> = { name: '', list: '', category: '', proficiency: undefined, order: 0 };

const CATEGORIES = ['Frontend', 'Backend', 'DevOps', 'Data Science', 'ML/AI', 'Database', 'Mobile', 'Language', 'Tools', 'Other'].map((v) => ({ value: v, label: v }));

export default function SkillsPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Skill | null>(null);
  const [form, setForm] = useState<Omit<Skill, 'id'>>(EMPTY);

  const { data: rows = [], isLoading } = useQuery<Skill[]>({
    queryKey: ['admin-skills'],
    queryFn: async () => {
      const res = await fetch('/api/v1/skills?limit=100&sort=order&order=asc');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  function openAdd() { setEditing(null); setForm(EMPTY); setOpen(true); }
  function openEdit(row: Skill) { setEditing(row); setForm({ name: row.name, list: row.list ?? '', category: row.category ?? '', proficiency: row.proficiency, order: row.order }); setOpen(true); }

  const save = useMutation({
    mutationFn: async (body: Omit<Skill, 'id'>) => {
      const payload = { ...body, proficiency: body.proficiency ? Number(body.proficiency) : null, order: Number(body.order) };
      if (editing) {
        await fetch(`/api/v1/skills/${editing.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      } else {
        const pr = await fetch('/api/v1/profiles?slug=main');
        const pj = await pr.json() as { data: { id: string }[] };
        await fetch('/api/v1/skills', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, profileId: pj.data[0]?.id }) });
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin-skills'] }); setOpen(false); },
  });

  const del = useMutation({
    mutationFn: (id: string) => fetch(`/api/v1/skills/${id}`, { method: 'DELETE' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-skills'] }),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  const columns = [
    { key: 'name', label: 'Name / Category' },
    { key: 'list', label: 'Skills List' },
    { key: 'category', label: 'Category' },
    { key: 'proficiency', label: 'Level (1-5)', render: (r: Skill) => r.proficiency ? 'â˜…'.repeat(r.proficiency) : 'â€”' },
    { key: 'order', label: 'Order' },
  ];

  return (
    <div>
      <PageHeader
        title="Skills"
        description={`${rows.length} skill groups`}
        action={
          <button onClick={openAdd} style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
            + Add
          </button>
        }
      />
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        <AdminTable columns={columns} rows={rows} onEdit={openEdit} onDelete={(id) => del.mutate(id)} loading={isLoading} />
      </div>
      <FormModal title={editing ? 'Edit Skill' : 'Add Skill'} open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(form); }}>
          <FormRow>
            <FormField label="Name / Category Label" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Backend" />
            <FormField label="Category" name="category" value={form.category ?? ''} onChange={handleChange} options={CATEGORIES} />
          </FormRow>
          <FormField label="Skills List (comma-separated)" name="list" value={form.list ?? ''} onChange={handleChange} placeholder="Python, Django, FastAPI, PostgreSQL" />
          <FormRow>
            <FormField label="Proficiency (1-5)" name="proficiency" type="number" value={String(form.proficiency ?? '')} onChange={handleChange} placeholder="4" />
            <FormField label="Order" name="order" type="number" value={String(form.order)} onChange={handleChange} />
          </FormRow>
          <SubmitBar loading={save.isPending} onCancel={() => setOpen(false)} />
        </form>
      </FormModal>
    </div>
  );
}

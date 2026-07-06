'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PageHeader } from '../../_components/PageHeader';
import { AdminTable } from '../../_components/AdminTable';
import { FormModal } from '../../_components/FormModal';
import { FormField, FormRow, SubmitBar } from '../../_components/FormField';

interface Project {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  liveUrl?: string;
  githubUrl?: string;
  status: string;
  isFeatured: boolean;
  year?: number;
  order: number;
  tags: string[];
  techStack: string[];
}

type ApiResponse = { success: boolean; data: Project[] };

const EMPTY = {
  title: '',
  slug: '',
  summary: '',
  liveUrl: '',
  githubUrl: '',
  status: 'PUBLISHED',
  isFeatured: false,
  year: new Date().getFullYear(),
  order: 0,
  tags: [] as string[],
  techStack: [] as string[],
  tagsStr: '',
  techStackStr: '',
};

const STATUS_OPTS = [{ value: 'PUBLISHED', label: 'Published' }, { value: 'DRAFT', label: 'Draft' }];

type FormState = typeof EMPTY;

export default function ProjectsPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY);

  const { data: rows = [], isLoading } = useQuery<Project[]>({
    queryKey: ['admin-projects'],
    queryFn: async () => {
      const res = await fetch('/api/v1/projects?limit=100&sort=order&order=asc');
      const json = await res.json() as ApiResponse;
      return json.data;
    },
  });

  function toSlug(str: string) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function openAdd() { setEditing(null); setForm(EMPTY); setOpen(true); }
  function openEdit(row: Project) {
    setEditing(row);
    setForm({
      title: row.title,
      slug: row.slug,
      summary: row.summary ?? '',
      liveUrl: row.liveUrl ?? '',
      githubUrl: row.githubUrl ?? '',
      status: row.status,
      isFeatured: row.isFeatured,
      year: row.year ?? new Date().getFullYear(),
      order: row.order,
      tags: row.tags,
      techStack: row.techStack,
      tagsStr: row.tags.join(', '),
      techStackStr: row.techStack.join(', '),
    });
    setOpen(true);
  }

  const save = useMutation({
    mutationFn: async (body: FormState) => {
      const payload = {
        title: body.title,
        slug: body.slug || toSlug(body.title),
        summary: body.summary,
        liveUrl: body.liveUrl,
        githubUrl: body.githubUrl,
        status: body.status,
        isFeatured: body.isFeatured,
        year: Number(body.year),
        order: Number(body.order),
        tags: body.tagsStr.split(',').map((t) => t.trim()).filter(Boolean),
        techStack: body.techStackStr.split(',').map((t) => t.trim()).filter(Boolean),
      };
      if (editing) {
        await fetch(`/api/v1/projects/${editing.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        const pr = await fetch('/api/v1/profiles?slug=main');
        const pj = await pr.json() as { data: { id: string }[] };
        await fetch('/api/v1/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, profileId: pj.data[0]?.id }),
        });
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin-projects'] }); setOpen(false); },
  });

  const del = useMutation({
    mutationFn: (id: string) => fetch(`/api/v1/projects/${id}`, { method: 'DELETE' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-projects'] }),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: value,
      ...(name === 'title' && !f.slug ? { slug: toSlug(value) } : {}),
    }));
  }

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'slug', label: 'Slug' },
    { key: 'status', label: 'Status' },
    { key: 'year', label: 'Year' },
    {
      key: 'isFeatured',
      label: 'Featured',
      render: (r: Project) => r.isFeatured ? 'â˜…' : 'â€”',
    },
    { key: 'order', label: 'Order' },
  ];

  return (
    <div>
      <PageHeader
        title="Projects"
        description={`${rows.length} projects`}
        action={
          <button onClick={openAdd} style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
            + Add
          </button>
        }
      />
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        <AdminTable columns={columns} rows={rows} onEdit={openEdit} onDelete={(id) => del.mutate(id)} loading={isLoading} />
      </div>
      <FormModal title={editing ? 'Edit Project' : 'Add Project'} open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(form); }}>
          <FormField label="Title" name="title" value={form.title} onChange={handleChange} required />
          <FormField label="Slug" name="slug" value={form.slug} onChange={handleChange} placeholder="auto-generated from title" />
          <FormField label="Summary" name="summary" value={form.summary} onChange={handleChange} multiline />
          <FormRow>
            <FormField label="Live URL" name="liveUrl" type="url" value={form.liveUrl} onChange={handleChange} />
            <FormField label="GitHub URL" name="githubUrl" type="url" value={form.githubUrl} onChange={handleChange} />
          </FormRow>
          <FormRow>
            <FormField label="Status" name="status" value={form.status} onChange={handleChange} options={STATUS_OPTS} />
            <FormField label="Year" name="year" type="number" value={String(form.year)} onChange={handleChange} />
          </FormRow>
          <FormField label="Tags (comma-separated)" name="tagsStr" value={form.tagsStr} onChange={handleChange} placeholder="ML, Python, Dashboard" />
          <FormField label="Tech Stack (comma-separated)" name="techStackStr" value={form.techStackStr} onChange={handleChange} placeholder="React, FastAPI, PostgreSQL" />
          <FormRow>
            <FormField label="Order" name="order" type="number" value={String(form.order)} onChange={handleChange} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 22 }}>
              <input
                type="checkbox"
                id="isFeatured"
                checked={form.isFeatured}
                onChange={(e) => setForm((f) => ({ ...f, isFeatured: e.target.checked }))}
              />
              <label htmlFor="isFeatured" style={{ fontSize: 13, color: 'var(--color-foreground-muted)' }}>Featured</label>
            </div>
          </FormRow>
          <SubmitBar loading={save.isPending} onCancel={() => setOpen(false)} />
        </form>
      </FormModal>
    </div>
  );
}

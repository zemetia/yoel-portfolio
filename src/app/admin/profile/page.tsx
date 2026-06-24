'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { PageHeader } from '../_components/PageHeader';
import { FormField, FormRow, SubmitBar } from '../_components/FormField';

interface Profile {
  id: string;
  slug: string;
  fullName: string;
  headline: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  website?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  avatarUrl?: string;
  resumeUrl?: string;
  heroSubtitle?: string;
  activeTheme?: string;
}

type ApiResponse<T> = { success: boolean; data: T[] };

const EMPTY: Omit<Profile, 'id'> = {
  slug: 'main',
  fullName: '',
  headline: '',
  summary: '',
  location: '',
  phone: '',
  email: '',
  website: '',
  linkedinUrl: '',
  githubUrl: '',
  twitterUrl: '',
  avatarUrl: '',
  resumeUrl: '',
  heroSubtitle: '',
  activeTheme: 'datasci',
};

export default function ProfilePage() {
  const qc = useQueryClient();
  const [form, setForm] = useState<Omit<Profile, 'id'>>(EMPTY);
  const [profileId, setProfileId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const { data, isLoading } = useQuery<Profile | null>({
    queryKey: ['admin-profile'],
    queryFn: async () => {
      const res = await fetch('/api/v1/profiles?slug=main');
      const json = await res.json() as ApiResponse<Profile>;
      return json.data[0] ?? null;
    },
  });

  useEffect(() => {
    if (data) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProfileId(data.id);
      setForm({
        slug: data.slug ?? 'main',
        fullName: data.fullName ?? '',
        headline: data.headline ?? '',
        summary: data.summary ?? '',
        location: data.location ?? '',
        phone: data.phone ?? '',
        email: data.email ?? '',
        website: data.website ?? '',
        linkedinUrl: data.linkedinUrl ?? '',
        githubUrl: data.githubUrl ?? '',
        twitterUrl: data.twitterUrl ?? '',
        avatarUrl: data.avatarUrl ?? '',
        resumeUrl: data.resumeUrl ?? '',
        heroSubtitle: data.heroSubtitle ?? '',
        activeTheme: data.activeTheme ?? 'datasci',
      });
    }
  }, [data]);

  const save = useMutation({
    mutationFn: async (body: Omit<Profile, 'id'>) => {
      const url = profileId ? `/api/v1/profiles/${profileId}` : '/api/v1/profiles';
      const method = profileId ? 'PATCH' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('Save failed');
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['admin-profile'] });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  if (isLoading) return <p style={{ color: 'var(--color-foreground-muted)' }}>Loading profile...</p>;

  return (
    <div>
      <PageHeader
        title="Profile"
        description="Edit your personal information and portfolio settings"
      />

      {saved && (
        <div style={{ marginBottom: 16, padding: '10px 14px', background: 'var(--color-success-subtle)', border: '1px solid var(--color-success)', borderRadius: 6, fontSize: 13, color: 'var(--color-success)' }}>
          Profile saved successfully.
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          save.mutate(form);
        }}
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 10,
          padding: 24,
          maxWidth: 720,
        }}
      >
        <h3 style={{ margin: '0 0 16px', fontSize: 14, fontWeight: 600, color: 'var(--color-foreground-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Personal Info
        </h3>
        <FormRow>
          <FormField label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />
          <FormField label="Headline" name="headline" value={form.headline} onChange={handleChange} placeholder="e.g. Data Scientist at XYZ" />
        </FormRow>
        <FormField label="Summary / Bio" name="summary" value={form.summary} onChange={handleChange} multiline />
        <FormRow>
          <FormField label="Location" name="location" value={form.location} onChange={handleChange} placeholder="Jakarta, Indonesia" />
          <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
        </FormRow>
        <FormRow>
          <FormField label="Phone" name="phone" value={form.phone} onChange={handleChange} />
          <FormField label="Website" name="website" type="url" value={form.website ?? ''} onChange={handleChange} />
        </FormRow>

        <h3 style={{ margin: '20px 0 16px', fontSize: 14, fontWeight: 600, color: 'var(--color-foreground-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Social Links
        </h3>
        <FormRow>
          <FormField label="LinkedIn URL" name="linkedinUrl" type="url" value={form.linkedinUrl ?? ''} onChange={handleChange} />
          <FormField label="GitHub URL" name="githubUrl" type="url" value={form.githubUrl ?? ''} onChange={handleChange} />
        </FormRow>
        <FormField label="Twitter / X URL" name="twitterUrl" type="url" value={form.twitterUrl ?? ''} onChange={handleChange} />

        <h3 style={{ margin: '20px 0 16px', fontSize: 14, fontWeight: 600, color: 'var(--color-foreground-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Media & Hero
        </h3>
        <FormRow>
          <FormField label="Avatar URL" name="avatarUrl" type="url" value={form.avatarUrl ?? ''} onChange={handleChange} />
          <FormField label="Resume URL" name="resumeUrl" type="url" value={form.resumeUrl ?? ''} onChange={handleChange} />
        </FormRow>
        <FormField label="Hero Subtitle" name="heroSubtitle" value={form.heroSubtitle ?? ''} onChange={handleChange} placeholder="e.g. Building the future with data" />

        <div style={{ marginTop: 20 }}>
          <SubmitBar loading={save.isPending} onCancel={() => {}} label={profileId ? 'Update Profile' : 'Create Profile'} />
        </div>
      </form>
    </div>
  );
}

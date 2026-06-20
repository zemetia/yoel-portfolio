import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { buildMetadata } from '@/lib/seo';
import { serializeSchema, webPageSchema, organizationSchema } from '@/lib/structured-data';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const STACK_ITEMS = [
  { label: 'Next.js 16', color: 'text-foreground' },
  { label: 'React 19', color: 'text-primary' },
  { label: 'TypeScript', color: 'text-primary' },
  { label: 'Tailwind v4', color: 'text-success' },
  { label: 'next-intl v4', color: 'text-foreground-muted' },
  { label: 'Zustand', color: 'text-warning' },
  { label: 'Storybook 10', color: 'text-destructive' },
  { label: 'Vitest', color: 'text-success' },
] as const;

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = siteConfig.pages['home'];
  return buildMetadata({
    title: page?.title,
    description: page?.description,
    path: '/',
    locale,
  });
}

export default function HomePage() {
  const t = useTranslations('home');

  const features = [
    { key: 'i18n', badge: 'next-intl v4' },
    { key: 'components', badge: 'CVA + Tailwind' },
    { key: 'storybook', badge: 'Storybook 10' },
    { key: 'services', badge: 'Typed Fetch' },
    { key: 'testing', badge: 'Vitest + RTL' },
    { key: 'typescript', badge: 'Strict Mode' },
  ] as const;

  return (
    <>
      <script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(organizationSchema()) }}
      />
      <script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            webPageSchema({
              name: siteConfig.pages['home']?.title ?? siteConfig.name,
              description: siteConfig.pages['home']?.description ?? siteConfig.description,
              url: siteConfig.url,
              datePublished: '2024-01-01',
            }),
          ),
        }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="container-page flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
          <Badge variant="secondary" className="mb-6">
            {t('hero.badge')}
          </Badge>

          <Typography
            variant="h1"
            className="mb-6 max-w-3xl text-balance bg-gradient-to-b from-foreground to-foreground-muted bg-clip-text text-transparent"
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('hero.title')}
          </Typography>

          <Typography variant="lead" className="mb-10 max-w-xl text-foreground-muted">
            {t('hero.description')}
          </Typography>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">{t('hero.ctaPrimary')}</Button>
            <Button size="lg" variant="outline">
              {t('hero.ctaSecondary')}
            </Button>
          </div>

          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div
              className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
              style={{ background: 'var(--color-primary)' }}
            />
          </div>
        </section>

        {/* Features */}
        <section className="container-page py-24">
          <div className="mb-12 text-center">
            <Typography variant="h2" className="mb-3">
              {t('features.heading')}
            </Typography>
            <Typography variant="lead" className="text-foreground-muted">
              {t('features.subheading')}
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ key, badge }) => (
              <Card key={key} className="border-gradient transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Badge variant="outline" className="mb-2 w-fit text-xs">
                    {badge}
                  </Badge>
                  <CardTitle>{t(`features.${key}.title`)}</CardTitle>
                  <CardDescription>{t(`features.${key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="container-page pb-24">
          <Typography variant="h3" className="mb-8 text-center text-foreground-muted">
            {t('stack.heading')}
          </Typography>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK_ITEMS.map(({ label, color }) => (
              <span
                key={label}
                className={`rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-sm font-medium ${color}`}
              >
                {label}
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

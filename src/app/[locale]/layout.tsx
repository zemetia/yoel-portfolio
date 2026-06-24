import type { Metadata } from 'next';
import { Fira_Code, Noto_Sans, Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { Toaster } from '@/components/ui/Sonner';
import { PostHogProvider } from '@/providers';
import { fetchPortfolioData } from '@/lib/portfolio-adapter';

import '../globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  weight: ['400', '500', '600'],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.meta' });

  // Try to read profile from Firebase for dynamic SEO
  const portfolio = await fetchPortfolioData().catch(() => null);
  const profile = portfolio?.data?.profile ?? null;

  const defaultTitle = profile?.name
    ? `${profile.name} — ${profile.tagline ?? 'Portfolio'}`
    : t('title');

  const defaultDescription = profile?.shortBio ?? t('description');

  return {
    title: {
      template: `%s | ${profile?.name ?? 'Portfolio'}`,
      default: defaultTitle,
    },
    description: defaultDescription,
    metadataBase: new URL(process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${notoSans.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <PostHogProvider>
            {children}
          </PostHogProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

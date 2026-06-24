'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';

export interface HeaderProps {
  className?: string;
  profileName?: string | null;
}

export function Header({ className, profileName }: HeaderProps) {
  const t = useTranslations('navigation');
  const displayName = profileName ?? 'Portfolio';
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md',
        className,
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-black"
            aria-hidden="true"
          >
            {initial}
          </span>
          <span>{displayName}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {t('home')}
          </Link>
          <Link
            href="/about"
            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {t('about')}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

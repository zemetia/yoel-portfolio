import { cn } from '@/lib/cn';

export interface FooterProps {
  className?: string;
  profileName?: string | null;
}

const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
] as const;

export function Footer({ className, profileName }: FooterProps) {
  const year = new Date().getFullYear();
  const displayName = profileName ?? 'Portfolio';

  return (
    <footer className={cn('border-t border-border/50 bg-surface', className)}>
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-foreground-subtle">
          &copy; {year} {displayName}. Built with{' '}
          <span className="text-primary">{'\u2665'}</span>
        </p>

        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-4">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-subtle transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

import { cn } from '@/lib/cn';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Explicit map so Tailwind v4 JIT can detect all col-span-* classes as literal strings
const COL_SPAN: Record<number, string> = {
  1: 'col-span-1',   2: 'col-span-2',   3: 'col-span-3',
  4: 'col-span-4',   5: 'col-span-5',   6: 'col-span-6',
  7: 'col-span-7',   8: 'col-span-8',   9: 'col-span-9',
  10: 'col-span-10', 11: 'col-span-11', 12: 'col-span-12',
};

export function LayoutWrapper({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen bg-tech-bg text-tech-primary font-sans selection:bg-tech-accent selection:text-white", className)}>
      <div className="mx-auto max-w-desktop w-full px-page-margin">
        {children}
      </div>
    </div>
  );
}

export function Grid({ children, className }: LayoutProps) {
  return (
    <div className={cn("grid grid-cols-12 gap-gutter", className)}>
      {children}
    </div>
  );
}

export function Col({
  children,
  className,
  span = 12,
}: LayoutProps & { span?: number }) {
  return (
    <div className={cn(COL_SPAN[span] ?? 'col-span-12', className)}>
      {children}
    </div>
  );
}

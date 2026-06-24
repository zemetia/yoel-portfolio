import { cn } from '@/lib/cn'; // Assuming this exists, common in shadcn/ui

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutWrapper({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen bg-tech-bg text-tech-primary font-sans selection:bg-tech-accent selection:text-white", className)}>
      <div className="mx-auto max-w-desktop w-full px-page-margin">
         {/* Grid overlay for development (optional/hidden) */}
         {/* <div className="fixed inset-0 pointer-events-none z-50 mx-auto max-w-desktop px-page-margin grid grid-cols-12 gap-gutter opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-red-500 h-full" />
            ))}
         </div> */}
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
  span = 12 
}: LayoutProps & { span?: number }) {
  return (
    <div className={cn(`col-span-${span}`, className)}>
      {children}
    </div>
  );
}

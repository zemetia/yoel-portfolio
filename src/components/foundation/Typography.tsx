import { cn } from '@/lib/cn';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function H1({ children, className, as: Component = 'h1', ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-[72px] md:text-[96px] leading-[1.1] font-bold tracking-tight text-tech-primary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H2({ children, className, as: Component = 'h2', ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-[36px] md:text-[48px] leading-[1.2] font-bold text-tech-primary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Body({ children, className, as: Component = 'p', ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans text-[16px] md:text-[18px] leading-[1.6] text-tech-secondary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Meta({ children, className, as: Component = 'span', ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-mono text-[12px] md:text-[13px] uppercase tracking-wider text-tech-secondary/70",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

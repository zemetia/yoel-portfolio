interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
      <div>
        <h1 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
          {title}
        </h1>
        {description && (
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-foreground-muted)' }}>{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

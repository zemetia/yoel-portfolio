interface Column<T> {
  key: string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface AdminTableProps<T extends { id: string }> {
  columns: Column<T>[];
  rows: T[];
  onEdit?: (row: T) => void;
  onDelete?: (id: string) => void;
  loading?: boolean;
}

export function AdminTable<T extends { id: string }>({
  columns,
  rows,
  onEdit,
  onDelete,
  loading,
}: AdminTableProps<T>) {
  if (loading) {
    return <p style={{ color: 'var(--color-foreground-muted)', fontSize: 14 }}>Loading...</p>;
  }

  if (rows.length === 0) {
    return (
      <div
        style={{
          padding: '40px 24px',
          textAlign: 'center',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          color: 'var(--color-foreground-subtle)',
          fontSize: 14,
        }}
      >
        No records yet.
      </div>
    );
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: 13,
        }}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  padding: '10px 12px',
                  textAlign: 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--color-foreground-subtle)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  background: 'var(--color-surface)',
                  borderBottom: '1px solid var(--color-border)',
                  whiteSpace: 'nowrap',
                }}
              >
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th
                style={{
                  padding: '10px 12px',
                  background: 'var(--color-surface)',
                  borderBottom: '1px solid var(--color-border)',
                  width: 100,
                }}
              />
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              {columns.map((col) => {
                const raw = (row as Record<string, unknown>)[col.key];
                return (
                  <td
                    key={col.key}
                    style={{
                      padding: '10px 12px',
                      color: 'var(--color-foreground)',
                      maxWidth: 300,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {col.render ? col.render(row) : (raw != null ? String(raw) : '—')}
                  </td>
                );
              })}
              {(onEdit || onDelete) && (
                <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        style={btnStyle('var(--color-surface-raised)', 'var(--color-foreground-muted)')}
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => {
                          if (confirm('Delete this record?')) onDelete(row.id);
                        }}
                        style={btnStyle('var(--color-destructive-subtle)', 'var(--color-destructive)')}
                      >
                        Del
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function btnStyle(bg: string, color: string): React.CSSProperties {
  return {
    padding: '4px 10px',
    fontSize: 12,
    background: bg,
    color,
    border: `1px solid ${color}`,
    borderRadius: 4,
    cursor: 'pointer',
    opacity: 0.85,
  };
}

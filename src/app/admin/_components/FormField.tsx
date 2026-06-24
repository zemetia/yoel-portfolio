interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  multiline?: boolean;
  options?: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 10px',
  background: 'var(--color-background)',
  border: '1px solid var(--color-border)',
  borderRadius: 6,
  color: 'var(--color-foreground)',
  fontSize: 13,
  outline: 'none',
  boxSizing: 'border-box',
};

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  multiline,
  options,
  required,
  placeholder,
}: FormFieldProps) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label
        style={{
          display: 'block',
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--color-foreground-muted)',
          marginBottom: 5,
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--color-destructive)', marginLeft: 2 }}>*</span>}
      </label>

      {options ? (
        <select name={name} value={value} onChange={onChange} style={inputStyle}>
          <option value="">— Select —</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      ) : multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={4}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          style={inputStyle}
        />
      )}
    </div>
  );
}

interface FormRowProps { children: React.ReactNode }
export function FormRow({ children }: FormRowProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      {children}
    </div>
  );
}

interface SubmitBarProps {
  loading?: boolean;
  onCancel: () => void;
  label?: string;
}
export function SubmitBar({ loading, onCancel, label = 'Save' }: SubmitBarProps) {
  return (
    <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', paddingTop: 8, borderTop: '1px solid var(--color-border)', marginTop: 8 }}>
      <button
        type="button"
        onClick={onCancel}
        style={{
          padding: '8px 18px',
          fontSize: 13,
          background: 'transparent',
          border: '1px solid var(--color-border)',
          borderRadius: 6,
          color: 'var(--color-foreground-muted)',
          cursor: 'pointer',
        }}
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: '8px 18px',
          fontSize: 13,
          fontWeight: 600,
          background: loading ? 'var(--color-primary-subtle)' : 'var(--color-primary)',
          color: 'var(--color-primary-foreground)',
          border: 'none',
          borderRadius: 6,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Saving...' : label}
      </button>
    </div>
  );
}

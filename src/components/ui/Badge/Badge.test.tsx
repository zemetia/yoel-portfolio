import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renders dot indicator when dot prop is true', () => {
    const { container } = render(<Badge dot>Live</Badge>);
    const dot = container.querySelector('[aria-hidden="true"]');
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass('rounded-full');
  });

  it('does not render dot when dot prop is false', () => {
    const { container } = render(<Badge>Offline</Badge>);
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Label</Badge>);
    expect(screen.getByText('Label')).toHaveClass('custom-class');
  });

  it('renders as a span element', () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText('Tag').tagName).toBe('SPAN');
  });

  it('forwards additional html attributes', () => {
    render(<Badge data-testid="my-badge">Test</Badge>);
    expect(screen.getByTestId('my-badge')).toBeInTheDocument();
  });

  it.each([
    'default',
    'secondary',
    'outline',
    'destructive',
    'success',
    'warning',
  ] as const)('renders variant "%s" without crashing', (variant) => {
    render(<Badge variant={variant}>{variant}</Badge>);
    expect(screen.getByText(variant)).toBeInTheDocument();
  });

  it.each(['sm', 'md', 'lg'] as const)('renders size "%s" without crashing', (size) => {
    render(<Badge size={size}>Label</Badge>);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
});

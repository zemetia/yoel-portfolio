import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Typography } from './Typography';

describe('Typography', () => {
  it('renders children', () => {
    render(<Typography>Hello world</Typography>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('defaults to a <p> element', () => {
    render(<Typography>Text</Typography>);
    expect(screen.getByText('Text').tagName).toBe('P');
  });

  it('applies custom className', () => {
    render(<Typography className="extra-class">Text</Typography>);
    expect(screen.getByText('Text')).toHaveClass('extra-class');
  });

  it('overrides element with as prop', () => {
    render(<Typography as="span">Span text</Typography>);
    expect(screen.getByText('Span text').tagName).toBe('SPAN');
  });

  it.each([
    ['h1', 'H1'],
    ['h2', 'H2'],
    ['h3', 'H3'],
    ['h4', 'H4'],
    ['h5', 'H5'],
    ['h6', 'H6'],
  ] as const)('renders variant "%s" as <%s> element', (variant, tag) => {
    render(<Typography variant={variant}>Heading</Typography>);
    expect(screen.getByText('Heading').tagName).toBe(tag);
  });

  it.each([
    ['p', 'P'],
    ['lead', 'P'],
    ['large', 'P'],
    ['muted', 'P'],
  ] as const)('renders variant "%s" as <p> element', (variant, tag) => {
    render(<Typography variant={variant}>Text</Typography>);
    expect(screen.getByText('Text').tagName).toBe(tag);
  });

  it('renders variant "small" as <small> element', () => {
    render(<Typography variant="small">Small text</Typography>);
    expect(screen.getByText('Small text').tagName).toBe('SMALL');
  });

  it('renders variant "code" as <code> element', () => {
    render(<Typography variant="code">const x = 1;</Typography>);
    expect(screen.getByText('const x = 1;').tagName).toBe('CODE');
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the current year in the copyright notice', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders footer navigation landmark', () => {
    render(<Footer />);
    expect(screen.getByRole('navigation', { name: 'Footer links' })).toBeInTheDocument();
  });

  it('renders all footer links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
  });

  it('opens links in a new tab with rel=noopener', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('renders a <footer> element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Footer className="custom-class" />);
    expect(container.querySelector('footer')).toHaveClass('custom-class');
  });
});

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Toaster } from './Sonner';

describe('Toaster', () => {
  it('renders without crashing', () => {
    const { container } = render(<Toaster />);
    expect(container).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Toaster.displayName).toBe('Toaster');
  });
});

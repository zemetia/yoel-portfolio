import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card className="w-80">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('w-80');
  });

  it('includes padding by default', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('p-6');
  });

  it('removes padding when noPadding is true', () => {
    render(<Card noPadding>Content</Card>);
    expect(screen.getByText('Content')).not.toHaveClass('p-6');
  });
});

describe('CardHeader', () => {
  it('renders children', () => {
    render(<CardHeader>Header</CardHeader>);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});

describe('CardTitle', () => {
  it('renders children as h3', () => {
    render(<CardTitle>My Title</CardTitle>);
    const title = screen.getByText('My Title');
    expect(title.tagName).toBe('H3');
  });
});

describe('CardDescription', () => {
  it('renders children as p', () => {
    render(<CardDescription>A description</CardDescription>);
    const el = screen.getByText('A description');
    expect(el.tagName).toBe('P');
  });
});

describe('CardContent', () => {
  it('renders children', () => {
    render(<CardContent>Body</CardContent>);
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});

describe('CardFooter', () => {
  it('renders children', () => {
    render(<CardFooter>Footer</CardFooter>);
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});

describe('Card composition', () => {
  it('renders a fully composed card', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description text</CardDescription>
        </CardHeader>
        <CardContent>Body content</CardContent>
        <CardFooter>Footer actions</CardFooter>
      </Card>,
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description text')).toBeInTheDocument();
    expect(screen.getByText('Body content')).toBeInTheDocument();
    expect(screen.getByText('Footer actions')).toBeInTheDocument();
  });
});

import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

afterEach(cleanup);

describe('Skeleton', () => {
  it('renders a div with the default skeleton styles', () => {
    render(<Skeleton data-testid="s" />);
    const el = screen.getByTestId('s');
    expect(el.tagName).toBe('DIV');
    expect(el.className).toContain('rounded-(--stroke-radius-xs)');
    expect(el.className).toContain('h-[16px]');
    expect(el.className).toContain('w-[128px]');
  });

  it('applies the shimmer animation class', () => {
    render(<Skeleton data-testid="s" />);
    expect(screen.getByTestId('s').className).toContain(
      'animate-skeleton-shimmer',
    );
  });

  it('disables motion for reduced-motion users', () => {
    render(<Skeleton data-testid="s" />);
    expect(screen.getByTestId('s').className).toContain(
      'motion-reduce:animate-none',
    );
  });

  it('forwards className alongside base styles', () => {
    render(<Skeleton data-testid="s" className="h-8 w-64 rounded-full" />);
    const el = screen.getByTestId('s');
    expect(el.className).toContain('h-8');
    expect(el.className).toContain('w-64');
    expect(el.className).toContain('rounded-full');
    expect(el.className).toContain('animate-skeleton-shimmer');
  });

  it('forwards arbitrary HTML attributes', () => {
    render(<Skeleton data-testid="s" aria-label="Loading user avatar" />);
    expect(screen.getByTestId('s').getAttribute('aria-label')).toBe(
      'Loading user avatar',
    );
  });
});

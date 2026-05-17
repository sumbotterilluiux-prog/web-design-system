import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Card } from './Card';

afterEach(cleanup);

describe('Card', () => {
  it('renders a <div> with default elevated styling', () => {
    render(<Card data-testid="card">content</Card>);
    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('DIV');
    expect(card.className).toContain('bg-(--color-neutral-solid-50)');
    expect(card.className).toContain('p-(--padding-md)');
    expect(card.className).toContain('rounded-(--stroke-radius-lg)');
    expect(card.className).toContain('[box-shadow:var(--shadow-elevation-1)]');
  });

  it('applies the outlined stroke instead of a shadow when variant="outlined"', () => {
    render(
      <Card data-testid="card" variant="outlined">
        content
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card.className).toContain(
      '[box-shadow:inset_0_0_0_1px_var(--stroke-color-tertiary)]',
    );
    expect(card.className).not.toContain('[box-shadow:var(--shadow-elevation-1)]');
  });

  it('maps each padding prop to its token class', () => {
    const cases: Array<[
      'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
      string,
    ]> = [
      ['none', 'p-0'],
      ['xs', 'p-(--padding-xs)'],
      ['sm', 'p-(--padding-sm)'],
      ['lg', 'p-(--padding-lg)'],
      ['xl', 'p-(--padding-xl)'],
      ['2xl', 'p-(--padding-2xl)'],
    ];
    for (const [padding, expected] of cases) {
      cleanup();
      render(
        <Card data-testid="card" padding={padding}>
          x
        </Card>,
      );
      expect(screen.getByTestId('card').className).toContain(expected);
    }
  });

  it('maps each radius prop to its token class', () => {
    const cases: Array<['sm' | 'md' | 'lg' | 'xl' | '2xl', string]> = [
      ['sm', 'rounded-(--stroke-radius-sm)'],
      ['md', 'rounded-(--stroke-radius-md)'],
      ['xl', 'rounded-(--stroke-radius-xl)'],
      ['2xl', 'rounded-(--stroke-radius-2xl)'],
    ];
    for (const [radius, expected] of cases) {
      cleanup();
      render(
        <Card data-testid="card" radius={radius}>
          x
        </Card>,
      );
      expect(screen.getByTestId('card').className).toContain(expected);
    }
  });

  it('forwards className and arbitrary div attributes', () => {
    render(
      <Card
        data-testid="card"
        className="my-extra"
        aria-label="info card"
        role="region"
      >
        content
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card.className).toContain('my-extra');
    expect(card.getAttribute('aria-label')).toBe('info card');
    expect(card.getAttribute('role')).toBe('region');
  });

  it('renders children', () => {
    render(
      <Card>
        <span data-testid="child">hello</span>
      </Card>,
    );
    expect(screen.getByTestId('child').textContent).toBe('hello');
  });
});

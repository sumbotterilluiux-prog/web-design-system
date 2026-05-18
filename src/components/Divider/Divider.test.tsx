import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Divider } from './Divider';

afterEach(cleanup);

describe('Divider', () => {
  it('renders an <hr> with horizontal classes by default', () => {
    render(<Divider data-testid="d" />);
    const hr = screen.getByTestId('d');
    expect(hr.tagName).toBe('HR');
    expect(hr.className).toContain('h-px');
    expect(hr.className).toContain('w-full');
    expect(hr.className).toContain('bg-(--stroke-color-tertiary)');
    expect(hr.getAttribute('aria-orientation')).toBe('horizontal');
  });

  it('applies vertical sizing and aria when orientation="vertical"', () => {
    render(<Divider data-testid="d" orientation="vertical" />);
    const hr = screen.getByTestId('d');
    expect(hr.className).toContain('w-px');
    expect(hr.className).toContain('h-full');
    expect(hr.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('exposes an implicit separator role to assistive tech', () => {
    render(<Divider />);
    expect(screen.getByRole('separator')).toBeInstanceOf(HTMLHRElement);
  });

  it('forwards className alongside orientation styles', () => {
    render(<Divider data-testid="d" className="my-4" />);
    const hr = screen.getByTestId('d');
    expect(hr.className).toContain('my-4');
    expect(hr.className).toContain('h-px');
  });
});

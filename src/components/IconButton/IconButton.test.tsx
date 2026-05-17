import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconButton } from './IconButton';
import { Placeholder } from '../../icons';

afterEach(cleanup);

describe('IconButton', () => {
  it('renders a native <button> with an accessible name from aria-label', () => {
    render(
      <IconButton aria-label="Close dialog" icon={<Placeholder data-testid="icon" />} />,
    );
    const btn = screen.getByRole('button', { name: /close dialog/i }) as HTMLButtonElement;
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn.type).toBe('button');
    expect(screen.getByTestId('icon')).toBeInstanceOf(SVGSVGElement);
  });

  it('sizes the icon per size prop, including the tiny variant', () => {
    const sizes: Array<['lg' | 'md' | 'sm' | 'tiny', string]> = [
      ['lg', '24'],
      ['md', '20'],
      ['sm', '16'],
      ['tiny', '12'],
    ];
    for (const [size, px] of sizes) {
      cleanup();
      render(
        <IconButton
          aria-label="Action"
          size={size}
          icon={<Placeholder data-testid="icon" />}
        />,
      );
      const icon = screen.getByTestId('icon');
      expect(icon.getAttribute('width')).toBe(px);
      expect(icon.getAttribute('height')).toBe(px);
    }
  });

  it('applies the per-size square box (lg → 48px, tiny → 24px)', () => {
    render(<IconButton aria-label="A" size="lg" icon={<Placeholder />} />);
    expect(screen.getByRole('button', { name: 'A' }).className).toContain('size-[48px]');
    cleanup();
    render(<IconButton aria-label="B" size="tiny" icon={<Placeholder />} />);
    expect(screen.getByRole('button', { name: 'B' }).className).toContain('size-[24px]');
  });

  it('applies a 1px secondary border at lg/md and 0.5px at sm/tiny', () => {
    render(<IconButton aria-label="lg" variant="secondary" size="lg" icon={<Placeholder />} />);
    expect(screen.getByRole('button', { name: 'lg' }).className).toContain(
      'inset_0_0_0_1px_var(--stroke-color-default)',
    );
    cleanup();
    render(<IconButton aria-label="tiny" variant="secondary" size="tiny" icon={<Placeholder />} />);
    expect(screen.getByRole('button', { name: 'tiny' }).className).toContain(
      'inset_0_0_0_0.5px_var(--stroke-color-default)',
    );
  });

  it('inherit variant has no background or text color override', () => {
    render(<IconButton aria-label="inh" variant="inherit" icon={<Placeholder />} />);
    const className = screen.getByRole('button', { name: 'inh' }).className;
    expect(className).not.toContain('bg-(--color-neutral-solid-950)');
    expect(className).not.toContain('bg-(--color-neutral-solid-50)');
    expect(className).not.toContain('bg-(--color-neutral-alpha-black-4)');
    expect(className).not.toContain('text-(--color-neutral-solid-50)');
  });

  it('forwards className alongside variant + size styles', () => {
    render(
      <IconButton
        aria-label="custom"
        variant="tertiary"
        size="md"
        icon={<Placeholder />}
        className="my-extra"
      />,
    );
    const btn = screen.getByRole('button', { name: 'custom' });
    expect(btn.className).toContain('my-extra');
    expect(btn.className).toContain('bg-(--color-neutral-alpha-black-4)');
    expect(btn.className).toContain('text-(--color-ocean-500)');
  });

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<IconButton aria-label="Go" icon={<Placeholder />} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button', { name: 'Go' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('blocks clicks when disabled', async () => {
    const onClick = vi.fn();
    render(<IconButton aria-label="Go" disabled icon={<Placeholder />} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button', { name: 'Go' }));
    expect(onClick).not.toHaveBeenCalled();
  });
});

import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LeadingIconButton } from './LeadingIconButton';
import { Placeholder } from '../../icons';

afterEach(cleanup);

describe('LeadingIconButton', () => {
  it('renders the label and an icon inside a native <button>', () => {
    render(<LeadingIconButton icon={<Placeholder data-testid="icon" />}>Add</LeadingIconButton>);
    const btn = screen.getByRole('button', { name: /add/i }) as HTMLButtonElement;
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn.type).toBe('button');
    expect(screen.getByTestId('icon')).toBeInstanceOf(SVGSVGElement);
  });

  it('sizes the icon to match the button size prop', () => {
    render(
      <LeadingIconButton size="sm" icon={<Placeholder data-testid="icon" />}>
        Add
      </LeadingIconButton>,
    );
    const icon = screen.getByTestId('icon');
    // sm button uses 16px icons
    expect(icon.getAttribute('width')).toBe('16');
    expect(icon.getAttribute('height')).toBe('16');
  });

  it('forwards className alongside variant + size styles', () => {
    render(
      <LeadingIconButton
        variant="secondary"
        size="lg"
        icon={<Placeholder />}
        className="my-extra"
      >
        Action
      </LeadingIconButton>,
    );
    const btn = screen.getByRole('button', { name: /action/i });
    expect(btn.className).toContain('my-extra');
    expect(btn.className).toContain('pl-(--padding-md)');
    expect(btn.className).toContain('pr-(--padding-xl)');
    expect(btn.className).toContain('bg-(--color-neutral-solid-50)');
  });

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn();
    render(
      <LeadingIconButton icon={<Placeholder />} onClick={onClick}>
        Go
      </LeadingIconButton>,
    );
    await userEvent.click(screen.getByRole('button', { name: /go/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('blocks clicks when disabled', async () => {
    const onClick = vi.fn();
    render(
      <LeadingIconButton icon={<Placeholder />} disabled onClick={onClick}>
        Go
      </LeadingIconButton>,
    );
    await userEvent.click(screen.getByRole('button', { name: /go/i }));
    expect(onClick).not.toHaveBeenCalled();
  });
});

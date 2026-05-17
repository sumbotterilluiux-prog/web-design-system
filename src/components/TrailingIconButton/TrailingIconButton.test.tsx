import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TrailingIconButton } from './TrailingIconButton';
import { Placeholder } from '../../icons';

afterEach(cleanup);

describe('TrailingIconButton', () => {
  it('renders the label and an icon inside a native <button>', () => {
    render(<TrailingIconButton icon={<Placeholder data-testid="icon" />}>Next</TrailingIconButton>);
    const btn = screen.getByRole('button', { name: /next/i }) as HTMLButtonElement;
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn.type).toBe('button');
    expect(screen.getByTestId('icon')).toBeInstanceOf(SVGSVGElement);
  });

  it('renders the icon after the label in the DOM', () => {
    render(
      <TrailingIconButton icon={<Placeholder data-testid="icon" />}>Next</TrailingIconButton>,
    );
    const btn = screen.getByRole('button', { name: /next/i });
    const icon = screen.getByTestId('icon');
    // trailing icon must come last in document order so it visually follows the label
    const labelNode = Array.from(btn.childNodes).find(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.includes('Next'),
    );
    expect(labelNode).toBeTruthy();
    expect(
      labelNode!.compareDocumentPosition(icon) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it('sizes the icon to match the button size prop', () => {
    render(
      <TrailingIconButton size="sm" icon={<Placeholder data-testid="icon" />}>
        Next
      </TrailingIconButton>,
    );
    const icon = screen.getByTestId('icon');
    // sm button uses 16px icons
    expect(icon.getAttribute('width')).toBe('16');
    expect(icon.getAttribute('height')).toBe('16');
  });

  it('forwards className alongside variant + size styles', () => {
    render(
      <TrailingIconButton
        variant="secondary"
        size="lg"
        icon={<Placeholder />}
        className="my-extra"
      >
        Action
      </TrailingIconButton>,
    );
    const btn = screen.getByRole('button', { name: /action/i });
    expect(btn.className).toContain('my-extra');
    expect(btn.className).toContain('pl-(--padding-xl)');
    expect(btn.className).toContain('pr-(--padding-md)');
    expect(btn.className).toContain('bg-(--color-neutral-solid-50)');
  });

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn();
    render(
      <TrailingIconButton icon={<Placeholder />} onClick={onClick}>
        Go
      </TrailingIconButton>,
    );
    await userEvent.click(screen.getByRole('button', { name: /go/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('blocks clicks when disabled', async () => {
    const onClick = vi.fn();
    render(
      <TrailingIconButton icon={<Placeholder />} disabled onClick={onClick}>
        Go
      </TrailingIconButton>,
    );
    await userEvent.click(screen.getByRole('button', { name: /go/i }));
    expect(onClick).not.toHaveBeenCalled();
  });
});

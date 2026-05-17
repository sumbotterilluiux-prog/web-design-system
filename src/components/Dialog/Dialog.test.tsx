import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog, DialogCriticalButton } from './Dialog';
import { Button } from '../Button';

// jsdom doesn't implement showModal/close. The vitest browser environment
// (Chromium via @vitest/browser-playwright) does — these tests assume that.

afterEach(cleanup);

describe('Dialog', () => {
  it('renders a <dialog> with the title as its accessible name', () => {
    render(<Dialog open title="Confirm action" />);
    const dlg = screen.getByRole('dialog', { name: /confirm action/i });
    expect(dlg.tagName).toBe('DIALOG');
  });

  it('renders the close button by default and hides it when disabled', () => {
    render(<Dialog open title="t" />);
    expect(screen.getByRole('button', { name: /close dialog/i })).toBeInstanceOf(
      HTMLButtonElement,
    );
    cleanup();
    render(<Dialog open title="t" showCloseButton={false} />);
    expect(screen.queryByRole('button', { name: /close dialog/i })).toBeNull();
  });

  it('renders children as the body', () => {
    render(
      <Dialog open title="t">
        <span data-testid="body">hello body</span>
      </Dialog>,
    );
    expect(screen.getByTestId('body').textContent).toBe('hello body');
  });

  it('maps each size prop to its width class', () => {
    const cases: Array<['sm' | 'md' | 'lg', string]> = [
      ['sm', 'w-[400px]'],
      ['md', 'w-[600px]'],
      ['lg', 'w-[800px]'],
    ];
    for (const [size, expected] of cases) {
      cleanup();
      render(<Dialog open title="t" size={size} />);
      expect(screen.getByRole('dialog').className).toContain(expected);
    }
  });

  it('renders action slots and fires their onClick', async () => {
    const onPrimary = vi.fn();
    const onSecondary = vi.fn();
    render(
      <Dialog
        open
        title="t"
        primaryAction={
          <Button variant="primary" onClick={onPrimary}>
            Save
          </Button>
        }
        secondaryAction={
          <Button variant="secondary" onClick={onSecondary}>
            Cancel
          </Button>
        }
      />,
    );
    await userEvent.click(screen.getByRole('button', { name: /save/i }));
    await userEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(onPrimary).toHaveBeenCalledTimes(1);
    expect(onSecondary).toHaveBeenCalledTimes(1);
  });

  it('does not render an actions row when no action slots are provided', () => {
    render(
      <Dialog open title="t">
        body
      </Dialog>,
    );
    // The close button + title are present, but no extra action buttons.
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0].getAttribute('aria-label')).toBe('Close dialog');
  });

  it('fires onClose when the close IconButton is clicked', async () => {
    const onClose = vi.fn();
    render(<Dialog open title="t" onClose={onClose} />);
    await userEvent.click(screen.getByRole('button', { name: /close dialog/i }));
    expect(onClose).toHaveBeenCalled();
  });
});

describe('DialogCriticalButton', () => {
  beforeEach(() => cleanup());

  it('renders a native <button type="button"> with coral background', () => {
    render(<DialogCriticalButton>Delete</DialogCriticalButton>);
    const btn = screen.getByRole('button', { name: /delete/i }) as HTMLButtonElement;
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn.type).toBe('button');
    expect(btn.className).toContain('bg-(--color-coral-600)');
    expect(btn.className).toContain('text-(--color-neutral-solid-50)');
  });

  it('fires onClick when clicked, and blocks when disabled', async () => {
    const onClick = vi.fn();
    render(<DialogCriticalButton onClick={onClick}>Delete</DialogCriticalButton>);
    await userEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
    cleanup();
    onClick.mockClear();
    render(
      <DialogCriticalButton disabled onClick={onClick}>
        Delete
      </DialogCriticalButton>,
    );
    await userEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(onClick).not.toHaveBeenCalled();
  });
});

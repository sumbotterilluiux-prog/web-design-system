import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

afterEach(cleanup);

describe('Checkbox', () => {
  it('renders a native checkbox with the label as its accessible name', () => {
    render(<Checkbox label="Subscribe" />);
    const cb = screen.getByRole('checkbox', { name: /subscribe/i });
    expect(cb).toBeInstanceOf(HTMLInputElement);
    expect((cb as HTMLInputElement).type).toBe('checkbox');
  });

  it('toggles in uncontrolled mode when clicked', async () => {
    render(<Checkbox label="Toggle me" />);
    const cb = screen.getByRole('checkbox', { name: /toggle/i }) as HTMLInputElement;
    expect(cb.checked).toBe(false);
    await userEvent.click(screen.getByText(/toggle/i));
    expect(cb.checked).toBe(true);
  });

  it('toggles via keyboard (Space) when focused', async () => {
    render(<Checkbox label="Keys" />);
    const cb = screen.getByRole('checkbox', { name: /keys/i }) as HTMLInputElement;
    cb.focus();
    await userEvent.keyboard(' ');
    expect(cb.checked).toBe(true);
  });

  it('respects controlled `checked` and fires onChange', async () => {
    const onChange = vi.fn();
    render(<Checkbox label="x" checked={false} onChange={onChange} />);
    await userEvent.click(screen.getByText('x'));
    expect(onChange).toHaveBeenCalledTimes(1);
    // Because checked is fixed at false, the DOM should still report false
    expect((screen.getByRole('checkbox') as HTMLInputElement).checked).toBe(false);
  });

  it('blocks toggling when disabled', async () => {
    const onChange = vi.fn();
    render(<Checkbox label="x" disabled onChange={onChange} />);
    await userEvent.click(screen.getByText('x'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('sets the DOM indeterminate property when prop is true', () => {
    render(<Checkbox label="x" indeterminate />);
    const cb = screen.getByRole('checkbox', { name: 'x' }) as HTMLInputElement;
    expect(cb.indeterminate).toBe(true);
  });

  it('clears DOM indeterminate when prop flips back to false', () => {
    const { rerender } = render(<Checkbox label="x" indeterminate />);
    const cb = screen.getByRole('checkbox', { name: 'x' }) as HTMLInputElement;
    expect(cb.indeterminate).toBe(true);
    rerender(<Checkbox label="x" indeterminate={false} />);
    expect(cb.indeterminate).toBe(false);
  });

  it('renders description and links it via aria-describedby', () => {
    render(<Checkbox label="x" description="More info here" />);
    const cb = screen.getByRole('checkbox', { name: 'x' });
    const descId = cb.getAttribute('aria-describedby');
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)?.textContent).toBe('More info here');
  });

  it('renders errorMessage, sets aria-invalid, and links it via aria-describedby', () => {
    render(<Checkbox label="x" errorMessage="Required field" />);
    const cb = screen.getByRole('checkbox', { name: 'x' });
    expect(cb.getAttribute('aria-invalid')).toBe('true');
    const descId = cb.getAttribute('aria-describedby');
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)?.textContent).toBe('Required field');
  });

  it('forwards arbitrary input attributes (name, value, required)', () => {
    render(<Checkbox label="x" name="agree" value="yes" required />);
    const cb = screen.getByRole('checkbox', { name: 'x' }) as HTMLInputElement;
    expect(cb.name).toBe('agree');
    expect(cb.value).toBe('yes');
    expect(cb.required).toBe(true);
  });
});

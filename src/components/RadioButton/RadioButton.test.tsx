import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioButton } from './RadioButton';

afterEach(cleanup);

describe('RadioButton', () => {
  it('renders a native radio with the label as its accessible name', () => {
    render(<RadioButton label="Subscribe" />);
    const rb = screen.getByRole('radio', { name: /subscribe/i });
    expect(rb).toBeInstanceOf(HTMLInputElement);
    expect((rb as HTMLInputElement).type).toBe('radio');
  });

  it('selects in uncontrolled mode when clicked', async () => {
    render(<RadioButton label="Pick me" />);
    const rb = screen.getByRole('radio', { name: /pick me/i }) as HTMLInputElement;
    expect(rb.checked).toBe(false);
    await userEvent.click(screen.getByText(/pick me/i));
    expect(rb.checked).toBe(true);
  });

  it('selects via keyboard (Space) when focused', async () => {
    render(<RadioButton label="Keys" />);
    const rb = screen.getByRole('radio', { name: /keys/i }) as HTMLInputElement;
    rb.focus();
    await userEvent.keyboard(' ');
    expect(rb.checked).toBe(true);
  });

  it('respects controlled `checked` and fires onChange', async () => {
    const onChange = vi.fn();
    render(<RadioButton label="x" checked={false} onChange={onChange} />);
    await userEvent.click(screen.getByText('x'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect((screen.getByRole('radio') as HTMLInputElement).checked).toBe(false);
  });

  it('blocks selection when disabled', async () => {
    const onChange = vi.fn();
    render(<RadioButton label="x" disabled onChange={onChange} />);
    await userEvent.click(screen.getByText('x'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('enforces single selection inside a shared `name` group', async () => {
    render(
      <>
        <RadioButton name="group" value="a" label="A" />
        <RadioButton name="group" value="b" label="B" />
      </>,
    );
    const a = screen.getByRole('radio', { name: 'A' }) as HTMLInputElement;
    const b = screen.getByRole('radio', { name: 'B' }) as HTMLInputElement;
    await userEvent.click(screen.getByText('A'));
    expect(a.checked).toBe(true);
    expect(b.checked).toBe(false);
    await userEvent.click(screen.getByText('B'));
    expect(a.checked).toBe(false);
    expect(b.checked).toBe(true);
  });

  it('sets aria-invalid when `error` is true', () => {
    render(<RadioButton label="x" error />);
    expect(screen.getByRole('radio').getAttribute('aria-invalid')).toBe('true');
  });

  it('renders description and links it via aria-describedby', () => {
    render(<RadioButton label="x" description="More info here" />);
    const rb = screen.getByRole('radio', { name: 'x' });
    const descId = rb.getAttribute('aria-describedby');
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)?.textContent).toBe('More info here');
  });

  it('renders errorMessage, sets aria-invalid, and links it via aria-describedby', () => {
    render(<RadioButton label="x" errorMessage="Required field" />);
    const rb = screen.getByRole('radio', { name: 'x' });
    expect(rb.getAttribute('aria-invalid')).toBe('true');
    const descId = rb.getAttribute('aria-describedby');
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)?.textContent).toBe('Required field');
  });

  it('forwards arbitrary input attributes (name, value, required)', () => {
    render(<RadioButton label="x" name="picker" value="yes" required />);
    const rb = screen.getByRole('radio', { name: 'x' }) as HTMLInputElement;
    expect(rb.name).toBe('picker');
    expect(rb.value).toBe('yes');
    expect(rb.required).toBe(true);
  });
});

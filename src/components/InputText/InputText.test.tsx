import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputText } from './InputText';

afterEach(cleanup);

describe('InputText', () => {
  it('renders a text input with the label as its accessible name', () => {
    render(<InputText label="Email" />);
    const input = screen.getByRole('textbox', { name: /email/i });
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect((input as HTMLInputElement).type).toBe('text');
  });

  it('forwards arbitrary input attributes (name, type, placeholder, required)', () => {
    render(
      <InputText
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
      />,
    );
    const input = screen.getByRole('textbox', { name: /email/i }) as HTMLInputElement;
    expect(input.name).toBe('email');
    expect(input.type).toBe('email');
    expect(input.placeholder).toBe('you@example.com');
    expect(input.required).toBe(true);
  });

  it('updates in uncontrolled mode and fires onChange', async () => {
    const onChange = vi.fn();
    render(<InputText label="Name" onChange={onChange} />);
    const input = screen.getByRole('textbox', { name: /name/i }) as HTMLInputElement;
    await userEvent.type(input, 'Alice');
    expect(input.value).toBe('Alice');
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it('respects controlled `value` and fires onChange', async () => {
    const onChange = vi.fn();
    render(<InputText label="x" value="locked" onChange={onChange} />);
    const input = screen.getByRole('textbox', { name: 'x' }) as HTMLInputElement;
    expect(input.value).toBe('locked');
    await userEvent.type(input, 'a');
    expect(onChange).toHaveBeenCalled();
    expect(input.value).toBe('locked');
  });

  it('blocks typing when disabled', async () => {
    const onChange = vi.fn();
    render(<InputText label="x" disabled onChange={onChange} />);
    const input = screen.getByRole('textbox', { name: 'x' }) as HTMLInputElement;
    await userEvent.type(input, 'nope');
    expect(input.value).toBe('');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('sets aria-invalid when `error` is true', () => {
    render(<InputText label="x" error />);
    expect(screen.getByRole('textbox').getAttribute('aria-invalid')).toBe('true');
  });

  it('renders errorMessage and links it via aria-describedby when error is true', () => {
    render(<InputText label="x" error errorMessage="Required field" />);
    const input = screen.getByRole('textbox', { name: 'x' });
    const descId = input.getAttribute('aria-describedby');
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)?.textContent).toContain('Required field');
  });

  it('does not render errorMessage when error is false', () => {
    render(<InputText label="x" errorMessage="hidden" />);
    expect(screen.queryByText('hidden')).toBeNull();
  });

  it('renders hintText and links it via aria-describedby', () => {
    render(<InputText label="x" hintText="Helper here" />);
    const input = screen.getByRole('textbox', { name: 'x' });
    const descId = input.getAttribute('aria-describedby');
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)?.textContent).toBe('Helper here');
  });

  it('renders "(optional)" suffix when optional is true', () => {
    render(<InputText label="x" optional />);
    expect(screen.getByText('(optional)')).toBeInstanceOf(HTMLElement);
  });

  it('does not render "(optional)" by default', () => {
    render(<InputText label="x" />);
    expect(screen.queryByText('(optional)')).toBeNull();
  });

  it('renders current/max character count from input value', async () => {
    render(<InputText label="x" characterCount maxLength={10} />);
    expect(screen.getByText('0/10')).toBeInstanceOf(HTMLElement);
    await userEvent.type(screen.getByRole('textbox'), 'abc');
    expect(screen.getByText('3/10')).toBeInstanceOf(HTMLElement);
  });

  it('does not render character count by default', () => {
    render(<InputText label="x" maxLength={10} />);
    expect(screen.queryByText('0/10')).toBeNull();
  });

  it('renders leading and trailing icons when provided', () => {
    render(
      <InputText
        label="x"
        leadingIcon={<span data-testid="lead">L</span>}
        trailingIcon={<span data-testid="trail">T</span>}
      />,
    );
    expect(screen.getByTestId('lead')).toBeInstanceOf(HTMLElement);
    expect(screen.getByTestId('trail')).toBeInstanceOf(HTMLElement);
  });

  it('does not render icon slots by default', () => {
    render(<InputText label="x" />);
    expect(screen.queryByTestId('lead')).toBeNull();
    expect(screen.queryByTestId('trail')).toBeNull();
  });
});

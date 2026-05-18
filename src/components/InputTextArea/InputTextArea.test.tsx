import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputTextArea } from './InputTextArea';

afterEach(cleanup);

describe('InputTextArea', () => {
  it('renders a textarea with the label as its accessible name', () => {
    render(<InputTextArea label="Feedback" />);
    const ta = screen.getByRole('textbox', { name: /feedback/i });
    expect(ta).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('forwards arbitrary textarea attributes (name, placeholder, rows, required)', () => {
    render(
      <InputTextArea
        label="Feedback"
        name="message"
        placeholder="Tell us…"
        rows={5}
        required
      />,
    );
    const ta = screen.getByRole('textbox', { name: /feedback/i }) as HTMLTextAreaElement;
    expect(ta.name).toBe('message');
    expect(ta.placeholder).toBe('Tell us…');
    expect(ta.rows).toBe(5);
    expect(ta.required).toBe(true);
  });

  it('updates in uncontrolled mode and fires onChange', async () => {
    const onChange = vi.fn();
    render(<InputTextArea label="x" onChange={onChange} />);
    const ta = screen.getByRole('textbox', { name: 'x' }) as HTMLTextAreaElement;
    await userEvent.type(ta, 'hi');
    expect(ta.value).toBe('hi');
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('respects controlled `value` and fires onChange', async () => {
    const onChange = vi.fn();
    render(<InputTextArea label="x" value="locked" onChange={onChange} />);
    const ta = screen.getByRole('textbox', { name: 'x' }) as HTMLTextAreaElement;
    expect(ta.value).toBe('locked');
    await userEvent.type(ta, 'a');
    expect(onChange).toHaveBeenCalled();
    expect(ta.value).toBe('locked');
  });

  it('blocks typing when disabled', async () => {
    const onChange = vi.fn();
    render(<InputTextArea label="x" disabled onChange={onChange} />);
    const ta = screen.getByRole('textbox', { name: 'x' }) as HTMLTextAreaElement;
    await userEvent.type(ta, 'nope');
    expect(ta.value).toBe('');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('sets aria-invalid when `error` is true', () => {
    render(<InputTextArea label="x" error />);
    expect(screen.getByRole('textbox').getAttribute('aria-invalid')).toBe('true');
  });

  it('renders errorMessage and links it via aria-describedby when error is true', () => {
    render(<InputTextArea label="x" error errorMessage="Required field" />);
    const ta = screen.getByRole('textbox', { name: 'x' });
    const descId = ta.getAttribute('aria-describedby');
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)?.textContent).toContain('Required field');
  });

  it('does not render errorMessage when error is false', () => {
    render(<InputTextArea label="x" errorMessage="hidden" />);
    expect(screen.queryByText('hidden')).toBeNull();
  });

  it('renders hintText and links it via aria-describedby', () => {
    render(<InputTextArea label="x" hintText="Helper here" />);
    const ta = screen.getByRole('textbox', { name: 'x' });
    const descId = ta.getAttribute('aria-describedby');
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)?.textContent).toBe('Helper here');
  });

  it('renders "(optional)" suffix when optional is true', () => {
    render(<InputTextArea label="x" optional />);
    expect(screen.getByText('(optional)')).toBeInstanceOf(HTMLElement);
  });

  it('does not render "(optional)" by default', () => {
    render(<InputTextArea label="x" />);
    expect(screen.queryByText('(optional)')).toBeNull();
  });

  it('renders current/max character count from textarea value', async () => {
    render(<InputTextArea label="x" characterCount maxLength={10} />);
    expect(screen.getByText('0/10')).toBeInstanceOf(HTMLElement);
    await userEvent.type(screen.getByRole('textbox'), 'abc');
    expect(screen.getByText('3/10')).toBeInstanceOf(HTMLElement);
  });

  it('does not render character count by default', () => {
    render(<InputTextArea label="x" maxLength={10} />);
    expect(screen.queryByText('0/10')).toBeNull();
  });
});

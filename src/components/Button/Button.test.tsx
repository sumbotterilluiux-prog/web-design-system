import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

afterEach(cleanup);

describe('Button', () => {
  it('renders children inside a native <button> with type="button" by default', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: 'Click me' }) as HTMLButtonElement;
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn.type).toBe('button');
  });

  it('forwards className alongside variant + size styles', () => {
    render(
      <Button variant="secondary" size="lg" className="my-extra">
        Action
      </Button>,
    );
    const btn = screen.getByRole('button', { name: 'Action' });
    expect(btn.className).toContain('my-extra');
    expect(btn.className).toContain('h-[48px]');
    expect(btn.className).toContain('px-(--padding-xl)');
    expect(btn.className).toContain('bg-(--color-neutral-solid-50)');
  });

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await userEvent.click(screen.getByRole('button', { name: 'Go' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('blocks clicks when disabled', async () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Go
      </Button>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Go' }));
    expect(onClick).not.toHaveBeenCalled();
  });
});

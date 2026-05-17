import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextButton } from './TextButton';
import { Placeholder } from '../../icons';

afterEach(cleanup);

describe('TextButton', () => {
  it('renders a native <button> with the label as its accessible name', () => {
    render(<TextButton>Learn more</TextButton>);
    const btn = screen.getByRole('button', { name: /learn more/i }) as HTMLButtonElement;
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn.type).toBe('button');
  });

  it('renders without an icon by default', () => {
    render(<TextButton data-testid="btn">Learn more</TextButton>);
    expect(screen.getByTestId('btn').querySelector('svg')).toBeNull();
  });

  it('places the icon before the label when iconPosition is "leading"', () => {
    render(
      <TextButton icon={<Placeholder data-testid="icon" />} iconPosition="leading">
        Next
      </TextButton>,
    );
    const btn = screen.getByRole('button', { name: /next/i });
    const icon = screen.getByTestId('icon');
    const labelNode = Array.from(btn.childNodes).find(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.includes('Next'),
    );
    expect(labelNode).toBeTruthy();
    expect(
      icon.compareDocumentPosition(labelNode!) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it('places the icon after the label when iconPosition is "trailing"', () => {
    render(
      <TextButton icon={<Placeholder data-testid="icon" />} iconPosition="trailing">
        Next
      </TextButton>,
    );
    const btn = screen.getByRole('button', { name: /next/i });
    const icon = screen.getByTestId('icon');
    const labelNode = Array.from(btn.childNodes).find(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.includes('Next'),
    );
    expect(labelNode).toBeTruthy();
    expect(
      labelNode!.compareDocumentPosition(icon) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it('sizes the icon to match the size prop', () => {
    render(
      <TextButton size="sm" icon={<Placeholder data-testid="icon" />}>
        Next
      </TextButton>,
    );
    expect(screen.getByTestId('icon').getAttribute('width')).toBe('16');
    expect(screen.getByTestId('icon').getAttribute('height')).toBe('16');
  });

  it('forwards className alongside size styles', () => {
    render(
      <TextButton size="lg" className="my-extra">
        Action
      </TextButton>,
    );
    const btn = screen.getByRole('button', { name: /action/i });
    expect(btn.className).toContain('my-extra');
    expect(btn.className).toContain('text-(length:--font-size-web-body-md)');
    expect(btn.className).toContain('text-(--color-ocean-500)');
  });

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<TextButton onClick={onClick}>Go</TextButton>);
    await userEvent.click(screen.getByRole('button', { name: /go/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('blocks clicks when disabled', async () => {
    const onClick = vi.fn();
    render(
      <TextButton disabled onClick={onClick}>
        Go
      </TextButton>,
    );
    await userEvent.click(screen.getByRole('button', { name: /go/i }));
    expect(onClick).not.toHaveBeenCalled();
  });
});

import {
  useEffect,
  useId,
  useRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import { Card } from '../Card';
import { IconButton } from '../IconButton';
import { Close } from '../../icons';

export type DialogSize = 'sm' | 'md' | 'lg';

export interface DialogProps {
  /** Controls visibility. Component calls `showModal()` / `close()`
   * on the underlying `<dialog>` element to follow this prop. */
  open?: boolean;
  /** Fires when the dialog closes — Esc key, close button, or
   * imperative `close()` from inside an action. */
  onClose?: () => void;
  /** Single-line headline rendered as h3. Used as the dialog's
   * accessible name via `aria-labelledby`. */
  title: string;
  /** sm = 400px, md = 600px, lg = 800px. */
  size?: DialogSize;
  /** Whether to render the close IconButton in the header. */
  showCloseButton?: boolean;
  /** Action slots, rendered right-to-left in the bottom row.
   * Pass our `<Button>` components (or `<DialogCriticalButton>`
   * for destructive actions) with your own onClick handlers. */
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  criticalAction?: ReactNode;
  className?: string;
  children?: ReactNode;
}

const SIZE_CLASSES: Record<DialogSize, string> = {
  sm: 'w-[400px]',
  md: 'w-[600px]',
  lg: 'w-[800px]',
};

export function Dialog({
  open = false,
  onClose,
  title,
  size = 'md',
  showCloseButton = true,
  primaryAction,
  secondaryAction,
  criticalAction,
  className,
  children,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (open && !dlg.open) dlg.showModal();
    else if (!open && dlg.open) dlg.close();
  }, [open]);

  const hasActions = primaryAction || secondaryAction || criticalAction;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-labelledby={titleId}
      className={cn(
        // Strip native <dialog> chrome so the Card inside owns the visuals.
        'p-0 bg-transparent border-0 m-auto',
        // Dim the modal backdrop. `--color-neutral-alpha-black-48` gives
        // the conventional ~50% scrim without inventing a new token.
        'backdrop:bg-(--color-neutral-alpha-black-48)',
        SIZE_CLASSES[size],
        className,
      )}
    >
      <Card variant="elevated" padding="xl" radius="xl">
        <div className="flex flex-col gap-(--gap-sm)">
          <header className="flex w-full items-start gap-(--gap-md)">
            <h2
              id={titleId}
              className={cn(
                'min-w-0 flex-1',
                'font-(family-name:--font-family-header)',
                'font-(--font-weight-header)',
                'text-(length:--font-size-web-header-h3)',
                'leading-(--font-line-height-header)',
                'text-(--color-font-primary)',
              )}
            >
              {title}
            </h2>
            {showCloseButton && (
              <IconButton
                size="sm"
                variant="tertiary"
                aria-label="Close dialog"
                icon={<Close />}
                onClick={() => ref.current?.close()}
              />
            )}
          </header>

          {children !== undefined && children !== null && (
            <div
              className={cn(
                'w-full pb-(--padding-md)',
                'font-(family-name:--font-family-body)',
                'font-(--font-weight-body-regular)',
                'text-(length:--font-size-web-body-md)',
                'leading-(--font-line-height-body)',
                'text-(--color-font-secondary)',
              )}
            >
              {children}
            </div>
          )}

          {hasActions && (
            <div className="flex w-full items-center justify-end gap-(--gap-sm)">
              {criticalAction}
              {secondaryAction}
              {primaryAction}
            </div>
          )}
        </div>
      </Card>
    </dialog>
  );
}

/**
 * Destructive (red) action button intended for use in Dialog's
 * `criticalAction` slot. Styled inline here rather than as a Button
 * variant since the critical use case is currently dialog-local.
 *
 * Matches the Button family's height, focus ring, and hover/active
 * overlay so it lines up visually with `<Button size="md">` siblings.
 */
export type DialogCriticalButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> & { type?: 'button' | 'submit' | 'reset' };

const CRITICAL_BUTTON_CLASSES = cn(
  'inline-flex items-center justify-center h-[40px] px-(--padding-md)',
  'relative overflow-hidden',
  'rounded-(--stroke-radius-full)',
  'bg-(--color-coral-600) text-(--color-neutral-solid-50)',
  'font-(family-name:--font-family-body) font-(--font-weight-button)',
  'text-(length:--font-size-web-body-md) leading-(--font-line-height-body)',
  'tracking-(--font-letter-spacing-body) whitespace-nowrap',
  'cursor-pointer select-none outline-none',
  'focus-visible:[outline:1px_solid_var(--stroke-color-default)]',
  'focus-visible:outline-offset-2',
  'before:content-[""] before:absolute before:inset-0',
  'before:rounded-[inherit] before:pointer-events-none',
  'before:transition-colors before:duration-150',
  'motion-reduce:before:transition-none',
  'enabled:hover:before:bg-(--color-neutral-alpha-white-8)',
  'enabled:active:before:bg-(--color-neutral-alpha-black-8)',
  'disabled:cursor-not-allowed',
  'disabled:bg-(--color-neutral-alpha-black-8)',
  'disabled:text-(--color-neutral-alpha-black-24)',
);

export function DialogCriticalButton({
  type = 'button',
  className,
  children,
  ...props
}: DialogCriticalButtonProps) {
  return (
    <button
      type={type}
      className={cn(CRITICAL_BUTTON_CLASSES, className)}
      {...props}
    >
      {children}
    </button>
  );
}

import {
  useId,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import { Check as CheckIcon, STROKE_WIDTHS } from '../../icons';

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Text or node rendered to the right of the radio. Becomes the
   * accessible name automatically via the wrapping `<label>`. */
  label?: ReactNode;
  /** Secondary helper text rendered below the row. */
  description?: ReactNode;
  /** Error message rendered below the row in critical-red. Implies
   * `error` and sets `aria-invalid="true"` on the underlying input. */
  errorMessage?: ReactNode;
  /** Visual error state without an accompanying message. */
  error?: boolean;
  /** Renders a filled disc with a white checkmark, signaling the
   * selection has been finalized. Purely presentational — pair with
   * `checked` (or `defaultChecked`) to also mark the input selected. */
  completed?: boolean;
}

export function RadioButton({
  label,
  description,
  errorMessage,
  error = false,
  completed = false,
  disabled,
  checked,
  defaultChecked,
  onChange,
  className,
  id,
  ...inputProps
}: RadioButtonProps) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const currentChecked = isControlled ? checked : internalChecked;
  const isErrored = error || Boolean(errorMessage);
  const interactive = !disabled && !isErrored;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalChecked(e.target.checked);
    onChange?.(e);
  };

  const autoId = useId();
  const reactId = id ?? autoId;
  const descriptionId = description ? `${reactId}-description` : undefined;
  const errorId = errorMessage ? `${reactId}-error` : undefined;
  const describedBy =
    [descriptionId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cn('inline-flex flex-col', className)}>
      <label
        className={cn(
          'group inline-flex items-center gap-(--gap-xs) py-(--padding-2xs)',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
      >
        <input
          {...inputProps}
          id={reactId}
          type="radio"
          className="peer sr-only"
          checked={isControlled ? checked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          disabled={disabled}
          onChange={handleChange}
          aria-invalid={isErrored ? true : undefined}
          aria-describedby={describedBy}
        />
        <span
          aria-hidden="true"
          className={cn(
            'relative shrink-0 size-6 rounded-full',
            'peer-focus-visible:[outline:1.5px_solid_var(--stroke-color-default)]',
            'peer-focus-visible:outline-offset-1',
          )}
        >
          {!completed && (
            <>
              <span
                className={cn(
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                  'size-5 rounded-full border',
                  'transition-colors duration-150 motion-reduce:transition-none',
                  disabled &&
                    'border-(--stroke-color-disabled) bg-(--color-neutral-alpha-black-8)',
                  !disabled &&
                    isErrored &&
                    'border-(--color-coral-500)',
                  interactive &&
                    (currentChecked
                      ? 'border-(--stroke-color-default)'
                      : 'border-(--stroke-color-disabled)'),
                  interactive &&
                    'group-hover:border-(--color-neutral-alpha-black-64)',
                )}
              />
              {currentChecked && (
                <span
                  className={cn(
                    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                    'size-3 rounded-full',
                    disabled && 'bg-(--stroke-color-disabled)',
                    !disabled && isErrored && 'bg-(--color-coral-500)',
                    interactive && 'bg-(--stroke-color-default)',
                    interactive &&
                      'group-hover:bg-(--color-neutral-alpha-black-64)',
                  )}
                />
              )}
            </>
          )}
          {completed && (
            <>
              <span
                className={cn(
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                  'size-5 rounded-full',
                  'bg-(--stroke-color-default)',
                )}
              />
              <CheckIcon
                size={12}
                strokeWidth={STROKE_WIDTHS.light}
                className={cn(
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                  'text-(--color-neutral-solid-50)',
                )}
              />
            </>
          )}
        </span>
        {label !== undefined && label !== null && (
          <span
            className={cn(
              'font-(family-name:--font-family-body)',
              'font-(--font-weight-body-regular)',
              'text-(length:--font-size-web-body-md)',
              'leading-(--font-line-height-body)',
              disabled
                ? 'text-(--color-neutral-alpha-black-24)'
                : 'text-(--color-font-primary)',
            )}
          >
            {label}
          </span>
        )}
      </label>
      {description && (
        <div
          id={descriptionId}
          className={cn(
            'px-(--padding-2xl)',
            'font-(family-name:--font-family-body)',
            'font-(--font-weight-body-regular)',
            'text-(length:--font-size-web-body-xs)',
            'leading-(--font-line-height-body)',
            'text-(--color-font-secondary)',
          )}
        >
          {description}
        </div>
      )}
      {errorMessage && (
        <div
          id={errorId}
          className={cn(
            'px-(--padding-2xl)',
            'font-(family-name:--font-family-body)',
            'font-(--font-weight-body-regular)',
            'text-(length:--font-size-web-body-xs)',
            'leading-(--font-line-height-body)',
            'text-(--color-coral-600)',
          )}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}

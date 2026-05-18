import {
  useId,
  useState,
  type ChangeEvent,
  type ReactNode,
  type TextareaHTMLAttributes,
} from 'react';
import { cn } from '../../lib/cn';
import { AlertOctagon } from '../../icons';

export interface InputTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Visual error state. Sets `aria-invalid` on the textarea. */
  error?: boolean;
  /** Top-row label rendered above the field. Becomes the textarea's
   * accessible name when set. */
  label?: ReactNode;
  /** Renders an "(optional)" suffix next to the label. */
  optional?: boolean;
  /** Helper text rendered below the label. */
  hintText?: ReactNode;
  /** When true, renders `current/max` derived from the value and the
   * `maxLength` attribute. */
  characterCount?: boolean;
  /** Error text rendered below the field with an alert icon. Visible
   * only while `error` is true. */
  errorMessage?: ReactNode;
}

export function InputTextArea({
  error = false,
  label,
  optional = false,
  hintText,
  characterCount = false,
  errorMessage,
  className,
  id,
  disabled,
  value,
  defaultValue,
  onChange,
  maxLength,
  rows,
  ...textareaProps
}: InputTextAreaProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const currentValue = isControlled ? value : internalValue;
  const currentLength = String(currentValue ?? '').length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const autoId = useId();
  const reactId = id ?? autoId;
  const hintId = hintText ? `${reactId}-hint` : undefined;
  const errorId = error && errorMessage ? `${reactId}-error` : undefined;
  const describedBy =
    [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cn('flex w-full flex-col gap-(--gap-2xs)', className)}>
      {label && (
        <div className="flex w-full flex-col items-start">
          <div className="flex w-full items-center gap-(--gap-2xs)">
            <label
              htmlFor={reactId}
              className={cn(
                'font-(family-name:--font-family-subheader)',
                'font-(--font-weight-subheader)',
                'text-(length:--font-size-web-header-subheader-sm)',
                'leading-(--font-line-height-subheader)',
                'text-(--color-font-primary)',
              )}
            >
              {label}
            </label>
            {optional && (
              <span
                className={cn(
                  'font-(family-name:--font-family-body)',
                  'font-(--font-weight-body-bold)',
                  'text-(length:--font-size-web-body-xs)',
                  'leading-(--font-line-height-body)',
                  'text-(--color-font-secondary)',
                )}
              >
                (optional)
              </span>
            )}
          </div>
          {hintText && (
            <p
              id={hintId}
              className={cn(
                'w-full',
                'font-(family-name:--font-family-body)',
                'font-(--font-weight-body-regular)',
                'text-(length:--font-size-web-body-xs)',
                'leading-(--font-line-height-body)',
                'text-(--color-font-secondary)',
              )}
            >
              {hintText}
            </p>
          )}
        </div>
      )}

      <label
        htmlFor={reactId}
        className={cn(
          'group block w-full overflow-hidden',
          'rounded-(--stroke-radius-sm) border p-0.75',
          'transition-colors duration-150 motion-reduce:transition-none',
          disabled
            ? 'cursor-not-allowed bg-(--color-neutral-alpha-black-8) border-(--stroke-color-disabled)'
            : error
              ? cn(
                  'bg-(--color-neutral-solid-50) border-(--color-coral-500)',
                  'focus-within:border-[0.5px]',
                )
              : cn(
                  'bg-(--color-neutral-solid-50)',
                  'border-(--stroke-color-tertiary)',
                  'not-focus-within:hover:border-(--stroke-color-secondary)',
                  'focus-within:border-(--stroke-color-default)',
                  'focus-within:border-[0.5px]',
                ),
        )}
      >
        <textarea
          {...textareaProps}
          id={reactId}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          value={isControlled ? value : undefined}
          defaultValue={!isControlled ? defaultValue : undefined}
          onChange={handleChange}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'block w-full min-h-20 resize-y bg-transparent outline-none',
            'px-(--padding-md) py-(--padding-sm)',
            'font-(family-name:--font-family-body)',
            'font-(--font-weight-body-regular)',
            'leading-(--font-line-height-body)',
            'text-(length:--font-size-web-body-md)',
            disabled
              ? cn(
                  'cursor-not-allowed',
                  'text-(--color-font-tertiary)',
                  'placeholder:text-(--color-neutral-alpha-black-24)',
                )
              : error
                ? 'text-(--color-font-primary) placeholder:text-(--color-font-tertiary)'
                : cn(
                    'text-(--color-font-primary)',
                    'placeholder:text-(--color-font-tertiary)',
                    'group-hover:placeholder:text-(--color-font-secondary)',
                  ),
          )}
        />
      </label>

      {(characterCount || (error && errorMessage)) && (
        <div className="flex w-full items-center gap-(--gap-2xs)">
          {error && errorMessage && (
            <div
              id={errorId}
              className="flex min-w-0 flex-1 items-center gap-(--gap-2xs)"
            >
              <AlertOctagon
                size={16}
                className="shrink-0 text-(--color-coral-500)"
              />
              <p
                className={cn(
                  'truncate',
                  'font-(family-name:--font-family-body)',
                  'font-(--font-weight-body-bold)',
                  'text-(length:--font-size-web-body-sm)',
                  'leading-(--font-line-height-body)',
                  'text-(--color-coral-500)',
                )}
              >
                {errorMessage}
              </p>
            </div>
          )}
          {characterCount && (
            <p
              className={cn(
                'ml-auto text-right',
                'font-(family-name:--font-family-body)',
                'font-(--font-weight-body-regular)',
                'text-(length:--font-size-web-body-xs)',
                'leading-(--font-line-height-body)',
                error
                  ? 'text-(--color-coral-500)'
                  : 'text-(--color-font-tertiary)',
              )}
            >
              {currentLength}
              {maxLength !== undefined ? `/${maxLength}` : ''}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

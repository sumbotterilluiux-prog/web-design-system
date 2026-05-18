import {
  useId,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import { AlertOctagon } from '../../icons';

export type InputTextSize = 'small' | 'medium' | 'large';

export interface InputTextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visual density. */
  size?: InputTextSize;
  /** Visual error state. Sets `aria-invalid` on the input. */
  error?: boolean;
  /** Top-row label rendered above the field. Becomes the input's
   * accessible name when set. */
  label?: ReactNode;
  /** Renders an "(optional)" suffix next to the label. */
  optional?: boolean;
  /** Helper text rendered below the label. */
  hintText?: ReactNode;
  /** When true, renders `current/max` derived from the input value and
   * its `maxLength` attribute. */
  characterCount?: boolean;
  /** Error text rendered below the field with an alert icon. Visible
   * only while `error` is true. */
  errorMessage?: ReactNode;
  /** Icon node rendered at the start of the field. */
  leadingIcon?: ReactNode;
  /** Icon node rendered at the end of the field. */
  trailingIcon?: ReactNode;
}

const FIELD_SIZE: Record<InputTextSize, string> = {
  small: 'py-(--padding-2xs) px-(--padding-sm)',
  medium: 'h-10 py-(--padding-xs) px-(--padding-sm)',
  large: 'h-12 py-(--padding-sm) px-(--padding-md)',
};

const TEXT_SIZE: Record<InputTextSize, string> = {
  small: 'text-(length:--font-size-web-body-sm)',
  medium: 'text-(length:--font-size-web-body-md)',
  large: 'text-(length:--font-size-web-body-md)',
};

const ICON_BOX: Record<InputTextSize, string> = {
  small: 'size-4',
  medium: 'size-5',
  large: 'size-6',
};

export function InputText({
  size = 'medium',
  error = false,
  label,
  optional = false,
  hintText,
  characterCount = false,
  errorMessage,
  leadingIcon,
  trailingIcon,
  className,
  id,
  disabled,
  value,
  defaultValue,
  onChange,
  maxLength,
  ...inputProps
}: InputTextProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const currentValue = isControlled ? value : internalValue;
  const currentLength = String(currentValue ?? '').length;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          'group flex w-full items-center gap-(--gap-xs)',
          'rounded-(--stroke-radius-sm) border',
          'transition-colors duration-150 motion-reduce:transition-none',
          FIELD_SIZE[size],
          disabled
            ? 'cursor-not-allowed bg-(--color-neutral-solid-200) border-(--stroke-color-disabled)'
            : error
              ? cn(
                  'bg-(--color-neutral-solid-50) border-(--color-coral-500)',
                  'focus-within:[outline:1.5px_solid_var(--color-coral-500)]',
                )
              : cn(
                  'bg-(--color-neutral-solid-50)',
                  'border-(--stroke-color-tertiary)',
                  'hover:border-(--stroke-color-secondary)',
                  'focus-within:border-(--stroke-color-default)',
                  'focus-within:[outline:1.5px_solid_var(--stroke-color-default)]',
                ),
        )}
      >
        {leadingIcon && (
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex shrink-0 items-center justify-center',
              ICON_BOX[size],
              disabled
                ? 'text-(--color-neutral-alpha-black-24)'
                : 'text-(--color-font-primary)',
            )}
          >
            {leadingIcon}
          </span>
        )}
        <input
          {...inputProps}
          id={reactId}
          type={inputProps.type ?? 'text'}
          disabled={disabled}
          maxLength={maxLength}
          value={isControlled ? value : undefined}
          defaultValue={!isControlled ? defaultValue : undefined}
          onChange={handleChange}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'min-w-0 flex-1 bg-transparent outline-none',
            'font-(family-name:--font-family-body)',
            'font-(--font-weight-body-regular)',
            'leading-(--font-line-height-body)',
            TEXT_SIZE[size],
            disabled
              ? cn(
                  'cursor-not-allowed',
                  'text-(--color-neutral-alpha-black-24)',
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
        {trailingIcon && (
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex shrink-0 items-center justify-center',
              ICON_BOX[size],
              disabled
                ? 'text-(--color-neutral-alpha-black-24)'
                : 'text-(--color-font-primary)',
            )}
          >
            {trailingIcon}
          </span>
        )}
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

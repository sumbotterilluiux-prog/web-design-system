import {
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import {
  AlertOctagon,
  Check as CheckIcon,
  Minus as MinusIcon,
  STROKE_WIDTHS,
} from '../../icons';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Text or node rendered to the right of the checkbox. Becomes the
   * accessible name automatically via the wrapping `<label>`. */
  label?: ReactNode;
  /** Secondary helper text rendered below the row. */
  description?: ReactNode;
  /** Error message rendered below the row in critical-red. Sets
   * `aria-invalid="true"` on the underlying input. */
  errorMessage?: ReactNode;
  /** Visual "partially checked" state. Synced to the native
   * `HTMLInputElement.indeterminate` DOM property (it has no HTML
   * attribute equivalent). Mutually-exclusive visual with `checked`. */
  indeterminate?: boolean;
}

export function Checkbox({
  label,
  description,
  errorMessage,
  indeterminate = false,
  disabled,
  checked,
  defaultChecked,
  onChange,
  className,
  id,
  ...inputProps
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Track checked locally for the icon's conditional render in uncontrolled
  // mode. In controlled mode `checked` is the source of truth and this state
  // is ignored.
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const currentChecked = isControlled ? checked : internalChecked;

  // `indeterminate` is a DOM property, not an HTML attribute — it can only
  // be set via the underlying element.
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

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
      <label className="inline-flex items-center cursor-pointer">
        <input
          {...inputProps}
          ref={inputRef}
          id={reactId}
          type="checkbox"
          className="peer sr-only"
          checked={isControlled ? checked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          disabled={disabled}
          onChange={handleChange}
          aria-invalid={errorMessage ? true : undefined}
          aria-describedby={describedBy}
        />
        <span
          className={cn(
            // 8px margin reproduces Figma's container padding around the
            // visible 16px box, so the click target effectively spans 32px.
            'm-(--padding-xs)',
            'size-[16px] rounded-(--stroke-radius-xs)',
            'border border-(--stroke-color-tertiary)',
            'flex items-center justify-center',
            // currentColor drives the Check / Minus icon stroke.
            'text-(--color-neutral-solid-50)',
            'transition-colors duration-150 motion-reduce:transition-none',
            // Hover (unselected + enabled only). The peer-* stack reads as
            // "peer is enabled AND not checked AND not indeterminate".
            'peer-enabled:peer-not-checked:peer-not-indeterminate:hover:border-(--stroke-color-secondary)',
            // Selected — selected/indeterminate share the same fill colors
            // and these tokens are intentionally themable per project.
            'peer-checked:bg-(--color-neutral-solid-950) peer-checked:border-(--color-neutral-solid-950)',
            'peer-indeterminate:bg-(--color-neutral-solid-950) peer-indeterminate:border-(--color-neutral-solid-950)',
            // Disabled
            'peer-disabled:bg-(--color-neutral-alpha-black-8)',
            'peer-disabled:border-(--stroke-color-disabled)',
            'peer-disabled:cursor-not-allowed',
            // Keyboard focus
            'peer-focus-visible:[outline:1px_solid_var(--stroke-color-default)]',
            'peer-focus-visible:outline-offset-2',
          )}
        >
          {indeterminate ? (
            <MinusIcon size={12} strokeWidth={STROKE_WIDTHS.light} />
          ) : currentChecked ? (
            <CheckIcon size={12} strokeWidth={STROKE_WIDTHS.light} />
          ) : null}
        </span>
        {label !== undefined && label !== null && (
          <span
            className={cn(
              'font-(family-name:--font-family-body)',
              'font-(--font-weight-body-regular)',
              'text-(length:--font-size-web-body-md)',
              'leading-(--font-line-height-body)',
              'text-(--color-font-primary)',
              'peer-disabled:text-(--color-neutral-alpha-black-24)',
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
          className="flex items-center gap-(--gap-2xs) px-(--padding-2xl)"
        >
          <AlertOctagon
            size={16}
            className="shrink-0 text-(--color-coral-500)"
          />
          <p
            className={cn(
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
    </div>
  );
}

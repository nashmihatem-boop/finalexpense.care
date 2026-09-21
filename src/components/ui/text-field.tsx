import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextFieldProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, error, id, className, ...rest }: TextFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full">
      <label htmlFor={fieldId} className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
      </label>
      <input
        id={fieldId}
        className={cn(
          "h-14 w-full rounded-xl border-2 border-mist bg-canvas-raised px-4 text-lg text-charcoal",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus:border-harbor",
          "placeholder:text-charcoal/40",
          error && "border-clay",
          className
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${fieldId}-error`} className="mt-1.5 text-sm font-medium text-clay">
          {error}
        </p>
      )}
    </div>
  );
}

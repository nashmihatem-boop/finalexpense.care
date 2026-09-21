import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SelectFieldProps = {
  label: string;
  children: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({ label, id, className, children, ...rest }: SelectFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full">
      <label htmlFor={fieldId} className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
      </label>
      <select
        id={fieldId}
        className={cn(
          "h-14 w-full rounded-xl border-2 border-mist bg-canvas-raised px-4 text-lg text-charcoal",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus:border-harbor",
          className
        )}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}

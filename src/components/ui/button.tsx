import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-brass text-harbor-deep hover:bg-brass-dark active:bg-brass-dark",
  harbor: "bg-harbor text-canvas hover:bg-harbor-deep active:bg-harbor-deep",
  outline: "border-2 border-harbor text-harbor hover:bg-harbor hover:text-canvas bg-transparent",
  // For use on a dark (harbor) background — kept as its own variant rather than an
  // override, since two conflicting Tailwind color utilities on one element don't
  // reliably resolve by source order and silently produced invisible text before.
  "outline-inverse": "border-2 border-canvas/40 text-canvas hover:bg-canvas hover:text-harbor bg-transparent",
  ghost: "text-harbor hover:bg-mist/60 bg-transparent",
};

const sizes = {
  lg: "h-14 px-8 text-lg",
  md: "h-12 px-6 text-base",
  sm: "h-10 px-4 text-sm",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type LinkButtonProps = {
  as?: "link";
  href: string;
  external?: boolean;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type NativeButtonProps = {
  as: "button";
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "button") {
    const { as: _as, variant: _variant, size: _size, className: _className, children: _children, ...rest } = props;
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    );
  }

  const { href, external } = props;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

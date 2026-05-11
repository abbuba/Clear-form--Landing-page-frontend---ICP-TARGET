import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-[color:var(--color-brand-500)]/60 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-brand-500)] text-white shadow-[0_8px_24px_-12px_var(--color-brand-glow)] hover:bg-[color:var(--color-brand-600)] hover:shadow-[0_12px_32px_-12px_var(--color-brand-glow)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100",
  dark:
    "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  type?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(variant: Variant, size: Size, className?: string) {
  return [baseStyles, variantStyles[variant], sizeStyles[size], className]
    .filter(Boolean)
    .join(" ");
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = "primary", size = "md", className, children } = props;
    const cls = classes(variant, size, className);

    if ("href" in props && props.href) {
      const { href, external, onClick } = props;
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cls}
            onClick={onClick}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cls}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    }

    const { variant: _v, size: _s, className: _c, children: _ch, ...buttonRest } = props as ButtonAsButton;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...buttonRest}>
        {children}
      </button>
    );
  }
);

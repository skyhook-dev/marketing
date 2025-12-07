import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent/90 focus:ring-accent/50",
  secondary: "bg-surface text-ink-primary border border-border hover:border-accent/30 focus:ring-accent/30",
  ghost: "text-ink-secondary hover:text-ink-primary hover:bg-surface focus:ring-accent/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium rounded-lg shadow-hard hover-lift transition-all",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {children}
    </button>
  );
}

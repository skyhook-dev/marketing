import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type IconBoxSize = "sm" | "md" | "lg" | "xl";
type IconBoxVariant = "default" | "accent" | "surface";

interface IconBoxProps {
  icon?: LucideIcon;
  children?: React.ReactNode;
  size?: IconBoxSize;
  variant?: IconBoxVariant;
  className?: string;
  hoverable?: boolean;
}

const sizeStyles: Record<IconBoxSize, { box: string; icon: string }> = {
  sm: { box: "w-8 h-8", icon: "w-4 h-4" },
  md: { box: "w-10 h-10", icon: "w-5 h-5" },
  lg: { box: "w-12 h-12", icon: "w-6 h-6" },
  xl: { box: "w-16 h-16", icon: "w-8 h-8" },
};

const variantStyles: Record<IconBoxVariant, string> = {
  default: "bg-surface border border-border",
  accent: "bg-accent/10 border-0",
  surface: "bg-surface border border-border",
};

export function IconBox({
  icon: Icon,
  children,
  size = "md",
  variant = "default",
  className = "",
  hoverable = false,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "rounded-lg shadow-hard flex items-center justify-center flex-shrink-0",
        sizeStyles[size].box,
        variantStyles[variant],
        hoverable && "hover-lift",
        className
      )}
    >
      {Icon ? (
        <Icon
          className={cn(
            sizeStyles[size].icon,
            variant === "accent" ? "text-accent" : "text-ink-primary"
          )}
          strokeWidth={1.5}
        />
      ) : (
        children
      )}
    </div>
  );
}

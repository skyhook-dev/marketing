"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ToggleOption {
  value: string;
  label: string;
  badge?: string;
}

interface ToggleProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: { container: "p-1", button: "px-4 py-2 text-sm" },
  md: { container: "p-1.5", button: "px-6 py-2.5 text-sm" },
  lg: { container: "p-1.5", button: "px-10 py-4 text-lg" },
};

export function Toggle({
  options,
  value,
  onChange,
  size = "md",
  className = "",
}: ToggleProps) {
  const activeIndex = options.findIndex((opt) => opt.value === value);
  const optionCount = options.length;

  return (
    <div
      className={cn(
        "relative inline-flex bg-surface border border-border rounded-xl shadow-sm hover-lift",
        sizeStyles[size].container,
        className
      )}
    >
      {/* Animated background indicator */}
      <motion.div
        className="absolute inset-1.5 bg-accent rounded-lg shadow-md"
        initial={false}
        animate={{
          left: `calc(${(activeIndex / optionCount) * 100}% + 6px)`,
          width: `calc(${100 / optionCount}% - 6px)`,
        }}
        transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.25 }}
        style={{
          width: `calc(${100 / optionCount}% - 6px)`,
        }}
      />

      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "relative z-10 font-semibold rounded-lg transition-colors duration-200 cursor-pointer",
            sizeStyles[size].button,
            value === option.value
              ? "text-white"
              : "text-ink-secondary hover:text-ink-primary"
          )}
        >
          {option.label}
          {option.badge && (
            <span
              className={cn(
                "ml-1 text-xs",
                value === option.value ? "text-white/80" : "text-accent"
              )}
            >
              {option.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

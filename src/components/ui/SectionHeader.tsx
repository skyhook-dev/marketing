import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <FadeIn>
      <div
        className={cn(
          "mb-16",
          centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
          className
        )}
      >
        {badge && (
          <Badge variant="accent" className="mb-4">
            {badge}
          </Badge>
        )}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-ink-secondary leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

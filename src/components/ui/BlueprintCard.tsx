import { cn } from "@/lib/utils";

interface BlueprintCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  monoTitle?: boolean;
}

export function BlueprintCard({ 
  children, 
  className, 
  title,
  monoTitle = true,
  ...props 
}: BlueprintCardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-ink-primary shadow-hard transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] h-full flex flex-col",
        className
      )}
      {...props}
    >
      {title && (
        <div className="border-b border-ink-primary p-3 bg-background/50">
          <h3 className={cn(
            "text-sm font-medium",
            monoTitle ? "font-mono uppercase tracking-wide" : "font-sans"
          )}>
            {title}
          </h3>
        </div>
      )}
      <div className="p-4 flex-1">
        {children}
      </div>
    </div>
  );
}

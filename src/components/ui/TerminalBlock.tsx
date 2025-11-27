import { cn } from "@/lib/utils";

interface TerminalBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  filename?: string;
  code: string;
  language?: string;
}

export function TerminalBlock({ 
  className, 
  filename = "terminal", 
  code,
  language = "bash",
  ...props 
}: TerminalBlockProps) {
  return (
    <div 
      className={cn(
        "bg-ink-primary text-white rounded-lg shadow-hard overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/20 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <span className="font-mono text-xs text-white/60">{filename}</span>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

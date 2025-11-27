"use client";

import { cn } from "@/lib/utils";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  activeId: string | null;
  onChange: (id: string | null) => void;
  className?: string;
}

export function Accordion({
  items,
  activeId,
  onChange,
  className = "",
}: AccordionProps) {
  return (
    <div className={cn("rounded-2xl border border-border bg-surface overflow-hidden", className)}>
      {items.map((item, index) => {
        const isOpen = activeId === item.id;
        const isLast = index === items.length - 1;
        return (
          <div key={item.id}>
            <button
              onClick={() => onChange(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className={cn(
                "w-full px-6 py-5 flex items-center gap-4 text-left cursor-pointer",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset",
                "hover:bg-white/5 transition-colors"
              )}
            >
              <span className="flex-shrink-0 text-accent">
                {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
              <h3 className="font-semibold text-ink-primary">
                {item.title}
              </h3>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-button-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pl-[3.25rem]">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isLast && <div className="border-b border-border mx-6" />}
          </div>
        );
      })}
    </div>
  );
}

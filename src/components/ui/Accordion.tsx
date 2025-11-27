"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
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
    <div className={cn("grid grid-cols-1 gap-4", className)}>
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <motion.div
            key={item.id}
            initial={false}
            animate={{
              backgroundColor: isOpen
                ? "rgba(45, 122, 255, 0.02)"
                : "rgba(255, 255, 255, 1)",
            }}
            className={cn(
              "rounded-xl border overflow-hidden transition-all duration-300",
              isOpen
                ? "border-accent/30 shadow-lg"
                : "border-border hover:border-accent/20 hover:shadow-md"
            )}
          >
            <button
              onClick={() => onChange(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className={cn(
                "w-full px-6 py-5 flex items-center justify-between text-left group",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              )}
            >
              <h3
                className={cn(
                  "font-semibold transition-colors",
                  isOpen ? "text-accent" : "text-ink-primary"
                )}
              >
                {item.title}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                  isOpen
                    ? "bg-accent text-white"
                    : "bg-surface text-ink-secondary group-hover:bg-accent/10 group-hover:text-accent"
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
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
                  <div className="px-6 pb-6">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

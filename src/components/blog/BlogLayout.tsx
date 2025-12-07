"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TOCItem = {
  id: string;
  text: string;
  level: number;
};

function extractHeadings(content: string): TOCItem[] {
  // Simple regex to find headings in the rendered HTML (or raw markdown if passed)
  // Since we are now rendering MDX on the server, we might need a different strategy.
  // HOWEVER, for client-side TOC spy, we usually query the DOM.
  // But to GENERATE the list, we might want to pass the list from the server?
  // OR we can just queryQuerySelectorAll('h2, h3') in a useEffect.
  return [];
}

export function BlogLayout({ children, headings }: { children: React.ReactNode; headings: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle bottom of page case - if we're at the bottom, select the last heading
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        if (headings.length > 0) {
          setActiveId(headings[headings.length - 1].id);
          return;
        }
      }

      // 2. Standard tracking: Find the last heading that is above the "reading line".
      // The user requested tracking the center of the viewport.
      const offset = window.innerHeight / 2;
      let currentActiveId = "";

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the heading is above the middle of the screen, it's the active candidate.
          if (rect.top < offset) {
            currentActiveId = heading.id;
          } else {
            break;
          }
        }
      }

      // Only update if we found a candidate (or clear it if we are at the very top)
      if (currentActiveId) {
        setActiveId(currentActiveId);
      } else if (window.scrollY < 100) {
        // Optional: clear selection if at very top of page
        setActiveId("");
      }
    };

    // Throttle slightly or just use rAF? plain listener is usually fine for modern browsers if logic is cheap.
    // Let's use requestAnimationFrame for safety.
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main content */}
      <div className="min-w-0">
        {children}
      </div>

      {/* TOC Sidebar - Absolute on XL screens */}
      {headings.length > 0 && (
        <aside className="hidden xl:block absolute left-full top-0 h-full ml-12 w-64">
          <div className="sticky top-24 pb-10">
            <div className="border-b border-border pb-4 mb-4">
              <h3 className="text-sm font-semibold text-ink-primary">
                On this page
              </h3>
            </div>
            <nav className="space-y-1 relative">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    relative block w-full text-left text-sm py-1.5 transition-all duration-300 cursor-pointer
                    ${heading.level === 3 ? "pl-4" : "pl-0"}
                    ${
                      activeId === heading.id
                        ? "text-ink-primary font-semibold pl-3"
                        : "text-ink-secondary hover:text-ink-primary hover:font-medium"
                    }
                  `}
                >
                  {/* Animated Border Marker */}
                  {activeId === heading.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  {heading.text}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}

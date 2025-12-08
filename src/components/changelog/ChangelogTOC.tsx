"use client";

import { useEffect, useState, useRef } from "react";

type TOCItem = {
  label: string;
  id: string;
};

export function ChangelogTOC({ items }: { items: TOCItem[] }) {
  const [tocTop, setTocTop] = useState(96);
  const [activeId, setActiveId] = useState(items[0]?.id || "");
  const containerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Handle sticky positioning manually (works with Lenis)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !navRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const navHeight = navRef.current.offsetHeight;
      const topOffset = 96; // More space below nav

      if (containerRect.top <= topOffset) {
        const maxTop = containerRect.bottom - navHeight;
        if (maxTop < topOffset) {
          setTocTop(maxTop);
        } else {
          setTocTop(topOffset);
        }
      } else {
        setTocTop(containerRect.top);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking (debounced for Lenis)
  useEffect(() => {
    const detectActiveSection = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        if (items.length > 0) {
          return items[items.length - 1].id;
        }
      }

      const offset = window.innerHeight * 0.4;
      let currentActiveId = "";

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < offset) {
            currentActiveId = item.id;
          } else {
            break;
          }
        }
      }

      return currentActiveId || (items.length > 0 ? items[0].id : "");
    };

    const onScroll = () => {
      const newActiveId = detectActiveSection();
      if (newActiveId) setActiveId(newActiveId);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight * 0.35;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <aside ref={containerRef} className="hidden md:block w-48 flex-shrink-0 relative">
      <nav
        ref={navRef}
        className="fixed w-48"
        style={{ top: `${tocTop}px` }}
      >
        <h2 className="text-xs uppercase tracking-[0.2em] text-ink-secondary font-semibold mb-4">
          Jump to
        </h2>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative text-sm block py-1.5 text-left cursor-pointer transition-all duration-200
                  ${activeId === item.id
                    ? "text-ink-primary font-medium pl-3"
                    : "text-ink-secondary hover:text-ink-primary pl-0"
                  }
                `}
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-accent transition-opacity duration-150 ${
                    activeId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

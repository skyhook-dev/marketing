"use client";

import { useEffect, useState, useRef } from "react";

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
  const [tocTop, setTocTop] = useState(96); // 24 * 4 = 96px (top-24)
  const contentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLElement>(null);

  // Handle TOC sticky positioning manually (works with Lenis)
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !tocRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();
      const tocHeight = tocRef.current.offsetHeight;
      const topOffset = 96; // Distance from top when sticky

      // Content top is above the sticky point - TOC should be sticky
      if (contentRect.top <= topOffset) {
        // Check if we'd go past the bottom of the content
        const maxTop = contentRect.bottom - tocHeight;
        if (maxTop < topOffset) {
          // Pin to bottom of content area
          setTocTop(maxTop);
        } else {
          // Stick to top
          setTocTop(topOffset);
        }
      } else {
        // Content hasn't scrolled up yet, TOC follows content
        setTocTop(contentRect.top);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const detectActiveHeading = () => {
      // 1. Handle bottom of page case
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        if (headings.length > 0) {
          return headings[headings.length - 1].id;
        }
      }

      // 2. Find the last heading above the detection line (~40% from top)
      const offset = window.innerHeight * 0.4;
      let currentActiveId = "";

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < offset) {
            currentActiveId = heading.id;
          } else {
            break;
          }
        }
      }

      // Default to first heading if none found
      return currentActiveId || (headings.length > 0 ? headings[0].id : "");
    };

    // Debounce to only update after scroll settles (works well with Lenis)
    let scrollTimeout: NodeJS.Timeout;
    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const newActiveId = detectActiveHeading();
        if (newActiveId) {
          setActiveId(newActiveId);
        }
      }, 50); // Short debounce - updates 50ms after scroll stops
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial check
    const initialId = detectActiveHeading();
    if (initialId) setActiveId(initialId);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll to put heading a bit above middle (~35% from top)
      const offset = window.innerHeight * 0.35;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Immediately set active to avoid flicker
      setActiveId(id);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={contentRef}>
      {/* Main content */}
      <div className="min-w-0">
        {children}
      </div>

      {/* TOC Sidebar - Fixed positioning that follows scroll */}
      {headings.length > 0 && (
        <aside
          ref={tocRef}
          className="hidden xl:block fixed w-64 left-[calc(50%+24rem+3rem)]"
          style={{ top: `${tocTop}px` }}
        >
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
                {/* Border Marker - simple opacity transition instead of layout animation */}
                <span
                  className={`absolute left-[-2px] top-0 bottom-0 w-[2px] bg-accent transition-opacity duration-150 ${
                    activeId === heading.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                {heading.text}
              </button>
            ))}
          </nav>
        </aside>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import type { BlogPost } from "@/lib/blog";

type TOCItem = {
  id: string;
  text: string;
  level: number;
};

function extractHeadings(content: string): TOCItem[] {
  const headingRegex = /^(#{1,3})\s+\**(.+?)\**$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/\*\*/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    // Skip the main title (first h1)
    if (level === 1 && headings.length === 0) continue;

    headings.push({ id, text, level });
  }

  return headings;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const [activeId, setActiveId] = useState<string>("");
  const headings = extractHeadings(post.content);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
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
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* Main content */}
          <div className="max-w-3xl">
            <div className="blog-content-prose">
              <ReactMarkdown
                remarkPlugins={[remarkBreaks, remarkGfm]}
                components={{
                  h1: ({ children, ...props }) => {
                    const text = String(children);
                    const id = slugify(text);
                    return (
                      <h2
                        id={id}
                        className="text-3xl font-semibold text-ink-primary mt-12 mb-6 scroll-mt-24"
                        {...props}
                      >
                        {children}
                      </h2>
                    );
                  },
                  h2: ({ children, ...props }) => {
                    const text = String(children);
                    const id = slugify(text);
                    return (
                      <h2
                        id={id}
                        className="text-2xl font-semibold text-ink-primary mt-12 mb-6 scroll-mt-24"
                        {...props}
                      >
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children, ...props }) => {
                    const text = String(children);
                    const id = slugify(text);
                    return (
                      <h3
                        id={id}
                        className="text-xl font-semibold text-ink-primary mt-8 mb-4 scroll-mt-24"
                        {...props}
                      >
                        {children}
                      </h3>
                    );
                  },
                  h4: (props) => (
                    <h4
                      className="text-lg font-semibold text-ink-primary mt-6 mb-3"
                      {...props}
                    />
                  ),
                  p: (props) => (
                    <p
                      className="mb-6 text-lg leading-[1.8] text-ink-secondary"
                      {...props}
                    />
                  ),
                  ul: (props) => (
                    <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
                  ),
                  ol: (props) => (
                    <ol
                      className="list-decimal pl-6 mb-6 space-y-2"
                      {...props}
                    />
                  ),
                  li: (props) => (
                    <li
                      className="leading-[1.8] text-ink-secondary"
                      {...props}
                    />
                  ),
                  a: (props) => (
                    <a
                      className="text-accent hover:underline underline-offset-4"
                      target={
                        props.href?.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        props.href?.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      {...props}
                    />
                  ),
                  strong: (props) => (
                    <strong
                      className="font-semibold text-ink-primary"
                      {...props}
                    />
                  ),
                  em: (props) => <em className="italic" {...props} />,
                  code: ({ className, children, ...props }) => {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code
                          className="bg-surface px-1.5 py-0.5 rounded text-sm font-mono text-ink-primary"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className={`${className} text-sm`} {...props}>
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children, ...props }) => (
                    <pre
                      className="!bg-[#1e1e1e] !text-gray-100 border border-border rounded p-6 overflow-x-auto my-6 text-sm font-mono [&_code]:bg-transparent [&_code]:text-inherit [&_code]:p-0"
                      {...props}
                    >
                      {children}
                    </pre>
                  ),
                  blockquote: (props) => (
                    <blockquote
                      className="border-l-4 border-accent pl-6 my-8 italic text-ink-primary text-xl"
                      {...props}
                    />
                  ),
                  hr: () => <hr className="my-12 border-t border-border" />,
                  table: (props) => (
                    <div className="overflow-x-auto my-8">
                      <table
                        className="w-full border-collapse border border-border text-sm"
                        {...props}
                      />
                    </div>
                  ),
                  thead: (props) => (
                    <thead className="bg-surface" {...props} />
                  ),
                  tbody: (props) => <tbody {...props} />,
                  tr: (props) => (
                    <tr className="border-b border-border" {...props} />
                  ),
                  th: (props) => (
                    <th
                      className="px-4 py-3 text-left font-semibold text-ink-primary border border-border"
                      {...props}
                    />
                  ),
                  td: (props) => (
                    <td
                      className="px-4 py-3 text-ink-secondary border border-border"
                      {...props}
                    />
                  ),
                  img: (props) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="max-w-full h-auto my-6 border border-border shadow-hard"
                      alt={props.alt || ""}
                      {...props}
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* TOC Sidebar */}
          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="border-b border-border pb-4 mb-4">
                  <h3 className="text-sm font-semibold text-ink-primary">
                    On this page
                  </h3>
                </div>
                <nav className="space-y-1">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`
                        block w-full text-left text-sm py-1.5 transition-colors
                        ${heading.level === 3 ? "pl-4" : "pl-0"}
                        ${
                          activeId === heading.id
                            ? "text-ink-primary font-semibold border-l-2 border-accent -ml-[2px] pl-3"
                            : "text-ink-secondary hover:text-ink-primary"
                        }
                      `}
                    >
                      {heading.text}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

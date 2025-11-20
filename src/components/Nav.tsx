"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const navMap = {
  platform: {
    label: "Platform",
    items: [
      { name: "AI Ready", href: "/platform/ai-ready" },
      { name: "Build", href: "/platform/build" },
      { name: "Deploy", href: "/platform/deploy" },
      { name: "Run", href: "/platform/run" },
      { name: "Grow", href: "/platform/grow" },
      { name: "Observe", href: "/platform/observe" },
    ]
  },
  solutions: {
    label: "Solutions",
    items: [
      { name: "Preview Environments", href: "/solutions/preview-environments" },
      { name: "Rollout Strategies", href: "/solutions/rollout-strategies" },
      { name: "Service Catalog", href: "/solutions/service-catalog" },
      { name: "Auto-Scaling", href: "/solutions/auto-scaling" },
    ]
  },
  resources: {
    label: "Resources",
    items: [
      { name: "Blog", href: "/blog" },
      { name: "Status", href: "https://status.skyhook.io", external: true },
      { name: "Security", href: "https://trust.skyhook.io", external: true },
      { name: "Changelog", href: "/changelog" },
    ]
  }
};

export function Nav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md" onMouseLeave={() => setActiveDropdown(null)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent" />
              <span className="font-bold text-xl tracking-tight">Skyhook</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {Object.entries(navMap).map(([key, section]) => (
                <div 
                  key={key} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(key)}
                >
                  <button 
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors py-5 outline-none",
                      activeDropdown === key ? "text-ink-primary" : "text-ink-secondary hover:text-ink-primary"
                    )}
                  >
                    {section.label}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === key ? "rotate-180" : ""
                    )} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === key && (
                    <div className="absolute top-full left-0 w-56 bg-surface border border-ink-primary shadow-hard p-2 animate-in fade-in slide-in-from-top-1 duration-100">
                      <div className="flex flex-col">
                        {section.items.map((item) => (
                          'external' in item && item.external ? (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 text-sm text-ink-secondary hover:text-ink-primary hover:bg-background/50 transition-colors text-left"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="px-4 py-2 text-sm text-ink-secondary hover:text-ink-primary hover:bg-background/50 transition-colors text-left"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <a href="https://docs.skyhook.io" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                Docs
              </a>
              <Link href="/pricing" className="text-sm font-medium text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-sm font-medium text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4 z-50">
            <Link 
              href="/login"
              className="text-sm font-medium text-ink-primary hover:underline decoration-1 underline-offset-4"
            >
              Login
            </Link>
            <Link
              href="/demo"
              className="text-sm font-medium bg-accent text-white px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all border border-black"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

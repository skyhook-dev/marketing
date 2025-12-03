"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Sparkles,
  Hammer,
  Rocket,
  Play,
  TrendingUp,
  Activity,
  GitBranch,
  Shuffle,
  LayoutGrid,
  Scale,
  FileText,
  Radio,
  Shield,
  Zap,
  LucideIcon,
} from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

type NavSection = {
  label: string;
  items: NavItem[];
};

const navMap: Record<string, NavSection> = {
  platform: {
    label: "Platform",
    items: [
      { name: "AI Ready", href: "/platform/ai-ready", icon: Sparkles },
      { name: "Build", href: "/platform/build", icon: Hammer },
      { name: "Deploy", href: "/platform/deploy", icon: Rocket },
      { name: "Run", href: "/platform/run", icon: Play },
      { name: "Grow", href: "/platform/grow", icon: TrendingUp },
      { name: "Observe", href: "/platform/observe", icon: Activity },
    ]
  },
  solutions: {
    label: "Solutions",
    items: [
      { name: "Preview Environments", href: "/solutions/preview-environments", icon: GitBranch },
      { name: "Rollout Strategies", href: "/solutions/rollout-strategies", icon: Shuffle },
      { name: "Service Catalog", href: "/solutions/service-catalog", icon: LayoutGrid },
      { name: "Auto-Scaling", href: "/solutions/auto-scaling", icon: Scale },
    ]
  },
  resources: {
    label: "Resources",
    items: [
      { name: "Blog", href: "/blog", icon: FileText },
      { name: "Status", href: "https://status.skyhook.io", icon: Radio, external: true },
      { name: "Security", href: "https://trust.skyhook.io", icon: Shield, external: true },
      { name: "Changelog", href: "/changelog", icon: Zap },
    ]
  }
};

export function Nav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-[width,height,top,border-radius]",
        scrolled
          ? "top-4 w-[calc(100%-2rem)] max-w-6xl rounded-2xl glass-strong border border-border shadow-lg backdrop-blur-xl h-16"
          : "top-0 w-full glass-subtle border-b border-transparent h-20"
      )}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="flex items-center group">
              <Logo className={cn(
                "w-auto text-ink-primary transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                scrolled ? "h-6" : "h-7"
              )} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {Object.entries(navMap).map(([key, section]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                >
                  <button
                    className={cn(
                      "relative flex items-center gap-1 text-sm font-medium transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] py-2 outline-none group",
                      activeDropdown === key ? "text-ink-primary" : "text-ink-secondary hover:text-ink-primary"
                    )}
                  >
                    {section.label}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                      activeDropdown === key ? "rotate-180 text-accent" : "opacity-60"
                    )} />
                    <span className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                      activeDropdown === key ? "w-full" : "w-0"
                    )} />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 w-72 bg-surface border border-border rounded-xl shadow-lg p-3 transition-all duration-200 mt-2",
                    activeDropdown === key
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  )}>
                    <div className="flex flex-col gap-1">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const itemContent = (
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                              <Icon className="w-5 h-5 text-accent transition-colors" />
                            </div>
                            <span className="font-medium">{item.name}</span>
                          </div>
                        );

                        return item.external ? (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-3 py-3 text-sm text-ink-secondary hover:text-ink-primary hover:bg-background/50 rounded-lg transition-all duration-150 text-left"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {itemContent}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group px-3 py-3 text-sm text-ink-secondary hover:text-ink-primary hover:bg-background/50 rounded-lg transition-all duration-150 text-left"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {itemContent}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

              <a href="https://docs.skyhook.io" target="_blank" rel="noopener noreferrer" className="relative text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors group">
                Docs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
              <Link href="/pricing" className="relative text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/about" className="relative text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4 z-50">
            <Button
              href="https://app.skyhook.io"
              variant="ghost"
              size="sm"
              external
            >
              Login
            </Button>
            <Button href="/demo" size="sm">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

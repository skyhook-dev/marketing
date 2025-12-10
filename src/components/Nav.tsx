"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = {
  name: string;
  href: string;
  icon: string; // Changed to string for SVG path
  external?: boolean;
};

type NavSection = {
  label: string;
  items: NavItem[];
};

const navMap: Record<string, NavSection> = {
  // platform: {
  //   label: "Platform",
  //   items: [
  //     { name: "AI Ready", href: "/platform/ai-ready", icon: "/images/navbar icons/ai-ready-nav.svg" },
  //     { name: "Build", href: "/platform/build", icon: "/images/navbar icons/build-nav.svg" },
  //     { name: "Deploy", href: "/platform/deploy", icon: "/images/navbar icons/deploy-nav.svg" },
  //     { name: "Run", href: "/platform/run", icon: "/images/navbar icons/run-nav.svg" },
  //     { name: "Grow", href: "/platform/grow", icon: "/images/navbar icons/grow-nav.svg" },
  //     { name: "Observe", href: "/platform/observe", icon: "/images/navbar icons/observe-nav.svg" },
  //   ]
  // },
  // solutions: {
  //   label: "Solutions",
  //   items: [
  //     { name: "Preview Environments", href: "/solutions/preview-environments", icon: "/images/navbar icons/preview-nav.svg" },
  //     { name: "Rollout Strategies", href: "/solutions/rollout-strategies", icon: "/images/navbar icons/rollout-nav.svg" },
  //     { name: "Service Catalog", href: "/solutions/service-catalog", icon: "/images/navbar icons/catalog-nav.svg" },
  //     { name: "Auto-Scaling", href: "/solutions/auto-scaling", icon: "/images/navbar icons/scaling-nav.svg" },
  //   ]
  // },
  resources: {
    label: "Resources",
    items: [
      { name: "Blog", href: "/blog", icon: "/images/navbar icons/blog-nav.svg" },
      { name: "Status", href: "/status", icon: "/images/navbar icons/status-nav.svg" },
      { name: "Security", href: "https://trust.skyhook.io", icon: "/images/navbar icons/security-nav.svg", external: true },
      { name: "Changelog", href: "/changelog", icon: "/images/navbar icons/changelog-nav.svg" },
    ]
  }
};

export function Nav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-[width,height,top,border-radius]",
          scrolled
            ? "top-0 w-full md:top-4 md:w-[calc(100%-2rem)] md:max-w-6xl rounded-none md:rounded-2xl glass-strong border-b md:border border-border shadow-lg backdrop-blur-xl h-16"
            : "top-0 w-full glass-subtle border-b border-transparent h-20"
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className={cn(
          "mx-auto h-full transition-all duration-500",
          scrolled ? "max-w-7xl px-4 sm:px-6 lg:px-8" : "w-full md:w-[1310px] px-4 md:px-0"
        )}>
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div
              className="flex-shrink-0 z-50"
              onMouseEnter={() => setActiveDropdown(null)}
            >
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
                          const itemContent = (
                            <div className="flex items-center gap-[13px] w-full">
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-white transition-colors">
                                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                              </div>
                              <span className="font-normal text-[16px] leading-normal group-hover:text-white transition-colors">{item.name}</span>
                            </div>
                          );

                          const hoverClasses = "group flex items-center p-[10px] gap-[13px] text-sm text-ink-secondary hover:text-white hover:bg-[#2D7BFF] rounded-[15px] transition-all duration-150";

                          return item.external ? (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={hoverClasses}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {itemContent}
                            </a>
                          ) : (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={hoverClasses}
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

                <a
                  href="https://docs.skyhook.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors group"
                  onMouseEnter={() => setActiveDropdown(null)}
                >
                  Docs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
                <Link
                  href="/pricing"
                  className="relative text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors group"
                  onMouseEnter={() => setActiveDropdown(null)}
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link
                  href="/about"
                  className="relative text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors group"
                  onMouseEnter={() => setActiveDropdown(null)}
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="hidden md:flex items-center gap-4 z-50"
              onMouseEnter={() => setActiveDropdown(null)}
            >
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

            {/* Mobile Hamburger */}
            <button
              className="md:hidden z-50 p-2 text-ink-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer - slides from top */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 150 }}
            className="fixed top-0 left-0 right-0 bg-background z-40 md:hidden overflow-y-auto shadow-lg border-b border-border"
          >
            <div className="flex flex-col h-full p-6 pt-24 pb-8">
              <div className="flex-1 overflow-y-auto">
                {/* Nav Sections */}
                {Object.entries(navMap).map(([key, section]) => (
                  <div key={key} className="mb-2 border-b border-border/50 last:border-0">
                    <button
                      className="flex items-center justify-between w-full py-4 text-left text-ink-primary font-medium text-lg"
                      onClick={() => setMobileExpandedSection(mobileExpandedSection === key ? null : key)}
                    >
                      {section.label}
                      <ChevronDown className={cn(
                        "w-5 h-5 transition-transform duration-200 text-ink-tertiary",
                        mobileExpandedSection === key ? "rotate-180 text-accent" : ""
                      )} />
                    </button>
                    <AnimatePresence>
                      {mobileExpandedSection === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-0 pb-4 space-y-2">
                            {section.items.map((item) => (
                              item.external ? (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border/50 text-base text-ink-secondary hover:text-ink-primary hover:border-accent/20 transition-all"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <img src={item.icon} alt="" className="w-5 h-5 opacity-70" />
                                  {item.name}
                                </a>
                              ) : (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border/50 text-base text-ink-secondary hover:text-ink-primary hover:border-accent/20 transition-all"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <img src={item.icon} alt="" className="w-5 h-5 opacity-70" />
                                  {item.name}
                                </Link>
                              )
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Direct Links */}
                <div className="mt-4 space-y-1">
                  <a
                    href="https://docs.skyhook.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-lg font-medium text-ink-secondary hover:text-ink-primary transition-colors border-b border-border/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Docs
                  </a>
                  <Link
                    href="/pricing"
                    className="block py-3 text-lg font-medium text-ink-secondary hover:text-ink-primary transition-colors border-b border-border/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className="block py-3 text-lg font-medium text-ink-secondary hover:text-ink-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>
              </div>

              {/* Mobile CTAs - Fixed at bottom of drawer content if needed, but here just part of flow */}
              <div className="mt-8 space-y-3 pt-6 border-t border-border">
                <Button
                  href="https://app.skyhook.io"
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center"
                  external
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Button>
                <Button
                  href="/demo"
                  size="lg"
                  className="w-full justify-center shadow-lg shadow-accent/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

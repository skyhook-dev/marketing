"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative border-b border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInStagger className="space-y-8">
            <FadeIn>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-ink-primary">
                  One-click <br />
                  <span className="text-ink-secondary">Kubernetes Platform</span>
                </h1>
                <p className="text-lg md:text-xl text-ink-secondary max-w-lg leading-relaxed">
                  Developer platform without the hassle. Build, run and release applications on a best-in-class platform. Skyhook automatically orchestrates, customizes and configures all the leading tools.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-accent border border-black shadow-hard hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Get a demo
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-ink-primary bg-surface border border-ink-primary shadow-hard hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Start deploying
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <blockquote className="mt-8 border-l-2 border-accent pl-4">
                <p className="text-lg italic text-ink-secondary">
                  "It's like Vercel for Kubernetes"
                </p>
              </blockquote>
            </FadeIn>
          </FadeInStagger>

          <FadeIn delay={0.4} className="relative h-[400px] w-full hidden lg:block">
            {/* Abstract Visualization Placeholder */}
            <div className="absolute inset-0 border border-ink-primary bg-surface shadow-hard flex items-center justify-center overflow-hidden">
               <div className="text-center space-y-2 relative z-10 flex flex-col items-center justify-center h-full">
                 <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="font-mono text-xs uppercase tracking-widest text-ink-secondary mb-8 absolute top-12"
                 >
                    System Architecture
                 </motion.div>
                 
                 <div className="relative flex items-center justify-center mt-4">
                    {/* Outer Circle */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute w-80 h-80 border border-dashed border-ink-secondary/20 rounded-full"
                    />
                    {/* Middle Circle */}
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute w-64 h-64 border border-dashed border-ink-secondary/40 rounded-full"
                    />
                     {/* Inner Circle */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-48 h-48 border border-dashed border-ink-secondary rounded-full flex items-center justify-center"
                    >
                        <div className="w-32 h-32 bg-ink-secondary/5 rounded-full backdrop-blur-sm" />
                    </motion.div>
                 </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

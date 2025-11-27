"use client";

import { ArrowRight, Box, Layers, Play, TrendingUp, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

const steps = [
  {
    id: "build",
    label: "Build",
    icon: Box,
    description: "Spin up services & infra in seconds"
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: Layers,
    description: "Automated rollouts & preview envs"
  },
  {
    id: "run",
    label: "Run",
    icon: Play,
    description: "Zero-ops platform operations"
  },
  {
    id: "grow",
    label: "Grow",
    icon: TrendingUp,
    description: "Scale across teams & clouds"
  },
  {
    id: "observe",
    label: "Observe",
    icon: Activity,
    description: "Instant logs, metrics & traces"
  }
];

export function SDLCPipeline() {
  return (
    <section className="py-24 bg-background border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-4">
              Powering the software development lifecycle
            </h2>
            <p className="text-lg text-ink-secondary">
              Scale your applications with zero infrastructure friction and full observability.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-[3px] hidden md:block" style={{ margin: '0 calc(10% + 3rem)' }}>
            {/* Base line */}
            <div className="absolute inset-0 bg-ink-primary/20" />

            {/* Animated gradient pulse */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent"
                style={{
                  animation: 'sdlc-flow 5s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10" faster>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.id} direction="right" delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-24 h-24 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center mb-6 hover-lift">
                      <Icon className="w-8 h-8 text-ink-primary group-hover:text-accent transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-ink-primary mb-2">{step.label}</h3>
                    <p className="text-sm text-ink-secondary leading-relaxed px-2">
                      {step.description}
                    </p>

                    {/* Mobile Arrow */}
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-border mt-6 md:hidden" />
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </FadeInStagger>
        </div>
      </div>

      {/* Global keyframes for animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sdlc-flow {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(500%);
            }
          }
        `
      }} />
    </section>
  );
}

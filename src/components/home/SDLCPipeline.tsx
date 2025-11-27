"use client";

import { useState } from "react";
import { Box, Layers, Play, TrendingUp, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: "build",
    label: "Build",
    icon: Box,
    image: "/images/sdlc/build.svg",
    bullets: [
      "Spin up services, environments, and infrastructure in seconds",
      "Wire in your preferred dev tools with zero configuration",
      "Give developers self-service without sacrificing control",
      "Template-driven setup for consistent environments"
    ]
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: Layers,
    image: "/images/sdlc/deploy.svg",
    bullets: [
      "Ship code with confidence using built-in CI/CD flows",
      "Preview environments for every pull request",
      "Automated rollouts with instant rollback capability",
      "From dev to production—it just works"
    ]
  },
  {
    id: "run",
    label: "Run",
    icon: Play,
    image: "/images/sdlc/run.svg",
    bullets: [
      "Skyhook handles underlying platform operations",
      "Keep your apps healthy and performant automatically",
      "No YAML acrobatics or cluster babysitting required",
      "Auto-scaling and self-healing built in"
    ]
  },
  {
    id: "grow",
    label: "Grow",
    icon: TrendingUp,
    image: "/images/sdlc/grow.svg",
    bullets: [
      "Launch a side project or manage enterprise workloads",
      "Scale seamlessly across teams and environments",
      "Multi-cloud support: AWS, GCP, and Azure",
      "Skyhook grows with you—no migration needed"
    ]
  },
  {
    id: "observe",
    label: "Observe",
    icon: Activity,
    image: "/images/sdlc/observe.svg",
    bullets: [
      "Instant access to logs, metrics, and traces",
      "Observability tools connected out of the box",
      "Insights are just a click away",
      "Debug faster with correlated telemetry"
    ]
  }
];

export function SDLCPipeline() {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section className="py-24 bg-background border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-4">
              Powering the software development lifecycle, together
            </h2>
            <p className="text-lg text-ink-secondary">
              Scale your applications with zero infrastructure friction and full observability.
            </p>
          </div>
        </FadeIn>

        {/* Step selector - horizontal boxes with connecting line */}
        <FadeIn>
          <div className="relative mb-12">
            {/* Animated Connecting Line */}
            <div className="absolute top-14 left-0 right-0 hidden md:block" style={{ margin: '0 calc(10% + 3.5rem)' }}>
              {/* Base line */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-border" />

              {/* Animated glow + line using Framer Motion */}
              <div className="absolute inset-x-0 h-[40px] top-1/2 -translate-y-1/2 overflow-hidden">
                <motion.div
                  className="absolute h-full"
                  style={{
                    width: '25%',
                    background: `radial-gradient(ellipse 50% 50% at center, var(--color-accent) 0%, rgba(45, 122, 255, 0.4) 20%, rgba(45, 122, 255, 0.1) 40%, transparent 70%)`,
                  }}
                  animate={{
                    x: ['-25%', '425%'],
                  }}
                  transition={{
                    duration: 5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                />
              </div>

              {/* Sharp line highlight on top */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-accent to-transparent"
                  style={{ width: '25%' }}
                  animate={{
                    x: ['-25%', '425%'],
                  }}
                  transition={{
                    duration: 5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20 relative z-10">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = activeStep.id === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step)}
                    className={cn(
                      "flex flex-col items-center justify-center w-28 h-28 rounded-xl border transition-all duration-300 cursor-pointer",
                      "hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive
                        ? "bg-accent border-accent shadow-lg"
                        : "bg-surface border-border hover:border-accent/50"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-8 h-8 mb-2 transition-colors",
                        isActive ? "text-white" : "text-ink-primary"
                      )}
                      strokeWidth={1.5}
                    />
                    <span
                      className={cn(
                        "text-sm font-semibold transition-colors",
                        isActive ? "text-white" : "text-ink-primary"
                      )}
                    >
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Content area - bullets left, image right */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - bullets */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <ul className="space-y-4">
                  {activeStep.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <span className="text-ink-secondary text-lg leading-relaxed">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Right side - image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[3/2] rounded-xl overflow-hidden border border-border shadow-hard"
              >
                <Image
                  src={activeStep.image}
                  alt={`${activeStep.label} visualization`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>

    </section>
  );
}

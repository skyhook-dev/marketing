"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "build",
    label: "Build",
    image: "/images/build.svg",
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
    image: "/images/deploy.svg",
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
    image: "/images/run.svg",
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
    image: "/images/grow.svg",
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
    image: "/images/observe.svg",
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
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Header */}
          <div className="flex flex-col items-center gap-6 mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:heading-lg tracking-tight px-4">
              Powering the software development lifecycle, together
            </h2>
            <p className="text-body text-lg px-4">
              Scale your applications with zero infrastructure friction and full observability.
            </p>
          </div>

          {/* Desktop View: Tabs + Content */}
          <div className="hidden md:block">
            {/* Navigation Pills */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex p-1.5 items-center gap-2 rounded-full border border-border bg-surface shadow-sm">
                {steps.map((step) => {
                  const isActive = activeStep.id === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step)}
                      className={cn(
                        "relative flex w-[120px] py-3 px-6 justify-center items-center gap-2.5 rounded-full cursor-pointer focus:outline-none transition-colors duration-200 select-none",
                        !isActive && "hover:bg-accent/5 hover:text-ink-primary"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activePillDesktop"
                          className="absolute inset-0 bg-accent rounded-full shadow-md"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span
                        className={cn(
                          "relative z-10 text-base font-medium leading-none transition-colors duration-200",
                          isActive ? "text-white" : "text-ink-secondary"
                        )}
                      >
                        {step.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Content Area */}
            <div className="flex flex-row gap-20 items-center justify-between">
              {/* Left Column - Bullets */}
              <div className="flex flex-col gap-8 w-full flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                  >
                    {activeStep.bullets.map((bullet, index) => (
                      <div key={index} className="group flex items-start gap-4 p-4 rounded-xl bg-surface border border-transparent hover:border-border transition-colors duration-200">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 text-accent">
                          <img
                            src="/images/check.svg"
                            alt="check"
                            className="w-4 h-4 opacity-100 invert-0 [filter:brightness(0)_saturate(100%)_invert(33%)_sepia(95%)_saturate(1679%)_hue-rotate(203deg)_brightness(101%)_contrast(106%)]"
                          />
                        </div>
                        <span className="text-lg font-normal text-ink-secondary group-hover:text-ink-primary transition-colors">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column - Image */}
              <div className="relative w-1/2 flex-shrink-0 flex justify-end">
                {/* Decorative backdrop for image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-purple-500/5 rounded-3xl blur-2xl -z-10 transform scale-110" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                     key={activeStep.id}
                     initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                     animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                     exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                     transition={{ duration: 0.4, ease: "circOut" }}
                     className="relative z-10"
                  >
                    <img
                      src={activeStep.image}
                      alt={activeStep.label}
                      className="w-full h-auto max-w-[600px] drop-shadow-xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile View: Accordion */}
          <div className="flex flex-col gap-4 md:hidden">
            {steps.map((step) => {
              const isActive = activeStep.id === step.id;
              return (
                <div key={step.id} className="rounded-xl border border-border bg-surface overflow-hidden">
                  <button
                    onClick={() => setActiveStep(step)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 text-left transition-colors",
                      isActive ? "bg-accent/5" : "hover:bg-accent/5"
                    )}
                  >
                    <span className={cn("text-lg font-semibold", isActive ? "text-accent" : "text-ink-primary")}>
                      {step.label}
                    </span>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn("text-ink-tertiary", isActive && "text-accent")}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-4 pt-0 border-t border-transparent">
                          {/* Image inside accordion */}
                          <div className="mb-6 rounded-lg overflow-hidden shadow-sm border border-border/50">
                             <img
                                src={step.image}
                                alt={step.label}
                                className="w-full h-auto"
                              />
                          </div>
                          
                          {/* Bullets */}
                          <div className="flex flex-col gap-3">
                            {step.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 text-accent">
                                   <img
                                      src="/images/check.svg"
                                      alt="check"
                                      className="w-3 h-3 opacity-100 invert-0 [filter:brightness(0)_saturate(100%)_invert(33%)_sepia(95%)_saturate(1679%)_hue-rotate(203deg)_brightness(101%)_contrast(106%)]"
                                    />
                                </div>
                                <span className="text-base text-ink-secondary leading-relaxed">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

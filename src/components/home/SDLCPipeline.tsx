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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Header */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <h2 className="text-3xl md:text-[50px] font-semibold text-[#101927] text-center leading-[120%] tracking-normal max-w-[875px]">
              Powering the software development lifecycle, together
            </h2>
            <p className="text-[18px] font-normal text-[#445166] text-center leading-normal">
              Scale your applications with zero infrastructure friction and full observability.
            </p>
          </div>

          {/* Desktop View: Tabs + Content */}
          <div className="hidden md:block">
            {/* Navigation Pills */}
            <div className="flex justify-center mb-[60px]">
              <div className="inline-flex p-[6px] items-center gap-2 rounded-[100px] border border-[#D3E3FF] bg-[#F6FAFF]">
                {steps.map((step) => {
                  const isActive = activeStep.id === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step)}
                      className={cn(
                        "relative flex w-[115px] py-[14px] px-[28px] justify-center items-center gap-2.5 rounded-[100px] cursor-pointer focus:outline-none transition-colors duration-200",
                        !isActive && "hover:bg-[#EAF2FF]"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activePillDesktop"
                          className="absolute inset-0 bg-[#2D7AFF] rounded-[100px] shadow-[0px_7px_10px_0px_rgba(8,31,69,0.18)]"
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        />
                      )}
                      <span
                        className={cn(
                          "relative z-10 text-[18px] font-medium leading-normal transition-colors duration-200",
                          isActive ? "text-white" : "text-[#445166]"
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
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
              {/* Left Column - Bullets */}
              <div className="flex flex-col gap-[33px] w-full flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col gap-[33px]"
                  >
                    {activeStep.bullets.map((bullet, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <img
                          src="/images/check.svg"
                          alt="check"
                          className="w-5 h-5 flex-shrink-0 mt-1"
                        />
                        <span className="text-[16px] font-normal text-[#445166] leading-[139%]">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center items-center w-full lg:w-[639px] flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep.id}
                    src={activeStep.image}
                    alt={activeStep.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-auto"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile View: Accordion */}
          <div className="flex flex-col gap-4 md:hidden">
            {steps.map((step) => {
              const isActive = activeStep.id === step.id;
              return (
                <div key={step.id} className="rounded-xl border border-[#D3E3FF] bg-[#F6FAFF] overflow-hidden">
                  <button
                    onClick={() => setActiveStep(step)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 text-left",
                      isActive && "bg-white"
                    )}
                  >
                    <span className={cn("text-lg font-semibold", isActive ? "text-[#2D7AFF]" : "text-[#101927]")}>
                      {step.label}
                    </span>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn("text-[#445166]", isActive && "text-[#2D7AFF]")}
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
                        <div className="p-4 pt-0 bg-white">
                          {/* Image inside accordion */}
                          <div className="mb-4">
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
                                <img
                                  src="/images/check.svg"
                                  alt="check"
                                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                                />
                                <span className="text-base text-[#445166] leading-relaxed">
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

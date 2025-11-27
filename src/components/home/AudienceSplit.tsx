"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronDown, Check } from "lucide-react";

type DevOpsTab = "platform" | "selfservice" | "kubernetes";

const devOpsTabs = [
  { id: "platform" as const, label: "Great DevOps, ready to roll" },
  { id: "selfservice" as const, label: "Reusable self-service actions" },
  { id: "kubernetes" as const, label: "Kubernetes, solved" },
];

const devOpsContent: Record<DevOpsTab, { bullets: string[]; image: string; imageAlt: string }> = {
  platform: {
    bullets: [
      "An instant platform that would take weeks or months to create",
      "Integrates with the best tools you know and love",
      "Supports any language or framework",
      "An end to TicketOps, so you can focus on strategic projects",
      "Under the hood K8s for easy extensibility",
      "No vendor lock-in - your cloud, your code, your platform",
    ],
    image: "/images/devops/sidebar.svg",
    imageAlt: "Skyhook Sidebar",
  },
  selfservice: {
    bullets: [
      "Self-service interfaces for build, run and deploy",
      "Service catalog",
      "Stay in control, easily apply guardrails and policies with Kyverno or OPA",
      "Vetted best practices that make sense for your organization",
      "Security code scanning",
      "Monitor, analyze and reduce cloud costs",
    ],
    image: "/images/devops/service-catalog.svg",
    imageAlt: "Service Catalog",
  },
  kubernetes: {
    bullets: [
      "Any cloud: AWS, AKS, GKE or bring your own",
      "Make day-to-day operations accessible for all developers",
      "A one-line helm install and you're all set",
      "Designed for scale, without compromising ease of use",
    ],
    image: "/images/devops/tools.svg",
    imageAlt: "Kubernetes Tools",
  },
};

export function AudienceSplit() {
  const [activeTab, setActiveTab] = useState<"developers" | "devops">("developers");
  const [devOpsTab, setDevOpsTab] = useState<DevOpsTab>("platform");

  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Toggle */}
        <FadeIn>
          <div className="flex justify-center mb-16">
            <div className="relative inline-flex p-1.5 bg-background border border-border rounded-xl shadow-sm">
              {/* Sliding background indicator */}
              <motion.div
                className="absolute inset-1.5 w-[calc(50%-3px)] bg-accent rounded-lg shadow-md"
                initial={false}
                animate={{
                  left: activeTab === "developers" ? "6px" : "calc(50% - 3px)",
                }}
                transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.25 }}
              />
              <button
                onClick={() => setActiveTab("developers")}
                className={cn(
                  "relative z-10 px-10 py-4 text-lg font-semibold transition-colors duration-200 rounded-lg",
                  activeTab === "developers"
                    ? "text-white"
                    : "text-ink-secondary hover:text-ink-primary"
                )}
              >
                For Developers
              </button>
              <button
                onClick={() => setActiveTab("devops")}
                className={cn(
                  "relative z-10 px-10 py-4 text-lg font-semibold transition-colors duration-200 rounded-lg",
                  activeTab === "devops"
                    ? "text-white"
                    : "text-ink-secondary hover:text-ink-primary"
                )}
              >
                For DevOps
              </button>
            </div>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          {activeTab === "developers" ? (
            <motion.div
              key="developers-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content Side */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary">
                  A self-service interface for developers
                </h2>
                <p className="text-lg text-ink-secondary leading-relaxed">
                  Like an internal developer portal without the K8s platform setup. A simple interface that meets developers where they are — CLI, API or UI.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 bg-accent rounded-full" />
                    <span className="text-ink-secondary">Leverage the K8s ecosystem without expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 bg-accent rounded-full" />
                    <span className="text-ink-secondary">Preview environments to canary deployments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 bg-accent rounded-full" />
                    <span className="text-ink-secondary">Easy to follow golden paths</span>
                  </li>
                </ul>
              </div>

              {/* Visual Side */}
              <div className="space-y-6">
                <TerminalBlock
                  filename="deploy.sh"
                  code={`$ skyhook deploy --service=api
> Building container... [DONE]
> Pushing to registry... [DONE]
> Deploying to staging... [DONE]
> URL: https://api.staging.skyhook.io`}
                />
                <BlueprintCard title="Service Status" className="bg-surface">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">API Service</span>
                    <span className="px-2 py-0.5 text-xs status-success rounded">Healthy</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-success w-[98%]" />
                  </div>
                </BlueprintCard>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="devops-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* DevOps Header + Accordion + Image Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Left Side: Header + Accordion */}
                <div className="flex flex-col">
                  {/* DevOps Header */}
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-4">
                      Your DevOps dreams come true
                    </h2>
                    <p className="text-lg text-ink-secondary">
                      The platform and tools you never had the time to set up. With all the control you need.
                    </p>
                  </div>

                  {/* Accordion */}
                  <div className="space-y-0">
                    {devOpsTabs.map((tab) => (
                      <div key={tab.id} className="border-t border-border">
                        <button
                          onClick={() => setDevOpsTab(tab.id)}
                          className={cn(
                            "w-full flex items-center justify-between py-5 text-left transition-colors",
                            devOpsTab === tab.id ? "text-ink-primary" : "text-ink-secondary hover:text-ink-primary"
                          )}
                        >
                          <span className="text-xl font-semibold">{tab.label}</span>
                          <ChevronDown
                            className={cn(
                              "w-6 h-6 transition-transform duration-300",
                              devOpsTab === tab.id ? "rotate-180" : ""
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {devOpsTab === tab.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-6 pl-0">
                                <ul className="space-y-3">
                                  {devOpsContent[tab.id].bullets.map((bullet, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                      <span className="text-ink-secondary">{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                    <div className="border-t border-border" />
                  </div>
                </div>

                {/* Image Side - spans full height */}
                <div className="relative hidden lg:flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={devOpsTab + "-image"}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-border bg-surface flex items-center justify-center"
                    >
                      <img
                        src={devOpsContent[devOpsTab].image}
                        alt={devOpsContent[devOpsTab].imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

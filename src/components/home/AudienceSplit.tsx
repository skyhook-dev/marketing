"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

export function AudienceSplit() {
  const [activeTab, setActiveTab] = useState<"developers" | "devops">("developers");

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle */}
        <FadeIn>
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-background border border-border rounded-none">
              <button
                onClick={() => setActiveTab("developers")}
                className={cn(
                  "px-6 py-2 text-sm font-medium transition-all border border-transparent",
                  activeTab === "developers" 
                    ? "bg-white text-ink-primary shadow-sm border-border" 
                    : "text-ink-secondary hover:text-ink-primary"
                )}
              >
                FOR DEVELOPERS
              </button>
              <button
                onClick={() => setActiveTab("devops")}
                className={cn(
                  "px-6 py-2 text-sm font-medium transition-all border border-transparent",
                  activeTab === "devops" 
                    ? "bg-white text-ink-primary shadow-sm border-border" 
                    : "text-ink-secondary hover:text-ink-primary"
                )}
              >
                FOR DEVOPS
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "developers" ? (
                <motion.div
                  key="developers-content"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary">
                    A self-service interface for developers
                  </h2>
                  <p className="text-lg text-ink-secondary leading-relaxed mt-4">
                    Like an internal developer portal without the K8s platform setup. A simple interface that meets developers where they are — CLI, API or UI.
                  </p>
                  <ul className="space-y-4 mt-8">
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
                </motion.div>
              ) : (
                <motion.div
                  key="devops-content"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary">
                    Your DevOps dreams come true
                  </h2>
                  <p className="text-lg text-ink-secondary leading-relaxed mt-4">
                    The platform and tools you never had the time to set up. With all the control you need. An instant platform that would take weeks or months to create.
                  </p>
                  <ul className="space-y-4 mt-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2 bg-accent rounded-full" />
                      <span className="text-ink-secondary">Integrates with the best tools you know and love</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2 bg-accent rounded-full" />
                      <span className="text-ink-secondary">No vendor lock-in - your cloud, your code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2 bg-accent rounded-full" />
                      <span className="text-ink-secondary">Vetted best practices and security scanning</span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Visual Side */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "developers" ? (
                <motion.div
                  key="developers-visual"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <TerminalBlock 
                    filename="deploy.sh"
                    code={`$ skyhook deploy --service=api
> Building container... [DONE]
> Pushing to registry... [DONE]
> Deploying to staging... [DONE]
> URL: https://api.staging.skyhook.io`}
                  />
                  <BlueprintCard title="Service Status" className="bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">API Service</span>
                      <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 border border-green-200">Healthy</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[98%]" />
                    </div>
                  </BlueprintCard>
                </motion.div>
              ) : (
                <motion.div
                  key="devops-visual"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                   <BlueprintCard title="Policy Enforcement" className="bg-white">
                      <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm border-b border-border pb-2">
                              <span>Enforce TLS</span>
                              <span className="font-mono text-xs">ENABLED</span>
                          </div>
                          <div className="flex items-center justify-between text-sm border-b border-border pb-2">
                              <span>Resource Quotas</span>
                              <span className="font-mono text-xs">ENABLED</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                              <span>Image Scanning</span>
                              <span className="font-mono text-xs">STRICT</span>
                          </div>
                      </div>
                   </BlueprintCard>
                   <TerminalBlock 
                    filename="policy.yaml"
                    language="yaml"
                    code={`apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-labels
spec:
  validationFailureAction: enforce
  rules:
    - name: check-for-labels`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

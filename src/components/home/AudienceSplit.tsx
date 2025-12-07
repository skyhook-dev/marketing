"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type DrawerId = "platform" | "selfservice" | "kubernetes";

const devOpsDrawers = [
  {
    id: "platform" as const,
    label: "Great DevOps, ready to roll",
    bullets: [
      "An instant platform that would take weeks or months to create",
      "Integrates with the best tools you know and love",
      "Supports any language or framework",
    ],
    image: "/images/for-devops/devops-1.svg"
  },
  {
    id: "selfservice" as const,
    label: "Reusable self-service actions",
    bullets: [
      "Self-service interfaces for build, run and deploy",
      "Service catalog",
      "Stay in control, easily apply guardrails and policies",
    ],
    image: "/images/for-devops/devops-2.svg"
  },
  {
    id: "kubernetes" as const,
    label: "Kubernetes, solved",
    bullets: [
      "Any cloud: AWS, AKS, GKE or bring your own",
      "Make day-to-day operations accessible for all developers",
      "A one-line helm install and you're all set",
    ],
    image: "/images/for-devops/devops-3.svg"
  },
];

const developersBullets = [
  "Leverage the K8s ecosystem without expertise",
  "Preview environments to canary deployments",
  "Easy to follow golden paths",
];

export function AudienceSplit() {
  const [openDrawer, setOpenDrawer] = useState<DrawerId>("platform");

  // Auto-rotate drawers every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenDrawer(current => {
        const currentIndex = devOpsDrawers.findIndex(d => d.id === current);
        const nextIndex = (currentIndex + 1) % devOpsDrawers.length;
        return devOpsDrawers[nextIndex].id;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = (id: DrawerId) => {
    if (openDrawer !== id) {
      setOpenDrawer(id);
    }
  };

  const activeImage = devOpsDrawers.find(d => d.id === openDrawer)?.image || devOpsDrawers[0].image;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Top Block - For DevOps */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 mb-32">
            {/* Left Side - Text Content */}
            <div className="flex w-full lg:w-5/12 flex-col items-center text-center lg:items-start lg:text-left min-h-[500px]">
              {/* Badge */}
              <div className="badge badge-accent mb-6">
                For DevOps
              </div>

              {/* Title */}
              <h2 className="heading-lg tracking-tight mb-4">
                Every <span className="text-accent">DevOps</span> dream come true
              </h2>

              {/* Subtitle */}
              <p className="text-body text-lg mb-8">
                The platform and tools you never had the time to set up. With all the control you need.
              </p>

              {/* Drawers */}
              <div className="w-full">
                {devOpsDrawers.map((drawer, index) => (
                  <div key={drawer.id} className="relative group">
                    <button
                      onClick={() => toggleDrawer(drawer.id)}
                      className={cn(
                        "flex w-full justify-between items-center py-5 cursor-pointer transition-all",
                        openDrawer !== drawer.id && "border-b border-border group-hover:border-ink-tertiary"
                      )}
                    >
                      <span className={cn(
                          "text-xl font-semibold transition-colors",
                           openDrawer === drawer.id ? "text-ink-primary" : "text-ink-secondary group-hover:text-ink-primary"
                      )}>
                        {drawer.label}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-6 h-6 transition-all duration-300",
                          openDrawer === drawer.id ? "rotate-180 text-accent" : "text-ink-tertiary group-hover:text-ink-primary"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {openDrawer === drawer.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col items-start gap-3 pt-2 pb-5">
                            {drawer.bullets.map((bullet, bulletIndex) => (
                              <div key={bulletIndex} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-accent/10 flex items-center justify-center">
                                    <img
                                    src="/images/check.svg"
                                    alt="check"
                                    className="w-3 h-3 text-accent"
                                    />
                                </div>
                                <span className="text-body">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Progress bar */}
                    <div className="w-full h-[3px] overflow-hidden bg-transparent rounded-full">
                      {openDrawer === drawer.id && (
                        <div
                          key={`progress-${drawer.id}`}
                          className="h-full bg-accent"
                          style={{
                            animation: 'progressBar 10s linear forwards'
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-7/12 flex items-center justify-center relative min-h-[400px] lg:min-h-[600px] bg-accent/5 rounded-2xl border border-accent/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent z-0" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={openDrawer}
                  src={activeImage}
                  alt="DevOps visualization"
                  className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain relative z-10 drop-shadow-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Block - For Developers */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left Side - Image */}
            <div className="w-full lg:w-7/12 flex items-center justify-center relative">
               {/* Decorative background blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-3xl rounded-full -z-10" />
              <img
                src="/images/for-dev/Dev-image.svg"
                alt="Developer interface"
                className="w-full h-auto max-w-2xl drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="flex w-full lg:w-5/12 flex-col items-center text-center lg:items-start lg:text-left">
              {/* Badge */}
               <div className="badge badge-accent mb-6">
                For Developers
              </div>

              {/* Title */}
              <h2 className="heading-lg tracking-tight mb-4">
                A self-service interface for <span className="text-accent">Developers</span>
              </h2>

              {/* Subtitle */}
              <p className="text-body text-lg mb-8">
                Like an internal developer portal without the K8s platform setup
              </p>

              {/* Bullets */}
              <div className="flex flex-col gap-4">
                {developersBullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface hover:shadow-sm transition-all border border-transparent hover:border-border">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center text-success mt-0.5">
                        <img
                        src="/images/check.svg"
                        alt="check"
                        className="w-3.5 h-3.5 opacity-60 invert-0 [filter:brightness(0)_saturate(100%)_invert(33%)_sepia(95%)_saturate(1679%)_hue-rotate(203deg)_brightness(101%)_contrast(106%)]"
                        />
                    </div>
                    <span className="text-body font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

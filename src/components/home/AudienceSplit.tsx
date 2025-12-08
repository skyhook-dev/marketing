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
    <section className="py-[25px] md:py-24 bg-background">
      <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0">
        <FadeIn>
          {/* Top Block - For DevOps */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-[102px] mb-24">
            {/* Left Side - Text Content */}
            <div className="flex w-full lg:w-[532px] flex-col items-start text-left min-h-[500px] lg:min-h-[600px]">
              {/* Badge */}
              <div className="flex px-[19px] py-2.5 justify-center items-center gap-2.5 rounded-full bg-[#E6F0FF] mb-5">
                <span className="text-[#0051DD] text-base font-semibold leading-normal">
                  For DevOps
                </span>
              </div>

              {/* Title */}
              {/* Title */}
              <h2 className="text-[30px] lg:text-[50px] font-semibold text-[#101927] leading-[120%] lg:leading-[110%] mb-[7px]">
                Every <span className="text-[#2D7AFF]">DevOps</span> dream come true
              </h2>

              {/* Subtitle */}
              <p className="text-[16px] lg:text-[18px] font-normal text-[#445166] leading-normal mb-5">
                The platform and tools you never had the time to set up. With all the control you need.
              </p>

              {/* Drawers */}
              <div className="w-full">
                {devOpsDrawers.map((drawer, index) => (
                  <div key={drawer.id} className="relative">
                    <button
                      onClick={() => toggleDrawer(drawer.id)}
                      className={cn(
                        "flex w-full justify-between items-center py-5 cursor-pointer transition-colors",
                        openDrawer !== drawer.id && "border-b border-[#878F9E]"
                      )}
                    >
                      <span className="text-[20px] font-semibold text-[#101927] leading-normal">
                        {drawer.label}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-6 h-6 text-[#101927] transition-transform duration-300",
                          openDrawer === drawer.id ? "rotate-180" : ""
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
                          <div className="flex flex-col items-start gap-[13px] pt-2 pb-5">
                            {drawer.bullets.map((bullet, bulletIndex) => (
                              <div key={bulletIndex} className="flex items-start gap-3">
                                <img
                                  src="/images/check.svg"
                                  alt="check"
                                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                                />
                                <span className="text-base font-normal text-[#445166] leading-normal text-left">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Progress bar */}
                    <div className="w-full h-[5px] overflow-hidden bg-transparent">
                      {openDrawer === drawer.id && (
                        <div
                          key={`progress-${drawer.id}`}
                          className="h-full bg-[#2D7AFF]"
                          style={{
                            animation: 'progressBar 10s linear forwards'
                          }}
                        />
                      )}
                    </div>

                    {/* Bottom border for closed drawers */}
                    {openDrawer === drawer.id && index < devOpsDrawers.length - 1 && (
                      <div className="border-b border-[#878F9E]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center justify-center relative w-full h-[300px] lg:h-[583px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={openDrawer}
                  src={activeImage}
                  alt="DevOps visualization"
                  className="w-auto h-full lg:h-auto max-w-full max-h-full object-contain relative lg:absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Block - For Developers */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[102px]">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/images/for-dev/Dev-image.svg"
                alt="Developer interface"
                className="w-full h-auto max-w-[676px] lg:h-[583px] lg:w-[676px]"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="flex w-full lg:w-[532px] flex-col items-start text-left">
              {/* Badge */}
              <div className="flex px-[19px] py-2.5 justify-center items-center gap-2.5 rounded-full bg-[#E6F0FF] mb-5">
                <span className="text-[#0051DD] text-base font-semibold leading-normal">
                  For Developers
                </span>
              </div>

              {/* Title */}
              {/* Title */}
              <h2 className="text-[30px] lg:text-[50px] font-semibold text-[#101927] leading-[120%] lg:leading-[110%] mb-[7px]">
                A self-service interface for <span className="text-[#2D7AFF]">Developers</span>
              </h2>

              {/* Subtitle */}
              <p className="text-[16px] lg:text-[18px] font-normal text-[#445166] leading-normal mb-5">
                Like an internal developer portal without the K8s platform setup
              </p>

              {/* Bullets */}
              <div className="flex flex-col gap-[13px]">
                {developersBullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img
                      src="/images/check.svg"
                      alt="check"
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-base font-normal text-[#445166] leading-normal">
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

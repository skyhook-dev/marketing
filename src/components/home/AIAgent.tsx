"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function AIAgent() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Top Section */}
          <div className="flex flex-col items-center gap-[14px] max-w-[768px] mx-auto mb-[34px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF2FF] border border-[#2D7AFF]/20">
              <span className="text-[16px] font-semibold text-[#0051DD] leading-normal">
                AI-Ready Platform
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[50px] font-semibold text-[#101927] text-center leading-[120%]">
              Chat with your infrastructure
            </h2>

            {/* Subtitle */}
            <p className="text-[18px] font-normal text-[#445166] text-center leading-normal">
              Skyhook's agent provides developers and DevOps with the context they need. It knows your stack, your standards, and your golden paths.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Image Section - Outside the container */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col items-center">
          <img
            src="/images/ai-agent.svg"
            alt="AI Agent Interface"
            className="w-[1685px] h-auto"
          />
          {/* Line attached to bottom of image */}
          <div
            className="w-full max-w-[1310px] border-t border-[#E5E5E5] mt-0"
            style={{ height: 0, strokeWidth: '1px' }}
          />
        </div>
      </FadeIn>
    </section>
  );
}

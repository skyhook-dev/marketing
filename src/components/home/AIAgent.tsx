"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function AIAgent() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Top Section */}
          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto mb-16 text-center">
            {/* Badge */}
             <div className="badge badge-accent mb-2">
                AI-Ready Platform
             </div>

            {/* Title */}
            <h2 className="heading-lg tracking-tight">
              Chat with your infrastructure
            </h2>

            {/* Subtitle */}
            <p className="text-body text-lg text-cancel-balance">
              Skyhook's agent provides developers and DevOps with the context they need. It knows your stack, your standards, and your golden paths.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Image Section - Centered with max constraint */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col items-center w-full px-4 border-b border-border">
          <div className="relative w-full max-w-[1400px]">
             {/* Glow behind the interface */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-accent/5 blur-3xl rounded-full -z-10" />
            <img
                src="/images/ai-agent.svg"
                alt="AI Agent Interface"
                className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

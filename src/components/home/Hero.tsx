"use client";

import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Glow Effect - Optional subtle addition for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <FadeInStagger className="space-y-8">
            <FadeIn>
              <div className="space-y-6">
                <h1 className="heading-xl tracking-tight text-ink-primary">
                  One-click <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                    Kubernetes Platform
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-ink-secondary max-w-lg leading-relaxed">
                  Developer platform without the hassle. Build, run and release applications on a best-in-class platform. Skyhook automatically orchestrates, customizes and configures all the leading tools.
                </p>
              </div>
            </FadeIn>


            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Button href="/demo">Get a demo</Button>
                <Button href="/signup" variant="secondary">Start deploying</Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <blockquote className="mt-8 border-l-2 border-accent pl-4">
                <p className="text-lg italic text-ink-secondary">
                  "It&apos;s like Vercel for Kubernetes"
                </p>
              </blockquote>
            </FadeIn>
          </FadeInStagger>

          <FadeIn delay={0.4} className="relative w-full hidden lg:block">
            <div className="animate-float">
                {/* Applied scale-125 to make it slightly imposing without breaking layout */}
                <img
                src="/images/heroes/hero-illustration.svg"
                alt="Skyhook Platform"
                className="w-full h-auto scale-110 origin-center drop-shadow-2xl"
                />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

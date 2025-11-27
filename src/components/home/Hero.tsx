"use client";

import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative border-b border-border glass-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInStagger className="space-y-8">
            <FadeIn>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-ink-primary">
                  One-click <br />
                  <span className="text-ink-secondary">Kubernetes Platform</span>
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
                  "It's like Vercel for Kubernetes"
                </p>
              </blockquote>
            </FadeIn>
          </FadeInStagger>

          <FadeIn delay={0.4} className="relative w-full hidden lg:block lg:scale-150 lg:origin-center">
            <img
              src="/images/heroes/hero.png"
              alt="Skyhook Platform"
              className="w-full h-auto"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

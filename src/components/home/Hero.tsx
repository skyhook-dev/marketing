"use client";

import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[36px] pb-[66px] md:pt-32 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px] md:gap-12 items-center">
          <FadeInStagger className="space-y-8">
            <FadeIn>
              <div className="space-y-4 flex flex-col items-start text-left">
                <h1 className="text-[36px] md:text-6xl font-semibold tracking-tight leading-[120%] md:leading-[1.1] text-[#101927]">
                  One-click <br />
                  <span className="text-[#445166] md:text-ink-secondary">Kubernetes Platform</span>
                </h1>
                <p className="text-[16px] md:text-xl text-[#445166] md:text-ink-secondary max-w-lg leading-normal md:leading-relaxed">
                  Developer platform without the hassle. Build, run and release applications on a best-in-class platform. Skyhook automatically orchestrates, customizes and configures all the leading tools.
                </p>
              </div>
            </FadeIn>


            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Button href="/demo" className="max-md:px-4 max-md:py-2 max-md:text-sm">Get a demo</Button>
                <Button href="/signup" variant="secondary" className="max-md:px-4 max-md:py-2 max-md:text-sm">Start deploying</Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <blockquote className="mt-8 border-l-2 border-accent pl-4">
                <p className="text-lg italic text-ink-secondary">
                  &quot;It&apos;s like Vercel for Kubernetes&quot;
                </p>
              </blockquote>
            </FadeIn>
          </FadeInStagger>

          {/* Mobile Illustration */}
          <FadeIn delay={0.4} className="block lg:hidden w-[calc(100%+32px)] mx-[-16px]">
            <img
              src="/images/hero-illustration-mobile.svg"
              alt="Skyhook Platform"
              className="w-full h-auto"
            />
          </FadeIn>

          {/* Desktop Illustration */}
          <FadeIn delay={0.4} className="relative w-full hidden lg:block lg:scale-150 lg:origin-center">
            <img
              src="/images/heroes/hero-illustration.svg"
              alt="Skyhook Platform"
              className="w-full h-auto"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

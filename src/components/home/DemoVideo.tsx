"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function DemoVideo() {
  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-4">
              See Skyhook in action
            </h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              Watch how Skyhook simplifies your Kubernetes workflow
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative border border-ink-primary shadow-hard bg-background overflow-hidden">
            <video
              src="https://storage.googleapis.com/koala-site-video/koala-website-demo-v2-7.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

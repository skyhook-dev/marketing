"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function DemoVideo() {
  return (
    <section className="py-[25px] md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-[30px] md:text-[50px] font-semibold text-[#101927] leading-[120%] mb-3">
              See Skyhook in action
            </h2>
            <p className="text-[16px] md:text-[18px] font-normal text-[#445166] leading-normal max-w-2xl mx-auto">
              Watch how Skyhook simplifies your Kubernetes workflow
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center">
            <div
              className="flex flex-col justify-center items-center p-6 rounded-[18px] w-full max-w-[1211.164px]"
              style={{
                background: "linear-gradient(144deg, #2D7BFF 21.06%, rgba(255, 255, 255, 0.00) 82.81%), #A2C4FF",
                boxShadow: "0px 55px 250px 0px rgba(45, 122, 255, 0.17)",
                minHeight: "auto" // Allow height to be responsive
              }}
            >
              <div
                className="relative overflow-hidden bg-white rounded-[6px] w-full"
                style={{
                  maxWidth: "1157.977px",
                  aspectRatio: "1157.977 / 622.816",
                  boxShadow: "0px 9px 24px 0px rgba(45, 122, 255, 0.35)"
                }}
              >
                <video
                  src="https://storage.googleapis.com/koala-site-video/koala-website-demo-v2-7.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex justify-center mt-10">
            <Button
              href="https://demo.skyhook.io"
              size="lg"
              external
            >
              Try Live Demo
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

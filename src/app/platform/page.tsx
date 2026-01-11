
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";
import { ValuePropsGrid } from "@/components/shared/ValuePropsGrid";
import { SDLCPipeline } from "@/components/home/SDLCPipeline";
import { WhatIsSkyhook } from "@/components/platform/WhatIsSkyhook";

export const metadata: Metadata = {
  title: "Platform",
  description: "A Kubernetes platform that’s all set. Today",
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden -mt-16">
      {/* Background Decoration */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          width: '2529.492px',
          height: '1026.095px',
          transform: 'rotate(17.015deg)',
          borderRadius: '2529.492px',
          background: '#2D7AFF',
          filter: 'blur(302px)',
          top: '-220px',
          left: '50%',
          marginLeft: '-1265px',
          opacity: '0.1'
        }}
      />
      <div className="relative z-10">
        {/* Header */}
        <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 pt-32 md:pt-32 md:pt-48 pb-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col items-start gap-6 flex-1 text-left">
              {/* Small Title */}
              <span className="text-[#445166] font-medium text-lg md:text-xl tracking-wide">
                Great devOps, ready to roll
              </span>

              {/* Title */}
              <h1
                className="text-[#101927] font-semibold leading-[110%] text-[36px] md:text-[60px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                A Kubernetes platform that’s all set. Today
              </h1>

              {/* Subtitle */}
              <p
                className="text-[#445166] font-normal leading-normal max-w-xl text-lg md:text-xl"
                style={{ fontFamily: '"DM Sans"' }}
              >
                Skyhook supports all your internal developer platform needs, from platform set-up through migration and large scale deployments. It’s the DevOps automation you’ve always needed.
              </p>

              {/* CTAs */}
              <div className="flex gap-4 mt-2">
                <Button href="/demo">Get a demo</Button>
                <Button href="https://app.skyhook.io" variant="secondary" external>Start deploying</Button>
              </div>
            </div>

            {/* Header Image */}
            <div className="flex-1 flex justify-center items-center">
              <img src="/images/for-dev/Dev-image.svg" alt="Platform" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* What is Skyhook */}
        <WhatIsSkyhook />

        {/* Why Choose Skyhook */}
        <ValuePropsGrid className="!bg-transparent" />

        {/* SDLC */}
        <div className="bg-transparent">
          <SDLCPipeline
            title="Our platform covers the entire SDLC"
            subtitle=""
          />
        </div>

        {/* Easy to get started */}
        <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 py-12">
          <div className="bg-[#F6FAFF] rounded-2xl p-12 md:p-24 text-center">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              <h2
                className="text-[#101927] font-semibold leading-[110%] text-[30px] md:text-[40px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                Easy to get started and to migrate from
              </h2>
              <p className="text-[#445166] text-lg md:text-xl leading-relaxed">
                It’s easy to start using Skyhook and it’s also easy to stop using it since there is no PaaS lock-in.
              </p>
            </div>
          </div>
        </div>

        {/* AI-ready */}
        <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 py-12 md:py-12 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 flex flex-col gap-6 items-start text-left">
              <h2
                className="text-[#101927] font-semibold leading-[110%] text-[32px] md:text-[50px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                AI-ready
              </h2>
              <p className="text-[#445166] text-lg md:text-xl leading-relaxed">
                Skyhook’s platform is set up to provide the right context to be used by your MCP server, so you can set up ai-driven developer self-service quickly and easily.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/images/platform/ai agent/ai-agent-1.svg" alt="AI Ready" className="h-auto" />
            </div>
          </div>
        </div>

        <CTA />
      </div>
    </div>
  );
}

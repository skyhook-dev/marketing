import { Hero } from "@/components/home/Hero";
import { Logos } from "@/components/home/Logos";
import { PlatformApproach } from "@/components/home/PlatformApproach";
import { DemoVideo } from "@/components/home/DemoVideo";
import { ValueProps } from "@/components/home/ValueProps";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { SDLCPipeline } from "@/components/home/SDLCPipeline";
import { AIAgent } from "@/components/home/AIAgent";
import { Integrations } from "@/components/home/Integrations";
import { Steps } from "@/components/home/Steps";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Logos />
      <PlatformApproach />
      <DemoVideo />
      <ValueProps />
      <AudienceSplit />
      <SDLCPipeline />
      <AIAgent />
      <Integrations />
      <Steps />
      <CTA />
    </div>
  );
}

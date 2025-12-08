import { Hero } from "@/components/home/Hero";
import { Logos } from "@/components/home/Logos";
import { PlatformApproach } from "@/components/home/PlatformApproach";
import { DemoVideo } from "@/components/home/DemoVideo";
import { ValueProps } from "@/components/home/ValueProps";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { SDLCPipeline } from "@/components/home/SDLCPipeline";
import { AIAgent } from "@/components/home/AIAgent";
import { Steps } from "@/components/home/Steps";
import { CTA } from "@/components/CTA";
import { FadeOnExit } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col">
      <FadeOnExit>
        <Hero />
      </FadeOnExit>
      <FadeOnExit>
        <Logos />
      </FadeOnExit>
      <FadeOnExit>
        <DemoVideo />
      </FadeOnExit>
      <FadeOnExit>
        <PlatformApproach />
      </FadeOnExit>
      <AudienceSplit />
      <FadeOnExit>
        <ValueProps />
      </FadeOnExit>
      <FadeOnExit>
        <SDLCPipeline />
      </FadeOnExit>
      <FadeOnExit>
        <AIAgent />
      </FadeOnExit>
      <FadeOnExit>
        <Steps />
      </FadeOnExit>
      <CTA />
    </div>
  );
}

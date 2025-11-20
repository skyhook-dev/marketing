import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { Check } from "lucide-react";

export function PlatformApproach() {
  const approaches = [
    "You own the platform stack. We build, orchestrate and manage it for you",
    "You retain the flexibility to change/extend any of the tools that make up the platform",
    "Mix and match the tools you love",
    "Works on AWS, Azure or GCP, or your own cloud",
  ];

  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary">
                Instant developer platform with no lock-in or PaaS tradeoff
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed">
                You're one click away from the automation, infrastructure, rollout and dev tools you need. Deliver reusable, standardized actions and views, instantly and without the lock-in of Platform-as-a-Service.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-surface border border-ink-primary shadow-hard p-8">
              <h3 className="text-lg font-semibold text-ink-primary mb-6">
                The Skyhook approach
              </h3>
              <ul className="space-y-4">
                {approaches.map((approach, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-accent" strokeWidth={2} />
                    </div>
                    <span className="text-ink-secondary">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

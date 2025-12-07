import { FadeIn } from "@/components/ui/FadeIn";

export function PlatformApproach() {
  const approaches = [
    "You own the platform stack. We build, orchestrate and manage it for you",
    "You retain the flexibility to change/extend any of the tools that make up the platform",
    "Mix and match the tools you love",
    "Works on AWS, Azure or GCP, or your own cloud",
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Title and Subtitle Container */}
          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto mb-16 text-center">
            <h2 className="heading-lg">
              Instant developer platform with no lock-in or PaaS tradeoff
            </h2>
            <p className="text-body text-lg text-cancel-balance">
              You&apos;re one click away from the automation, infrastructure, rollout and dev tools you need. Deliver reusable, standardized actions and views, instantly and without the lock-in of Platform-as-a-Service.
            </p>
          </div>

          {/* Skyhook Approach Image */}
          <div className="flex justify-center mb-16 relative">
             {/* Subtle backdrop glow */}
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-95 -z-10" />
            <img
              src="/images/skyhook-approach.svg"
              alt="Skyhook Approach"
              className="max-w-full h-auto drop-shadow-lg"
            />
          </div>

          {/* The Skyhook Approach Section */}
          <div className="flex flex-col gap-8 max-w-7xl mx-auto">
            <h3 className="heading-md text-center w-full">
              The Skyhook Approach
            </h3>

            {/* Bento Grid Layout - Premium Feel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approaches.map((approach, index) => (
                <div
                    key={index}
                    className="group flex flex-col items-center text-center md:items-start md:text-left p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-hard hover:border-accent/40 transition-all duration-300 ease-in-out hover:-translate-y-1"
                >
                    {/* Decorative dash - adds a 'tech' feel */}
                    <div className="w-8 h-1 bg-accent/20 rounded-full mb-4 group-hover:bg-accent transition-colors duration-300" />
                    
                    <p className="text-ink-secondary text-lg font-medium leading-snug group-hover:text-ink-primary transition-colors">
                    {approach}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

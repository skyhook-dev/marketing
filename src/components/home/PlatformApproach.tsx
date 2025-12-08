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
          <div className="flex flex-col items-center gap-10 max-w-[935px] mx-auto mb-10">
            <h2 className="text-4xl md:text-[50px] font-semibold text-[#101927] leading-[120%] text-center">
              Instant developer platform with no lock-in or PaaS tradeoff
            </h2>
            <p className="text-[18px] font-normal text-[#445166] leading-normal text-center">
              You&apos;re one click away from the automation, infrastructure, rollout and dev tools you need. Deliver reusable, standardized actions and views, instantly and without the lock-in of Platform-as-a-Service.
            </p>
          </div>

          {/* Skyhook Approach Image */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/skyhook-approach.svg"
              alt="Skyhook Approach"
              className="max-w-full h-auto"
            />
          </div>

          {/* The Skyhook Approach Section */}
          <div className="flex flex-col items-start gap-8 max-w-[1310px] mx-auto">
            <h3 className="text-[30px] font-semibold text-[#101927] leading-normal text-center w-full">
              The Skyhook Approach
            </h3>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {approaches.map((approach, index) => (
                <div
                  key={index}
                  className="flex p-[30px_20px] items-start gap-2.5 rounded-xl bg-[#F6FAFF]"
                >
                  <p className="text-[#445166] text-center text-[18px] font-normal leading-normal">
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

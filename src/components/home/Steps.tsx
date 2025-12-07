"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    id: 1,
    image: "/images/number 1.svg",
    title: "Connect to your cloud",
    description: "Connect your existing clusters, or use skyhook to spin up production-grade clusters for you with the DevOps tools you need."
  },
  {
    id: 2,
    image: "/images/number 2.svg",
    title: "Automate deployments",
    description: "Deploy quickly and with confidence. Modern CI/CD best practices, with GitOps support, gradual and secure deployment pipelines and environment management."
  },
  {
    id: 3,
    image: "/images/number 3.svg",
    title: "Scale and Optimize",
    description: "Effortlessly scale and optimize cost, incorporating advanced monitoring, and incident management systems."
  }
];

export function Steps() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center gap-16 w-full">
            {/* Top Part */}
            <div className="flex flex-col items-center gap-8 w-full">
              {/* Kubernetes Inside Image - Add hover animation */}
              <div className="hover-lift transition-transform duration-300">
                <img
                    src="/images/kubernetes-inside.svg"
                    alt="Kubernetes Inside"
                    className="w-auto h-auto drop-shadow-sm"
                />
              </div>

              {/* Title and Subtitle */}
              <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
                <h2 className="heading-lg tracking-tight">
                  Kubernetes inside, abstracted
                </h2>
                <p className="text-body text-lg text-cancel-balance">
                  Skyhook has the right balance between simplicity and flexibility, so you can provide the abstractions developers need with the control devops need. When platform engineers need to go deeper and define advanced requirements, we make it easy.
                </p>
              </div>
            </div>

            {/* Middle Part - Line */}
            <div className="w-full max-w-xs border-t border-border" />

            {/* Steps Section */}
            <div className="flex flex-col items-center gap-12 w-full">
                <h3 className="heading-md">
                    Up and running in no time
                </h3>

                {/* Bottom Part - 3 Boxes - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full">
                {steps.map((step) => (
                    <div
                    key={step.id}
                    className="flex flex-col items-center text-center gap-4 group"
                    >
                    <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        <img
                            src={step.image}
                            alt={`Step ${step.id}`}
                            className="w-16 h-16 md:w-20 md:h-20"
                        />
                    </div>
                    <div className="space-y-3 w-full flex flex-col items-center">
                        <h4 className="text-xl font-semibold text-ink-primary text-center">
                            {step.title}
                        </h4>
                        <p className="text-body leading-relaxed text-center max-w-sm mx-auto">
                            {step.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

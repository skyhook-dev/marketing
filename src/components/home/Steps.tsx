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
          <div className="inline-flex flex-col items-center gap-[54px] w-full">
            {/* Top Part */}
            <div className="flex flex-col items-center gap-6 w-full">
              {/* Kubernetes Inside Image */}
              <img
                src="/images/kubernetes-inside.svg"
                alt="Kubernetes Inside"
                className="w-auto h-auto"
              />

              {/* Title and Subtitle */}
              <div className="flex flex-col items-center gap-3 w-full">
                <h2 className="text-4xl md:text-[50px] font-semibold text-[#101927] text-center leading-[120%]">
                  Kubernetes inside, abstracted
                </h2>
                <p className="text-[18px] font-normal text-[#445166] text-center leading-normal max-w-4xl">
                  Skyhook has the right balance between simplicity and flexibility, so you can provide the abstractions developers need with the control devops need. When platform engineers need to go deeper and define advanced requirements, we make it easy.
                </p>
              </div>
            </div>

            {/* Middle Part - Line */}
            <div
              className="w-[300px] border-t border-[#E5E5E5]"
              style={{ height: 0, strokeWidth: '1px' }}
            />

            {/* Title */}
            <h3 className="text-[30px] font-semibold text-[#101927] text-center leading-normal">
              Up and running in no time
            </h3>

            {/* Bottom Part - 3 Boxes - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] w-full justify-items-center">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center gap-4 w-full max-w-[300px]"
                >
                  <img
                    src={step.image}
                    alt={`Step ${step.id}`}
                    className="w-auto h-auto"
                  />
                  <h4 className="text-[18px] font-semibold text-[#101927] text-center leading-normal">
                    {step.title}
                  </h4>
                  <p className="text-[16px] font-normal text-[#445166] text-center leading-[140%]">
                    {step.description}
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

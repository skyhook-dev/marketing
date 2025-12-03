import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

type ValueProp = {
  title: string;
  description: string;
  image: string;
};

const valueProps: ValueProp[] = [
  {
    title: "Best Practices Out-of-the-Box",
    description: "Do work right with monitoring, rollout strategies, ephemeral environments and secret management.",
    image: "/images/shield.svg",
  },
  {
    title: "No Lock-in",
    description: "Retain full control with no dependencies on specific cloud providers or third-party tools. Migrating away is easy, unlike with PaaS.",
    image: "/images/lock.svg",
  },
  {
    title: "Start and scale quickly",
    description: "Get started in minutes, not days, with our fully configured environment. We grow with your needs, regardless of your engineering group size.",
    image: "/images/bolt.svg",
  },
  {
    title: "Kubernetes based",
    description: "Simplify Kubernetes for developers and make its management easy for DevOps.",
    image: "/images/kubernetes.svg",
  },
  {
    title: "Best tools",
    description: "Skyhook has built-in support for the top tools in the Kubernetes ecosystem.",
    image: "/images/wrench.svg",
  },
  {
    title: "Flexible",
    description: "Because it's just Kubernetes under the hood, all the advanced functionality is readily available when you need it.",
    image: "/images/balls.svg",
  },
];

type ValuePropsGridProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export function ValuePropsGrid({
  title = "Why Choose Skyhook?",
  subtitle = "Like an internal developer portal without the K8s platform setup",
  className = "",
}: ValuePropsGridProps) {
  return (
    <section className={`py-24 bg-background ${className}`}>
      <div className="max-w-[1310px] mx-auto">
        <FadeIn>
          <div className="flex flex-col items-start gap-[50px] p-[60px] rounded-2xl bg-[#F6FAFF]">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch">
              <h2 className="text-[50px] font-semibold text-[#101927] leading-[120%]">
                {title}
              </h2>
              <p className="text-[18px] font-normal text-[#445166] leading-normal">
                {subtitle}
              </p>
            </div>

            {/* Grid */}
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 w-full">
              {valueProps.map((prop) => (
                <FadeIn key={prop.title}>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center justify-center mb-2">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-[72.6px] h-[81.68px] object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[18px] font-semibold text-[#101927] leading-normal">
                        {prop.title}
                      </h3>
                      <p className="text-[16px] font-normal text-[#445166] leading-normal">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

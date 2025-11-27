import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import {
  Shield,
  Boxes,
  Unlock,
  Wrench,
  Zap,
  Settings,
  LucideIcon,
} from "lucide-react";

type ValueProp = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const valueProps: ValueProp[] = [
  {
    title: "Best Practices Out-of-the-Box",
    description: "Do work right with monitoring, rollout strategies, ephemeral environments and secret management.",
    icon: Shield,
  },
  {
    title: "No Lock-in",
    description: "Retain full control with no dependencies on specific cloud providers or third-party tools. Migrating away is easy, unlike with PaaS.",
    icon: Unlock,
  },
  {
    title: "Start and scale quickly",
    description: "Get started in minutes, not days, with our fully configured environment. We grow with your needs, regardless of your engineering group size.",
    icon: Zap,
  },
  {
    title: "Kubernetes based",
    description: "Simplify Kubernetes for developers and make its management easy for DevOps.",
    icon: Boxes,
  },
  {
    title: "Best tools",
    description: "Skyhook has built-in support for the top tools in the Kubernetes ecosystem.",
    icon: Wrench,
  },
  {
    title: "Flexible",
    description: "Because it's just Kubernetes under the hood, all the advanced functionality is readily available when you need it.",
    icon: Settings,
  },
];

type ValuePropsGridProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export function ValuePropsGrid({
  title = "Why Choose Skyhook?",
  subtitle = "It's easy to try, easy to get to work and doesn't pose the lock-in risk that's inherent in PaaS or non Kubernetes platforms.",
  className = "",
}: ValuePropsGridProps) {
  return (
    <section className={`py-24 bg-surface border-b border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-6">
              {title}
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <FadeIn key={prop.title}>
                <div className="flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-primary mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}

import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

const integrationCategories = [
  {
    title: "Git Repositories",
    items: [
      { name: "GitHub", logo: "/images/integrations/github.svg" },
      { name: "GitLab", logo: "/images/integrations/gitlab.svg" },
      { name: "Bitbucket", logo: "/images/integrations/bitbucket.svg" },
    ]
  },
  {
    title: "Cloud Providers",
    items: [
      { name: "AWS", logo: "/images/integrations/aws.svg" },
      { name: "GCP", logo: "/images/integrations/gcp.svg" },
      { name: "Azure", logo: "/images/integrations/azure.svg" },
    ]
  },
  {
    title: "Kubernetes Ecosystem",
    items: [
      { name: "Kubernetes", logo: "/images/integrations/kubernetes.svg", emphasized: true },
      { name: "Argo CD", logo: "/images/integrations/argocd.svg", emphasized: true },
      { name: "Helm", logo: "/images/integrations/helm.svg" },
      { name: "HashiCorp", logo: "/images/integrations/hashicorp.svg" },
      { name: "Kustomize", logo: "/images/integrations/kustomize.svg" },
      { name: "Nginx", logo: "/images/integrations/nginx.svg" },
    ]
  },
  {
    title: "Observability",
    items: [
      { name: "Grafana", logo: "/images/integrations/grafana.svg" },
      { name: "Prometheus", logo: "/images/integrations/prometheus.svg" },
      { name: "OpenTelemetry", logo: "/images/integrations/opentelemetry.svg" },
      { name: "Datadog", logo: "/images/integrations/datadog.svg" },
      { name: "Elastic", logo: "/images/integrations/elastic.svg" },
    ]
  }
];

export function Integrations() {
  return (
    <section className="py-[25px] md:py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[30px] md:text-4xl font-semibold tracking-tight text-[#101927] md:text-ink-primary leading-[120%] md:leading-tight mb-4">
              Integrates with the tools you love
            </h2>
            <p className="text-[16px] md:text-lg text-[#445166] md:text-ink-secondary leading-normal max-w-2xl mx-auto">
              Skyhook has built-in support for the top tools in the Kubernetes ecosystem. Mix and match to build your perfect platform.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="space-y-12">
          {integrationCategories.map((category) => (
            <FadeIn key={category.title}>
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-ink-secondary mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className={`
                        flex flex-col items-center justify-center p-4 bg-surface border
                        ${item.emphasized ? 'border-accent shadow-hard' : 'border-border'}
                        hover:border-ink-primary transition-colors
                      `}
                    >
                      <div className="w-10 h-10 flex items-center justify-center mb-2">
                        {/* Logo placeholder - replace with actual logos when available */}
                        <div className="w-8 h-8 bg-ink-primary/10 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-ink-secondary">
                            {item.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-ink-secondary text-center">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

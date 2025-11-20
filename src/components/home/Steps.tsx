import { Cloud, GitBranch, BarChart3 } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export function Steps() {
  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-6">
              Kubernetes inside, abstracted
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed mb-8">
              Skyhook has the right balance between simplicity and flexibility, so you can provide the abstractions developers need with the control devops need. When platform engineers need to go deeper and define advanced requirements, we make it easy.
            </p>
            <div className="h-px bg-border w-24 mx-auto mb-8" />
            <h3 className="text-2xl font-semibold text-ink-primary mb-4">
              Up and running in no time
            </h3>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden md:block -z-10" />

          {/* Step 1 */}
          <FadeIn>
            <div className="flex flex-col items-center text-center bg-surface">
               <div className="w-16 h-16 bg-background border border-ink-primary shadow-hard flex items-center justify-center mb-6 z-10">
                <span className="font-mono text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-ink-primary mb-4 flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  Connect to your cloud
              </h3>
              <p className="text-ink-secondary leading-relaxed">
                Connect your existing clusters, or use skyhook to spin up production-grade clusters for you with the DevOps tools you need.
              </p>
            </div>
          </FadeIn>

          {/* Step 2 */}
          <FadeIn>
            <div className="flex flex-col items-center text-center bg-surface">
              <div className="w-16 h-16 bg-background border border-ink-primary shadow-hard flex items-center justify-center mb-6 z-10">
                <span className="font-mono text-xl font-bold">2</span>
              </div>
               <h3 className="text-xl font-bold text-ink-primary mb-4 flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Automate deployments
              </h3>
              <p className="text-ink-secondary leading-relaxed">
                Deploy quickly and with confidence. Modern CI/CD best practices, with GitOps support, gradual and secure deployment pipelines and environment management.
              </p>
            </div>
          </FadeIn>

          {/* Step 3 */}
          <FadeIn>
            <div className="flex flex-col items-center text-center bg-surface">
               <div className="w-16 h-16 bg-background border border-ink-primary shadow-hard flex items-center justify-center mb-6 z-10">
                <span className="font-mono text-xl font-bold">3</span>
              </div>
               <h3 className="text-xl font-bold text-ink-primary mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Scale and Optimize
              </h3>
              <p className="text-ink-secondary leading-relaxed">
                Effortlessly scale and optimize cost, incorporating advanced monitoring, and incident management systems.
              </p>
            </div>
          </FadeIn>
        </FadeInStagger>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { GitPullRequest, ShieldCheck, LayoutDashboard, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Skyhook solutions: preview environments, rollout strategies, service catalog, and auto-scaling. Everything you need to build, deploy, and scale on Kubernetes.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-primary mb-6">
            Solutions
          </h1>
          <p className="text-xl text-ink-secondary max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale on Kubernetes.
            Without the complexity.
          </p>
        </div>

        <div className="space-y-24">
          {/* Preview Environments */}
          <section id="preview-envs" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-surface border border-border rounded-lg shadow-hard">
                    <GitPullRequest className="w-6 h-6 text-ink-primary" />
                  </div>
                  <h2 className="text-3xl font-semibold text-ink-primary">Preview Environments</h2>
                </div>
                <p className="text-lg text-ink-secondary leading-relaxed">
                  Automatically spin up a production-like environment for every pull request. No scripts, no waiting, and full environment parity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Isolated clone of production
                  </li>
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Unique URL for every PR
                  </li>
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Automatic teardown on merge
                  </li>
                </ul>
              </div>
              <BlueprintCard className="bg-surface">
                <TerminalBlock 
                  filename="pr-comment.md"
                  language="markdown"
                  code={`### ✅ Preview Environment Ready
                
| Service | Status | URL |
|:---|:---|:---|
| Web App | 🟢 Ready | [pr-123.skyhook.app](...) |
| API | 🟢 Ready | [api-pr-123.skyhook.app](...) |`}
                />
              </BlueprintCard>
            </div>
          </section>

          {/* Rollout Strategies */}
          <section id="rollout" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <BlueprintCard className="bg-surface order-2 lg:order-1">
                 <div className="p-6 space-y-6">
                    <div className="border border-border bg-background p-4 space-y-4">
                        <div className="flex items-center justify-between text-sm">
                        <span>Canary Weight</span>
                        <span className="font-mono">25%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                        <div className="h-full bg-accent w-[25%]" />
                        <div className="h-full bg-gray-300 w-[75%]" />
                        </div>
                        <div className="flex justify-between text-xs text-ink-secondary font-mono">
                        <span>v2.0.1 (New)</span>
                        <span>v2.0.0 (Stable)</span>
                        </div>
                    </div>
                 </div>
              </BlueprintCard>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-surface border border-border rounded-lg shadow-hard">
                    <ShieldCheck className="w-6 h-6 text-ink-primary" />
                  </div>
                  <h2 className="text-3xl font-semibold text-ink-primary">Rollout Strategies</h2>
                </div>
                <p className="text-lg text-ink-secondary leading-relaxed">
                  Minimize deployment risk. Gradually shift traffic between versions using Canary or Blue-Green strategies.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Traffic splitting
                  </li>
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Automated rollbacks
                  </li>
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Integration with Argo Rollouts
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Catalog */}
          <section id="service-catalog" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-surface border border-border rounded-lg shadow-hard">
                    <LayoutDashboard className="w-6 h-6 text-ink-primary" />
                  </div>
                  <h2 className="text-3xl font-semibold text-ink-primary">Service Catalog</h2>
                </div>
                <p className="text-lg text-ink-secondary leading-relaxed">
                  A unified catalog for all your microservices. Track ownership, dependencies, and health in one place.
                </p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Centralized service registry
                  </li>
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Self-service actions
                  </li>
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Golden paths
                  </li>
                </ul>
              </div>
              <BlueprintCard className="bg-surface">
                 <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="border border-border p-4 bg-background shadow-sm">
                        <div className="w-8 h-8 bg-blue-100 rounded mb-3" />
                        <div className="h-2 w-20 bg-gray-200 rounded mb-2" />
                        <div className="h-2 w-12 bg-gray-100 rounded" />
                    </div>
                    <div className="border border-border p-4 bg-background shadow-sm">
                        <div className="w-8 h-8 bg-purple-100 rounded mb-3" />
                        <div className="h-2 w-20 bg-gray-200 rounded mb-2" />
                        <div className="h-2 w-12 bg-gray-100 rounded" />
                    </div>
                     <div className="border border-border p-4 bg-background shadow-sm">
                        <div className="w-8 h-8 bg-green-100 rounded mb-3" />
                        <div className="h-2 w-20 bg-gray-200 rounded mb-2" />
                        <div className="h-2 w-12 bg-gray-100 rounded" />
                    </div>
                     <div className="border border-border p-4 bg-background shadow-sm">
                        <div className="w-8 h-8 bg-orange-100 rounded mb-3" />
                        <div className="h-2 w-20 bg-gray-200 rounded mb-2" />
                        <div className="h-2 w-12 bg-gray-100 rounded" />
                    </div>
                  </div>
              </BlueprintCard>
            </div>
          </section>

          {/* Auto-Scaling */}
          <section id="scaling" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <BlueprintCard className="bg-surface order-2 lg:order-1">
                  <div className="relative h-48 border-b border-l border-border m-6">
                    <svg className="absolute inset-0 w-full h-full text-accent" preserveAspectRatio="none">
                        <path d="M0,100 L20,90 L40,95 L60,60 L80,50 L100,20 L120,30 L140,10 L160,40 L180,80 L200,90" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M0,100 L200,100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-gray-300" />
                    </svg>
                    <div className="absolute top-0 right-0 bg-accent text-white text-xs px-2 py-1">Scale Up</div>
                  </div>
              </BlueprintCard>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-surface border border-border rounded-lg shadow-hard">
                    <BarChart3 className="w-6 h-6 text-ink-primary" />
                  </div>
                  <h2 className="text-3xl font-semibold text-ink-primary">Auto-Scaling</h2>
                </div>
                <p className="text-lg text-ink-secondary leading-relaxed">
                  Right-size your platform. Scale up during traffic surges and scale down to zero to save costs.
                </p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Horizontal Pod Autoscaling (HPA)
                  </li>
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Vertical Pod Autoscaling (VPA)
                  </li>
                  <li className="flex items-center gap-2 text-ink-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Cluster Autoscaling
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

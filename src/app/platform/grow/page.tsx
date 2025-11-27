import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp, Server, Maximize, Globe, ArrowUpRight, Network } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export default function GrowPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20">
            <Badge variant="accent" className="mb-6">
              <TrendingUp className="w-4 h-4" />
              Platform Feature
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
              Grow with Skyhook
            </h1>
            <p className="text-xl text-ink-secondary max-w-3xl leading-relaxed">
              Skyhook seamlessly scales your infrastructure and processes, so you can easily deal with more traffic, more services and more team members. Because Skyhook builds on Kubernetes, you can scale out across clusters or clouds confidently, knowing you won’t hit a proprietary ceiling or be stuck with vendor lock-in.
            </p>
          </div>
        </FadeIn>

        {/* How It Works - Below fold: Slide Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
           <div className="space-y-12">
              <FadeIn direction="up">
                 <h2 className="text-3xl font-bold text-ink-primary mb-8">How It Works</h2>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <ArrowUpRight className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Horizontal Scaling</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Increase the replica count of your services with a simple configuration change or let the system handle it automatically. When load drops, Skyhook can scale back down.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Maximize className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Vertical Scaling</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Adjust resources allotted to each application. Through Skyhook, you can bump up CPU or memory limits if a service needs more horsepower. Kubernetes will reallocate and ensure the app gets the needed resources, allowing you to fine-tune performance as usage grows.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Server className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Cluster Scaling & Multi-Cluster</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             If one cluster runs out of capacity, Skyhook adds more nodes (in cloud environments) or easily connecting additional clusters. The platform isn’t tied to one cloud – you can grow from a single cluster to multiple clusters across regions or providers as demand requires.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Network className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Service Discovery & Organization</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             As you add more microservices or modules, Skyhook helps organize them. Built-in service discovery means new services can find each other without custom wiring, even as the ecosystem grows complex.
                          </p>
                       </div>
                    </div>
                 </div>
              </FadeIn>
           </div>

           {/* Right Column / Diagram */}
           <FadeIn delay={0.2} direction="up" className="lg:pt-16">
              <BlueprintCard className="bg-surface min-h-[500px] flex items-center justify-center">
                 <div className="text-center space-y-6 opacity-70">
                     <div className="font-mono text-xs uppercase tracking-widest">Multi-Cluster Federation</div>
                     <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto stroke-ink-primary fill-none">
                        {/* Cluster A */}
                        <rect x="20" y="40" width="80" height="120" strokeWidth="1" />
                        <text x="60" y="30" textAnchor="middle" fontSize="10" stroke="none" fill="currentColor">US-EAST</text>
                         <rect x="30" y="50" width="20" height="20" strokeWidth="1" />
                         <rect x="60" y="50" width="20" height="20" strokeWidth="1" />
                         <rect x="30" y="80" width="20" height="20" strokeWidth="1" />
                         <rect x="60" y="80" width="20" height="20" strokeWidth="1" />

                        {/* Cluster B */}
                        <rect x="200" y="40" width="80" height="120" strokeWidth="1" />
                        <text x="240" y="30" textAnchor="middle" fontSize="10" stroke="none" fill="currentColor">EU-WEST</text>
                         <rect x="210" y="50" width="20" height="20" strokeWidth="1" />
                         <rect x="240" y="50" width="20" height="20" strokeWidth="1" />
                         <rect x="210" y="80" width="20" height="20" strokeWidth="1" />
                         <rect x="240" y="80" width="20" height="20" strokeWidth="1" />

                        {/* Connection */}
                        <path d="M100 100 L200 100" strokeWidth="1" strokeDasharray="4 4" />
                        <circle cx="150" cy="100" r="15" fill="white" strokeWidth="1" />
                        <path d="M145 100 L155 100 M150 95 L150 105" strokeWidth="2" />
                     </svg>
                 </div>
              </BlueprintCard>
           </FadeIn>
        </div>

        {/* Features Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <BlueprintCard title="Automatic Pod Autoscaling">
                <div className="flex items-start gap-3 mb-4">
                  <ArrowUpRight className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Leverage Kubernetes autoscaling to handle varying workloads. Define metrics (CPU, memory, or custom metrics) for your services, and Skyhook will automatically increase or decrease the number of pods to maintain performance.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Multi-Region Deployments">
                <div className="flex items-start gap-3 mb-4">
                  <Globe className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Run your application closer to your users by deploying in multiple geographic regions. Skyhook supports configuring deployments in different regions and routing users accordingly, improving latency and redundancy for global scale.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Usage Analytics">
                <div className="flex items-start gap-3 mb-4">
                  <Server className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Track growth with built-in metrics on resource usage and application performance. Identify which services are nearing capacity or which times of day see peak traffic. These insights help with capacity planning and optimizing costs as you scale up.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
        </FadeInStagger>

         <FadeIn direction="up" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Easy Cluster Expansion</h4>
                <p className="text-ink-secondary text-sm">When you need more compute power, add nodes to your cluster or attach a new cluster. Skyhook can deploy to multiple clusters from one control plane, allowing for hybrid or multi-cloud growth without changing your workflow.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Extensible Architecture</h4>
                <p className="text-ink-secondary text-sm">Skyhook is Kubernetes-native, meaning you can plug in custom operators, service meshes, or other CNCF ecosystem tools as you grow. The platform won’t box you in – it works with the broader cloud-native ecosystem.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Governance at Scale</h4>
                <p className="text-ink-secondary text-sm">Manage growing complexity with features like policy enforcement and auditing. Ensure that even as your team and infrastructure expand, everything stays compliant and under control through unified policies and logs.</p>
             </div>
        </FadeIn>

      </div>
    </div>
  );
}

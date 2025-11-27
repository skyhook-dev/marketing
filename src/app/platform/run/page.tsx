import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { Play, Activity, ShieldCheck, RefreshCw, Network, Lock, Server, Scale } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export default function RunPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20">
            <Badge variant="accent" className="mb-6">
              <Play className="w-4 h-4" />
              Platform Feature
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
              Run with Skyhook
            </h1>
            <p className="text-xl text-ink-secondary max-w-3xl leading-relaxed">
              Keep your applications healthy, performant, and secure once they’re deployed. Skyhook’s Kubernetes-native runtime ensures your containers are managed by battle-tested orchestration logic – from automatic restarts on failure to intelligent load balancing. Get the reliability and resilience of Kubernetes without the manual overhead.
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
                          <Server className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Kubernetes Orchestration</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Skyhook creates Kubernetes resources (Deployments, Pods, Services, etc.) on the cluster. Kubernetes schedules your pods on available nodes, taking into account resource needs and optimizing binpacking.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Activity className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Health Management</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Each service can be configured with health checks (readiness and liveness probes). Skyhook will use these to let Kubernetes monitor the app’s health. If a container fails or becomes unresponsive, Kubernetes will mark it unhealthy and restart it or replace it automatically.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Scale className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Scaling & Load Balancing</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             The platform distributes traffic across multiple instances of your service using Kubernetes Services or Ingress. You can also define autoscaling policies so the system adds or removes replicas based on demand.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Secure Separation</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Each service runs in its own isolated environment, enforcing limits on CPU, memory, and network as you specified. Skyhook uses Kubernetes security best practices out of the box.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <RefreshCw className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Continuous Monitoring</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             The runtime constantly collects metrics and status from your applications. Skyhook surfaces this information (like CPU usage, memory, restart counts) in the dashboard. This means you always know how your services are performing in real time.
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
                     <div className="font-mono text-xs uppercase tracking-widest">Run Loop</div>
                     <svg width="250" height="250" viewBox="0 0 250 250" className="mx-auto stroke-ink-primary fill-none">
                        <circle cx="125" cy="125" r="100" strokeWidth="2" strokeDasharray="10 5" className="animate-spin-slow origin-center" />
                        
                        <g transform="translate(125, 125)">
                            <rect x="-20" y="-20" width="40" height="40" strokeWidth="2" fill="white" />
                            <text x="0" y="5" textAnchor="middle" fontSize="10" fontFamily="monospace" stroke="none" fill="black">K8S</text>
                        </g>

                        {/* Orbiting elements */}
                        <g transform="translate(125, 25)">
                            <circle r="15" fill="white" strokeWidth="1"/>
                            <path d="M-5 0 L0 5 L5 -5" strokeWidth="2" />
                        </g>

                         <g transform="translate(225, 125)">
                            <circle r="15" fill="white" strokeWidth="1"/>
                            <rect x="-5" y="-5" width="10" height="10" strokeWidth="1" />
                        </g>
                        
                        <g transform="translate(125, 225)">
                            <circle r="15" fill="white" strokeWidth="1"/>
                            <path d="M-5 0 L5 0 M0 -5 L0 5" strokeWidth="2" />
                        </g>

                        <g transform="translate(25, 125)">
                            <circle r="15" fill="white" strokeWidth="1"/>
                            <circle r="5" strokeWidth="1" />
                        </g>
                     </svg>
                     <p className="text-xs font-mono text-ink-secondary">Reconciling Desired State...</p>
                 </div>
              </BlueprintCard>
           </FadeIn>
        </div>

        {/* Features Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <BlueprintCard title="Self-Healing">
                <div className="flex items-start gap-3 mb-4">
                  <RefreshCw className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     If a container crashes or a node goes offline, the container will restart or reschedule on another node automatically. Your services recover from failures without human intervention.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Traffic Management">
                <div className="flex items-start gap-3 mb-4">
                  <Network className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Built-in load balancing ensures even distribution of requests. You can also implement advanced traffic control (like network policies or service mesh integration) since everything runs on standard Kubernetes – it’s compatible with Istio, Linkerd, or any tool you choose to add.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Secrets & ConfigMaps">
                <div className="flex items-start gap-3 mb-4">
                  <Lock className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Manage configuration and secrets securely. Skyhook lets you inject configs or sensitive values (API keys, credentials) via Kubernetes Secrets and ConfigMaps, so they are available to the app at runtime but not baked into images or code.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
        </FadeInStagger>

         <FadeIn direction="up" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
             <div>
                <h4 className="font-bold text-ink-primary mb-2">High Availability</h4>
                <p className="text-ink-secondary text-sm">Deployments can be spread across multiple nodes for resilience. Even during node maintenance or outages, your app instances remain available on other nodes.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Resource Quotas & Limits</h4>
                <p className="text-ink-secondary text-sm">Prevent any single service from hogging resources. Set CPU and memory limits for each application; Kubernetes will enforce these at runtime. This means more predictable performance and no noisy-neighbor issues.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Rolling Maintenance</h4>
                <p className="text-ink-secondary text-sm">Perform cluster or application maintenance with minimal disruption. For example, update the base image or apply security patches using rolling updates. Skyhook coordinates these changes using Kubernetes controllers to avoid downtime.</p>
             </div>
        </FadeIn>

      </div>
    </div>
  );
}

import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { GitMerge, Shuffle, CheckCircle2 } from "lucide-react";
import { ValueProps } from "@/components/home/ValueProps";
import { FadeIn } from "@/components/ui/FadeIn";

export default function RolloutStrategiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Hero - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20 text-center">
            <Badge variant="accent" className="mb-6">
              <GitMerge className="w-4 h-4" />
              Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
              Minimize Deployment Risk
            </h1>
             <h2 className="text-2xl md:text-3xl text-ink-primary mb-6">
              The rollout capabilities you need
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
              Control rollouts to minimize risk and ensure stability.
            </p>
          </div>
        </FadeIn>

        {/* Content Grid - Below fold: Slide Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <FadeIn direction="up" className="space-y-8">
                <h2 className="text-3xl font-bold text-ink-primary">Rollouts made easy</h2>
                <p className="text-lg text-ink-secondary leading-relaxed">
                    Skyhook uses traffic splitting to gradually increase traffic to new versions based on your requirements and user feedback. It also leverages automated rollbacks to instantly revert to the previous version if predefined thresholds are breached.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                            <Shuffle className="w-5 h-5 text-ink-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-ink-primary mb-1">Quick and controlled</h3>
                            <p className="text-ink-secondary">Skyhook lets you define rollout rules and policies for different environments and service types. It works seamlessly with tools like Argo Rollouts and Istio.</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
            
             <FadeIn direction="up" delay={0.2}>
               <BlueprintCard className="bg-surface min-h-[300px] flex items-center justify-center">
                  <div className="text-center space-y-4 opacity-80">
                      <div className="font-mono text-xs uppercase tracking-widest mb-4">Canary Rollout Visualization</div>
                      <div className="flex items-center justify-center gap-8">
                          <div className="flex flex-col items-center gap-2">
                               <div className="w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center font-mono font-bold">90%</div>
                               <span className="text-xs font-mono">Stable</span>
                          </div>
                           <div className="flex flex-col items-center gap-2">
                               <div className="w-16 h-16 bg-accent/20 border border-accent flex items-center justify-center font-mono font-bold text-accent">10%</div>
                               <span className="text-xs font-mono text-accent">Canary</span>
                          </div>
                      </div>
                      <div className="mt-4 bg-green-100 text-green-800 text-xs px-3 py-1 inline-block border border-green-200 font-mono">
                          Error Rate: 0.0% (Healthy)
                      </div>
                  </div>
              </BlueprintCard>
            </FadeIn>
        </div>

        {/* Section 2 */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
             <FadeIn direction="up" className="order-2 lg:order-1">
                <BlueprintCard className="bg-surface p-8">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-border pb-2">
                            <span className="font-bold text-ink-primary">Deployment Strategy</span>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 border border-blue-200">CANARY</span>
                        </div>
                         <div className="flex items-center justify-between text-sm">
                            <span>Step 1: Set weight 20%</span>
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span>Step 2: Pause (Manual Approval)</span>
                            <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                        </div>
                        <div className="flex items-center justify-between text-sm opacity-50">
                            <span>Step 3: Set weight 50%</span>
                            <span>Pending</span>
                        </div>
                         <div className="flex items-center justify-between text-sm opacity-50">
                            <span>Step 4: Set weight 100%</span>
                            <span>Pending</span>
                        </div>
                    </div>
                </BlueprintCard>
             </FadeIn>
            <FadeIn direction="up" delay={0.2} className="space-y-8 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-ink-primary">The rollout strategy you need, without the work</h2>
                <p className="text-lg text-ink-secondary leading-relaxed">
                    Gradual, targeted and safe deployments are crucial for success, but actually doing this requires devops effort you may not be able to support. Free your platform and ops people to focus on what matters most and leverage Skyhook’s rollout strategies support.
                </p>
                 <h3 className="text-2xl font-bold text-ink-primary">A developer interface for easy canary deployments</h3>
                <p className="text-lg text-ink-secondary leading-relaxed">
                    Skyhook is an easy way to abstract and simplify self-service for developers. Using it you can build the internal developer platform that will let developers focus on writing code rather than struggle rollout or the fact that it’s difficult to set them up.
                </p>
            </FadeIn>
         </div>
      </div>

      <ValueProps />
    </div>
  );
}

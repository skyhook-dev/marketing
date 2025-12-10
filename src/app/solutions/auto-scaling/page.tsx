import { Metadata } from "next";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { Scale, TrendingUp } from "lucide-react";
import { ValueProps } from "@/components/home/ValueProps";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Auto Scaling",
  description: "Right-size your Kubernetes infrastructure automatically. Skyhook handles horizontal and vertical pod autoscaling, plus cluster autoscaling for optimal cost and performance.",
};

export default function AutoScalingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Hero - Above the fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20 text-center">
            <Badge variant="accent" className="mb-6">
              <Scale className="w-4 h-4" />
              Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
               Right size your platform
            </h1>
             <h2 className="text-2xl md:text-3xl text-ink-primary mb-6">
              Scale up or down, seamlessly
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
              Handle traffic surges and evolving workloads with automated scaling solutions. Optimize resources and get rid of underutilization, without the toil.
            </p>
          </div>
        </FadeIn>

        {/* Content - Below the fold: Slide Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <FadeIn direction="up" className="space-y-8">
                <h2 className="text-3xl font-bold text-ink-primary">Autoscale efficiently</h2>
                <p className="text-lg text-ink-secondary leading-relaxed">
                    Skyhook lets you easily define your replica counts, so you can sit back and watch auto-scaling work. You can define the guardrails to ensure that your platform scales according to your policies and processes, and schedule jobs to run when compute costs are more favorable. You can also ensure automatic scale down during off-peak hours to save costs.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-5 h-5 text-ink-primary" />
                         </div>
                         <div>
                             <h3 className="text-xl font-bold text-ink-primary mb-1">Horizontal, vertical and event-driven</h3>
                             <p className="text-ink-secondary">Using Skyhook, you can add or remove instances based on workload demands, adjust resources like CPU and memory dynamically and scale based on real-time triggers like queue depth or incoming requests.</p>
                         </div>
                    </div>
                </div>
            </FadeIn>
            
             <FadeIn direction="up" delay={0.2}>
               <BlueprintCard className="bg-surface min-h-[300px] flex items-center justify-center">
                  <div className="text-center w-full max-w-md p-4">
                       <div className="flex justify-between items-end h-32 mb-4 gap-2">
                          <div className="w-1/5 bg-ink-primary/20 h-[40%]" />
                          <div className="w-1/5 bg-ink-primary/40 h-[60%]" />
                          <div className="w-1/5 bg-ink-primary/60 h-[80%]" />
                          <div className="w-1/5 bg-accent h-[100%] relative">
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-accent whitespace-nowrap">
                                  + Scale Up
                              </div>
                          </div>
                       </div>
                       <div className="border-t border-ink-primary pt-2 flex justify-between text-xs font-mono">
                          <span>08:00</span>
                          <span>12:00</span>
                          <span>16:00</span>
                          <span>20:00</span>
                       </div>
                  </div>
              </BlueprintCard>
            </FadeIn>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
             <FadeIn direction="up" className="order-2 lg:order-1">
                <BlueprintCard className="bg-surface p-8">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-border pb-4">
                            <span className="font-bold text-ink-primary">Scaling Policy</span>
                            <span className="text-xs font-mono bg-gray-100 px-2 py-1">YAML</span>
                        </div>
                        <div className="font-mono text-sm text-ink-secondary space-y-1">
                            <p><span className="text-purple-600">minReplicas:</span> 2</p>
                            <p><span className="text-purple-600">maxReplicas:</span> 10</p>
                            <p><span className="text-purple-600">metrics:</span></p>
                            <p className="pl-4">- <span className="text-blue-600">type:</span> Resource</p>
                            <p className="pl-6"><span className="text-blue-600">resource:</span></p>
                            <p className="pl-8"><span className="text-blue-600">name:</span> cpu</p>
                            <p className="pl-8"><span className="text-blue-600">targetAverageUtilization:</span> 75</p>
                        </div>
                    </div>
                </BlueprintCard>
             </FadeIn>
             <FadeIn direction="up" delay={0.2} className="space-y-8 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-ink-primary">Your scaling needs, without the work</h2>
                <p className="text-lg text-ink-secondary leading-relaxed">
                    Instead of connecting tools and dealing with the cognitive load of Kubernetes and cloud platform, Skyhook lets you scale seamlessly with the devops effort. Free your platform and ops people to focus on what matters most and leverage Skyhook’s auto-scaling capabilities.
                </p>
                 <h3 className="text-2xl font-bold text-ink-primary">A self-serve interface for a great developer experience</h3>
                <p className="text-lg text-ink-secondary leading-relaxed">
                    Skyhook doesn’t just provide the platform and guardrails, it also provides the developer self-service interface that frees developers to code instead of struggling with platform issues.
                </p>
             </FadeIn>
        </div>

         <FadeIn direction="up">
           <div className="mb-24 bg-surface border border-border p-12 shadow-hard text-center">
               <h2 className="text-3xl font-bold text-ink-primary mb-6">What makes us different</h2>
               <p className="text-lg text-ink-secondary leading-relaxed max-w-4xl mx-auto">
                  Skyhook’s basic setup delivers a platform that’s made of the best dev tools you need, saving you the toil to connect and configure them. We’re also flexible enough to support any change you can imagine, so that you can customize as you grow. It’s a kubernetes platform that’s ready to roll, without the lock-in of PaaS.
               </p>
          </div>
        </FadeIn>

      </div>
      
      <ValueProps />
    </div>
  );
}

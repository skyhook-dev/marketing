import { Metadata } from "next";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { Layers, Container, Settings, Zap, Globe, ShieldCheck, GitMerge } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Deploy",
  description: "Deploy to Kubernetes with confidence. Skyhook handles rollout strategies, environment management, and GitOps workflows for fast, reliable releases.",
};

export default function DeployPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20">
            <Badge variant="accent" className="mb-6">
              <Layers className="w-4 h-4" />
              Platform Feature
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
              Deploy with Skyhook
            </h1>
            <p className="text-xl text-ink-secondary max-w-3xl leading-relaxed">
              Release your applications in a fast, repeatable, and worry-free process. Skyhook takes container images from the Build stage and launches them onto your Kubernetes cluster with minimal configuration. By automating the heavy lifting of container orchestration, Skyhook enables your team to deploy more often and more confidently, becoming a high-performing DevOps teams.
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
                          <Container className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Select an Image</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Choose the container image you want. Skyhook supports images from public or private registries, giving you full flexibility.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Settings className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Define Deployment Settings</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Specify how your application should run – number of replicas, CPU/memory limits, environment variables, and any required services (like load balancers or ingresses).
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">One-Click or CI-triggered Deploy</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Hit deploy in the dashboard or let Skyhook auto-deploy new images when they pass tests. Skyhook will create or update the Kubernetes Deployment and Service resources under the hood.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <GitMerge className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Rolling Updates</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Skyhook updates your application using rolling updates by default. New pods come up before old ones are terminated, ensuring continuous service availability. If a new version fails health checks, the platform can halt or roll back the deployment automatically.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Globe className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Access & Networking</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Once running, your service is reachable via a stable endpoint. Skyhook can provision a DNS name and TLS certificate for public services, or restrict access for internal services. Configuration of port routing and network policies is handled seamlessly.
                          </p>
                       </div>
                    </div>
                 </div>
              </FadeIn>
           </div>

           {/* Right Column / Diagram */}
           <FadeIn delay={0.2} direction="up" className="lg:pt-16">
              <BlueprintCard className="bg-surface min-h-[500px] flex items-center justify-center p-8">
                 <div className="text-center space-y-6 opacity-90 w-full">
                     <div className="font-mono text-xs uppercase tracking-widest mb-4">Deployment Interface</div>
                     <img 
                        src="/images/deploy_screen.svg" 
                        alt="Deployment Screen Interface"
                        className="w-full h-auto shadow-sm"
                     />
                 </div>
              </BlueprintCard>
           </FadeIn>
        </div>

        {/* Features Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <BlueprintCard title="Zero-Downtime Deployments">
                <div className="flex items-start gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Uses Kubernetes rollout mechanisms to update applications without interrupting service. Updates are applied gradually, and only healthy pods receive traffic.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Declarative Configuration">
                <div className="flex items-start gap-3 mb-4">
                  <Settings className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Everything about your deployment (replicas, environment vars, configs) can be defined in declarative files. Skyhook can sync with Git so your deployments are version-controlled.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Canary & Blue-Green Support">
                <div className="flex items-start gap-3 mb-4">
                  <GitMerge className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Gradually shift traffic between old and new versions or run two versions in parallel for testing. While the default is rolling updates, advanced teams can implement canary or blue-green strategies using Skyhook’s CLI and Kubernetes labels.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
        </FadeInStagger>

         <FadeIn direction="up" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-12">
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Configurable Environments</h4>
                <p className="text-ink-secondary text-sm">Deploy to multiple environments (dev, staging, prod) with the same process. You can promote a build through environments with one click, ensuring consistency from testing to production.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Integration Hooks</h4>
                <p className="text-ink-secondary text-sm">Integrate with external CI/CD systems or pipelines. For example, use a GitHub Action or ArgoCD to trigger Skyhook deployments via API. Skyhook plays nicely with existing tools, so you’re not locked in.</p>
             </div>
        </FadeIn>

      </div>
    </div>
  );
}

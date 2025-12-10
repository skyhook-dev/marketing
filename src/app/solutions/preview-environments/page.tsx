import { Metadata } from "next";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { GitPullRequest, CheckCircle2, Globe, Box } from "lucide-react";
import { ValueProps } from "@/components/home/ValueProps";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Preview Environments",
  description: "Spin up isolated preview environments for every pull request. Test changes in production-like conditions before merging with Skyhook's automated preview deployments.",
};

export default function PreviewEnvironmentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Hero - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20 text-center">
            <Badge variant="accent" className="mb-6">
              <GitPullRequest className="w-4 h-4" />
              Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
              One-click ephemeral environments
            </h1>
             <h2 className="text-2xl md:text-3xl text-ink-primary mb-6">
              Preview Environments with Skyhook
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
              Test, iterate and collaborate using pre-production environments for every specific code branch or pull request.
            </p>
          </div>
        </FadeIn>

        {/* Introduction - Below fold: Slide Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
           <FadeIn direction="up" className="space-y-8">
              <h2 className="text-3xl font-bold text-ink-primary">Preview environments made easy</h2>
              <p className="text-lg text-ink-secondary leading-relaxed">
                Skyhook automatically spins up a production-like environment for every pull request – no scripts, no waiting and full environment parity. It’s a Kubernetes-native approach solution that fits right into your workflow and makes preview environments dead simple for developers.
              </p>
              
              <div className="space-y-4">
                  <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                         <Globe className="w-4 h-4 text-ink-primary" />
                      </div>
                      <div>
                          <h4 className="font-bold text-ink-primary">Quick testing, feedback and collaboration</h4>
                          <p className="text-ink-secondary text-sm">Every feature branch or PR gets its own live environment in minutes for quick testing, feedback and collaboration.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                         <Box className="w-4 h-4 text-ink-primary" />
                      </div>
                      <div>
                          <h4 className="font-bold text-ink-primary">Isolated Clone</h4>
                          <p className="text-ink-secondary text-sm">Each skyhook preview environment is an isolated clone of production and includes all the necessary apps, and services.</p>
                      </div>
                  </div>
              </div>
           </FadeIn>
           
           <FadeIn direction="up" delay={0.2}>
             <BlueprintCard className="bg-surface">
                <TerminalBlock 
                   filename="github-pr-comment.md"
                   language="markdown"
                   code={`### ✅ Preview Environment Ready

| Service | Status | URL |
|:---|:---|:---|
| Web App | 🟢 Ready | [pr-123.skyhook.app](...) |
| API | 🟢 Ready | [api-pr-123.skyhook.app](...) |

_Environment will auto-destroy on merge._`}
                />
             </BlueprintCard>
           </FadeIn>
        </div>

        {/* Kubernetes Native & Flexible */}
        <FadeIn direction="up">
          <div className="mb-24 bg-surface border border-border p-12 shadow-hard">
              <h2 className="text-3xl font-bold text-ink-primary mb-6">Kubernetes-native & flexible</h2>
              <p className="text-lg text-ink-secondary leading-relaxed">
                  Skyhook runs on your Kubernetes clusters (any cloud or on-prem), tapping into the full power of K8s without the steep learning curve. Under the hood it provisions environments on Kubernetes, without any need for Kubernetes expertise.
              </p>
          </div>
        </FadeIn>

        {/* The work you skip */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
             <FadeIn direction="up" className="order-2 lg:order-1">
                 <BlueprintCard className="bg-surface flex items-center justify-center min-h-[300px]">
                     <div className="text-center">
                         <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                             <CheckCircle2 className="w-12 h-12 text-accent" />
                         </div>
                         <h3 className="text-xl font-bold text-ink-primary mb-2">Developer Focus</h3>
                         <p className="text-ink-secondary">Devs focus on code, not config.</p>
                     </div>
                 </BlueprintCard>
             </FadeIn>
             <FadeIn direction="up" delay={0.2} className="order-1 lg:order-2 space-y-8">
                 <h2 className="text-3xl font-bold text-ink-primary">The preview environments you need, without the work</h2>
                 <p className="text-lg text-ink-secondary leading-relaxed">
                     Preview environments means that workflows can be easily promoted, but actually doing this requires devops effort you may not be able to support. Free your platform and ops people to focus on what matters most and leverage Skyhook’s preview environments.
                 </p>
                 <h3 className="text-2xl font-bold text-ink-primary">The developer interface that makes preview environments easy</h3>
                 <p className="text-lg text-ink-secondary leading-relaxed">
                     Skyhook is an easy way to abstract and simplify self-service for developers. Using it you can build the internal developer platform that developers need. They can then focus on writing code rather than struggle with preview environments or the fact that it’s difficult to set them up.
                 </p>
             </FadeIn>
        </div>

        {/* How It Works Grid */}
        <div className="mb-24">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">How it works</h2>
            </FadeIn>
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn direction="up" className="bg-surface border border-border p-8 text-center">
                    <div className="w-16 h-16 mx-auto bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center mb-6">
                        <GitPullRequest className="w-8 h-8 text-ink-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-primary mb-4">Open a pull request</h3>
                    <p className="text-ink-secondary">It’s as simple as that to kick off a new isolated environment with your required set of services.</p>
                </FadeIn>
                <FadeIn direction="up" className="bg-surface border border-border p-8 text-center">
                    <div className="w-16 h-16 mx-auto bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center mb-6">
                        <Box className="w-8 h-8 text-ink-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-primary mb-4">Deployed automatically</h3>
                    <p className="text-ink-secondary">Skyhook automatically builds and deploys a complete, isolated environment for that PR on your Kubernetes cluster.</p>
                </FadeIn>
                <FadeIn direction="up" className="bg-surface border border-border p-8 text-center">
                    <div className="w-16 h-16 mx-auto bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-ink-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-primary mb-4">Test, share, and merge</h3>
                    <p className="text-ink-secondary">Each preview environment gets a unique URL. When you merge or close the PR, Skyhook tears down the environment automatically.</p>
                </FadeIn>
            </FadeInStagger>
        </div>
      </div>
      
      <ValueProps />
    </div>
  );
}

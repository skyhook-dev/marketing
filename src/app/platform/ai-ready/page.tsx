import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { Sparkles, Bot, Shield, MessageSquare, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AIReadyPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20 text-center">
            <Badge variant="accent" className="mb-6">
              <Sparkles className="w-4 h-4" />
              Platform Feature
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
               The context you need for AI-readiness
            </h1>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
              Skyhook’s platform is set up to provide the right context to be used by the Skyhook agent or your MCP server, so you can set up ai-driven developer self-service quickly and easily.
            </p>
          </div>
        </FadeIn>

         {/* Hero Animation Placeholder - Above fold: Blur In */}
         <FadeIn direction="blur-in" delay={0.2}>
           <div className="w-full h-auto bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center mb-24 p-8">
              <img 
                src="/images/ai_agent_concept.svg" 
                alt="AI Agent Concept" 
                className="w-full max-w-4xl h-auto"
              />
           </div>
         </FadeIn>

        {/* Content Section - Below fold: Slide Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
           <FadeIn direction="up" className="space-y-8">
              <h2 className="text-3xl font-bold text-ink-primary">
                 Get AI-ready with the context needed for self-service
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed">
                 Skyhook’s agent knows your stack, your standards and the golden paths enabled through your platform. But it does so much more than that:
              </p>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-accent mt-1" />
                    <span className="text-ink-secondary">Identifies potential issues or optimization opportunities before they occur.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-accent mt-1" />
                    <span className="text-ink-secondary">Instantly troubleshoot and resolve incidents with AI-powered recommendations.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-accent mt-1" />
                    <span className="text-ink-secondary">Automates repetitive tasks like log analysis, query execution, and deployment approvals.</span>
                 </li>
              </ul>
           </FadeIn>
           
           <FadeIn direction="up" delay={0.2}>
             <BlueprintCard className="bg-surface">
                <TerminalBlock 
                   filename="agent-interaction"
                   code={`User: Why is the checkout service failing?

Agent: I checked the logs for 'checkout-service' in 'prod'.
Found 500 errors starting at 14:32 UTC.
Root cause appears to be a database connection timeout.
db-primary pod restarted at 14:31 UTC.

Recommendation: Check DB connection pool settings.`}
                />
             </BlueprintCard>
           </FadeIn>
        </div>

        {/* Chat with an agent */}
        <FadeIn direction="up" className="mb-24">
           <div className="bg-surface border border-border p-12 shadow-hard">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                     <MessageSquare className="w-12 h-12 text-ink-primary mb-6" />
                     <h2 className="text-3xl font-bold text-ink-primary mb-4">Chat with an agent, in context</h2>
                     <p className="text-lg text-ink-secondary leading-relaxed mb-6">
                        Skyhook’s agent provides developers and devops with the data they need. It’s an agent that already knows your entire environment. You don’t need to explain the architecture, the ports, the configurations.
                     </p>
                 </div>
                  <div className="opacity-50">
                      <div className="space-y-4">
                          <div className="flex gap-4 items-end">
                              <div className="bg-gray-100 p-4 rounded-lg rounded-bl-none max-w-[80%]">
                                  Show me all services with high CPU usage
                              </div>
                          </div>
                          <div className="flex gap-4 items-end flex-row-reverse">
                              <div className="bg-accent/10 p-4 rounded-lg rounded-br-none max-w-[80%] text-right">
                                  Here are the services exceeding 80% CPU...
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </FadeIn>

        {/* Agents can do work */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up" className="order-2 lg:order-1">
               <BlueprintCard className="bg-surface">
                   <div className="flex flex-col gap-4">
                       <div className="flex items-center gap-3 border-b border-border pb-4">
                           <Bot className="w-6 h-6 text-ink-primary" />
                           <span className="font-mono font-bold">Agent Action</span>
                       </div>
                       <div className="font-mono text-sm space-y-2">
                           <p>{`> Initiating scaling action...`}</p>
                           <p>{`> Current replicas: 2`}</p>
                           <p>{`> Target replicas: 5`}</p>
                           <p className="text-green-600">{`> Scaling complete.`}</p>
                           <div className="mt-4 p-3 bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
                               <Shield className="w-4 h-4" />
                               Logged to Audit Trail via GitHub
                           </div>
                       </div>
                   </div>
               </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl font-bold text-ink-primary">Agents can do work, too</h2>
                <p className="text-lg text-ink-secondary leading-relaxed">
                    Within the context provided by Skyhook, your standards and guardrails, agents can also perform actions, such as autoscaling, resolving incidents or optimizing resources.
                </p>
                <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-100 rounded-lg">
                    <Shield className="w-6 h-6 text-green-700 mt-1" />
                    <p className="text-sm text-green-800">
                        AI agent actions go through GitHub and are managed by GitHub permissions - meaning that you know that RBAC and an audit trail are dealt with.
                    </p>
                </div>
            </FadeIn>
         </div>

      </div>
    </div>
  );
}

import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { Bot, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function AIAgent() {
  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-medium uppercase tracking-wide">AI-Ready Platform</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary">
              Chat with your infrastructure
            </h2>
            
            <p className="text-lg text-ink-secondary leading-relaxed">
              Skyhook’s agent provides developers and DevOps with the context they need. It knows your stack, your standards, and your golden paths.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-ink-primary shadow-hard">
                  <Bot className="w-6 h-6 text-ink-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-primary mb-1">Context-Aware</h3>
                  <p className="text-sm text-ink-secondary">Instantly troubleshoot incidents with AI that understands your specific K8s configuration.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-ink-primary shadow-hard">
                  <Sparkles className="w-6 h-6 text-ink-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-primary mb-1">Action-Oriented</h3>
                  <p className="text-sm text-ink-secondary">Automate repetitive tasks like log analysis, query execution, and deployment approvals.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            <BlueprintCard className="bg-white">
              <div className="space-y-4">
                {/* Chat Interface Mockup */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">U</div>
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none text-sm text-ink-secondary max-w-[80%]">
                    Why is the payment service latency high?
                  </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="space-y-2 max-w-[90%]">
                    <div className="bg-accent/5 border border-accent/20 p-3 rounded-lg rounded-tr-none text-sm text-ink-primary">
                      <p className="mb-2">I found a spike in CPU usage on the <code>payment-service-v2</code> pods starting at 14:30 UTC.</p>
                      <p>Here are the relevant logs:</p>
                    </div>
                    <TerminalBlock 
                      filename="logs"
                      code={`[ERROR] Connection pool exhausted
[WARN] Retrying database connection (attempt 3/5)
[ERROR] Timeout waiting for connection`}
                      className="text-xs"
                    />
                  </div>
                </div>
              </div>
            </BlueprintCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

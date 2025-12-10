import { Metadata } from "next";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { Activity, FileText, Bell, Eye, BarChart, Shield } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Observe",
  description: "Monitor your Kubernetes applications with Skyhook. Centralized logging, metrics, tracing, and alerting to keep your services healthy and performant.",
};

export default function ObservePage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20">
            <Badge variant="accent" className="mb-6">
              <Activity className="w-4 h-4" />
              Platform Feature
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
              Observe with Skyhook
            </h1>
            <p className="text-xl text-ink-secondary max-w-3xl leading-relaxed">
              Skyhook has built-in observability from day one, so you can monitor, trace, and troubleshoot your applications with ease. Through a single pane of glass, you get live logs, metrics, and health checks for all your services. Skyhook’s Kubernetes-native approach means it taps into standard observability tools without proprietary lock-in.
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
                          <FileText className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Centralized Logging</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Skyhook aggregates logs from all your application pods. View real-time streaming logs in the web console or CLI, filtered by service or severity.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <BarChart className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Metrics & Dashboards</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             The platform collects key metrics from Kubernetes and your containers (CPU, memory, requests, etc.). It presents these on intuitive dashboards so you can see at a glance how each service is performing.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Bell className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Alerts & Notifications</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Define thresholds for critical metrics or error rates. Skyhook can integrate with alerting systems to notify your team when something’s amiss.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center flex-shrink-0">
                          <Shield className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Audit and History</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Every deployment, configuration change, and alert is recorded. Get an audit trail, so you can review who changed what and when. This is crucial for debugging complex issues or satisfying compliance requirements in regulated industries.
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
                     <div className="font-mono text-xs uppercase tracking-widest">Observability Pipeline</div>
                     <svg width="280" height="200" viewBox="0 0 280 200" className="mx-auto stroke-ink-primary fill-none">
                        {/* Pods */}
                        <rect x="20" y="50" width="30" height="30" strokeWidth="1" />
                        <rect x="20" y="100" width="30" height="30" strokeWidth="1" />
                        <text x="35" y="150" textAnchor="middle" fontSize="10" stroke="none" fill="currentColor">PODS</text>
                        
                        {/* Aggregator */}
                        <rect x="100" y="60" width="40" height="60" strokeWidth="1" />
                        <text x="120" y="140" textAnchor="middle" fontSize="10" stroke="none" fill="currentColor">COLLECTOR</text>

                        {/* Dashboard */}
                        <rect x="200" y="40" width="60" height="40" strokeWidth="1" />
                        <text x="230" y="95" textAnchor="middle" fontSize="10" stroke="none" fill="currentColor">METRICS</text>

                        {/* Logs */}
                         <rect x="200" y="110" width="60" height="40" strokeWidth="1" />
                        <text x="230" y="165" textAnchor="middle" fontSize="10" stroke="none" fill="currentColor">LOGS</text>

                        {/* Connections */}
                        <path d="M50 65 L100 90" strokeWidth="1" />
                        <path d="M50 115 L100 90" strokeWidth="1" />
                        <path d="M140 80 L200 60" strokeWidth="1" />
                         <path d="M140 100 L200 130" strokeWidth="1" />
                     </svg>
                 </div>
              </BlueprintCard>
           </FadeIn>
        </div>

        {/* Features Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <BlueprintCard title="Live Log Stream">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Access stdout/stderr logs from all pods in real time. Search and filter logs by keywords or service name. Developers can quickly locate error messages or exceptions without leaving the Skyhook interface.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Custom Metrics Support">
                <div className="flex items-start gap-3 mb-4">
                  <BarChart className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Expose custom business or application metrics via endpoints (for instance, using Prometheus client libraries). Skyhook will scrape and display these metrics, letting you monitor application-level KPIs alongside system metrics.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Third-Party Integration">
                <div className="flex items-start gap-3 mb-4">
                  <Eye className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Skyhook’s use of standard protocols means you can pipe data to external systems. Send logs to an ELK stack, or feed metrics into Datadog – the data is yours, and integration is straightforward.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
        </FadeInStagger>

         <FadeIn direction="up" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Built-in Monitoring Stack</h4>
                <p className="text-ink-secondary text-sm">Skyhook comes pre-integrated with a monitoring stack (built on popular open-source tools like Prometheus). It gathers container and node metrics automatically, so you have instant observability out-of-the-box.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Alert Rules Engine</h4>
                <p className="text-ink-secondary text-sm">Use a flexible rules engine to define alert conditions. Configure notifications to Slack, Email, or PagerDuty to ensure the right people are notified at the right time.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Secure and Compliant</h4>
                <p className="text-ink-secondary text-sm">All telemetry data is transmitted securely and stored with best-practice retention policies. Role-based access ensures that sensitive logs (like user data in logs) are only visible to authorized personnel. These features help with compliance.</p>
             </div>
        </FadeIn>

      </div>
    </div>
  );
}

import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Code2, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-ink-primary shadow-hard mb-8">
            <span className="text-xs font-mono font-medium uppercase tracking-wide">About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-8">
            We're building the <span className="text-accent">future of DevOps</span>
          </h1>
          <p className="text-xl text-ink-secondary leading-relaxed">
            Skyhook was founded by engineers who were tired of spending more time configuring Kubernetes than writing code.
            Our mission is to make platform engineering accessible to everyone.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-ink-primary">Our Mission</h2>
            <div className="prose prose-lg text-ink-secondary">
              <p>
                We believe that developers should be able to deploy and manage their applications without needing a PhD in Kubernetes.
                At the same time, we believe that DevOps teams shouldn't be buried under a mountain of tickets.
              </p>
              <p>
                Skyhook bridges the gap. We provide a platform that gives developers the autonomy they crave, while giving Ops the control and visibility they need.
              </p>
            </div>
          </div>
          <BlueprintCard className="min-h-[300px] flex items-center justify-center bg-surface">
            <div className="text-6xl animate-bounce">🚀</div>
          </BlueprintCard>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-ink-primary">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlueprintCard title="Developer First">
            <div className="space-y-4">
              <div className="p-2 bg-surface border border-ink-primary shadow-hard w-fit">
                <Code2 className="w-6 h-6 text-ink-primary" />
              </div>
              <p className="text-ink-secondary">
                We design every feature with the developer experience in mind. If it's not intuitive, it's not finished.
              </p>
            </div>
          </BlueprintCard>

          <BlueprintCard title="Open Standards">
            <div className="space-y-4">
              <div className="p-2 bg-surface border border-ink-primary shadow-hard w-fit">
                <Globe className="w-6 h-6 text-ink-primary" />
              </div>
              <p className="text-ink-secondary">
                We build on top of open source giants like Kubernetes, Argo, and Prometheus. No proprietary lock-in.
              </p>
            </div>
          </BlueprintCard>

          <BlueprintCard title="Transparency">
            <div className="space-y-4">
              <div className="p-2 bg-surface border border-ink-primary shadow-hard w-fit">
                <Heart className="w-6 h-6 text-ink-primary" />
              </div>
              <p className="text-ink-secondary">
                We are open about how our platform works, our pricing, and our roadmap. Trust is earned.
              </p>
            </div>
          </BlueprintCard>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <BlueprintCard className="bg-ink-primary text-white border-ink-primary">
          <div className="py-12 px-6">
            <h2 className="text-3xl font-semibold mb-4 text-white">Join us on our journey</h2>
            <p className="text-gray-300 mb-8 text-lg">We're always looking for talented individuals to join our team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/careers" className="px-6 py-3 bg-white text-ink-primary font-medium border border-white hover:bg-gray-100 transition-colors shadow-hard">
                View Careers
              </a>
              <a href="mailto:hello@skyhook.io" className="px-6 py-3 bg-transparent text-white font-medium border border-white hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </BlueprintCard>
      </div>
    </div>
  );
}

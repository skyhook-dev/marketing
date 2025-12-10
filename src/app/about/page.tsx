import { Metadata } from "next";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Code2, Globe, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Skyhook's mission to make platform engineering accessible to everyone. We help developers deploy without complexity and give DevOps the control they need.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-8">About Us</Badge>
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
          <div className="rounded-lg overflow-hidden shadow-hard">
            <img
              src="/images/k8s-rocket-cityscape.jpeg"
              alt="Kubernetes rocket launching over cityscape"
              className="w-full h-full object-cover"
            />
          </div>
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
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent" />
              </div>
              <p className="text-ink-secondary">
                We design every feature with the developer experience in mind. If it's not intuitive, it's not finished.
              </p>
            </div>
          </BlueprintCard>

          <BlueprintCard title="Open Standards">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <p className="text-ink-secondary">
                We build on top of open source giants like Kubernetes, Argo, and Prometheus. No proprietary lock-in.
              </p>
            </div>
          </BlueprintCard>

          <BlueprintCard title="Transparency & Trust">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent" />
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
        <BlueprintCard
          className="text-white border-transparent overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #2D7AFF 0%, #1E5FD9 50%, #2D7AFF 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 8s ease infinite'
          }}
        >
          <div className="py-12 px-6">
            <h2 className="text-3xl font-semibold mb-4 text-white">Join us on our journey</h2>
            <p className="text-white/90 mb-8 text-lg">We're always looking for talented individuals to join our team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/careers" className="bg-white text-[#2D7AFF] hover:bg-white/90">
                View Careers
              </Button>
              <Button href="mailto:hello@skyhook.io" variant="ghost" className="bg-white/10 text-white border-white/20 hover:bg-white/20" external>
                Contact Us
              </Button>
            </div>
          </div>
        </BlueprintCard>
      </div>
    </div>
  );
}

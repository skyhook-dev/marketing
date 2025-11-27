import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function Signup() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center mb-16">
        <Badge variant="accent" className="mb-4">Get Started</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-ink-primary">
          Start your <span className="text-accent">Skyhook journey</span>
        </h1>
        <p className="text-xl text-ink-secondary max-w-2xl mx-auto mb-8">
          Join thousands of developers building the future of platform engineering.
          Start for free, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="https://app.skyhook.io" size="lg" external className="min-w-[200px]">
            Create Free Account
          </Button>
          <Button href="https://github.com/login/oauth/authorize?client_id=skyhook" variant="secondary" size="lg" external className="min-w-[200px]">
            Continue with GitHub
          </Button>
        </div>
        <p className="mt-4 text-sm text-ink-tertiary">
          By signing up, you agree to our <Link href="/terms" className="underline hover:text-ink-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-ink-primary">Privacy Policy</Link>.
        </p>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-ink-primary text-surface p-12 rounded-lg shadow-hard">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Everything you need to ship faster</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface/10 p-6 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Instant Deployments</h3>
              <p className="text-surface/80">Connect your repo and deploy in seconds. We handle the infrastructure.</p>
            </div>
            <div className="bg-surface/10 p-6 rounded-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-surface/80">SOC2 compliant, role-based access control, and automated security scanning.</p>
            </div>
            <div className="bg-surface/10 p-6 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Global Edge Network</h3>
              <p className="text-surface/80">Deploy your apps close to your users with our global edge network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="bg-surface border border-border p-12 rounded-lg shadow-hard">
          <h2 className="text-3xl font-bold text-ink-primary mb-4">Need a custom plan?</h2>
          <p className="text-ink-secondary mb-8">Talk to our sales team about enterprise requirements.</p>
          <Button href="/demo" variant="secondary" size="lg">
            Request Demo
          </Button>
        </div>
      </section>
    </div>
  );
}


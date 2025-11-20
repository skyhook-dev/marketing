import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center mb-16">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
          Get Started
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-ink-primary">
          Start your <span className="text-accent">Skyhook journey</span>
        </h1>
        <p className="text-xl text-ink-secondary max-w-2xl mx-auto mb-8">
          Join thousands of developers building the future of platform engineering.
          Start for free, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://app.skyhook.io"
            className="bg-accent text-white px-6 py-3 text-lg font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all border border-black min-w-[200px]"
          >
            Create Free Account
          </Link>
          <Link
            href="https://github.com/login/oauth/authorize?client_id=skyhook"
            className="bg-surface text-ink-primary px-6 py-3 text-lg font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all border border-black min-w-[200px]"
          >
            Continue with GitHub
          </Link>
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
        <div className="bg-surface border border-border p-12 shadow-hard">
          <h2 className="text-3xl font-bold text-ink-primary mb-4">Need a custom plan?</h2>
          <p className="text-ink-secondary mb-8">Talk to our sales team about enterprise requirements.</p>
          <Link
            href="/demo"
            className="inline-block bg-white text-ink-primary px-6 py-3 text-lg font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all border border-black"
          >
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}


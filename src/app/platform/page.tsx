"use client";

import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Button } from "@/components/ui/Button";
import { Box, Layers, Play, TrendingUp, Activity, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ValuePropsGrid } from "@/components/shared/ValuePropsGrid";

const features = [
  {
    id: "build",
    title: "Build",
    icon: Box,
    href: "/platform/build",
    description: "Take your code from repository to container image with unmatched speed and reliability."
  },
  {
    id: "deploy",
    title: "Deploy",
    icon: Layers,
    href: "/platform/deploy",
    description: "Release your applications in a fast, repeatable, and worry-free process."
  },
  {
    id: "run",
    title: "Run",
    icon: Play,
    href: "/platform/run",
    description: "Keep your applications healthy, performant, and secure once they’re deployed."
  },
  {
    id: "grow",
    title: "Grow",
    icon: TrendingUp,
    href: "/platform/grow",
    description: "Seamlessly scale your infrastructure and processes."
  },
  {
    id: "observe",
    title: "Observe",
    icon: Activity,
    href: "/platform/observe",
    description: "Monitor, trace, and troubleshoot your applications with ease."
  }
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
            Great devOps, <br />
            <span className="text-ink-secondary">ready to roll</span>
          </h1>
          <p className="text-xl text-ink-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            A Kubernetes platform that&apos;s all set. Today Skyhook supports all your internal developer platform needs, from platform set-up through migration and large scale deployments. It’s the DevOps automation you’ve always needed.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/demo">Get a demo</Button>
          </div>
        </div>
      </section>

      {/* What is Skyhook? */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-6">
                What is Skyhook?
              </h2>
              <div className="space-y-6 text-lg text-ink-secondary leading-relaxed">
                <p>
                  Skyhook is all the automation and work you would do to deliver a kubernetes-based platform, available immediately, right in your cloud, on your terms, together with a developer interface.
                </p>
                <p>
                  It&apos;s a modern k8s-based internal developer platform that implements best practices and golden paths, by orchestrating the best-of-breed open source and enterprise tools in the industry.
                </p>
              </div>
            </div>
             {/* Platform Architecture */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-border">
              <img
                src="/images/heroes/hero.png"
                alt="Skyhook Platform Architecture"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Skyhook? */}
      <ValuePropsGrid
        subtitle="It&apos;s easy to try, easy to get running and doesn&apos;t present the lock-in risk that&apos;s inherent to PaaS or non-Kubernetes platforms."
      />

      {/* Our platform covers the entire SDLC */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary">
              Our platform covers the entire SDLC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.id} href={feature.href} className="group">
                   <div className="h-full bg-background border border-border p-6 hover:border-accent transition-colors shadow-sm hover:shadow-md">
                      <div className="w-12 h-12 bg-surface border border-border rounded-lg shadow-hard flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-ink-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-ink-primary mb-2 flex items-center gap-2">
                        {feature.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                      </h3>
                      <p className="text-sm text-ink-secondary">
                        {feature.description}
                      </p>
                   </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

       {/* Additional Sections */}
       <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                 <h3 className="text-2xl font-bold text-ink-primary mb-4">Easy to get started and to migrate from</h3>
                 <p className="text-lg text-ink-secondary leading-relaxed">
                   It’s easy to start using Skyhook and it’s also easy to stop using it since there is no PaaS lock-in.
                 </p>
              </div>
              <div>
                 <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-bold text-ink-primary">AI-ready</h3>
                 </div>
                 <p className="text-lg text-ink-secondary leading-relaxed mb-6">
                   Skyhook&apos;s platform is set up to provide the right context to be used by your MCP server, so you can set up ai-driven developer self-service quickly and easily.
                 </p>
                 <Link href="/platform/ai-ready" className="text-accent font-medium hover:underline flex items-center gap-1">
                    Learn more about AI-Ready <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
           </div>
        </div>
       </section>
    </div>
  );
}

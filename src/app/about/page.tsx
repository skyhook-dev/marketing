import { Metadata } from "next";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { Code2, Globe, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Skyhook's mission to make platform engineering accessible to everyone. We help developers deploy without complexity and give DevOps the control they need.",
};

const founders = [
  {
    name: "Nadav Erell",
    role: "CEO",
    image: "/images/team/nadav-web.jpeg",
    bio: "Former Staff Engineer at Google with a decade of experience leading teams building cloud infrastructure, identity systems, and data platforms at scale. Founded Skyhook to bring Google-grade platform engineering to every company.",
    linkedin: "https://linkedin.com/in/nadaverell",
  },
  {
    name: "Eyal Dulberg",
    role: "CTO",
    image: "/images/team/eyal-web.jpeg",
    bio: "Former Chief Architect at OneZero and eToro, with deep expertise in Kubernetes and cloud-native infrastructure. Eyal has designed and scaled high-availability platforms serving millions of users across fintech and enterprise environments.",
    linkedin: "https://www.linkedin.com/in/eyal-d/",
  },
  {
    name: "Roy Libman",
    role: "CPO",
    image: "/images/team/roy-web.jpeg",
    bio: "Former Product Lead at Armis and Head of Product Growth at eToro, with 7+ years building platforms at scale. Roy combines deep technical roots as a software developer with product leadership in fintech and cybersecurity.",
    linkedin: "https://linkedin.com/in/roylibman",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero with subtle background pattern */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Gradient orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-accent/5 via-accent/3 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <Badge className="mb-8">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-8">
              {"We're building the"} <span className="text-accent">future of DevOps</span>
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed max-w-3xl mx-auto">
              Awesome developer experience like a PaaS, without the lock-in and limitations.
              <br />
              The power of Kubernetes, without the complexity.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" className="space-y-6">
            <h2 className="text-3xl font-semibold text-ink-primary">Our Mission</h2>
            <div className="prose prose-lg text-ink-secondary">
              <p>
                Skyhook was founded by engineers who lived the problem—at Google, eToro, Armis, and OneZero. We spent years building and scaling platforms, and kept seeing the same challenge: Kubernetes is incredibly powerful, but that power comes with complexity that slows teams down.
              </p>
              <p>
                We built Skyhook to bridge the gap—giving developers the autonomy to ship fast, while giving Ops the guardrails and visibility they need. No more choosing between flexibility and simplicity.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="rounded-lg overflow-hidden shadow-hard">
              <img
                src="/images/k8s-rocket-cityscape.jpeg"
                alt="Kubernetes rocket launching over cityscape"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Team / Leadership */}
      <div className="relative py-24 overflow-hidden">
        {/* Subtle diagonal lines background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <Badge className="mb-6">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink-primary mb-4">
              Built by engineers, for engineers
            </h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              Our founding team brings decades of combined experience in cloud infrastructure,
              Kubernetes, and developer tools from leading technology companies.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <FadeIn key={founder.name} delay={index * 0.1}>
                <BlueprintCard className="h-full group hover:shadow-hard transition-shadow duration-300">
                  <div className="p-6 space-y-6">
                    {/* Founder photo */}
                    <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Name and Role */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-ink-primary group-hover:text-accent transition-colors">
                        {founder.name}
                      </h3>
                      <p className="text-sm font-mono text-accent uppercase tracking-wider">
                        {founder.role}
                      </p>
                    </div>

                    {/* Bio - fixed height for alignment */}
                    <p className="text-ink-secondary text-sm leading-relaxed min-h-[6.5rem]">
                      {founder.bio}
                    </p>

                    {/* LinkedIn button */}
                    <Link
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:opacity-80 transition-opacity"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 rounded" />
                    </Link>
                  </div>
                </BlueprintCard>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-12">
          <Badge className="mb-6">Our Values</Badge>
          <h2 className="text-3xl font-semibold text-ink-primary">What drives us</h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn>
            <BlueprintCard title="Developer First" className="h-full">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-accent" />
                </div>
                <p className="text-ink-secondary">
                  {"We design every feature with the developer experience in mind. If it's not intuitive, it's not finished."}
                </p>
              </div>
            </BlueprintCard>
          </FadeIn>

          <FadeIn>
            <BlueprintCard title="Open Standards" className="h-full">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <p className="text-ink-secondary">
                  We build on top of open source giants like Kubernetes, Argo, and Prometheus. No proprietary lock-in.
                </p>
              </div>
            </BlueprintCard>
          </FadeIn>

          <FadeIn>
            <BlueprintCard title="Transparency & Trust" className="h-full">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <p className="text-ink-secondary">
                  We are open about how our platform works, our pricing, and our roadmap. Trust is earned.
                </p>
              </div>
            </BlueprintCard>
          </FadeIn>
        </FadeInStagger>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <FadeIn>
          <BlueprintCard
            className="text-white border-transparent overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2D7AFF 0%, #1E5FD9 50%, #2D7AFF 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 8s ease infinite'
            }}
          >
            <div className="py-12 px-6 text-center">
              <h2 className="text-3xl font-semibold mb-4 text-white">Join us on our journey</h2>
              <p className="text-white/90 mb-8 text-lg">{"We're always looking for talented individuals to join our team."}</p>
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
        </FadeIn>
      </div>
    </div>
  );
}

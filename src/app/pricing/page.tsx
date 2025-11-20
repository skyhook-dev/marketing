"use client";

import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: { monthly: "$0", yearly: "$0" },
    period: "No payment method required",
    features: [
      "Deploy on Your Own Cloud",
      "Up to 3 Git-Connected Users",
      "Up to 3 Services",
      "1 Cluster",
      "Self-onboarding"
    ],
    cta: "Get Started",
    ctaLink: "/signup",
    highlight: false
  },
  {
    name: "Premium",
    price: { monthly: "$1k", yearly: "$800" },
    period: { monthly: "Billed monthly", yearly: "Billed $9,600 yearly" },
    badge: "Perfect for Startups",
    features: [
      "Up to 10 Git-Connected Users",
      "Up to 15 Services",
      "Up to 5 Clusters",
      "Professional Onboarding",
      "24/5 Support (Email & Chat)"
    ],
    cta: "Schedule a Demo",
    ctaLink: "/demo",
    highlight: true
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    period: "Tailored to your needs!",
    features: [
      "Unlimited Users",
      "Unlimited Services & Clusters",
      "On-Premise Architecture Support",
      "Role-Based Access Control (RBAC)",
      "SSO",
      "24/7 Support"
    ],
    cta: "Schedule a Demo",
    ctaLink: "/demo",
    highlight: false
  }
];

const faqs = [
  {
    question: "Is Skyhook Scalable?",
    answer: "Yes, Skyhook is designed to scale with your needs, from small startups to large enterprises, supporting unlimited services and clusters on the Enterprise plan."
  },
  {
    question: "Will I be locked-in with Skyhook?",
    answer: "No. We believe in zero lock-in. You retain full control of your cloud environment and can migrate away at any time."
  },
  {
    question: "Are my cloud service charges included in the pricing?",
    answer: "No, Skyhook runs on your own cloud account (AWS, GCP, Azure), so you pay your cloud provider directly for the infrastructure usage."
  },
  {
    question: "Can I use my AWS, GCP, or Azure Credits?",
    answer: "Yes! Since Skyhook deploys into your own cloud account, you can fully utilize any credits you have with your cloud provider."
  },
  {
    question: "Do OSS teams and startups in their initial stages receive a discount?",
    answer: "We love supporting the community. Please get in touch with us to discuss special pricing for OSS projects and early-stage startups."
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const isYearly = billingCycle === "yearly";

  return (
    <div className="min-h-screen bg-background py-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-ink-primary shadow-hard mb-8">
            <span className="text-xs font-mono font-medium uppercase tracking-wide">Transparent Pricing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-8">
            Pricing plans that <span className="text-accent">grow with you</span>
          </h1>
          <p className="text-xl text-ink-secondary mb-8">
            Fully transparent and scalable pricing plans that adapt to your business needs. Start free, then grow with us.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-ink-primary' : 'text-ink-secondary'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(isYearly ? "monthly" : "yearly")}
              className={`relative w-14 h-7 border border-ink-primary transition-colors ${
                isYearly ? 'bg-accent' : 'bg-surface'
              }`}
              aria-label="Toggle billing cycle"
            >
              <div
                className={`absolute top-0.5 w-6 h-6 bg-ink-primary transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-ink-primary' : 'text-ink-secondary'}`}>
              Yearly <span className="text-accent text-xs">-20%</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <BlueprintCard
              key={tier.name}
              className={`relative ${tier.highlight ? 'border-accent ring-1 ring-accent' : ''}`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 text-xs font-mono font-medium uppercase tracking-wide">
                  {tier.badge}
                </div>
              )}
              <div className="h-full flex flex-col p-2">
                <h3 className="text-xl font-semibold text-ink-primary mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-ink-primary">
                    {typeof tier.price === 'object' ? tier.price[billingCycle] : tier.price}
                  </span>
                  {tier.price.monthly !== "Custom" && tier.price.monthly !== "$0" && (
                    <span className="text-ink-secondary">/month</span>
                  )}
                </div>
                <p className="text-ink-secondary mb-6 text-sm">
                  {typeof tier.period === 'object' ? tier.period[billingCycle] : tier.period}
                </p>

                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-ink-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaLink}
                  className={`w-full py-3 px-4 text-sm font-medium transition-all border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-center mt-8 ${
                    tier.highlight
                      ? 'bg-accent text-white hover:bg-accent/90'
                      : 'bg-white text-ink-primary hover:bg-gray-50'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </BlueprintCard>
          ))}
        </div>
      </div>

      {/* Included Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-ink-primary">Included with every plan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlueprintCard title="Fully customizable environments">
            We believe that you should have full control of your environment. You're always able to customize every part of your environment and easily add and switch between cloud providers.
          </BlueprintCard>
          <BlueprintCard title="Professional Support">
            We're here for you every step of the way to make sure that you're able to fully utilize the most out of Skyhook.
          </BlueprintCard>
          <BlueprintCard title="Use your own cloud">
            We support AWS, GCP and Azure in all available regions. Use Skyhook to quickly setup your Kubernetes deployment on your own cloud environment.
          </BlueprintCard>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-ink-primary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-ink-primary bg-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <h3 className="font-semibold text-ink-primary">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-ink-primary transition-transform ${
                    openFaqIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-4 border-t border-border">
                  <p className="text-ink-secondary pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-ink-secondary mb-4">Still have unanswered questions?</p>
          <a
            href="mailto:contact@skyhook.io"
            className="inline-block px-6 py-3 text-ink-primary border border-ink-primary hover:bg-ink-primary hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}

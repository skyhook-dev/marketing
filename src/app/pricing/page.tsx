"use client";

import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          <Badge className="mb-8">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-8">
            Pricing plans that <span className="text-accent">grow with you</span>
          </h1>
          <p className="text-xl text-ink-secondary mb-8">
            Fully transparent and scalable pricing plans that adapt to your business needs. Start free, then grow with us.
          </p>

          {/* Billing Toggle */}
          <div className="relative inline-flex p-1.5 bg-surface border border-border rounded-xl shadow-sm hover-lift">
            {/* Animated background indicator */}
            <motion.div
              className="absolute inset-1.5 w-[calc(50%-3px)] bg-accent rounded-lg shadow-md"
              initial={false}
              animate={{
                left: !isYearly ? "6px" : "calc(50% - 3px)",
              }}
              transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.25 }}
            />
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                !isYearly ? 'text-white' : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                isYearly ? 'text-white' : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              Yearly <span className={`text-xs ${isYearly ? 'text-white/80' : 'text-accent'}`}>-20%</span>
            </button>
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
                <div className="flex items-baseline gap-1 mb-1 h-12">
                  {tier.name === "Premium" ? (
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${tier.name}-price-${billingCycle}`}
                        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl font-bold text-ink-primary"
                      >
                        {tier.price[billingCycle]}
                      </motion.span>
                    </AnimatePresence>
                  ) : (
                    <span className="text-4xl font-bold text-ink-primary">
                      {typeof tier.price === 'object' ? tier.price[billingCycle] : tier.price}
                    </span>
                  )}
                  {tier.price.monthly !== "Custom" && tier.price.monthly !== "$0" && (
                    <span className="text-ink-secondary">/month</span>
                  )}
                </div>
                {tier.name === "Premium" ? (
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${tier.name}-period-${billingCycle}`}
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.2 }}
                      className="text-ink-secondary mb-6 text-sm"
                    >
                      {typeof tier.period === 'object' ? tier.period[billingCycle] : tier.period}
                    </motion.p>
                  </AnimatePresence>
                ) : (
                  <p className="text-ink-secondary mb-6 text-sm">
                    {typeof tier.period === 'object' ? tier.period[billingCycle] : tier.period}
                  </p>
                )}

                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-ink-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={tier.ctaLink}
                  variant={tier.highlight ? "primary" : "secondary"}
                  className="w-full mt-8"
                >
                  {tier.cta}
                </Button>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="accent" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-ink-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-ink-secondary text-lg">
            Everything you need to know about Skyhook
          </p>
        </div>

        <Accordion
          items={faqs.map((faq, index) => ({
            id: String(index),
            title: faq.question,
            content: <p className="text-ink-secondary leading-relaxed">{faq.answer}</p>,
          }))}
          activeId={openFaqIndex !== null ? String(openFaqIndex) : null}
          onChange={(id) => setOpenFaqIndex(id !== null ? Number(id) : null)}
          className="mb-12"
        />

        <div className="text-center bg-surface rounded-2xl border border-border p-8">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-ink-primary mb-2">Still have questions?</h3>
          <p className="text-ink-secondary mb-6">Can't find the answer you're looking for? We're here to help.</p>
          <Button href="mailto:contact@skyhook.io" external>
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Check, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/d/cwgh-7xp-7tg/skyhook-demo-consultation?hide_event_type_details=1&hide_gdpr_banner=1";

export default function RequestDemo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: ""
  });

  useCalendlyEventListener({
    onEventScheduled: () => {
      setStep(4);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setStep(2);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Move to Calendly step
    setStep(3);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center mb-16">
        <Badge variant="accent" className="mb-4">Request a Demo</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-ink-primary">
          See Skyhook in <span className="text-accent">action</span>
        </h1>
        <p className="text-xl text-ink-secondary max-w-2xl mx-auto">
          Schedule a personalized demo with our team and discover how Skyhook can transform your deployment workflow.
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Benefits */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-ink-primary">What you&apos;ll get</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Personalized walkthrough",
                  desc: "See how Skyhook fits your specific use case and infrastructure needs."
                },
                {
                  title: "Architecture review",
                  desc: "Our experts will review your current setup and provide recommendations."
                },
                {
                  title: "Q&A session",
                  desc: "Ask our team anything about features, pricing, migration, and support."
                },
                {
                  title: "Custom POC plan",
                  desc: "Get a tailored proof-of-concept plan to validate Skyhook for your team."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-primary mb-1">{item.title}</h4>
                    <p className="text-ink-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-surface border border-border p-8 rounded-lg shadow-hard relative">
            {step === 1 ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="text-xs font-semibold tracking-wider text-ink-tertiary uppercase">
                  Step 1 of 3
                </div>
                <h3 className="text-2xl font-bold text-ink-primary">
                  Request your demo
                </h3>
                <p className="text-ink-secondary">
                  Enter your work email to get started
                </p>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-primary mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border text-ink-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="you@company.com"
                    autoFocus
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Next
                </Button>

                <p className="text-center text-sm text-ink-secondary">
                  We typically respond within 24 hours
                </p>
              </form>
            ) : step === 2 ? (
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-ink-secondary hover:text-ink-primary transition-colors"
                  >
                    ←
                  </button>
                  <span className="text-xs font-semibold tracking-wider text-ink-tertiary uppercase">
                    Step 2 of 3
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-ink-primary">
                  Tell us about yourself
                </h3>
                <p className="text-ink-secondary">
                  Help us prepare for your demo
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-ink-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border text-ink-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-ink-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border text-ink-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink-primary mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border text-ink-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-ink-primary mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border text-ink-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="Platform Engineer">Platform Engineer</option>
                    <option value="Solutions Architect">Solutions Architect</option>
                    <option value="Engineering Manager">Engineering Manager</option>
                    <option value="CTO / VP R&D">CTO / VP R&D</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-ink-primary mb-2">
                    Team Size *
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border text-ink-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10 Developers">1-10 Developers</option>
                    <option value="11-50 Developers">11-50 Developers</option>
                    <option value="51-200 Developers">51-200 Developers</option>
                    <option value="200+ Developers">200+ Developers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-primary mb-2">
                    How can we help? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-border text-ink-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Tell us about your use case, challenges, or questions..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Choose a Time
                </Button>
              </form>
            ) : step === 3 ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-ink-secondary hover:text-ink-primary transition-colors"
                  >
                    ←
                  </button>
                  <span className="text-xs font-semibold tracking-wider text-ink-tertiary uppercase">
                    Step 3 of 3
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-ink-primary">
                  Pick a time
                </h3>
                <p className="text-ink-secondary">
                  Select a time slot that works for you
                </p>
                <div className="calendly-container -mx-8 -mb-8">
                  <InlineWidget
                    url={CALENDLY_URL}
                    prefill={{
                      name: `${formData.firstName} ${formData.lastName}`,
                      email: formData.email,
                      customAnswers: {
                        a1: formData.message,
                        a2: formData.role,
                        a3: formData.teamSize,
                      }
                    }}
                    styles={{
                      height: '1000px',
                      minWidth: '320px',
                    }}
                    pageSettings={{
                      backgroundColor: 'ffffff',
                      primaryColor: '3b82f6',
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center py-8">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-accent" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-ink-primary">
                  You&apos;re all set!
                </h3>
                <p className="text-ink-secondary">
                  We&apos;ve sent a calendar invite to <span className="font-medium text-ink-primary">{formData.email}</span>.
                  Looking forward to showing you what Skyhook can do!
                </p>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        company: "",
                        role: "",
                        teamSize: "",
                        message: ""
                      });
                    }}
                  >
                    Schedule another demo
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

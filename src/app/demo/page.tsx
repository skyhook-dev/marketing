"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

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
    // Handle form submission - integrate with backend/CRM
    console.log("Demo request submitted:", formData);
    alert("Thank you! We'll be in touch shortly to schedule your demo.");
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
            <h2 className="text-2xl font-bold text-ink-primary">What you'll get</h2>
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
                  Step 1 of 2
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
            ) : (
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
                    Step 2 of 2
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
                    <option value="developer">Software Engineer</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="platform">Platform Engineer</option>
                    <option value="architect">Solutions Architect</option>
                    <option value="engineering-manager">Engineering Manager</option>
                    <option value="cto">CTO/VP Engineering</option>
                    <option value="other">Other</option>
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
                    <option value="1-10">1-10 developers</option>
                    <option value="11-50">11-50 developers</option>
                    <option value="51-200">51-200 developers</option>
                    <option value="200+">200+ developers</option>
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
                  Schedule Demo
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}


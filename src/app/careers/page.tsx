"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { MapPin, Clock, Users, Zap, Coffee, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { jobs, Job } from "./roles";

const perks = [
  {
    icon: Users,
    title: "Remote-Friendly",
    description: "Some roles are fully remote, others are hybrid in Tel Aviv. We&apos;re flexible.",
  },
  {
    icon: Zap,
    title: "Competitive Equity",
    description: "Meaningful ownership in a high-growth company shaping the future of DevOps.",
  },
  {
    icon: Coffee,
    title: "Flexible PTO",
    description: "Take the time you need. We trust you to manage your own schedule.",
  },
];

function JobCard({ job, isExpanded, onToggle }: {
  job: Job;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const hasContent = job.content !== null;

  return (
    <BlueprintCard className={`transition-all duration-300 ${isExpanded ? 'border-accent/40' : 'hover:border-accent/30'}`}>
      <button
        onClick={hasContent ? onToggle : undefined}
        className={`w-full text-left ${hasContent ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-ink-primary">
                {job.title}
              </h3>
              <Badge variant="outline" size="sm">{job.department}</Badge>
            </div>
            <p className="text-ink-secondary text-sm leading-relaxed mb-3">
              {job.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-ink-tertiary">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {job.type}
              </span>
            </div>
          </div>
          {hasContent && (
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-5 h-5 text-accent" />
              </div>
            </div>
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && job.content && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-border">
              {/* Role Overview */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-ink-primary mb-3">Role Overview</h4>
                <p className="text-ink-secondary text-sm leading-relaxed whitespace-pre-line">
                  {job.content.overview}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-ink-primary mb-3">What You&apos;ll Do</h4>
                <div className="space-y-4">
                  {job.content.responsibilities.map((section) => (
                    <div key={section.title}>
                      <h5 className="text-sm font-semibold text-ink-primary mb-2">{section.title}</h5>
                      <ul className="list-disc list-inside space-y-1">
                        {section.items.map((item, i) => (
                          <li key={i} className="text-ink-secondary text-sm leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-ink-primary mb-3">What You&apos;ve Done</h4>
                <ul className="list-disc list-inside space-y-1">
                  {job.content.requirements.map((req, i) => (
                    <li key={i} className="text-ink-secondary text-sm leading-relaxed">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-ink-primary mb-3">Nice-to-Haves</h4>
                <ul className="list-disc list-inside space-y-1">
                  {job.content.niceToHave.map((item, i) => (
                    <li key={i} className="text-ink-secondary text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Success */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-ink-primary mb-3">What Success Looks Like</h4>
                <ul className="list-disc list-inside space-y-1">
                  {job.content.success.map((item, i) => (
                    <li key={i} className="text-ink-secondary text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <div className="pt-4">
                <Button
                  href={`mailto:careers@skyhook.io?subject=Application: ${job.title}`}
                  className="bg-accent text-white hover:bg-accent/90"
                  external
                >
                  Apply for this Role
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </BlueprintCard>
  );
}

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInStagger className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <Badge variant="accent" className="mb-6">We&apos;re Hiring</Badge>
            </FadeIn>
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-semibold text-ink-primary tracking-tight mb-6">
                Build the future of
                <br />
                <span className="text-accent">cloud deployment</span>
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-xl text-ink-secondary leading-relaxed mb-8">
                Join a team of passionate engineers, designers, and operators working to make
                cloud infrastructure simple, fast, and accessible for every developer.
              </p>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-8 md:py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge variant="default" className="mb-4">Why Skyhook</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink-primary mb-4">
              More than just a job
            </h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              We&apos;re building something meaningful, and we want you to be part of it.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <FadeIn key={perk.title} delay={index * 0.1}>
                <BlueprintCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <perk.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-primary mb-1">
                        {perk.title}
                      </h3>
                      <p className="text-ink-secondary text-sm leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                </BlueprintCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Open Positions</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink-primary mb-4">
              Find your next role
            </h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
              We&apos;re looking for talented people to join our growing team.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <FadeIn key={job.id} delay={index * 0.1}>
                <JobCard
                  job={job}
                  isExpanded={expandedJob === job.id}
                  onToggle={() => toggleJob(job.id)}
                />
              </FadeIn>
            ))}
          </div>

          {jobs.length === 0 && (
            <FadeIn>
              <div className="text-center py-12">
                <p className="text-ink-secondary text-lg">
                  No open positions at the moment. Check back soon!
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div
              className="rounded-2xl p-8 md:p-12 text-center"
              style={{
                background: 'linear-gradient(135deg, #2D7AFF 0%, #1E5FD9 50%, #2D7AFF 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 8s ease infinite'
              }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Don&apos;t see the right role?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                We&apos;re always looking for exceptional people. Send us your resume and tell us how you&apos;d like to contribute.
              </p>
              <Button
                href="mailto:careers@skyhook.io"
                className="bg-white text-[#2D7AFF] hover:bg-white/90"
                external
              >
                Get in Touch
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

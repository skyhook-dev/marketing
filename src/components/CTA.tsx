import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTA() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-primary mb-6">
            Ready to roll?
          </h2>
          <p className="text-xl text-ink-secondary mb-10">
            It’s quick and easy to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-accent border border-black shadow-hard hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Request a Demo
            </Link>
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-ink-primary bg-surface border border-ink-primary shadow-hard hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Start deploying
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

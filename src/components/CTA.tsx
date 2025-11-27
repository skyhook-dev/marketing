import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-primary mb-6">
            Ready to roll?
          </h2>
          <p className="text-xl text-ink-secondary mb-10">
            It's quick and easy to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/demo" size="lg" className="w-full sm:w-auto">
              Request a Demo
            </Button>
            <Button href="/signup" variant="secondary" size="lg" className="w-full sm:w-auto">
              Start deploying
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

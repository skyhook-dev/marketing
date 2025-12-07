import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div
            className="rounded-2xl p-8 md:p-16 text-center relative overflow-hidden shadow-hero"
            style={{
              background: 'linear-gradient(135deg, #2D7AFF 0%, #1E5FD9 50%, #2D7AFF 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 8s ease infinite'
            }}
          >
            {/* Background pattern/glow for depth */}
            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />
            
            <h2 className="text-3xl md:text-5xl font-semibold text-white text-center leading-tight mb-6">
              Ready to roll?
            </h2>
            <p className="text-lg text-white/90 text-center leading-normal mb-10 max-w-2xl mx-auto">
              It&apos;s quick and easy to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button
                href="/demo"
                size="lg"
                className="w-full sm:w-auto bg-white text-[#2D7AFF] hover:bg-white/90 shadow-lg border-transparent"
              >
                Request a Demo
              </Button>
              <Button
                href="/signup"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                Start deploying
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

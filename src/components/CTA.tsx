import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-[25px] md:py-24 bg-background">
      <div className="w-full max-w-[1310px] mx-auto px-4 md:px-0">
        <FadeIn>
          <div
            className="rounded-2xl p-6 md:p-16 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2D7AFF 0%, #1E5FD9 50%, #2D7AFF 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 8s ease infinite'
            }}
          >
            <h2 className="text-[30px] md:text-[50px] font-semibold text-white text-center leading-[120%] mb-6">
              Ready to roll?
            </h2>
            <p className="text-[16px] md:text-[18px] font-normal text-white/90 text-center leading-normal mb-10">
              It's quick and easy to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/demo"
                size="lg"
                className="w-full sm:w-auto bg-white text-[#2D7AFF] hover:bg-white/90"
              >
                Request a Demo
              </Button>
              <Button
                href="https://app.skyhook.io"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
                external
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

import { FadeIn } from "@/components/ui/FadeIn";

export function Logos() {
  const companies = [
    { name: "Gankster", src: "/images/logos/gankster.png" },
    { name: "Rio Digital Assets", src: "/images/logos/rio.png" },
    { name: "Blitz", src: "/images/logos/blitz.png" },
    { name: "Brandbow", src: "/images/logos/brandbow.png" },
    { name: "Novia101", src: "/images/logos/novia101.svg" },
    { name: "Qualifire", src: "/images/logos/qualifire.svg" },
    { name: "UNIXi", src: "/images/logos/unixi.svg" },
    { name: "Quack", src: "/images/logos/quack.svg" },
    { name: "Fullpath", src: "/images/logos/fullpath.svg" },
    { name: "Webrix", src: "/images/logos/webrix.svg" },
  ];

  return (
    <section className="border-b border-border bg-surface py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center font-mono text-xs uppercase tracking-widest text-ink-secondary mb-8">
            Used daily by engineering teams at
          </p>

          <div className="logos-scroll-container">
            <div className="logos-scroll">
              {[...Array(2)].map((_, index) => (
                <div className="logos-set" key={index}>
                  {companies.map((company) => (
                    <div key={`${index}-${company.name}`} className="logo-placeholder has-logo">
                      <img
                        src={company.src}
                        alt={company.name}
                        className="company-logo"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

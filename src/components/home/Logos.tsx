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
    <section className="bg-surface py-12 -mt-[60px]">
      <div className="w-[1310px] mx-auto">
        <FadeIn>
          <div className="rounded-2xl border border-[#E6E8EC] bg-white p-8" style={{ boxShadow: '0 34px 56.8px 0 rgba(0, 0, 0, 0.06)' }}>
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

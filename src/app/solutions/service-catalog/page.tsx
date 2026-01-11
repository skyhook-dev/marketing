import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";
import { ValueProps } from "@/components/home/ValueProps";

export const metadata: Metadata = {
  title: "Service Catalog",
  description: "Build your internal developer platform with Skyhook's service catalog. Give developers self-service access to deploy and manage services on Kubernetes.",
};

export default function ServiceCatalogPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden -mt-16">
      {/* Background Decoration */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          width: '2529.492px',
          height: '1026.095px',
          transform: 'rotate(17.015deg)',
          borderRadius: '2529.492px',
          background: '#2D7AFF',
          filter: 'blur(302px)',
          top: '-220px',
          left: '50%',
          marginLeft: '-1265px',
          opacity: '0.1'
        }}
      />
      <div className="relative z-10">
        {/* Hero Section - Text Only */}
        <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 pt-32 md:pt-48 pb-12">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <h1
              className="text-[#101927] font-semibold leading-[120%] text-[36px] md:text-[60px]"
              style={{ fontFamily: '"DM Sans"' }}
            >
              Internal developer platform
            </h1>
            <p
              className="text-[#445166] font-normal leading-normal text-[18px] md:text-[20px]"
              style={{ fontFamily: '"DM Sans"' }}
            >
              An internal developer portal and platform, all in one. Skyhook is your kubernetes-based platform. Its developer interface turns Skyhook into an internal developer portal too.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 mt-2 justify-center w-full">
              <Button href="/demo">Get a demo</Button>
              <Button href="https://app.skyhook.io" variant="secondary" external>Start deploying</Button>
            </div>
          </div>
        </div>

        {/* Line separator */}
        <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0">
          <div
            style={{
              width: '100%', maxWidth: '1310px',
              height: '0',
              strokeWidth: '1px',
              borderBottom: '1px solid #E5E5E5'
            }}
          />
        </div>

        {/* Section 1 - Text Left, Image Right */}
        <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 py-12 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[102px]">
            {/* Left Side */}
            <div className="flex w-full lg:w-[532px] flex-col items-start gap-5">
              <h2
                className="text-[#101927] font-semibold leading-[110%] text-[32px] md:text-[50px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                An effortless platform and an interface too
              </h2>
              <p
                className="text-[#445166] font-normal leading-normal text-[16px] md:text-[18px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                Skyhook’s basic setup delivers a kubernetes platform that’s made of the best dev tools you need, saving you the toil to connect and configure them. We’re also flexible enough to support any change you can imagine, so that you can customize as you grow.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/images/solutions/service-catalog/catalog-1.svg"
                alt="Service Catalog"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        <ValueProps />
        {/* CTA Section */}
        <CTA />
      </div>
    </div>
  );
}

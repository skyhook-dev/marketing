import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";
import { ValueProps } from "@/components/home/ValueProps";

export const metadata: Metadata = {
  title: "Preview Environments",
  description: "Spin up isolated preview environments for every pull request. Test changes in production-like conditions before merging with Skyhook's automated preview deployments.",
};

const features = [
  {
    icon: "/images/solutions/preview-envs/preview-illus-1.svg",
    title: "Open a pull request",
    description: "It’s as simple as that to kick off a new isolated environment with your required set of services."
  },
  {
    icon: "/images/solutions/preview-envs/preview-illus-2.svg",
    title: "Deployed automatically",
    description: "Skyhook automatically builds and deploys a complete, isolated environment for that PR on your Kubernetes cluster."
  },
  {
    icon: "/images/solutions/preview-envs/preview-illus-3.svg",
    title: "Test, share, and merge",
    description: "Each preview environment gets a unique URL. When you merge or close the PR, Skyhook tears down the environment automatically."
  }
];

export default function PreviewEnvironmentsPage() {
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
              One-click ephemeral environments
            </h1>
            <p
              className="text-[#445166] font-normal leading-normal text-[18px] md:text-[20px]"
              style={{ fontFamily: '"DM Sans"' }}
            >
              Test, iterate and collaborate using pre-production environments for every specific code branch or pull request.
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
                Preview environments made easy
              </h2>
              <p
                className="text-[#445166] font-normal leading-normal text-[16px] md:text-[18px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                Skyhook automatically spins up a production-like environment for every pull request – no scripts, no waiting and full environment parity. It’s a Kubernetes-native approach that fits right into your workflow and makes preview environments dead simple for developers.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/images/solutions/preview-envs/preview-1.svg"
                alt="Preview Made Easy"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Section 2 - Image Left, Text Right */}
        <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 py-12 md:py-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[102px]">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/images/solutions/preview-envs/preview-2.svg"
                alt="No More Work"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Right Side */}
            <div className="flex w-full lg:w-[532px] flex-col items-start gap-5">
              <h2
                className="text-[#101927] font-semibold leading-[110%] text-[32px] md:text-[50px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                The preview environments you need, without the work
              </h2>
              <p
                className="text-[#445166] font-normal leading-normal text-[16px] md:text-[18px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                Preview environments means that workflows can be easily promoted, but actually doing this requires devops effort you may not be able to support. Free your platform and ops people to focus on what matters most and leverage Skyhook’s preview environments.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 - How It Works Grid */}
        <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 py-12 pb-24">
          <div className="flex flex-col items-center gap-12 md:gap-[60px] self-stretch">
            <h2
              className="text-[#101927] text-center font-semibold leading-[120%] text-[32px] md:text-[50px]"
              style={{ fontFamily: '"DM Sans"' }}
            >
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 self-stretch">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-6 p-6 rounded-xl bg-white border border-[#E5E5E5]"
                >
                  <img src={feature.icon} alt={feature.title} className="w-auto h-32 object-contain" />
                  <div className="flex flex-col gap-3">
                    <h3
                      className="text-[#101927] font-semibold leading-normal text-[20px]"
                      style={{ fontFamily: '"DM Sans"' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[#445166] font-normal text-[16px] leading-[140%]"
                      style={{ fontFamily: '"DM Sans"' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
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

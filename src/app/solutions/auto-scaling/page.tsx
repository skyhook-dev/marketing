import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";
import { ValueProps } from "@/components/home/ValueProps";

export const metadata: Metadata = {
  title: "Auto Scaling",
  description: "Right-size your Kubernetes infrastructure automatically. Skyhook handles horizontal and vertical pod autoscaling, plus cluster autoscaling for optimal cost and performance.",
};

export default function AutoScalingPage() {
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
              Right size your platform
            </h1>
            <p
              className="text-[#445166] font-normal leading-normal text-[18px] md:text-[20px]"
              style={{ fontFamily: '"DM Sans"' }}
            >
              Handle traffic surges and evolving workloads with automated scaling solutions. Optimize resources and get rid of underutilization, without the toil.
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
                Autoscale efficiently
              </h2>
              <p
                className="text-[#445166] font-normal leading-normal text-[16px] md:text-[18px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                Skyhook lets you easily define your replica counts, so you can sit back and watch auto-scaling work. You can define the guardrails to ensure that your platform scales according to your policies and processes, and schedule jobs to run when compute costs are more favorable. You can also ensure automatic scale down during off-peak hours to save costs.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/images/solutions/scaling/scaling-1.svg"
                alt="Autoscale Efficiently"
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
                src="/images/solutions/scaling/scaling-2.svg"
                alt="Scaling Needs Without The Work"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Right Side */}
            <div className="flex w-full lg:w-[532px] flex-col items-start gap-5">
              <h2
                className="text-[#101927] font-semibold leading-[110%] text-[32px] md:text-[50px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                Your scaling needs, without the work
              </h2>
              <p
                className="text-[#445166] font-normal leading-normal text-[16px] md:text-[18px]"
                style={{ fontFamily: '"DM Sans"' }}
              >
                Instead of connecting tools and dealing with the cognitive load of Kubernetes and cloud platform, Skyhook lets you scale seamlessly with the devops effort. Free your platform and ops people to focus on what matters most and leverage Skyhook’s auto-scaling capabilities.
              </p>
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

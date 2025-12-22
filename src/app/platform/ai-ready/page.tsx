import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
   title: "AI Ready",
   description: "Make your Kubernetes platform AI-ready with Skyhook. Structured context for AI agents, MCP server integration, and intelligent automation.",
};

export default function AIReadyPage() {
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
            {/* Hero Section */}
            <div className="w-full mx-auto pt-32 md:pt-48 pb-12">
               {/* Title and Subtitle */}
               <div className="flex flex-col items-center gap-3 mb-8 px-4">
                  <h1
                     className="text-[#101927] text-center font-semibold leading-[120%] text-[36px] md:text-[60px]"
                     style={{ fontFamily: '"DM Sans"' }}
                  >
                     The context you need for AI-readiness
                  </h1>
                  <p
                     className="text-[#445166] text-center font-normal leading-normal max-w-3xl text-[18px] md:text-[20px]"
                     style={{ fontFamily: '"DM Sans"' }}
                  >
                     Skyhook's platform is set up to provide the right context to be used by the Skyhook agent or your MCP server, so you can set up ai-driven developer self-service quickly and easily.
                  </p>
               </div>

               {/* CTAs */}
               <div className="flex justify-center gap-4 mb-4">
                  <Button href="/demo">Get a demo</Button>
                  <Button href="https://app.skyhook.io" variant="secondary" external>Start deploying</Button>
               </div>

               {/* Header Image */}
               <div className="relative flex justify-center">
                  <img
                     src="/images/platform/ai agent/ai-agen-header.svg"
                     alt="AI Agent Header"
                     className="h-auto w-full max-w-[1685px]"
                  />
                  {/* Line attached to bottom of image */}
                  <div
                     className="absolute left-1/2 -translate-x-1/2 bottom-0"
                     style={{
                        width: '100%', maxWidth: '1310px',
                        height: '0',
                        strokeWidth: '1px',
                        borderBottom: '1px solid #E5E5E5'
                     }}
                  />
               </div>
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
                        Get AI-ready with the context needed for self-service
                     </h2>
                     <p
                        className="text-[#445166] font-normal leading-normal text-[16px] md:text-[18px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Skyhook's agent knows your stack, your standards and the golden paths enabled through your platform. But it does so much more than that:
                     </p>

                     {/* Bullets */}
                     <div className="flex py-5 flex-col items-start gap-[17px] self-stretch">
                        <div className="flex items-start gap-3">
                           <img
                              src="/images/check.svg"
                              alt="check"
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                           />
                           <span
                              className="text-[#445166] font-normal leading-normal"
                              style={{ fontFamily: '"DM Sans"', fontSize: '18px' }}
                           >
                              Identifies potential issues or optimization opportunities before they occur.
                           </span>
                        </div>
                        <div className="flex items-start gap-3">
                           <img
                              src="/images/check.svg"
                              alt="check"
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                           />
                           <span
                              className="text-[#445166] font-normal leading-normal"
                              style={{ fontFamily: '"DM Sans"', fontSize: '18px' }}
                           >
                              Instantly troubleshoot and resolve incidents with AI-powered recommendations.
                           </span>
                        </div>
                        <div className="flex items-start gap-3">
                           <img
                              src="/images/check.svg"
                              alt="check"
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                           />
                           <span
                              className="text-[#445166] font-normal leading-normal"
                              style={{ fontFamily: '"DM Sans"', fontSize: '18px' }}
                           >
                              Automates repetitive tasks like log analysis, query execution, and deployment approvals.
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex-1 flex items-center justify-center">
                     <img
                        src="/images/platform/ai agent/ai-agent-1.svg"
                        alt="AI Agent Context"
                        className="w-full h-auto"
                     />
                  </div>
               </div>
            </div>

            {/* Section 2 - Image Left, Text Right */}
            <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 py-12 md:py-24">
               <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[102px]">
                  {/* Left Side - Image */}
                  <div className="flex items-center justify-center">
                     <img
                        src="/images/platform/ai agent/ai-agent-2.svg"
                        alt="Chat with Agent"
                        className="h-auto w-full max-w-[676px]"
                     />
                  </div>

                  {/* Right Side */}
                  <div className="flex flex-col items-start gap-[14px] self-stretch flex-1">
                     <h2
                        className="text-[#101927] font-semibold leading-[110%] text-[32px] md:text-[50px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Chat with an agent, in context
                     </h2>
                     <p
                        className="text-[#445166] font-normal leading-normal text-[16px] md:text-[18px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Skyhook's agent provides developers and devops with the data they need. It's an agent that already knows your entire environment. You don't need to explain the architecture, the ports, the configurations.
                     </p>
                  </div>
               </div>
            </div>

            {/* Section 3 - Text Left, Image Right */}
            <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 py-12 md:py-24 pb-6">
               <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[102px]">
                  {/* Left Side */}
                  <div className="flex w-full lg:w-[532px] flex-col items-start gap-6">
                     <h2
                        className="text-[#101927] font-semibold leading-[110%] text-[32px] md:text-[50px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Agents can do work, too
                     </h2>
                     <p
                        className="text-[#445166] font-normal leading-normal text-[16px] md:text-[18px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Within the context provided by Skyhook, your standards and guardrails, agents can also perform actions, such as autoscaling, resolving incidents or optimizing resources.
                     </p>

                     {/* Info Box */}
                     <div className="flex items-center gap-5 flex-1 self-stretch">
                        <div
                           className="flex p-5 items-center gap-[34px] self-stretch rounded-xl"
                           style={{ background: '#F6FAFF' }}
                        >
                           <img
                              src="/images/platform/ai agent/ai-agent-shield.svg"
                              alt="Shield"
                              className="w-auto h-auto flex-shrink-0"
                           />
                           <p
                              className="text-[#445166] font-normal leading-normal text-[14px] md:text-[16px]"
                              style={{ fontFamily: '"DM Sans"' }}
                           >
                              AI agent actions go through GitHub and are managed by GitHub permissions - meaning that you know that RBAC and an audit trail are dealt with.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex-1 flex items-center justify-center">
                     <img
                        src="/images/platform/ai agent/ai-agent-3.svg"
                        alt="Agent Actions"
                        className="w-full h-auto"
                     />
                  </div>
               </div>
            </div>
         </div>

         {/* CTA Section */}
         <CTA />
      </div>
   );
}

import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
   title: "Deploy",
   description: "Deploy to Kubernetes with confidence. Skyhook handles rollout strategies, environment management, and GitOps workflows for fast, reliable releases.",
};

const bentoItems = [
   {
      image: "/images/platform/deploy/deploy-illus-1.svg",
      title: "Select an Image",
      description: "Choose the container image you want. Skyhook supports images from public or private registries, giving you full flexibility."
   },
   {
      image: "/images/platform/deploy/deploy-illus-2.svg",
      title: "Define Deployment Settings",
      description: "Specify how your application should run – number of replicas, CPU/memory limits, environment variables, and any required services."
   },
   {
      image: "/images/platform/deploy/deploy-illus-3.svg",
      title: "One-Click or CI-triggered Deploy",
      description: "Hit deploy in the dashboard or let Skyhook auto-deploy new images when they pass tests. Skyhook will create or update the Kubernetes resources."
   },
   {
      image: "/images/platform/deploy/deploy-illus-4.svg",
      title: "Rolling Updates",
      description: "Skyhook updates your application using rolling updates by default. New pods come up before old ones are terminated, ensuring continuous service availability."
   },
   {
      image: "/images/platform/deploy/deploy-illus-5.svg",
      title: "Access & Networking",
      description: "Once running, your service is reachable via a stable endpoint. Skyhook can provision a DNS name and TLS certificate for public services."
   }
];

const features = [
   {
      icon: "/images/platform/deploy/deploy-icon-1.svg",
      title: "Zero-Downtime Deployments",
      description: "Uses Kubernetes rollout mechanisms to update applications without interrupting service. Updates are applied gradually, and only healthy pods receive traffic."
   },
   {
      icon: "/images/platform/deploy/deploy-icon-2.svg",
      title: "Declarative Configuration",
      description: "Everything about your deployment can be defined in declarative files. Skyhook can sync with Git so your deployments are version-controlled."
   },
   {
      icon: "/images/platform/deploy/deploy-icon-3.svg",
      title: "Canary & Blue-Green Support",
      description: "Gradually shift traffic between old and new versions or run two versions in parallel for testing. Advanced teams can implement canary or blue-green strategies."
   },
   {
      icon: "/images/platform/deploy/deploy-icon-4.svg",
      title: "Configurable Environments",
      description: "Deploy to multiple environments (dev, staging, prod) with the same process. Promote a build through environments with one click."
   },
   {
      icon: "/images/platform/deploy/deploy-icon-5.svg",
      title: "Integration Hooks",
      description: "Integrate with external CI/CD systems or pipelines. Use GitHub Actions or ArgoCD to trigger Skyhook deployments via API."
   }
];

export default function DeployPage() {
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
            <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 pt-32 md:pt-48 pb-0">
               <div className="flex flex-col lg:flex-row items-start gap-10">
                  {/* Left Side */}
                  <div className="flex flex-col items-start gap-3 flex-1">
                     <h1
                        className="text-[#101927] font-semibold leading-[120%] text-[36px] md:text-[60px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Deploy with Skyhook
                     </h1>
                     <p
                        className="text-[#445166] font-normal leading-normal text-[18px] md:text-[20px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Release your applications in a fast, repeatable, and worry-free process. Skyhook takes container images and launches them onto your Kubernetes cluster with minimal configuration.
                     </p>

                     {/* CTAs */}
                     <div className="flex gap-4 mt-4">
                        <Button href="/demo">Get a demo</Button>
                        <Button href="https://app.skyhook.io" variant="secondary" external>Start deploying</Button>
                     </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex items-center justify-center">
                     <img
                        src="/images/platform/deploy/deploy-header.svg"
                        alt="Deploy Header"
                        className="h-auto"
                     />
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

            {/* How It Works Section */}
            <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 pt-12 md:pt-24 pb-12">
               <div className="flex flex-col items-center gap-12 md:gap-[60px] self-stretch">
                  <h2
                     className="text-[#101927] text-center font-semibold leading-[120%] text-[32px] md:text-[50px]"
                     style={{ fontFamily: '"DM Sans"' }}
                  >
                     How It Works
                  </h2>

                  {/* Bento Grid */}
                  <div className="flex flex-col items-start gap-5 self-stretch h-auto md:h-[755px]">
                     <div className="flex flex-col md:flex-row gap-5 self-stretch">
                        {/* First 3 boxes */}
                        {bentoItems.slice(0, 3).map((item, index) => (
                           <div
                              key={index}
                              className="flex flex-col items-start gap-2.5 self-stretch rounded-xl border border-[#E5E5E5] w-full md:w-[423.333px]"
                              style={{
                                 
                                 padding: '20px',
                                 background: '#FFFFFF'
                              }}
                           >
                              {/* Image Container */}
                              <div
                                 className="flex items-center flex-shrink-0 self-stretch"
                                 style={{
                                    height: '177px',
                                    padding: '17.928px 162.937px 17.928px 16px'
                                 }}
                              >
                                 <img src={item.image} alt={item.title} className="h-auto" />
                              </div>

                              {/* Text Content */}
                              <div className="flex flex-col items-start gap-3 self-stretch">
                                 <h3
                                    className="text-[#101927] font-semibold leading-normal"
                                    style={{ fontFamily: '"DM Sans"', fontSize: '18px' }}
                                 >
                                    {item.title}
                                 </h3>
                                 <p
                                    className="text-[#445166] font-normal"
                                    style={{
                                       fontFamily: '"DM Sans"',
                                       fontSize: '16px',
                                       lineHeight: '140%'
                                    }}
                                 >
                                    {item.description}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="flex flex-col md:flex-row gap-5 self-stretch">
                        {/* Last 2 boxes */}
                        {bentoItems.slice(3, 5).map((item, index) => (
                           <div
                              key={index}
                              className="flex flex-col items-start gap-2.5 self-stretch rounded-xl border border-[#E5E5E5] w-full md:w-[423.333px] flex-1"
                              style={{
                                 padding: '20px',
                                 background: '#FFFFFF'
                              }}
                           >
                              {/* Image Container */}
                              <div
                                 className="flex items-center flex-shrink-0 self-stretch"
                                 style={{
                                    height: '177px',
                                    padding: '17.928px 162.937px 17.928px 16px'
                                 }}
                              >
                                 <img src={item.image} alt={item.title} className="h-auto" />
                              </div>

                              {/* Text Content */}
                              <div className="flex flex-col items-start gap-3 self-stretch">
                                 <h3
                                    className="text-[#101927] font-semibold leading-normal"
                                    style={{ fontFamily: '"DM Sans"', fontSize: '18px' }}
                                 >
                                    {item.title}
                                 </h3>
                                 <p
                                    className="text-[#445166] font-normal"
                                    style={{
                                       fontFamily: '"DM Sans"',
                                       fontSize: '16px',
                                       lineHeight: '140%'
                                    }}
                                 >
                                    {item.description}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Features Section */}
            <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 pt-6 pb-6">
               <div className="flex flex-col items-center gap-12 md:gap-[60px] self-stretch">
                  <h2
                     className="text-[#101927] text-center font-semibold leading-[120%] text-[32px] md:text-[50px]"
                     style={{ fontFamily: '"DM Sans"' }}
                  >
                     Features
                  </h2>

                  {/* Features Grid - 5 items in custom layout */}
                  <div className="flex flex-col gap-5 self-stretch">
                     {/* First row - 3 items */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {features.slice(0, 3).map((feature, index) => (
                           <div
                              key={index}
                              className="flex items-start gap-2.5 self-stretch rounded-xl w-full md:w-[428.667px]"
                              style={{
                                 
                                 padding: '30px 20px',
                                 background: '#F6FAFF'
                              }}
                           >
                              <div className="flex flex-col items-start gap-4 flex-1 self-stretch">
                                 {/* Icon */}
                                 <img src={feature.icon} alt={feature.title} className="w-auto h-auto" />

                                 {/* Text Content */}
                                 <div className="flex flex-col items-start gap-3 self-stretch">
                                    <h3
                                       className="text-[#101927] font-semibold leading-normal"
                                       style={{ fontFamily: '"DM Sans"', fontSize: '18px' }}
                                    >
                                       {feature.title}
                                    </h3>
                                    <p
                                       className="text-[#445166] font-normal leading-normal"
                                       style={{ fontFamily: '"DM Sans"', fontSize: '16px' }}
                                    >
                                       {feature.description}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* Second row - 2 items stretched */}
                     <div className="flex flex-col md:flex-row gap-5 self-stretch">
                        {features.slice(3, 5).map((feature, index) => (
                           <div
                              key={index}
                              className="flex items-start gap-2.5 rounded-xl flex-1"
                              style={{
                                 padding: '30px 20px',
                                 background: '#F6FAFF'
                              }}
                           >
                              <div className="flex flex-col items-start gap-4 flex-1 self-stretch">
                                 {/* Icon */}
                                 <img src={feature.icon} alt={feature.title} className="w-auto h-auto" />

                                 {/* Text Content */}
                                 <div className="flex flex-col items-start gap-3 self-stretch">
                                    <h3
                                       className="text-[#101927] font-semibold leading-normal"
                                       style={{ fontFamily: '"DM Sans"', fontSize: '18px' }}
                                    >
                                       {feature.title}
                                    </h3>
                                    <p
                                       className="text-[#445166] font-normal leading-normal"
                                       style={{ fontFamily: '"DM Sans"', fontSize: '16px' }}
                                    >
                                       {feature.description}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            {/* CTA Section */}
            <CTA />
         </div>
      </div>
   );
}

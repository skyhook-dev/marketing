import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
   title: "Grow",
   description: "Scale your applications and team with Skyhook. Auto-scaling, cost optimization, and insights to grow efficiently on Kubernetes.",
};

const bentoItems = [
   {
      image: "/images/platform/grow/grow-illus-1.svg",
      title: "Auto-Scaling",
      description: "Automatically scale your applications based on demand. Skyhook uses Kubernetes Horizontal Pod Autoscaler to add or remove replicas as needed."
   },
   {
      image: "/images/platform/grow/grow-illus-2.svg",
      title: "Cost Optimization",
      description: "Monitor and optimize your cloud costs. Skyhook provides insights into resource usage and helps you right-size your deployments."
   },
   {
      image: "/images/platform/grow/grow-illus-3.svg",
      title: "Performance Insights",
      description: "Get detailed metrics and analytics about your applications. Understand usage patterns and optimize for better performance."
   },
   {
      image: "/images/platform/grow/grow-illus-4.svg",
      title: "Team Collaboration",
      description: "Enable your team to work together efficiently. Skyhook provides role-based access control and audit trails for all actions."
   }
];

const features = [
   {
      icon: "/images/platform/grow/grow-icon-1.svg",
      title: "Horizontal Scaling",
      description: "Scale out by adding more instances of your application. Kubernetes distributes load across all replicas automatically."
   },
   {
      icon: "/images/platform/grow/grow-icon-2.svg",
      title: "Resource Optimization",
      description: "Right-size your deployments based on actual usage. Avoid over-provisioning and reduce cloud costs while maintaining performance."
   },
   {
      icon: "/images/platform/grow/grow-icon-3.svg",
      title: "Usage Analytics",
      description: "Track application usage, request patterns, and resource consumption. Make data-driven decisions about scaling and optimization."
   },
   {
      icon: "/images/platform/grow/grow-icon-4.svg",
      title: "Team Management",
      description: "Manage team access with role-based permissions. Control who can deploy, scale, and manage different environments."
   },
   {
      icon: "/images/platform/grow/grow-icon-5.svg",
      title: "Audit Logging",
      description: "Complete audit trail of all platform actions. Track who did what and when for compliance and debugging."
   },
   {
      icon: "/images/platform/grow/grow-icon-6.svg",
      title: "Multi-Environment",
      description: "Manage multiple environments (dev, staging, prod) from a single platform. Promote changes through environments with confidence."
   }
];

export default function GrowPage() {
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
                        Grow with Skyhook
                     </h1>
                     <p
                        className="text-[#445166] font-normal leading-normal text-[18px] md:text-[20px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Scale your applications and team efficiently. Skyhook provides the tools and insights you need to grow without the complexity.
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
                        src="/images/platform/grow/grow-header.svg"
                        alt="Grow Header"
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

                  {/* Bento Grid - 4 items in 2x2 grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 self-stretch">
                     {bentoItems.map((item, index) => (
                        <div
                           key={index}
                           className="flex flex-col items-start gap-2.5 self-stretch rounded-xl border border-[#E5E5E5]"
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

            {/* Features Section */}
            <div className="w-full md:w-[1310px] mx-auto px-4 md:px-0 pt-6 pb-6">
               <div className="flex flex-col items-center gap-12 md:gap-[60px] self-stretch">
                  <h2
                     className="text-[#101927] text-center font-semibold leading-[120%] text-[32px] md:text-[50px]"
                     style={{ fontFamily: '"DM Sans"' }}
                  >
                     Features
                  </h2>

                  {/* Features Grid - 2 rows of 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 self-stretch">
                     {features.map((feature, index) => (
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
               </div>
            </div>

            {/* CTA Section */}
            <CTA />
         </div>
      </div>
   );
}

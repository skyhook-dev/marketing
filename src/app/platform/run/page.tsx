import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
   title: "Run",
   description: "Run production workloads on Kubernetes with Skyhook. Health checks, resource management, networking, and security policies out of the box.",
};

const bentoItems = [
   {
      image: "/images/platform/run/run-illus-1.svg",
      title: "Kubernetes Orchestration",
      description: "Skyhook creates Kubernetes resources on the cluster. Kubernetes schedules your pods on available nodes, optimizing resource usage."
   },
   {
      image: "/images/platform/run/run-illus-2.svg",
      title: "Health Management",
      description: "Configure health checks (readiness and liveness probes). Kubernetes monitors app health and automatically restarts failed containers."
   },
   {
      image: "/images/platform/run/run-illus-3.svg",
      title: "Scaling & Load Balancing",
      description: "Distribute traffic across multiple instances using Kubernetes Services. Define autoscaling policies to add or remove replicas based on demand."
   },
   {
      image: "/images/platform/run/run-illus-5.svg",
      title: "Secure Separation",
      description: "Each service runs in its own isolated environment with enforced CPU, memory, and network limits using Kubernetes security best practices."
   }
];

const features = [
   {
      icon: "/images/platform/run/run-icon-1.svg",
      title: "Self-Healing",
      description: "If a container crashes or a node goes offline, it will restart or reschedule automatically. Your services recover from failures without human intervention."
   },
   {
      icon: "/images/platform/run/run-icon-2.svg",
      title: "Traffic Management",
      description: "Built-in load balancing ensures even distribution of requests. Compatible with Istio, Linkerd, or any service mesh tool you choose."
   },
   {
      icon: "/images/platform/run/run-icon-3.svg",
      title: "Secrets & ConfigMaps",
      description: "Manage configuration and secrets securely. Inject configs or sensitive values via Kubernetes Secrets and ConfigMaps at runtime."
   },
   {
      icon: "/images/platform/run/run-icon-4.svg",
      title: "High Availability",
      description: "Deployments spread across multiple nodes for resilience. Your app instances remain available even during node maintenance or outages."
   },
   {
      icon: "/images/platform/run/run-icon-5.svg",
      title: "Resource Quotas & Limits",
      description: "Set CPU and memory limits for each application. Kubernetes enforces these at runtime for predictable performance."
   },
   {
      icon: "/images/platform/run/run-icon-6.svg",
      title: "Rolling Maintenance",
      description: "Perform cluster or application maintenance with minimal disruption using rolling updates coordinated by Kubernetes controllers."
   }
];

export default function RunPage() {
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
                        Run with Skyhook
                     </h1>
                     <p
                        className="text-[#445166] font-normal leading-normal text-[18px] md:text-[20px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Keep your applications healthy, performant, and secure once they're deployed. Get the reliability and resilience of Kubernetes without the manual overhead.
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
                        src="/images/platform/run/run-header.svg"
                        alt="Run Header"
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

                  {/* Bento Grid - Only 4 items, so 2x2 grid */}
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

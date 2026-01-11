
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
   title: "Observe",
   description: "Monitor your Kubernetes applications with Skyhook. Centralized logging, metrics, tracing, and alerting to keep your services healthy and performant.",
};

// Bento Data
const bentoItems = [
   {
      image: "/images/platform/observe/observe-illus-1.svg",
      title: "Centralized Logging",
      description: "Skyhook aggregates logs from all your application pods. View real-time streaming logs in the web console or CLI, filtered by service or severity."
   },
   {
      image: "/images/platform/observe/observe-illus-2.svg",
      title: "Metrics & Dashboards",
      description: "Collect key metrics from Kubernetes and your containers (CPU, memory, requests). View on intuitive dashboards to see service performance at a glance."
   },
   {
      image: "/images/platform/observe/observe-illus-3.svg",
      title: "Alerts & Notifications",
      description: "Define thresholds for critical metrics or error rates. Integrate with alerting systems to notify your team when something’s amiss."
   },
   {
      image: "/images/platform/observe/observe-illus-4.svg",
      title: "Audit and History",
      description: "Every deployment, configuration change, and alert is recorded. Get a complete audit trail for debugging and compliance."
   }
];

// Features Data
const features = [
   {
      icon: "/images/platform/observe/observe-icon-1.svg",
      title: "Live Log Stream",
      description: "Access stdout/stderr logs from all pods in real time. Search and filter logs by keywords or service name to quickly locate errors."
   },
   {
      icon: "/images/platform/observe/observe-icon-2.svg",
      title: "Custom Metrics Support",
      description: "Expose custom business or application metrics via endpoints. Skyhook scrapes and displays these alongside system metrics."
   },
   {
      icon: "/images/platform/observe/observe-icon-3.svg",
      title: "Third-Party Integration",
      description: "Pipe data to external systems using standard protocols. Send logs to ELK or metrics to Datadog with straightforward integration."
   },
   {
      icon: "/images/platform/observe/observe-icon-4.svg",
      title: "Built-in Monitoring Stack",
      description: "Pre-integrated monitoring stack gathering container and node metrics automatically for instant observability out-of-the-box."
   },
   {
      icon: "/images/platform/observe/observe-icon-5.svg",
      title: "Alert Rules Engine",
      description: "Flexible rules engine to define alert conditions. Configure notifications to Slack, Email, or PagerDuty."
   },
   {
      icon: "/images/platform/observe/observe-icon-6.svg",
      title: "Secure and Compliant",
      description: "Telemetry data is transmitted securely. Role-based access ensures sensitive logs are only visible to authorized personnel."
   }
];

export default function ObservePage() {
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
                        Observe with Skyhook
                     </h1>
                     <p
                        className="text-[#445166] font-normal leading-normal text-[18px] md:text-[20px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Skyhook has built-in observability from day one. Monitor, trace, and troubleshoot your applications with ease through a single pane of glass.
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
                        src="/images/platform/observe/observe-header.svg"
                        alt="Observe Header"
                        className="w-full h-auto"
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

                  {/* Features Grid */}
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

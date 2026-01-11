import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
   title: "Build",
   description: "Build container images from your code with Skyhook. Automated CI pipelines, multi-architecture builds, and secure image registries for Kubernetes deployments.",
};

const bentoItems = [
   {
      image: "/images/platform/build/build-illus-1.svg",
      title: "Connect Your Repo",
      description: "Link your Git repository (GitHub, GitLab, etc.) to Skyhook. Commits can automatically trigger the build pipeline."
   },
   {
      image: "/images/platform/build/build-illus-2.svg",
      title: "Containerized Build Process",
      description: "Skyhook ensures the process end-to-end: compile code, run tests, and package your application with consistency across environments."
   },
   {
      image: "/images/platform/build/build-illus-3.svg",
      title: "Flexible Build Configuration",
      description: "Use your own Dockerfile or use the Skyhook defaults. Customize environment variables and dependencies as needed."
   },
   {
      image: "/images/platform/build/build-illus-4.svg",
      title: "Optimized Artifacts",
      description: "The pipeline produces an OCI-compliant container image ready for deployment. Built images can be pushed to your preferred registry."
   },
   {
      image: "/images/platform/build/build-illus-5.svg",
      title: "Feedback & Logs",
      description: "Developers get immediate feedback. Real-time logs and notifications inform you of success or failure."
   }
];

const features = [
   {
      icon: "/images/platform/build/build-icon-1.svg",
      title: "Bulletproof CI",
      description: "The system can run multiple builds in parallel, auto-scaling build agents to meet your team's demand."
   },
   {
      icon: "/images/platform/build/build-icon-2.svg",
      title: "Layer Caching",
      description: "Intelligent caching speeds up repeat builds by reusing unchanged layers. This dramatically cuts down build times for iterative development."
   },
   {
      icon: "/images/platform/build/build-icon-3.svg",
      title: "Security Scanning",
      description: "Integrate container scanning tools in the pipeline. Easily plug in vulnerability scanners or linters without modifying your base environment."
   },
   {
      icon: "/images/platform/build/build-icon-4.svg",
      title: "Multi-Language Support",
      description: "Build applications in Node, Python, Java, Go, or any language. If it can run in a container, Skyhook can build it."
   },
   {
      icon: "/images/platform/build/build-icon-5.svg",
      title: "Configuration as Code",
      description: "Define build steps and environment in a YAML config. Your build process lives alongside your code, versioned and auditable."
   },
   {
      icon: "/images/platform/build/build-icon-6.svg",
      title: "Artifact Management",
      description: "Store build outputs and track build history. Every build is tagged and timestamped, making it easy to trace which code went into which image."
   }
];

export default function BuildPage() {
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
                        Build with Skyhook
                     </h1>
                     <p
                        className="text-[#445166] font-normal leading-normal text-[18px] md:text-[20px]"
                        style={{ fontFamily: '"DM Sans"' }}
                     >
                        Take your code from repository to container image with unmatched speed and reliability. Leverage a Kubernetes-native pipeline that scales on demand.
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
                        src="/images/platform/build/build-header.svg"
                        alt="Build Header"
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
                              className="flex flex-col items-start gap-2.5 self-stretch rounded-xl border border-[#E5E5E5] flex-1"
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

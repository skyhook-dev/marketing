"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

type DrawerId = "platform" | "selfservice" | "kubernetes";

const devOpsDrawers = [
  {
    id: "platform" as const,
    label: "Great DevOps, ready to roll",
    bullets: [
      "An instant platform that would take weeks or months to create",
      "Integrates with the best tools you know and love",
      "Supports any language or framework",
    ],
    image: "/images/for-devops/devops-1.svg"
  },
  {
    id: "selfservice" as const,
    label: "Reusable self-service actions",
    bullets: [
      "Self-service interfaces for build, run and deploy",
      "Service catalog",
      "Stay in control, easily apply guardrails and policies",
    ],
    image: "/images/for-devops/devops-2.svg"
  },
  {
    id: "kubernetes" as const,
    label: "Kubernetes, solved",
    bullets: [
      "Any cloud: AWS, AKS, GKE or bring your own",
      "Make day-to-day operations accessible for all developers",
      "A one-line helm install and you're all set",
    ],
    image: "/images/for-devops/devops-3.svg"
  },
];

const developersBullets = [
  "Leverage the K8s ecosystem without expertise",
  "Preview environments to canary deployments",
  "Easy to follow golden paths",
];

// --- 1. Section Layout Component ---
const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("grid grid-cols-2 h-full w-full max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

// --- 2. Graphics (Visuals) ---

const VisualDevOps = ({
  activeImage,
  openDrawer
}: {
  activeImage: string;
  openDrawer: DrawerId;
}) => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.img
        key={openDrawer}
        src={activeImage}
        alt="DevOps visualization"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.4, ease: "backOut" }}
        className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain relative z-10"
      />
    </AnimatePresence>
  </div>
);

const VisualDevelopers = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
    <motion.img
      src="/images/for-dev/Dev-image.svg"
      alt="Developer interface"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full h-auto max-w-xl"
    />
  </div>
);

// --- 3. Content Sections ---

const ContentDevOps = ({
  openDrawer,
  toggleDrawer,
}: {
  openDrawer: DrawerId;
  toggleDrawer: (id: DrawerId) => void;
}) => (
  <div className="max-w-md space-y-6">
    <h2 className="heading-lg tracking-tight">
      Every <span className="text-accent">DevOps</span> dream come true
    </h2>
    <p className="text-body text-lg">
      The platform and tools you never had the time to set up. With all the control you need.
    </p>

    {/* Accordion Drawers */}
    <div className="w-full pt-4">
      {devOpsDrawers.map((drawer) => (
        <div key={drawer.id} className="relative group">
          <button
            onClick={() => toggleDrawer(drawer.id)}
            className={cn(
              "flex w-full justify-between items-center py-4 cursor-pointer transition-all",
              openDrawer !== drawer.id && "border-b border-border group-hover:border-ink-tertiary"
            )}
          >
            <span className={cn(
              "text-lg font-semibold transition-colors text-left",
              openDrawer === drawer.id ? "text-ink-primary" : "text-ink-secondary group-hover:text-ink-primary"
            )}>
              {drawer.label}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 transition-all duration-300 flex-shrink-0 ml-4",
                openDrawer === drawer.id ? "rotate-180 text-accent" : "text-ink-tertiary group-hover:text-ink-primary"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {openDrawer === drawer.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col items-start gap-2 pt-2 pb-4">
                  {drawer.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-body text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full h-[2px] overflow-hidden bg-transparent rounded-full">
            {openDrawer === drawer.id && (
              <div className="h-full bg-accent" style={{ animation: 'progressBar 10s linear forwards' }} />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContentDevelopers = () => (
  <div className="max-w-md space-y-6">
    <h2 className="heading-lg tracking-tight">
      A self-service interface for <span className="text-accent">Developers</span>
    </h2>
    <p className="text-body text-lg">
      Like an internal developer portal without the K8s platform setup
    </p>

    {/* Bullet Points */}
    <div className="flex flex-col gap-3 pt-4">
      {developersBullets.map((bullet, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface transition-all"
        >
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center text-success mt-0.5">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-body font-medium">{bullet}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- 4. Mobile Layout ---

const MobileAudienceSplit = ({
  openDrawer,
  toggleDrawer,
  activeImage
}: {
  openDrawer: DrawerId;
  toggleDrawer: (id: DrawerId) => void;
  activeImage: string;
}) => (
  <section className="lg:hidden py-16 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* DevOps Section */}
      <div className="flex flex-col gap-8 mb-20">
        <div className="text-center">
          <div className="badge badge-accent mb-6 inline-block">For DevOps</div>
          <h2 className="heading-lg tracking-tight mb-4">
            Every <span className="text-accent">DevOps</span> dream come true
          </h2>
          <p className="text-body text-lg mb-8">
            The platform and tools you never had the time to set up. With all the control you need.
          </p>
        </div>
        
        <div className="w-full">
          {devOpsDrawers.map((drawer) => (
            <div key={drawer.id} className="relative group">
              <button
                onClick={() => toggleDrawer(drawer.id)}
                className={cn(
                  "flex w-full justify-between items-center py-4 cursor-pointer transition-all",
                  openDrawer !== drawer.id && "border-b border-border"
                )}
              >
                <span className={cn(
                  "text-base font-semibold transition-colors text-left",
                  openDrawer === drawer.id ? "text-ink-primary" : "text-ink-secondary"
                )}>
                  {drawer.label}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-all duration-300 flex-shrink-0 ml-4",
                    openDrawer === drawer.id ? "rotate-180 text-accent" : "text-ink-tertiary"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {openDrawer === drawer.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col items-start gap-2 pt-2 pb-4">
                      {drawer.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-accent/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-body text-sm">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="w-full h-[2px] overflow-hidden bg-transparent rounded-full">
                {openDrawer === drawer.id && (
                  <div className="h-full bg-accent" style={{ animation: 'progressBar 10s linear forwards' }} />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full aspect-video bg-accent/5 rounded-xl flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={openDrawer}
              src={activeImage}
              alt="DevOps visualization"
              className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain drop-shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Developers Section */}
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <div className="badge badge-accent mb-6 inline-block">For Developers</div>
          <h2 className="heading-lg tracking-tight mb-4">
            A self-service interface for <span className="text-accent">Developers</span>
          </h2>
          <p className="text-body text-lg mb-8">
            Like an internal developer portal without the K8s platform setup
          </p>
        </div>
        
        <div className="w-full flex items-center justify-center">
          <img
            src="/images/for-dev/Dev-image.svg"
            alt="Developer interface"
            className="w-full h-auto max-w-lg drop-shadow-xl"
          />
        </div>
        
        <div className="flex flex-col gap-3">
          {developersBullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-surface/50">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center text-success mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-body font-medium">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- 5. Main Component ---

export function AudienceSplit() {
  const [openDrawer, setOpenDrawer] = useState<DrawerId>("platform");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 2 slides up from bottom as we scroll
  const section2Y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  // Track when we enter/exit the pinned section
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsInView(latest > 0 && latest < 1);
      setIsComplete(latest >= 1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Auto-rotate drawers every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenDrawer(current => {
        const currentIndex = devOpsDrawers.findIndex(d => d.id === current);
        const nextIndex = (currentIndex + 1) % devOpsDrawers.length;
        return devOpsDrawers[nextIndex].id;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = (id: DrawerId) => {
    if (openDrawer !== id) {
      setOpenDrawer(id);
    }
  };

  const activeImage = devOpsDrawers.find(d => d.id === openDrawer)?.image || devOpsDrawers[0].image;

  return (
    <>
      {/* ===== DESKTOP: Scroll-driven Parallax / Curtain Effect ===== */}
      <div
        ref={containerRef}
        className="hidden lg:block relative w-full h-[200vh]"
      >
        {/* Static Section 1 at top - visible before animation starts */}
        <div className="absolute top-0 left-0 right-0 h-screen flex items-center justify-center bg-background">
          <Section className="h-full">
            <div className="flex items-center justify-center bg-background">
              <ContentDevOps openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl">
              <VisualDevOps activeImage={activeImage} openDrawer={openDrawer} />
            </div>
          </Section>
        </div>

        {/* Fixed pinned view - only shown while scrolling through container */}
        {isInView && (
          <div className="fixed inset-0 z-40 overflow-hidden bg-background">
            {/* SECTION 1: FOR DEVOPS - Base layer */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Section className="h-screen">
                <div className="flex items-center justify-center bg-background">
                  <ContentDevOps openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl">
                  <VisualDevOps activeImage={activeImage} openDrawer={openDrawer} />
                </div>
              </Section>
            </div>

            {/* SECTION 2: FOR DEVELOPERS - Slides over Section 1 */}
            <motion.div
              style={{ y: section2Y }}
              className="absolute inset-0 z-10 flex items-center justify-center bg-background"
            >
              <Section className="h-screen">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
                  <VisualDevelopers />
                </div>
                <div className="flex items-center justify-center bg-background">
                  <ContentDevelopers />
                </div>
              </Section>
            </motion.div>
          </div>
        )}

        {/* Static Section 2 at bottom - visible after animation completes */}
        <div className="absolute bottom-0 left-0 right-0 h-screen flex items-center justify-center bg-background mb-4">
          <Section className="h-full">
            <div className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
              <VisualDevelopers />
            </div>
            <div className="flex items-center justify-center bg-background">
              <ContentDevelopers />
            </div>
          </Section>
        </div>

      </div>

      {/* ===== MOBILE: Standard Stacked Layout ===== */}
      <MobileAudienceSplit 
        openDrawer={openDrawer} 
        toggleDrawer={toggleDrawer} 
        activeImage={activeImage} 
      />
    </>
  );
}

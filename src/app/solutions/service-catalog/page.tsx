import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Book, Layout, Laptop } from "lucide-react";
import { ValueProps } from "@/components/home/ValueProps";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ServiceCatalogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Hero - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
              <Book className="w-4 h-4" />
              <span className="text-xs font-mono font-medium uppercase tracking-wide">Solution</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
               Internal developer platform
            </h1>
             <h2 className="text-2xl md:text-3xl text-ink-primary mb-6">
              An internal developer portal and platform, all in one
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
              Skyhook is your kubernetes-based platform. Its developer interface turns Skyhook into an internal developer portal too.
            </p>
          </div>
        </FadeIn>

        {/* Content - Below fold: Slide Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <FadeIn direction="up" className="space-y-8">
                <h2 className="text-3xl font-bold text-ink-primary">An effortless platform and an interface too</h2>
                <p className="text-lg text-ink-secondary leading-relaxed">
                    Skyhook’s basic setup delivers a kubernetes platform that’s made of the best dev tools you need, saving you the toil to connect and configure them. We’re also flexible enough to support any change you can imagine, so that you can customize as you grow.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-surface border border-ink-primary shadow-hard flex items-center justify-center flex-shrink-0">
                            <Layout className="w-5 h-5 text-ink-primary" />
                         </div>
                         <div>
                             <h3 className="text-xl font-bold text-ink-primary mb-1">A great developer experience</h3>
                             <p className="text-ink-secondary">Create an interface that delivers self-service actions that are abstracted, standards-compliant and follow the right golden paths.</p>
                         </div>
                    </div>
                     <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-surface border border-ink-primary shadow-hard flex items-center justify-center flex-shrink-0">
                            <Laptop className="w-5 h-5 text-ink-primary" />
                         </div>
                         <div>
                             <h3 className="text-xl font-bold text-ink-primary mb-1">Robust microservice catalog</h3>
                             <p className="text-ink-secondary">Skyhook provides both the actual underlying platform and the interface, saving the weeks or months it takes to build them.</p>
                         </div>
                    </div>
                </div>
            </FadeIn>
            
             <FadeIn direction="up" delay={0.2}>
               <BlueprintCard className="bg-surface min-h-[300px] flex items-center justify-center p-8">
                  <img 
                      src="/images/service_catalog.svg" 
                      alt="Service Catalog Interface"
                      className="w-full h-auto shadow-sm"
                  />
              </BlueprintCard>
            </FadeIn>
        </div>

        <FadeIn direction="up">
          <div className="mb-24 bg-surface border border-border p-12 shadow-hard text-center">
               <h2 className="text-3xl font-bold text-ink-primary mb-6">What makes us different</h2>
               <p className="text-lg text-ink-secondary leading-relaxed max-w-4xl mx-auto">
                  Skyhook’s basic setup delivers a platform that’s made of the best dev tools you need, saving you the toil to connect and configure them. We’re also flexible enough to support any change you can imagine, so that you can customize as you grow. It’s a kubernetes platform that’s ready to roll, without the lock-in of PaaS.
               </p>
          </div>
        </FadeIn>
      </div>
      
      <ValueProps />
    </div>
  );
}

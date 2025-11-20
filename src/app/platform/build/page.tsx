import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { Box, GitBranch, Container, Settings, FileText, Zap, Layers, ShieldCheck } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export default function BuildPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Above fold: Blur In */}
        <FadeIn direction="blur-in">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
              <Box className="w-4 h-4" />
              <span className="text-xs font-mono font-medium uppercase tracking-wide">Platform Feature</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-primary mb-6">
              Build with Skyhook
            </h1>
            <p className="text-xl text-ink-secondary max-w-3xl leading-relaxed">
              Take your code from repository to container image with unmatched speed and reliability. Leverage a Kubernetes-native pipeline that scales on demand, so every commit triggers a consistent build in an isolated environment. By automating builds, Skyhook ensures reproducible results and quick feedback for your developers.
            </p>
          </div>
        </FadeIn>

        {/* How It Works - Below fold: Slide Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
           <div className="space-y-12">
              <FadeIn direction="up">
                 <h2 className="text-3xl font-bold text-ink-primary mb-8">How It Works</h2>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-ink-primary shadow-hard flex items-center justify-center flex-shrink-0">
                          <GitBranch className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Connect Your Repo</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Link your Git repository (GitHub, GitLab, etc.) to Skyhook. Commits can automatically trigger the build pipeline.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-ink-primary shadow-hard flex items-center justify-center flex-shrink-0">
                          <Box className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Containerized Build Process</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Skyhook ensures the process end-to-end: compile code, run tests, and package your application with consistency across environments.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-ink-primary shadow-hard flex items-center justify-center flex-shrink-0">
                          <Settings className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Flexible Build Configuration</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Use your own Dockerfile or use the Skyhook defaults. Customize environment variables and dependencies as needed, since Skyhook supports any language or framework that runs in a container.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-ink-primary shadow-hard flex items-center justify-center flex-shrink-0">
                          <Container className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Optimized Artifacts</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             The pipeline produces an OCI-compliant container image (and other artifacts if configured) ready for deployment. Built images can be pushed to your preferred registry or stored securely within the platform for the Deploy stage.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-surface border border-ink-primary shadow-hard flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-ink-primary" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-ink-primary mb-2">Feedback & Logs</h3>
                          <p className="text-ink-secondary leading-relaxed">
                             Developers get immediate feedback. Real-time logs and notifications inform you of success or failure. If something goes wrong, detailed logs in the web UI or CLI make troubleshooting straightforward.
                          </p>
                       </div>
                    </div>
                 </div>
              </FadeIn>
           </div>

           {/* Right Column / Diagram */}
           <FadeIn delay={0.2} direction="up" className="lg:pt-16">
              <BlueprintCard className="bg-surface min-h-[500px] p-8">
                 <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                       <span className="font-mono font-bold text-sm">BUILD_PIPELINE_STATUS</span>
                       <span className="bg-green-100 text-green-700 px-2 py-0.5 text-xs border border-green-200 font-mono">RUNNING</span>
                    </div>
                    <div className="font-mono text-xs text-ink-secondary space-y-2">
                       <p>{`> git clone https://github.com/skyhook/demo-app`}</p>
                       <p>{`> docker build -t demo-app:latest .`}</p>
                       <p className="text-ink-primary">{`[+] Building 1.4s (8/8) FINISHED`}</p>
                       <p className="pl-4 text-gray-500">{`=> [internal] load build definition from Dockerfile`}</p>
                       <p className="pl-4 text-gray-500">{`=> [internal] load metadata for docker.io/library/node:18`}</p>
                       <p className="pl-4 text-gray-500">{`=> [1/5] FROM docker.io/library/node:18@sha256:xyz`}</p>
                       <p className="pl-4 text-gray-500">{`=> [2/5] WORKDIR /app`}</p>
                       <p className="pl-4 text-gray-500">{`=> [3/5] COPY package*.json ./`}</p>
                       <p className="pl-4 text-gray-500">{`=> [4/5] RUN npm install`}</p>
                       <p className="pl-4 text-gray-500">{`=> [5/5] COPY . .`}</p>
                       <p>{`> docker push registry.skyhook.io/demo-app:latest`}</p>
                       <p className="text-green-600 font-bold">{`Build successful!`}</p>
                    </div>
                 </div>
              </BlueprintCard>
           </FadeIn>
        </div>

        {/* Features Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <BlueprintCard title="Bulletproof CI">
                <div className="flex items-start gap-3 mb-4">
                  <Zap className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     The system can run multiple builds in parallel, auto-scaling build agents to meet your team’s demand.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Layer Caching">
                <div className="flex items-start gap-3 mb-4">
                  <Layers className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     Intelligent caching speeds up repeat builds by reusing unchanged layers (for example, skipping steps when dependencies haven’t changed). This dramatically cuts down build times for iterative development.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
            <FadeIn direction="up">
              <BlueprintCard title="Security Scanning">
                <div className="flex items-start gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-ink-primary mt-1" />
                  <p className="text-ink-secondary">
                     (Optional) Integrate container scanning tools in the pipeline. Since builds are containerized, you can easily plug in vulnerability scanners or linters without modifying your base environment.
                  </p>
                </div>
              </BlueprintCard>
            </FadeIn>
        </FadeInStagger>

        <FadeIn direction="up" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Multi-Language Support</h4>
                <p className="text-ink-secondary text-sm">Build applications in Node, Python, Java, Go, or any language. If it can run in a container, Skyhook can build it. No specialized or proprietary config required.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Configuration as Code</h4>
                <p className="text-ink-secondary text-sm">Define build steps and environment in a YAML config, or stick with convention over configuration for simple cases. Your build process lives alongside your code, versioned and auditable.</p>
             </div>
             <div>
                <h4 className="font-bold text-ink-primary mb-2">Artifact Management</h4>
                <p className="text-ink-secondary text-sm">Store build outputs (images, binaries, reports) and track build history. Every build is tagged and timestamped, making it easy to trace which code went into which image.</p>
             </div>
        </FadeIn>

      </div>
    </div>
  );
}

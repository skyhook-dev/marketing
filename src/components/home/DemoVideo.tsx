"use client";

import { useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function DemoVideo() {
  useEffect(() => {
    function onArcadeIframeMessage(e: MessageEvent) {
      if (e.origin !== "https://demo.arcade.software" || !e.isTrusted) return;
      const arcadeIframe = document.querySelector(
        `iframe[src*="${e.data.id}"]`
      ) as HTMLIFrameElement | null;
      if (!arcadeIframe || !arcadeIframe.contentWindow) return;
      if (e.data.event === "arcade-init") {
        arcadeIframe.contentWindow.postMessage(
          { event: "register-popout-handler" },
          "*"
        );
      }
      if (e.data.event === "arcade-popout-open") {
        arcadeIframe.style.position = "fixed";
        arcadeIframe.style.zIndex = "9999999";
      }
      if (e.data.event === "arcade-popout-close") {
        arcadeIframe.style.position = "absolute";
        arcadeIframe.style.zIndex = "auto";
      }
    }
    window.addEventListener("message", onArcadeIframeMessage);
    return () => window.removeEventListener("message", onArcadeIframeMessage);
  }, []);

  return (
    <section className="py-[25px] md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-[30px] md:text-[50px] font-semibold text-[#101927] leading-[120%] mb-3">
              See Skyhook in action
            </h2>
            <p className="text-[16px] md:text-[18px] font-normal text-[#445166] leading-normal max-w-2xl mx-auto">
              Watch how Skyhook simplifies your Kubernetes workflow
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center">
            <div
              className="flex flex-col justify-center items-center p-6 rounded-[18px] w-full max-w-[1211.164px]"
              style={{
                background: "linear-gradient(144deg, #2D7BFF 21.06%, rgba(255, 255, 255, 0.00) 82.81%), #A2C4FF",
                boxShadow: "0px 55px 250px 0px rgba(45, 122, 255, 0.17)",
                minHeight: "auto" // Allow height to be responsive
              }}
            >
              <div
                className="relative overflow-hidden bg-white rounded-[6px] w-full"
                style={{
                  maxWidth: "1157.977px",
                  boxShadow: "0px 9px 24px 0px rgba(45, 122, 255, 0.35)"
                }}
              >
                <div style={{ position: "relative", paddingBottom: "calc(54.6958% + 41px)", height: 0, width: "100%" }}>
                  <iframe
                    src="https://demo.arcade.software/8j7FUsmHesI5fLyKTb5x?embed&embed_mobile=modal&embed_desktop=inline&show_copy_link=true"
                    title="Product Overview"
                    loading="lazy"
                    allowFullScreen
                    allow="clipboard-write"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      colorScheme: "light",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex justify-center mt-10">
            <Button
              href="https://demo.skyhook.io"
              size="lg"
              external
            >
              Try Live Demo
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

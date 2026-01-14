import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { PostHogProvider } from "@/components/PostHogProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Skyhook | Kubernetes Internal Developer Platform",
    template: "%s | Skyhook",
  },
  description: "The one-click Kubernetes platform. Build, deploy, and scale your applications without the DevOps complexity.",
  metadataBase: new URL("https://skyhook.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skyhook.io",
    siteName: "Skyhook",
    title: "Skyhook | Kubernetes Internal Developer Platform",
    description: "The one-click Kubernetes platform. Build, deploy, and scale your applications without the DevOps complexity.",
    // TODO: Add OG image (1200x630px) at /public/og-image.png
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Skyhook - Kubernetes Internal Developer Platform",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyhook | Kubernetes Internal Developer Platform",
    description: "The one-click Kubernetes platform. Build, deploy, and scale your applications without the DevOps complexity.",
    // TODO: Add OG image at /public/og-image.png
    // images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body
        className={`${dmSans.variable} ${dmMono.variable} antialiased bg-background text-foreground`}
      >
        <PostHogProvider>
          <SmoothScroll>
            <div className="relative w-full overflow-x-hidden">
              <Nav />
              <main className="min-h-screen pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </SmoothScroll>
        </PostHogProvider>
      </body>
    </html>
  );
}

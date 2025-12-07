import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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
  title: "Skyhook | Kubernetes Internal Developer Platform",
  description: "A high-precision Internal Developer Platform for Kubernetes. Structured, legible, reliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative w-full overflow-x-hidden">
          <Nav />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

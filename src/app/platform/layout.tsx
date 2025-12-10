import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description: "Explore the Skyhook platform: build, deploy, run, observe, and grow your Kubernetes applications with our comprehensive internal developer platform.",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

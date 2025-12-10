import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for Skyhook. Start free, scale as you grow. Plans for startups and enterprises deploying on Kubernetes.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

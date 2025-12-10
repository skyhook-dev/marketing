import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo",
  description: "Schedule a personalized demo of Skyhook. See how our Kubernetes platform can streamline your deployments and empower your development team.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

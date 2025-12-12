import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Skyhook account. Access your Kubernetes deployments, manage services, and monitor your applications.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Login() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center">
      <section className="px-4 sm:px-6 lg:px-8 max-w-md mx-auto w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-ink-primary">
          Login to Skyhook
        </h1>
        <div className="space-y-4">
          <Button href="https://app.skyhook.io" size="lg" external className="w-full">
            Login with Email
          </Button>
          <Button href="https://github.com/login/oauth/authorize?client_id=skyhook" variant="secondary" size="lg" external className="w-full">
            Login with GitHub
          </Button>
        </div>
        <p className="mt-8 text-sm text-ink-secondary">
          Don&apos;t have an account?{" "}
          <a href="https://app.skyhook.io" className="text-accent hover:underline">
            Sign up
          </a>
        </p>
      </section>
    </div>
  );
}


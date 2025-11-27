import Link from "next/link";
import { Button } from "@/components/ui/Button";

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
          Don't have an account?{" "}
          <Link href="/signup" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
      </section>
    </div>
  );
}


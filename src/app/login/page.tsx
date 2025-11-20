import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center">
      <section className="px-4 sm:px-6 lg:px-8 max-w-md mx-auto w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-ink-primary">
          Login to Skyhook
        </h1>
        <div className="space-y-4">
           <Link
            href="https://app.skyhook.io"
            className="block w-full bg-accent text-white px-6 py-3 text-lg font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all border border-black"
          >
            Login with Email
          </Link>
          <Link
            href="https://github.com/login/oauth/authorize?client_id=skyhook"
            className="block w-full bg-surface text-ink-primary px-6 py-3 text-lg font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all border border-black"
          >
            Login with GitHub
          </Link>
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


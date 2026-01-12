import { Metadata } from "next";
import { BlueprintCard } from "@/components/ui/BlueprintCard";
import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on Kubernetes, platform engineering, DevOps tooling, and how teams are using Skyhook to ship faster and more reliably.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-primary mb-6">
            Engineering Blog
          </h1>
          <p className="text-xl text-ink-secondary max-w-2xl mx-auto">
            Insights on Kubernetes, platform engineering, DevOps tooling, and
            how teams are using Skyhook to move faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <BlueprintCard className="h-full p-0 overflow-hidden">
                <div className="p-4">
                  {post.image && (
                    <div className="relative w-full h-48 overflow-hidden border-b border-border mb-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <div className="p-2 space-y-3">
                    <div className="flex flex-wrap items-center justify-between text-xs font-mono text-ink-secondary gap-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-secondary">
                      <span>{post.category}</span>
                      <span className="w-1 h-1 bg-ink-secondary rounded-full" />
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-ink-primary group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-ink-secondary leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-mono bg-surface border border-border text-ink-secondary rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-sm font-medium text-ink-primary underline decoration-1 underline-offset-4">
                      Read more
                    </div>
                  </div>
                </div>
              </BlueprintCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

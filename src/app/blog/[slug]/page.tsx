import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blog";
import { BlogPostContent } from "@/components/blog/BlogPostContent";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Skyhook Blog",
    };
  }

  return {
    title: `${post.title} | Skyhook Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-ink-secondary hover:text-ink-primary underline decoration-1 underline-offset-4"
        >
          ← Back to Blog
        </Link>
      </div>

      <article className="pt-6">
        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center mb-10">
          <div className="space-y-2 text-xs uppercase tracking-[0.3em] text-ink-secondary">
            <span>{post.category}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-primary">
            {post.title}
          </h1>
          <p className="text-base text-ink-secondary font-mono">
            By {post.author}
          </p>
        </header>

        {post.image && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <div className="border border-border shadow-hard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        <BlogPostContent post={post} />
      </article>
    </div>
  );
}


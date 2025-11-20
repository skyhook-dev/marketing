import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blog";

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

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-10">
        <header className="space-y-6 text-center">
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
          <div className="border border-border shadow-hard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="blog-content-prose">
          <ReactMarkdown
            remarkPlugins={[remarkBreaks, remarkGfm]}
            components={{
              h1: (props) => (
                <h2
                  className="text-3xl font-semibold text-ink-primary mt-12 mb-6"
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  className="text-2xl font-semibold text-ink-primary mt-12 mb-6"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="text-xl font-semibold text-ink-primary mt-8 mb-4"
                  {...props}
                />
              ),
              p: (props) => <p className="mb-6 text-lg leading-[1.8]" {...props} />,
              ul: (props) => (
                <ul
                  className="list-disc pl-6 mb-6 space-y-2"
                  {...props}
                />
              ),
              ol: (props) => (
                <ol
                  className="list-decimal pl-6 mb-6 space-y-2"
                  {...props}
                />
              ),
              li: (props) => <li className="leading-[1.8] text-ink-secondary" {...props} />,
              code: (props) => (
                <code
                  className="bg-surface px-2 py-1 rounded text-sm font-mono"
                  {...props}
                />
              ),
              pre: (props) => (
                <pre
                  className="bg-surface border border-border rounded p-6 overflow-x-auto my-6"
                  {...props}
                />
              ),
              blockquote: (props) => (
                <blockquote
                  className="border-l-4 border-accent pl-6 my-8 italic text-ink-primary text-xl"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}


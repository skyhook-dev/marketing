import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { BlogLayout } from "@/components/blog/BlogLayout";

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

function extractHeadings(content: string) {
    // First, remove code blocks to avoid matching comments as headings
    const contentWithoutCodeBlocks = content.replace(/```[\s\S]*?```/g, '');

    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(contentWithoutCodeBlocks)) !== null) {
      const level = match[1].length;
      let text = match[2].trim();

      // Clean up markdown syntax from the text
      // Remove links: [text](url) -> text
      text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      // Remove bold/italic: **text** or *text* or __text__ or _text_ -> text
      text = text.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1');
      // Remove code: `text` -> text
      text = text.replace(/`([^`]+)`/g, '$1');

      // Generate ID consistent with rehype-slug (github-slugger behavior)
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters (except spaces and dashes)
        .trim()
        .replace(/\s/g, "-");  // Replace each space with a dash (do not collapse)

      // Skip the main title (first h1)
      if (level === 1 && headings.length === 0) continue;

      headings.push({ id, text: match[2].trim(), level });
    }

    return headings;
  }

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
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

        <BlogLayout headings={headings}>
            <div className="prose prose-lg prose-headings:font-semibold prose-headings:text-ink-primary prose-p:text-ink-secondary prose-a:text-accent prose-strong:text-ink-primary max-w-none">
                <MDXRemote
                    source={post.content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                            rehypePlugins: [
                                [rehypePrettyCode, {
                                    theme: "github-dark",
                                    keepBackground: true,
                                }],
                                rehypeSlug
                            ]
                        }
                    }}
                />
            </div>
        </BlogLayout>
      </article>
    </div>
  );
}


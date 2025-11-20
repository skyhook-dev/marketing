import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image?: string;
  content: string;
};

type PostIndexEntry = {
  slug: string;
  title: string;
  filename: string;
};

type MetadataOverride = Partial<
  Pick<BlogPost, "excerpt" | "category" | "readTime" | "date">
>;

const contentDir = path.join(process.cwd(), "content");
const postsDir = path.join(contentDir, "posts");

const postsIndexPath = path.join(contentDir, "posts-index.json");
const imageMappingPath = path.join(contentDir, "image-mapping.json");

const postsIndex: PostIndexEntry[] = JSON.parse(
  fs.readFileSync(postsIndexPath, "utf8")
);

const imageMapping: Record<string, string> = JSON.parse(
  fs.readFileSync(imageMappingPath, "utf8")
);

const metadataOverrides: Record<string, MetadataOverride> = {
  "paas-kubernetes-vs.-diy-kubernetes-why-paas-wins-for-simplicity-and-efficiency":
    {
      category: "Engineering",
      readTime: "3 min read",
      date: "November 2024",
    },
  "why-kubernetes-is-a-game-changer-": {
    category: "Engineering",
    readTime: "4 min read",
    date: "November 2024",
  },
  "the-birth-of-skyhook-our-journey-to-simplify-devops": {
    category: "Product",
    readTime: "3 min read",
    date: "November 2024",
  },
  "the-rise-of-platform-engineering-redefining-devops-for-the-modern-era": {
    category: "Platform Engineering",
    readTime: "5 min read",
    date: "November 2024",
  },
  "the-power-of-gen-ai-in-devops-skyhook'-chatops-assistant-in-action": {
    category: "Product",
    readTime: "4 min read",
    date: "November 2024",
  },
  "preview-environments-a-game-changer-for-testing-and-collaboration": {
    category: "DevOps",
    readTime: "5 min read",
    date: "November 2024",
  },
  "empowering-developers-and-accelerating-innovation-the-transformative-power-of-self-served-development-platforms-with-services-catalogs":
    {
      category: "Platform Engineering",
      readTime: "3 min read",
      date: "November 2024",
    },
  "platform-engineering-&-the-value-of-golden-paths-in-the-light-of-the-80-20-rule":
    {
      category: "Platform Engineering",
      readTime: "4 min read",
      date: "November 2024",
    },
  "ship-without-fire-drills-canary,-blue-green,-and-rolling-deploys": {
    category: "DevOps",
    readTime: "8 min read",
    date: "November 2024",
  },
  "argo-cd-vs-terraform-for-kubernetes-add-ons": {
    category: "Engineering",
    readTime: "6 min read",
    date: "November 2024",
  },
  "don-t-reinvent-the-wheel-embrace-the-power-of-pre-built-internal-developer-platforms-for-enhanced-efficiency":
    {
      category: "Platform Engineering",
      readTime: "4 min read",
      date: "November 2024",
    },
  "laravel-to-kubernetes,-simplified-with-skyhook": {
    category: "Engineering",
    readTime: "7 min read",
    date: "November 2024",
  },
};

function cleanExcerpt(markdown: string): string {
  // Remove the title (first line starting with #)
  const withoutTitle = markdown.replace(/^#\s+.+$/m, "").trim();
  
  // Get first paragraph
  const paragraphs = withoutTitle
    .split(/\n\s*\n/)
    .map((para) => para.trim())
    .filter((para) => para && !para.startsWith("#") && !para.startsWith("*****"));

  const firstParagraph = paragraphs[0] ?? "";
  const stripped = firstParagraph
    .replace(/[`*_>#]/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1");

  return stripped.length > 160
    ? `${stripped.substring(0, 157).trimEnd()}...`
    : stripped;
}

function calculateReadTime(markdown: string): string {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function buildPost(entry: PostIndexEntry): BlogPost {
  const filePath = path.join(postsDir, entry.filename);
  const content = fs.readFileSync(filePath, "utf8");
  const overrides = metadataOverrides[entry.slug] ?? {};

  return {
    slug: entry.slug,
    title: entry.title,
    excerpt: overrides.excerpt ?? cleanExcerpt(content),
    date: overrides.date ?? "November 2024",
    author: "Skyhook Team",
    readTime: overrides.readTime ?? calculateReadTime(content),
    category: overrides.category ?? "Engineering",
    image: imageMapping[entry.slug],
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return postsIndex
    .map(buildPost)
    .filter((post) => post.image); // Only show posts with images
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.slug === slug);
}

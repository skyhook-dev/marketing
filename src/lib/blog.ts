import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content", "posts");

function calculateReadTime(content: string): string {
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function cleanExcerpt(content: string): string {
    // Content already has no title if we migrated correctly, but let's be safe
    // and just take the first paragraph of text that isn't a heading.
    const plainText = content
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
      .replace(/\[(.*?)\]\((.*?)\)/g, '$1') // Remove links
      .replace(/#{1,6}\s+/g, '') // Remove headings
      .replace(/>/g, '') // Remove blockquotes
      .replace(/`{1,3}/g, '') // Remove code
      .trim();
      
    // Split by double newline to find first paragraph
    const p1 = plainText.split(/\n\s*\n/)[0];
    
    return p1.length > 160 
      ? p1.substring(0, 157).trimEnd() + "..." 
      : p1;
}

export function getAllBlogPosts(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDir);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author || "Skyhook Team",
        readTime: data.readTime || calculateReadTime(content),
        category: data.category || "Engineering",
        tags: data.tags || [],
        image: data.image || null,
        excerpt: data.excerpt || cleanExcerpt(content),
        content,
      };
    });

  // Sort posts by date
  return posts.sort((a, b) => {
    return new Date(a.date) < new Date(b.date) ? 1 : -1;
  });
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author || "Skyhook Team",
    readTime: data.readTime || calculateReadTime(content),
    category: data.category || "Engineering",
    tags: data.tags || [],
    image: data.image || null,
    excerpt: data.excerpt || cleanExcerpt(content),
    content,
  };
}

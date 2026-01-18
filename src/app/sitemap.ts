import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.skyhook.io";

  // Static pages
  const staticPages = [
    "",
    "/about",
    // "/platform",
    // "/platform/build",
    // "/platform/deploy",
    // "/platform/run",
    // "/platform/observe",
    // "/platform/grow",
    // "/platform/ai-ready",
    // "/solutions",
    // "/solutions/preview-environments",
    // "/solutions/rollout-strategies",
    // "/solutions/service-catalog",
    // "/solutions/auto-scaling",
    "/pricing",
    "/careers",
    "/blog",
    "/changelog",
    "/demo",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/platform") || route.startsWith("/solutions") ? 0.8 : 0.6,
  }));

  // Blog posts
  const posts = getAllBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

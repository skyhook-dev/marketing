
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');
const postsDir = path.join(contentDir, 'posts');
const imageMappingPath = path.join(contentDir, 'image-mapping.json');

const imageMapping = JSON.parse(fs.readFileSync(imageMappingPath, 'utf8'));

const metadataOverrides = {
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

function calculateReadTime(content) {
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

console.log('Starting full migration...');

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

for (const filename of files) {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(postsDir, filename);
    let rawContent = fs.readFileSync(filePath, 'utf8');

    if (matter.test(rawContent)) {
        console.log(`Skipping ${slug} - already has frontmatter`);
        continue;
    }

    const overrides = metadataOverrides[slug] || {};
    
    // Extract title from first line if possible
    let title = slug; // Fallback
    const titleMatch = rawContent.match(/^#\s+(.+)(\r?\n|$)/);
    if (titleMatch) {
        title = titleMatch[1].trim();
    }

    // Remove title from content
    const contentWithoutTitle = rawContent.replace(/^#\s+.+(\r?\n|$)/, '').trim();

    const data = {
        title: title,
        date: overrides.date || "November 2024",
        author: "Skyhook Team",
        category: overrides.category || "Engineering",
        readTime: overrides.readTime || calculateReadTime(contentWithoutTitle),
        image: imageMapping[slug] || null,
    };

    const newContent = matter.stringify(contentWithoutTitle, data);
    fs.writeFileSync(filePath, newContent);
    console.log(`Migrated ${slug}`);
}

console.log('Full migration complete.');

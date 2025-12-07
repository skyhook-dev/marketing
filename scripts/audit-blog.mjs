
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content', 'posts');

function auditPosts() {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

    for (const file of files) {
        const filePath = path.join(postsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        console.log(`\nAnalyzing: ${file}`);
        
        // 1. Check title
        if (data.title && (data.title.includes('-') && !data.title.includes(' '))) {
             console.log(`[WARN] Title might be a slug: "${data.title}"`);
        }

        // 2. Check first lines for duplicate title
        const lines = content.trim().split('\n');
        const firstLine = lines[0];
        if (firstLine && firstLine.startsWith('#')) {
             console.log(`[WARN] Body starts with heading: "${firstLine}" (Check for duplicate title)`);
        }

        // 3. Check heading hierarchy
        let hasH2 = false;
        let hasH3 = false;
        let hasH4 = false;
        
        for (const line of lines) {
            if (line.startsWith('## ')) hasH2 = true;
            if (line.startsWith('### ')) hasH3 = true;
            if (line.startsWith('#### ')) hasH4 = true;
        }

        if (hasH4 && !hasH2) {
             console.log(`[WARN] Has H4 but no H2 (Possible wrong hierarchy)`);
        }
    }
}

auditPosts();

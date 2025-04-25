import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { initialBlogPosts } from './blogData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Define your site URL
const siteUrl = 'https://quadratetechsolutions.com';

// Create news sitemap content
const generateNewsSitemap = () => {
  // Filter blog posts from the last 2 days (Google News requirement)
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  // For demo purposes, we'll include all posts but in a real scenario, filter by date
  const recentPosts = initialBlogPosts;

  // Generate XML
  const newsEntries = recentPosts.map(post => {
    const pubDate = new Date(post.pubDate);
    return `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Quadrate Tech Solutions</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate.toISOString()}</news:publication_date>
      <news:title>${post.title}</news:title>
      <news:keywords>${post.tags.join(', ')}</news:keywords>
    </news:news>
  </url>`;
  }).join('\n');

  const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsEntries}
</urlset>`;

  // Write to file
  fs.writeFileSync(resolve(__dirname, '../public/news-sitemap.xml'), newsSitemap);
  console.log('News sitemap generated successfully!');
};

generateNewsSitemap();

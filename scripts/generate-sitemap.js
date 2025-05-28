import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Define your site URL
const siteUrl = 'https://quadrate.lk';

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: siteUrl });
const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));

sitemap.pipe(writeStream);

// Add static pages
sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() });
sitemap.write({ url: '/services', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() });
sitemap.write({ url: '/blog', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() });
sitemap.write({ url: '/pricing', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() });
sitemap.write({ url: '/microsoft-365-premium-package-details', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() });

import { initialBlogPosts } from './blogData.js'; // Import blog data

// Add blog posts
initialBlogPosts.forEach(post => {
  sitemap.write({
    url: `/blog/${post.slug}`, // Ensure this matches your actual URL structure
    changefreq: 'monthly',     // Changed from yearly to monthly
    priority: 0.7,           // Adjusted priority
    lastmod: new Date(post.pubDate).toISOString() // Use pubDate and format as ISO string
  });
});

// End the sitemap stream
sitemap.end();

console.log('Sitemap generated successfully!');

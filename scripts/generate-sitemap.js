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

// Add blog posts
// In a real application, you would fetch these from your database or CMS
const blogPosts = [
  { slug: 'csharp-13-future', lastmod: '2024-06-22' },
  { slug: 'elasticsearch-dotnet-guide', lastmod: '2024-02-10' },
  { slug: 'azure-functions-v4-guide', lastmod: '2024-06-03' }
];

blogPosts.forEach(post => {
  sitemap.write({
    url: `/blog/${post.slug}`,
    changefreq: 'yearly',
    priority: 0.6,
    lastmod: post.lastmod
  });
});

// End the sitemap stream
sitemap.end();

console.log('Sitemap generated successfully!');

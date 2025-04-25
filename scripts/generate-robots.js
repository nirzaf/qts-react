import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Define your site URL
const siteUrl = 'https://quadratetechsolutions.com';

// Create robots.txt content
const robotsTxt = `# robots.txt for ${siteUrl}
User-agent: *
Allow: /

# Disallow admin or private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /internal/

# Crawl delay for specific bots
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

# Sitemap locations
Sitemap: ${siteUrl}/sitemap.xml
Sitemap: ${siteUrl}/image-sitemap.xml
Sitemap: ${siteUrl}/video-sitemap.xml
Sitemap: ${siteUrl}/news-sitemap.xml
`;

// Write to file
fs.writeFileSync(resolve(__dirname, '../public/robots.txt'), robotsTxt);

console.log('robots.txt generated successfully!');

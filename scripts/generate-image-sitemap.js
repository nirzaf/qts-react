import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { initialBlogPosts } from './blogData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Define your site URL
const siteUrl = 'https://quadrate.lk';

// Create image sitemap content
const generateImageSitemap = () => {
  // Main site images
  const mainImages = [
    {
      url: 'https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969',
      caption: 'Quadrate Tech Solutions Logo',
      title: 'Quadrate Tech Solutions Logo',
      loc: `${siteUrl}/`
    },
    {
      url: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
      caption: 'Quadrate Tech Solutions Hero Image',
      title: 'Quadrate Tech Solutions Hero Image',
      loc: `${siteUrl}/`
    },
    {
      url: 'https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686',
      caption: 'About Quadrate Tech Solutions',
      title: 'About Quadrate Tech Solutions',
      loc: `${siteUrl}/about`
    }
  ];

  // Blog post images
  const blogImages = initialBlogPosts.map(post => ({
    url: post.heroImage,
    caption: post.title,
    title: post.title,
    loc: `${siteUrl}/blog/${post.slug}`
  }));

  // Combine all images
  const allImages = [...mainImages, ...blogImages];

  // Generate XML
  const imageEntries = allImages.map(image => {
    return `  <url>
    <loc>${image.loc}</loc>
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>
  </url>`;
  }).join('\n');

  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries}
</urlset>`;

  // Write to file
  fs.writeFileSync(resolve(__dirname, '../public/image-sitemap.xml'), imageSitemap);
  console.log('Image sitemap generated successfully!');
};

generateImageSitemap();

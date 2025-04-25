import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Define your site URL
const siteUrl = 'https://quadratetechsolutions.com';

// Create video sitemap content
const generateVideoSitemap = () => {
  // Sample videos - replace with your actual videos
  const videos = [
    {
      title: 'Quadrate Tech Solutions Introduction',
      description: 'Learn about Quadrate Tech Solutions and our services',
      thumbnailLoc: 'https://ik.imagekit.io/quadrate/videos/intro-thumbnail.jpg',
      contentLoc: 'https://www.youtube.com/watch?v=example1',
      playerLoc: 'https://www.youtube.com/embed/example1',
      duration: 120, // in seconds
      publicationDate: '2023-01-15T08:00:00+00:00',
      loc: `${siteUrl}/about`
    },
    {
      title: 'Web Development Process',
      description: 'Our approach to web development projects',
      thumbnailLoc: 'https://ik.imagekit.io/quadrate/videos/webdev-thumbnail.jpg',
      contentLoc: 'https://www.youtube.com/watch?v=example2',
      playerLoc: 'https://www.youtube.com/embed/example2',
      duration: 180, // in seconds
      publicationDate: '2023-02-20T10:00:00+00:00',
      loc: `${siteUrl}/services`
    }
  ];

  // Generate XML
  const videoEntries = videos.map(video => {
    return `  <url>
    <loc>${video.loc}</loc>
    <video:video>
      <video:thumbnail_loc>${video.thumbnailLoc}</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      <video:content_loc>${video.contentLoc}</video:content_loc>
      <video:player_loc>${video.playerLoc}</video:player_loc>
      <video:duration>${video.duration}</video:duration>
      <video:publication_date>${video.publicationDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>`;
  }).join('\n');

  const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videoEntries}
</urlset>`;

  // Write to file
  fs.writeFileSync(resolve(__dirname, '../public/video-sitemap.xml'), videoSitemap);
  console.log('Video sitemap generated successfully!');
};

generateVideoSitemap();

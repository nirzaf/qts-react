import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { initialBlogPosts } from './blogData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Define your site URL
const siteUrl = 'https://quadrate.lk';

// Create RSS feed content
const generateRssFeed = () => {
  const feedItems = initialBlogPosts.map(post => {
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <content:encoded><![CDATA[<img src="${post.heroImage}" alt="${post.title}" />
${post.description}]]></content:encoded>
      <author>${post.author || 'info@quadrate.lk'}</author>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
  xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
>
  <channel>
    <title>Quadrate Tech Solutions Blog</title>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <link>${siteUrl}</link>
    <description>Latest articles from Quadrate Tech Solutions on software development, web development, digital marketing, and IT trends.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <sy:updatePeriod>daily</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>Quadrate Tech Solutions Blog</title>
      <link>${siteUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${feedItems}
  </channel>
</rss>`;

  // Write to file
  fs.writeFileSync(resolve(__dirname, '../public/rss.xml'), rss);
  console.log('RSS feed generated successfully!');
};

generateRssFeed();

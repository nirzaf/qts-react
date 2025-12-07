import { MetadataRoute } from 'next';
import { getAllPosts } from '@/services/blogService';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://quadrate.lk';

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/portfolio',
        '/blog',
        '/contact',
        '/pricing',
        '/interview-assessment',
        '/microsoft-365-premium-package-details',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Blog Routes
    const posts = await getAllPosts();
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.modifiedDate || post.pubDate),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes];
}

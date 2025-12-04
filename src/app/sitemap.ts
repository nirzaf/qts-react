import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://quadrate.lk';

    // 1. Static Routes
    const routes = [
        '',
        '/about',
        '/services',
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

    // 2. Dynamic Blog Routes (Example - uncomment when blog posts are available)
    // const posts = await getAllPosts();
    // const blogRoutes = posts.map((post) => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.6,
    // }));

    return [...routes]; // Add ...blogRoutes when ready
}

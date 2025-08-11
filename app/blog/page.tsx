import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with the latest insights on AI, software development, and technology trends from Quadrate Tech Solutions.',
};

// Blog data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    id: 'csharp-13-future',
    title: "The Future is Delightful: A Peek into What's Next for C# 13",
    description: "Exploring upcoming features and design philosophy for C# 13 and beyond",
    pubDate: "Jun 22 2024",
    heroImage: "https://ik.imagekit.io/quadrate/blogs/csharp-13.webp?updatedAt=1732702078737",
    category: "Programming",
    tags: ["C#", "programming", "language-design", "future-features"],
    author: "M.F.M Fazrin",
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949"
  },
  {
    id: 'elasticsearch-dotnet-guide',
    title: "Integrating ElasticSearch with .NET Web API: A Comprehensive Guide",
    description: "Learn how to set up ElasticSearch locally and integrate it with a .NET Web API for powerful search capabilities",
    pubDate: "Feb 10 2024",
    heroImage: "https://ik.imagekit.io/quadrate/blogs/elastic-search.webp?updatedAt=1732702078768",
    category: "Development",
    tags: ["elasticsearch", "dotnet", "webapi", "docker"],
    author: "Fazrin",
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949"
  },
  {
    id: 'azure-functions-v4-guide',
    title: "Supercharge Your Applications with Azure Functions v4, C# and .NET 8: A Deep Dive",
    description: "Explore the power of Azure Functions v4, C# 12, and .NET 8 for building efficient and scalable serverless applications",
    pubDate: "Jun 03 2024",
    heroImage: "https://ik.imagekit.io/quadrate/blogs/azure-functions.webp?updatedAt=1732702078841",
    category: "Cloud Computing",
    tags: ["Azure Functions", "C#", ".NET 8", "serverless"],
    author: "M.F.M Fazrin",
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949"
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-primary">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with the latest insights on AI, software development, and technology trends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.id}`}>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
                <time className="text-sm text-muted-foreground">
                  {post.pubDate}
                </time>
              </div>

              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">{post.author}</span>
                </div>

                <Link 
                  href={`/blog/${post.id}`}
                  className="text-sm text-primary hover:underline"
                >
                  Read more →
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-primary/5 p-8 rounded-lg mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter to get the latest articles and insights delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
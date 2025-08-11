import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949",
    content: `
# The Future is Delightful: A Peek into What's Next for C# 13

C# continues to evolve as one of the most popular programming languages in the world. With each new version, Microsoft introduces features that make developers more productive and code more expressive. Let's explore what's coming in C# 13 and beyond.

## Key Features in C# 13

### 1. Enhanced Pattern Matching
C# 13 introduces even more powerful pattern matching capabilities, making code more readable and concise.

### 2. Improved Performance
The new version focuses heavily on performance improvements, especially in memory allocation and garbage collection.

### 3. Better Async/Await Support
Enhanced async programming features that make asynchronous code even more intuitive to write and maintain.

## Looking Ahead

The C# team continues to prioritize developer experience and performance. Future versions will likely include:

- More functional programming features
- Enhanced nullable reference types
- Improved interoperability with other languages
- Better tooling support

## Conclusion

C# 13 represents another significant step forward in the evolution of the language. These improvements will help developers write more efficient, maintainable, and expressive code.

Stay tuned for more updates as we get closer to the official release!
    `
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
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949",
    content: `
# Integrating ElasticSearch with .NET Web API: A Comprehensive Guide

ElasticSearch is a powerful, distributed search and analytics engine that can significantly enhance your application's search capabilities. In this guide, we'll walk through setting up ElasticSearch locally and integrating it with a .NET Web API.

## Prerequisites

Before we begin, make sure you have:
- .NET 8 SDK installed
- Docker Desktop (for running ElasticSearch)
- Basic knowledge of C# and Web APIs

## Setting Up ElasticSearch with Docker

First, let's set up ElasticSearch using Docker:

\`\`\`bash
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:8.11.0
\`\`\`

## Creating the .NET Web API Project

Create a new Web API project:

\`\`\`bash
dotnet new webapi -n ElasticSearchDemo
cd ElasticSearchDemo
\`\`\`

## Installing Required Packages

Install the ElasticSearch .NET client:

\`\`\`bash
dotnet add package Elasticsearch.Net
dotnet add package NEST
\`\`\`

## Configuration

Add ElasticSearch configuration to your \`appsettings.json\`:

\`\`\`json
{
  "ElasticSearch": {
    "Uri": "http://localhost:9200"
  }
}
\`\`\`

## Creating the Service

Create an ElasticSearch service to handle operations:

\`\`\`csharp
public interface IElasticSearchService
{
    Task<bool> IndexDocumentAsync<T>(T document, string indexName) where T : class;
    Task<ISearchResponse<T>> SearchAsync<T>(string query, string indexName) where T : class;
}
\`\`\`

## Implementation

The implementation involves setting up the ElasticSearch client and implementing search operations. This provides a solid foundation for adding powerful search capabilities to your .NET applications.

## Conclusion

Integrating ElasticSearch with .NET Web API opens up powerful search capabilities for your applications. With proper setup and configuration, you can provide fast, relevant search results to your users.
    `
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
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949",
    content: `
# Supercharge Your Applications with Azure Functions v4, C# and .NET 8: A Deep Dive

Azure Functions v4 brings significant improvements and new capabilities that make serverless computing even more powerful. Combined with C# 12 and .NET 8, you can build highly efficient and scalable applications.

## What's New in Azure Functions v4

### Enhanced Performance
- Faster cold start times
- Improved memory management
- Better scaling capabilities

### .NET 8 Support
- Latest language features from C# 12
- Improved performance and security
- Native AOT compilation support

## Getting Started

### Prerequisites
- Azure subscription
- .NET 8 SDK
- Azure Functions Core Tools v4

### Creating Your First Function

\`\`\`bash
func init MyFunctionApp --dotnet
cd MyFunctionApp
func new --name HttpExample --template "HTTP trigger"
\`\`\`

## Key Features

### 1. HTTP Triggers
Perfect for building REST APIs and webhooks.

### 2. Timer Triggers
Ideal for scheduled tasks and background processing.

### 3. Blob Triggers
Automatically process files uploaded to Azure Storage.

### 4. Service Bus Triggers
Handle messages from Azure Service Bus queues and topics.

## Best Practices

1. **Keep functions small and focused**
2. **Use dependency injection properly**
3. **Implement proper error handling**
4. **Monitor performance and costs**
5. **Use appropriate hosting plans**

## Performance Optimization

- Use async/await properly
- Minimize cold starts
- Optimize memory usage
- Implement connection pooling

## Monitoring and Debugging

Azure Functions provides excellent monitoring capabilities through:
- Application Insights
- Azure Monitor
- Built-in logging

## Conclusion

Azure Functions v4 with .NET 8 provides a powerful platform for building serverless applications. The combination of improved performance, new language features, and enhanced tooling makes it an excellent choice for modern cloud applications.

Start building your serverless solutions today and experience the power of Azure Functions v4!
    `
  }
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.heroImage],
      type: 'article',
      publishedTime: post.pubDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>→</li>
          <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
          <li>→</li>
          <li className="text-foreground">{post.title}</li>
        </ol>
      </nav>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
          <time className="text-muted-foreground">
            {post.pubDate}
          </time>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-xl text-muted-foreground mb-6">
          {post.description}
        </p>

        <div className="flex items-center space-x-4 pb-6 border-b">
          <Image
            src={post.authorImage}
            alt={post.author}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.author}</p>
            <p className="text-sm text-muted-foreground">Author</p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <div className="whitespace-pre-wrap leading-relaxed">
          {post.content}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span 
            key={tag}
            className="inline-block px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link 
          href="/blog"
          className="inline-flex items-center text-primary hover:underline"
        >
          ← Back to Blog
        </Link>
        
        <div className="flex space-x-4">
          <button className="text-muted-foreground hover:text-primary">
            Share
          </button>
        </div>
      </div>

      {/* Related Posts */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts
            .filter((p) => p.id !== post.id && p.category === post.category)
            .slice(0, 2)
            .map((relatedPost) => (
              <Link 
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="block bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {relatedPost.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {relatedPost.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-primary">{relatedPost.category}</span>
                  <time className="text-xs text-muted-foreground">{relatedPost.pubDate}</time>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
}
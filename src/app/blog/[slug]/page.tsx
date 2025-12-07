import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostPage from '@/pages/BlogPost';
import { getPostMetaBySlug, getAllPostSlugs } from '@/services/blogService';
import { generateBlogPostSchema, generateBreadcrumbSchema, generateOrganizationSchema, defaultOrganization } from '@/utils/structuredData';

const BASE_URL = 'https://quadrate.lk';

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Generate static params for all blog posts
 */
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate metadata for blog post pages
 * This replaces the non-functional <SEO> component usage
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostMetaBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author || 'Quadrate Tech Solutions' }],
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.pubDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author || 'Quadrate Tech Solutions'],
      tags: post.tags,
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate JSON-LD structured data for blog post
 */
function generateStructuredData(post: NonNullable<Awaited<ReturnType<typeof getPostMetaBySlug>>>, slug: string) {
  const url = `${BASE_URL}/blog/${slug}`;

  const organizationSchema = generateOrganizationSchema(defaultOrganization);

  const blogPostSchema = generateBlogPostSchema({
    title: post.title,
    description: post.description,
    url,
    image: post.heroImage,
    datePublished: post.pubDate,
    dateModified: post.modifiedDate || post.pubDate,
    author: {
      name: post.author || 'Quadrate Tech Solutions',
      url: `${BASE_URL}/about`,
      image: 'https://ik.imagekit.io/quadrate/blogs/avatar.png',
      jobTitle: 'Content Writer',
    },
    category: post.category,
    tags: post.tags,
    wordCount: 1000, // Estimate, actual comes from client
    articleSection: post.category,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: post.title, url },
  ]);

  return [organizationSchema, blogPostSchema, breadcrumbSchema];
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostMetaBySlug(slug);

  if (!post) {
    notFound();
  }

  const structuredData = generateStructuredData(post, slug);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BlogPostPage />
    </>
  );
}

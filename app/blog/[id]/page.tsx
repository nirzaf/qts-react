'use client';

import React, { useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Heart,
  Eye,
  BookOpen,
  MessageSquare,
  Twitter,
  Linkedin,
  Facebook,
  Link,
  Brain,
  Code,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

// Mock blog posts data (same as in blog listing)
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence continues to revolutionize how businesses operate, making processes more efficient, decisions more data-driven, and customer experiences more personalized. As we move through 2024, several key trends are emerging that will shape the future of AI in business.</p>

      <h2>Key AI Trends for 2024</h2>

      <h3>1. Generative AI Integration</h3>
      <p>Generative AI tools like ChatGPT, Claude, and specialized business applications are becoming integral to daily operations. Companies are integrating these tools into their workflows for content creation, code generation, and customer service automation.</p>

      <h3>2. AI-Powered Decision Making</h3>
      <p>Advanced analytics and machine learning models are enabling businesses to make more informed decisions based on real-time data analysis. This includes predictive analytics for inventory management, customer behavior analysis, and market trend forecasting.</p>

      <h3>3. Ethical AI and Responsible Development</h3>
      <p>As AI becomes more prevalent, businesses are focusing on ethical AI practices, ensuring fairness, transparency, and accountability in their AI systems. This includes implementing bias detection and mitigation strategies.</p>

      <h2>Implementation Strategies</h2>
      <p>To successfully implement AI in your business, consider starting with pilot projects, investing in employee training, and establishing clear governance frameworks. The key is to start small, measure results, and scale gradually.</p>

      <h2>Conclusion</h2>
      <p>The future of AI in business is bright, with endless possibilities for innovation and growth. Companies that embrace these technologies today will be better positioned for success in the digital economy of tomorrow.</p>
    `,
    author: "Nirzaf Rahman",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Business", "Technology", "Future"],
    image: "/images/blog/ai-future.jpg",
    featured: true,
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js and React",
    excerpt: "Learn best practices for creating high-performance, scalable web applications using modern React frameworks and deployment strategies.",
    content: `
      <h2>Why Next.js for Scalable Applications?</h2>
      <p>Next.js has become the go-to framework for React developers looking to build production-ready applications. Its built-in optimizations, server-side rendering capabilities, and developer experience make it an excellent choice for scalable web applications.</p>

      <h2>Key Features for Scalability</h2>

      <h3>Server-Side Rendering (SSR)</h3>
      <p>SSR improves initial page load times and SEO performance by rendering pages on the server before sending them to the client.</p>

      <h3>Static Site Generation (SSG)</h3>
      <p>For content that doesn't change frequently, SSG provides the best performance by pre-generating pages at build time.</p>

      <h3>API Routes</h3>
      <p>Built-in API routes allow you to create backend functionality without a separate server, simplifying deployment and maintenance.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Use dynamic imports for code splitting</li>
        <li>Optimize images with Next.js Image component</li>
        <li>Implement proper caching strategies</li>
        <li>Monitor performance with built-in analytics</li>
      </ul>

      <h2>Deployment Considerations</h2>
      <p>When deploying Next.js applications, consider using platforms like Vercel, Netlify, or AWS for optimal performance and scalability.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "Web Development", "Performance"],
    image: "/images/blog/nextjs-react.jpg",
    featured: false,
    views: 892,
    likes: 67
  }
  // Add more posts as needed
];

// Related posts (simplified for demo)
const getRelatedPosts = (currentPost: typeof blogPosts[0]) => {
  return blogPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, 3);
};

export default function BlogPostPage() {
  const params = useParams();
  const id = parseInt(params?.id as string);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Find the blog post
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0607E1] hover:text-[#4D0AFF] font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </a>
          </div>
        </div>
      </main>
    );
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <main ref={ref} className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* Back to Blog */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0607E1] hover:text-[#4D0AFF] font-semibold transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </motion.a>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-4 py-2 bg-[#0607E1] text-white text-sm rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Title */}
              <h1 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Article Stats and Sharing */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-5 h-5" />
                    <span>{post.views} views</span>
                  </div>
                  <motion.button
                    className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </motion.button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Share:</span>
                  <div className="flex gap-2">
                    {[
                      { icon: Twitter, color: "hover:text-blue-400" },
                      { icon: Linkedin, color: "hover:text-blue-600" },
                      { icon: Facebook, color: "hover:text-blue-500" },
                      { icon: Link, color: "hover:text-gray-700" }
                    ].map((social, index) => (
                      <motion.button
                        key={index}
                        className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-300 ${social.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-[16/9] bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl mb-12 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  {post.category === "AI & Machine Learning" && <Brain className="w-20 h-20 mx-auto mb-4" />}
                  {post.category === "Web Development" && <Code className="w-20 h-20 mx-auto mb-4" />}
                  {post.category === "Cloud Computing" && <TrendingUp className="w-20 h-20 mx-auto mb-4" />}
                  {!["AI & Machine Learning", "Web Development", "Cloud Computing"].includes(post.category) && <Lightbulb className="w-20 h-20 mx-auto mb-4" />}
                  <h3 className="text-2xl font-bold">{post.category}</h3>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.125rem'
                }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      {post.author === "Nirzaf Rahman"
                        ? "Founder & CEO of Quadrate Tech Solutions. Passionate about AI, machine learning, and helping businesses leverage technology for growth."
                        : "Senior developer and technology consultant with expertise in modern web development and cloud solutions."
                      }
                    </p>
                    <div className="flex gap-3">
                      <motion.button
                        className="text-[#0607E1] hover:text-[#4D0AFF] transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        className="text-[#0607E1] hover:text-[#4D0AFF] transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-fluid-2xl lg:text-fluid-3xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h2>
                <p className="text-gray-600">
                  More insights from the {post.category} category
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        {relatedPost.category === "AI & Machine Learning" && <Brain className="w-12 h-12 mx-auto mb-2" />}
                        {relatedPost.category === "Web Development" && <Code className="w-12 h-12 mx-auto mb-2" />}
                        {relatedPost.category === "Cloud Computing" && <TrendingUp className="w-12 h-12 mx-auto mb-2" />}
                        {!["AI & Machine Learning", "Web Development", "Cloud Computing"].includes(relatedPost.category) && <Lightbulb className="w-12 h-12 mx-auto mb-2" />}
                        <p className="text-sm opacity-90">{relatedPost.category}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-fluid-lg font-bold text-gray-900 mb-3 group-hover:text-[#0607E1] transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{relatedPost.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>

                        <motion.a
                          href={`/blog/${relatedPost.id}`}
                          className="text-[#0607E1] hover:text-[#4D0AFF] font-semibold text-sm transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          Read →
                        </motion.a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6">
              Enjoyed This Article?
            </h2>
            <p className="text-fluid-lg mb-8 opacity-90">
              Subscribe to our newsletter for more insights on AI, software development, and digital transformation.
              Get expert tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <motion.button
                className="px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                More Articles
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

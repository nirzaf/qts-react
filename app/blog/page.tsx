'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Eye,
  Heart,
  Filter,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Code,
  Brain
} from 'lucide-react';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.",
    content: "Artificial Intelligence continues to revolutionize how businesses operate...",
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
    content: "Next.js has become the go-to framework for React developers...",
    author: "Sarah Johnson",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "Web Development", "Performance"],
    image: "/images/blog/nextjs-react.jpg",
    featured: false,
    views: 892,
    likes: 67
  },
  {
    id: 3,
    title: "Cloud Migration Strategies: A Complete Guide for Enterprises",
    excerpt: "Comprehensive guide to planning and executing successful cloud migration projects, including cost optimization and security considerations.",
    content: "Cloud migration is no longer a question of if, but when...",
    author: "Michael Chen",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "Migration", "Enterprise", "DevOps"],
    image: "/images/blog/cloud-migration.jpg",
    featured: false,
    views: 743,
    likes: 52
  },
  {
    id: 4,
    title: "Machine Learning Model Deployment: From Development to Production",
    excerpt: "Step-by-step guide to deploying machine learning models in production environments with monitoring and maintenance best practices.",
    content: "Deploying ML models to production requires careful planning...",
    author: "Emily Davis",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Machine Learning",
    tags: ["ML", "Deployment", "Production", "MLOps"],
    image: "/images/blog/ml-deployment.jpg",
    featured: false,
    views: 634,
    likes: 41
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for Modern Web Applications",
    excerpt: "Essential security measures every developer should implement to protect web applications from common vulnerabilities and attacks.",
    content: "Security should be a top priority in web development...",
    author: "Alex Thompson",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Security",
    tags: ["Security", "Web Development", "Best Practices"],
    image: "/images/blog/cybersecurity.jpg",
    featured: false,
    views: 567,
    likes: 38
  },
  {
    id: 6,
    title: "The Rise of No-Code/Low-Code Platforms in Enterprise Development",
    excerpt: "How no-code and low-code platforms are democratizing software development and enabling faster digital transformation.",
    content: "No-code and low-code platforms are changing the development landscape...",
    author: "Lisa Wang",
    date: "2023-12-15",
    readTime: "7 min read",
    category: "Development Trends",
    tags: ["No-Code", "Low-Code", "Enterprise", "Digital Transformation"],
    image: "/images/blog/no-code.jpg",
    featured: false,
    views: 445,
    likes: 29
  }
];

// Categories for filtering
const categories = [
  "All",
  "AI & Machine Learning",
  "Web Development",
  "Cloud Computing",
  "Machine Learning",
  "Security",
  "Development Trends"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <main ref={ref} className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-fluid-4xl lg:text-fluid-5xl font-bold text-gray-900 mb-6">
              Tech <span className="gradient-text">Insights</span> & Updates
            </h1>
            <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
              Stay updated with the latest trends in AI, software development, and digital transformation.
              Expert insights from our team of technology professionals.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#0607E1] focus:border-transparent transition-all duration-300 w-80"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#0607E1] focus:border-transparent transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-fluid-2xl lg:text-fluid-3xl font-bold text-gray-900 mb-2">
                  Featured Article
                </h2>
                <p className="text-gray-600">Our latest and most popular content</p>
              </div>

              <motion.article
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="aspect-[16/10] lg:aspect-auto">
                    <div className="w-full h-full bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <Brain className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold">Featured Article</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#0607E1] text-white text-sm rounded-full">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredPost.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{featuredPost.likes}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-fluid-xl lg:text-fluid-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0607E1] transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <motion.a
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-2 text-[#0607E1] hover:text-[#4D0AFF] font-semibold transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-fluid-2xl lg:text-fluid-3xl font-bold text-gray-900 mb-2">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </motion.div>

            {filteredPosts.length === 0 ? (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        {post.category === "AI & Machine Learning" && <Brain className="w-12 h-12 mx-auto mb-2" />}
                        {post.category === "Web Development" && <Code className="w-12 h-12 mx-auto mb-2" />}
                        {post.category === "Cloud Computing" && <TrendingUp className="w-12 h-12 mx-auto mb-2" />}
                        {!["AI & Machine Learning", "Web Development", "Cloud Computing"].includes(post.category) && <Lightbulb className="w-12 h-12 mx-auto mb-2" />}
                        <p className="text-sm opacity-90">{post.category}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-fluid-lg font-bold text-gray-900 mb-3 group-hover:text-[#0607E1] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <motion.a
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center gap-1 text-[#0607E1] hover:text-[#4D0AFF] font-semibold text-sm transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <span>Read</span>
                          <ArrowRight className="w-3 h-3" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

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
              Stay Updated with Tech Insights
            </h2>
            <p className="text-fluid-lg mb-8 opacity-90">
              Subscribe to our newsletter and get the latest articles, tutorials, and industry insights
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}

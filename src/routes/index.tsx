import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Pricing from '@/pages/Pricing';
import NotFound from '@/pages/404';

export const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
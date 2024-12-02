import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Blog = lazy(() => import('@/pages/Blog'));
const Contact = lazy(() => import('@/pages/Contact'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const AdminLogin = lazy(() => import('@/pages/AdminLogin'));
const AdminBlogs = lazy(() => import('@/pages/AdminBlogs'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const NotFound = lazy(() => import('@/pages/404'));

export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/blog/:id',
      element: <BlogPost />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/pricing',
      element: <Pricing />
    },
    {
      path: '/admin/login',
      element: <AdminLogin />
    },
    {
      path: '/admin/blogs',
      element: (
        <ProtectedRoute>
          <AdminBlogs />
        </ProtectedRoute>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
};
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.div
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Navigation Section */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center">
            <motion.img 
              src="https://ik.imagekit.io/quadrate/assets/QTS%20PNG.png?updatedAt=1732465331710" 
              alt="Quadrate Tech Solutions" 
              className="h-12 w-auto logo-emboss" 
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
              }}
              animate={{
                filter: [
                  "drop-shadow(2px 2px 2px rgba(255,255,255,0.5)) drop-shadow(-2px -2px 2px rgba(0,0,0,0.2))",
                  "drop-shadow(2px 2px 3px rgba(255,255,255,0.6)) drop-shadow(-2px -2px 3px rgba(0,0,0,0.3))",
                  "drop-shadow(2px 2px 2px rgba(255,255,255,0.5)) drop-shadow(-2px -2px 2px rgba(0,0,0,0.2))"
                ]
              }}
              transition={{
                filter: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
              style={{
                filter: "drop-shadow(2px 2px 2px rgba(255,255,255,0.5)) drop-shadow(-2px -2px 2px rgba(0,0,0,0.2))"
              }}
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group"
              >
                <span className={`text-lg font-medium transition-colors ${
                  location.pathname === link.to 
                    ? 'text-primary' 
                    : 'text-foreground/60 hover:text-foreground/80'
                }`}>
                  {link.label}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: location.pathname === link.to ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          {/* Book a Meeting Button */}
          <Button 
            asChild
            className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105"
          >
            <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
              Book a Meeting
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 bg-white shadow-lg rounded-b-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-2 px-4 text-lg font-medium ${
                    location.pathname === link.to 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground/60 hover:text-foreground/80 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 transition-all duration-300"
                >
                  <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
                    Book a Meeting
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#FFFFFF] border-b border-[#000000]/5 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img
                src="https://ik.imagekit.io/quadrate/QTS%20Logo%20primary.png?updatedAt=1732912040014"
                alt="QTS Logo"
                width={40}
                height={40}
                className="h-10 w-auto brightness-[0.7] contrast-[1.4] [filter:saturate(1.2)_hue-rotate(-10deg)]"
              />
              <span className="ml-2 text-xl font-bold text-[#000000]">QTS</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={link.to}
                    className={`relative text-[#000000]/70 hover:text-[#000000] transition-colors duration-200
                      ${location.pathname === link.to ? 'text-[#000000]' : ''}
                    `}
                  >
                    {link.label}
                    {location.pathname === link.to && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-[#0607E1]/5"
                        layoutId="underline"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              asChild
              className="relative inline-flex items-center justify-center rounded-md bg-[#000000] px-4 py-2 text-sm font-medium text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200 overflow-hidden group"
            >
              <a href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions">
                <span className="relative z-10">Book a Meeting</span>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="torch-wave absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </a>
            </Button>
          </motion.div>

          {/* Mobile menu button and CTA */}
          <div className="flex items-center gap-2 md:hidden opacity-100">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                asChild
                className="relative inline-flex items-center justify-center rounded-md bg-[#000000] px-4 py-2 text-sm font-medium text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200 whitespace-nowrap overflow-hidden group"
              >
                <a href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions">
                  <span className="relative z-10">Book a Meeting</span>
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="torch-wave absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>
                </a>
              </Button>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#000000]/70 hover:text-[#000000] transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden absolute right-0 top-16 w-64 bg-white shadow-lg rounded-bl-lg z-50"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={link.to}
                    className={`block px-3 py-2 text-base font-medium text-[#000000]/70 hover:text-[#000000] transition-colors duration-200
                      ${location.pathname === link.to ? 'text-[#000000]' : ''}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

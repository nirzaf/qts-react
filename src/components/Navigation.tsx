'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import SEOLink from './ui/SEOLink';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Get current path for Next.js routing
  const currentPath = pathname;

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SEOLink to="/" className="flex items-center space-x-3 group" ariaLabel="Quadrate Tech Solutions Home">
              <div className="relative">
                <img
                  src="https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png?updatedAt=1748456663889"
                  alt="QTS Logo"
                  className="h-10 lg:h-12 w-auto brightness-[0.7] contrast-[1.4] [filter:saturate(1.2)_hue-rotate(-10deg)] transition-all duration-300 group-hover:brightness-[0.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/20 to-[#4D0AFF]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg lg:text-xl text-gray-900 group-hover:text-[#0607E1] transition-colors duration-300">Quadrate</span>
                <span className="font-normal text-sm lg:text-base text-gray-600 block leading-none">Tech Solutions</span>
              </div>
            </SEOLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
                whileHover={{ y: -2 }}
              >
                <SEOLink
                  to={link.to}
                  className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:text-[#0607E1] group py-2 px-1
                    ${currentPath === link.to ? 'text-[#0607E1]' : 'text-gray-700 hover:text-gray-900'}`}
                  ariaLabel={`Navigate to ${link.label}`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {currentPath === link.to && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] rounded-full"
                      layoutId="underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                </SEOLink>
              </motion.div>
            ))}

            {/* Desktop CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 400, damping: 10 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SEOLink
                to="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions"
                external={true}
                className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] px-6 py-3 text-sm lg:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group min-w-[44px] min-h-[44px]"
                ariaLabel="Book a meeting with Quadrate Tech Solutions"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Meeting
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4D0AFF] to-[#0607E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </SEOLink>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <motion.div
              className="mr-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SEOLink
                to="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions"
                external={true}
                className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group min-w-[44px] min-h-[44px]"
                ariaLabel="Book a meeting with Quadrate Tech Solutions"
              >
                <span className="relative z-10 hidden sm:block">Book Meeting</span>
                <span className="relative z-10 sm:hidden">Book</span>
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
              </SEOLink>
            </motion.div>
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-[#0607E1] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0607E1] transition-all duration-200 min-w-[44px] min-h-[44px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SEOLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`relative block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:text-[#0607E1] hover:bg-gradient-to-r hover:from-[#0607E1]/5 hover:to-[#4D0AFF]/5 group min-h-[44px] flex items-center
                        ${currentPath === link.to
                          ? 'text-[#0607E1] bg-gradient-to-r from-[#0607E1]/10 to-[#4D0AFF]/10 shadow-sm'
                          : 'text-gray-700 hover:text-gray-900'
                        }`}
                      ariaLabel={`Navigate to ${link.label}`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {currentPath === link.to && (
                        <motion.div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#0607E1] to-[#4D0AFF] rounded-r-full"
                          layoutId="mobile-indicator"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </SEOLink>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                  className="pt-4 border-t border-gray-200/50"
                >
                  <SEOLink
                    to="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions"
                    external={true}
                    onClick={() => setIsOpen(false)}
                    className="relative w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] px-6 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group min-h-[44px]"
                    ariaLabel="Book a meeting with Quadrate Tech Solutions"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book a Meeting
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <div className="absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    </div>
                  </SEOLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

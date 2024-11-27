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
        isScrolled ? 'bg-[#ECF1F5]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Navigation Section */}
        <div className="flex items-center gap-6 md:gap-10">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group"
              >
                <motion.div
                  className={`
                    relative px-4 py-2 rounded-full overflow-hidden text-[#040BAB] hover:text-[#0E0BEE]
                    before:content-[''] before:absolute before:inset-0 
                    before:bg-[#98CCF8]/0 hover:before:bg-[#98CCF8]/10
                    before:transition-all before:duration-300
                    ${location.pathname === link.to ? 'text-[#0E0BEE] before:bg-[#98CCF8]/20' : ''}
                  `}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          {/* Book a Meeting Button */}
          <Button
            asChild
            className="bg-gradient-to-r from-[#5B7CCA] to-[#373FEC] hover:from-[#373FEC] hover:to-[#0E0BEE] text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions">
              Book a Meeting
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-[#98CCF8]/10 hover:bg-[#98CCF8]/20 text-[#040BAB]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#ECF1F5]/95 backdrop-blur-lg border-t border-[#768EB4]/10"
          >
            <div className="container py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-2 px-4 rounded-lg text-[#040BAB] hover:text-[#0E0BEE] hover:bg-[#98CCF8]/10
                    ${location.pathname === link.to ? 'bg-[#98CCF8]/20 text-[#0E0BEE]' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#5B7CCA] to-[#373FEC] hover:from-[#373FEC] hover:to-[#0E0BEE] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions">
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

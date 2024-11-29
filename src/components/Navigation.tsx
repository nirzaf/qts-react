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
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src="https://ik.imagekit.io/quadrate/assets/QTS-Logo-%20emposed.png?updatedAt=1732462181140"
              alt="QTS Logo"
              className="h-12 w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group px-4 py-2"
              >
                <motion.div
                  className={`
                    relative rounded-full overflow-hidden text-[#040BAB] hover:text-[#0E0BEE]
                    before:content-[''] before:absolute before:inset-0 
                    before:bg-[#98CCF8]/0 hover:before:bg-[#98CCF8]/10
                    before:transition-all before:duration-300
                    ${location.pathname === link.to ? 'text-[#0E0BEE] before:bg-[#98CCF8]/20' : ''}
                  `}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Book a Meeting Button */}
            <Button
              asChild
              className="hidden sm:inline-flex bg-gradient-to-r from-[#0607E1] to-[#373FEC] hover:from-[#373FEC] hover:to-[#0E0BEE] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions">
                Book a Meeting
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-[#98CCF8]/10 hover:bg-[#98CCF8]/20 text-[#040BAB]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-[#768EB4]/10 shadow-lg"
          >
            <div className="container py-4 px-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2 rounded-lg text-[#040BAB] hover:text-[#0E0BEE] hover:bg-[#98CCF8]/10
                      ${location.pathname === link.to ? 'bg-[#98CCF8]/20 text-[#0E0BEE]' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#0607E1] to-[#373FEC] hover:from-[#373FEC] hover:to-[#0E0BEE] text-white shadow-lg hover:shadow-xl transition-all duration-300"
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

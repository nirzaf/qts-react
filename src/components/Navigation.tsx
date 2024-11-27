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
                    relative px-4 py-2 rounded-full overflow-hidden
                    before:content-[''] before:absolute before:inset-0 
                    before:bg-gradient-to-br before:from-[#98CCF8]/50 before:to-[#C0F0F9]/5 
                    before:rounded-full before:backdrop-blur-md
                    after:content-[''] after:absolute after:inset-[1px]
                    after:bg-gradient-to-br after:from-[#A6ECFA]/40 after:to-transparent 
                    after:rounded-full after:backdrop-blur-sm
                    ${
                      location.pathname === link.to 
                        ? 'shadow-[0_0_15px_rgba(152,204,248,0.3),inset_0_0_10px_rgba(192,240,249,0.3)] before:opacity-80' 
                        : 'shadow-[0_0_10px_rgba(152,204,248,0.2)] hover:shadow-[0_0_15px_rgba(152,204,248,0.3),inset_0_0_10px_rgba(192,240,249,0.2)]'
                    }
                    transition-all duration-300
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={`
                    relative z-10 text-lg font-medium
                    ${
                      location.pathname === link.to 
                        ? 'text-[#0E0BEE] font-semibold' 
                        : 'text-[#373FEC] hover:text-[#2C24F4]'
                    }
                  `}>
                    {link.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C0F0F9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -top-[150%] -left-[150%] w-[400%] h-[400%] bg-gradient-to-br from-[#98CCF8]/40 via-[#A6ECFA]/10 to-transparent rounded-full transform rotate-45 group-hover:translate-x-[60%] group-hover:translate-y-[60%] transition-transform duration-700" />
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          {/* Book a Meeting Button */}
          <Button 
            asChild
            className="hidden md:flex relative overflow-hidden group bg-transparent hover:bg-transparent"
          >
            <a 
              href="https://quadratetechsolutions.zohobookings.com/"
              className="
                relative px-8 py-3 rounded-full overflow-hidden
                before:content-[''] before:absolute before:inset-0 
                before:bg-gradient-to-br before:from-[#98CCF8]/50 before:to-[#C0F0F9]/5 
                before:rounded-full before:backdrop-blur-md
                after:content-[''] after:absolute after:inset-[1px]
                after:bg-gradient-to-br after:from-[#A6ECFA]/40 after:to-transparent 
                after:rounded-full after:backdrop-blur-sm
                shadow-[0_0_20px_rgba(152,204,248,0.3),inset_0_0_15px_rgba(192,240,249,0.3)]
                group-hover:shadow-[0_0_30px_rgba(152,204,248,0.4),inset_0_0_20px_rgba(192,240,249,0.4)]
                transition-all duration-300 transform group-hover:scale-105
              "
            >
              <span className="relative z-10 text-lg font-semibold bg-gradient-to-r from-[#0E0BEE] via-[#2C24F4] to-[#373FEC] bg-clip-text text-transparent">
                Book a Meeting
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#98CCF8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-[150%] -left-[150%] w-[400%] h-[400%] bg-gradient-to-br from-[#A6ECFA]/40 via-[#C0F0F9]/10 to-transparent rounded-full transform rotate-45 group-hover:translate-x-[60%] group-hover:translate-y-[60%] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#98CCF8]/20 via-[#C0F0F9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden relative overflow-hidden rounded-full p-2
              before:content-[''] before:absolute before:inset-0 
              before:bg-gradient-to-br before:from-[#98CCF8]/50 before:to-[#C0F0F9]/5 
              before:rounded-full before:backdrop-blur-md
              after:content-[''] after:absolute after:inset-[1px]
              after:bg-gradient-to-br after:from-[#A6ECFA]/40 after:to-transparent 
              after:rounded-full after:backdrop-blur-sm
              shadow-[0_0_10px_rgba(152,204,248,0.2)]
              hover:shadow-[0_0_15px_rgba(152,204,248,0.3),inset_0_0_10px_rgba(192,240,249,0.2)]
              transition-all duration-300
            "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative z-10 text-[#373FEC] hover:text-[#0E0BEE]">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </div>
            <div className="absolute -top-[150%] -left-[150%] w-[400%] h-[400%] bg-gradient-to-br from-[#98CCF8]/40 via-[#A6ECFA]/10 to-transparent rounded-full transform rotate-45 hover:translate-x-[60%] hover:translate-y-[60%] transition-transform duration-700" />
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
            <div className="
              container py-4 backdrop-blur-md bg-white/10
              before:content-[''] before:absolute before:inset-0 
              before:bg-gradient-to-b before:from-[#98CCF8]/50 before:to-[#C0F0F9]/5 
              before:backdrop-blur-md
              after:content-[''] after:absolute after:inset-[1px]
              after:bg-gradient-to-b after:from-[#A6ECFA]/40 after:to-transparent 
              after:backdrop-blur-sm
              shadow-[0_10px_20px_rgba(152,204,248,0.2)]
              rounded-b-2xl border-t border-white/30
              relative overflow-hidden
            ">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`
                    relative block py-2 px-4 mx-2 rounded-full overflow-hidden
                    before:content-[''] before:absolute before:inset-0 
                    before:bg-gradient-to-br before:from-[#98CCF8]/30 before:to-[#C0F0F9]/5 
                    before:rounded-full before:backdrop-blur-sm
                    after:content-[''] after:absolute after:inset-[1px]
                    after:bg-gradient-to-br after:from-[#A6ECFA]/20 after:to-transparent 
                    after:rounded-full
                    ${
                      location.pathname === link.to 
                        ? 'shadow-[0_0_15px_rgba(152,204,248,0.3),inset_0_0_10px_rgba(192,240,249,0.3)] before:opacity-80' 
                        : 'hover:shadow-[0_0_10px_rgba(152,204,248,0.2),inset_0_0_5px_rgba(192,240,249,0.1)]'
                    }
                    transition-all duration-300 my-1
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={`
                    relative z-10 text-lg font-medium
                    ${
                      location.pathname === link.to 
                        ? 'text-[#0E0BEE] font-semibold' 
                        : 'text-[#373FEC] hover:text-[#2C24F4]'
                    }
                  `}>
                    {link.label}
                  </span>
                  <div className="absolute -top-[150%] -left-[150%] w-[400%] h-[400%] bg-gradient-to-br from-[#98CCF8]/40 via-[#A6ECFA]/10 to-transparent rounded-full transform rotate-45 hover:translate-x-[60%] hover:translate-y-[60%] transition-transform duration-700" />
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button 
                  asChild
                  className="w-full relative overflow-hidden group bg-transparent hover:bg-transparent"
                >
                  <a 
                    href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions"
                    className="
                      relative px-8 py-3 rounded-full overflow-hidden
                      before:content-[''] before:absolute before:inset-0 
                      before:bg-gradient-to-br before:from-[#98CCF8]/50 before:to-[#C0F0F9]/5 
                      before:rounded-full before:backdrop-blur-md
                      after:content-[''] after:absolute after:inset-[1px]
                      after:bg-gradient-to-br after:from-[#A6ECFA]/40 after:to-transparent 
                      after:rounded-full after:backdrop-blur-sm
                      shadow-[0_0_20px_rgba(152,204,248,0.3),inset_0_0_15px_rgba(192,240,249,0.3)]
                      group-hover:shadow-[0_0_30px_rgba(152,204,248,0.4),inset_0_0_20px_rgba(192,240,249,0.4)]
                      transition-all duration-300 transform group-hover:scale-105
                    "
                  >
                    <span className="relative z-10 text-lg font-semibold bg-gradient-to-r from-[#0E0BEE] via-[#2C24F4] to-[#373FEC] bg-clip-text text-transparent">
                      Book a Meeting
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#98CCF8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -top-[150%] -left-[150%] w-[400%] h-[400%] bg-gradient-to-br from-[#A6ECFA]/40 via-[#C0F0F9]/10 to-transparent rounded-full transform rotate-45 group-hover:translate-x-[60%] group-hover:translate-y-[60%] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#98CCF8]/20 via-[#C0F0F9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
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

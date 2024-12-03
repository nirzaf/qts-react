import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ];

  const letterVariants = {
    initial: {
      opacity: 0,
      y: -20,
      rotate: -15,
      scale: 0.9
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.1
      }
    }),
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0607E1]/5 bg-[#FFFFFF] shadow-sm backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover="hover"
            variants={containerVariants}
          >
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="https://ik.imagekit.io/quadrate/QTS%20Logo%20primary.png?updatedAt=1732912040014"
                alt="QTS Logo"
                className="h-8 w-auto brightness-[0.7] contrast-[1.4] [filter:saturate(1.2)_hue-rotate(-10deg)]"
              />
              <div className="flex items-center">
                {['Q', 'T', 'S'].map((letter, i) => (
                  <motion.div
                    key={letter}
                    custom={i}
                    initial="initial"
                    animate="animate"
                    variants={letterVariants}
                    className="relative px-[1px]"
                  >
                    <div className="relative">
                      {/* Main Letter */}
                      <span className={`
                        relative z-20
                        text-3xl font-black
                        inline-block
                        px-1
                        ${i === 0 
                          ? 'text-[#0607E1]' 
                          : i === 1
                          ? 'text-[#0607E1]/90'
                          : 'text-[#0607E1]/80'
                        }
                      `}>
                        {letter}
                      </span>

                      {/* Background Highlight */}
                      <div className={`
                        absolute inset-0 z-10
                        bg-gradient-to-br from-[#FFFFFF] to-[#0607E1]/5
                        rounded-sm
                        transform rotate-3
                        transition-transform duration-300
                        group-hover:rotate-6
                      `} />

                      {/* Decorative Line */}
                      <motion.div
                        className={`
                          absolute -bottom-0.5 left-0 right-0
                          h-[2px]
                          bg-[#0607E1]
                          rounded-full
                          origin-left
                          ${i === 0 
                            ? 'opacity-100' 
                            : i === 1
                            ? 'opacity-80'
                            : 'opacity-60'
                          }
                        `}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          delay: i * 0.2,
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                      />

                      {/* Hover Glow Effect */}
                      <div className={`
                        absolute -inset-2 z-0
                        bg-[#0607E1]/5
                        rounded-lg blur-lg
                        opacity-0 transition-opacity duration-300
                        group-hover:opacity-100
                      `} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-[#0607E1] relative
                    ${location.pathname === link.to ? 'text-[#0607E1]' : 'text-gray-700'}`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0607E1]"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Desktop CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center rounded-md bg-[#000000] px-4 py-2 text-sm font-medium text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200 overflow-hidden group"
              >
                <span className="relative z-10">Book a Meeting</span>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="torch-wave absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.div
              className="mr-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center rounded-md bg-[#000000] px-3 py-1.5 text-sm font-medium text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200"
              >
                <span className="relative z-10">Book a Meeting</span>
              </a>
            </motion.div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0607E1] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0607E1]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-[#0607E1] hover:bg-gray-50
                        ${location.pathname === link.to ? 'text-[#0607E1] bg-gray-50' : 'text-gray-700'}`}
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
    </header>
  );
};

'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsAppChatProps {
  phoneNumber: string; // Format: country code + number (e.g., "1234567890")
  message?: string; // Pre-filled message
  position?: 'bottom-right' | 'bottom-left';
  showDelay?: number; // Delay in ms before showing the button
}

// Official WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.135-2.135c2.369 1.228 5.020 1.872 7.865 1.872 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.547 0-5.053-0.735-7.163-2.116l-0.512-0.303-5.303 1.392 1.417-5.269-0.334-0.531c-1.514-2.411-2.313-5.197-2.313-8.173 0-7.364 5.991-13.355 13.355-13.355s13.355 5.991 13.355 13.355c0 7.364-5.991 13.355-13.355 13.355z" />
    <path d="M23.197 19.477c-0.373-0.187-2.211-1.093-2.555-1.217-0.344-0.124-0.595-0.187-0.845 0.187s-0.971 1.217-1.191 1.467c-0.22 0.251-0.439 0.282-0.812 0.095s-1.584-0.584-3.017-1.863c-1.115-0.995-1.868-2.225-2.088-2.599s-0.023-0.575 0.164-0.761c0.169-0.167 0.373-0.437 0.56-0.656 0.187-0.22 0.249-0.376 0.373-0.627 0.124-0.251 0.062-0.47-0.031-0.657s-0.845-2.036-1.159-2.788c-0.306-0.732-0.617-0.633-0.845-0.645-0.219-0.011-0.469-0.013-0.72-0.013s-0.657 0.093-1.001 0.467c-0.344 0.373-1.313 1.28-1.313 3.121s1.344 3.62 1.531 3.871c0.187 0.251 2.641 4.031 6.397 5.652 0.893 0.385 1.591 0.615 2.135 0.788 0.897 0.285 1.713 0.245 2.359 0.149 0.72-0.108 2.211-0.904 2.524-1.776s0.313-1.62 0.219-1.776c-0.095-0.157-0.345-0.251-0.72-0.439z" />
  </svg>
);

const WhatsAppChat = ({
  phoneNumber,
  message = 'Hello! I would like to know more about your services.',
  position = 'bottom-right',
  showDelay = 3000,
}: WhatsAppChatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show button after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showDelay);

    return () => clearTimeout(timer);
  }, [showDelay]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed ${positionClasses[position]} z-50`}
        >
          {/* Tooltip/Prompt */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: position === 'bottom-right' ? 20 : -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: position === 'bottom-right' ? 20 : -20, y: 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute bottom-full mb-4 ${
                  position === 'bottom-right' ? 'right-0' : 'left-0'
                } w-64`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                        <WhatsAppIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                          Chat with us
                        </h3>
                        <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Online
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      aria-label="Close chat prompt"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Hi there! How can we help you today?
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Start Chat
                  </button>
                </div>
                {/* Arrow pointing to button */}
                <div
                  className={`absolute top-full ${
                    position === 'bottom-right' ? 'right-6' : 'left-6'
                  } -mt-2`}
                >
                  <div className="w-4 h-4 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (isExpanded) {
                handleWhatsAppClick();
              } else {
                setIsExpanded(true);
              }
            }}
            className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
            aria-label="Open WhatsApp chat"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

            {/* WhatsApp Icon with Animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 1],
              }}
              className="relative"
            >
              <WhatsAppIcon className="w-8 h-8 text-white" />
            </motion.div>

            {/* Notification Badge with Bounce */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
            >
              1
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppChat;

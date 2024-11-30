import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  heroImage?: {
    src: string;
    alt: string;
  };
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
}

const AnimatedLetter: React.FC<{ letter: string; index: number }> = ({ letter, index }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.05,
      ease: [0.43, 0.13, 0.23, 0.96]
    }}
    className={`inline-block transform hover:scale-110 hover:text-[#007AFF] transition-all duration-300 cursor-default font-chakra
      ${letter === ' ' ? 'mx-[3px]' : 'mx-[0.5px]'}`}
    style={{
      textShadow: '1px 1px 0px rgba(0,0,0,0.05)'
    }}
  >
    {letter === ' ' ? '\u00A0' : letter}
  </motion.span>
);

const AnimatedWord: React.FC<{ word: string }> = ({ word }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 font-montserrat text-3xl md:text-4xl font-bold tracking-wider"
        whileHover={{ scale: 1.05 }}
      >
        {word.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            className="inline-block"
            style={{
              color: isHovered ? '#007AFF' : 'currentColor',
              transition: 'color 0.3s ease'
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
      {isHovered && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-lg -z-10"
        />
      )}
    </motion.div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroImage,
  primaryButton,
  secondaryButton,
}) => {
  const words = ["Transform", "Innovate", "Elevate", "Empower"];
  const [currentWord, setCurrentWord] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] pt-32 pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#000000]/2" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-[#000000]/2 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-[#000000]/2 rounded-full blur-2xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Company Name - Smaller Size */}
              <motion.h2 
                className="text-2xl md:text-3xl font-medium tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start font-chakra tracking-normal">
                  {"Quadrate Tech Solutions".split('').map((letter, index) => (
                    <AnimatedLetter key={index} letter={letter} index={index} />
                  ))}
                </div>
              </motion.h2>

              {/* Helps Text - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <motion.h3 
                  className="text-5xl font-orbitron font-bold relative z-10 cursor-default
                    bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:from-blue-500 hover:via-blue-300 hover:to-blue-500
                    bg-clip-text text-transparent
                    transition-all duration-300 ease-in-out transform hover:scale-105
                    hover:drop-shadow-[0_0_8px_rgba(0,122,255,0.5)]"
                >
                  Helps
                </motion.h3>
              </motion.div>

              {/* Main Heading - Larger Size */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="h-[1.2em] overflow-hidden">
                  <motion.span
                    key={words[currentWord]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ 
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="bg-gradient-to-r from-[#000000] via-[#0607E1] to-[#0607E1] bg-clip-text text-transparent inline-block relative"
                  >
                    {words[currentWord]}
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-1 bg-[#0607E1]"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    />
                  </motion.span>
                </div>
              </motion.h1>

              {/* Your Digital Presence with enhanced animation */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {"Your Digital Presence".split(' ').map((word, idx) => (
                    <AnimatedWord key={idx} word={word} />
                  ))}
                </div>
              </motion.div>

              <motion.p 
                className="text-xl lg:text-2xl text-[#000000]/70 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Elevate your business with cutting-edge solutions that drive growth and innovation
              </motion.p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.button
                  className="px-8 py-4 rounded-xl bg-[#000000] text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={primaryButton.onClick}
                >
                  {primaryButton.text}
                </motion.button>
                <motion.button
                  className="px-8 py-4 rounded-xl border-2 border-[#000000] text-[#000000] font-semibold text-lg hover:bg-[#000000]/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.text}
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={heroImage?.src || "https://ik.imagekit.io/quadrate/assets/img/QTS%20PNG.png?updatedAt=1732728815505"}
                  alt={heroImage?.alt || "Quadrate Tech Solutions"}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12))',
                  }}
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-[#000000]/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -z-10 -inset-4 bg-[#0607E1]/2 rounded-2xl blur-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Blue Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0607E1]/2" />
    </section>
  );
};

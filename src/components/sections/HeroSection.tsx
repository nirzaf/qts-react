import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Brain, Globe, Star, Rocket } from 'lucide-react';

interface HeroSectionProps {
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
}



export const HeroSection = ({
  primaryButton,
  secondaryButton,
}: HeroSectionProps): React.ReactElement => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const phrases = useMemo(() => [
    "Transform Your Digital Presence",
    "Accelerate Business Growth",
    "Innovate with AI Solutions",
    "Scale Your Operations",
    "Build the Future"
  ], []);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      if (!isDeleting && currentIndex <= currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, currentIndex));
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(currentPhrase.slice(0, currentIndex));
        currentIndex--;
      }

      if (currentIndex === currentPhrase.length + 1 && !isDeleting) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }

      if (currentIndex === 0 && isDeleting) {
        isDeleting = false;
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(typeWriter, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, phrases]);



  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };



  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  };

  // Particle system
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5
  }));

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20"
      aria-label="Hero section"
      role="region"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 animated-gradient opacity-5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-[#0607E1]/20 to-[#4D0AFF]/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0607E1]/20 to-[#4D0AFF]/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#0607E1]/15 to-[#00D4FF]/10 rounded-full blur-3xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 7, 225, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 7, 225, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-20 text-[#0607E1]/20"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 0.5 }
          }}
        >
          <Brain className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-[#0607E1]/20"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1.5 }
          }}
        >
          <Zap className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-[#0607E1]/20"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
        >
          <Globe className="w-7 h-7" />
        </motion.div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-6 lg:space-y-8"
            variants={itemVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-full text-[#0607E1] font-medium text-sm lg:text-base border border-[#0607E1]/20 touch-target"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              AI-Powered Solutions
              <Star className="w-3 h-3 ml-2 text-[#4D0AFF]" />
            </motion.div>

            {/* Main Heading with Staggered Letter Animation */}
            <div className="space-y-4">
              <motion.h1
                className="text-fluid-4xl lg:text-fluid-6xl font-bold leading-tight tracking-tight"
                variants={itemVariants}
              >
                <motion.span
                  className="text-gray-900 block lg:inline"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {"We Help ".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
                <div className="relative inline-block min-h-[1.2em]">
                  <motion.span
                    className="bg-gradient-to-r from-[#0607E1] via-[#4D0AFF] to-[#0607E1] bg-clip-text text-transparent block lg:inline"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {displayText}
                    <motion.span
                      className="inline-block w-0.5 h-[0.9em] bg-[#0607E1] ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-fluid-lg lg:text-fluid-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Empowering businesses with cutting-edge AI solutions, custom software development, and digital transformation services. From startups to enterprises, we turn your vision into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={primaryButton.onClick}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden touch-target"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  {primaryButton.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4D0AFF] to-[#0607E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
              </motion.button>

              <motion.button
                onClick={secondaryButton.onClick}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#0607E1]/20 text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white hover:border-[#0607E1] transition-all duration-300 shadow-md hover:shadow-lg touch-target"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                {secondaryButton.text}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-gray-200"
            >
              {[
                { number: "50+", label: "Projects Delivered", icon: Rocket },
                { number: "15+", label: "AI Services", icon: Brain },
                { number: "24/7", label: "Support", icon: Globe }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-4 h-4 lg:w-5 lg:h-5 text-[#0607E1] mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-fluid-xl lg:text-fluid-2xl font-bold gradient-text">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-fluid-xs lg:text-fluid-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <div className="flex items-center text-sm text-[#000000]/60">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                ISO Certified
              </div>
              <div className="flex items-center text-sm text-[#000000]/60">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Microsoft Partner
              </div>
              <div className="flex items-center text-sm text-[#000000]/60">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                AI Certified
              </div>
            </motion.div>

          </motion.div>

          {/* Visual Content - Hidden on mobile, shown on desktop */}
          <aside className="hidden lg:block w-full lg:w-auto pt-2 lg:pt-0 flex justify-center lg:justify-end" aria-label="3D visualization">
            <div className="relative w-full lg:w-auto flex justify-center lg:justify-end overflow-hidden">
              <div className="w-96 h-96 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/5 rounded-3xl flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458"
                  alt="Quadrate Tech Solutions"
                  className="w-full h-full object-cover rounded-3xl"
                  loading="eager"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
};
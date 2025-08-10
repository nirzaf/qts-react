'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Code,
  Globe,
  Database,
  Cpu,
  Network,
  Cloud,
  Bot,
  Eye,
  MessageSquare,
  BarChart3,
  Settings,
  Layers,
  Zap,
  Shield,
  Sparkles,
  Target,
  Rocket,
  Lightbulb
} from 'lucide-react';
import NeuralNetworkViz from './NeuralNetworkViz';

const HeroAnimation: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const coreAnimation = useAnimation();

  // Enhanced technology nodes with more services and better positioning
  const techNodes = [
    { icon: Brain, label: 'AI Strategy', color: '#0607E1', position: { x: 50, y: 12 }, category: 'ai' },
    { icon: Bot, label: 'Generative AI', color: '#4D0AFF', position: { x: 78, y: 22 }, category: 'ai' },
    { icon: Eye, label: 'Computer Vision', color: '#06B6D4', position: { x: 88, y: 45 }, category: 'ai' },
    { icon: MessageSquare, label: 'NLP & LLM', color: '#10B981', position: { x: 82, y: 68 }, category: 'ai' },
    { icon: Sparkles, label: 'ML Models', color: '#F59E0B', position: { x: 65, y: 82 }, category: 'ai' },
    { icon: Code, label: 'Development', color: '#EF4444', position: { x: 45, y: 88 }, category: 'dev' },
    { icon: Database, label: 'Data Engineering', color: '#8B5CF6', position: { x: 22, y: 78 }, category: 'data' },
    { icon: Cloud, label: 'Cloud Solutions', color: '#06B6D4', position: { x: 12, y: 55 }, category: 'infra' },
    { icon: Globe, label: 'Web Solutions', color: '#10B981', position: { x: 18, y: 32 }, category: 'dev' },
    { icon: Network, label: 'Integration', color: '#F59E0B', position: { x: 35, y: 18 }, category: 'infra' },
    { icon: BarChart3, label: 'Analytics', color: '#EF4444', position: { x: 62, y: 25 }, category: 'data' },
    { icon: Settings, label: 'Automation', color: '#8B5CF6', position: { x: 72, y: 52 }, category: 'infra' },
    { icon: Layers, label: 'Architecture', color: '#0607E1', position: { x: 38, y: 35 }, category: 'infra' },
    { icon: Shield, label: 'Security', color: '#4D0AFF', position: { x: 28, y: 58 }, category: 'infra' },
    { icon: Zap, label: 'Performance', color: '#06B6D4', position: { x: 58, y: 72 }, category: 'dev' },
    { icon: Target, label: 'Optimization', color: '#10B981', position: { x: 42, y: 48 }, category: 'ai' },
    { icon: Rocket, label: 'Innovation', color: '#F59E0B', position: { x: 68, y: 38 }, category: 'ai' },
    { icon: Lightbulb, label: 'Consulting', color: '#EF4444', position: { x: 32, y: 25 }, category: 'strategy' }
  ];

  // Enhanced particle systems
  const [dataParticles, setDataParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    color: string;
    type: 'data' | 'energy' | 'signal';
    opacity: number;
  }>>([]);

  const [energyOrbs, setEnergyOrbs] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    intensity: number;
  }>>([]);

  // Mouse tracking for interactive effects
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  }, []);

  useEffect(() => {
    // Generate enhanced particle systems
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 4 + 2,
      color: ['#0607E1', '#4D0AFF', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][Math.floor(Math.random() * 7)],
      type: ['data', 'energy', 'signal'][Math.floor(Math.random() * 3)] as 'data' | 'energy' | 'signal',
      opacity: Math.random() * 0.6 + 0.4
    }));
    setDataParticles(particles);

    // Generate energy orbs
    const orbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      color: ['#0607E1', '#4D0AFF', '#06B6D4', '#10B981'][Math.floor(Math.random() * 4)],
      intensity: Math.random() * 0.3 + 0.1
    }));
    setEnergyOrbs(orbs);
  }, []);

  useEffect(() => {
    // Enhanced node cycling with category-based activation
    const nodeInterval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % techNodes.length);
    }, 1800);

    return () => {
      clearInterval(nodeInterval);
    };
  }, [techNodes.length]);

  // Core animation controller
  useEffect(() => {
    const animateCore = async () => {
      await coreAnimation.start({
        scale: [1, 1.05, 1],
        rotate: [0, 360],
        transition: {
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }
      });
    };
    animateCore();
  }, [coreAnimation]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.8, 1, 0.8],
      boxShadow: [
        '0 0 20px rgba(6, 7, 225, 0.3)',
        '0 0 40px rgba(6, 7, 225, 0.8)',
        '0 0 20px rgba(6, 7, 225, 0.3)'
      ]
    }
  };

  const orbitalVariants = {
    animate: {
      rotate: 360
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[500px] overflow-hidden hidden md:block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/50" />

      {/* Neural Network Visualization */}
      <div className="absolute inset-0">
        <NeuralNetworkViz />
      </div>

      {/* Dynamic Energy Orbs */}
      <div className="absolute inset-0">
        {energyOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full blur-xl"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: `radial-gradient(circle, ${orb.color}${Math.floor(orb.intensity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              x: [0, Math.sin(orb.id) * 20, 0],
              y: [0, Math.cos(orb.id) * 15, 0],
              scale: [1, 1.2, 1],
              opacity: [orb.intensity, orb.intensity * 1.5, orb.intensity]
            }}
            transition={{
              duration: 8 + orb.id,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.id * 0.5
            }}
          />
        ))}
      </div>

      {/* Enhanced Central Processing Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: 0 }}
        animate={coreAnimation}
        style={{
          x: isHovered ? (mousePosition.x - 50) * 0.1 : 0,
          y: isHovered ? (mousePosition.y - 50) * 0.1 : 0
        }}
      >
        <div className="relative">
          {/* Enhanced Core Circle with Gradient Animation */}
          <motion.div
            className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #0607E1, #4D0AFF, #06B6D4, #0607E1)',
              backgroundSize: '300% 300%'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            variants={pulseVariants}
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

            {/* Animated CPU Icon */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Cpu className="w-14 h-14 text-white drop-shadow-lg" />
            </motion.div>

            {/* Core Energy Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: '50%',
                  top: '50%'
                }}
                animate={{
                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 40],
                  opacity: [1, 0],
                  scale: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Enhanced Multi-Layer Rotating Rings */}
          <motion.div
            className="absolute inset-0 w-36 h-36 -m-6 border-2 rounded-full"
            style={{
              borderImage: 'linear-gradient(45deg, #0607E1, transparent, #0607E1) 1',
              borderStyle: 'solid'
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute inset-0 w-44 h-44 -m-10 border rounded-full"
            style={{
              borderImage: 'linear-gradient(90deg, #4D0AFF, transparent, #4D0AFF) 1',
              borderStyle: 'solid'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute inset-0 w-52 h-52 -m-14 border rounded-full"
            style={{
              borderImage: 'linear-gradient(135deg, #06B6D4, transparent, #06B6D4) 1',
              borderStyle: 'solid'
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 24, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Orbital Elements */}
          <motion.div
            className="absolute inset-0 w-60 h-60 -m-18"
            variants={orbitalVariants}
            animate="animate"
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: '0 0'
                }}
                animate={{
                  rotate: [0, 360],
                  x: Math.cos(i * 45 * Math.PI / 180) * 120,
                  y: Math.sin(i * 45 * Math.PI / 180) * 120,
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Technology Nodes */}
      <motion.div
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {techNodes.map((node, index) => {
          const IconComponent = node.icon;
          const isActive = index === activeNode;
          const categoryColors: Record<string, string> = {
            ai: '#0607E1',
            dev: '#10B981',
            data: '#F59E0B',
            infra: '#8B5CF6',
            strategy: '#EF4444'
          };

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              variants={nodeVariants}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
              whileHover={{
                scale: 1.3,
                z: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              animate={isHovered ? {
                x: (mousePosition.x - node.position.x) * 0.05,
                y: (mousePosition.y - node.position.y) * 0.05
              } : {}}
            >
              <motion.div
                className={`relative p-4 rounded-2xl backdrop-blur-md border-2 shadow-xl transition-all duration-500 ${
                  isActive
                    ? 'bg-white/95 border-2 shadow-2xl scale-110'
                    : 'bg-white/80 border-white/40'
                }`}
                style={{
                  borderColor: isActive ? node.color : 'rgba(255,255,255,0.4)',
                  boxShadow: isActive
                    ? `0 0 30px ${node.color}40, 0 0 60px ${node.color}20`
                    : '0 4px 20px rgba(0,0,0,0.1)'
                }}
                animate={isActive ? {
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    `0 0 20px ${node.color}30`,
                    `0 0 40px ${node.color}60`,
                    `0 0 20px ${node.color}30`
                  ]
                } : {}}
                transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
              >
                {/* Category Indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                  style={{ backgroundColor: categoryColors[node.category] }}
                  animate={isActive ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  } : {}}
                  transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                />

                {/* Enhanced Icon with Animation */}
                <motion.div
                  animate={isActive ? {
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{
                    rotate: { duration: 3, repeat: isActive ? Infinity : 0, ease: "linear" },
                    scale: { duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }
                  }}
                >
                  <IconComponent
                    className={`w-7 h-7 transition-all duration-300 ${
                      isActive ? 'text-white drop-shadow-lg' : 'text-gray-700'
                    }`}
                    style={{
                      color: isActive ? node.color : undefined,
                      filter: isActive ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : undefined
                    }}
                  />
                </motion.div>

                {/* Enhanced Node Label */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold whitespace-nowrap px-3 py-1 rounded-full backdrop-blur-sm"
                      style={{
                        color: node.color,
                        backgroundColor: `${node.color}20`,
                        border: `1px solid ${node.color}40`
                      }}
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {node.label}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Particle Burst Effect */}
                {isActive && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          backgroundColor: node.color,
                          left: '50%',
                          top: '50%'
                        }}
                        animate={{
                          x: [0, Math.cos(i * 45 * Math.PI / 180) * 30],
                          y: [0, Math.sin(i * 45 * Math.PI / 180) * 30],
                          opacity: [1, 0],
                          scale: [1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Enhanced Connection Lines to Center */}
              {isActive && (
                <motion.div
                  className="absolute top-1/2 left-1/2 origin-left h-1 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${node.color}, transparent)`,
                    width: `${Math.sqrt(Math.pow(50 - node.position.x, 2) + Math.pow(50 - node.position.y, 2)) * 5}px`,
                    transform: `translate(-50%, -50%) rotate(${Math.atan2(50 - node.position.y, 50 - node.position.x) * 180 / Math.PI}deg)`,
                    boxShadow: `0 0 10px ${node.color}60`
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: 1,
                    opacity: [0, 1, 0.7],
                    boxShadow: [
                      `0 0 5px ${node.color}40`,
                      `0 0 15px ${node.color}80`,
                      `0 0 5px ${node.color}40`
                    ]
                  }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{
                    scaleX: { duration: 0.6, ease: "easeOut" },
                    opacity: { duration: 0.8 },
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                />
              )}

              {/* Data Flow Particles along Connection */}
              {isActive && (
                <div className="absolute top-1/2 left-1/2 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: node.color,
                        boxShadow: `0 0 8px ${node.color}`
                      }}
                      animate={{
                        x: [
                          -25,
                          Math.cos(Math.atan2(50 - node.position.y, 50 - node.position.x)) * Math.sqrt(Math.pow(50 - node.position.x, 2) + Math.pow(50 - node.position.y, 2)) * 2.5
                        ],
                        y: [
                          -25,
                          Math.sin(Math.atan2(50 - node.position.y, 50 - node.position.x)) * Math.sqrt(Math.pow(50 - node.position.x, 2) + Math.pow(50 - node.position.y, 2)) * 2.5
                        ],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {dataParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [
                `${particle.x}%`,
                `${(particle.x + 25) % 100}%`,
                `${(particle.x + 50) % 100}%`,
                `${particle.x}%`
              ],
              y: [
                `${particle.y}%`,
                `${(particle.y + 20) % 100}%`,
                `${(particle.y + 40) % 100}%`,
                `${particle.y}%`
              ],
              opacity: [particle.opacity * 0.4, particle.opacity, particle.opacity * 0.4],
              scale: particle.type === 'energy' ? [1, 1.5, 1] : [1, 1.2, 1],
              rotate: particle.type === 'signal' ? [0, 360] : 0
            }}
            transition={{
              duration: particle.speed * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.1
            }}
          >
            {/* Particle Core */}
            <div
              className="w-full h-full rounded-full"
              style={{
                background: particle.type === 'energy'
                  ? `radial-gradient(circle, ${particle.color}, ${particle.color}80, transparent)`
                  : particle.type === 'signal'
                  ? `linear-gradient(45deg, ${particle.color}, transparent, ${particle.color})`
                  : particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}60`
              }}
            />

            {/* Particle Trail Effect */}
            {particle.type === 'data' && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, transparent 40%, ${particle.color}20 60%, transparent 80%)`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: particle.id * 0.2
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Data Flow Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 rounded-full"
            style={{
              background: `linear-gradient(to right, transparent, ${['#0607E1', '#4D0AFF', '#06B6D4', '#10B981'][i % 4]}80, transparent)`,
              top: `${15 + i * 12}%`,
              left: '-150%',
              width: '300%',
              boxShadow: `0 0 10px ${['#0607E1', '#4D0AFF', '#06B6D4', '#10B981'][i % 4]}40`
            }}
            animate={{
              x: ['0%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}

        {/* Vertical Data Streams */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute w-0.5 rounded-full"
            style={{
              background: `linear-gradient(to bottom, transparent, ${['#0607E1', '#4D0AFF', '#06B6D4', '#10B981'][i]}60, transparent)`,
              left: `${25 + i * 20}%`,
              top: '-150%',
              height: '300%',
              boxShadow: `0 0 8px ${['#0607E1', '#4D0AFF', '#06B6D4', '#10B981'][i]}30`
            }}
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6
            }}
          />
        ))}
      </div>

      {/* Enhanced Digital Transformation Visualization */}
      <motion.div
        className="absolute top-6 left-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex items-center space-x-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#0607E1]/20">
          <motion.div
            className="w-3 h-3 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 5px rgba(6, 7, 225, 0.3)',
                '0 0 15px rgba(6, 7, 225, 0.8)',
                '0 0 5px rgba(6, 7, 225, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-[#0607E1]">AI Processing</span>
          <motion.div
            className="flex space-x-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-4 bg-gradient-to-t from-[#0607E1] to-[#06B6D4] rounded-full"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>



      {/* Enhanced Quadrate Logo Integration */}
      <motion.div
        className="absolute bottom-6 right-6"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border-3 border-[#0607E1]/40 transform rotate-45 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] transform -rotate-45 rounded-md shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 10px rgba(6, 7, 225, 0.3)',
                  '0 0 20px rgba(6, 7, 225, 0.6)',
                  '0 0 10px rgba(6, 7, 225, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Orbital Elements */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#0607E1] rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0'
              }}
              animate={{
                rotate: [0, 360],
                x: Math.cos(i * 90 * Math.PI / 180) * 35,
                y: Math.sin(i * 90 * Math.PI / 180) * 35
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                delay: i * 0.5
              }}
            />
          ))}
        </motion.div>
      </motion.div>



      {/* Enhanced Ambient Glow Effects */}
      <motion.div
        className="absolute top-1/5 left-1/5 w-40 h-40 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6, 7, 225, 0.15) 0%, rgba(6, 7, 225, 0.05) 50%, transparent 100%)'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/5 right-1/5 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(77, 10, 255, 0.12) 0%, rgba(77, 10, 255, 0.04) 50%, transparent 100%)'
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -25, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/6 w-36 h-36 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.03) 50%, transparent 100%)'
        }}
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/6 w-44 h-44 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 50%, transparent 100%)'
        }}
        animate={{
          scale: [1.2, 0.7, 1.2],
          opacity: [0.25, 0.55, 0.25],
          x: [0, 30, 0],
          y: [0, -25, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Interactive Mouse Glow */}
      {isHovered && (
        <motion.div
          className="absolute w-32 h-32 rounded-full blur-2xl pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(6, 7, 225, 0.2) 0%, rgba(77, 10, 255, 0.1) 50%, transparent 100%)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default HeroAnimation;
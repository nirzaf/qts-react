'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

const HeroAnimation: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  // Technology nodes
  const techNodes = [
    { icon: Brain, label: 'AI Strategy', color: '#0607E1', position: { x: 50, y: 12 } },
    { icon: Bot, label: 'Generative AI', color: '#4D0AFF', position: { x: 78, y: 22 } },
    { icon: Eye, label: 'Computer Vision', color: '#06B6D4', position: { x: 88, y: 45 } },
    { icon: MessageSquare, label: 'NLP & LLM', color: '#10B981', position: { x: 82, y: 68 } },
    { icon: Sparkles, label: 'ML Models', color: '#F59E0B', position: { x: 65, y: 82 } },
    { icon: Code, label: 'Development', color: '#EF4444', position: { x: 45, y: 88 } },
    { icon: Database, label: 'Data Engineering', color: '#8B5CF6', position: { x: 22, y: 78 } },
    { icon: Cloud, label: 'Cloud Solutions', color: '#06B6D4', position: { x: 12, y: 55 } },
    { icon: Globe, label: 'Web Solutions', color: '#10B981', position: { x: 18, y: 32 } },
    { icon: Network, label: 'Integration', color: '#F59E0B', position: { x: 35, y: 18 } },
  ];

  useEffect(() => {
    const nodeInterval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % techNodes.length);
    }, 1800);

    return () => {
      clearInterval(nodeInterval);
    };
  }, [techNodes.length]);

  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/50" />

      {/* Central Processing Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="relative">
          {/* Core Circle */}
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
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
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
          </motion.div>

          {/* Rotating Rings */}
          <motion.div
            className="absolute inset-0 w-36 h-36 -m-6 border-2 rounded-full border-[#0607E1]/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute inset-0 w-44 h-44 -m-10 border rounded-full border-[#4D0AFF]/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Technology Nodes */}
      <div className="absolute inset-0">
        {techNodes.map((node, index) => {
          const IconComponent = node.icon;
          const isActive = index === activeNode;

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
              whileHover={{ scale: 1.2 }}
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
                } : {}}
                transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
              >
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
                    }}
                  />
                </motion.div>

                {/* Active label */}
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
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Data streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 rounded-full"
            style={{
              background: `linear-gradient(to right, transparent, ${['#0607E1', '#4D0AFF', '#06B6D4', '#10B981'][i]}80, transparent)`,
              top: `${20 + i * 20}%`,
              left: '-100%',
              width: '200%',
            }}
            animate={{
              x: ['0%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroAnimation;
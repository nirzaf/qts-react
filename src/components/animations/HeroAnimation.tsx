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
  Layers
} from 'lucide-react';
import CodeMatrixEffect from './CodeMatrixEffect';
import NeuralNetworkViz from './NeuralNetworkViz';

const HeroAnimation: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  // Core technology nodes representing Quadrate's services
  const techNodes = [
    { icon: Brain, label: 'AI Strategy', color: '#0607E1', position: { x: 50, y: 15 } },
    { icon: Bot, label: 'Generative AI', color: '#4D0AFF', position: { x: 75, y: 25 } },
    { icon: Eye, label: 'Computer Vision', color: '#06B6D4', position: { x: 85, y: 50 } },
    { icon: MessageSquare, label: 'NLP', color: '#10B981', position: { x: 75, y: 75 } },
    { icon: Code, label: 'Development', color: '#F59E0B', position: { x: 50, y: 85 } },
    { icon: Database, label: 'Data Engineering', color: '#EF4444', position: { x: 25, y: 75 } },
    { icon: Cloud, label: 'Cloud Solutions', color: '#8B5CF6', position: { x: 15, y: 50 } },
    { icon: Globe, label: 'Web Solutions', color: '#06B6D4', position: { x: 25, y: 25 } },
    { icon: Network, label: 'Integration', color: '#10B981', position: { x: 60, y: 40 } },
    { icon: BarChart3, label: 'Analytics', color: '#F59E0B', position: { x: 40, y: 60 } },
    { icon: Settings, label: 'Automation', color: '#EF4444', position: { x: 65, y: 60 } },
    { icon: Layers, label: 'Architecture', color: '#8B5CF6', position: { x: 35, y: 40 } }
  ];

  // Floating data particles
  const [dataParticles, setDataParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    color: string;
  }>>([]);

  useEffect(() => {
    // Generate floating data particles representing data flow
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 3 + 2,
      color: ['#0607E1', '#4D0AFF', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 6)]
    }));
    setDataParticles(particles);
  }, []);

  useEffect(() => {
    // Cycle through active nodes
    const nodeInterval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % techNodes.length);
    }, 2000);

    return () => {
      clearInterval(nodeInterval);
    };
  }, [techNodes.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden">
      {/* Background Code Matrix Effect */}
      <CodeMatrixEffect />

      {/* Neural Network Visualization */}
      <div className="absolute inset-0">
        <NeuralNetworkViz />
      </div>

      {/* Central Processing Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: 1, 
          rotate: 360,
          transition: {
            scale: { duration: 1, ease: "easeOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }
        }}
      >
        <div className="relative">
          {/* Core Circle */}
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] flex items-center justify-center shadow-2xl"
            variants={pulseVariants}
            animate="animate"
          >
            <Cpu className="w-12 h-12 text-white" />
          </motion.div>
          
          {/* Rotating Rings */}
          <motion.div
            className="absolute inset-0 w-32 h-32 -m-4 border-2 border-[#0607E1]/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 w-40 h-40 -m-8 border border-[#4D0AFF]/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Energy Field Rings */}
          <motion.div
            className="absolute inset-0 w-48 h-48 -m-12 border border-[#06B6D4]/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute inset-0 w-56 h-56 -m-16 border border-[#10B981]/10 rounded-full"
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1]
            }}
            transition={{
              rotate: { duration: 35, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />
        </div>
      </motion.div>

      {/* Technology Nodes */}
      <motion.div
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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
              variants={nodeVariants}
              whileHover={{ scale: 1.2, z: 10 }}
            >
              <motion.div
                className={`relative p-4 rounded-xl backdrop-blur-sm border shadow-lg transition-all duration-500 ${
                  isActive 
                    ? 'bg-white/90 border-[#0607E1] shadow-xl scale-110' 
                    : 'bg-white/70 border-white/30'
                }`}
                animate={isActive ? {
                  boxShadow: [
                    '0 0 20px rgba(6, 7, 225, 0.3)',
                    '0 0 40px rgba(6, 7, 225, 0.6)',
                    '0 0 20px rgba(6, 7, 225, 0.3)'
                  ]
                } : {}}
                transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
              >
                <IconComponent 
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isActive ? 'text-[#0607E1]' : 'text-gray-600'
                  }`}
                  style={{ color: isActive ? node.color : undefined }}
                />
                
                {/* Node Label */}
                <motion.div
                  className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ color: node.color }}
                >
                  {node.label}
                </motion.div>
              </motion.div>

              {/* Connection Lines to Center */}
              {isActive && (
                <motion.div
                  className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-[#0607E1] to-transparent"
                  style={{
                    width: `${Math.sqrt(Math.pow(50 - node.position.x, 2) + Math.pow(50 - node.position.y, 2)) * 5}px`,
                    transform: `translate(-50%, -50%) rotate(${Math.atan2(50 - node.position.y, 50 - node.position.x) * 180 / Math.PI}deg)`
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0">
        {dataParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full opacity-60"
            style={{
              backgroundColor: particle.color,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [
                `${particle.x}%`,
                `${(particle.x + 20) % 100}%`,
                `${(particle.x + 40) % 100}%`,
                `${particle.x}%`
              ],
              y: [
                `${particle.y}%`,
                `${(particle.y + 15) % 100}%`,
                `${(particle.y + 30) % 100}%`,
                `${particle.y}%`
              ],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: particle.speed * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Data Flow Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#0607E1]/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              width: '200%'
            }}
            animate={{
              x: ['0%', '100%']
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Digital Transformation Visualization */}
      <motion.div
        className="absolute top-4 left-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex items-center space-x-2 text-xs text-[#0607E1]/60">
          <motion.div
            className="w-2 h-2 bg-[#0607E1] rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Innovation Metrics */}
      <motion.div
        className="absolute top-4 right-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="text-right text-xs text-[#0607E1]/60">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Quadrate Logo Integration */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-16 h-16 border-2 border-[#0607E1] transform rotate-45 flex items-center justify-center">
          <div className="w-8 h-8 bg-[#0607E1] transform -rotate-45 rounded-sm" />
        </div>
      </motion.div>

      {/* Success Indicators */}
      <motion.div
        className="absolute bottom-4 left-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-6 bg-gradient-to-t from-[#10B981] to-[#06B6D4] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: Math.random() * 0.5 + 0.5 }}
              transition={{
                delay: 3 + i * 0.1,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Ambient Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0607E1]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#4D0AFF]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default HeroAnimation;

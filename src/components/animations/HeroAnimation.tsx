'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import {
  Brain,
  Code,
  Globe,
  Settings,
  Megaphone,
  Cpu,
  ArrowUpRight,
  Layers,
  Sparkles,
  Zap,
  Cloud,
  Shield,
  Database,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react';

// --- Core Service Pillars representing QTS ---

interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  gradient: string;
  description: string;
  features: string[];
}

const services: ServicePillar[] = [
  {
    id: 'ai',
    title: 'AI Integration',
    subtitle: 'Smart Solutions',
    icon: Brain,
    color: '#0607E1',
    gradient: 'linear-gradient(135deg, #0607E1 0%, #4338CA 100%)',
    description: 'Transform your business with cutting-edge AI, ML & Computer Vision solutions.',
    features: ['LLM & GPT Integration', 'Predictive Analytics', 'Computer Vision']
  },
  {
    id: 'software',
    title: 'Custom Software',
    subtitle: 'Tailored Development',
    icon: Code,
    color: '#22C55E',
    gradient: 'linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)',
    description: 'Enterprise-grade applications built for scalability and performance.',
    features: ['Cloud Native Apps', 'SaaS Platforms', 'API Development']
  },
  {
    id: 'web',
    title: 'Web Solutions',
    subtitle: 'Digital Excellence',
    icon: Globe,
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)',
    description: 'Modern, responsive web experiences that convert visitors into customers.',
    features: ['Next.js & React', 'E-Commerce', 'Progressive Web Apps']
  },
  {
    id: 'automation',
    title: 'Business Automation',
    subtitle: 'Enhanced Efficiency',
    icon: Settings,
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
    description: 'Streamline operations with intelligent workflow automation.',
    features: ['Process Automation', 'API Integrations', 'Smart Workflows']
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    subtitle: 'Growth Strategy',
    icon: TrendingUp,
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
    description: 'Data-driven marketing strategies to accelerate your growth.',
    features: ['SEO & SEM', 'Analytics', 'Brand Strategy']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'Scalable Infrastructure',
    icon: Cloud,
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
    description: 'Reliable cloud infrastructure with modern DevOps practices.',
    features: ['AWS & Azure', 'CI/CD Pipelines', 'Kubernetes']
  }
];

// --- Floating Tech Keywords ---
const techKeywords = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AI/ML',
  'AWS', 'DevOps', 'Cloud', 'APIs', 'Microservices', 'Docker'
];

// --- Background Particle Network ---
const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; color: string }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor(window.innerWidth / 35);
      for (let i = 0; i < count; i++) {
        const colors = ['#0607E1', '#22C55E', '#0EA5E9', '#8B5CF6', '#F59E0B', '#06B6D4'];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}20`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `${p.color}08`);
            gradient.addColorStop(1, `${p2.color}08`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    initParticles();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// --- Floating Keywords Component ---
const FloatingKeywords: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Seeded random positions to ensure consistency between server and client
  const getStablePosition = (index: number, seed: number) => {
    // Simple seeded random using index and seed
    const random = (Math.sin(index * seed) * 10000) % 1;
    return Math.abs(random) * 100;
  };
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {techKeywords.map((keyword, i) => {
        // Generate stable positions based on index
        const initialX = getStablePosition(i, 12.9898);
        const initialY = getStablePosition(i, 78.233);
        const targetX1 = getStablePosition(i, 43.758);
        const targetY1 = getStablePosition(i, 94.673);
        const targetX2 = getStablePosition(i, 67.542);
        const targetY2 = getStablePosition(i, 31.459);
        const duration = 20 + (getStablePosition(i, 15.234) / 10);
        
        return (
          <motion.div
            key={keyword}
            className="absolute text-xs font-mono font-medium text-primary/10 dark:text-primary/15"
            initial={{
              x: `${initialX}%`,
              y: `${initialY}%`,
              opacity: 0
            }}
            animate={{
              x: [`${targetX1}%`, `${targetX2}%`],
              y: [`${targetY1}%`, `${targetY2}%`],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          >
            {keyword}
          </motion.div>
        );
      })}
    </div>
  );
};

// --- Main Hero Animation Component ---
const HeroAnimation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  const springConfig = { damping: 25, stiffness: 80, mass: 1 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index * (360 / total) - 90) * (Math.PI / 180);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const activeService = services[activeIndex];

  return (
    <div
      className="relative w-full h-[700px] overflow-hidden font-sans flex items-center justify-center"
      style={{
        perspective: '1000px',
        background: 'radial-gradient(ellipse at 50% 30%, hsl(var(--background)) 0%, hsl(var(--muted) / 0.5) 100%)'
      }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Background Layers */}
      <ParticleNetwork />
      <FloatingKeywords />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Ambient Glow Effects */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${activeService.color}20 0%, transparent 70%)` }}
      />
      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.08, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
      />

      {/* Main 3D Container */}
      <motion.div
        className="relative z-20 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center h-full"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d'
        }}
      >

        {/* Central Hexagonal Core */}
        <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] mb-8">

          {/* Core Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  `0 0 30px ${activeService.color}10`,
                  `0 0 60px ${activeService.color}20`,
                  `0 0 30px ${activeService.color}10`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center transition-all duration-700"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted)) 100%)',
                boxShadow: '0 20px 50px -12px rgba(0,0,0,0.15)'
              }}
            >
              {/* Rotating Border Ring */}
              <motion.div
                className="absolute -inset-4 rounded-[2rem] border-2 border-dashed opacity-20"
                style={{ borderColor: activeService.color }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              />

              {/* Inner Ring */}
              <motion.div
                className="absolute -inset-8 rounded-[2.5rem] border opacity-10"
                style={{ borderColor: activeService.color }}
                animate={{ rotate: -360 }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              />

              {/* QTS Brand Emblem */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <motion.div
                  key={activeService.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="p-3 rounded-2xl mb-1"
                  style={{ background: `${activeService.color}15` }}
                >
                  <activeService.icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: activeService.color }} />
                </motion.div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  QTS
                </span>
              </div>

              {/* Connecting Beams to Satellites */}
              {services.map((service, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <motion.div
                    key={`beam-${service.id}`}
                    className="absolute top-1/2 left-1/2 origin-left h-[2px] z-0 pointer-events-none"
                    style={{
                      width: '180px',
                      background: isActive
                        ? `linear-gradient(90deg, ${service.color}80, transparent)`
                        : `linear-gradient(90deg, hsl(var(--border) / 0.3), transparent)`,
                      transform: `rotate(${(idx * (360 / services.length)) - 90}deg)`,
                      opacity: isActive ? 1 : 0.2,
                      transition: 'opacity 0.5s ease, background 0.5s ease'
                    }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute top-0 left-0 bottom-0 w-16 rounded-full blur-sm"
                        style={{ background: service.color }}
                        animate={{ x: [0, 180], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Service Satellites */}
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            const radius = 180;
            const pos = getPosition(index, services.length, radius);

            return (
              <motion.div
                key={service.id}
                className="absolute top-1/2 left-1/2 z-40"
                style={{
                  x: pos.x,
                  y: pos.y
                }}
                animate={{
                  scale: isActive ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
              >
                <motion.button
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                  className={`relative -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group ${isActive ? 'shadow-xl' : 'shadow-md hover:shadow-lg'}`}
                  style={{
                    background: isActive
                      ? 'hsl(var(--card))'
                      : 'hsl(var(--card) / 0.8)',
                    backdropFilter: 'blur(8px)',
                    border: `2px solid ${isActive ? service.color : 'hsl(var(--border))'}`,
                    boxShadow: isActive
                      ? `0 12px 30px -8px ${service.color}40`
                      : undefined
                  }}
                >
                  {/* Pulse Ring for Active */}
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2 rounded-2xl border-2"
                      style={{ borderColor: `${service.color}30` }}
                      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  <service.icon
                    className="w-5 h-5 md:w-7 md:h-7 transition-all duration-300"
                    style={{
                      color: isActive ? service.color : 'hsl(var(--muted-foreground))'
                    }}
                  />

                  <span
                    className={`text-[8px] md:text-[9px] font-bold uppercase tracking-wider mt-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                    style={{ color: service.color }}
                  >
                    {service.id}
                  </span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Active Service Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute bottom-8 md:bottom-16 z-50 w-full max-w-lg px-4"
          >
            <div
              className="bg-card/95 dark:bg-card/90 backdrop-blur-xl rounded-2xl p-5 md:p-6 border shadow-2xl overflow-hidden relative"
              style={{ borderColor: `${activeService.color}20` }}
            >
              {/* Top Gradient Accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: activeService.gradient }}
              />

              <div className="flex items-start justify-between mb-4 mt-1">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg md:text-xl font-bold text-foreground">
                      {activeService.title}
                    </h2>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {activeService.subtitle}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{activeService.description}</p>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${activeService.color}10` }}
                >
                  <activeService.icon className="w-5 h-5" style={{ color: activeService.color }} />
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {activeService.features.map((feature, i) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-muted/50 text-foreground border border-border"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Powered by Innovation</span>
                </div>
                <button
                  className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all hover:brightness-110 active:scale-95 flex items-center gap-1.5 text-white"
                  style={{
                    background: activeService.gradient,
                    boxShadow: `0 4px 12px 0 ${activeService.color}25`
                  }}
                >
                  Explore
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Company Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-foreground">Digital Transformation</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">AI-Powered Solutions</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default HeroAnimation;

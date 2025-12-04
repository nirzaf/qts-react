'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TextParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  value: string;
  duration: number;
  delay: number;
}

export default function ServiceTextStorm() {
  const [particles, setParticles] = useState<TextParticle[]>([]);

  useEffect(() => {
    // List of services and related terms provided by Quadrate Tech Solutions
    const serviceTexts = [
      'Custom Software Development',
      'Web Development',
      'Digital Marketing',
      'IT Outsourcing',
      'Business Email',
      'Business Process Automation',
      'React',
      'TypeScript',
      'Node.js',
      'SEO',
      'UI/UX Design',
      'Cloud Services',
      'DevOps',
      'API Integration',
      'Mobile Apps',
      'E-commerce',
      'Analytics',
      'Security',
      'Consulting',
      'Support',
      'Responsive Design',
      'Performance',
      'Scalable Solutions'
    ];

    // Generate a random service text
    const generateValue = () => {
      return serviceTexts[Math.floor(Math.random() * serviceTexts.length)];
    };

    // Create initial particles
    const createParticles = () => {
      const newParticles: TextParticle[] = [];
      // Responsive count - fewer particles on mobile
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 10 : 20; // Reduced particle count

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 80 + 10, // Random starting position (10-90%)
          y: Math.random() * 80 + 10, // Random starting position (10-90%)
          size: Math.random() * 0.4 + (isMobile ? 0.5 : 0.6), // Smaller text overall
          opacity: Math.random() * 0.3 + 0.2, // Lower opacity for better text visibility
          value: generateValue(),
          duration: Math.random() * 20 + (isMobile ? 30 : 25), // Faster animation
          delay: Math.random() * (isMobile ? 5 : 10) // Less delay overall
        });
      }

      setParticles(newParticles);
    };

    createParticles();

    // Regenerate particles periodically
    const intervalId = setInterval(() => {
      createParticles();
    }, 30000); // Regenerate every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Container to limit animation area */}
      <div className="relative h-full w-full">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute font-sans text-blue-500/80 font-medium whitespace-nowrap"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
            scale: 0,
            filter: 'blur(1px)'
          }}
          animate={{
            x: [
              `${particle.x}%`,
              `${(particle.x + 10) % 100}%`,
              `${(particle.x + 25) % 100}%`,
              `${(particle.x + 40) % 100}%`,
              `${(particle.x + 55) % 100}%`,
              `${(particle.x + 70) % 100}%`,
              `${(particle.x + 85) % 100}%`,
              `${(particle.x + 100) % 100}%`
            ],
            y: [
              `${particle.y}%`,
              `${(particle.y + 10) % 100}%`,
              `${(particle.y + 20) % 100}%`,
              `${(particle.y + 30) % 100}%`,
              `${(particle.y + 40) % 100}%`,
              `${(particle.y + 50) % 100}%`,
              `${(particle.y + 60) % 100}%`,
              `${(particle.y + 70) % 100}%`
            ],
            opacity: [0, particle.opacity * 0.7, particle.opacity, particle.opacity, particle.opacity, particle.opacity * 0.7, particle.opacity * 0.3, 0],
            scale: [0, 0.8, 1, 1, 1, 0.9, 0.7, 0],
            filter: ['blur(3px)', 'blur(2px)', 'blur(1px)', 'blur(1px)', 'blur(1px)', 'blur(1.5px)', 'blur(2px)', 'blur(3px)']
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut" as const
          }}
          style={{
            fontSize: `${particle.size}rem`,
            textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6)'
          }}
        >
          {particle.value}
        </motion.div>
      ))}
      </div>
    </div>
  );
}

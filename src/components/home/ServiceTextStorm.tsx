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
      'Software Development',
      'Web Development',
      'Digital Marketing',
      'IT Outsourcing',
      'Business Email',
      'Automation',
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
      const count = 40; // Reduced count for better readability of longer text

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // Random starting position (%)
          y: Math.random() * 100,
          size: Math.random() * 0.6 + 0.7, // Random size between 0.7 and 1.3rem for text
          opacity: Math.random() * 0.5 + 0.3, // Random opacity between 0.3 and 0.8
          value: generateValue(),
          duration: Math.random() * 30 + 40, // Medium speed movement (40-70 seconds)
          delay: Math.random() * 15 // Medium delay for staggered animation
        });
      }

      setParticles(newParticles);
    };

    createParticles();

    // Regenerate particles periodically
    const intervalId = setInterval(() => {
      createParticles();
    }, 40000); // Regenerate every 40 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute font-sans text-blue-500/80 dark:text-blue-400/80 font-medium whitespace-nowrap"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
            scale: 0,
            filter: 'blur(1px)'
          }}
          animate={{
            x: [
              `${particle.x}vw`,
              `${(particle.x + 20) % 100}vw`,
              `${(particle.x + 40) % 100}vw`,
              `${(particle.x + 60) % 100}vw`,
              `${(particle.x + 80) % 100}vw`
            ],
            y: [
              `${particle.y}vh`,
              `${(particle.y + 15) % 100}vh`,
              `${(particle.y + 30) % 100}vh`,
              `${(particle.y + 45) % 100}vh`,
              `${(particle.y + 60) % 100}vh`
            ],
            opacity: [0, particle.opacity, particle.opacity, particle.opacity, 0],
            scale: [0, 1, 1, 1, 0],
            filter: ['blur(2px)', 'blur(1px)', 'blur(1px)', 'blur(1px)', 'blur(2px)']
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear" as const
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
  );
}

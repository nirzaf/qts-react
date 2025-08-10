'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/services/data/services';

interface FloatingText {
  id: number;
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

const FloatingServiceTexts: React.FC = () => {
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  
  useEffect(() => {
    // Extract service titles and add some additional keywords
    const serviceTexts = services.map(service => service.title);
    const additionalKeywords = [
      // AI & ML Keywords
      'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural Networks',
      'Computer Vision', 'NLP', 'Chatbots', 'Predictive Analytics',
      'Data Science', 'MLOps', 'TensorFlow', 'PyTorch',
      'OpenAI', 'GPT', 'LLM', 'Generative AI',

      // Traditional Tech Keywords
      'React', 'TypeScript', 'Node.js', 'SEO',
      'UI/UX', 'Cloud', 'DevOps', 'API',
      'Mobile Apps', 'E-commerce', 'Analytics',
      'Security', 'Consulting', 'Support',
      'Responsive', 'Performance', 'Scalable'
    ];
    
    const allTexts = [...serviceTexts, ...additionalKeywords];
    
    // Create floating texts
    const createFloatingTexts = () => {
      const newFloatingTexts: FloatingText[] = [];
      const count = 40; // Number of floating texts
      
      for (let i = 0; i < count; i++) {
        // Select a random text from the combined list
        const text = allTexts[Math.floor(Math.random() * allTexts.length)];
        
        newFloatingTexts.push({
          id: i,
          text,
          x: Math.random() * 100, // Random starting position (%)
          y: Math.random() * 100,
          size: Math.random() * 0.6 + 0.7, // Random size between 0.7 and 1.3rem
          opacity: Math.random() * 0.2 + 0.1, // Low opacity for background effect (0.1-0.3)
          duration: Math.random() * 60 + 40, // Slow movement (40-100 seconds)
          delay: Math.random() * 20 // Random delay for staggered animation
        });
      }
      
      setFloatingTexts(newFloatingTexts);
    };
    
    createFloatingTexts();
    
    // Regenerate texts periodically
    const intervalId = setInterval(() => {
      createFloatingTexts();
    }, 60000); // Regenerate every 60 seconds
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingTexts.map((item) => (
        <motion.div
          key={item.id}
          className="absolute font-sans text-blue-300/30 dark:text-blue-400/30 font-medium"
          initial={{
            x: `${item.x}vw`,
            y: `${item.y}vh`,
            opacity: 0,
            filter: 'blur(2px)',
            scale: 0
          }}
          animate={{
            x: [
              `${item.x}vw`,
              `${(item.x + 15) % 100}vw`,
              `${(item.x + 30) % 100}vw`,
              `${(item.x + 45) % 100}vw`,
              `${(item.x + 60) % 100}vw`
            ],
            y: [
              `${item.y}vh`,
              `${(item.y + 10) % 100}vh`,
              `${(item.y + 20) % 100}vh`,
              `${(item.y + 30) % 100}vh`,
              `${(item.y + 40) % 100}vh`
            ],
            opacity: [0, item.opacity, item.opacity, item.opacity, 0],
            scale: [0, 1, 1, 1, 0],
            filter: ['blur(3px)', 'blur(2px)', 'blur(2px)', 'blur(2px)', 'blur(3px)']
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          style={{
            fontSize: `${item.size}rem`,
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(FloatingServiceTexts);

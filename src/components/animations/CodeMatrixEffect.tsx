import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CodeLine {
  id: number;
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
}

const CodeMatrixEffect: React.FC = () => {
  const [codeLines, setCodeLines] = useState<CodeLine[]>([]);

  // Code snippets representing different technologies
  const codeSnippets = [
    'import { AI } from "quadrate"',
    'const solution = await ai.generate()',
    'function transform(data) {',
    'return ml.predict(input)',
    'class NeuralNetwork {',
    'async processData() {',
    'const result = await api.call()',
    'export default Component',
    'useState(initialState)',
    'useEffect(() => {',
    'return <div>Innovation</div>',
    'const [state, setState] = ',
    'machine.learning.model',
    'deep.neural.networks',
    'artificial.intelligence',
    'digital.transformation',
    'cloud.computing.scale',
    'data.analytics.insights',
    'automation.efficiency',
    'innovation.technology'
  ];

  useEffect(() => {
    // Generate initial code lines
    const initialLines = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2
    }));
    setCodeLines(initialLines);

    // Continuously update code lines
    const interval = setInterval(() => {
      setCodeLines(prev => 
        prev.map(line => ({
          ...line,
          y: (line.y + line.speed) % 110,
          opacity: line.y > 100 ? 0.2 : line.opacity
        }))
      );
    }, 100);

    // Add new lines periodically
    const addLineInterval = setInterval(() => {
      setCodeLines(prev => {
        if (prev.length < 20) {
          const newLine: CodeLine = {
            id: Date.now(),
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            x: Math.random() * 100,
            y: -10,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.6 + 0.2
          };
          return [...prev, newLine];
        }
        return prev;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(addLineInterval);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute text-xs font-mono text-[#0607E1]/30 whitespace-nowrap"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            opacity: line.opacity
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: line.opacity }}
          transition={{ duration: 0.5 }}
        >
          {line.text}
        </motion.div>
      ))}
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0607E1]/50 to-transparent"
        animate={{
          top: ['0%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default CodeMatrixEffect;

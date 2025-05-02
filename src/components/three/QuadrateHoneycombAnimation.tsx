import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface HexCell {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  pulseSpeed: number;
  rotateSpeed: number;
  opacity: number;
}

const QuadrateHoneycombAnimation: React.FC = () => {
  const [cells, setCells] = useState<HexCell[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Colors in the blue/indigo palette with high opacity for better visibility
  const colors = [
    'rgba(6, 7, 225, 0.95)',    // Primary blue
    'rgba(77, 10, 255, 0.9)',   // Indigo
    'rgba(99, 102, 241, 0.85)', // Lighter blue
    'rgba(129, 140, 248, 0.8)', // Even lighter blue
    'rgba(165, 180, 252, 0.75)', // Very light blue
  ];

  // Calculate honeycomb grid positions
  const generateHoneycombGrid = useMemo(() => {
    return (cellSize: number, rows: number, cols: number) => {
      const grid: { x: number; y: number }[] = [];
      const hexHeight = cellSize * 2;
      const hexWidth = Math.sqrt(3) * cellSize;
      const horizontalDistance = hexWidth;
      const verticalDistance = hexHeight * 0.75;
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * horizontalDistance + (row % 2 === 1 ? horizontalDistance / 2 : 0);
          const y = row * verticalDistance;
          grid.push({ x, y });
        }
      }
      
      return grid;
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
    
    // Create honeycomb cells
    const cellSize = 40; // Base size of each hexagon
    const rows = 5;      // Number of rows in the honeycomb
    const cols = 5;      // Number of columns in the honeycomb
    
    const grid = generateHoneycombGrid(cellSize, rows, cols);
    const centerX = (cols - 1) * Math.sqrt(3) * cellSize / 2;
    const centerY = (rows - 1) * cellSize * 0.75;
    
    const newCells: HexCell[] = grid.map((pos, index) => {
      // Adjust positions to center the grid
      const adjustedX = pos.x - centerX;
      const adjustedY = pos.y - centerY;
      
      // Calculate distance from center for staggered animation
      const distanceFromCenter = Math.sqrt(
        Math.pow(adjustedX, 2) + Math.pow(adjustedY, 2)
      );
      
      return {
        id: index,
        x: adjustedX,
        y: adjustedY,
        size: cellSize * (0.8 + Math.random() * 0.4), // Slight size variation
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: distanceFromCenter * 0.01, // Delay based on distance from center
        pulseSpeed: 2 + Math.random() * 3, // Random pulse speed
        rotateSpeed: 10 + Math.random() * 20, // Random rotation speed
        opacity: 0.7 + Math.random() * 0.3, // High opacity for visibility
      };
    });
    
    setCells(newCells);
    
    return () => {
      setIsMounted(false);
    };
  }, [generateHoneycombGrid]);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#0607E1] to-[#4D0AFF]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 0.9, 
          scale: 1,
          boxShadow: [
            '0 0 30px 10px rgba(6, 7, 225, 0.5)',
            '0 0 50px 20px rgba(6, 7, 225, 0.7)',
            '0 0 30px 10px rgba(6, 7, 225, 0.5)',
          ]
        }}
        transition={{
          opacity: { duration: 1.5 },
          scale: { duration: 1.5, type: "spring", stiffness: 100, damping: 15 },
          boxShadow: { duration: 4, repeat: Infinity, repeatType: "reverse" }
        }}
        style={{ width: '60px', height: '60px', zIndex: 10 }}
      />

      {/* Honeycomb cells */}
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className="absolute top-1/2 left-1/2"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: cell.opacity,
            scale: [0.9, 1, 0.9],
            rotate: [0, 360],
            x: cell.x,
            y: cell.y,
          }}
          transition={{
            opacity: { duration: 1, delay: cell.delay },
            scale: { 
              duration: cell.pulseSpeed, 
              repeat: Infinity, 
              repeatType: "reverse" 
            },
            rotate: { 
              duration: cell.rotateSpeed, 
              repeat: Infinity, 
              ease: "linear" 
            },
            x: { duration: 0.8, delay: cell.delay },
            y: { duration: 0.8, delay: cell.delay },
          }}
          style={{
            width: `${cell.size}px`,
            height: `${cell.size}px`,
            marginLeft: `-${cell.size / 2}px`,
            marginTop: `-${cell.size / 2}px`,
            zIndex: 5,
          }}
        >
          {/* Hexagon shape using CSS */}
          <div 
            className="w-full h-full relative"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: `linear-gradient(135deg, ${cell.color}, rgba(77, 10, 255, 0.8))`,
              boxShadow: `0 0 15px 5px ${cell.color}`,
            }}
          >
            {/* Inner hexagon for depth effect */}
            <motion.div 
              className="absolute inset-2 opacity-70"
              animate={{
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                opacity: { 
                  duration: cell.pulseSpeed * 0.7, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }
              }}
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent)`,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <pattern id="hexGrid" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path 
              d="M15,0 L30,10 L30,30 L15,40 L0,30 L0,10 Z" 
              fill="none" 
              stroke="rgba(6, 7, 225, 0.4)" 
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="hexFade" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(6, 7, 225, 1)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgba(6, 7, 225, 0)" stopOpacity="0" />
          </radialGradient>
          <mask id="hexMask">
            <rect width="100%" height="100%" fill="url(#hexFade)" />
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#hexGrid)" mask="url(#hexMask)" />
      </svg>

      {/* "Q" letter in the center */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          textShadow: [
            '0 0 5px rgba(255, 255, 255, 0.5)',
            '0 0 10px rgba(255, 255, 255, 0.8)',
            '0 0 5px rgba(255, 255, 255, 0.5)',
          ]
        }}
        transition={{
          opacity: { duration: 2, delay: 0.5 },
          scale: { duration: 1.5, type: "spring", stiffness: 100, damping: 15 },
          textShadow: { duration: 3, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        Q
      </motion.div>

      {/* Enhanced pulsing glow in the background */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.5,
          scale: [1, 1.8, 1]
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        style={{ 
          width: '400px', 
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 7, 225, 0.4) 0%, rgba(6, 7, 225, 0) 70%)',
          filter: 'blur(25px)',
          zIndex: 1
        }}
      />
      
      {/* Additional outer glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.3,
          scale: [1.5, 2.2, 1.5]
        }}
        transition={{
          opacity: { duration: 1.5 },
          scale: { duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        style={{ 
          width: '500px', 
          height: '500px',
          background: 'radial-gradient(circle, rgba(77, 10, 255, 0.3) 0%, rgba(77, 10, 255, 0) 70%)',
          filter: 'blur(30px)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default QuadrateHoneycombAnimation;

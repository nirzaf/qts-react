'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface HexCell {
  id: number;
  x: number;
  y: number;
  z: number; // Added z-coordinate for 3D effect
  size: number;
  color: string;
  delay: number;
  pulseSpeed: number;
  rotateSpeed: number;
  opacity: number;
  elevation: number; // Added elevation for 3D effect
}

const QuadrateHoneycombAnimation: React.FC = () => {
  const [cells, setCells] = useState<HexCell[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  // Detect if device is mobile
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Colors from the palette - using Chrysler Blue (#0607E1) as the main color
  // Apply additional transparency on mobile for better text visibility
  const colors = isMobile ? [
    'rgba(6, 7, 225, 0.65)',    // Chrysler Blue with more transparency for mobile
    'rgba(6, 7, 225, 0.55)',    // Chrysler Blue with increased transparency
    'rgba(6, 7, 225, 0.45)',    // Chrysler Blue with even more transparency
    'rgba(6, 7, 225, 0.35)',    // Chrysler Blue with high transparency
    'rgba(6, 7, 225, 0.25)',    // Chrysler Blue with very high transparency
  ] : [
    'rgba(6, 7, 225, 0.95)',    // Chrysler Blue (main brand color) for desktop
    'rgba(6, 7, 225, 0.85)',    // Chrysler Blue with less opacity
    'rgba(6, 7, 225, 0.75)',    // Chrysler Blue with even less opacity
    'rgba(6, 7, 225, 0.65)',    // Chrysler Blue with more transparency
    'rgba(6, 7, 225, 0.55)',    // Chrysler Blue with most transparency
  ];

  // Calculate honeycomb grid positions in 3D space
  const generateHoneycombGrid = useMemo(() => {
    return (cellSize: number, rows: number, cols: number) => {
      const grid: { x: number; y: number; z: number }[] = [];
      const hexHeight = cellSize * 2;
      const hexWidth = Math.sqrt(3) * cellSize;
      const horizontalDistance = hexWidth;
      const verticalDistance = hexHeight * 0.75;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * horizontalDistance + (row % 2 === 1 ? horizontalDistance / 2 : 0);
          const y = row * verticalDistance;

          // Calculate z position for 3D effect - cells further from center are higher/lower
          const centerCol = cols / 2;
          const centerRow = rows / 2;
          const distFromCenter = Math.sqrt(
            Math.pow(col - centerCol, 2) + Math.pow(row - centerRow, 2)
          );

          // Random z value with some cells popping out more than others
          const z = Math.sin(distFromCenter) * 20 - 10 + (Math.random() * 30 - 15);

          grid.push({ x, y, z });
        }
      }

      return grid;
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);

    // Create honeycomb cells
    const cellSize = isMobile ? 30 : 40; // Smaller hexagons on mobile
    const rows = isMobile ? 4 : 5;      // Fewer rows on mobile
    const cols = isMobile ? 4 : 5;      // Fewer columns on mobile

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

      // Random elevation for 3D effect
      const elevation = Math.random() * 20 + 5;

      return {
        id: index,
        x: adjustedX,
        y: adjustedY,
        z: pos.z,
        size: cellSize * (0.8 + Math.random() * 0.4), // Slight size variation
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: distanceFromCenter * 0.01, // Delay based on distance from center
        pulseSpeed: 2 + Math.random() * 3, // Random pulse speed
        rotateSpeed: 10 + Math.random() * 20, // Random rotation speed
        opacity: isMobile ? (0.5 + Math.random() * 0.2) : (0.7 + Math.random() * 0.3), // Lower opacity on mobile
        elevation: isMobile ? elevation * 0.7 : elevation, // Reduced elevation on mobile
      };
    });

    setCells(newCells);

    return () => {
      setIsMounted(false);
    };
  }, [generateHoneycombGrid]);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-[1000px]" style={{ 
      opacity: isMobile ? 0.8 : 1, // Slightly reduce overall opacity on mobile
    }}>
      {/* Honeycomb cells with 3D effect */}
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className="absolute top-1/2 left-1/2"
          initial={{ opacity: 0, scale: 0, rotateX: 0, rotateY: 0, z: -50 }}
          animate={{
            opacity: cell.opacity,
            scale: [0.9, 1, 0.9],
            rotateX: [0, 15, 0, -15, 0],
            rotateY: [0, 15, 0, -15, 0],
            z: [cell.z - 20, cell.z, cell.z - 10],
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
            rotateX: {
              duration: cell.rotateSpeed * 1.5,
              repeat: Infinity,
              ease: "easeInOut" as const
            },
            rotateY: {
              duration: cell.rotateSpeed,
              repeat: Infinity,
              ease: "easeInOut" as const
            },
            z: {
              duration: cell.pulseSpeed * 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut" as const
            },
            x: { duration: 0.8, delay: cell.delay },
            y: { duration: 0.8, delay: cell.delay },
          }}
          style={{
            width: `${cell.size}px`,
            height: `${cell.size}px`,
            marginLeft: `-${cell.size / 2}px`,
            marginTop: `-${cell.size / 2}px`,
            zIndex: Math.round(cell.z + 100), // Dynamic z-index based on z position
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D Hexagon with faces */}
          <div
            className="w-full h-full relative transform-gpu"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Top face */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: `linear-gradient(135deg, ${cell.color}, rgba(6, 7, 225, 0.6))`,
                boxShadow: `0 0 15px 5px ${cell.color}`,
                transform: `translateZ(${cell.elevation}px)`,
                backfaceVisibility: 'hidden',
              }}
            />

            {/* Side faces - 6 sides of the hexagon */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              const nextAngle = ((i + 1) * 60) * (Math.PI / 180);

              // Calculate points for this side face
              const x1 = 50 + 50 * Math.cos(angle);
              const y1 = 50 + 50 * Math.sin(angle);
              const x2 = 50 + 50 * Math.cos(nextAngle);
              const y2 = 50 + 50 * Math.sin(nextAngle);

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    width: '100%',
                    height: `${cell.elevation}px`,
                    transformOrigin: `${x1}% ${y1}%`,
                    transform: `rotateX(-90deg) translateY(${cell.elevation / 2}px)`,
                    background: `linear-gradient(to bottom, ${cell.color}, rgba(6, 7, 225, 0.3))`,
                    opacity: 0.7,
                    clipPath: `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x2}% 100%, ${x1}% 100%)`,
                  }}
                />
              );
            })}

            {/* Bottom face */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: `rgba(6, 7, 225, 0.3)`,
                transform: `translateZ(0px)`,
                backfaceVisibility: 'hidden',
              }}
            />

            {/* Inner highlight for top face */}
            <motion.div
              className="absolute inset-2"
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
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent)`,
                transform: `translateZ(${cell.elevation + 0.5}px)`,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Connecting lines effect with 3D perspective */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: isMobile ? 0.15 : 0.3 }}>
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

      {/* Enhanced background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isMobile ? 0.2 : 0.4, // Reduced opacity on mobile
          scale: [1, 1.8, 1]
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        style={{
          width: isMobile ? '300px' : '400px', // Smaller glow on mobile
          height: isMobile ? '300px' : '400px',
          background: `radial-gradient(circle, rgba(6, 7, 225, ${isMobile ? '0.15' : '0.3'}) 0%, rgba(6, 7, 225, 0) 70%)`,
          filter: isMobile ? 'blur(15px)' : 'blur(25px)', // Less blur on mobile
          zIndex: 1
        }}
      />
    </div>
  );
};

export default QuadrateHoneycombAnimation;

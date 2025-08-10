'use client';

import React, { useEffect, useRef } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  connections: number[];
  activity: number;
  type: 'input' | 'hidden' | 'output';
}

interface Connection {
  from: Node;
  to: Node;
  weight: number;
  activity: number;
}

const NeuralNetworkViz: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create neural network structure
    const createNetwork = () => {
      const nodes: Node[] = [];
      const connections: Connection[] = [];

      // Input layer (left side)
      for (let i = 0; i < 6; i++) {
        nodes.push({
          id: i,
          x: 0.15,
          y: 0.2 + (i * 0.12),
          connections: [],
          activity: Math.random(),
          type: 'input'
        });
      }

      // Hidden layer 1
      for (let i = 0; i < 8; i++) {
        nodes.push({
          id: 6 + i,
          x: 0.4,
          y: 0.15 + (i * 0.09),
          connections: [],
          activity: Math.random(),
          type: 'hidden'
        });
      }

      // Hidden layer 2
      for (let i = 0; i < 6; i++) {
        nodes.push({
          id: 14 + i,
          x: 0.6,
          y: 0.2 + (i * 0.12),
          connections: [],
          activity: Math.random(),
          type: 'hidden'
        });
      }

      // Output layer (right side)
      for (let i = 0; i < 4; i++) {
        nodes.push({
          id: 20 + i,
          x: 0.85,
          y: 0.25 + (i * 0.15),
          connections: [],
          activity: Math.random(),
          type: 'output'
        });
      }

      // Create connections
      // Input to hidden layer 1
      for (let i = 0; i < 6; i++) {
        for (let j = 6; j < 14; j++) {
          if (Math.random() > 0.3) {
            connections.push({
              from: nodes[i],
              to: nodes[j],
              weight: Math.random() * 2 - 1,
              activity: 0
            });
          }
        }
      }

      // Hidden layer 1 to hidden layer 2
      for (let i = 6; i < 14; i++) {
        for (let j = 14; j < 20; j++) {
          if (Math.random() > 0.2) {
            connections.push({
              from: nodes[i],
              to: nodes[j],
              weight: Math.random() * 2 - 1,
              activity: 0
            });
          }
        }
      }

      // Hidden layer 2 to output
      for (let i = 14; i < 20; i++) {
        for (let j = 20; j < 24; j++) {
          if (Math.random() > 0.25) {
            connections.push({
              from: nodes[i],
              to: nodes[j],
              weight: Math.random() * 2 - 1,
              activity: 0
            });
          }
        }
      }

      nodesRef.current = nodes;
      connectionsRef.current = connections;
    };

    createNetwork();

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Update node activities
      nodesRef.current.forEach((node, index) => {
        if (node.type === 'input') {
          node.activity = 0.5 + 0.5 * Math.sin(timeRef.current + index * 0.5);
        } else {
          // Calculate activity based on connected nodes
          let totalActivity = 0;
          let connectionCount = 0;
          
          connectionsRef.current.forEach(conn => {
            if (conn.to.id === node.id) {
              totalActivity += conn.from.activity * Math.abs(conn.weight);
              connectionCount++;
            }
          });
          
          if (connectionCount > 0) {
            node.activity = Math.tanh(totalActivity / connectionCount);
          }
        }
      });

      // Update connection activities
      connectionsRef.current.forEach(conn => {
        conn.activity = conn.from.activity * Math.abs(conn.weight);
      });

      // Draw connections
      connectionsRef.current.forEach(conn => {
        const startX = conn.from.x * width;
        const startY = conn.from.y * height;
        const endX = conn.to.x * width;
        const endY = conn.to.y * height;

        const activity = conn.activity;
        const alpha = Math.max(0.1, activity * 0.8);
        const thickness = 0.5 + activity * 2;

        // Create gradient for connection
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        
        if (conn.weight > 0) {
          gradient.addColorStop(0, `rgba(6, 7, 225, ${alpha})`);
          gradient.addColorStop(1, `rgba(6, 182, 212, ${alpha * 0.7})`);
        } else {
          gradient.addColorStop(0, `rgba(239, 68, 68, ${alpha})`);
          gradient.addColorStop(1, `rgba(245, 158, 11, ${alpha * 0.7})`);
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw data pulse
        if (activity > 0.5) {
          const pulseProgress = (timeRef.current * 2) % 1;
          const pulseX = startX + (endX - startX) * pulseProgress;
          const pulseY = startY + (endY - startY) * pulseProgress;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${activity})`;
          ctx.fill();
        }
      });

      // Draw nodes
      nodesRef.current.forEach(node => {
        const x = node.x * width;
        const y = node.y * height;
        const activity = node.activity;
        const baseRadius = node.type === 'input' ? 6 : node.type === 'output' ? 8 : 5;
        const radius = baseRadius + activity * 3;

        // Node glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
        
        let nodeColor = '';
        switch (node.type) {
          case 'input':
            nodeColor = '6, 7, 225';
            break;
          case 'hidden':
            nodeColor = '139, 92, 246';
            break;
          case 'output':
            nodeColor = '16, 185, 129';
            break;
        }

        glowGradient.addColorStop(0, `rgba(${nodeColor}, ${activity * 0.8})`);
        glowGradient.addColorStop(0.5, `rgba(${nodeColor}, ${activity * 0.3})`);
        glowGradient.addColorStop(1, `rgba(${nodeColor}, 0)`);

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${0.7 + activity * 0.3})`;
        ctx.fill();

        // Node highlight
        ctx.beginPath();
        ctx.arc(x - radius * 0.3, y - radius * 0.3, radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + activity * 0.4})`;
        ctx.fill();

        // Activity ring
        if (activity > 0.6) {
          ctx.beginPath();
          ctx.arc(x, y, radius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${activity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw floating particles
      for (let i = 0; i < 20; i++) {
        const particleX = (0.1 + Math.sin(timeRef.current + i) * 0.8) * width;
        const particleY = (0.1 + Math.cos(timeRef.current * 0.7 + i) * 0.8) * height;
        const particleSize = 1 + Math.sin(timeRef.current * 2 + i) * 0.5;
        const particleAlpha = 0.3 + Math.sin(timeRef.current * 3 + i) * 0.3;

        ctx.beginPath();
        ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${particleAlpha})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default NeuralNetworkViz;
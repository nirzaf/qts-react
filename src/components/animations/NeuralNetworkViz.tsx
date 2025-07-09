import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Neuron {
  id: number;
  x: number;
  y: number;
  layer: number;
  active: boolean;
}

interface Connection {
  from: Neuron;
  to: Neuron;
  strength: number;
  active: boolean;
}

const NeuralNetworkViz: React.FC = () => {
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [activationWave, setActivationWave] = useState(0);

  useEffect(() => {
    // Create neural network structure
    const layers = [4, 6, 6, 4]; // Input, Hidden1, Hidden2, Output
    const networkNeurons: Neuron[] = [];
    let neuronId = 0;

    layers.forEach((layerSize, layerIndex) => {
      for (let i = 0; i < layerSize; i++) {
        networkNeurons.push({
          id: neuronId++,
          x: (layerIndex * 25) + 15, // Distribute across width
          y: (i * (80 / (layerSize - 1))) + 10, // Distribute across height
          layer: layerIndex,
          active: false
        });
      }
    });

    // Create connections between adjacent layers
    const networkConnections: Connection[] = [];
    for (let layer = 0; layer < layers.length - 1; layer++) {
      const currentLayerNeurons = networkNeurons.filter(n => n.layer === layer);
      const nextLayerNeurons = networkNeurons.filter(n => n.layer === layer + 1);
      
      currentLayerNeurons.forEach(fromNeuron => {
        nextLayerNeurons.forEach(toNeuron => {
          networkConnections.push({
            from: fromNeuron,
            to: toNeuron,
            strength: Math.random() * 0.8 + 0.2,
            active: false
          });
        });
      });
    }

    setNeurons(networkNeurons);
    setConnections(networkConnections);

    // Activation wave animation
    const activationInterval = setInterval(() => {
      setActivationWave(prev => (prev + 1) % 4);
    }, 1500);

    return () => clearInterval(activationInterval);
  }, []);

  useEffect(() => {
    // Update neuron and connection states based on activation wave
    setNeurons(prev => 
      prev.map(neuron => ({
        ...neuron,
        active: neuron.layer <= activationWave
      }))
    );

    setConnections(prev =>
      prev.map(connection => ({
        ...connection,
        active: connection.from.layer === activationWave - 1 && activationWave > 0
      }))
    );
  }, [activationWave]);

  return (
    <div className="absolute inset-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connections */}
        {connections.map((connection, index) => (
          <motion.line
            key={index}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke={connection.active ? '#0607E1' : '#0607E1'}
            strokeWidth={connection.active ? 0.3 : 0.1}
            opacity={connection.active ? connection.strength : connection.strength * 0.3}
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: connection.active ? connection.strength : connection.strength * 0.3
            }}
            transition={{ 
              duration: 0.5,
              delay: connection.active ? 0 : 0
            }}
          />
        ))}
        
        {/* Neurons */}
        {neurons.map((neuron) => (
          <motion.circle
            key={neuron.id}
            cx={neuron.x}
            cy={neuron.y}
            r={neuron.active ? 1.2 : 0.8}
            fill={neuron.active ? '#0607E1' : '#0607E1'}
            opacity={neuron.active ? 1 : 0.4}
            initial={{ scale: 0 }}
            animate={{ 
              scale: neuron.active ? 1.5 : 1,
              opacity: neuron.active ? 1 : 0.4
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          />
        ))}
        
        {/* Data flow particles */}
        {connections
          .filter(conn => conn.active)
          .slice(0, 3)
          .map((connection, index) => (
            <motion.circle
              key={`particle-${index}`}
              r="0.5"
              fill="#06B6D4"
              initial={{
                cx: connection.from.x,
                cy: connection.from.y,
                opacity: 0
              }}
              animate={{
                cx: connection.to.x,
                cy: connection.to.y,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
      </svg>
      
      {/* Neural network labels */}
      <div className="absolute bottom-2 left-2 text-xs text-[#0607E1]/50">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Neural Processing
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralNetworkViz;

import { useRef, useState } from 'react';
import * as THREE from 'three';
// Replace the direct three.js import with the drei version
import { OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

// Particle system for background effect
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 1000;
  
  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesPositions = new Float32Array(particleCount * 3);
  const particlesSizes = new Float32Array(particleCount);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    // Position particles in a sphere
    const radius = 10 + Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    particlesPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    particlesPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlesPositions[i3 + 2] = radius * Math.cos(phi);
    
    // Random sizes for particles
    particlesSizes[i] = Math.random() * 0.1 + 0.05;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
  particlesGeometry.setAttribute('size', new THREE.BufferAttribute(particlesSizes, 1));
  
  // Animation for particles
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const time = clock.getElapsedTime() * 0.1;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        // Remove unused variable declaration
        const z = positions[i3 + 2];
        
        // Gentle rotation around y-axis
        const newX = x * Math.cos(time * 0.1) - z * Math.sin(time * 0.1);
        const newZ = x * Math.sin(time * 0.1) + z * Math.cos(time * 0.1);
        
        positions[i3] = newX;
        positions[i3 + 2] = newZ;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry" {...particlesGeometry} />
      <pointsMaterial 
        attach="material" 
        size={0.1} 
        sizeAttenuation 
        transparent 
        alphaMap={new THREE.TextureLoader().load('/assets/particle.png')} 
        color={new THREE.Color('#0607E1')} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
};

// Animated 3D logo cube
const LogoCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const texture = new THREE.TextureLoader().load('https://ik.imagekit.io/mhvgbp9xk/QTS%20Logo%20primary.png?updatedAt=1734248002023');
  
  useFrame(({ clock }) => {
    if (meshRef.current && edgesRef.current && lightRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
      
      // Apply same rotation to edges
      edgesRef.current.rotation.copy(meshRef.current.rotation);
      
      // Pulsating light intensity for better glow effect
      const time = clock.getElapsedTime();
      const pulseIntensity = 0.5 + Math.sin(time * 2) * 0.2;
      lightRef.current.intensity = pulseIntensity;
      
      // Scale effect on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.x = THREE.MathUtils.lerp(
        meshRef.current.scale.x,
        targetScale,
        0.1
      );
      meshRef.current.scale.y = THREE.MathUtils.lerp(
        meshRef.current.scale.y,
        targetScale,
        0.1
      );
      meshRef.current.scale.z = THREE.MathUtils.lerp(
        meshRef.current.scale.z,
        targetScale,
        0.1
      );
      
      // Apply same scale to edges
      edgesRef.current.scale.copy(meshRef.current.scale);
    }
  });
  
  // Create edges geometry for the cube
  const cubeSize = 3;
  const boxGeom = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  const edgesGeometry = new THREE.EdgesGeometry(boxGeom);
  
  return (
    <group>
      {/* Add point light for enhanced glow effect */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 5]}
        intensity={0.8}
        distance={10}
        color="#ffffff"
      />
      
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
        <meshStandardMaterial 
          color="white" 
          metalness={0.2}
          roughness={0.05}
          emissive="#ffffff"
          emissiveIntensity={0.6}
          transparent={true}
          opacity={0.95}
        >
          <primitive attach="map" object={texture} />
        </meshStandardMaterial>
      </mesh>
      
      {/* Add subtle edge lines to make cube faces more visible */}
      <lineSegments ref={edgesRef} position={[0, 0, 0]}>
        <primitive object={edgesGeometry} attach="geometry" />
        <lineBasicMaterial color="#444444" linewidth={1.5} transparent opacity={0.7} />
      </lineSegments>
    </group>
  )
};

// Floating text that follows mouse
// Commenting out the unused FloatingText component to fix build error
/* const FloatingText = () => {
  const textRef = useRef<THREE.Mesh>(null);
  const { viewport, mouse } = useThree();
  
  useFrame(() => {
    if (textRef.current) {
      // Follow mouse with delay
      textRef.current.position.x = THREE.MathUtils.lerp(
        textRef.current.position.x,
        (mouse.x * viewport.width) / 2,
        0.1
      );
      textRef.current.position.y = THREE.MathUtils.lerp(
        textRef.current.position.y,
        (mouse.y * viewport.height) / 2,
        0.1
      );
    }
  });

  return (
    <mesh ref={textRef} position={[0, 0, -5]}>
      <Text
        color="#0607E1"
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        QUADRATE TECH SOLUTIONS
      </Text>
    </mesh>
  );
}; */

// Camera controls component
const CameraControls = () => {
  const { camera, gl } = useThree();
  
  return (
    <OrbitControls
      args={[camera, gl.domElement]}
      enableZoom={false}
      enablePan={false}
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={0.5}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 4}
    />
  );
};

// Main scene component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <ParticleField />
      <LogoCube />
      <CameraControls />
    </>
  );
};

// Main ThreeHeroScene component
const ThreeHeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{ height: '100vh' }}
    >
      <Scene />
    </Canvas>
  );
};

export default ThreeHeroScene;
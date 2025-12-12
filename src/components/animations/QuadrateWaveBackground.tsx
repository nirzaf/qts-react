import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface QuadrateWaveProps {
  /**
   * Primary brand color (default: Chrysler Blue #0607E1)
   */
  primaryColor?: string;
  /**
   * Secondary accent color (default: Cyan #06B6D4)
   */
  accentColor?: string;
  /**
   * Speed of the wave animation
   */
  speed?: number;
  /**
   * Density of the grid (number of cubes per row)
   */
  density?: number;
  className?: string;
}

export const QuadrateWaveBackground: React.FC<QuadrateWaveProps> = ({
  primaryColor = '#0607E1',
  accentColor = '#06B6D4',
  speed = 1.0,
  density = 40,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

    // Adjust settings for mobile performance
    const mobileDensity = Math.floor(density * 0.5); // Reduce cubes by 50% on mobile
    const effectiveDensity = isMobile ? Math.min(mobileDensity, 25) : density;
    const effectiveSpeed = isMobile ? speed * 0.7 : speed; // Slower on mobile for battery

    // Observer to pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(container);

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();

    // Orthographic camera gives a technical, isometric "engineering" look
    // contrasting with the perspective cameras in your other components
    const aspect = container.clientWidth / container.clientHeight;
    const frustumSize = 40;
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      1000
    );

    // Isometric view position
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Disable antialiasing on mobile for performance
      alpha: true,
      powerPreference: isMobile ? 'low-power' : 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    // Limit pixel ratio on mobile to reduce pixel count
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // --- INSTANCED MESH SETUP (High Performance) ---
    // We render thousands of cubes using a single draw call
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);

    // Parse colors
    const cPrimary = new THREE.Color(primaryColor);
    const cAccent = new THREE.Color(accentColor);

    // CUSTOM SHADER MATERIAL
    // This handles all animation on the GPU, freeing up the JS thread
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorPrimary: { value: cPrimary },
        uColorAccent: { value: cAccent },
        uHover: { value: new THREE.Vector2(0, 0) },
        uSpeed: { value: effectiveSpeed },
        uOpacity: { value: isMobile ? 0.4 : 0.6 }, // Reduce opacity on mobile for less distraction
      },
      vertexShader: `
        uniform float uTime;
        uniform float uSpeed;
        uniform vec2 uHover;

        // Attributes passed from JS
        attribute vec3 aOffset;
        attribute float aRandom;

        varying vec3 vColor;
        varying float vHeight;

        void main() {
          // Base wave position
          vec3 pos = aOffset;

          // 1. GLOBAL WAVE
          // Calculate wave based on x/z position and time
          float wave = sin(pos.x * 0.3 + uTime * uSpeed) + cos(pos.z * 0.3 + uTime * uSpeed * 0.8);

          // 2. INTERACTIVE MOUSE RIPPLE
          float dist = distance(pos.xz, uHover);
          float ripple = smoothstep(10.0, 0.0, dist) * sin(dist * 2.0 - uTime * 5.0) * 2.0;

          // Apply height changes
          float height = wave + ripple;
          pos.y += height;

          // Scale effect (cubes shrink when they go down)
          float scale = smoothstep(-2.0, 2.0, height);

          // Transform the instance
          vec3 transformed = position;
          transformed.y *= (1.0 + scale * 0.5); // Stretch vertically
          transformed += pos;

          // Pass data to fragment shader
          vHeight = height;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColorPrimary;
        uniform vec3 uColorAccent;
        uniform float uOpacity;
        varying float vHeight;

        void main() {
          // Dynamic gradient based on height
          // Lower cubes = Primary (Dark Blue)
          // Higher cubes = Accent (Cyan/Bright)
          float mixFactor = smoothstep(-1.5, 1.5, vHeight);
          vec3 color = mix(uColorPrimary, uColorAccent, mixFactor);

          // Add subtle rim lighting
          color += vec3(0.1);

          gl_FragColor = vec4(color, uOpacity);
        }
      `,
      // Instanced meshes need this
      side: THREE.FrontSide,
      transparent: true, // Enable transparency for opacity control
    });

    // Create the mesh
    const count = effectiveDensity * effectiveDensity;
    const mesh = new THREE.InstancedMesh(geometry, material, count);

    // Fill attributes
    const dummy = new THREE.Object3D();
    const offsets = new Float32Array(count * 3);
    const randoms = new Float32Array(count);

    let i = 0;
    const offset = (effectiveDensity * 1.5) / 2; // Center the grid

    for (let x = 0; x < effectiveDensity; x++) {
      for (let z = 0; z < effectiveDensity; z++) {
        // Grid positioning
        const px = x * 1.5 - offset;
        const pz = z * 1.5 - offset;

        dummy.position.set(px, 0, pz);
        dummy.updateMatrix();

        mesh.setMatrixAt(i, dummy.matrix);

        // Save offset for shader
        offsets[i * 3] = px;
        offsets[i * 3 + 1] = 0;
        offsets[i * 3 + 2] = pz;

        randoms[i] = Math.random();
        i++;
      }
    }

    mesh.instanceMatrix.needsUpdate = true;
    geometry.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 3));
    geometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(randoms, 1));

    scene.add(mesh);

    // --- INTERACTION ---
    // Only enable mouse interaction on desktop (not mobile/touch devices)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      mouse.set(x, y);
      raycaster.setFromCamera(mouse, camera);

      const target = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, target);

      // Update shader uniform
      if (target) {
        material.uniforms.uHover.value.set(target.x, target.z);
      }
    };

    // Touch interaction for mobile (optional - using touch position)
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 0) return;
      const touch = event.touches[0];

      const rect = container.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

      mouse.set(x, y);
      raycaster.setFromCamera(mouse, camera);

      const target = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, target);

      if (target) {
        material.uniforms.uHover.value.set(target.x, target.z);
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      // On mobile, add passive touch listener for better scroll performance
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let frameId = 0;
    let lastFrameTime = 0;
    // Target 30 FPS on mobile for better battery life, 60 FPS on desktop
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      frameId = requestAnimationFrame(animate);

      if (!isVisible) {
        return;
      }

      // Throttle frame rate on mobile
      const elapsed = currentTime - lastFrameTime;
      if (elapsed < frameInterval) {
        return;
      }
      lastFrameTime = currentTime - (elapsed % frameInterval);

      material.uniforms.uTime.value = clock.getElapsedTime();

      // Gentle rotation of the entire grid (reduced on mobile)
      const rotationAmount = isMobile ? 0.05 : 0.1;
      mesh.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * rotationAmount;

      renderer.render(scene, camera);
    };

    animate(0);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const aspect = container.clientWidth / container.clientHeight;

      // Update frustum for orthographic camera
      camera.left = -frustumSize * aspect / 2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = -frustumSize / 2;

      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      } else {
        window.removeEventListener('touchmove', handleTouchMove);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();

      // Remove canvas from DOM
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [primaryColor, accentColor, speed, density, isVisible]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #000000, #0a0a20)',
        // Prevent touch events from interfering with UI elements
        touchAction: 'pan-y',
        // Ensure proper stacking - background should be behind content
        isolation: 'isolate',
      }}
      aria-hidden="true" // Hide from screen readers as it's decorative
    />
  );
};

export default QuadrateWaveBackground;

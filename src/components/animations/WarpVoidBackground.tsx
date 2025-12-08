import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface WarpVoidBackgroundProps {
  /**
   * Animation speed multiplier (default: 1.0)
   * Higher = faster warp speed, lower = slower drift
   */
  speed?: number;
  /**
   * Opacity of the entire effect (0-1, default: 0.8)
   * Allows content to remain readable
   */
  opacity?: number;
  /**
   * Color scheme variant
   */
  variant?: 'default' | 'blue-purple' | 'cyan-green' | 'minimal';
  /**
   * Enable mouse tracking for camera tilt (default: true)
   */
  mouseTracking?: boolean;
  /**
   * Particle density (default: 'medium')
   * Use 'low' for mobile/performance-critical sections
   */
  density?: 'low' | 'medium' | 'high';
  /**
   * Z-index for layering (default: -1)
   */
  zIndex?: number;
  /**
   * Class name for additional styling
   */
  className?: string;
}

/**
 * WarpVoidBackground - Infinite warp speed tunnel effect
 *
 * A high-performance WebGL background animation featuring:
 * - Infinite scrolling nebula tunnel with spiral distortions
 * - Twinkling star particles
 * - Warp speed streaks
 * - Chromatic aberration post-processing
 * - Responsive mouse tracking
 * - Mobile-optimized performance
 *
 * @example
 * ```tsx
 * <div className="relative">
 *   <WarpVoidBackground variant="blue-purple" speed={1.2} opacity={0.6} />
 *   <div className="relative z-10">Your content here</div>
 * </div>
 * ```
 */
export const WarpVoidBackground: React.FC<WarpVoidBackgroundProps> = ({
  speed = 1.0,
  opacity = 0.8,
  variant = 'default',
  mouseTracking = true,
  density = 'medium',
  zIndex = -1,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  // Respect user's motion preferences
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Don't render animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setShouldRender(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer for performance (only animate when visible)
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2x for performance
    container.appendChild(renderer.domElement);

    // Post-Processing Setup
    const renderTarget = new THREE.WebGLRenderTarget(
      container.clientWidth,
      container.clientHeight
    );
    const postScene = new THREE.Scene();
    const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Shader: Post-Processing (Chromatic Aberration + Vignette)
    const postMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          vec2 dist = uv - 0.5;
          float r = length(dist);

          // Chromatic Aberration
          vec2 offset = normalize(dist) * r * 0.003;
          float red = texture2D(tDiffuse, uv + offset).r;
          float green = texture2D(tDiffuse, uv).g;
          float blue = texture2D(tDiffuse, uv - offset).b;

          vec3 color = vec3(red, green, blue);

          // Vignette
          float vignette = 1.0 - smoothstep(0.5, 1.5, r * 1.6);
          color *= vignette;

          // Contrast
          color = pow(color, vec3(1.1));

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMaterial);
    postScene.add(quad);

    // Color Palettes by Variant
    const colorSchemes = {
      default: {
        darkPurple: new THREE.Vector3(0.05, 0.0, 0.1),
        nebulaBlue: new THREE.Vector3(0.0, 0.2, 0.5),
        coreGlow: new THREE.Vector3(0.4, 0.1, 0.8),
      },
      'blue-purple': {
        darkPurple: new THREE.Vector3(0.02, 0.03, 0.13), // Chrysler Blue base
        nebulaBlue: new THREE.Vector3(0.02, 0.03, 0.88), // #0607E1
        coreGlow: new THREE.Vector3(0.55, 0.36, 0.96), // #8B5CF6 purple
      },
      'cyan-green': {
        darkPurple: new THREE.Vector3(0.0, 0.05, 0.1),
        nebulaBlue: new THREE.Vector3(0.02, 0.71, 0.83), // #06B6D4 cyan
        coreGlow: new THREE.Vector3(0.06, 0.73, 0.51), // #10B981 green
      },
      minimal: {
        darkPurple: new THREE.Vector3(0.0, 0.0, 0.05),
        nebulaBlue: new THREE.Vector3(0.05, 0.05, 0.15),
        coreGlow: new THREE.Vector3(0.15, 0.15, 0.3),
      },
    };

    const colors = colorSchemes[variant];

    // 1. NEBULA TUNNEL
    const tunnelGeo = new THREE.CylinderGeometry(15, 5, 200, 64, 100, true);
    const tunnelMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorDark: { value: colors.darkPurple },
        uColorNebula: { value: colors.nebulaBlue },
        uColorCore: { value: colors.coreGlow },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorDark;
        uniform vec3 uColorNebula;
        uniform vec3 uColorCore;
        varying vec2 vUv;
        varying vec3 vPos;

        // Simplex Noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m; m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x  = a0.x * x0.x + h.x * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          vec2 uv = vUv;
          float zMove = uTime * 0.4;

          // Spiral
          float angle = atan(vPos.y, vPos.x);
          float spiral = angle + (uv.y * 10.0) - (uTime * 0.5);

          vec2 warpUV = vec2(uv.x * 2.0 + spiral * 0.2, uv.y * 3.0 + zMove);

          // FBM Noise
          float n1 = snoise(warpUV * 2.0);
          float n2 = snoise(warpUV * 4.0 - vec2(uTime * 0.2));
          float n3 = snoise(warpUV * 8.0 + vec2(uTime * 0.1));
          float fog = n1 * 0.5 + n2 * 0.25 + n3 * 0.125;

          // Color mixing
          vec3 color = mix(uColorDark, uColorNebula, smoothstep(-0.2, 0.6, fog));

          // Spiral ridges with pulse
          float ridges = smoothstep(0.4, 0.6, sin(spiral * 3.0));
          color += uColorCore * ridges * 0.3 * (0.5 + 0.5 * sin(uTime * 2.0));

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const tunnel = new THREE.Mesh(tunnelGeo, tunnelMat);
    tunnel.rotation.x = -Math.PI / 2;
    scene.add(tunnel);

    // 2. TWINKLING STARS
    const densityMap = { low: 800, medium: 2000, high: 3500 };
    const starCount = densityMap[density];
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starScale = new Float32Array(starCount);
    const starPhase = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPos[i3] = (Math.random() - 0.5) * 60;
      starPos[i3 + 1] = (Math.random() - 0.5) * 60;
      starPos[i3 + 2] = (Math.random() - 0.5) * 200;

      starScale[i] = Math.random() * 2.0 + 1.0;
      starPhase[i] = Math.random() * Math.PI * 2;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('aScale', new THREE.BufferAttribute(starScale, 1));
    starGeo.setAttribute('aPhase', new THREE.BufferAttribute(starPhase, 1));

    const starMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        uniform float uTime;
        attribute float aScale;
        attribute float aPhase;
        varying float vAlpha;

        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aScale * (300.0 / -mvPosition.z);

          float twinkle = 0.5 + 0.5 * sin(uTime * 3.0 + aPhase);
          vAlpha = twinkle;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float strength = 1.0 - (dist * 2.0);
          strength = pow(strength, 2.0);

          vec3 starColor = vec3(0.8, 0.9, 1.0);
          gl_FragColor = vec4(starColor, vAlpha * strength);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 3. WARP LINES
    const lineCount = density === 'low' ? 150 : density === 'medium' ? 300 : 500;
    const lineGeo = new THREE.BufferGeometry();
    const linePos: number[] = [];

    for (let i = 0; i < lineCount; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 100;
      const len = Math.random() * 20 + 10;

      linePos.push(x, y, z);
      linePos.push(x, y, z - len);
    }

    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x88ccff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const warpLines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(warpLines);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTracking) return;
      mouseX = (e.clientX - window.innerWidth / 2) * 0.005;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.005;
    };
    if (mouseTracking) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const time = clock.getElapsedTime() * speed;

      // Update uniforms
      tunnelMat.uniforms.uTime.value = time;
      starMat.uniforms.uTime.value = time;

      // Move stars
      const positions = starField.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        positions[i3 + 2] += 0.8 * speed;
        if (positions[i3 + 2] > 20) {
          positions[i3 + 2] = -180;
        }
      }
      starField.geometry.attributes.position.needsUpdate = true;

      // Move warp lines
      const linePositions = warpLines.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < lineCount * 2; i += 6) {
        const lineSpeed = 2.5 * speed;
        linePositions[i + 2] += lineSpeed;
        linePositions[i + 5] += lineSpeed;

        if (linePositions[i + 2] > 20) {
          const zOffset = -150 - Math.random() * 50;
          const len = Math.random() * 20 + 10;
          const x = (Math.random() - 0.5) * 40;
          const y = (Math.random() - 0.5) * 40;

          linePositions[i] = x;
          linePositions[i + 1] = y;
          linePositions[i + 2] = zOffset;
          linePositions[i + 3] = x;
          linePositions[i + 4] = y;
          linePositions[i + 5] = zOffset - len;
        }
      }
      warpLines.geometry.attributes.position.needsUpdate = true;

      // Camera rotation
      if (mouseTracking) {
        camera.rotation.x += (mouseY * 0.5 - camera.rotation.x) * 0.05;
        camera.rotation.y += (mouseX * 0.5 - camera.rotation.y) * 0.05;
        camera.rotation.z = -mouseX * 0.2 + Math.sin(time * 0.5) * 0.02;
      }

      tunnel.rotation.y = time * 0.05;

      // Render pipeline
      renderer.setRenderTarget(renderTarget);
      renderer.render(scene, camera);

      renderer.setRenderTarget(null);
      postMaterial.uniforms.tDiffuse.value = renderTarget.texture;
      renderer.render(postScene, postCamera);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderTarget.setSize(container.clientWidth, container.clientHeight);
      postMaterial.uniforms.uResolution.value.set(
        container.clientWidth,
        container.clientHeight
      );
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (mouseTracking) {
        document.removeEventListener('mousemove', handleMouseMove);
      }
      renderer.dispose();
      tunnelGeo.dispose();
      tunnelMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderTarget.dispose();
      postMaterial.dispose();
      container?.removeChild(renderer.domElement);
    };
  }, [speed, variant, mouseTracking, density, prefersReducedMotion, isVisible]);

  // Fallback for reduced motion preference
  if (!shouldRender) {
    const fallbackGradients = {
      default: 'from-purple-900/20 via-blue-900/10 to-black',
      'blue-purple': 'from-[#0607E1]/10 via-purple-600/5 to-black',
      'cyan-green': 'from-cyan-500/10 via-green-500/5 to-black',
      minimal: 'from-gray-900/20 to-black',
    };

    return (
      <div
        ref={containerRef}
        className={`absolute inset-0 bg-gradient-to-b ${fallbackGradients[variant]} ${className}`}
        style={{ zIndex, opacity }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ zIndex, opacity }}
      aria-hidden="true"
    />
  );
};

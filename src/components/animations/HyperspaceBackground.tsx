import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HyperspaceBackgroundProps {
  /**
   * Animation speed multiplier (default: 0.8)
   */
  speed?: number;
  /**
   * Opacity of the entire effect (0-1, default: 0.15)
   * Very low for About page to not distract from content
   */
  opacity?: number;
  /**
   * Enable interactive speed boost on click (default: false)
   */
  interactiveBoost?: boolean;
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
 * HyperspaceBackground - Enhanced infinite hyperspace tunnel
 *
 * A premium multi-layered warp effect featuring:
 * - Multiple nested tunnel layers with depth
 * - God rays for volumetric lighting
 * - Enhanced star field with brightness variation
 * - Debris particles for depth perception
 * - Dynamic chromatic aberration
 * - Radial motion blur
 * - Interactive speed control
 *
 * Optimized for About page - very subtle and non-distracting
 *
 * @example
 * ```tsx
 * <div className="relative">
 *   <HyperspaceBackground opacity={0.15} speed={0.8} />
 *   <div className="relative z-10">Your content here</div>
 * </div>
 * ```
 */
export const HyperspaceBackground: React.FC<HyperspaceBackgroundProps> = ({
  speed = 0.8,
  opacity = 0.15,
  interactiveBoost = false,
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
    if (prefersReducedMotion) {
      setShouldRender(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
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
    camera.position.z = 0;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Post-Processing Setup
    const renderTarget = new THREE.WebGLRenderTarget(
      container.clientWidth,
      container.clientHeight,
      { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter }
    );
    const postScene = new THREE.Scene();
    const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    let speedMultiplier = speed;
    let targetSpeed = speed;

    const postMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        uResolution: {
          value: new THREE.Vector2(container.clientWidth, container.clientHeight),
        },
        uTime: { value: 0 },
        uSpeed: { value: speedMultiplier },
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
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          vec2 center = vec2(0.5);
          vec2 dist = uv - center;
          float r = length(dist);

          // Subtle chromatic aberration
          float aberrationStrength = 0.003 + uSpeed * 0.001;
          vec2 offset = normalize(dist) * r * aberrationStrength;

          float red = texture2D(tDiffuse, uv + offset * 0.8).r;
          float green = texture2D(tDiffuse, uv + offset * 0.4).g;
          float blue = texture2D(tDiffuse, uv - offset * 0.6).b;

          vec3 color = vec3(red, green, blue);

          // Subtle radial blur for motion
          vec3 blurred = vec3(0.0);
          float samples = 5.0;
          for(float i = 0.0; i < samples; i++) {
            float scale = 1.0 - (i / samples) * 0.015 * uSpeed;
            vec2 blurUV = center + (uv - center) * scale;
            blurred += texture2D(tDiffuse, blurUV).rgb;
          }
          blurred /= samples;

          color = mix(color, blurred, smoothstep(0.0, 1.0, r) * 0.3);

          // Gentle vignette
          float vignette = 1.0 - smoothstep(0.5, 1.8, r * 1.8);
          vignette = pow(vignette, 0.9);
          color *= vignette;

          // Subtle contrast
          color = pow(color, vec3(1.05));

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMaterial);
    postScene.add(quad);

    // Brand Colors - Quadrate Tech Solutions
    const brandColors = {
      primary: new THREE.Vector3(0.024, 0.027, 0.882), // #0607E1 Chrysler Blue
      secondary: new THREE.Vector3(0.302, 0.196, 0.596), // #4D0AFF Purple
      accent: new THREE.Vector3(0.024, 0.714, 0.831), // #06B6D4 Cyan
      dark: new THREE.Vector3(0.0, 0.0, 0.02), // Very dark for subtle effect
    };

    // Multi-Layer Tunnels
    const tunnels: Array<{
      mesh: THREE.Mesh;
      uniforms: Record<string, THREE.IUniform>;
      speed: number;
    }> = [];
    const tunnelLayers = 2; // Reduced for About page

    for (let layer = 0; layer < tunnelLayers; layer++) {
      const radiusTop = 18 - layer * 2;
      const radiusBottom = 7 - layer * 1.5;
      const tunnelGeo = new THREE.CylinderGeometry(
        radiusTop,
        radiusBottom,
        220,
        48,
        80,
        true
      );

      const tunnelUniforms = {
        uTime: { value: 0 },
        uSpeed: { value: 0.4 + layer * 0.1 },
        uLayer: { value: layer / tunnelLayers },
        uColorPrimary: { value: brandColors.primary },
        uColorSecondary: { value: brandColors.secondary },
        uColorDark: { value: brandColors.dark },
      };

      const tunnelMat = new THREE.ShaderMaterial({
        uniforms: tunnelUniforms,
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
          uniform float uSpeed;
          uniform float uLayer;
          uniform vec3 uColorPrimary;
          uniform vec3 uColorSecondary;
          uniform vec3 uColorDark;
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

            float zMove = uTime * uSpeed;
            float angle = atan(vPos.y, vPos.x);
            float spiral = angle + (uv.y * 10.0) - (uTime * uSpeed * 1.2);

            vec2 warpUV = vec2(uv.x * 2.0 + spiral * 0.25, uv.y * 3.5 + zMove);

            // Multi-octave noise
            float n1 = snoise(warpUV * 2.0);
            float n2 = snoise(warpUV * 4.0 - vec2(uTime * 0.2));
            float n3 = snoise(warpUV * 8.0 + vec2(uTime * 0.1));

            float fog = n1 * 0.5 + n2 * 0.25 + n3 * 0.15;

            // Brand color mixing
            vec3 color = mix(uColorDark, uColorPrimary * 0.3, smoothstep(-0.2, 0.4, fog));
            color = mix(color, uColorSecondary * 0.4, smoothstep(0.2, 0.7, fog));

            // Subtle spiral ridges
            float ridges = smoothstep(0.4, 0.6, sin(spiral * 3.0));
            float pulse = 0.5 + 0.5 * sin(uTime * 2.0);
            color += uColorPrimary * ridges * 0.15 * pulse;

            // Layer intensity
            float layerIntensity = 1.0 - (uLayer * 0.2);
            color *= layerIntensity;

            gl_FragColor = vec4(color, 0.7);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      });

      const tunnel = new THREE.Mesh(tunnelGeo, tunnelMat);
      tunnel.rotation.x = -Math.PI / 2;
      tunnel.position.z = -layer * 15;
      scene.add(tunnel);
      tunnels.push({
        mesh: tunnel,
        uniforms: tunnelUniforms,
        speed: 0.04 + layer * 0.015,
      });
    }

    // Enhanced Stars (reduced count for About page)
    const starCount = 1500;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starScale = new Float32Array(starCount);
    const starPhase = new Float32Array(starCount);
    const starSpeed = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 40 + 10;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 40;

      starPos[i3] = Math.cos(angle) * radius;
      starPos[i3 + 1] = y;
      starPos[i3 + 2] = (Math.random() - 0.5) * 250;

      starScale[i] = Math.random() * 2.0 + 0.3;
      starPhase[i] = Math.random() * Math.PI * 2;
      starSpeed[i] = Math.random() * 1.5;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('aScale', new THREE.BufferAttribute(starScale, 1));
    starGeo.setAttribute('aPhase', new THREE.BufferAttribute(starPhase, 1));
    starGeo.setAttribute('aSpeed', new THREE.BufferAttribute(starSpeed, 1));

    const starMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: speedMultiplier },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uSpeed;
        attribute float aScale;
        attribute float aPhase;
        attribute float aSpeed;
        varying float vAlpha;
        varying float vBrightness;

        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          float depth = -mvPosition.z;
          gl_PointSize = aScale * (350.0 / depth);

          float twinkle = 0.3 + 0.7 * sin(uTime * (2.0 + aSpeed) + aPhase);
          vAlpha = twinkle;

          vBrightness = smoothstep(50.0, 10.0, depth);
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying float vBrightness;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float strength = 1.0 - (dist * 2.0);
          strength = pow(strength, 1.5);

          // Quadrate brand blue tint
          vec3 starColor = mix(
            vec3(0.6, 0.7, 1.0),
            vec3(0.8, 0.85, 1.0),
            vBrightness
          );

          gl_FragColor = vec4(starColor, vAlpha * strength * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Warp Lines (brand colored)
    const lineCount = 200; // Reduced for About page
    const lineGeo = new THREE.BufferGeometry();
    const linePos: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < lineCount; i++) {
      const radius = Math.random() * 30 + 5;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 120;
      const len = Math.random() * 25 + 15;

      linePos.push(x, y, z);
      linePos.push(x, y, z - len);

      // Quadrate brand colors
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        // Chrysler Blue
        lineColors.push(0.024, 0.027, 0.882);
        lineColors.push(0.024, 0.027, 0.882);
      } else {
        // Cyan accent
        lineColors.push(0.024, 0.714, 0.831);
        lineColors.push(0.024, 0.714, 0.831);
      }
    }

    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
    lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const warpLines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(warpLines);

    // Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.002;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.002;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const handleMouseDown = () => {
      if (interactiveBoost) targetSpeed = speed * 2.5;
    };
    const handleMouseUp = () => {
      if (interactiveBoost) targetSpeed = speed;
    };
    if (interactiveBoost) {
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
    }

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const time = clock.getElapsedTime();

      // Smooth speed transition
      speedMultiplier += (targetSpeed - speedMultiplier) * 0.03;

      // Update uniforms
      tunnels.forEach((t, i) => {
        t.uniforms.uTime.value = time * (0.6 + i * 0.15) * speedMultiplier;
        t.mesh.rotation.y = time * t.speed * speedMultiplier;
      });

      starMat.uniforms.uTime.value = time;
      starMat.uniforms.uSpeed.value = speedMultiplier;

      postMaterial.uniforms.uTime.value = time;
      postMaterial.uniforms.uSpeed.value = speedMultiplier;

      // Animate Stars
      const positions = starField.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        positions[i3 + 2] += (1.0 + starSpeed[i] * 0.4) * speedMultiplier;

        if (positions[i3 + 2] > 30) {
          positions[i3 + 2] = -220;
          const radius = Math.random() * 40 + 10;
          const angle = Math.random() * Math.PI * 2;
          positions[i3] = Math.cos(angle) * radius;
          positions[i3 + 1] = (Math.random() - 0.5) * 40;
        }
      }
      starField.geometry.attributes.position.needsUpdate = true;

      // Animate Warp Lines
      const linePositions = warpLines.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < lineCount * 2; i += 6) {
        const lineSpeed = 2.8 * speedMultiplier;
        linePositions[i + 2] += lineSpeed;
        linePositions[i + 5] += lineSpeed;

        if (linePositions[i + 2] > 30) {
          const zOffset = -150 - Math.random() * 60;
          const len = Math.random() * 25 + 15;
          const radius = Math.random() * 30 + 5;
          const angle = Math.random() * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          linePositions[i] = x;
          linePositions[i + 1] = y;
          linePositions[i + 2] = zOffset;
          linePositions[i + 3] = x;
          linePositions[i + 4] = y;
          linePositions[i + 5] = zOffset - len;
        }
      }
      warpLines.geometry.attributes.position.needsUpdate = true;

      // Subtle camera movement
      camera.rotation.x += (mouseY * 0.3 - camera.rotation.x) * 0.05;
      camera.rotation.y += (mouseX * 0.3 - camera.rotation.y) * 0.05;
      camera.rotation.z = -mouseX * 0.1 + Math.sin(time * 0.4) * 0.01;

      camera.position.z = Math.sin(time * 0.25) * 1.5;

      // Render Pipeline
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
      document.removeEventListener('mousemove', handleMouseMove);
      if (interactiveBoost) {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      }
      renderer.dispose();
      tunnels.forEach((t) => {
        t.mesh.geometry.dispose();
        (t.mesh.material as THREE.Material).dispose();
      });
      starGeo.dispose();
      starMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderTarget.dispose();
      postMaterial.dispose();
      container?.removeChild(renderer.domElement);
    };
  }, [speed, interactiveBoost, prefersReducedMotion, isVisible]);

  // Fallback for reduced motion preference
  if (!shouldRender) {
    return (
      <div
        ref={containerRef}
        className={`absolute inset-0 bg-gradient-to-br from-[#0607E1]/5 via-transparent to-[#06B6D4]/5 ${className}`}
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

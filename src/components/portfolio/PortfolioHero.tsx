"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Zap,
  Layers,
  MousePointer2,
} from "lucide-react";
import { WarpVoidBackground } from "@/components/animations/WarpVoidBackground";

const PortfolioHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouseX.set(x);
    mouseY.set(y);
  };

  const scrollToGallery = () => {
    const gallery = document.getElementById("portfolio-gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-background perspective-1000"
    >
      {/* WebGL backdrop tuned for design palette */}
      <WarpVoidBackground
        variant="fuchsia-amber"
        speed={0.6}
        opacity={0.32}
        density="low"
        mouseTracking={false}
        zIndex={0}
        className="pointer-events-none"
      />

      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      {/* Floating 3D Elements */}
      <FloatingElements mouseX={mouseX} mouseY={mouseY} />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            World-Class Design Portfolio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]"
        >
          <span className="block text-foreground drop-shadow-sm">Digital</span>
          <span className="block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Masterpieces
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Where innovation meets aesthetics. We craft immersive digital
          experiences that define the future of brand identity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={scrollToGallery}
            className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative flex items-center gap-2">
              View Our Work <Layers className="w-5 h-5" />
            </span>
          </button>

          <Link
            href="/contact"
            className="group px-8 py-4 rounded-full bg-card border border-border hover:border-primary/50 text-foreground font-semibold text-lg transition-all duration-300 hover:bg-accent flex items-center gap-2"
          >
            Start a Project{" "}
            <MousePointer2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- Sub-component for Floating Background Elements ---
const FloatingElements = ({ mouseX, mouseY }: { mouseX: any; mouseY: any }) => {
  const x = useTransform(mouseX, [0, 1], [-20, 20]);
  const y = useTransform(mouseY, [0, 1], [-20, 20]);
  const rotate = useTransform(mouseX, [0, 1], [-5, 5]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Shape */}
      <motion.div
        style={{ x, y, rotate }}
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl"
      />

      {/* Bottom Right Shape */}
      <motion.div
        style={{
          x: useTransform(x, (v) => -v),
          y: useTransform(y, (v) => -v),
          rotate: useTransform(rotate, (v) => -v),
        }}
        className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-3xl"
      />

      {/* Floating Icons */}
      <motion.div
        style={{
          x: useTransform(x, (v) => v * 2),
          y: useTransform(y, (v) => v * 2),
        }}
        className="absolute top-[20%] right-[15%] text-primary/20"
      >
        <Zap className="w-24 h-24 rotate-12" />
      </motion.div>

      <motion.div
        style={{
          x: useTransform(x, (v) => v * -1.5),
          y: useTransform(y, (v) => v * -1.5),
        }}
        className="absolute bottom-[25%] left-[10%] text-purple-500/20"
      >
        <Layers className="w-20 h-20 -rotate-12" />
      </motion.div>
    </div>
  );
};

export default PortfolioHero;

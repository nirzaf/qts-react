'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Utility: Mouse Spotlight Hook ---
const useMouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return { mouseX, mouseY, handleMouseMove };
};

// --- Logo Component ---
const GraphyEmpireLogo: React.FC<{ size?: number }> = ({ size = 110 }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
        <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <circle cx="50" cy="50" r="40" stroke="url(#logoGradient)" strokeWidth="6" className="opacity-20" />
        <path d="M50 15 L50 85 M15 50 L85 50" stroke="url(#logoGradient)" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
        <circle cx="50" cy="50" r="12" fill="currentColor" filter="url(#glow)" />
    </svg>
);

// --- 1. Premium Icon: The "Tesseract" (Rotating 3D Glass Cube) ---
const PremiumIcon = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-[500px]">
            <motion.div
                className="relative w-8 h-8 preserve-3d"
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Cube Faces */}
                {[0, 90, 180, 270].map((deg, i) => (
                    <div key={i} className="absolute inset-0 border border-primary/40 bg-primary/5 backdrop-blur-sm"
                        style={{ transform: `rotateY(${deg}deg) translateZ(16px)` }} />
                ))}
                <div className="absolute inset-0 border border-primary/40 bg-primary/5 backdrop-blur-sm" style={{ transform: 'rotateX(90deg) translateZ(16px)' }} />
                <div className="absolute inset-0 border border-primary/40 bg-primary/5 backdrop-blur-sm" style={{ transform: 'rotateX(-90deg) translateZ(16px)' }} />

                {/* Inner Core */}
                <div className="absolute inset-[8px] bg-primary/80 shadow-[0_0_15px_rgba(var(--primary),0.5)] rounded-sm"
                    style={{ transform: 'rotateX(45deg) rotateY(45deg)' }} />
            </motion.div>
        </div>
    );
};

// --- 2. Award Icon: The "Pulsar" (Radiating Energy) ---
const AwardIcon = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border border-primary/20"
                    style={{ width: i * 16, height: i * 16 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3],
                        borderColor: ["rgba(var(--primary), 0.2)", "rgba(var(--primary), 0.5)", "rgba(var(--primary), 0.2)"]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                    }}
                />
            ))}
            <motion.div
                className="w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Light beams */}
            <motion.div
                className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                animate={{ rotate: [0, 180] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                animate={{ rotate: [90, 270] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

// --- 3. Partner Icon: The "Synergy" (Interlocking Orbits) ---
const PartnerIcon = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Ring 1 */}
            <motion.div
                className="absolute w-8 h-8 border-2 border-primary/60 rounded-full"
                style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
                animate={{ rotate: 360, borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '60% 40% 30% 70% / 60% 50% 40% 50%', '40% 60% 70% 30% / 40% 50% 60% 50%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Ring 2 */}
            <motion.div
                className="absolute w-8 h-8 border-2 border-white/40 rounded-full"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 50% 40% 50%' }}
                animate={{ rotate: -360, borderRadius: ['60% 40% 30% 70% / 60% 50% 40% 50%', '40% 60% 70% 30% / 40% 50% 60% 50%', '60% 40% 30% 70% / 60% 50% 40% 50%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-2 h-2 bg-primary rounded-full blur-[2px]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </div>
    );
};

const GraphyEmpirePartner: React.FC = () => {
    const { mouseX, mouseY, handleMouseMove } = useMouseSpotlight();

    // Dynamic Spotlight Gradient
    const spotlight = useMotionTemplate`
        radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(var(--primary-rgb), 0.08),
            transparent 80%
        )
    `;

    const features = [
        {
            IconComponent: PremiumIcon,
            title: 'Premium Quality',
            description: 'Exceptional design standards with attention to every pixel.',
        },
        {
            IconComponent: AwardIcon,
            title: 'Award-Winning',
            description: 'Recognized excellence in global brand identity awards.',
        },
        {
            IconComponent: PartnerIcon,
            title: 'Trusted Partner',
            description: 'Collaborative synergy ensuring your vision manifests perfectly.',
        },
    ];

    return (
        <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-background text-foreground selection:bg-primary/30">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    onMouseMove={handleMouseMove}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative rounded-[3rem] border border-white/10 bg-card/30 backdrop-blur-2xl overflow-hidden shadow-2xl"
                >
                    {/* Spotlight Overlay */}
                    <motion.div
                        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        style={{ background: spotlight }}
                    />

                    <div className="relative z-10 p-8 md:p-12 lg:p-20">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">

                            {/* Left Column: Brand Identity (5 cols) */}
                            <div className="lg:col-span-5 flex flex-col items-start relative">
                                {/* Decorative "Official Partner" Pill */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-8 pl-1"
                                >
                                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm ring-1 ring-white/5">
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/80">
                                            Official Design Partner
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Logo & Headline */}
                                <div className="mb-10 relative">
                                    <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                                    <motion.div
                                        className="mb-8 inline-block"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <div className="p-4 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-xl backdrop-blur-sm">
                                            <GraphyEmpireLogo size={100} />
                                        </div>
                                    </motion.div>

                                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60 mb-6">
                                        Graphy Empire.
                                    </h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-md font-light">
                                        Forging identities that resonate. We partner with the masters of visual storytelling to elevate your brand to an art form.
                                    </p>
                                </div>

                                {/* Magnetic CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative overflow-hidden group/btn px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-primary/25 transition-all"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                                    <span className="relative z-10 flex items-center gap-3">
                                        Start Your Journey
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                    </span>
                                </motion.button>
                            </div>

                            {/* Right Column: Interactive Features Grid (7 cols) */}
                            <div className="lg:col-span-7">
                                <div className="grid gap-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + (index * 0.1) }}
                                            className="group/card relative p-6 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-500 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                                            <div className="flex items-center gap-8 relative z-10">
                                                {/* Icon Container with Glass Effect */}
                                                <div className="shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shadow-inner relative overflow-hidden group-hover/card:scale-105 transition-transform duration-500">
                                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-xl" />
                                                    <div className="w-12 h-12 text-foreground/90 relative z-10">
                                                        <feature.IconComponent />
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover/card:text-primary transition-colors duration-300">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-muted-foreground group-hover/card:text-muted-foreground/80 transition-colors duration-300 leading-relaxed text-lg">
                                                        {feature.description}
                                                    </p>
                                                </div>

                                                {/* Subtle Chevron Reveal */}
                                                <div className="opacity-0 group-hover/card:opacity-100 -translate-x-4 group-hover/card:translate-x-0 transition-all duration-500 text-primary">
                                                    <ArrowRight className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CSS for 3D Transform Utility (Tailwind plugin substitute) */}
            <style jsx global>{`
                .preserve-3d { transform-style: preserve-3d; }
                .perspective-500 { perspective: 500px; }
            `}</style>
        </section>
    );
};

export default GraphyEmpirePartner;

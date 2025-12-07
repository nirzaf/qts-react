'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Palette, Sparkles } from 'lucide-react';
import GraphyEmpireLogo from './GraphyEmpireLogo';

const PortfolioHero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut' as const,
            },
        },
    };

    const floatVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut' as const,
            },
        },
    };

    const scrollToGallery = () => {
        const gallery = document.getElementById('portfolio-gallery');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 dark:from-primary/10 dark:via-background dark:to-primary/20" />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl"
                variants={floatVariants}
                animate="animate"
            />
            <motion.div
                className="absolute bottom-32 right-[15%] w-32 h-32 rounded-full bg-gradient-to-tl from-primary/15 to-transparent blur-2xl"
                variants={floatVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
            />
            <motion.div
                className="absolute top-1/3 right-[20%] w-16 h-16 rounded-full bg-gradient-to-br from-primary/25 to-primary/10 blur-lg"
                variants={floatVariants}
                animate="animate"
                style={{ animationDelay: '4s' }}
            />

            {/* Decorative Icons */}
            <motion.div
                className="absolute top-32 right-[25%] text-primary/20"
                variants={floatVariants}
                animate="animate"
            >
                <Palette className="w-12 h-12" />
            </motion.div>
            <motion.div
                className="absolute bottom-40 left-[20%] text-primary/15"
                variants={floatVariants}
                animate="animate"
                style={{ animationDelay: '3s' }}
            >
                <Sparkles className="w-10 h-10" />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
                        <Sparkles className="w-4 h-4" />
                        Design Portfolio
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                >
                    <span className="text-foreground">Crafting</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                        Visual Excellence
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
                >
                    Explore our curated collection of brand identity designs, logos, and creative
                    solutions that transform businesses into memorable brands.
                </motion.p>

                {/* Partner Badge with Logo */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 shadow-lg"
                >
                    <GraphyEmpireLogo size={60} />
                    <div className="text-left">
                        <p className="text-xs text-muted-foreground">In Partnership With</p>
                        <p className="font-semibold text-foreground text-lg">Graphy Empire</p>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.button
                    variants={itemVariants}
                    onClick={scrollToGallery}
                    className="mt-16 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
                    aria-label="Scroll to gallery"
                >
                    <span className="text-sm font-medium">Explore Work</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ChevronDown className="w-6 h-6 group-hover:text-primary transition-colors" />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default PortfolioHero;

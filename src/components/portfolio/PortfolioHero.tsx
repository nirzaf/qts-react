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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 dark:from-primary/20 dark:via-background dark:to-primary/10" />

            <motion.div
                className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-2xl"
                variants={floatVariants}
                animate="animate"
            />
            <motion.div
                className="absolute bottom-32 right-[15%] w-40 h-40 rounded-full bg-gradient-to-tl from-primary/20 to-transparent blur-3xl"
                variants={floatVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
            />
            <motion.div
                className="absolute top-1/3 right-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-primary/35 to-primary/15 blur-xl"
                variants={floatVariants}
                animate="animate"
                style={{ animationDelay: '4s' }}
            />

            <motion.div
                className="absolute top-32 right-[25%] text-primary/30"
                variants={floatVariants}
                animate="animate"
            >
                <Palette className="w-16 h-16" />
            </motion.div>
            <motion.div
                className="absolute bottom-40 left-[20%] text-primary/25"
                variants={floatVariants}
                animate="animate"
                style={{ animationDelay: '3s' }}
            >
                <Sparkles className="w-14 h-14" />
            </motion.div>

            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            <motion.div
                className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-8">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 text-primary text-sm font-semibold backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        Design Portfolio
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
                >
                    <span className="text-foreground">Crafting</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent drop-shadow-sm">
                        Visual Excellence
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    Explore our curated collection of brand identity designs, logos, and creative
                    solutions that transform businesses into memorable brands.
                </motion.p>

                <div className="flex flex-col items-center gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-3xl bg-card/80 backdrop-blur-xl border-2 border-border/50 shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 group"
                    >
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                            <GraphyEmpireLogo size={90} />
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                In Partnership With
                            </p>
                            <p className="font-bold text-foreground text-xl mb-1">Graphy Empire</p>
                            <p className="text-xs text-muted-foreground">Brand Identity Experts</p>
                        </div>
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        onClick={scrollToGallery}
                        className="inline-flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group"
                        aria-label="Scroll to gallery"
                    >
                        <span className="text-sm font-semibold uppercase tracking-wider">Explore Our Work</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                        >
                            <ChevronDown className="w-6 h-6 group-hover:text-primary transition-colors" />
                        </motion.div>
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default PortfolioHero;

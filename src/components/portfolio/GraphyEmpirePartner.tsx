'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Handshake, ArrowRight } from 'lucide-react';
import GraphyEmpireLogo from './GraphyEmpireLogo';

const GraphyEmpirePartner: React.FC = () => {
    const features = [
        {
            icon: Star,
            title: 'Premium Quality',
            description: 'Exceptional design standards with attention to every detail',
        },
        {
            icon: Award,
            title: 'Award-Winning',
            description: 'Recognized excellence in brand identity and visual design',
        },
        {
            icon: Handshake,
            title: 'Trusted Partner',
            description: 'Collaborative approach ensuring your vision comes to life',
        },
    ];

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut' as const,
            },
        },
    };

    return (
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Main Partner Card */}
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        {/* Animated Gradient Border */}
                        <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-primary via-primary/50 to-primary animate-gradient-x">
                            <div className="absolute inset-[2px] rounded-3xl bg-card" />
                        </div>

                        <div className="relative z-10 p-8 md:p-12 lg:p-16">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div>
                                    <motion.div variants={itemVariants} className="mb-6">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                            <Handshake className="w-4 h-4" />
                                            Official Design Partner
                                        </span>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="flex items-center gap-6 mb-6">
                                        {/* Graphy Empire Logo */}
                                        <div className="shrink-0">
                                            <GraphyEmpireLogo size={100} />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                                Graphy Empire
                                            </h2>
                                            <p className="text-muted-foreground">Brand Identity Experts</p>
                                        </div>
                                    </motion.div>

                                    <motion.p
                                        variants={itemVariants}
                                        className="text-lg text-muted-foreground mb-8 leading-relaxed"
                                    >
                                        We&apos;ve partnered with Graphy Empire, a leading creative agency
                                        specializing in brand identity design. Together, we deliver
                                        comprehensive branding solutions that help businesses stand out
                                        and connect with their audience.
                                    </motion.p>

                                    <motion.div variants={itemVariants}>
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:gap-4 group"
                                        >
                                            Start Your Brand Journey
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </motion.div>
                                </div>

                                {/* Right - Features */}
                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature.title}
                                            variants={itemVariants}
                                            custom={index}
                                            className="flex items-start gap-4 p-5 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                                                <feature.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default GraphyEmpirePartner;

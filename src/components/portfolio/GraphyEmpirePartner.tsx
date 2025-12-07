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
        <section className="py-28 px-4 md:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/8 to-background" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r from-primary via-primary/60 to-primary animate-gradient-x">
                            <div className="absolute inset-[3px] rounded-3xl bg-card" />
                        </div>

                        <div className="relative z-10 p-10 md:p-14 lg:p-20">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <motion.div variants={itemVariants} className="mb-8">
                                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 text-primary text-sm font-bold">
                                            <Handshake className="w-4 h-4" />
                                            Official Design Partner
                                        </span>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8">
                                        <div className="shrink-0 transform hover:scale-110 transition-transform duration-300">
                                            <GraphyEmpireLogo size={110} />
                                        </div>
                                        <div>
                                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                                                Graphy Empire
                                            </h2>
                                            <p className="text-muted-foreground text-lg">Brand Identity Experts</p>
                                        </div>
                                    </motion.div>

                                    <motion.p
                                        variants={itemVariants}
                                        className="text-xl text-muted-foreground mb-10 leading-relaxed"
                                    >
                                        We&apos;ve partnered with Graphy Empire, a leading creative agency
                                        specializing in brand identity design. Together, we deliver
                                        comprehensive branding solutions that help businesses stand out
                                        and connect with their audience.
                                    </motion.p>

                                    <motion.div variants={itemVariants}>
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:gap-5 group"
                                        >
                                            Start Your Brand Journey
                                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </motion.div>
                                </div>

                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature.title}
                                            variants={itemVariants}
                                            custom={index}
                                            className="flex items-start gap-5 p-6 rounded-2xl bg-background/60 backdrop-blur-sm border-2 border-border/50 hover:border-primary/40 transition-all duration-300 group hover:shadow-lg"
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0 group-hover:scale-110">
                                                <feature.icon className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-2 text-lg">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-muted-foreground">
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

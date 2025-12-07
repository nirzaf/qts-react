'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Palette,
    Type,
    Paintbrush,
    BookOpen,
    ImageIcon,
    Target,
    FileText,
    Share2,
} from 'lucide-react';

const services = [
    {
        icon: Palette,
        title: 'Logo Design',
        description: 'Unique, memorable logos that capture your brand essence and create instant recognition.',
        gradient: 'from-violet-500 to-purple-600',
    },
    {
        icon: Type,
        title: 'Typography Selection',
        description: 'Carefully curated font pairings and hierarchy systems for consistent brand communication.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Paintbrush,
        title: 'Brand Colors',
        description: 'Strategic color palette development that evokes the right emotions and stands out.',
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        icon: BookOpen,
        title: 'Brand Guidelines',
        description: 'Comprehensive style guides ensuring brand consistency across all touchpoints.',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        icon: ImageIcon,
        title: 'Visual Identity',
        description: 'Complete visual systems including imagery style, iconography, and graphics.',
        gradient: 'from-rose-500 to-pink-500',
    },
    {
        icon: Target,
        title: 'Brand Strategy',
        description: 'Market positioning and messaging frameworks that resonate with your audience.',
        gradient: 'from-indigo-500 to-blue-600',
    },
    {
        icon: FileText,
        title: 'Stationery Design',
        description: 'Business cards, letterheads, and corporate materials that leave lasting impressions.',
        gradient: 'from-slate-500 to-gray-600',
    },
    {
        icon: Share2,
        title: 'Digital Assets',
        description: 'Social media kits, email signatures, and digital templates for online presence.',
        gradient: 'from-fuchsia-500 to-purple-600',
    },
];

const BrandIdentityServices: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut' as const,
            },
        },
    };

    return (
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Palette className="w-4 h-4" />
                        Brand Identity Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Complete Brand <span className="text-primary">Identity</span> Solutions
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From concept to execution, we create cohesive brand identities that
                        tell your story and connect with your target audience.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            custom={index}
                            className="group relative"
                        >
                            <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                                {/* Icon Container */}
                                <div className={`w-14 h-14 rounded-xl mb-5 bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-7 h-7" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground mb-6">
                        Ready to transform your brand? Let&apos;s create something extraordinary together.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors shadow-lg"
                    >
                        Get a Free Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandIdentityServices;

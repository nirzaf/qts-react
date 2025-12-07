'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Premium Kinetic Icons (Continuously Animating) ---

const KineticLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.1 }} />
            </linearGradient>
        </defs>
        <motion.circle
            cx="12" cy="12" r="9"
            strokeDasharray="40 20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ opacity: 0.5 }}
        />
        <motion.path
            d="M12 6L17.196 15H6.804L12 6Z"
            fill="url(#grad1)"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "12px 12px" }}
        />
        <motion.circle
            cx="12" cy="12" r="2"
            fill="currentColor"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
    </svg>
);

const KineticTypeIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 20h16" style={{ opacity: 0.3 }} />
        <path d="M12 4L6 20h12L12 4z" />
        <motion.line
            x1="8" y1="14" x2="16" y2="14"
            animate={{ y: [-2, 4, -2], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="12" cy="2" r="1" fill="currentColor"
            animate={{ y: [0, -3, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
    </svg>
);

const KineticColorIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "12px 12px" }}>
            <motion.circle cx="12" cy="7" r="4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: 0.6 }}
            />
            <motion.circle cx="7.67" cy="14.5" r="4"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ opacity: 0.6 }}
            />
            <motion.circle cx="16.33" cy="14.5" r="4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ opacity: 0.6 }}
            />
        </motion.g>
        <motion.circle cx="12" cy="12" r="1" fill="currentColor" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
    </svg>
);

const KineticBookIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="4" width="16" height="16" rx="2" style={{ opacity: 0.3 }} />
        <motion.line x1="8" y1="8" x2="16" y2="8"
            animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line x1="8" y1="12" x2="16" y2="12"
            animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.line x1="8" y1="16" x2="12" y2="16"
            animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.line x1="6" y1="4" x2="6" y2="20"
            strokeDasharray="2 2"
            animate={{ x: [0, 12, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
    </svg>
);

const KineticEyeIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <motion.path
            d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
            animate={{
                d: [
                    "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
                    "M2 12s3-6 10-6 10 6 10 6-3 6-10 6-10-6-10-6Z",
                    "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
            cx="12" cy="12" r="3"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
            cx="12" cy="12" r="1" fill="currentColor"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
    </svg>
);

const KineticCompassIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" style={{ opacity: 0.2 }} />
        <motion.circle cx="12" cy="12" r="10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.1, 1.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.path
            d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
            animate={{ rotate: [0, 45, 0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "12px 12px" }}
        />
    </svg>
);

const KineticStackIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <motion.rect x="4" y="4" width="16" height="16" rx="2"
            style={{ opacity: 0.3, transformOrigin: "center" }}
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect x="4" y="4" width="16" height="16" rx="2"
            fill="white" fillOpacity="0.1"
            animate={{ y: [0, -4, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line x1="8" y1="10" x2="16" y2="10"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}
        />
    </svg>
);

const KineticNodeIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <motion.line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeDasharray="4 2"
            animate={{ strokeDashoffset: [0, -12] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeDasharray="4 2"
            animate={{ strokeDashoffset: [0, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle cx="18" cy="5" r="1" fill="currentColor" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="6" cy="12" r="1" fill="currentColor" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="18" cy="19" r="1" fill="currentColor" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
    </svg>
);

const services = [
    {
        icon: KineticLogoIcon,
        title: 'Logo Design',
        description: 'Unique, memorable logos that capture your brand essence and create instant recognition.',
        gradient: 'from-violet-500 to-purple-600',
    },
    {
        icon: KineticTypeIcon,
        title: 'Typography Selection',
        description: 'Carefully curated font pairings and hierarchy systems for consistent brand communication.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: KineticColorIcon,
        title: 'Brand Colors',
        description: 'Strategic color palette development that evokes the right emotions and stands out.',
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        icon: KineticBookIcon,
        title: 'Brand Guidelines',
        description: 'Comprehensive style guides ensuring brand consistency across all touchpoints.',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        icon: KineticEyeIcon,
        title: 'Visual Identity',
        description: 'Complete visual systems including imagery style, iconography, and graphics.',
        gradient: 'from-rose-500 to-pink-500',
    },
    {
        icon: KineticCompassIcon,
        title: 'Brand Strategy',
        description: 'Market positioning and messaging frameworks that resonate with your audience.',
        gradient: 'from-indigo-500 to-blue-600',
    },
    {
        icon: KineticStackIcon,
        title: 'Stationery Design',
        description: 'Business cards, letterheads, and corporate materials that leave lasting impressions.',
        gradient: 'from-slate-500 to-gray-600',
    },
    {
        icon: KineticNodeIcon,
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium mb-6 shadow-sm">
                        <div className="w-6 h-6 text-primary"><KineticLogoIcon className="w-6 h-6" /></div>
                        Brand Identity Services
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                        Complete Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Identity</span> Solutions
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We blend strategy with kinetic design to build living brands that connect, evolve, and endure.
                    </p>
                </motion.div>

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
                            className="group relative h-full"
                        >
                            <div className="h-full p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
                                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />

                                <div className={`w-20 h-20 rounded-2xl mb-6 mx-auto bg-gradient-to-br ${service.gradient} p-0.5 shadow-lg group-hover:shadow-primary/20 transition-all duration-500`}>
                                    <div className="w-full h-full bg-card rounded-[14px] flex items-center justify-center">
                                        <div className="text-foreground group-hover:text-primary transition-colors duration-500">
                                            <service.icon className="w-14 h-14" />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${service.gradient} opacity-20 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-out`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <p className="text-muted-foreground mb-8">
                        Ready to transform your brand? Let&apos;s create something extraordinary together.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
                    >
                        Get a Free Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandIdentityServices;

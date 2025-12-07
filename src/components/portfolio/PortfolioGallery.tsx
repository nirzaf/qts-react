'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Generate portfolio image list from public/portfolio directory
const generatePortfolioImages = () => {
    const images: { id: string; src: string; alt: string }[] = [];

    // Known image files from the portfolio directory
    const imageFiles = [
        '10023.jpg', '10024.jpg', '10028.jpeg', '10029.jpeg', '10030.jpeg',
        '10031.jpeg', '10032.jpeg', '10033.jpeg', '10034.jpg', '10035.jpg',
        '10036.jpg', '10037.jpg', '10038.jpg', '10039.jpg', '10040.jpeg',
        '10041.jpg', '10042.jpg', '10043.jpeg', '10044.jpeg', '10046.jpeg',
        '10047.jpeg', '10048.jpeg', '10049.jpeg', '10050.jpeg', '10051.jpeg',
        '10052.jpeg', '10053.jpeg', '10055.jpeg', '10056.jpeg', '10058.jpeg',
        '10059.jpeg', '10060.jpeg', '10105.jpeg', '10107.jpeg', '10108.jpeg',
        '10110.jpeg', '10111.jpg', '10112.jpg', '10114.jpg', '10115.jpg',
        '10116.jpg', '10117.jpg', '10118.jpeg', '10119.jpeg', '10120.jpg',
        '10121.jpg', '10122.jpg', '10123.jpg', '10125.jpg', '10126.jpg',
        '10127.jpg', '10128.jpg', '10129.jpg', '10130.jpg', '10131.jpg',
        '10132.jpg', '10133.jpg', '10134.jpg', '10135.jpg', '10136.jpg',
        '10137.jpg', '10138.jpg', '10139.jpg', '10140.jpg', '10141.jpg',
        '10142.jpg', '10143.jpg', '10144.jpg', '10145.jpg', '10146.jpg',
        '10147.jpg', '10148.jpg', '10149.jpg', '10150.jpg', '10151.jpg',
        '10152.jpg', '10153.jpg', '10154.jpg', '10155.jpg', '10156.jpg',
        '10157.jpg', '10158.jpg', '10159.jpg', '10161.jpg', '10162.jpg',
        '10163.jpg', '10164.jpg', '10165.jpg', '10170.jpg',
    ];

    imageFiles.forEach((file, index) => {
        images.push({
            id: `portfolio-${index}`,
            src: `/portfolio/${file}`,
            alt: `Design portfolio item ${index + 1}`,
        });
    });

    return images;
};

const portfolioImages = generatePortfolioImages();

interface LightboxProps {
    image: { id: string; src: string; alt: string };
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    currentIndex: number;
    totalCount: number;
}

const Lightbox: React.FC<LightboxProps> = ({
    image,
    onClose,
    onNext,
    onPrev,
    currentIndex,
    totalCount,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close lightbox"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                {currentIndex + 1} / {totalCount}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next image"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
                key={image.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={image.src}
                alt={image.alt}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </motion.div>
    );
};

const PortfolioGallery: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(24);
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

    const visibleImages = useMemo(
        () => portfolioImages.slice(0, visibleCount),
        [visibleCount]
    );

    const handleImageLoad = useCallback((id: string) => {
        setLoadedImages((prev) => new Set([...prev, id]));
    }, []);

    const openLightbox = useCallback((index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedImageIndex(null);
        document.body.style.overflow = '';
    }, []);

    const nextImage = useCallback(() => {
        setSelectedImageIndex((prev) =>
            prev !== null ? (prev + 1) % portfolioImages.length : null
        );
    }, []);

    const prevImage = useCallback(() => {
        setSelectedImageIndex((prev) =>
            prev !== null
                ? (prev - 1 + portfolioImages.length) % portfolioImages.length
                : null
        );
    }, []);

    const loadMore = useCallback(() => {
        setVisibleCount((prev) => Math.min(prev + 24, portfolioImages.length));
    }, []);

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, closeLightbox, nextImage, prevImage]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
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
        <section id="portfolio-gallery" className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Our Creative <span className="text-primary">Portfolio</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of brand identities, logos, and design systems we&apos;ve crafted
                        for businesses across various industries.
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {visibleImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            variants={itemVariants}
                            className="break-inside-avoid group relative overflow-hidden rounded-xl bg-muted cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            {/* Placeholder while loading */}
                            {!loadedImages.has(image.id) && (
                                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse" />
                            )}

                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                onLoad={() => handleImageLoad(image.id)}
                                className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 ${loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <div className="flex items-center gap-2 text-white text-sm font-medium">
                                    <ZoomIn className="w-5 h-5" />
                                    <span>View Full Size</span>
                                </div>
                            </div>

                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 rounded-xl ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Load More Button */}
                {visibleCount < portfolioImages.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button
                            onClick={loadMore}
                            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
                        >
                            Load More ({portfolioImages.length - visibleCount} remaining)
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <Lightbox
                        image={portfolioImages[selectedImageIndex]}
                        onClose={closeLightbox}
                        onNext={nextImage}
                        onPrev={prevImage}
                        currentIndex={selectedImageIndex}
                        totalCount={portfolioImages.length}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default PortfolioGallery;

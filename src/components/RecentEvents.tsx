'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const RecentEvents = () => {
    // Array of 10 images
    const images = Array.from({ length: 10 }, (_, i) => i + 1);

    // Helper to determine span classes for the bento grid effect
    const getSpanClass = (index: number) => {
        // Pattern:
        // 0: Large square (2x2)
        // 1: Tall vertical (1x2)
        // 4: Wide horizontal (2x1)
        // Others: Standard (1x1)
        switch (index) {
            case 0:
                return "md:col-span-2 md:row-span-2";
            case 1:
                return "md:col-span-1 md:row-span-2";
            case 4:
                return "md:col-span-2 md:row-span-1";
            case 5:
                return "md:col-span-1 md:row-span-1"; // Standard
            default:
                return "md:col-span-1 md:row-span-1";
        }
    };

    return (
        <section className="py-24 bg-ocean-900 relative border-t border-ocean-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 flex flex-col items-center justify-center"
                >
                    <div className="relative w-20 h-20 mb-6">
                        <Image
                            src="/gupc-logo.png"
                            alt="GUPC Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Recent <span className="text-accent">Events</span>
                    </h2>
                    <p className="text-ocean-300 max-w-2xl mx-auto text-lg">
                        Highlights from our recent photowalks, workshops, and gatherings.
                        Join us to be part of the next memory.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
                    {images.map((num, index) => (
                        <motion.div
                            key={num}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`relative group rounded-2xl overflow-hidden border border-ocean-700/50 hover:border-accent/50 transition-colors duration-300 ${getSpanClass(index)}`}
                        >
                            <Image
                                src={`/images/recent-events/event-${num}.jpg`}
                                alt={`GUPC Recent Event ${num}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                priority={index < 2}
                            />

                            {/* Creative Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-accent text-sm font-medium tracking-wider mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    EVENT GALLERY
                                </span>
                                <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    View Highlights
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentEvents;

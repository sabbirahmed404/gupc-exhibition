'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const RecentEvents = () => {
    // Array of 10 images
    const images = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <section className="py-20 bg-ocean-900 relative border-t border-ocean-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 flex flex-col items-center justify-center"
                >
                    <div className="relative w-24 h-24 mb-6">
                        <Image
                            src="/gupc-logo.png"
                            alt="GUPC Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Recent <span className="text-accent">Events</span>
                    </h2>
                    <p className="text-ocean-300 max-w-2xl mx-auto">
                        Highlights from our recent photowalks, workshops, and gatherings.
                        Join us to be part of the next memory.
                    </p>
                </motion.div>

                {/* Masonry Layout */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {images.map((num, index) => (
                        <motion.div
                            key={num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="break-inside-avoid relative group rounded-xl overflow-hidden border border-ocean-700 hover:border-accent/50 transition-all duration-300"
                        >
                            <Image
                                src={`/images/recent-events/event-${num}.jpg`}
                                alt={`GUPC Recent Event ${num}`}
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                priority={index < 3}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold border-b-2 border-accent pb-1">GUPC Event</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentEvents;

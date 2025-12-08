'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-20 bg-ocean-800 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            About <span className="text-accent">GUPC</span>
                        </h2>
                        <p className="text-ocean-300 text-lg leading-relaxed mb-6">
                            The Green University Photography Club (GUPC) is a community of passionate storytellers who capture the world through their lenses. We believe in the power of images to inspire, document, and celebrate life.
                        </p>
                        <p className="text-ocean-300 text-lg leading-relaxed mb-8">
                            This Victory Day, we invite you to join our grand exhibition. It's not just about showcasing photos; it's about celebrating our history, our creativity, and our freedom.
                        </p>

                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ocean-600 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-transparent to-transparent opacity-60 z-10"></div>
                            <div className="aspect-video relative">
                                <Image
                                    src="https://www.destinsparks.com/wp-content/uploads/2012/07/Destin-Sparks-Landscape-Photographer.jpg"
                                    alt="Destin Sparks Quote"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 z-20">
                                <p className="text-white font-medium italic">
                                    "Photography is the story I fail to put into words."
                                </p>
                                <p className="text-accent text-sm mt-2">- Destin Sparks</p>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-accent text-ocean-900 font-bold py-3 px-6 rounded-lg shadow-lg rotate-3"
                        >
                            Since 2014
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

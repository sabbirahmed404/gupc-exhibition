'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const Dedication = () => {
    return (
        <section className="py-24 bg-ocean-950 relative overflow-hidden border-t border-ocean-800">
            {/* Background Gradient/Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/50 to-black/80 z-0"></div>

            {/* Freedom/Victory light effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-red-600/5 via-transparent to-transparent opacity-50 z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-block p-3 rounded-full bg-ocean-800/50 mb-6 border border-ocean-700">
                            <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Victory & Freedom</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Dedicated to the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                Brave Souls of 1971
                            </span>
                        </h2>

                        <div className="relative p-8 rounded-2xl bg-ocean-900/40 border-l-4 border-red-500 backdrop-blur-sm">
                            <FaQuoteLeft className="text-4xl text-ocean-700 absolute -top-4 -left-4 bg-ocean-900 rounded-full p-2" />
                            <p className="text-xl md:text-2xl text-ocean-100 font-light italic leading-relaxed">
                                "The exhibition is dedicated to the brave souls and heroes of 1971, honoring their courage, sacrifice, and the triumph of our nation." <span className="text-2xl not-italic">🌟</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full max-w-md relative"
                    >
                        {/* Glow behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[60px] animate-pulse"></div>

                        <div className="relative aspect-square w-full">
                            <Image
                                src="/victory-freedom-fighter-vector.png"
                                alt="Freedom Fighter Vector Illustration"
                                fill
                                className="object-contain object-center transform hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Dedication;

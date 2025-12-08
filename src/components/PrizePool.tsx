'use client';

import { motion } from 'framer-motion';
import { FaCrown, FaMedal } from 'react-icons/fa';

const PrizePool = () => {
    return (
        <section id="prizes" className="py-20 bg-ocean-900 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Prize <span className="text-accent">Pool</span>
                    </h2>
                    <p className="text-ocean-300">
                        Exciting rewards await the winners.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* 2nd Place */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-ocean-800 rounded-xl p-8 border border-ocean-700 text-center order-2 md:order-1 hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="text-silver-400 text-5xl mb-4 mx-auto w-16 h-16 flex items-center justify-center bg-ocean-900 rounded-full shadow-lg">
                            <FaMedal className="text-gray-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Runner Up</h3>
                        <div className="text-3xl font-extrabold text-accent mb-4">৳ 3,000</div>
                        <ul className="text-ocean-300 text-sm space-y-2">
                            <li>Certificate</li>
                            <li>Crest</li>
                            <li>T-Shirt</li>
                        </ul>
                    </motion.div>

                    {/* 1st Place */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-b from-ocean-700 to-ocean-800 rounded-xl p-10 border-2 border-accent text-center order-1 md:order-2 transform scale-105 shadow-2xl shadow-accent/10"
                    >
                        <div className="text-yellow-400 text-6xl mb-6 mx-auto w-20 h-20 flex items-center justify-center bg-ocean-900 rounded-full shadow-lg border border-accent">
                            <FaCrown />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Champion</h3>
                        <div className="text-5xl font-extrabold text-accent mb-6">৳ 5,000</div>
                        <ul className="text-ocean-300 space-y-2">
                            <li>Certificate</li>
                            <li>Crest</li>
                            <li>T-Shirt</li>
                            <li>Feature in Magazine</li>
                        </ul>
                    </motion.div>

                    {/* 3rd Place */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-ocean-800 rounded-xl p-8 border border-ocean-700 text-center order-3 md:order-3 hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="text-amber-600 text-5xl mb-4 mx-auto w-16 h-16 flex items-center justify-center bg-ocean-900 rounded-full shadow-lg">
                            <FaMedal className="text-[#cd7f32]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">2nd Runner Up</h3>
                        <div className="text-3xl font-extrabold text-accent mb-4">৳ 2,000</div>
                        <ul className="text-ocean-300 text-sm space-y-2">
                            <li>Certificate</li>
                            <li>Crest</li>
                            <li>T-Shirt</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrizePool;

'use client';

import { motion } from 'framer-motion';
import { FaCameraRetro } from 'react-icons/fa';

const Theme = () => {
    return (
        <section className="py-24 bg-ocean-900 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block p-4 mb-6 rounded-full bg-ocean-800 border-2 border-accent/20 shadow-[0_0_30px_rgba(100,255,218,0.1)]">
                        <FaCameraRetro className="text-4xl text-accent" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
                        The Theme is <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Open</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-ocean-300 max-w-3xl mx-auto leading-relaxed font-light">
                        This is your moment to freeze time, capture emotions, and share your unique perspective with the world. <br />
                        <span className="text-white font-medium">Whether you are an amateur or a professional, this is the platform to define your creativity.</span>
                    </p>

                    <div className="mt-12 flex justify-center">
                        <div className="h-20 w-px bg-gradient-to-b from-accent to-transparent"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Theme;

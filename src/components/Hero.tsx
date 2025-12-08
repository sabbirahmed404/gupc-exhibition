'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-ocean-900 pb-20 pt-20 sm:pb-0 sm:pt-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-banner.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                    sizes="100vw"
                    quality={90}
                />
                {/* Blue Overlay to keep theme consistency */}
                <div className="absolute inset-0 bg-ocean-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-transparent to-ocean-900"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center will-change-transform"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-ocean-800/80 backdrop-blur-sm border border-ocean-600 text-accent text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wide uppercase">
                        Victory Day • 16 December
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                        <span className="block mb-1 sm:mb-2">Capturing the Spirit of</span>
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block pb-2">
                            Victory & Freedom
                        </span>
                    </h1>
                    <p className="mt-2 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-ocean-100 font-medium px-4">
                        Join the GUPC Photography Exhibition 2025. A celebration of creativity, history, and the art of photography.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-ocean-200 text-sm sm:text-base font-medium"
                    >
                        <div className="flex items-center gap-2 bg-ocean-900/30 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
                            <FaCalendarAlt className="text-accent" />
                            <span>16 December 2025</span>
                        </div>
                        <div className="hidden sm:block text-ocean-500">•</div>
                        <div className="flex items-center gap-2 bg-ocean-900/30 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
                            <FaMapMarkerAlt className="text-accent" />
                            <span>Green University Premise</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-8 sm:mt-12 flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center px-4 sm:px-0"
                    >
                        <a
                            href="https://forms.gle/8MGvfYYTC8LmadzYA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-accent text-ocean-900 font-bold rounded-xl shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-base sm:text-lg"
                        >
                            Submit Your Photo
                        </a>
                        <a
                            href="https://www.facebook.com/wearegupc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 flex items-center justify-center text-base sm:text-lg"
                        >
                            Socials
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-ocean-300/50 flex justify-center p-2">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-1.5 h-1.5 rounded-full bg-accent mb-1"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

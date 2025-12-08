'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ocean-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://scontent.fdac182-1.fna.fbcdn.net/v/t39.30808-6/497853475_1076962561134819_6069166211084725257_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=b86NfME2vk8Q7kNvwEKl2qW&_nc_oc=Admt00332a7voplsA8qL1lJiZ4C6jrLdGOAJTYLIPKdqAgFalmwFHSvfq12vDenAKbU&_nc_zt=23&_nc_ht=scontent.fdac182-1.fna&_nc_gid=TSMr9zoNPeyNQyU12Hw04w&oh=00_AfliIZ4o-gSbp8_thCwStNAydljBi9zqETnPi6RGgLiEHQ&oe=693CBD33"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Blue Overlay to keep theme consistency */}
                <div className="absolute inset-0 bg-ocean-900/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-transparent to-ocean-900"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-ocean-800 border border-ocean-600 text-accent text-sm font-semibold mb-6 tracking-wide">
                        VICTORY DAY • 16 DECEMBER
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                        <span className="block">Capturing the Spirit of</span>
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Victory & Freedom
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-ocean-300">
                        Join the GUPC Photography Exhibition 2025. A celebration of creativity, history, and the art of photography.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-ocean-300"
                    >
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-accent" />
                            <span>16 December 2025</span>
                        </div>
                        <div className="hidden sm:block text-ocean-600">•</div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-accent" />
                            <span>Green University Premise</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="https://forms.gle/8MGvfYYTC8LmadzYA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-accent text-ocean-900 font-bold rounded-lg shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                        >
                            Submit Your Photo
                        </a>
                        <a
                            href="https://www.facebook.com/wearegupc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-transparent border border-ocean-600 text-white font-semibold rounded-lg hover:bg-ocean-800 transition-colors duration-300 flex items-center justify-center"
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
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-ocean-300 flex justify-center p-2">
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

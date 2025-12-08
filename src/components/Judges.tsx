'use client';

import { motion } from 'framer-motion';
import { FaUserTie } from 'react-icons/fa';

const Judges = () => {
    // Placeholder data for judges
    const judges = [
        { name: "Rafiqul Islam", role: "Renowned Photographer", image: null },
        { name: "Sarah Ahmed", role: "Visual Artist", image: null },
        { name: "Tanvir Khan", role: "Photojournalist", image: null },
    ];

    return (
        <section id="judges" className="py-20 bg-ocean-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Honorable <span className="text-accent">Judges</span>
                    </h2>
                    <p className="text-ocean-300">
                        Your work will be evaluated by industry experts.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {judges.map((judge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-ocean-900 rounded-xl p-6 text-center border border-ocean-700 hover:border-accent transition-all duration-300 shadow-xl group"
                        >
                            <div className="w-32 h-32 mx-auto bg-ocean-700 rounded-full flex items-center justify-center mb-6 overflow-hidden border-4 border-ocean-600 group-hover:border-accent transition-colors duration-300">
                                <FaUserTie className="text-5xl text-ocean-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{judge.name}</h3>
                            <p className="text-accent text-sm uppercase tracking-wider">{judge.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Judges;

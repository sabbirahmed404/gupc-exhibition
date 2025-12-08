'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaUserGraduate, FaUsers } from 'react-icons/fa';

const Exhibition = () => {
    const categories = [
        {
            icon: <FaUserGraduate />,
            title: "Student Category",
            description: "Exclusive for Green University students. Show your campus spirit and creative eye.",
            color: "text-blue-400"
        },
        {
            icon: <FaUsers />,
            title: "Outsider Category",
            description: "Open to photographers from all over Bangladesh. Compete with the best.",
            color: "text-cyan-400"
        }
    ];

    return (
        <section id="exhibition" className="py-20 bg-ocean-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        The <span className="text-accent">Exhibition</span>
                    </h2>
                    <p className="text-ocean-300 max-w-2xl mx-auto">
                        A platform for everyone. Whether you are a student or a professional, there is a place for your art.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-ocean-800 rounded-xl p-8 border border-ocean-700 hover:border-accent/50 transition-colors duration-300 group"
                        >
                            <div className={`text-5xl ${cat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{cat.title}</h3>
                            <p className="text-ocean-300 leading-relaxed mb-6">
                                {cat.description}
                            </p>
                            <ul className="space-y-2 text-sm text-ocean-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Attractive Prize Pool
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Certificate of Appreciation
                                </li>
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-ocean-700 to-ocean-800 rounded-2xl p-8 md:p-12 text-center border border-ocean-600 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <FaTrophy className="text-9xl text-white" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Showcase Your Talent?</h3>
                    <p className="text-ocean-300 mb-8 max-w-xl mx-auto">
                        Don't miss this opportunity to have your work displayed at Green University premises.
                        Submission deadline is fast approaching!
                    </p>
                    <a
                        href="https://forms.gle/8MGvfYYTC8LmadzYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-accent text-ocean-900 font-bold rounded-lg hover:bg-white transition-colors duration-300 shadow-lg inline-block"
                    >
                        Submit Photos Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Exhibition;

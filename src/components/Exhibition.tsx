'use client';

import { motion } from 'framer-motion';
import { FaCalendarCheck, FaImage, FaInfoCircle, FaFileUpload, FaGlobe, FaIdCard, FaClock, FaTrophy, FaExclamationTriangle } from 'react-icons/fa';

const Exhibition = () => {
    const categories = [
        {
            icon: <FaImage />,
            title: "Single Photo Section",
            description: "Theme: Open | Medium: DSLR / Mobile / PNS",
            color: "text-blue-400",
            details: [
                "Max 2 photos per participant",
                "Color and Black & White allowed",
                "Minor editing (burning, dodging, color correction, cropping) allowed",
                "HDR and minor composites allowed (all elements must be original)"
            ]
        }
    ];

    return (
        <section id="exhibition" className="py-20 bg-ocean-900 relative border-t border-ocean-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Exhibition <span className="text-accent">Details</span>
                    </h2>

                    {/* Timeline */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
                        <div className="bg-ocean-800/50 px-6 py-3 rounded-lg border border-ocean-700 backdrop-blur-sm">
                            <span className="block text-accent text-sm font-semibold uppercase tracking-wider mb-1">Status</span>
                            <span className="text-white font-bold flex items-center gap-2 relative">
                                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Open Now
                            </span>
                        </div>
                        <div className="bg-ocean-800/50 px-6 py-3 rounded-lg border border-ocean-700 backdrop-blur-sm">
                            <span className="block text-accent text-sm font-semibold uppercase tracking-wider mb-1">Submission Deadline</span>
                            <span className="text-white font-bold flex items-center gap-2"><FaClock className="text-ocean-400" /> 14 December 2025</span>
                        </div>
                        <div className="bg-ocean-800/50 px-6 py-3 rounded-lg border border-ocean-700 backdrop-blur-sm">
                            <span className="block text-accent text-sm font-semibold uppercase tracking-wider mb-1">Mark Your Calendar</span>
                            <span className="text-white font-bold flex items-center gap-2"><FaCalendarCheck className="text-ocean-400" /> 17 - 21 December 2025</span>
                        </div>
                    </div>
                </motion.div>

                {/* Awards Info (Replacing PrizePool) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-ocean-800 to-ocean-700 p-8 rounded-2xl border border-accent/20 text-center max-w-4xl mx-auto mb-16 shadow-lg shadow-accent/5"
                >
                    <div className="inline-block p-3 bg-ocean-900 rounded-full mb-4">
                        <FaTrophy className="text-3xl text-yellow-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Awards & Recognition</h3>
                    <p className="text-ocean-200 text-lg">
                        All selected photographs will be showcased at the exhibition, and each will receive a certificate. <br className="hidden md:block" />
                        <span className="text-accent font-semibold">The top 3 photographs will receive special Awards.</span>
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16 max-w-3xl mx-auto">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-ocean-800 rounded-2xl p-8 border border-ocean-700 hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className={`text-5xl ${cat.color} p-4 bg-ocean-900 rounded-xl`}>{cat.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                                    <p className="text-ocean-300 mb-4 font-medium">{cat.description}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                        {cat.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-ocean-200 text-sm">
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                                                <span className="leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info Grid: Eligibility, Specs, Terms */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Eligibility & Specs */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-ocean-800/50 p-6 rounded-xl border border-ocean-700"
                        >
                            <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                                <FaGlobe className="text-accent" /> Eligibility
                            </h4>
                            <ul className="space-y-3 text-ocean-300 text-sm">
                                <li className="flex items-center gap-2 font-medium text-white">
                                    <FaIdCard className="text-ocean-500" />
                                    <span>Open to all current university students.</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-ocean-800/50 p-6 rounded-xl border border-ocean-700"
                        >
                            <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                                <FaFileUpload className="text-accent" /> Submission Specs
                            </h4>
                            <div className="space-y-4 text-sm text-ocean-300">
                                <div>
                                    <strong className="text-white block mb-1">File Naming (Strictly Follow):</strong>
                                    <code className="block bg-black/30 p-2 rounded text-xs text-accent break-all font-mono">
                                        ParticipantName__MobileNo_Institution_SerialNo
                                    </code>
                                    <p className="text-xs text-ocean-400 mt-1">e.g., Sadman__0193999999_Green University_01</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <strong className="text-white block">Format</strong>
                                        JPEG / JPG Only
                                    </div>
                                    <div>
                                        <strong className="text-white block">Size Limit</strong>
                                        Max 10 MB per file
                                    </div>
                                    <div>
                                        <strong className="text-white block">Resolution</strong>
                                        Min 3000px (Longest side)
                                    </div>
                                </div>
                                <p className="text-red-400 text-xs mt-2 italic">
                                    * No watermarks, borders, or signatures allowed.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex flex-col gap-8 h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-ocean-800/50 p-6 rounded-xl border border-ocean-700 flex-1"
                        >
                            <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                                <FaInfoCircle className="text-accent" /> Terms & Conditions
                            </h4>
                            <ul className="space-y-3 text-ocean-300 text-sm list-disc pl-5 marker:text-ocean-500">
                                <li>The Judges' decision regarding selection and winners is final.</li>
                                <li>Photos must be the sole work of the participant.</li>
                                <li>No obscene, politically sensitive, or inappropriate content.</li>
                                <li>GUPC reserves the right to verify source material authenticity.</li>
                                <li>Photos may be used for promotional purposes (non-commercial).</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-red-900/10 p-4 rounded-xl border border-red-500/20"
                        >
                            <h4 className="flex items-center gap-2 text-sm font-bold text-red-300 mb-2">
                                <FaExclamationTriangle /> Right to Modify
                            </h4>
                            <p className="text-xs text-red-200/70 leading-relaxed">
                                GUPC reserves the right to cancel, modify, or disqualify entries if circumstances beyond control affect fairness or security.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://forms.gle/8MGvfYYTC8LmadzYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-ocean-900 font-bold rounded-xl hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-accent/20 text-lg"
                    >
                        Submit Your Entry Now <FaFileUpload />
                    </a>

                    <p className="mt-8 text-ocean-400 text-sm max-w-2xl mx-auto italic">
                        "The exhibition is dedicated to the brave souls and heroes of 1971, honoring their courage, sacrifice, and the triumph of our nation." 🌟
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Exhibition;

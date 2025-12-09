'use client';

import { motion } from 'framer-motion';
import { FaCalendarCheck, FaImage, FaImages, FaInfoCircle, FaFileUpload, FaGlobe, FaIdCard, FaClock } from 'react-icons/fa';

const Exhibition = () => {
    const categories = [
        {
            icon: <FaImage />,
            title: "Single Photo Section",
            description: "Submit your best individual shots.",
            color: "text-blue-400",
            details: [
                "Max 10 photos per participant",
                "Color and Black & White allowed",
                "Minor editing (burning, dodging, color correction, cropping) allowed",
                "HDR and minor composites allowed (all elements must be original)"
            ]
        },
        {
            icon: <FaImages />,
            title: "Photo Story Section",
            description: "Tell a compelling story through a series of photos.",
            color: "text-cyan-400",
            details: [
                "6 to 10 photos per story",
                "Max 2 Photo Stories per participant",
                "Coherent theme required",
                "Digital manipulation allowed for creativity (all elements must be original)"
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

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-ocean-800 rounded-2xl p-8 border border-ocean-700 hover:border-accent/30 transition-all duration-300"
                        >
                            <div className={`text-4xl ${cat.color} mb-6`}>{cat.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                            <p className="text-ocean-300 mb-6">{cat.description}</p>
                            <ul className="space-y-3">
                                {cat.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-ocean-200 text-sm">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>
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
                                <li className="flex items-start gap-2">
                                    <FaIdCard className="mt-1 text-ocean-500" />
                                    <span>Open to anyone from Bangladesh.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaInfoCircle className="mt-1 text-ocean-500" />
                                    <span>Proof of eligibility (ID/NID) may be requested.</span>
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
                                    <code className="block bg-black/30 p-2 rounded text-xs text-accent break-all">
                                        Institution_ParticipantName_Category_MobileNo_SerialNo
                                    </code>
                                    <p className="text-xs text-ocean-400 mt-1">e.g., GUB_Sadman Sakib_Single_017########_01</p>
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
                                    <div>
                                        <strong className="text-white block">DPI</strong>
                                        Min 300 recommended
                                    </div>
                                </div>
                                <p className="text-red-400 text-xs mt-2 italic">
                                    * No watermarks, borders, or signatures allowed.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Terms & Conditions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-ocean-800/50 p-6 rounded-xl border border-ocean-700 h-full"
                    >
                        <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                            <FaInfoCircle className="text-accent" /> Terms & Conditions
                        </h4>
                        <ul className="space-y-3 text-ocean-300 text-sm list-disc pl-5 marker:text-ocean-500">
                            <li>Previously exhibited photos are discouraged.</li>
                            <li>Photos must be the sole work of the participant.</li>
                            <li>No obscene, politically sensitive, or inappropriate content.</li>
                            <li>GUPC reserves the right to verify source material authenticity.</li>
                            <li>Photos may be used for promotional purposes (non-commercial).</li>
                            <li>Judges' decision is final and binding.</li>
                        </ul>
                    </motion.div>
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
                </motion.div>
            </div>
        </section>
    );
};

export default Exhibition;

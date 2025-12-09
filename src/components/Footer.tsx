'use client';

import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="bg-ocean-900 border-t border-ocean-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">GUPC</h3>
                        <p className="text-ocean-300 mb-6">
                            Green University Photography Club.
                            Capturing moments, creating memories.
                        </p>
                        <p className="text-sm text-ocean-400">
                            Green University of Bangladesh<br />
                            Purbachal American City, Rupganj, Narayanganj
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-ocean-300">
                            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#exhibition" className="hover:text-accent transition-colors">Exhibition 2025</a></li>
                            <li><a href="#judges" className="hover:text-accent transition-colors">Judges</a></li>
                            <li><a href="#prizes" className="hover:text-accent transition-colors">Prizes</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://www.facebook.com/wearegupc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center text-white hover:bg-accent hover:text-ocean-900 transition-all duration-300">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center text-white hover:bg-accent hover:text-ocean-900 transition-all duration-300">
                                <FaInstagram />
                            </a>
                        </div>
                        <div className="space-y-2 text-ocean-300">
                            <a href="mailto:photography.clubs@green.edu.bd" className="flex items-center gap-2 hover:text-white transition-colors">
                                <FaEnvelope /> photography.clubs@green.edu.bd
                            </a>
                            <a href="tel:+8801518788759" className="flex items-center gap-2 hover:text-white transition-colors">
                                <FaPhone /> +880 1518-788759
                            </a>
                            <div className="text-xs text-ocean-500 pl-6">(Jamil - Organizing Secretary)</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-ocean-800 pt-8 text-center">
                    <p className="text-ocean-400 text-sm">
                        &copy; {new Date().getFullYear()} Green University Photography Club. All rights reserved.
                    </p>
                    <p className="text-ocean-600 text-xs mt-2">
                        Developed by GUPC Tech Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

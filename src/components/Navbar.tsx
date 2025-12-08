'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Exhibition', href: '#exhibition' },
        { name: 'Judges', href: '#judges' },
        { name: 'Contact', href: '#footer' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-ocean-900/80 backdrop-blur-md border-b border-ocean-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center space-x-3">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/gupc-logo.png"
                                    alt="GUPC Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-ocean-50 font-bold text-lg tracking-wider">GUPC</span>
                        </Link>
                        <div className="hidden md:block w-px h-6 bg-ocean-600 mx-2"></div>
                        <div className="hidden md:flex items-center text-ocean-300 text-xs font-medium uppercase tracking-widest">
                            Green University Photography Club
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-ocean-300 hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                            ))}
                            <a
                                href="https://forms.gle/8MGvfYYTC8LmadzYA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border border-accent text-accent hover:bg-accent/10 transition-colors px-4 py-1.5 rounded-full text-sm font-medium"
                            >
                                Submit Photo
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-ocean-300 hover:text-white hover:bg-ocean-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <HiX className="block h-6 w-6" /> : <HiMenu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-ocean-800 border-b border-ocean-700 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-ocean-300 hover:text-white hover:bg-ocean-700 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://forms.gle/8MGvfYYTC8LmadzYA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-left text-accent hover:bg-ocean-700 px-3 py-2 rounded-md text-base font-medium block"
                            >
                                Submit Photo
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

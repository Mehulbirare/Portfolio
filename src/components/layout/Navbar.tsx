"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Terminal className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-heading font-black text-xl tracking-tighter">
                            MEHUL<span className="text-primary">.</span>B
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-muted hover:text-primary transition-colors font-medium text-sm tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="px-5 py-2 rounded-full border border-primary/50 text-primary text-sm font-bold hover:bg-primary hover:text-background transition-all">
                            Resume
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            className="absolute top-8 right-8 p-2 text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-bold font-heading hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button className="mt-8 px-8 py-4 rounded-full border-2 border-primary text-primary text-xl font-bold hover:bg-primary hover:text-background transition-all">
                            Download Resume
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

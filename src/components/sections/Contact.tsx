"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Sparkles } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary uppercase tracking-widest mb-4">
                        <Sparkles className="w-3 h-3" /> Let&apos;s Build Something Extraordinary
                    </div>
                    <h2 className="text-4xl md:text-8xl font-bold font-heading">
                        Need a <span className="neon-gradient">Founder</span>-Level Engineer?
                    </h2>
                </motion.div>

                <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                    I&apos;m currently open to high-impact projects and full-time opportunities
                    that demand excellence in React Native and Web Engineering.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                    <motion.a
                        href="mailto:mehulbirare6810@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 bg-white text-background font-black rounded-2xl flex items-center gap-3 overflow-hidden"
                    >
                        <Mail className="w-5 h-5" /> me@mehulbirare.com
                        <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/mehul-b-22a95831b"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 glass-card border border-white/10 font-bold flex items-center gap-3 hover:bg-white/5 transition-colors rounded-2xl"
                    >
                        <Linkedin className="w-5 h-5" /> LinkedIn
                    </motion.a>

                    <motion.a
                        href="https://github.com/Mehulbirare"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 glass-card border border-white/10 font-bold flex items-center gap-3 hover:bg-white/5 transition-colors rounded-2xl"
                    >
                        <Github className="w-5 h-5" /> GitHub
                    </motion.a>
                </div>

                <div className="pt-20 border-t border-white/5 mt-20 flex flex-col md:flex-row items-center justify-between gap-8 text-muted text-sm font-mono">
                    <div>© 2026 MEHUL BIRARE. SHIPS FROM SURAT, IN.</div>
                    <div className="flex gap-8">
                        <a href="https://github.com/Mehulbirare" target="_blank" className="hover:text-primary transition-colors">GITHUB</a>
                        <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
                        <a href="#" className="hover:text-primary transition-colors">RESUME</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

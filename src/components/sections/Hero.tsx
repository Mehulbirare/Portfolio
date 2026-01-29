"use client";

import { motion } from "framer-motion";
import { MoveRight, Download } from "lucide-react";
import HeroBackground from "../canvas/HeroBackground";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
            <HeroBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl z-10"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6 backdrop-blur-sm animate-pulse">
                    AVAILABLE FOR NEW PROJECTS
                </span>

                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
                    I build <span className="neon-gradient">production-ready</span> mobile apps and <span className="text-gradient">cinematic</span> web experiences.
                </h1>

                <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body">
                    React Native & Full-Stack Developer crafting next-gen digital products with
                    <span className="text-white"> startup-grade engineering</span> and
                    <span className="text-white"> UI obsession</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-primary text-background font-bold rounded-lg flex items-center gap-2 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Case Studies <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 glass-card font-bold border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-colors"
                    >
                        Contact Me
                    </motion.button>
                </div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-1 h-10 rounded-full bg-gradient-to-b from-primary to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}

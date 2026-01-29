"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="w-24 h-24 rounded-full border-2 border-primary border-t-transparent animate-spin"
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 font-mono text-sm tracking-[0.3em] text-primary uppercase animate-pulse"
            >
                Initializing Cinematic Experience...
            </motion.p>
        </div>
    );
}

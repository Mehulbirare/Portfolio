"use client";

import { motion } from "framer-motion";
import { Terminal, Command, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function TerminalOverlay() {
    const [logs, setLogs] = useState<string[]>([]);
    const initialLogs = [
        "Initializing Mehul.B portfolio...",
        "Loading React Native modules...",
        "Syncing Three.js assets...",
        "Optimizing UI/UX layers...",
        "Status: System ready.",
        "> Developer mode enabled"
    ];

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            if (current < initialLogs.length) {
                setLogs(prev => [...prev, initialLogs[current]]);
                current++;
            } else {
                clearInterval(interval);
            }
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-40 hidden xl:block">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-4 w-72 border border-white/5 shadow-2xl overflow-hidden"
            >
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">System Logs</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                    </div>
                </div>

                <div className="space-y-1.5 h-32 overflow-y-auto font-mono text-[10px]">
                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-2"
                        >
                            <span className="text-primary/50">#</span>
                            <span className={i === logs.length - 1 ? "text-primary" : "text-white/60"}>
                                {log}
                            </span>
                        </motion.div>
                    ))}
                    {logs.length === initialLogs.length && (
                        <div className="flex items-center gap-1">
                            <span className="text-primary animate-pulse"><ChevronRight className="w-2 h-2" /></span>
                            <span className="w-1 h-3 bg-primary animate-pulse" />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

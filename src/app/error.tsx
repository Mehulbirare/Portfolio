"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="glass-card p-12 max-w-lg w-full text-center space-y-8 border-red-500/20">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold font-heading">System Override Error</h2>
                    <p className="text-muted leading-relaxed font-body">
                        An unexpected error occurred while rendering the cinematic experience.
                        This usually happens due to a network interruption or HMR mismatch.
                    </p>
                    <div className="p-4 bg-black/40 rounded-lg text-xs font-mono text-red-400 overflow-x-auto">
                        {error.message || "Failed to fetch resource"}
                    </div>
                </div>

                <button
                    onClick={() => reset()}
                    className="w-full py-4 bg-white text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                >
                    <RefreshCcw className="w-4 h-4" /> REBOOT SYSTEM
                </button>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        finishLoading();
                    }, 500); // Wait half a second after 100% to transition out
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 5; // incremental loading
            });
        }, 100);

        return () => clearInterval(interval);
    }, [finishLoading]);

    return (
        <motion.div
            className="fixed inset-0 bg-dark z-[99999] flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="flex flex-col items-center max-w-xs w-full px-6">
                {/* Logo Initials Icon */}
                <div className="relative mb-8">
                    <motion.div
                        className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center border border-white/10 glow-primary"
                        initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="font-display font-extrabold text-3xl text-white tracking-tighter">DRR</span>
                    </motion.div>
                    
                    {/* Ring Pulse */}
                    <motion.div
                        className="absolute -inset-2 rounded-3xl border border-primary/20"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div>

                {/* Animated Name */}
                <motion.h1
                    className="font-display font-bold text-xl text-white tracking-widest uppercase mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Dhanunjai Raghu Ram
                </motion.h1>

                {/* Loading Progress Bar */}
                <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-2 relative">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary via-accent to-emerald-400"
                        initial={{ width: "0%" }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>

                {/* Progress Text */}
                <motion.div
                    className="font-mono text-xs text-gray-500 flex justify-between w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.2 }}
                >
                    <span>INITIALIZING SYSTEM</span>
                    <span>{Math.min(progress, 100)}%</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;

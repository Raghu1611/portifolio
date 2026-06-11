import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 border-t border-black/[0.05] dark:border-white/[0.05] bg-white dark:bg-dark relative overflow-hidden transition-colors duration-300">
            {/* Grid overlay for aesthetic backdrop */}
            <div className="absolute inset-0 bg-grid-black/[0.01] dark:bg-grid-white/[0.01] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="font-display font-black text-lg tracking-tighter text-black dark:text-white flex items-center gap-1.5">
                        <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-[10px] font-black">DR</span>
                        Dhanunjai Raghu Ram
                    </div>
                    <p className="text-gray-500 dark:text-gray-500 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} All rights reserved. Crafted with React, Tailwind CSS, & Framer Motion.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a 
                        href="https://github.com/Raghu1611" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] text-gray-500 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 hover:scale-105"
                        aria-label="GitHub Profile"
                    >
                        <Github size={18} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/gonuguntla-dhanunjai-raghu-ram-62b957289" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] text-gray-500 hover:text-primary hover:border-primary/20 transition-all duration-300 hover:scale-105"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a 
                        href="mailto:2200032009cseh@gmail.com" 
                        className="p-2.5 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] text-gray-500 hover:text-accent hover:border-accent/20 transition-all duration-300 hover:scale-105"
                        aria-label="Send Email"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

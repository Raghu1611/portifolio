import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Dhanunjal Raghu Ram. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Raghu1611" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
                    <a href="mailto:2200032009cseh@gmail.com" className="text-gray-500 hover:text-white transition-colors text-sm">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

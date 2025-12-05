import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl mb-8 flex justify-between items-center"
            >
                <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
                <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 px-6 py-2 bg-primary text-black rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                    <Download size={20} />
                    Download Resume
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-4xl h-[80vh] bg-white/5 rounded-xl overflow-hidden border border-white/10"
            >
                <iframe
                    src="/resume.pdf"
                    className="w-full h-full"
                    title="Resume"
                />
            </motion.div>
        </div>
    );
};

export default Resume;

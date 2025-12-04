import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed bottom-8 right-8 z-40"
                >
                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-primary text-white shadow-lg hover:bg-blue-600 transition-colors focus:outline-none"
                    >
                        <ArrowUp size={24} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;

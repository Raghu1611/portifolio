import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Check theme setup
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newDarkState = !isDark;
        setIsDark(newDarkState);
        if (newDarkState) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    };

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled 
                ? 'py-3 bg-white/70 dark:bg-dark/70 backdrop-blur-md border-b border-black/[0.05] dark:border-white/[0.05] shadow-[0_2px_20px_rgba(0,0,0,0.02)]' 
                : 'py-5 bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer">
                        {isHomePage ? (
                            <Link to="hero" smooth={true} duration={500} className="font-display text-xl font-extrabold tracking-tighter text-black dark:text-white flex items-center gap-1.5 hover:opacity-85 transition-opacity">
                                <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-sm font-black">DR</span>
                                <span className="hidden sm:inline">Dhanunjai.</span>
                            </Link>
                        ) : (
                            <RouterLink to="/" className="font-display text-xl font-extrabold tracking-tighter text-black dark:text-white flex items-center gap-1.5 hover:opacity-85 transition-opacity">
                                <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-sm font-black">DR</span>
                                <span className="hidden sm:inline">Dhanunjai.</span>
                            </RouterLink>
                        )}
                    </div>

                    {/* Navigation Items (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        {isHomePage && navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                activeClass="text-primary dark:text-primary font-semibold"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors relative py-1"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {!isHomePage && (
                            <RouterLink
                                to="/"
                                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                Home
                            </RouterLink>
                        )}

                        <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10" />

                        {/* Theme Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
                            aria-label="Toggle Theme"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isDark ? "dark" : "light"}
                                    initial={{ y: -10, opacity: 0, rotate: 45 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: 10, opacity: 0, rotate: -45 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        {/* Resume CTA */}
                        <RouterLink
                            to="/resume"
                            className="relative group overflow-hidden px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:opacity-90 transition-all border border-black/10 dark:border-white/10"
                        >
                            <span className="relative z-10">Resume</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-primary/10 to-accent/10 transition-transform duration-300" />
                        </RouterLink>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-dark border-b border-black/[0.05] dark:border-white/[0.05] shadow-lg"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {isHomePage && navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointer block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {!isHomePage && (
                                <RouterLink
                                    to="/"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                                >
                                    Home
                                </RouterLink>
                            )}
                            <RouterLink
                                to="/resume"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center mt-4 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold shadow-md"
                            >
                                View Resume
                            </RouterLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Indicator Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-emerald-400 origin-left"
                style={{ scaleX }}
            />
        </nav>
    );
};

export default Navbar;

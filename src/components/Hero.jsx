import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10 opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm md:text-base font-medium tracking-wider text-primary mb-4 uppercase">
                        Portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Dhanunjal Raghu Ram
                    </h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.03,
                                    delayChildren: 0.5
                                }
                            }
                        }}
                    >
                        {Array.from("Full-Stack MERN Developer").map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <span className="text-gray-600 mx-2 inline-block">|</span>
                        {Array.from("Java Enthusiast").map((char, index) => (
                            <motion.span
                                key={index + 100}
                                className="inline-block"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.p>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
                        "I build fast, modern and intelligent web experiences — from real-time chat systems to AI-powered resume analyzers."
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="group cursor-pointer px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <RouterLink
                            to="/resume"
                            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            <Download size={18} />
                            View Resume
                        </RouterLink>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            <Mail size={18} />
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

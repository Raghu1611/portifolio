import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, Download, Mail, Award, BookOpen, Briefcase, Cpu } from 'lucide-react';

const Hero = () => {
    // Stats array for rendering cards
    const stats = [
        { 
            label: "Academic Score", 
            value: "9.4 CGPA", 
            sub: "KL University",
            icon: <BookOpen className="text-primary" size={20} /> 
        },
        { 
            label: "Featured Work", 
            value: "3+ Projects", 
            sub: "Full-Stack & AI",
            icon: <Award className="text-accent" size={20} /> 
        },
        { 
            label: "Experience", 
            value: "Internship", 
            sub: "Clothovia Remote",
            icon: <Briefcase className="text-emerald-500" size={20} /> 
        },
        { 
            label: "Generative AI", 
            value: "LLM & QLoRA", 
            sub: "Fine-Tuning Skills",
            icon: <Cpu className="text-purple-400" size={20} /> 
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 bg-white dark:bg-dark">
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 dark:opacity-40" />
            <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[50%] bg-accent/10 rounded-full blur-[150px] pointer-events-none -z-10 dark:opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Text Details Area */}
                    <motion.div 
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Status Badge */}
                        <motion.div 
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Available for Internship & Full-Time Opportunities
                        </motion.div>

                        {/* Title */}
                        <motion.h1 
                            variants={itemVariants}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black dark:text-white mb-4 leading-none"
                        >
                            Dhanunjai <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-emerald-400">Raghu Ram</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.h2 
                            variants={itemVariants}
                            className="text-lg sm:text-xl md:text-2xl font-display font-medium text-gray-700 dark:text-gray-300 mb-6 flex flex-wrap justify-center lg:justify-start gap-x-2 divide-x divide-black/10 dark:divide-white/10"
                        >
                            <span className="px-2 first:pl-0 text-primary font-semibold">Software Engineer</span>
                            <span className="px-2 text-accent font-semibold">Full Stack Developer</span>
                            <span className="px-2 text-emerald-500 font-semibold">Generative AI Enthusiast</span>
                        </motion.h2>

                        {/* Description Summary */}
                        <motion.p 
                            variants={itemVariants}
                            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
                        >
                            Computer Science graduate with hands-on experience building scalable full-stack applications using React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL. Experienced in Generative AI, LLM fine-tuning, and AI-powered application development. Passionate about creating exceptional user experiences and solving real-world business problems through technology.
                        </motion.p>

                        {/* Call to Actions (CTAs) */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12 w-full"
                        >
                            <Link
                                to="projects"
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="group cursor-pointer px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-black/10 dark:shadow-none"
                            >
                                View Projects
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <RouterLink
                                to="/resume"
                                className="px-6 py-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] text-black dark:text-white font-semibold transition-all flex items-center gap-2 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm"
                            >
                                <Download size={16} />
                                View Resume
                            </RouterLink>

                            <Link
                                to="contact"
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="cursor-pointer px-6 py-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] text-black dark:text-white font-semibold transition-all flex items-center gap-2 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm"
                            >
                                <Mail size={16} />
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image Area with Premium Frames */}
                    <motion.div 
                        className="lg:col-span-5 flex justify-center order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="relative group cursor-default">
                            {/* Ambient Glowing Aura */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-accent to-emerald-400 rounded-[2.5rem] opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-10 animate-pulse" />

                            {/* Animated Glowing Outer Frame */}
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[2rem] p-[3px] bg-gradient-to-tr from-primary via-accent to-emerald-400 shadow-2xl animate-float overflow-hidden">
                                
                                {/* Inner Container */}
                                <div className="w-full h-full rounded-[1.8rem] bg-white dark:bg-dark overflow-hidden relative">
                                    <img
                                        src="/profile.jpg"
                                        alt="Dhanunjai Raghu Ram"
                                        className="w-full h-full object-cover transform scale-[1.01] hover:scale-105 transition-transform duration-500 object-top"
                                        loading="eager"
                                    />
                                    {/* Glass Overlay on Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Animated Stats Cards Grid */}
                <motion.div 
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 lg:mt-24 w-full"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: { staggerChildren: 0.1, delayChildren: 0.8 }
                        }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                            }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="p-5 rounded-2xl glass-card flex flex-col justify-between group relative overflow-hidden"
                        >
                            {/* Glow Line Top */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                                    {stat.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-display font-black text-2xl sm:text-3xl text-black dark:text-white mb-0.5 tracking-tight group-hover:text-primary transition-colors">
                                    {stat.value}
                                </h3>
                                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                    {stat.label}
                                </p>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 font-medium">
                                    {stat.sub}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

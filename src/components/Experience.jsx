import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Star } from 'lucide-react';

const Experience = () => {
    const highlights = [
        "Developed reusable React.js components for production applications, improving maintainability and code consistency.",
        "Converted Figma designs into pixel-perfect, highly responsive, production-ready frontend interfaces.",
        "Integrated REST APIs and managed complex asynchronous data flows across client-side modules.",
        "Diagnosed and resolved frontend bottlenecks, improving page responsiveness and user interaction speeds.",
        "Contributed to Generative AI initiatives, writing system prompts and developing custom AI agent workflows.",
        "Supported LLM fine-tuning tasks (Qwen 2.5) by preparing structured, domain-specific training datasets."
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <section id="experience" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-black dark:text-white mb-2">Professional Experience</h2>
                    <div className="h-1 bg-gradient-to-r from-primary to-accent w-16 mx-auto rounded-full" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">My industry contributions and internship roles</p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    
                    {/* Left border line representing timeline path */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-accent to-emerald-500/20 -translate-x-[1px] hidden md:block" />

                    {/* Timeline Node 1 */}
                    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                        
                        {/* Timeline Dot center */}
                        <div className="absolute left-4 md:left-1/2 top-10 w-8 h-8 rounded-full bg-white dark:bg-dark border-[4px] border-primary flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(0,122,255,0.4)] hidden md:flex">
                            <Star size={10} className="text-primary fill-primary animate-pulse" />
                        </div>

                        {/* Left column (Title details) */}
                        <motion.div 
                            className="md:col-span-5 md:text-right flex flex-col md:items-end justify-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-3">
                                <Calendar size={12} />
                                Mar 2026 – May 2026
                            </span>
                            <h3 className="font-display font-extrabold text-2xl text-black dark:text-white leading-tight">
                                Frontend Developer Intern
                            </h3>
                            <h4 className="font-display font-bold text-lg text-gray-700 dark:text-gray-300 mt-1">
                                Clothovia
                            </h4>
                            <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                <MapPin size={14} />
                                Remote (Kolkata, India)
                            </span>
                        </motion.div>

                        {/* Separator spacing */}
                        <div className="md:col-span-2 hidden md:block" />

                        {/* Right column (Highlights list) */}
                        <motion.div 
                            className="md:col-span-5"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="p-6 rounded-2xl glass-card relative group hover:border-primary/30 transition-all duration-300">
                                {/* Border highlights */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <h4 className="font-display font-bold text-base text-black dark:text-white mb-4 flex items-center gap-2">
                                    <Briefcase size={18} className="text-primary" />
                                    Key Accomplishments
                                </h4>

                                <ul className="space-y-3">
                                    {highlights.map((bullet, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            variants={itemVariants}
                                            className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                                        >
                                            <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                            <span>{bullet}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

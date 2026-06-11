import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Code, Zap, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
    const pillars = [
        {
            title: "Frontend-Focused Engineer",
            desc: "I specialize in building interfaces that are visually stunning, responsive, and performance-optimized. I have a deep appreciation for micro-interactions, layout consistency, and typography.",
            icon: <Code size={22} className="text-primary" />
        },
        {
            title: "Full-Stack System Architect",
            desc: "With Node.js, Express, and databases like MongoDB and MySQL, I build robust, structured backend APIs that implement role-based access control (RBAC), JWT sessions, and real-time streams.",
            icon: <Zap size={22} className="text-accent" />
        },
        {
            title: "Generative AI Developer",
            desc: "I bridge traditional software engineering with modern AI capabilities, fine-tuning LLMs (Qwen 2.5) using QLoRA on SageMaker and building custom AI agents and ATS scoring platforms.",
            icon: <Cpu size={22} className="text-emerald-400" />
        }
    ];

    const education = [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "KL University, Vijayawada, AP",
            duration: "2022 - 2026",
            result: "9.4 / 10 CGPA",
            details: "Specialized in Full Stack Development and Cloud Computing. Coursework includes Data Structures, DBMS, OOP, and Software Engineering."
        },
        {
            degree: "Intermediate Education (MPC)",
            institution: "Sri Chaitanya Junior College",
            duration: "2020 - 2022",
            result: "943 / 1000 Marks",
            details: "Focused on Mathematics, Physics, and Chemistry."
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-dark">
            {/* Soft Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-accent/5 rounded-full blur-[160px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-display font-black text-3xl sm:text-4xl text-black dark:text-white mb-2"
                    >
                        About Me
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Storytelling Column */}
                    <motion.div 
                        className="lg:col-span-6 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-display text-2xl font-bold text-black dark:text-white">
                            Solving real-world business challenges through <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">modern frontend architecture</span> & intelligent systems.
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            I am <span className="font-semibold text-black dark:text-white">Dhanunjai Raghu Ram</span>, a Computer Science engineer who lives at the intersection of pixel-perfect frontend development and scalable backend APIs. I am passionate about creating exceptional user experiences that feel clean, premium, and interactive.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            My journey is defined by continuous learning and adaptability. Whether building custom WebSockets in Socket.io to support real-time user chat, optimizing complex MongoDB queries, or fine-tuning Generative AI models like Qwen 2.5 on AWS SageMaker using QLoRA adapters, I aim for clean code and production-ready performance.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Instead of viewing coding as just syntax, I focus on the final business value—building high-conversion layouts, reducing rendering latency, and implementing robust authentication security protocols that protect user data.
                        </p>
                    </motion.div>

                    {/* Pillars Grid Column */}
                    <div className="lg:col-span-6 grid grid-cols-1 gap-6">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                whileHover={{ y: -4 }}
                                className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/[0.05] hover:border-primary/20 dark:hover:border-primary/20 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none flex gap-4"
                            >
                                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 h-fit">
                                    {pillar.icon}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-display font-bold text-lg text-black dark:text-white">
                                        {pillar.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h3 className="font-display text-2xl font-bold text-black dark:text-white">Education Milestones</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">My academic foundation and qualifications</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl glass-card flex flex-col justify-between group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-primary group-hover:opacity-10 transition-opacity">
                                    <GraduationCap size={80} />
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between items-start flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                                            <Calendar size={12} />
                                            {item.duration}
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-500">
                                            {item.result}
                                        </span>
                                    </div>
                                    <h4 className="font-display font-bold text-lg text-black dark:text-white leading-tight">
                                        {item.degree}
                                    </h4>
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        {item.institution}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
                                        {item.details}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Brain, Settings } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Engineering",
            icon: <Code2 size={24} className="text-primary" />,
            colorClass: "hover:border-primary/30 hover:bg-primary/[0.01]",
            skills: [
                { name: "React.js", level: "95%" },
                { name: "Next.js", level: "85%" },
                { name: "JavaScript", level: "90%" },
                { name: "HTML5 & CSS3", level: "95%" },
                { name: "Tailwind CSS", level: "95%" }
            ]
        },
        {
            title: "Backend Engineering",
            icon: <Server size={24} className="text-accent" />,
            colorClass: "hover:border-accent/30 hover:bg-accent/[0.01]",
            skills: [
                { name: "Node.js", level: "88%" },
                { name: "Express.js", level: "90%" },
                { name: "REST APIs", level: "92%" }
            ]
        },
        {
            title: "Databases",
            icon: <Database size={24} className="text-emerald-500" />,
            colorClass: "hover:border-emerald-500/30 hover:bg-emerald-500/[0.01]",
            skills: [
                { name: "MongoDB", level: "85%" },
                { name: "MySQL", level: "88%" }
            ]
        },
        {
            title: "AI & Machine Learning",
            icon: <Brain size={24} className="text-pink-500" />,
            colorClass: "hover:border-pink-500/30 hover:bg-pink-500/[0.01]",
            skills: [
                { name: "Prompt Engineering", level: "95%" },
                { name: "QLoRA", level: "80%" },
                { name: "LLM Fine-Tuning", level: "82%" },
                { name: "AI Agents", level: "85%" },
                { name: "AWS SageMaker", level: "75%" }
            ]
        },
        {
            title: "Developer Tools",
            icon: <Settings size={24} className="text-orange-500" />,
            colorClass: "hover:border-orange-500/30 hover:bg-orange-500/[0.01]",
            skills: [
                { name: "Git & GitHub", level: "90%" },
                { name: "Postman", level: "88%" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <section id="skills" className="py-24 bg-gray-50/30 dark:bg-dark-surface/10 relative overflow-hidden">
            {/* Ambient gradients */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-85 h-85 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-black dark:text-white mb-2">Technical Skills</h2>
                    <div className="h-1 bg-gradient-to-r from-primary to-accent w-16 mx-auto rounded-full" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto">
                        A catalog of frontend platforms, backend architectures, databases, tools, and generative artificial intelligence experience.
                    </p>
                </div>

                {/* Skills Cards Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className={`p-6 rounded-2xl bg-white dark:bg-[#0c0c0e]/60 border border-black/[0.04] dark:border-white/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.01)] dark:shadow-none transition-all duration-300 relative group overflow-hidden ${category.colorClass}`}
                        >
                            {/* Inner border line shine */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/10 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Header details */}
                            <div className="flex items-center gap-3.5 mb-6">
                                <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                                    {category.icon}
                                </div>
                                <h3 className="font-display font-bold text-lg text-black dark:text-white group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills progress list */}
                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="space-y-1.5">
                                        <div className="flex justify-between items-center text-xs font-semibold text-gray-700 dark:text-gray-300">
                                            <span>{skill.name}</span>
                                            <span className="font-mono text-gray-400">{skill.level}</span>
                                        </div>
                                        {/* Progress bar container */}
                                        <div className="w-full h-1.5 bg-black/[0.03] dark:bg-white/[0.04] rounded-full overflow-hidden relative">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-primary to-accent"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: idx * 0.05, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

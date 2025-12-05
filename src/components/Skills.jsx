import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["C", "Java", "JavaScript"]
        },
        {
            title: "Web Development",
            skills: ["MERN Stack", "React 18", "Node.js", "Express.js", "Tailwind CSS"]
        },
        {
            title: "Database",
            skills: ["MongoDB", "MySQL", "Mongoose", "MongoDB Atlas"]
        },
        {
            title: "Tools / DevOps",
            skills: ["Vercel", "Git/GitHub", "Cloudinary", "Razorpay"]
        },
        {
            title: "AI & Cloud",
            skills: ["Gemini Pro API", "pdf-parse", "Prompt Engineering"]
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, idx) => (
                                        <motion.span
                                            key={idx}
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)", borderColor: "rgba(255,255,255,0.2)" }}
                                            className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300 border border-white/5 cursor-default transition-colors"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

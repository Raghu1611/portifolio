import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="mb-8 flex justify-center">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                            <img
                                src="/profile.jpg"
                                alt="Dhanunjal Raghu Ram"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        I am <span className="text-white font-semibold">Dhanunjal Raghu Ram</span>, a final-year B.Tech student at <span className="text-primary font-semibold">KL University</span>, driven by a passion for building high-performance web applications.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        I specialize in the <span className="text-white font-semibold">MERN Stack (MongoDB, Express, React, Node.js)</span> and cloud deployment. My focus is on creating <span className="text-white font-semibold">fast, scalable, and real-time systems</span> that deliver exceptional user experiences. I don't just write code; I build robust solutions ready for production. I am eager to bring my expertise in full-stack development and AI integration to a dynamic team.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-20">
                        <motion.div
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-primary">Education</h3>
                            <p className="text-white font-medium">B.Tech, Final Year</p>
                            <p className="text-gray-400">KL University</p>
                            <p className="text-gray-400 mt-1">CGPA: <span className="text-white font-bold">9.4</span></p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-primary">Specialization</h3>
                            <p className="text-gray-400">MERN Stack</p>
                            <p className="text-gray-400">Java Development</p>
                            <p className="text-gray-400">Full-Stack Development</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-primary">Certifications</h3>
                            <p className="text-gray-400">RedHat Certified Enterprise Application Developer</p>
                            <p className="text-gray-400 mt-1">HackerRank SQL (Intermediate)</p>
                        </motion.div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">My Journey</h3>
                        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 space-y-12">
                            {[
                                {
                                    year: "2021 - Present",
                                    title: "B.Tech in Computer Science",
                                    institution: "KL University",
                                    description: "Pursuing my degree with a focus on Full Stack Development and Cloud Computing.",
                                    score: "CGPA: 9.4"
                                },
                                {
                                    year: "2019 - 2021",
                                    title: "Intermediate Education",
                                    institution: "Sri Chaitanya Junior College",
                                    description: "Completed intermediate education with a strong foundation in Mathematics, Physics, and Chemistry.",
                                    score: "94.3%"
                                },
                                {
                                    year: "2019 - 2020",
                                    title: "Secondary School Education",
                                    institution: "Sri Chaitanya School",
                                    description: "Completed 10th grade with academic excellence.",
                                    score: "10 CGPA"
                                },
                                {
                                    year: "Jun 2024 - Aug 2024",
                                    title: "AI-Powered Resume Analyzer",
                                    institution: "Major Project",
                                    description: "Built a smart resume tool using Google Gemini AI for ATS scoring and mock interviews. Features PDF parsing and real-time feedback.",
                                    score: null
                                },
                                {
                                    year: "Jan 2024 - Mar 2024",
                                    title: "Real-Time Chat App",
                                    institution: "Personal Project",
                                    description: "Developed a feature-rich chat application with Socket.IO, supporting group chats, file sharing, and online status indicators.",
                                    score: null
                                },
                                {
                                    year: "Aug 2023 - Nov 2023",
                                    title: "FreshMart E-commerce",
                                    institution: "Personal Project",
                                    description: "Created a complete online grocery platform with live order tracking, admin dashboard, and secure payment integration.",
                                    score: null
                                },
                                {
                                    year: "May 2023",
                                    title: "RedHat Certified",
                                    institution: "RedHat",
                                    description: "Achieved RedHat Certified Enterprise Application Developer status, mastering enterprise-grade application development.",
                                    score: null
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 50 }}
                                    className="relative pl-8 md:pl-12 group"
                                >
                                    {/* Timeline Dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                                        className="absolute -left-[9px] top-2 w-5 h-5 rounded-full bg-black border-4 border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] group-hover:scale-125 transition-transform duration-300"
                                    />

                                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start bg-white/5 p-6 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                                        <span className="text-primary font-mono text-sm md:text-base whitespace-nowrap min-w-[160px] pt-1 font-bold">{item.year}</span>
                                        <div className="w-full">
                                            <div className="flex justify-between items-start flex-wrap gap-2">
                                                <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                                {item.score && (
                                                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/20">
                                                        {item.score}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-300 font-medium mb-2">{item.institution}</p>
                                            <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

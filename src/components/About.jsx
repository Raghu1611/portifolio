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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
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
                </motion.div>
            </div>
        </section>
    );
};

export default About;

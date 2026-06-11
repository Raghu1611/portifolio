import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Briefcase, GraduationCap, Award, Brain, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
    const skillsList = {
        languages: ["Java", "JavaScript", "SQL", "HTML5 & CSS3"],
        frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Socket.io"],
        databases: ["MongoDB", "MySQL"],
        ai: ["Prompt Engineering", "LLM Fine-Tuning", "QLoRA", "AI Agents", "AWS SageMaker"],
        tools: ["Git & GitHub", "Postman", "Vercel"]
    };

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-black dark:text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Back to Home & Download Action Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center mb-10 pb-6 border-b border-black/[0.05] dark:border-white/[0.05]"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                    <a
                        href="/resume.pdf"
                        download="Dhanunjai_Raghu_Ram_Resume.pdf"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-lg shadow-primary/20 hover:scale-102"
                    >
                        <Download size={14} />
                        Download PDF Resume
                    </a>
                </motion.div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Column: Polished Web Resume (Recruiter-friendly structured details) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c0c0e]/60 border border-black/[0.04] dark:border-white/[0.05] shadow-[0_4px_25px_rgba(0,0,0,0.01)] dark:shadow-none"
                    >
                        {/* Header details */}
                        <div className="border-b border-black/[0.05] dark:border-white/[0.05] pb-6">
                            <h1 className="font-display font-black text-3xl sm:text-4xl text-black dark:text-white leading-tight">
                                Dhanunjai Raghu Ram
                            </h1>
                            <p className="text-primary font-semibold text-sm mt-1 uppercase tracking-wider">
                                Software Engineer | Full-Stack & Generative AI Specialist
                            </p>
                            
                            {/* Contact pills */}
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1"><Mail size={12} /> 2200032009cseh@gmail.com</span>
                                <span className="flex items-center gap-1"><Phone size={12} /> +91 9177952460</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> Khammam, Telangana, India</span>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="space-y-4">
                            <h2 className="font-display font-bold text-lg text-black dark:text-white flex items-center gap-2 border-b border-black/[0.03] dark:border-white/[0.03] pb-2">
                                <Briefcase size={18} className="text-primary" />
                                Professional Experience
                            </h2>
                            <div className="space-y-4">
                                <div className="relative pl-4 border-l-2 border-primary/20">
                                    <div className="flex justify-between items-start flex-wrap gap-1">
                                        <h3 className="font-semibold text-sm text-black dark:text-white">Frontend Developer Intern</h3>
                                        <span className="text-xs font-semibold text-gray-400">Mar 2026 – May 2026</span>
                                    </div>
                                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Clothovia | Remote</p>
                                    <ul className="list-disc pl-4 mt-2 space-y-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                        <li>Developed reusable React.js components for core production apps, improving consistency.</li>
                                        <li>Integrated REST APIs and handled asynchronous state updates.</li>
                                        <li>Supported LLM fine-tuning workflows & prompt engineering initiatives.</li>
                                        <li>Diagnosed and optimized client-side code rendering latency.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="space-y-4">
                            <h2 className="font-display font-bold text-lg text-black dark:text-white flex items-center gap-2 border-b border-black/[0.03] dark:border-white/[0.03] pb-2">
                                <Award size={18} className="text-accent" />
                                Selected Projects
                            </h2>
                            <div className="space-y-4">
                                {/* Proj 1 */}
                                <div>
                                    <div className="flex justify-between items-start flex-wrap gap-1">
                                        <h3 className="font-semibold text-sm text-black dark:text-white">AI-Powered Enterprise Knowledge Chatbot</h3>
                                        <span className="text-xs font-semibold text-gray-400">Apr 2026 – May 2026</span>
                                    </div>
                                    <p className="text-[11px] text-gray-500 leading-relaxed mt-1">
                                        Fine-tuned the Qwen 2.5 1.5B Instruct model using QLoRA adapters on AWS SageMaker. Constructed 195+ custom Q&A training datasets, lowering training memory overhead by 68% and reaching 92% accuracy on tests.
                                    </p>
                                </div>
                                {/* Proj 2 */}
                                <div>
                                    <div className="flex justify-between items-start flex-wrap gap-1">
                                        <h3 className="font-semibold text-sm text-black dark:text-white">Online Grocery Delivery Platform</h3>
                                        <span className="text-xs font-semibold text-gray-400">Jan 2025 – Apr 2025</span>
                                    </div>
                                    <p className="text-[11px] text-gray-500 leading-relaxed mt-1">
                                        Built a complete full-stack grocery system using the MERN stack with JWT authentication and Role-Based Access Control (RBAC). Indexed database models to reduce REST API responses under 100ms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="space-y-4">
                            <h2 className="font-display font-bold text-lg text-black dark:text-white flex items-center gap-2 border-b border-black/[0.03] dark:border-white/[0.03] pb-2">
                                <GraduationCap size={18} className="text-emerald-500" />
                                Education
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between items-start flex-wrap gap-1">
                                        <h3 className="font-semibold text-sm text-black dark:text-white">B.Tech in Computer Science Engineering</h3>
                                        <span className="text-xs font-semibold text-primary">9.4 CGPA</span>
                                    </div>
                                    <p className="text-xs text-gray-500">KL University, Vijayawada | 2022 - 2026</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-start flex-wrap gap-1">
                                        <h3 className="font-semibold text-sm text-black dark:text-white">Intermediate Education (MPC)</h3>
                                        <span className="text-xs font-semibold text-primary">943 / 1000 Marks</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Sri Chaitanya Junior College | 2020 - 2022</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Summary Grid */}
                        <div className="space-y-4">
                            <h2 className="font-display font-bold text-lg text-black dark:text-white flex items-center gap-2 border-b border-black/[0.03] dark:border-white/[0.03] pb-2">
                                <Brain size={18} className="text-pink-500" />
                                Skill Index
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                <div>
                                    <h3 className="font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Frontend</h3>
                                    <div className="flex flex-wrap gap-1">
                                        {skillsList.frameworks.slice(0, 4).map(s => <span key={s} className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 font-medium">{s}</span>)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Generative AI</h3>
                                    <div className="flex flex-wrap gap-1">
                                        {skillsList.ai.slice(0, 3).map(s => <span key={s} className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 font-medium">{s}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: High Fidelity PDF Viewer Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-5 h-[80vh] bg-white dark:bg-[#0c0c0e]/60 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                    >
                        {/* Background light glow inside border */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent" />
                        
                        <iframe
                            src="/resume.pdf#toolbar=0"
                            className="w-full h-full border-none"
                            title="Dhanunjai Raghu Ram PDF Resume"
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Resume;

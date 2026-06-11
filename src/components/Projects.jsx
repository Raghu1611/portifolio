import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, AlertCircle, HelpCircle, Workflow, BarChart3, Database } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-24 bg-gray-50/10 dark:bg-dark-surface/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-black dark:text-white mb-2">Featured Projects</h2>
                    <div className="h-1 bg-gradient-to-r from-primary to-accent w-16 mx-auto rounded-full" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto">
                        A showcase of engineered systems, from low-latency socket servers to fine-tuned machine learning models.
                    </p>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-container-${project.id}`}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group rounded-3xl bg-white dark:bg-[#0c0c0e]/60 border border-black/[0.05] dark:border-white/[0.06] overflow-hidden hover:border-primary/40 dark:hover:border-primary/40 transition-all cursor-pointer flex flex-col h-full shadow-[0_4px_25px_rgba(0,0,0,0.01)] dark:shadow-none"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Image Container */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay badge */}
                                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-md bg-black/60 text-white backdrop-blur-sm text-xs font-semibold uppercase tracking-wider">
                                    Case Study
                                </div>
                            </div>

                            {/* Details Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-display font-bold text-xl mb-2 text-black dark:text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4 tracking-wide">
                                    {project.tagline}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {project.tech.slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 border border-black/5 dark:border-white/5 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs px-2 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 border border-black/5 dark:border-white/5 font-medium">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-auto pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
                                    <ul className="space-y-2 mb-6">
                                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                                            <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                                <span className="leading-tight">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] hover:bg-primary hover:text-white dark:hover:bg-primary text-black dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-black/5 dark:border-white/5">
                                        View Case Study <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Case Study Detailed Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
                        {/* Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0c0c0e] rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl custom-scrollbar z-50 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header image backdrop */}
                            <div className="h-56 sm:h-72 relative flex-shrink-0">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-black/50 dark:from-[#0c0c0e]" />
                                
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-20 backdrop-blur-md border border-white/10"
                                    aria-label="Close Case Study"
                                >
                                    <X size={18} />
                                </button>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h2 className="font-display font-black text-2xl sm:text-4xl text-black dark:text-white drop-shadow-md">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 drop-shadow-sm mt-1">
                                        {selectedProject.tagline}
                                    </p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 sm:p-8 overflow-y-visible">
                                
                                {/* Links Action Bar */}
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {selectedProject.liveUrl && (
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:opacity-90 transition-all flex items-center gap-1.5 shadow-lg shadow-primary/20"
                                        >
                                            Live Deployment <ExternalLink size={14} />
                                        </a>
                                    )}
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold hover:opacity-90 transition-all flex items-center gap-1.5 border border-black/10 dark:border-white/10 shadow-md"
                                    >
                                        GitHub Repository <Github size={14} />
                                    </a>
                                </div>

                                {/* Core Details Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    
                                    {/* Left Case Details (Problem / Solution / Architecture / Impact) */}
                                    <div className="lg:col-span-2 space-y-6">
                                        
                                        {/* Problem */}
                                        <div className="space-y-2">
                                            <h3 className="font-display font-bold text-base text-black dark:text-white flex items-center gap-2">
                                                <AlertCircle size={18} className="text-red-500" />
                                                The Problem
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {selectedProject.problem}
                                            </p>
                                        </div>

                                        {/* Solution */}
                                        <div className="space-y-2">
                                            <h3 className="font-display font-bold text-base text-black dark:text-white flex items-center gap-2">
                                                <HelpCircle size={18} className="text-primary" />
                                                The Solution
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {selectedProject.solution}
                                            </p>
                                        </div>

                                        {/* Architecture */}
                                        <div className="space-y-2">
                                            <h3 className="font-display font-bold text-base text-black dark:text-white flex items-center gap-2">
                                                <Workflow size={18} className="text-accent" />
                                                System Architecture
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed bg-black/[0.02] dark:bg-white/[0.02] p-3.5 rounded-xl border border-black/5 dark:border-white/5 font-mono text-xs">
                                                {selectedProject.architecture}
                                            </p>
                                        </div>

                                        {/* Impact */}
                                        <div className="space-y-2">
                                            <h3 className="font-display font-bold text-base text-black dark:text-white flex items-center gap-2">
                                                <BarChart3 size={18} className="text-emerald-500" />
                                                Operational Impact
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {selectedProject.impact}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Case Sidebar (Metrics & Tech Stack) */}
                                    <div className="space-y-6">
                                        
                                        {/* Metrics Display */}
                                        <div className="space-y-3 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                                            <h3 className="font-display font-bold text-sm text-black dark:text-white uppercase tracking-wider mb-2">
                                                Key Metrics
                                            </h3>
                                            <div className="grid grid-cols-1 gap-4">
                                                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                                                    <div key={key} className="flex flex-col">
                                                        <span className="font-display font-black text-2xl text-primary">{value}</span>
                                                        <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{key}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="space-y-3">
                                            <h3 className="font-display font-bold text-sm text-black dark:text-white uppercase tracking-wider">
                                                Technologies Used
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-xs font-semibold text-gray-600 dark:text-gray-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Highlights list */}
                                        <div className="space-y-3">
                                            <h3 className="font-display font-bold text-sm text-black dark:text-white uppercase tracking-wider">
                                                Key Accomplishments
                                            </h3>
                                            <ul className="space-y-2">
                                                {selectedProject.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2 leading-relaxed">
                                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

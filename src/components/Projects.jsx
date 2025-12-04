import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {projectsData.map((project) => (
                            <motion.div
                                key={project.id}
                                layoutId={`project-${project.id}`}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary/50 transition-all cursor-pointer flex flex-col h-full"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{project.tagline}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-auto">
                                        <ul className="space-y-2 mb-6">
                                            {project.highlights.slice(0, 2).map((highlight, idx) => (
                                                <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        <button className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                            View Case Study <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1c1c1e] rounded-3xl border border-white/10 shadow-2xl custom-scrollbar"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="h-64 md:h-80 relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-2">{selectedProject.title}</h2>
                                    <p className="text-lg text-gray-300">{selectedProject.tagline}</p>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                                    >
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                                    >
                                        GitHub Repo <Github size={18} />
                                    </a>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2 space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 text-white">Overview</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {selectedProject.fullDescription}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold mb-4 text-white">Key Features</h3>
                                            <ul className="space-y-3">
                                                {selectedProject.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 text-white">Tech Stack</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold mb-4 text-white">What I Learned</h3>
                                            <ul className="space-y-3">
                                                {selectedProject.learned.map((item, idx) => (
                                                    <li key={idx} className="text-sm text-gray-400">
                                                        • {item}
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

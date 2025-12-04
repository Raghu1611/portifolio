import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-dark-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* RedHat Certification */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-black border border-red-500/30 relative overflow-hidden group perspective-1000"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <Award size={100} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors">RedHat Certified Enterprise Application Developer</h3>
                            <div className="space-y-2 text-gray-400 mb-6">
                                <p>Certification ID: <span className="text-white">240-263-160</span></p>
                                <p>Issued: Dec 27, 2024</p>
                            </div>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium group-hover:translate-x-2 transition-transform"
                            >
                                Verify Credential <ExternalLink size={16} />
                            </a>
                        </motion.div>

                        {/* HackerRank Certification */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: -5, rotateX: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 relative overflow-hidden group perspective-1000"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Award size={100} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">HackerRank SQL Certification</h3>
                            <div className="space-y-2 text-gray-400 mb-6">
                                <p>Level: <span className="text-white">Intermediate</span></p>
                                <p>Platform: HackerRank</p>
                            </div>
                            <a
                                href="https://www.hackerrank.com/certificates/81b1afe2623c"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                            >
                                View Certificate <ExternalLink size={16} />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;

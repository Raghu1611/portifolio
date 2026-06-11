import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Sparkles, ShieldCheck } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: "RedHat Certified Enterprise Application Developer",
            details: "Certification ID: 240-263-160",
            date: "Issued: Dec 27, 2024",
            verifyUrl: "https://www.redhat.com/en/services/certification",
            themeClass: "from-red-500/10 to-red-600/5 hover:border-red-500/30",
            icon: <Award className="text-red-500" size={24} />
        },
        {
            title: "HackerRank SQL Certification (Intermediate)",
            details: "Topics: Query Optimization, Joins, Relational Design",
            date: "Issued: Jan 2024",
            verifyUrl: "https://www.hackerrank.com/certificates/81b1afe2623c",
            themeClass: "from-emerald-500/10 to-emerald-600/5 hover:border-emerald-500/30",
            icon: <ShieldCheck className="text-emerald-500" size={24} />
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-gray-50/20 dark:bg-dark-surface/5 relative overflow-hidden">
            {/* Background graphics */}
            <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-black dark:text-white mb-2">Certifications</h2>
                    <div className="h-1 bg-gradient-to-r from-primary to-accent w-16 mx-auto rounded-full" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 max-w-sm mx-auto">
                        Professional credentials validation and specialized database skills validation.
                    </p>
                </div>

                {/* Cards List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -6, rotateY: idx === 0 ? 3 : -3, transition: { duration: 0.2 } }}
                            className={`p-8 rounded-3xl bg-white dark:bg-[#0c0c0e]/60 border border-black/[0.04] dark:border-white/[0.05] shadow-[0_4px_25px_rgba(0,0,0,0.01)] dark:shadow-none relative overflow-hidden group perspective-1000 bg-gradient-to-br transition-all duration-300 ${cert.themeClass}`}
                        >
                            {/* Watermark Logo Icon */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                <Award size={120} />
                            </div>

                            {/* Verification status tag */}
                            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                                <Sparkles size={10} className="text-primary animate-pulse" />
                                Verified Credential
                            </div>

                            <h3 className="font-display font-black text-xl mb-3 text-black dark:text-white leading-tight">
                                {cert.title}
                            </h3>

                            <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400 mb-6 font-medium">
                                <p>{cert.details}</p>
                                <p>{cert.date}</p>
                            </div>

                            <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors border-b border-black/10 dark:border-white/10 pb-0.5"
                            >
                                Verify Credential <ExternalLink size={12} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

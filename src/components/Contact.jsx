import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Using the proxy endpoint defined in vite.config.js to avoid CORS issues
            const response = await fetch('/api/proxy-send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'vedjsjssdjkjjnsddjsksdbssdflsfmbjm'
                },
                body: JSON.stringify({
                    to: "2200032009cseh@gmail.com",
                    subject: `Portfolio Contact from ${formData.name}`,
                    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                const errorData = await response.text();
                console.error('Server Error:', response.status, errorData);
                throw new Error(errorData || 'Failed to send');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            // Store the error message in a separate state if you want to show it, 
            // for now we just show the generic error status but log the real one.
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                        <p className="text-lg text-gray-400 mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:2200032009cseh@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">2200032009cseh@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/Raghu1611" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/gonuguntla-dhanunjai-raghu-ram-62b957289" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </motion.div>

                        <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </motion.div>

                        <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="Your message..."
                            />
                        </motion.div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-400 text-center">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

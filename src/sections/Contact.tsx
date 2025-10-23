import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import React from 'react';

// Container variant for staggering children
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Animate children with a 0.1s delay between them
        },
    },
};

// Item variant for individual form fields
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Placeholder for your form submission logic
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted! (Placeholder action)');
    // TODO: Tambahkan logika pengiriman formulir Anda di sini (misalnya, fetch/axios)
};

const Contact = () => {
    // Ganti dengan URL profil Anda
    const socialLinks = [
        { icon: Linkedin, url: "https://www.linkedin.com/in/ilwancoder/", label: "LinkedIn" },
        { icon: Github, url: "https://github.com/ilwancoder", label: "GitHub" },
        { icon: Instagram, url: "https://www.instagram.com/ilwan.cerah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" } // Instagram ditambahkan di sini
    ];

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                
                {/* --- Header & Subtitle (Standard Motion) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-extrabold tracking-tighter text-foreground">
                        Let's Build Together 🚀
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Have a project in mind or just want to say hello? My inbox is always open.
                    </p>
                </motion.div>

                {/* --- Contact Form (Staggered Motion) --- */}
                <motion.div
                    className="mt-16 mx-auto max-w-xl bg-card p-8 rounded-2xl shadow-xl border border-border/70"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants} // Use container variant here
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Name and Email fields (grouped) */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Your Name" 
                                    className="block w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                                    required
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Your Email" 
                                    className="block w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                                    required
                                />
                            </motion.div>
                        </div>
                        
                        {/* Message field */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows={5} 
                                placeholder="Your Message" 
                                className="block w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                required
                            ></textarea>
                        </motion.div>
                        
                        {/* Submit Button */}
                        <motion.div variants={itemVariants}>
                            <button
                                type="submit"
                                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-primary/50 active:scale-[0.98]"
                            >
                                Send Message
                                <Send className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                            </button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* --- Social Media Links (Refined Style) --- */}
                <div className="mt-20 pt-8 border-t border-border/70 text-center">
                    <p className="text-lg font-medium text-foreground">Connect with me</p>
                    <div className="mt-5 flex justify-center gap-4">
                        {socialLinks.map((item) => (
                            <a 
                                key={item.label}
                                href={item.url} 
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Go to my ${item.label} profile`}
                                className="
                                    text-foreground h-12 w-12 flex items-center justify-center 
                                    rounded-full border border-border/50 
                                    transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary
                                "
                            >
                                <item.icon className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-sm text-muted-foreground opacity-70">
                        &copy; {new Date().getFullYear()} Muhammad Ilwan. Built with Next.js and Tailwind CSS.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
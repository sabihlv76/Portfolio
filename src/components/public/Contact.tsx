"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, Github, Linkedin } from "lucide-react";

interface ContactProps {
    contactEmail?: string;
    phoneNumber?: string;
    instagramUrl?: string;
}

export default function Contact({
    contactEmail = "sabihlv76@gmail.com",
    phoneNumber = "+250 792 459 837",
    instagramUrl = "",
}: ContactProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to send message");

            setIsSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (error) {
            console.error(error);
            alert("Failed to send message. Please try again or email directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-[var(--color-cream)] py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p
                            className="text-lg text-[var(--color-brown)] italic mb-4"
                            style={{ fontFamily: "var(--font-script)" }}
                        >
                            Get In Touch
                        </p>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)] mb-6"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Let&apos;s Build Something Together
                        </h2>
                        <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed text-sm">
                            Whether you need a web application, creative branding, video editing, or business development — I&apos;m here to help. Let&apos;s discuss how I can add value to your project.
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-5">
                            <a
                                href={`mailto:${contactEmail}`}
                                className="flex items-center gap-4 text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors group"
                            >
                                <div className="w-12 h-12 bg-[var(--color-cream-dark)] flex items-center justify-center group-hover:bg-[var(--color-burgundy)] group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Email</p>
                                    <p className="font-medium">{contactEmail}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${phoneNumber}`}
                                className="flex items-center gap-4 text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors group"
                            >
                                <div className="w-12 h-12 bg-[var(--color-cream-dark)] flex items-center justify-center group-hover:bg-[var(--color-burgundy)] group-hover:text-white transition-all">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Phone</p>
                                    <p className="font-medium">{phoneNumber}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-[var(--color-text-dark)]">
                                <div className="w-12 h-12 bg-[var(--color-cream-dark)] flex items-center justify-center">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Location</p>
                                    <p className="font-medium">Kigali, Rwanda</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4 border-t border-[var(--color-cream-dark)]">
                                <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Social & Professional</p>
                                <div className="flex gap-3">
                                    <motion.a
                                        href="https://github.com/sabihlv76"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className="w-10 h-10 bg-[var(--color-cream-dark)] flex items-center justify-center hover:bg-[var(--color-burgundy)] hover:text-white transition-all text-[var(--color-text-dark)]"
                                        title="GitHub"
                                    >
                                        <Github size={18} />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/sabih-ace-bb56a5338/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className="w-10 h-10 bg-[var(--color-cream-dark)] flex items-center justify-center hover:bg-[var(--color-burgundy)] hover:text-white transition-all text-[var(--color-text-dark)]"
                                        title="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white dark:bg-white/5 border border-[var(--color-cream-dark)] p-8 shadow-sm dark:shadow-none">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)] mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--color-burgundy)] focus:outline-none transition-colors bg-white text-zinc-900 placeholder:text-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)] mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--color-burgundy)] focus:outline-none transition-colors bg-white text-zinc-900 placeholder:text-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)] mb-2">
                                        Subject
                                    </label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--color-burgundy)] focus:outline-none transition-colors bg-white text-zinc-900 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="graphic-design">Graphic Design</option>
                                        <option value="video-editing">Video Editing</option>
                                        <option value="sales-business">Sales & Business</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--color-burgundy)] focus:outline-none transition-colors resize-none bg-white text-zinc-900 placeholder:text-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                                        placeholder="Tell me about your project or idea..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-burgundy)] text-white text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-burgundy-dark)] transition-colors disabled:opacity-70"
                                >
                                    {isSubmitted ? (
                                        <>
                                            <Check size={16} />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

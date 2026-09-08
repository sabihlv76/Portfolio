"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface FooterProps {
    ownerName?: string;
    contactEmail?: string;
    phoneNumber?: string;
    instagramUrl?: string;
}

export default function Footer({
    ownerName = "Sabih Iriho",
    contactEmail = "sabihlv76@gmail.com",
    phoneNumber = "+250 792 459 837",
    instagramUrl = "",
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1A1A1A] dark:bg-black text-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="text-2xl tracking-widest uppercase mb-4 block"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            {ownerName}
                        </Link>
                        <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-4">
                            Software Developer & Creative Digital Professional based in Kigali, Rwanda. Building impactful digital solutions through technology, creativity, and strategic thinking.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Software Dev", "Graphic Design", "Video Editing", "Sales"].map((tag) => (
                                <span key={tag} className="px-2 py-1 border border-white/20 text-xs text-white/50">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {[
                                { label: "Home", href: "#home" },
                                { label: "About", href: "#about" },
                                { label: "Services", href: "#services" },
                                { label: "Projects", href: "#projects" },
                                { label: "Skills", href: "#skills" },
                                { label: "Contact", href: "#contact" },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                            Get In Touch
                        </h4>
                        <div className="flex flex-col gap-4 mb-6">
                            <a
                                href={`mailto:${contactEmail}`}
                                className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                            >
                                <Mail size={16} />
                                {contactEmail}
                            </a>
                            {phoneNumber && (
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <Phone size={16} />
                                    {phoneNumber}
                                </a>
                            )}
                            <p className="text-sm text-white/50 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                Kigali, Rwanda
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <motion.a
                                href="https://github.com/sabihlv76"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[var(--color-burgundy)] transition-colors"
                                title="GitHub"
                            >
                                <Github size={18} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/sabih-ace-bb56a5338/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[var(--color-burgundy)] transition-colors"
                                title="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </motion.a>
                            <motion.a
                                href={`mailto:${contactEmail}`}
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[var(--color-burgundy)] transition-colors"
                                title="Email"
                            >
                                <Mail size={18} />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/50">
                        © {currentYear} {ownerName}. All rights reserved.
                    </p>
                    <p className="text-xs text-white/30 italic" style={{ fontFamily: "var(--font-script)" }}>
                        Designed & Built with passion in Kigali, Rwanda
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-white/50 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-white/50 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

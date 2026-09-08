"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroTechStack } from "@/lib/techStack";

interface HeroProps {
    headline?: string;
    subtitle?: string;
    ctaText?: string;
    imageUrl?: string;
    studentsCount?: string;
    roleTitle?: string;
    roleSubtitle?: string;
}

const roles = [
    "Software Developer",
    "Full-Stack Developer",
    "Graphic Designer",
    "Video Editor",
    "Sales Manager",
];

export default function Hero({
    headline: _headline = "Hi, I'm Sabih Iriho",
    subtitle: _subtitle = "Software Developer & Creative Digital Professional",
    ctaText = "Hire Me",
    studentsCount = "4+",
    roleTitle: _roleTitle = "Full-Stack Developer",
    roleSubtitle: _roleSubtitle = "Kigali, Rwanda",
}: HeroProps) {
    return (
        <section
            id="home"
            className="min-h-screen bg-[var(--color-cream)] pt-20 relative overflow-hidden"
        >
            {/* Background subtle grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(var(--color-text-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-dark) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
                    {/* Left Content — large background photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative overflow-hidden min-h-[600px] lg:min-h-0"
                    >
                        {/* Background photo — fills this column, reaching the identity card's edge */}
                        <Image
                            src="/me.png"
                            alt="Sabih Iriho"
                            fill
                            priority
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />
                        {/* Scrim for text legibility over the photo */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/70" />

                        {/* Content on top of the photo */}
                        <div className="relative z-10 h-full flex flex-col justify-between gap-8 p-8 sm:p-10 lg:p-12">
                            {/* Location badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 self-start border border-[var(--color-burgundy)] text-[var(--color-burgundy-light)] text-xs tracking-[0.15em] uppercase"
                            >
                                <span className="w-2 h-2 bg-[var(--color-burgundy)] rounded-full animate-pulse" />
                                Kigali, Rwanda
                            </motion.div>

                            <div className="space-y-8">
                                {/* Main Headline */}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white" style={{ fontFamily: "var(--font-serif)" }}>
                                    {_headline}
                                </h1>

                                {/* Animated Role Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {roles.map((role, i) => (
                                        <motion.span
                                            key={role}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                            className="px-3 py-1.5 text-xs tracking-widest uppercase border border-white/25 text-white/80 hover:border-[var(--color-burgundy-light)] hover:text-[var(--color-burgundy-light)] transition-colors cursor-default"
                                        >
                                            {role}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-8">
                                    <div className="flex items-baseline gap-2">
                                        <span
                                            className="text-4xl md:text-5xl text-[var(--color-burgundy-light)]"
                                            style={{ fontFamily: "var(--font-serif)" }}
                                        >
                                            {studentsCount}
                                        </span>
                                        <div className="text-xs uppercase tracking-widest text-white/60">
                                            <p>Years of</p>
                                            <p>Experience</p>
                                        </div>
                                    </div>
                                    <div className="w-px h-12 bg-white/25" />
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Based in</p>
                                        <p className="font-medium text-white">{_roleSubtitle}</p>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        href="#contact"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-block px-8 py-4 bg-[var(--color-burgundy)] text-white text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-burgundy-dark)] transition-colors"
                                    >
                                        {ctaText}
                                    </motion.a>
                                    <motion.a
                                        href="#about"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-block px-8 py-4 border border-white text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[var(--color-text-dark)] transition-colors"
                                    >
                                        Learn More
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Decorative Code / Identity Panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative hidden lg:flex lg:items-center"
                    >
                        <div className="relative bg-[var(--color-cream-dark)] border border-[var(--color-cream-dark)] p-10 space-y-6 w-full">
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-burgundy)] to-[var(--color-brown)]" />

                            <div>
                                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.2em] mb-2">// whoami</p>
                                <p className="text-2xl text-[var(--color-text-dark)]" style={{ fontFamily: "var(--font-serif)" }}>
                                    Sabih Iriho
                                </p>
                            </div>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                                A multidisciplinary digital professional who enjoys working at the intersection of <strong className="text-[var(--color-burgundy)]">technology</strong>, <strong className="text-[var(--color-burgundy)]">creativity</strong>, and <strong className="text-[var(--color-burgundy)]">business</strong>.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-cream-dark)]">
                                {[
                                    { label: "Specialty", value: "Full-Stack Dev" },
                                    { label: "Location", value: "Kigali, RW" },
                                    { label: "Education", value: "Saint Kizito TSS" },
                                    { label: "Available", value: "Remotely ✓" },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-sm font-medium text-[var(--color-text-dark)]">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-[var(--color-cream-dark)]">
                                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-3">Tech Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {heroTechStack.map((tech) => (
                                        <span key={tech.name} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--color-burgundy)] text-white text-xs">
                                            <tech.icon size={13} />
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Floating accent box */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--color-burgundy)] flex items-center justify-center">
                                <p className="text-white text-center text-xs leading-tight font-semibold uppercase tracking-wider">Open<br />To Work</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

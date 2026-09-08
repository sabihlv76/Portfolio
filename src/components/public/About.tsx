"use client";

import { motion } from "framer-motion";

interface AboutProps {
    introLine?: string;
    headline?: string;
    description?: string;
    ctaText?: string;
    imageUrl?: string;
}

export default function About({
    introLine = "Hey, I'm Sabih",
    headline = "Software Developer, Creative Designer, and Digital Problem Solver",
    description = `I am a multidisciplinary digital professional who enjoys working at the intersection of technology, creativity, and business. My journey started with software development studies at Saint Kizito TSS, where I developed a strong interest in programming, problem-solving, and modern web technologies.

Over the years, I expanded my skills beyond software engineering into sales management, graphic design, and digital media production. This combination allows me to not only build software but also understand branding, user engagement, communication, and business growth strategies.

I am passionate about building high-performance applications, improving user experiences, and helping businesses establish strong digital identities. I also enjoy exploring Linux environments, open-source software, and continuously learning new tools and technologies.`,
    ctaText = "Hire Me",
}: AboutProps) {
    const highlights = [
        { label: "Education", value: "Saint Kizito TSS", sub: "Software Development · 81%" },
        { label: "Experience", value: "Higura · Spiderbit", sub: "Sales Manager & Developer" },
        { label: "Location", value: "Kigali, Rwanda", sub: "Available Remotely" },
        { label: "Languages", value: "EN · FR · SW · RW", sub: "Multilingual Professional" },
    ];

    return (
        <section
            id="about"
            className="bg-[var(--color-cream-dark)] py-20 lg:py-32"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-white/5 p-6 border border-[var(--color-cream-dark)] hover:border-[var(--color-burgundy)] transition-all group"
                                >
                                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2 group-hover:text-[var(--color-burgundy)] transition-colors">
                                        {item.label}
                                    </p>
                                    <p className="font-semibold text-[var(--color-text-dark)] text-sm md:text-base leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                                        {item.value}
                                    </p>
                                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{item.sub}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quote card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-4 bg-[var(--color-burgundy)] p-6 text-white"
                        >
                            <p className="text-sm italic leading-relaxed" style={{ fontFamily: 'var(--font-script)' }}>
                                &ldquo;I build digital solutions that combine technology, creativity, and business value.&rdquo;
                            </p>
                            <p className="text-xs mt-2 opacity-70 uppercase tracking-widest">— Sabih Iriho</p>
                        </motion.div>
                    </motion.div>

                    {/* Right — Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Intro Line */}
                        <p
                            className="text-xl text-[var(--color-brown)] italic"
                            style={{ fontFamily: "var(--font-script)" }}
                        >
                            {introLine}
                        </p>

                        {/* Headline */}
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)] leading-tight"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            {headline.split(",").map((part, i) => (
                                <span key={i}>
                                    {part}
                                    {i < headline.split(",").length - 1 && ","}
                                    <br className="hidden md:block" />
                                </span>
                            ))}
                        </h2>

                        {/* Description */}
                        <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                            {description.split("\n\n").map((paragraph, i) => (
                                <p key={i} className="text-sm md:text-base">
                                    {paragraph}
                                </p>
                            ))}
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
                                href="#skills"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block px-8 py-4 border border-[var(--color-burgundy)] text-[var(--color-burgundy)] text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-burgundy)] hover:text-white transition-colors"
                            >
                                My Skills
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

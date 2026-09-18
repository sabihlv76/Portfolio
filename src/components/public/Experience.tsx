"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    current: boolean;
    image?: string;
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        company: "Carvu",
        role: "Sales Manager & Marketing Officer",
        period: "Current",
        current: true,
        image: "/carvu.png",
        description:
            "Leading sales strategy and marketing efforts at Carvu — driving customer acquisition, brand positioning, and go-to-market execution for the platform.",
    },
    {
        company: "Higura",
        role: "Sales Manager & Developer",
        period: "Current",
        current: true,
        image: "/Hifura.png",
        description:
            "Wearing two hats — contributing to the development of Higura's AI-powered inventory & POS platform while managing client relationships and driving sales growth.",
    },
    {
        company: "Spiderbit",
        role: "Software Developer",
        period: "Prior",
        current: false,
        description:
            "Built and maintained web solutions for real-world client projects, sharpening full-stack development skills in a fast-paced team environment.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="bg-[var(--color-cream)] py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p
                        className="text-lg text-[var(--color-brown)] italic mb-4"
                        style={{ fontFamily: "var(--font-script)" }}
                    >
                        Where I&apos;ve Worked
                    </p>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Experience
                    </h2>
                    <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                        A career built across development, sales, and marketing — combining technical execution with business growth.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-2 bottom-2 w-px bg-[var(--color-cream-dark)] hidden sm:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                className="relative sm:pl-16"
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-3 top-8 w-6 h-6 rounded-full border-4 border-[var(--color-cream)] hidden sm:flex items-center justify-center ${exp.current ? "bg-[var(--color-burgundy)]" : "bg-[var(--color-text-muted)]"
                                        }`}
                                />

                                <div className="bg-white dark:bg-white/5 border border-[var(--color-cream-dark)] hover:border-[var(--color-burgundy)] transition-all group hover:shadow-lg flex flex-col sm:flex-row overflow-hidden">
                                    {/* Logo / screenshot */}
                                    <div className="relative w-full sm:w-48 aspect-[16/10] sm:aspect-auto flex-shrink-0 bg-[var(--color-cream-dark)] overflow-hidden">
                                        {exp.image ? (
                                            <Image
                                                src={exp.image}
                                                alt={`${exp.company} preview`}
                                                fill
                                                sizes="192px"
                                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Briefcase className="text-[var(--color-text-muted)]" size={28} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 sm:p-8 flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <h3
                                                className="text-xl text-[var(--color-text-dark)]"
                                                style={{ fontFamily: "var(--font-serif)" }}
                                            >
                                                {exp.company}
                                            </h3>
                                            <span
                                                className={`text-xs uppercase tracking-widest px-3 py-1 ${exp.current
                                                        ? "text-emerald-700 dark:text-emerald-400 border border-emerald-600/30 bg-emerald-600/10"
                                                        : "text-[var(--color-text-muted)] border border-[var(--color-cream-dark)]"
                                                    }`}
                                            >
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-[var(--color-burgundy)] mb-3">
                                            {exp.role}
                                        </p>
                                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

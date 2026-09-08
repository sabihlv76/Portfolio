"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/techStack";

const techSkills = [
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML5 & CSS3", level: 92 },
    { name: "REST APIs & JSON", level: 82 },
    { name: "Git & GitHub", level: 80 },
];

const designSkills = [
    { name: "Adobe Photoshop", level: 85 },
    { name: "Adobe Illustrator", level: 78 },
    { name: "Adobe Premiere Pro", level: 80 },
    { name: "CapCut", level: 90 },
];

const professionalSkills = [
    { name: "Problem Solving", description: "Breaking down complex challenges into elegant solutions" },
    { name: "Communication", description: "Clear, professional interaction with clients and teams" },
    { name: "Fast Learning", description: "Rapidly adapting to new technologies and environments" },
    { name: "Team Collaboration", description: "Working effectively in cross-functional groups" },
    { name: "Leadership", description: "Guiding teams and coordinating business activities" },
    { name: "Attention to Detail", description: "Ensuring precision in both code and design work" },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-[var(--color-cream-dark)] py-20 lg:py-32">
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
                        My Expertise
                    </p>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Skills & Expertise
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left — Tech & Design Skills with bars */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        {/* Technical Skills */}
                        <div>
                            <h3
                                className="text-xl mb-6 text-[var(--color-text-dark)]"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Technical Skills
                            </h3>
                            <div className="space-y-5">
                                {techSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.08 }}
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-[var(--color-text-dark)]">{skill.name}</span>
                                            <span className="text-xs text-[var(--color-text-muted)]">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-[var(--color-cream)] overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.08 }}
                                                className="h-full bg-[var(--color-burgundy)]"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Design Skills */}
                        <div>
                            <h3
                                className="text-xl mb-6 text-[var(--color-text-dark)]"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Design & Editing Tools
                            </h3>
                            <div className="space-y-5">
                                {designSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.08 }}
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-[var(--color-text-dark)]">{skill.name}</span>
                                            <span className="text-xs text-[var(--color-text-muted)]">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-[var(--color-cream)] overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.08 }}
                                                className="h-full bg-[var(--color-brown)]"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Professional Skills + Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3
                            className="text-xl mb-8 text-[var(--color-text-dark)]"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Professional Skills
                        </h3>
                        <div className="grid gap-4">
                            {professionalSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                    className="bg-white dark:bg-white/5 p-5 border border-[var(--color-cream-dark)] hover:border-[var(--color-burgundy)] transition-all group"
                                >
                                    <h4 className="font-medium text-[var(--color-text-dark)] mb-1 group-hover:text-[var(--color-burgundy)] transition-colors">
                                        {skill.name}
                                    </h4>
                                    <p className="text-xs text-[var(--color-text-muted)]">{skill.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tools / Tech Stack Tags */}
                        <div className="mt-10">
                            <h4 className="text-sm font-medium text-[var(--color-text-dark)] mb-4 uppercase tracking-widest">
                                Tech Stack & Tools
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                                {techStack.map((tech, index) => (
                                    <motion.span
                                        key={tech.name}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.03 }}
                                        className="inline-flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-white/5 text-xs font-medium text-[var(--color-text-muted)] border border-[var(--color-cream-dark)] hover:border-[var(--color-burgundy)] hover:text-[var(--color-burgundy)] transition-colors cursor-default"
                                    >
                                        <tech.icon size={16} style={{ color: tech.color }} className="dark:brightness-125 flex-shrink-0" />
                                        {tech.name}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="mt-8">
                            <h4 className="text-sm font-medium text-[var(--color-text-dark)] mb-4 uppercase tracking-widest">
                                Languages
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { lang: "Kinyarwanda", level: "Native" },
                                    { lang: "English", level: "Fluent" },
                                    { lang: "French", level: "Intermediate" },
                                    { lang: "Swahili", level: "Intermediate" },
                                ].map((l) => (
                                    <div key={l.lang} className="flex items-center justify-between p-3 bg-white dark:bg-white/5 border border-[var(--color-cream-dark)]">
                                        <span className="text-xs font-medium text-[var(--color-text-dark)]">{l.lang}</span>
                                        <span className="text-xs text-[var(--color-burgundy)]">{l.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Users, User, Clock, CheckCircle2 } from "lucide-react";

interface Project {
    name: string;
    url: string;
    displayUrl: string;
    role: "team" | "solo";
    status: "live" | "development";
    description: string;
}

const projects: Project[] = [
    {
        name: "Higura",
        url: "https://www.higura.com",
        displayUrl: "higura.com",
        role: "team",
        status: "live",
        description:
            "AI-powered inventory & POS software helping shops across Rwanda and Africa track sales, stock, debts, and expenses from one simple dashboard.",
    },
    {
        name: "Eazy1Teck",
        url: "https://eazy1teck.com",
        displayUrl: "eazy1teck.com",
        role: "solo",
        status: "live",
        description:
            "An online electronics & smartphone retail platform serving customers across Rwanda — designed and built independently, end to end.",
    },
    {
        name: "IngendoHub",
        url: "https://ingendohub.vercel.app",
        displayUrl: "ingendohub.vercel.app",
        role: "solo",
        status: "development",
        description:
            "A bus booking platform for Rwanda that lets travelers search, compare, and reserve intercity bus tickets online.",
    },
    {
        name: "AutoRwa",
        url: "https://autorwa.vercel.app",
        displayUrl: "autorwa.vercel.app",
        role: "solo",
        status: "development",
        description:
            "A vehicle & auto spare-parts marketplace connecting Rwandan buyers directly with verified sellers, with WhatsApp contact and rental options.",
    },
];

const roleBadge = {
    team: { label: "Team Project", icon: Users },
    solo: { label: "Solo Project", icon: User },
};

export default function Projects() {
    return (
        <section id="projects" className="bg-[var(--color-cream)] py-20 lg:py-32">
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
                        What I&apos;ve Built
                    </p>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Products & Projects
                    </h2>
                    <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                        A selection of real-world products I&apos;ve shipped — solo and as part of a team.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const RoleIcon = roleBadge[project.role].icon;
                        const isLive = project.status === "live";

                        return (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-white/5 p-8 border border-[var(--color-cream-dark)] hover:border-[var(--color-burgundy)] transition-all group hover:shadow-lg flex flex-col"
                            >
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h3
                                        className="text-2xl text-[var(--color-text-dark)]"
                                        style={{ fontFamily: "var(--font-serif)" }}
                                    >
                                        {project.name}
                                    </h3>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${project.name}`}
                                        className="w-10 h-10 flex-shrink-0 bg-[var(--color-cream-dark)] group-hover:bg-[var(--color-burgundy)] flex items-center justify-center transition-all"
                                    >
                                        <ExternalLink
                                            size={16}
                                            className="text-[var(--color-burgundy)] group-hover:text-white transition-colors"
                                        />
                                    </a>
                                </div>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-text-muted)] border border-[var(--color-cream-dark)]">
                                        <RoleIcon size={12} />
                                        {roleBadge[project.role].label}
                                    </span>
                                    {isLive ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 border border-emerald-600/30 bg-emerald-600/10">
                                            <CheckCircle2 size={12} />
                                            Live
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 border border-amber-600/30 bg-amber-600/10">
                                            <Clock size={12} />
                                            In Development
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {!isLive && (
                                    <p className="text-xs text-amber-700 dark:text-amber-400 italic mb-4">
                                        Currently in development — launching soon.
                                    </p>
                                )}

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-burgundy)] hover:text-[var(--color-burgundy-dark)] transition-colors"
                                >
                                    {isLive ? "Visit Site" : "Preview"} · {project.displayUrl}
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

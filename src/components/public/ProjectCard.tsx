"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Users, User, Clock, CheckCircle2, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

const roleBadge = {
    team: { label: "Team Project", icon: Users },
    solo: { label: "Solo Project", icon: User },
};

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const RoleIcon = roleBadge[project.role].icon;
    const isLive = project.status === "live";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-white/5 border border-[var(--color-cream-dark)] hover:border-[var(--color-burgundy)] transition-all group hover:shadow-lg flex flex-col overflow-hidden"
        >
            {/* Screenshot */}
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
                className="relative block w-full aspect-[16/10] overflow-hidden bg-[var(--color-cream-dark)]"
            >
                <Image
                    src={project.image}
                    alt={`${project.name} — project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Status badge — floating on image */}
                <div className="absolute top-4 left-4">
                    {isLive ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest text-emerald-800 bg-emerald-400/90 backdrop-blur-sm">
                            <CheckCircle2 size={12} />
                            Live
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest text-amber-900 bg-amber-300/90 backdrop-blur-sm">
                            <Clock size={12} />
                            In Development
                        </span>
                    )}
                </div>

                {/* External link — floating on image */}
                <div className="absolute top-4 right-4 w-10 h-10 flex-shrink-0 bg-white/90 backdrop-blur-sm group-hover:bg-[var(--color-burgundy)] flex items-center justify-center transition-all">
                    <ExternalLink
                        size={16}
                        className="text-[var(--color-burgundy)] group-hover:text-white transition-colors"
                    />
                </div>
            </a>

            <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <h3
                        className="text-2xl text-[var(--color-text-dark)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        {project.name}
                    </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-text-muted)] border border-[var(--color-cream-dark)]">
                        <RoleIcon size={12} />
                        {roleBadge[project.role].label}
                    </span>
                </div>

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                    {project.tagline}
                </p>

                {!isLive && (
                    <p className="text-xs text-amber-700 dark:text-amber-400 italic mb-4">
                        Currently in development — launching soon.
                    </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors"
                    >
                        Case Study
                        <ArrowUpRight size={14} />
                    </Link>
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-burgundy)] hover:text-[var(--color-burgundy-dark)] transition-colors"
                    >
                        {isLive ? "Visit Site" : "Preview"} · {project.displayUrl}
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Users, User, Clock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { projects, getProjectBySlug } from "@/lib/projects";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { supabaseAdmin } from "@/lib/supabase";

interface Props {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    return {
        title: `${project.name} — Case Study`,
        description: project.tagline,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title: `${project.name} — Built by ${SITE_NAME}`,
            description: project.tagline,
            url: `${SITE_URL}/projects/${project.slug}`,
            images: [{ url: project.image }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.name} — Built by ${SITE_NAME}`,
            description: project.tagline,
            images: [project.image],
        },
    };
}

const roleBadge = {
    team: { label: "Team Project", icon: Users },
    solo: { label: "Solo Project", icon: User },
};

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const { data: settingsData } = await supabaseAdmin
        .from("site_settings")
        .select("*")
        .limit(1)
        .single();

    const RoleIcon = roleBadge[project.role].icon;
    const isLive = project.status === "live";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.name,
        description: project.tagline,
        url: `${SITE_URL}/projects/${project.slug}`,
        image: `${SITE_URL}${project.image}`,
        creator: {
            "@type": "Person",
            name: SITE_NAME,
            url: SITE_URL,
        },
    };

    return (
        <main className="bg-[var(--color-cream)] min-h-screen flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar ownerName={settingsData?.owner_name} />

            <div className="flex-grow pt-28 pb-20 lg:pb-32">
                <div className="max-w-4xl mx-auto px-6">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-text-muted)] hover:text-[var(--color-burgundy)] transition-colors mb-8"
                    >
                        <ArrowLeft size={14} />
                        All Projects
                    </Link>

                    {/* Screenshot */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--color-cream-dark)] mb-8">
                        <Image
                            src={project.image}
                            alt={`${project.name} — project preview`}
                            fill
                            priority
                            sizes="(min-width: 1024px) 896px, 100vw"
                            className="object-cover object-top"
                        />
                    </div>

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                            <h1
                                className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)] mb-3"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                {project.name}
                            </h1>
                            <div className="flex flex-wrap gap-2">
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
                        </div>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-burgundy)] text-white text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-burgundy-dark)] transition-colors flex-shrink-0"
                        >
                            {isLive ? "Visit Site" : "Preview"}
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-12">
                        {project.tagline}
                    </p>

                    {/* Content grid */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-10">
                            <div>
                                <h2 className="text-xl text-[var(--color-text-dark)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                                    The Problem
                                </h2>
                                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                                    {project.problem}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl text-[var(--color-text-dark)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                                    Key Features
                                </h2>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {project.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                                            <span className="w-1.5 h-1.5 mt-1.5 bg-[var(--color-burgundy)] rounded-full flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">My Role</h3>
                                <p className="text-sm text-[var(--color-text-dark)] leading-relaxed">{project.myRole}</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 bg-white dark:bg-white/5 border border-[var(--color-cream-dark)] text-xs text-[var(--color-text-dark)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other projects */}
                    <div className="mt-20 pt-10 border-t border-[var(--color-cream-dark)]">
                        <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">More Projects</h3>
                        <div className="flex flex-wrap gap-4">
                            {projects
                                .filter((p) => p.slug !== project.slug)
                                .map((p) => (
                                    <Link
                                        key={p.slug}
                                        href={`/projects/${p.slug}`}
                                        className="text-sm text-[var(--color-burgundy)] hover:text-[var(--color-burgundy-dark)] transition-colors"
                                    >
                                        {p.name} →
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer
                ownerName={settingsData?.owner_name}
                contactEmail={settingsData?.contact_email}
                phoneNumber={settingsData?.phone_number || undefined}
                instagramUrl={settingsData?.instagram_url || undefined}
            />
        </main>
    );
}

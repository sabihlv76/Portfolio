import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import About from "@/components/public/About";
import Experience from "@/components/public/Experience";
import Services from "@/components/public/Services";
import Skills from "@/components/public/Skills";
import { projects } from "@/lib/projects";
import { supabaseAdmin } from "@/lib/supabase";

export const metadata: Metadata = {
    title: "About",
    description:
        "Sabih Iriho is a software engineer specializing in full-stack web development. He builds modern, scalable websites and web applications for businesses across Rwanda and beyond, alongside graphic design, video editing, and sales & marketing.",
    alternates: { canonical: "/about" },
};

export const dynamic = "force-dynamic";

async function getData() {
    const [aboutRes, settingsRes] = await Promise.all([
        supabaseAdmin.from("about_content").select("*").limit(1).single(),
        supabaseAdmin.from("site_settings").select("*").limit(1).single(),
    ]);
    return { aboutData: aboutRes.data, settingsData: settingsRes.data };
}

export default async function AboutPage() {
    const { aboutData, settingsData } = await getData();

    return (
        <main className="bg-[var(--color-cream)] min-h-screen flex flex-col">
            <Navbar ownerName={settingsData?.owner_name} />

            {/* Page header with the primary H1 */}
            <section className="pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p
                        className="text-lg text-[var(--color-brown)] italic mb-4"
                        style={{ fontFamily: "var(--font-script)" }}
                    >
                        About Me
                    </p>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] leading-tight"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Sabih Iriho — Software Developer &amp; Full-Stack Engineer
                    </h1>
                    <p className="text-[var(--color-text-muted)] mt-6 max-w-2xl mx-auto leading-relaxed">
                        Based in Kigali, Rwanda, Sabih Iriho builds modern, scalable web applications and custom
                        software solutions for businesses across Rwanda and, increasingly, across Africa — with
                        remote collaboration available worldwide.
                    </p>
                </div>
            </section>

            <About
                introLine={aboutData?.intro_line}
                headline={aboutData?.headline}
                description={aboutData?.description}
                ctaText={aboutData?.cta_text}
            />

            <Experience />

            <Services />

            <Skills />

            {/* Projects pointer */}
            <section className="bg-[var(--color-cream)] py-20 lg:py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2
                        className="text-2xl md:text-3xl text-[var(--color-text-dark)] mb-4"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Recent Work
                    </h2>
                    <p className="text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                        A selection of products Sabih has shipped, each with a full case study covering the
                        problem, role, and features built.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="text-sm text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors underline decoration-[var(--color-cream-dark)] underline-offset-4"
                            >
                                {project.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-burgundy)] hover:text-[var(--color-burgundy-dark)] transition-colors"
                    >
                        View All Projects
                        <ArrowUpRight size={14} />
                    </Link>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="bg-[var(--color-cream-dark)] py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2
                        className="text-2xl md:text-3xl text-[var(--color-text-dark)] mb-4"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                        Available for freelance projects and collaborations — reach out directly or head to the contact form.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                        <a
                            href={`mailto:${settingsData?.contact_email || "sabihlv76@gmail.com"}`}
                            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors"
                        >
                            <Mail size={16} />
                            {settingsData?.contact_email || "sabihlv76@gmail.com"}
                        </a>
                        {settingsData?.phone_number && (
                            <a
                                href={`tel:${settingsData.phone_number}`}
                                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors"
                            >
                                <Phone size={16} />
                                {settingsData.phone_number}
                            </a>
                        )}
                    </div>
                    <Link
                        href="/#contact"
                        className="inline-block px-8 py-4 bg-[var(--color-burgundy)] text-white text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-burgundy-dark)] transition-colors"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>

            <Footer
                ownerName={settingsData?.owner_name}
                contactEmail={settingsData?.contact_email}
                phoneNumber={settingsData?.phone_number || undefined}
                instagramUrl={settingsData?.instagram_url || undefined}
            />
        </main>
    );
}

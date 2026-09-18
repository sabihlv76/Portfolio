import type { Metadata } from "next";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import ProjectCard from "@/components/public/ProjectCard";
import { projects } from "@/lib/projects";
import { supabaseAdmin } from "@/lib/supabase";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore software products built by Sabih Iriho — including Higura, Eazy1Teck, IngendoHub, and AutoRwa — spanning inventory management, e-commerce, travel booking, and marketplace platforms.",
    alternates: { canonical: "/projects" },
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
    const { data: settingsData } = await supabaseAdmin
        .from("site_settings")
        .select("*")
        .limit(1)
        .single();

    return (
        <main className="bg-[var(--color-cream)] min-h-screen flex flex-col">
            <Navbar ownerName={settingsData?.owner_name} />

            <div className="flex-grow pt-32 pb-20 lg:pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p
                            className="text-lg text-[var(--color-brown)] italic mb-4"
                            style={{ fontFamily: "var(--font-script)" }}
                        >
                            What I&apos;ve Built
                        </p>
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)]"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Products & Projects
                        </h1>
                        <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                            Real-world products built by Sabih Iriho — solo and as part of a team. Each project below has a full case study covering the problem, role, and features shipped.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
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

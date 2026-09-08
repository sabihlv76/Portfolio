import Navbar from "@/components/public/Navbar";
import Hero from "@/components/public/Hero";
import About from "@/components/public/About";
import Services from "@/components/public/Services";
import Projects from "@/components/public/Projects";
import Skills from "@/components/public/Skills";
import Values from "@/components/public/Values";
import Contact from "@/components/public/Contact";
import Footer from "@/components/public/Footer";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic"; // Always fetch fresh data

async function getData() {
    const [heroRes, aboutRes, valuesRes, settingsRes] = await Promise.all([
        supabaseAdmin.from("hero_content").select("*").limit(1).single(),
        supabaseAdmin.from("about_content").select("*").limit(1).single(),
        supabaseAdmin.from("values").select("*").order("order", { ascending: true }),
        supabaseAdmin.from("site_settings").select("*").limit(1).single(),
    ]);

    return {
        heroData: heroRes.data,
        aboutData: aboutRes.data,
        valuesData: valuesRes.data ?? [],
        settingsData: settingsRes.data,
    };
}

export default async function Home() {
    const { heroData, aboutData, valuesData, settingsData } = await getData();

    return (
        <main>
            <Navbar ownerName={settingsData?.owner_name} />
            <Hero
                headline={heroData?.headline}
                subtitle={heroData?.subtitle}
                ctaText={heroData?.cta_text}
                studentsCount={heroData?.students_count || undefined}
                roleTitle={heroData?.role_title || undefined}
                roleSubtitle={heroData?.role_subtitle || undefined}
            />
            <About
                introLine={aboutData?.intro_line}
                headline={aboutData?.headline}
                description={aboutData?.description}
                ctaText={aboutData?.cta_text}
            />
            <Services />
            <Projects />
            <Skills />
            <Values values={valuesData} />
            <Contact
                contactEmail={settingsData?.contact_email}
                phoneNumber={settingsData?.phone_number || undefined}
                instagramUrl={settingsData?.instagram_url || undefined}
            />
            <Footer
                ownerName={settingsData?.owner_name}
                contactEmail={settingsData?.contact_email}
                phoneNumber={settingsData?.phone_number || undefined}
                instagramUrl={settingsData?.instagram_url || undefined}
            />
        </main>
    );
}

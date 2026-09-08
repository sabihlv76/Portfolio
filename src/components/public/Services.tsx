"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Video, TrendingUp } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Software Development",
        description: "Building modern, scalable web applications with clean architecture, responsive design, and optimized performance.",
        features: [
            "Full-Stack Web Development",
            "Frontend with React.js",
            "Backend with Node.js",
            "REST API Integration",
            "Performance Optimization",
            "Debugging & Maintenance",
        ],
    },
    {
        icon: Palette,
        title: "Graphic Design",
        description: "Creating visually compelling brand identities, marketing materials, and digital graphics using professional design tools.",
        features: [
            "Logo Design",
            "Branding & Visual Identity",
            "Social Media Graphics",
            "Posters & Banners",
            "Marketing Materials",
            "Typography & Layout",
        ],
    },
    {
        icon: Video,
        title: "Video Editing",
        description: "Professional post-production editing for promotional content, short-form social media videos, and motion graphics.",
        features: [
            "Professional Video Editing",
            "Motion Graphics",
            "Short-form Content",
            "Promotional Videos",
            "Social Media Videos",
            "Post-Production Editing",
        ],
    },
    {
        icon: TrendingUp,
        title: "Sales & Business Services",
        description: "Driving business growth through strategic customer acquisition, lead generation, and relationship management.",
        features: [
            "Customer Acquisition",
            "Sales Strategy",
            "Lead Generation",
            "Client Communication",
            "Brand Promotion",
            "Partnership Negotiation",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-[var(--color-cream)] py-20 lg:py-32">
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
                        What I Offer
                    </p>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Services & Expertise
                    </h2>
                    <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                        A unique blend of technical skills and creative expertise — I deliver end-to-end digital solutions tailored to your needs.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-8 border border-[var(--color-cream-dark)] hover:border-[var(--color-burgundy)] transition-all group hover:shadow-lg"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-[var(--color-cream-dark)] group-hover:bg-[var(--color-burgundy)] flex items-center justify-center transition-all flex-shrink-0">
                                    <service.icon
                                        className="text-[var(--color-burgundy)] group-hover:text-white transition-colors"
                                        size={22}
                                    />
                                </div>
                                <div>
                                    <h3
                                        className="text-xl text-[var(--color-text-dark)]"
                                        style={{ fontFamily: "var(--font-serif)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <ul className="grid grid-cols-2 gap-2">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-xs text-[var(--color-text-muted)] flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[var(--color-burgundy)] rounded-full flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-[var(--color-burgundy)] text-white text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-burgundy-dark)] transition-colors"
                    >
                        Let&apos;s Work Together
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

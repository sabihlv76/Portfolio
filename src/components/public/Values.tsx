"use client";

import { motion } from "framer-motion";

interface Value {
    id: string;
    title: string;
    description: string | null;
}

interface ValuesProps {
    values?: Value[];
}

const defaultValues: Value[] = [
    {
        id: "1",
        title: "Continuous Learning",
        description:
            "Technology evolves every day and I evolve with it. I am committed to constantly learning new tools, frameworks, and best practices to stay ahead and deliver cutting-edge solutions.",
    },
    {
        id: "2",
        title: "Creativity & Innovation",
        description:
            "Great products are born from creative thinking. I approach every problem — whether in code, design, or business — with fresh perspectives and innovative solutions that stand out.",
    },
    {
        id: "3",
        title: "Discipline & Resilience",
        description:
            "Building meaningful things takes persistence. I embrace challenges as opportunities, stay focused under pressure, and consistently deliver quality work regardless of difficulty.",
    },
    {
        id: "4",
        title: "Growth Mindset",
        description:
            "I believe that skills, intelligence, and capabilities are developed through dedication and hard work. Every project is an opportunity to grow — technically, creatively, and professionally.",
    },
];

export default function Values({ values = defaultValues }: ValuesProps) {
    return (
        <section id="values" className="bg-[var(--color-cream)] py-20 lg:py-32 overflow-hidden">
            {/* Scrolling "MY VALUES" Text */}
            <div className="relative mb-16">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(4)].map((_, i) => (
                        <span
                            key={i}
                            className="text-6xl md:text-8xl lg:text-9xl text-[var(--color-cream-dark)] font-bold tracking-wider mx-8"
                            style={{ fontFamily: "var(--font-serif)", WebkitTextStroke: "1px var(--color-text-dark)", color: "transparent" }}
                        >
                            MY VALUES
                        </span>
                    ))}
                </div>
            </div>

            {/* Values Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[var(--color-burgundy)] p-8 lg:p-10 text-white hover:bg-[var(--color-burgundy-dark)] transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl font-bold opacity-20 group-hover:opacity-40 transition-opacity" style={{ fontFamily: "var(--font-serif)" }}>
                                    0{index + 1}
                                </span>
                                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
                                    {value.title}
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed opacity-90">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

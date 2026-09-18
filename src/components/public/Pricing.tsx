"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Wallet, ShieldCheck, LifeBuoy } from "lucide-react";

interface Tier {
    name: string;
    price: number;
    rwf: number;
    tagline: string;
    delivery: string;
    support: string;
    cta: string;
    popular: boolean;
    features: string[];
}

const tiers: Tier[] = [
    {
        name: "Starter",
        price: 150,
        rwf: 195000,
        tagline: "Best for small businesses",
        delivery: "1–2 weeks",
        support: "7 days",
        cta: "Get Started",
        popular: false,
        features: [
            "Responsive single/multi-page website",
            "Mobile-first design",
            "Basic SEO setup",
            "Contact form integration",
            "1 round of revisions",
        ],
    },
    {
        name: "Professional",
        price: 450,
        rwf: 585000,
        tagline: "Best for growing businesses",
        delivery: "2–5 weeks",
        support: "30 days",
        cta: "Get Started",
        popular: true,
        features: [
            "Custom multi-page web app",
            "Admin dashboard / CMS",
            "Third-party integrations (payments, WhatsApp, etc.)",
            "Performance & SEO optimization",
            "3 rounds of revisions",
        ],
    },
    {
        name: "Premium",
        price: 900,
        rwf: 1170000,
        tagline: "Custom platforms",
        delivery: "4–10+ weeks",
        support: "60–90 days",
        cta: "Let's Discuss",
        popular: false,
        features: [
            "Fully custom platform / SaaS build",
            "Database & backend architecture",
            "API integrations & automation",
            "Scalable, production-ready deployment",
            "Priority support & training",
        ],
    },
];

const assurances = [
    { icon: MessageCircle, label: "Free Discovery Call", desc: "Discuss scope before you commit" },
    { icon: Wallet, label: "Milestone Payments", desc: "Pay as work is delivered" },
    { icon: ShieldCheck, label: "Fixed-Price Quotes", desc: "No hidden costs, ever" },
    { icon: LifeBuoy, label: "Post-Launch Support", desc: "Help available after delivery" },
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-[var(--color-cream-dark)] py-20 lg:py-32">
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
                        Investment
                    </p>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Pricing & Packages
                    </h2>
                    <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                        Transparent, project-based pricing — pick a package as a starting point, or reach out for a custom quote.
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 transition-all group ${tier.popular
                                    ? "bg-[var(--color-burgundy)] text-white lg:-translate-y-4 shadow-xl"
                                    : "bg-white dark:bg-white/5 border border-[var(--color-cream-dark)] hover:border-[var(--color-burgundy)] hover:shadow-lg"
                                }`}
                        >
                            {tier.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-text-dark)] text-white text-[10px] font-semibold tracking-[0.2em] uppercase">
                                    Most Popular
                                </span>
                            )}

                            <h3
                                className="text-2xl mb-1"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                {tier.name}
                            </h3>
                            <p
                                className={`text-xs uppercase tracking-widest mb-6 ${tier.popular ? "text-white/70" : "text-[var(--color-text-muted)]"
                                    }`}
                            >
                                {tier.tagline}
                            </p>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xs uppercase tracking-widest opacity-70">From</span>
                                    <span
                                        className="text-4xl"
                                        style={{ fontFamily: "var(--font-serif)" }}
                                    >
                                        ${tier.price}
                                    </span>
                                    <span className="text-sm opacity-70">USD</span>
                                </div>
                                <p className={`text-sm mt-1 ${tier.popular ? "text-white/70" : "text-[var(--color-text-muted)]"}`}>
                                    ≈ {tier.rwf.toLocaleString()} RWF
                                </p>
                            </div>

                            {/* Delivery / Support */}
                            <div
                                className={`grid grid-cols-2 gap-4 pb-6 mb-6 border-b text-sm ${tier.popular ? "border-white/20" : "border-[var(--color-cream-dark)]"
                                    }`}
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Delivery</p>
                                    <p className="font-medium">{tier.delivery}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Support</p>
                                    <p className="font-medium">{tier.support}</p>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                                        <Check
                                            size={16}
                                            className={`flex-shrink-0 mt-0.5 ${tier.popular ? "text-white" : "text-[var(--color-burgundy)]"}`}
                                        />
                                        <span className={tier.popular ? "text-white/90" : "text-[var(--color-text-muted)]"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`mt-auto inline-block text-center px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors ${tier.popular
                                        ? "bg-white text-[var(--color-burgundy)] hover:bg-white/90"
                                        : "bg-[var(--color-burgundy)] text-white hover:bg-[var(--color-burgundy-dark)]"
                                    }`}
                            >
                                {tier.cta}
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                {/* Assurances strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
                >
                    {assurances.map((a) => (
                        <div
                            key={a.label}
                            className="flex items-start gap-3 p-5 bg-white dark:bg-white/5 border border-[var(--color-cream-dark)]"
                        >
                            <a.icon size={20} className="text-[var(--color-burgundy)] flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-[var(--color-text-dark)]">{a.label}</p>
                                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{a.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <p className="text-center text-xs text-[var(--color-text-muted)] mt-8 italic">
                    * RWF amounts are approximate (~1 USD ≈ 1,300 RWF) and confirmed in your preferred currency before work begins. Final pricing depends on project scope.
                </p>
            </div>
        </section>
    );
}

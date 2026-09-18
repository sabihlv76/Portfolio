"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { Menu, X, CalendarClock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const emptySubscribe = () => () => {};

function useMounted() {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
}

const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
];

import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Heart } from "lucide-react";

interface NavbarProps {
    ownerName?: string;
}

export default function Navbar({ ownerName = "Sabih Iriho" }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const mounted = useMounted();
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${scrolled
                    ? "bg-[var(--color-cream)]/95 border-[var(--color-cream-dark)] shadow-sm py-0"
                    : "bg-[var(--color-cream)]/70 border-transparent py-1"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-[var(--font-serif)] text-lg tracking-widest uppercase text-[var(--color-text-dark)]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                >
                    {ownerName}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-8" onMouseLeave={() => setHovered(null)}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onMouseEnter={() => setHovered(link.href)}
                                className="relative py-2 text-xs tracking-widest uppercase text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors"
                            >
                                {link.label}
                                {hovered === link.href && (
                                    <motion.span
                                        layoutId="nav-hover-underline"
                                        className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[var(--color-burgundy)]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "pink" : theme === "pink" ? "light" : "dark")}
                        className="p-2 text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors"
                        aria-label="Toggle theme"
                    >
                        {!mounted ? <Sun size={18} /> : theme === "dark" ? <Moon size={18} /> : theme === "pink" ? <Heart size={18} /> : <Sun size={18} />}
                    </button>

                    {/* Book a Call CTA */}
                    <motion.a
                        href="/#contact"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-burgundy)] text-white text-xs tracking-[0.15em] uppercase overflow-hidden group"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-burgundy-light)] to-[var(--color-burgundy)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CalendarClock size={14} className="relative" />
                        <span className="relative">Book a Call</span>
                    </motion.a>
                </div>

                {/* Mobile Controls */}
                <div className="lg:hidden flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "pink" : theme === "pink" ? "light" : "dark")}
                        className="p-2 text-[var(--color-text-dark)]"
                        aria-label="Toggle theme"
                    >
                        {!mounted ? <Sun size={20} /> : theme === "dark" ? <Moon size={20} /> : theme === "pink" ? <Heart size={20} /> : <Sun size={20} />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-[var(--color-text-dark)]"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[var(--color-cream)] border-t border-[var(--color-cream-dark)]"
                    >
                        <div className="flex flex-col px-6 py-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm tracking-widest uppercase text-[var(--color-text-dark)] hover:text-[var(--color-burgundy)] transition-colors py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 text-center text-xs tracking-widest uppercase bg-[var(--color-burgundy)] text-white"
                            >
                                <CalendarClock size={14} />
                                Book a Call
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
}

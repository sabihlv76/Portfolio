"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
    { text: "Hello", lang: "English" },
    { text: "Muraho", lang: "Kinyarwanda" },
    { text: "Bonjour", lang: "Français" },
    { text: "Hujambo", lang: "Kiswahili" },
];

const WORD_INTERVAL = 340;
const SESSION_KEY = "sabih-intro-seen";

const emptySubscribe = () => () => {};

function useHasSeenIntro() {
    return useSyncExternalStore(
        emptySubscribe,
        () => sessionStorage.getItem(SESSION_KEY) === "1",
        () => false
    );
}

export default function IntroExperience({ children }: { children: React.ReactNode }) {
    const hasSeenIntro = useHasSeenIntro();
    const [phase, setPhase] = useState<"playing" | "revealing" | "done">("playing");
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        if (hasSeenIntro) return;

        document.documentElement.style.overflow = "hidden";

        const wordTimer = setInterval(() => {
            setWordIndex((i) => Math.min(i + 1, greetings.length - 1));
        }, WORD_INTERVAL);

        const cycleDuration = greetings.length * WORD_INTERVAL;

        const revealTimer = setTimeout(() => {
            setPhase("revealing");
        }, cycleDuration + 200);

        const doneTimer = setTimeout(() => {
            setPhase("done");
            document.documentElement.style.overflow = "";
            sessionStorage.setItem(SESSION_KEY, "1");
        }, cycleDuration + 350);

        return () => {
            clearInterval(wordTimer);
            clearTimeout(revealTimer);
            clearTimeout(doneTimer);
            document.documentElement.style.overflow = "";
        };
    }, [hasSeenIntro]);

    const showOverlay = !hasSeenIntro && phase !== "done";
    const mountContent = hasSeenIntro || phase !== "playing";

    return (
        <>
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        key="intro-overlay"
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-[var(--color-text-dark)]"
                        style={{ clipPath: "inset(0 0 0% 0)" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={greetings[wordIndex].text}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.28 }}
                                className="text-4xl md:text-6xl text-[var(--color-cream)]"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                {greetings[wordIndex].text}
                            </motion.span>
                        </AnimatePresence>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                            className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-cream)]"
                        >
                            {greetings[wordIndex].lang}
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>
            {mountContent && children}
        </>
    );
}

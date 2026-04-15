"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { dict } = useLanguage();

    return (
        <section id="inicio" className="hero">
            <div className="site-wrap flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Green subtle badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-tag"
                    >
                        <span>👋 {dict.hero.greeting}</span>
                    </motion.div>

                    {/* Main title - Syne 800 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="hero-title"
                    >
                        Luis
                        <br />
                        <span className="text-muted">Fernando</span>
                    </motion.h1>

                    {/* Subtitle - DM Sans 300 */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-sub"
                    >
                        {dict.hero.role}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-cta-row"
                    >
                        <Link href="#projetos" className="btn-primary">
                            {dict.hero.btnProject}
                        </Link>
                        <Link href="#contato" className="btn-outline">
                            {dict.hero.btnContact}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



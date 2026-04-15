"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { dict } = useLanguage();

    return (
        <section id="sobre" className="about">
            <div className="site-wrap">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="about-wrap"
                >
                    <p 
                        className="text-base md:text-lg leading-relaxed max-w-3xl"
                        style={{ color: "var(--text)" }}
                    >
                        {dict.about.description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}



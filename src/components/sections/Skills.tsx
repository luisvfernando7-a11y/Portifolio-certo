"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
    { id: "backend", isPrimary: true },
    { id: "frontend", isPrimary: false },
    { id: "ai", isPrimary: false }
];

export function Skills() {
    const { dict } = useLanguage();

    return (
        <section id="skills" className="skills">
            <div className="site-wrap">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {dict.skills.subtitle}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {categories.map((cat, index) => {
                        const dictCat = (dict.skills as any)[cat.id];
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col gap-4"
                            >
                                <h3 
                                    className="text-xs font-bold uppercase tracking-widest"
                                    style={{ 
                                        fontFamily: "var(--font-mono)",
                                        color: cat.isPrimary ? "var(--text)" : "var(--text-muted)"
                                    }}
                                >
                                    {dictCat.title}
                                </h3>

                                <ul className="space-y-2">
                                    {dictCat.items.map((skill: string) => (
                                        <li
                                            key={skill}
                                            className="text-sm"
                                            style={{ 
                                                color: cat.isPrimary ? "var(--text)" : "var(--text-muted)",
                                                fontFamily: "var(--font-body)"
                                            }}
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


"use client";

import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
    {
        id: "backend",
        icon: <Terminal className="w-5 h-5" />,
        isPrimary: true
    },
    {
        id: "ai",
        icon: <BrainCircuit className="w-5 h-5" />,
        isPrimary: false
    },
    {
        id: "frontend",
        icon: <Globe className="w-5 h-5" />,
        isPrimary: false
    }
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
                                className="flex flex-col gap-6"
                            >
                                <div 
                                    className="flex items-center gap-3 pb-4 border-b"
                                    style={{ 
                                        borderColor: cat.isPrimary ? "var(--accent)" : "var(--border)",
                                        color: cat.isPrimary ? "var(--accent)" : "var(--text-muted)"
                                    }}
                                >
                                    <span>{cat.icon}</span>
                                    <h3 
                                        className="text-base font-semibold"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        {dictCat.title}
                                    </h3>
                                </div>

                                <ul className="space-y-3">
                                    {dictCat.items.map((skill: string) => (
                                        <li
                                            key={skill}
                                            className="text-sm transition-colors hover:opacity-80"
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


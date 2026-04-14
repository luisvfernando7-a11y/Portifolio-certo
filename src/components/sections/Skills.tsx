"use client";

import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
    {
        id: "backend",
        icon: <Terminal className="w-5 h-5 text-accent" />,
        isPrimary: true
    },
    {
        id: "ai",
        icon: <BrainCircuit className="w-5 h-5 text-gray-400" />,
        isPrimary: false
    },
    {
        id: "frontend",
        icon: <Globe className="w-5 h-5 text-gray-500" />,
        isPrimary: false
    }
];

export function Skills() {
    const { dict } = useLanguage();

    return (
        <section id="skills" className="py-32 px-4 md:px-6 bg-[#0a0a0b]">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                        {dict.skills.subtitle}
                    </h2>
                    <div className="h-[1px] flex-grow bg-white/10" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {categories.map((cat, index) => {
                        const dictCat = (dict.skills as any)[cat.id];
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col gap-8"
                            >
                                <div className="flex items-center gap-3">
                                    {cat.icon}
                                    <h3 className={`text-xl font-bold ${cat.isPrimary ? "text-white" : "text-gray-400"}`}>
                                        {dictCat.title}
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {dictCat.items.map((skill: string) => (
                                        <li
                                            key={skill}
                                            className={`text-lg transition-colors ${
                                                cat.isPrimary 
                                                    ? "text-gray-300 hover:text-accent" 
                                                    : "text-gray-500 hover:text-gray-300"
                                            }`}
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


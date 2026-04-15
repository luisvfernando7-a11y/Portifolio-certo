"use client";

import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
    {
        id: "backend",
        icon: <Terminal className="w-5 h-5 text-black" />,
        isPrimary: true
    },
    {
        id: "ai",
        icon: <BrainCircuit className="w-5 h-5 text-gray-600" />,
        isPrimary: false
    },
    {
        id: "frontend",
        icon: <Globe className="w-5 h-5 text-gray-600" />,
        isPrimary: false
    }
];

export function Skills() {
    const { dict } = useLanguage();

    return (
        <section id="skills" className="py-20 md:py-32 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-16"
                >
                    {dict.skills.subtitle}
                </motion.h2>

                {/* Grid de categorias */}
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
                                {/* Cabeçalho da categoria */}
                                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                                    <span className={`${cat.isPrimary ? "text-black" : "text-gray-400"}`}>
                                        {cat.icon}
                                    </span>
                                    <h3 className={`text-lg font-semibold ${
                                        cat.isPrimary ? "text-black" : "text-gray-600"
                                    }`}>
                                        {dictCat.title}
                                    </h3>
                                </div>

                                {/* Lista de skills */}
                                <ul className="space-y-3">
                                    {dictCat.items.map((skill: string) => (
                                        <li
                                            key={skill}
                                            className={`text-base transition-colors ${
                                                cat.isPrimary 
                                                    ? "text-gray-700 hover:text-black" 
                                                    : "text-gray-600 hover:text-gray-900"
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


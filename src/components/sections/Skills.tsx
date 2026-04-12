"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Globe, Braces, BrainCircuit, Terminal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
    {
        id: "backend",
        icon: <Terminal className="w-8 h-8" />,
        color: "from-primary-purple to-purple-400",
        shadow: "shadow-primary-purple/20",
        border: "border-primary-purple/30",
        bg: "bg-primary-purple/10",
        prominence: "large"
    },
    {
        id: "ai",
        icon: <BrainCircuit className="w-8 h-8" />,
        color: "from-primary-cyan to-blue-400",
        shadow: "shadow-primary-cyan/20",
        border: "border-primary-cyan/30",
        bg: "bg-primary-cyan/10",
        prominence: "large"
    },
    {
        id: "frontend",
        icon: <Globe className="w-8 h-8" />,
        color: "from-gray-400 to-gray-600",
        shadow: "shadow-gray-500/10",
        border: "border-gray-500/20",
        bg: "bg-gray-500/5",
        prominence: "small"
    }
];

export function Skills() {
    const { dict } = useLanguage();

    return (
        <section id="skills" className="py-24 px-4 md:px-6 bg-[#0a0a0f] scroll-mt-28">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4">
                        {dict.skills.title}{" "}
                        <span className="text-gradient">{dict.skills.subtitle}</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary-purple to-primary-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => {
                        const dictCat = (dict.skills as any)[cat.id];
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass rounded-[2rem] p-8 border ${cat.border} group relative overflow-hidden flex flex-col`}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-5 blur-[40px] group-hover:opacity-10 transition-opacity`} />
                                
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`p-4 rounded-2xl ${cat.bg} border ${cat.border} text-white group-hover:scale-110 transition-transform`}>
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white leading-none">
                                        {dictCat.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {dictCat.items.map((skill: string) => (
                                        <span
                                            key={skill}
                                            className={`px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-gray-300 font-medium text-sm group-hover:border-white/20 transition-colors shadow-sm`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

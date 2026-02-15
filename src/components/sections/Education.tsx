"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Education() {
    const { dict } = useLanguage();

    return (
        <section
            id="formacao"
            className="py-20 px-4 md:px-6 bg-black scroll-mt-28"
        >
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        {dict.education.title}{" "}
                        <span className="text-blue-500">
                            {dict.education.subtitle}
                        </span>
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-blue-500/20 ml-4 md:ml-12 space-y-12">
                    {dict.education.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-[9px] top-0 p-2 rounded-full bg-blue-500/10 border border-blue-500 text-blue-500">
                                <GraduationCap size={16} />
                            </span>

                            <div className="flex flex-col gap-2">
                                <span className="flex items-center gap-2 text-sm text-blue-400 font-mono bg-blue-500/5 w-fit px-3 py-1 rounded-full border border-blue-500/10">
                                    <Calendar size={14} />
                                    {item.year}
                                </span>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-100 mt-2">
                                    {item.title}
                                </h3>

                                <span className="text-lg text-gray-400 font-medium">
                                    {item.institution}
                                </span>

                                <p className="text-gray-500 leading-relaxed mt-2 max-w-xl">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

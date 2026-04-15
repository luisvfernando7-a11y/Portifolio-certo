"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
    const { dict } = useLanguage();

    return (
        <section
            id="projetos"
            className="py-20 md:py-32 px-4 md:px-6"
        >
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col gap-12">
                    {/* Título */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        {dict.projects.subtitle}
                    </motion.h2>

                    {/* Descrição */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg text-gray-600 italic max-w-2xl"
                    >
                        {dict.projects.description}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}



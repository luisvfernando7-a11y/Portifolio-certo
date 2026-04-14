"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
    const { dict } = useLanguage();

    return (
        <section
            id="projetos"
            className="py-32 px-4 md:px-6 bg-[#0a0a0b]"
        >
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                            {dict.projects.subtitle}
                        </h2>
                        <div className="h-[1px] flex-grow bg-white/10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="py-12"
                    >
                        <p className="text-xl md:text-2xl font-medium text-gray-500 italic">
                            {dict.projects.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



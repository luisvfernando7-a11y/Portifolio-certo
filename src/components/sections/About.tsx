"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { dict } = useLanguage();

    return (
        <section
            id="sobre"
            className="py-20 md:py-32 px-4 md:px-6 relative"
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
                        {dict.about.title}
                    </motion.h2>

                    {/* Descrição */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="max-w-3xl"
                    >
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed md:leading-loose">
                            {dict.about.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



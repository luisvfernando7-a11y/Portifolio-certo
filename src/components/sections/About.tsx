"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { dict } = useLanguage();

    return (
        <section
            id="sobre"
            className="py-32 px-4 md:px-6 bg-[#0a0a0b] relative overflow-hidden"
        >
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="flex flex-col gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                            {dict.about.title}
                        </h2>
                        <div className="h-[1px] flex-grow bg-white/10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-xl md:text-3xl font-medium text-gray-200 leading-relaxed md:leading-tight">
                            {dict.about.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



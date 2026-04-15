"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { dict } = useLanguage();
    const email = "luisvfernando7@gmail.com";

    return (
        <footer
            id="contato"
            className="py-20 md:py-32 px-4 md:px-6 border-t border-gray-200"
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
                        {dict.footer.subtitle}
                    </motion.h2>

                    {/* Descrição e CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex flex-col gap-8 max-w-2xl"
                    >
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {dict.footer.text}
                        </p>

                        {/* Email CTA */}
                        <motion.a
                            href={`mailto:${email}`}
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold transition-opacity hover:opacity-90 w-fit"
                        >
                            <Mail size={20} />
                            {email}
                        </motion.a>
                    </motion.div>

                    {/* Copyright */}
                    <div className="pt-8 md:pt-12 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            {dict.footer.copy}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}



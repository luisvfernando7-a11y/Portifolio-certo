"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { dict } = useLanguage();

    return (
        <section
            id="inicio"
            className="flex min-h-screen items-center justify-center py-32 px-4 md:px-6 relative overflow-hidden bg-[#0a0a0b]"
        >
            {/* Subtle background texture/gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)]" />
            
            <div className="container mx-auto max-w-5xl z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm md:text-base font-bold tracking-[0.2em] text-accent uppercase mb-6"
                    >
                        {dict.hero.greeting}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8"
                    >
                        {dict.hero.name}
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-2xl"
                    >
                        <p className="text-xl md:text-3xl font-medium text-muted leading-relaxed">
                            {dict.hero.role}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-8 mt-16"
                    >
                        <Link
                            href="#projetos"
                            className="text-lg font-bold link-hover active:scale-95 transition-transform"
                        >
                            {dict.hero.btnProject}
                        </Link>

                        <Link
                            href="#contato"
                            className="text-lg font-bold link-hover active:scale-95 transition-transform"
                        >
                            {dict.hero.btnContact}
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-accent to-transparent" />
            </motion.div>
        </section>
    );
}



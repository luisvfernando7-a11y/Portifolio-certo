"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { dict } = useLanguage();

    return (
        <section
            id="inicio"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Vídeo de fundo */}
            <div className="absolute inset-0 -z-10 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23ffffff' width='1200' height='800'/%3E%3C/svg%3E"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay escuro para melhorar legibilidade */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4 md:px-6 py-32">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col items-center text-center gap-6">
                        {/* Greeting tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-none bg-white/5"
                        >
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <span className="text-sm font-medium text-white tracking-wide">
                                {dict.hero.greeting}
                            </span>
                        </motion.div>

                        {/* Main title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white max-w-5xl"
                        >
                            {dict.hero.name}
                        </motion.h1>
                        
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                        >
                            {dict.hero.role}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mt-8"
                        >
                            <Link
                                href="#projetos"
                                className="px-8 py-3 bg-white text-black font-semibold transition-opacity hover:opacity-90"
                            >
                                {dict.hero.btnProject}
                            </Link>
                            <Link
                                href="#contato"
                                className="px-8 py-3 border border-white text-white font-semibold transition-all hover:bg-white/10"
                            >
                                {dict.hero.btnContact}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border border-white/50 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-1.5 bg-white rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}



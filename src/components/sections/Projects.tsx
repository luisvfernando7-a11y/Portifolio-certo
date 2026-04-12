"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SkeletonCard = ({ delay }: { delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="glass rounded-[2rem] p-8 border border-white/5 flex flex-col gap-6 relative overflow-hidden group"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
        
        <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Code2 className="text-gray-600" />
            </div>
            <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
            </div>
        </div>

        <div className="space-y-3">
            <div className="h-6 w-2/3 bg-white/10 rounded-lg" />
            <div className="h-4 w-full bg-white/5 rounded-lg" />
            <div className="h-4 w-4/5 bg-white/5 rounded-lg" />
        </div>

        <div className="flex gap-2 mt-4">
            <div className="h-6 w-16 bg-white/5 border border-white/10 rounded-full" />
            <div className="h-6 w-20 bg-white/5 border border-white/10 rounded-full" />
        </div>
    </motion.div>
);

export function Projects() {
    const { dict } = useLanguage();

    return (
        <section
            id="projetos"
            className="py-24 px-4 md:px-6 bg-[#0a0a0f] scroll-mt-28 relative"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                        {dict.projects.title}{" "}
                        <span className="text-gradient">
                            {dict.projects.subtitle}
                        </span>
                    </h2>
                    
                    <div className="flex items-center justify-center gap-3 text-gray-400 text-xl font-medium">
                        <Rocket className="text-primary-cyan animate-pulse" />
                        <span>{dict.projects.description}</span>
                    </div>
                    
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary-purple to-primary-cyan mx-auto rounded-full mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-60">
                    {[1, 2, 3].map((i) => (
                        <SkeletonCard key={i} delay={i * 0.1} />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </section>
    );
}


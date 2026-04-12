"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { dict } = useLanguage();

    return (
        <section
            id="sobre"
            className="py-24 px-4 md:px-6 scroll-mt-28 bg-[#0a0a0f] relative overflow-hidden"
        >
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center gap-8"
                >
                    <div className="space-y-4">
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black tracking-tight"
                        >
                            {dict.about.title}{" "}
                            <span className="text-gradient">
                                {dict.about.me}
                            </span>
                        </motion.h2>
                        
                        <div className="w-20 h-1.5 bg-gradient-to-r from-primary-purple to-primary-cyan mx-auto rounded-full" />
                    </div>

                    <div className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-primary-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                            {dict.about.description}
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <motion.div 
                                animate={{ 
                                    boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 20px rgba(124, 58, 237, 0.4)", "0 0 0px rgba(124, 58, 237, 0)"] 
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="px-6 py-2 rounded-full bg-primary-purple/10 border border-primary-purple/30 text-primary-purple text-sm font-bold flex items-center gap-2"
                            >
                                <span className="w-2 h-2 rounded-full bg-primary-purple animate-pulse" />
                                {dict.about.badge}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -px-20 w-64 h-64 bg-primary-purple/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 -px-20 w-64 h-64 bg-primary-cyan/10 blur-[100px] rounded-full -z-10" />
        </section>
    );
}


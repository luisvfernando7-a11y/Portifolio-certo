"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const [copied, setCopied] = useState(false);
    const { dict, language } = useLanguage();

    const email = "luisvfernando7@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer
            id="contato"
            className="bg-[#0a0a0f] text-white py-24 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-12 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                        {dict.footer.title}{" "}
                        <span className="text-gradient">
                            {dict.footer.subtitle}
                        </span>
                    </h3>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                        {dict.footer.text}
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCopyEmail}
                        className="group cursor-pointer select-none flex items-center gap-4 px-6 py-4 rounded-2xl glass glass-hover border-white/10"
                        title={
                            language === "pt"
                                ? "Clique para copiar o e-mail"
                                : "Click to copy email"
                        }
                    >
                        <div className="p-3 rounded-xl bg-primary-purple/10 text-primary-purple group-hover:text-primary-purple transition-colors shadow-glow-purple">
                            <Mail size={24} />
                        </div>
                        <span className="text-gray-200 font-bold font-mono text-lg">
                            {email}
                        </span>
                        <div className="ml-2 text-gray-500 group-hover:text-white transition-colors">
                            {copied ? (
                                <Check size={20} className="text-green-500" />
                            ) : (
                                <Copy size={20} />
                            )}
                        </div>
                    </motion.button>
                </div>

                <div className="flex gap-6">
                    <motion.a
                        whileHover={{ y: -5, boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" }}
                        href="https://github.com/luisvfernando7-a11y"
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-2xl glass border-white/10 text-gray-400 hover:text-white hover:border-primary-purple/50 transition-all"
                        aria-label="GitHub"
                    >
                        <Github size={28} />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -5, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                        href="https://www.linkedin.com/in/luis-fernando-vieira-543325313"
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-2xl glass border-white/10 text-gray-400 hover:text-primary-cyan hover:border-primary-cyan/50 transition-all"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={28} />
                    </motion.a>
                </div>

                <div className="mt-16 pt-12 border-t border-white/5 w-full max-w-4xl text-center">
                    <p className="text-gray-500 font-medium">
                        © 2025 Luís Fernando — {dict.footer.copy}
                    </p>
                </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-purple/5 blur-[100px] rounded-full -z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-cyan/5 blur-[100px] rounded-full -z-10" />
        </footer>
    );
}


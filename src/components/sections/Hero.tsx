"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Typewriter = ({ strings }: { strings: string[] }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const current = index % strings.length;
            const fullText = strings[current];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex(index + 1);
            }

            setSpeed(isDeleting ? 75 : 150);
        };

        const timer = setTimeout(handleType, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, index, strings, speed]);

    return (
        <span className="text-primary-cyan min-h-[1.5em] inline-block">
            {text}
            <span className="animate-pulse ml-0.5">|</span>
        </span>
    );
};

export function Hero() {
    const { dict } = useLanguage();

    return (
        <section
            id="inicio"
            className="flex min-h-screen items-center justify-center py-24 px-4 md:px-6 relative overflow-hidden bg-[#0a0a0f]"
        >
            {/* Animated Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-purple/20 rounded-full blur-[120px]" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -40, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-cyan/20 rounded-full blur-[120px]" 
                />
            </div>

            <div className="container mx-auto max-w-6xl z-10">
                <div className="flex flex-col items-center text-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="glass px-4 py-1.5 rounded-full text-sm font-medium border-primary-cyan/20 text-primary-cyan shadow-lg shadow-primary-cyan/5"
                    >
                        {dict.hero.badge}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1]">
                            {dict.hero.greeting} <br />
                            <span className="text-gradient">
                                {dict.hero.name}
                            </span>
                        </h1>
                        
                        <div className="text-xl md:text-3xl font-medium text-gray-400">
                            <Typewriter strings={dict.hero.roles} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-6 mt-8"
                    >
                        <Link
                            href="#projetos"
                            className="group relative px-8 py-4 bg-primary-purple rounded-2xl font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary-purple/20 flex items-center gap-2 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10">{dict.hero.btnProject}</span>
                            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="#contato"
                            className="glass glass-hover px-8 py-4 rounded-2xl font-bold text-white flex items-center gap-2 backdrop-blur-md"
                        >
                            <Mail size={20} />
                            {dict.hero.btnContact}
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-4 mt-8"
                    >
                        <a
                            href="https://github.com/luisvfernando7-a11y"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:border-primary-purple/50 transition-all hover:-translate-y-1"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/luis-fernando-vieira-543325313"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 glass rounded-xl text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:-translate-y-1"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </motion.div>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
}

const styles = `
@keyframes scroll {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
}
.animate-scroll {
  animation: scroll 1.5s infinite;
}
`;


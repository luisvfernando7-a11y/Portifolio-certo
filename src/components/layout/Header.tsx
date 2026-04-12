"use client";

import { useState, useEffect } from "react";
import { Menu, X, Languages, TerminalSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { dict, language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 py-4 ${
                scrolled ? "translate-y-0" : "translate-y-0"
            }`}
        >
            <nav
                className={`container mx-auto max-w-6xl flex items-center justify-between transition-all duration-300 ${
                    scrolled
                        ? "glass rounded-2xl px-6 py-3 shadow-2xl border-white/10"
                        : "py-2"
                }`}
            >
                <motion.a
                    href="#inicio"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 group z-50 relative"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-purple to-primary-cyan flex items-center justify-center text-white shadow-lg shadow-primary-purple/20 group-hover:rotate-12 transition-transform">
                        <TerminalSquare size={24} />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white">
                        Luís<span className="text-primary-cyan">.</span>Fernando
                    </span>
                </motion.a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-2">
                    {dict.header.items.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="px-4 py-2 rounded-xl text-sm font-bold text-gray-400 hover:text-white transition-all hover:bg-white/5 active:scale-95"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li className="ml-4 pl-4 border-l border-white/10">
                        <button
                            onClick={toggleLanguage}
                            className="p-2.5 rounded-xl glass glass-hover text-gray-400 hover:text-primary-cyan flex items-center gap-2 font-bold text-xs"
                            title={language === "pt" ? "Switch to English" : "Mudar para Português"}
                        >
                            <Languages size={18} />
                            <span>{language.toUpperCase()}</span>
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2.5 rounded-xl glass text-white z-50 relative"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            className="fixed right-4 top-24 bottom-4 w-64 p-8 glass rounded-[2.5rem] border-white/10 shadow-2xl z-50 md:hidden flex flex-col gap-8"
                        >
                            <ul className="flex flex-col gap-4">
                                {dict.header.items.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 rounded-2xl text-xl font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-auto pt-8 border-t border-white/10">
                                <button
                                    onClick={() => {
                                        toggleLanguage();
                                        setIsOpen(false);
                                    }}
                                    className="w-full p-4 rounded-2xl glass glass-hover text-white flex items-center justify-center gap-3 font-bold"
                                >
                                    <Languages size={20} />
                                    {language === "pt" ? "English" : "Português"}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

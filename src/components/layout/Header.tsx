"use client";

import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-6 ${
                scrolled ? "bg-[#0a0a0b]/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto max-w-5xl flex items-center justify-between">
                <motion.a
                    href="#inicio"
                    whileHover={{ opacity: 0.7 }}
                    className="text-xl font-bold tracking-tighter text-white"
                >
                    LF<span className="text-accent">.</span>
                </motion.a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {dict.header.items.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="text-sm font-bold text-gray-400 hover:text-white transition-colors link-hover"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li className="ml-4 pl-8 border-l border-white/10">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-xs font-black text-gray-500 hover:text-accent transition-colors tracking-widest uppercase"
                        >
                            <Languages size={14} />
                            {language}
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white bg-white/5 p-2 rounded-lg"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-4 top-20 bg-[#111] p-8 rounded-2xl border border-white/5 shadow-2xl z-40 md:hidden"
                    >
                        <ul className="flex flex-col gap-6">
                            {dict.header.items.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-lg font-bold text-gray-300 hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-6 border-t border-white/5">
                                <button
                                    onClick={() => {
                                        toggleLanguage();
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest"
                                >
                                    <Languages size={16} />
                                    {language === "pt" ? "English" : "Português"}
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}


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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-5 ${
                scrolled 
                    ? "bg-white/95 backdrop-blur-sm py-4 border-b border-gray-200 shadow-sm" 
                    : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto max-w-5xl flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#inicio"
                    whileHover={{ opacity: 0.8 }}
                    className={`text-lg font-bold transition-colors ${
                        scrolled ? "text-gray-900" : "text-white"
                    }`}
                >
                    LF<span className="text-gray-400">.</span>
                </motion.a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-2">
                    {dict.header.items.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className={`text-sm font-medium px-3 py-2 transition-colors ${
                                    scrolled
                                        ? "text-gray-600 hover:text-gray-900"
                                        : "text-white/80 hover:text-white"
                                }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li className="ml-2 pl-3 border-l border-gray-300">
                        <button
                            onClick={toggleLanguage}
                            className={`flex items-center gap-1 text-xs font-bold px-2 py-2 transition-colors ${
                                scrolled
                                    ? "text-gray-600 hover:text-gray-900"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <Languages size={14} />
                            {language.toUpperCase()}
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 transition-colors ${
                            scrolled
                                ? "text-gray-900 bg-gray-100 hover:bg-gray-200"
                                : "text-white bg-white/10 hover:bg-white/20"
                        }`}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-4 top-20 bg-white rounded-none border border-gray-200 shadow-lg z-40 md:hidden"
                    >
                        <ul className="flex flex-col divide-y divide-gray-100">
                            {dict.header.items.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-gray-900 hover:bg-gray-50 font-medium text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li className="px-4 py-3">
                                <button
                                    onClick={() => {
                                        toggleLanguage();
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-600 w-full"
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


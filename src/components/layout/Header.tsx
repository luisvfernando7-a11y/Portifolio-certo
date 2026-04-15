"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { dict } = useLanguage();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <header className="navbar">
            <nav className="site-wrap flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#inicio"
                    whileHover={{ opacity: 0.8 }}
                    className="nav-logo"
                >
                    LF
                </motion.a>

                {/* Desktop Nav */}
                <ul className="nav-links">
                    {dict.header.items.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="nav-link">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="nav-btn"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t"
                        style={{ borderColor: "var(--border)" }}
                    >
                        <ul className="site-wrap flex flex-col gap-2 py-4">
                            {dict.header.items.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="block py-2 text-sm transition-colors"
                                        style={{ color: "var(--text-muted)" }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}


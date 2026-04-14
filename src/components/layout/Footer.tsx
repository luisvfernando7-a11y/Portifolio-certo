"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { dict } = useLanguage();
    const email = "luisvfernando7@gmail.com";

    const contactLinks = [
        { 
            icon: <Github size={18} />, 
            label: "GitHub", 
            href: "https://github.com/luisvfernando7-a11y" 
        },
        { 
            icon: <Linkedin size={18} />, 
            label: "LinkedIn", 
            href: "https://www.linkedin.com/in/luis-fernando-vieira-543325313" 
        },
        { 
            icon: <Mail size={18} />, 
            label: email, 
            href: `mailto:${email}` 
        }
    ];

    return (
        <footer
            id="contato"
            className="bg-[#0a0a0b] py-32 px-4 md:px-6 border-t border-white/5"
        >
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                            {dict.footer.subtitle}
                        </h2>
                        <div className="h-[1px] flex-grow bg-white/10" />
                    </motion.div>

                    <div className="flex flex-col gap-12">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-500 max-w-xl"
                        >
                            {dict.footer.text}
                        </motion.p>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            {contactLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-gray-400 font-bold link-hover w-fit"
                                >
                                    <span className="text-gray-600">{link.icon}</span>
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="pt-16 border-t border-white/5">
                        <p className="text-sm font-bold tracking-widest text-gray-700 uppercase">
                            {dict.footer.copy}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}



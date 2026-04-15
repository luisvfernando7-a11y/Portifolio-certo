"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { dict } = useLanguage();
    const email = "luisvfernando7@gmail.com";

    return (
        <footer id="contato" className="footer">
            <div className="site-wrap">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center gap-6"
                >
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {dict.footer.text}
                    </p>

                    <motion.a
                        href={`mailto:${email}`}
                        whileHover={{ opacity: 0.8 }}
                        className="inline-flex items-center gap-2 font-mono"
                        style={{ 
                            fontFamily: "var(--font-mono)",
                            color: "var(--accent)",
                            textDecoration: "none"
                        }}
                    >
                        <Mail size={16} />
                        {email}
                    </motion.a>

                    <p 
                        className="text-xs mt-4"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {dict.footer.copy}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}



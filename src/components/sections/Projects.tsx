"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/lib/data";

export function Projects() {
    const { dict } = useLanguage();

    return (
        <section id="projetos" className="projects">
            <div className="site-wrap">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {dict.projects.subtitle}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-12 text-sm"
                    style={{ color: "var(--text-muted)" }}
                >
                    {dict.projects.description}
                </motion.p>

                <div className="projects-wrap">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={idx}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="project-card group"
                        >
                            <h3 
                                className="project-name mb-3 group-hover:opacity-80 transition-opacity"
                                style={{ fontFamily: "var(--font-display)", fontSize: "18px" }}
                            >
                                {project.title}
                            </h3>
                            <p 
                                className="text-sm mb-4"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {project.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="chip">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}



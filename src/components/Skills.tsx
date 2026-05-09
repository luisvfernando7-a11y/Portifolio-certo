"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Dados & Inteligência Artificial",
    skills: ["Python", "Pandas", "NumPy", "scikit-learn", "PyTorch", "FastAPI", "LSTM", "Monte Carlo"],
  },
  {
    title: "Backend & APIs",
    skills: ["Java 17", "Spring Boot 3", "JPA/Hibernate", "REST API", "JWT", "SQL"],
  },
  {
    title: "Infraestrutura & DevOps",
    skills: ["Docker", "Docker Compose", "PostgreSQL", "MySQL", "TimescaleDB", "Git", "GitHub", "Vercel"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Skills() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24,
      }}
    >
      {SKILL_CATEGORIES.map((category) => (
        <motion.div
          key={category.title}
          variants={itemVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Header da Categoria */}
          <h4 style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--accent)",
            borderBottom: "1px solid var(--border)",
            paddingBottom: 8,
          }}>
            {category.title}
          </h4>

          {/* Grid de Badges */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}>
            {category.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text)",
                  background: "var(--bg-raised)",
                  border: "1px solid var(--border)",
                  padding: "6px 12px",
                  borderRadius: 6,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent-light)";
                  e.currentTarget.style.background = "var(--accent-dim)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "var(--bg-raised)";
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

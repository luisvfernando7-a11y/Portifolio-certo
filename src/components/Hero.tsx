"use client";

import { motion } from "framer-motion";

const CHIPS = ["Python", "PHP", "C#", "JavaScript", "Machine Learning", "MySQL", "Supabase"];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section style={{ padding: "3rem 0 4rem" }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontFamily: "var(--font-mono)",
            color: "#c9a96e",
            background: "var(--accent-dim)",
            border: "0.5px solid var(--accent-border)",
            padding: "6px 16px",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#c9a96e",
              animation: "pulse-dot 2s ease infinite",
            }}
          />
          Disponível para projetos
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 9vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: 16,
            fontStyle: "italic",
          }}
        >
          Luis Fernando
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(18px, 3.5vw, 28px)",
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            color: "var(--text-muted)",
            marginBottom: 24,
          }}
        >
          Backend Developer &amp; Machine Learning
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 12,
          }}
        >
          17 anos · Ourinhos, SP · ETEC Jacinto Ferreira de Sá
        </motion.p>

        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--text-faint)",
            lineHeight: 1.7,
            maxWidth: 540,
            marginBottom: 32,
          }}
        >
          Desenvolvedor backend com foco em Python e machine learning. Especializado em construir sistemas escaláveis e aplicar IA em problemas reais.
        </motion.p>

        {/* Skills */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}
        >
          {CHIPS.map((c) => (
            <span
              key={c}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#c9a96e",
                background: "var(--accent-dim)",
                border: "0.5px solid var(--accent-border)",
                padding: "4px 12px",
                borderRadius: 4,
              }}
            >
              {c}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12 }}
        >
          <a
            href="#projetos"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 600,
              color: "#0a0a0a",
              background: "#c9a96e",
              padding: "10px 28px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d4b896";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#c9a96e";
            }}
          >
            Ver projetos
          </a>

          <a
            href="mailto:luisvfernando7@gmail.com"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text-muted)",
              background: "transparent",
              border: "0.5px solid var(--border-hover)",
              padding: "10px 28px",
              borderRadius: 4,
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.borderColor = "#c9a96e";
              e.currentTarget.style.background = "var(--accent-dim)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Entrar em contato
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

/* ── SVG Icons ─────────────────────────────────────────────────── */

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

/* ── Dados dos Projetos ────────────────────────────────────────── */

interface Project {
  name: string;
  category: string;
  badge?: string;
  desc: string;
  stack: string[];
  github: string | null;
  comingSoon?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: "AgroClima",
    category: "IA · Python · Microserviços",
    badge: "TCC",
    desc: "Plataforma de predição agrícola com arquitetura de microserviços e telemetria 3D. Pipeline LSTM + Monte Carlo para análise probabilística de risco climático em tempo real.",
    stack: ["Python", "FastAPI", "PyTorch", "scikit-learn", "PostgreSQL", "Docker", "MQTT"],
    github: null,
    comingSoon: true,
  },
  {
    name: "Spring Backend Bridge",
    category: "Java · Spring Boot · Segurança",
    desc: "Camada de orquestração e segurança para integração de serviços de IA e hardware ESP32. Expõe endpoints REST versionados com autenticação e validação de schema.",
    stack: ["Java 17", "Spring Boot 3", "JPA/Hibernate", "MySQL", "Docker", "JWT"],
    github: "https://github.com/luisvfernando7-a11y/crud1-spring-boot",
  },
  {
    name: "Data Infrastructure",
    category: "Docker · SQL · Dados",
    desc: "Ambiente conteinerizado para gestão de séries temporais com TimescaleDB e bancos relacionais. Inclui scripts de migração, seed de dados e compose de múltiplos serviços.",
    stack: ["Docker", "Docker Compose", "PostgreSQL", "MySQL", "H2", "SQL"],
    github: "https://github.com/luisvfernando7-a11y/People-CRUD-with-H2",
  },
];

/* ── Framer Motion Variants ────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

/* ── Componente Principal ──────────────────────────────────────── */

export default function Projects() {
  return (
    <section id="projetos" style={{ padding: "5rem 0 4rem" }}>

      {/* ── Cabeçalho da seção ── */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--text-faint)", textTransform: "uppercase",
          letterSpacing: "0.08em", marginBottom: 8,
        }}
      >
        projetos
      </motion.p>

      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(26px, 4vw, 40px)",
          fontWeight: 700, letterSpacing: "-0.02em",
          color: "var(--text)", marginBottom: 40,
        }}
      >
        Trabalhos recentes
      </motion.h2>

      {/* ── Grid de cards dos projetos ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
        className="projects-grid"
      >
        {PROJECTS.map((p, index) => (
          <motion.div
            key={p.name}
            variants={itemVariants}
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: 24,
              display: "flex", flexDirection: "column", gap: 16,
              transition: "all 0.3s ease",
              // O Card do AgroClima (índice 0) deve ter uma hierarquia visual sutilmente maior ou ser idêntico visualmente mas ocupar espaço próprio na grid
              position: "relative",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(45, 212, 160, 0.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Título + Badge de Categoria */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 12 }}>
              <div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--accent)", display: "block", marginBottom: 6,
                }}>
                  {p.category}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: index === 0 ? 22 : 18, 
                  fontWeight: 700,
                  color: "var(--text)",
                }}>{p.name}</h3>
              </div>
              {p.badge && (
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  color: "var(--accent)", background: "var(--bg-raised)",
                  border: `0.5px solid var(--accent-border)`,
                  padding: "3px 10px", borderRadius: 999,
                  whiteSpace: "nowrap",
                }}>{p.badge}</span>
              )}
            </div>

            {/* Descrição técnica */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14,
              color: "var(--text-muted)", lineHeight: 1.7,
            }}>{p.desc}</p>

            {/* Badges de tecnologias */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
              {p.stack.map((t) => (
                <span key={t} style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--text)", background: "var(--bg-raised)",
                  border: "1px solid var(--border)",
                  padding: "4px 10px", borderRadius: 4,
                }}>{t}</span>
              ))}
            </div>

            {/* Botões */}
            <div style={{ marginTop: 16 }}>
              {p.comingSoon ? (
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
                  color: "var(--text-faint)", background: "var(--bg-raised)",
                  border: "1px solid var(--border)",
                  padding: "8px 16px", borderRadius: 4,
                  cursor: "not-allowed",
                  width: "fit-content",
                }}>
                  <LockIcon /> Em breve
                </span>
              ) : p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
                    color: "var(--text-muted)", background: "transparent",
                    border: "1px solid var(--border-hover)",
                    padding: "8px 16px", borderRadius: 4,
                    textDecoration: "none", width: "fit-content",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <GitHubIcon /> Ver no GitHub <ExternalLinkIcon />
                </a>
              ) : null}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Call to Action — rodapé da seção de projetos ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          marginTop: 64,
          borderTop: "1px solid var(--border)",
          paddingTop: 48,
          display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center",
          gap: 24,
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex", alignItems: "center",
            flexWrap: "wrap", gap: 16,
            justifyContent: "center",
          }}
        >
          {/* Botão principal — Baixar Currículo */}
          <a
            /* Coloque o PDF em public/assets/curriculo-luis-fernando.pdf */
            href="/assets/curriculo-luis-fernando.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
              color: "#0A0F1E", background: "var(--accent)",
              padding: "12px 32px", borderRadius: 4,
              textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--accent-light)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--accent)";
            }}
          >
            <DownloadIcon /> Baixar Currículo
          </a>

          {/* Botão secundário — Entre em contato */}
          <a
            href="mailto:luisvfernando7@gmail.com"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
              color: "var(--text)", background: "transparent",
              border: "1px solid var(--border-hover)",
              padding: "12px 32px", borderRadius: 4,
              textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "var(--accent-dim)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <MailIcon /> Entre em contato
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

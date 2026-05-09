"use client";

import { motion } from "framer-motion";
import Skills from "./Skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function About() {
  return (
    <section id="sobre" style={{ padding: "5rem 0 4rem" }}>
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
        sobre
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
        Trajetória e habilidades
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: "grid", gridTemplateColumns: "1fr",
          gap: 48,
          marginBottom: 64,
        }}
        className="about-grid"
      >
        {/* Left: Bio Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 640 }}>
          <motion.h3 
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 800, color: "var(--accent)",
              letterSpacing: "-0.01em", lineHeight: 1.2
            }}
          >
            Backend & AI Systems Developer
          </motion.h3>

          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-body)", fontSize: 16,
              color: "var(--text)", lineHeight: 1.7,
            }}
          >
            Especialista em unir a inteligência do Python com a robustez do Java para projetar sistemas escaláveis orientados a dados. Desenvolvo desde pipelines de Machine Learning com PyTorch e FastAPI até camadas de orquestração em Spring Boot — com foco em arquiteturas que funcionam em produção.
          </motion.p>

          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-body)", fontSize: 15,
              color: "var(--text-muted)", lineHeight: 1.7,
            }}
          >
            Atualmente no 3º ano do Ensino Médio Técnico na ETEC, atuando como Jovem Aprendiz no Colégio Bagozzi e desenvolvendo o AgroClima como projeto de TCC. Direcionando minha formação para engenharia de software e ciência de dados em universidades de elite como UTFPR e UFSCar.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              background: "var(--bg-surface)",
              borderLeft: "3px solid var(--accent)",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0",
              marginTop: 8
            }}
          >
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 13,
              color: "var(--accent-light)", fontWeight: 500
            }}>
              Inglês intermediário para leitura técnica · Open to internship opportunities
            </p>
          </motion.div>
        </div>

        {/* Right: Info blocks */}
        <div>
          <div style={{
            width: 64, height: 64,
            borderRadius: 8,
            background: "var(--accent-dim)",
            border: "1px solid var(--accent-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontSize: 24,
            fontWeight: 800, color: "var(--accent)",
            marginBottom: 32,
          }}>LF</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Idade", value: "17 anos" },
              { label: "Local", value: "Ourinhos, SP" },
              { label: "Contato", value: "luisvfernando7@gmail.com" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--text-faint)", textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}>{item.label}</span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 15,
                  color: "var(--text)", fontWeight: 500
                }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 48 }}>
        <h3 style={{
          fontFamily: "var(--font-mono)", fontSize: 13,
          fontWeight: 600, color: "var(--text)", textTransform: "uppercase",
          letterSpacing: "0.08em", marginBottom: 32,
        }}>Competências Técnicas</h3>
        <Skills />
      </div>
    </section>
  );
}

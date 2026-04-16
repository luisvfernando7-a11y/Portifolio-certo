"use client";

import { motion } from "framer-motion";
import Skills from "./Skills";

const TIMELINE = [
  { year: "2024", event: "Início do curso técnico em Informática (ETEC Jacinto Ferreira de Sá). Primeiros contatos com programação e fundamentos web." },
  { year: "2025", event: "Mergulho em Machine Learning e IA. Desenvolvimento do TCC: AgroSense (Sistema IoT integrado)." },
  { year: "2026", event: "Conclusão da formação técnica. Consolidação de projetos ML/IA e continuidade em desenvolvimento de soluções escaláveis." },
];

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
          marginBottom: 40,
        }}
        className="about-grid"
      >
        {/* Left: Personal info */}
        <div>
          <div style={{
            width: 64, height: 64,
            borderRadius: 8,
            background: "var(--accent-dim)",
            border: "0.5px solid var(--accent-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontSize: 24,
            fontWeight: 800, color: "var(--accent)",
            marginBottom: 24,
          }}>LF</div>

          <h3 style={{
            fontFamily: "var(--font-display)", fontSize: 18,
            fontWeight: 700, color: "var(--text)",
            marginBottom: 4,
          }}>Luis Fernando</h3>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14,
            color: "var(--accent-light)", marginBottom: 24,
          }}>Backend Developer · Machine Learning</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Idade", value: "17 anos" },
              { label: "Cidade", value: "Ourinhos, SP" },
              { label: "Formação", value: "ETEC Jacinto Ferreira de Sá" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  color: "var(--text-faint)", textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}>{item.label}</span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 14,
                  color: "var(--text)",
                }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Timeline */}
        <div>
          <div style={{
            background: "linear-gradient(to right, var(--accent-light), var(--accent))",
            padding: 16,
            borderRadius: 8,
            marginBottom: 32,
          }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 13,
              color: "var(--bg)", lineHeight: 1.7,
            }}>
              "É a curiosidade que me move. Quando algo me interessa, mergulho fundo até compreender."
            </p>
          </div>

          <h3 style={{
            fontFamily: "var(--font-body)", fontSize: 12,
            fontWeight: 500, color: "var(--text)", textTransform: "uppercase",
            letterSpacing: "0.08em", marginBottom: 16,
          }}>Trajetória</h3>

          {TIMELINE.map((t, i) => (
            <div key={t.year} style={{
              display: "flex", gap: 16, marginBottom: i < TIMELINE.length - 1 ? 24 : 0,
            }}>
              <div style={{ textAlign: "center", width: 50, flexShrink: 0 }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: 14,
                  fontWeight: 700, color: "var(--accent)",
                }}>{t.year}</span>
                <div style={{
                  width: 6, height: 6,
                  borderRadius: "50%", background: "var(--accent)",
                  margin: "8px auto",
                }}/>
                {i < TIMELINE.length - 1 && (
                  <div style={{
                    width: "2px", height: 32,
                    background: "var(--accent-dim)",
                    margin: "0 auto",
                  }} />
                )}
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "var(--text-muted)", lineHeight: 1.7,
                paddingTop: 2,
              }}>{t.event}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <div style={{ borderTop: "0.5px solid var(--border)", paddingTop: 40 }}>
        <h3 style={{
          fontFamily: "var(--font-body)", fontSize: 12,
          fontWeight: 500, color: "var(--text)", textTransform: "uppercase",
          letterSpacing: "0.08em", marginBottom: 20,
        }}>Habilidades</h3>
        <Skills />
      </div>
    </section>
  );
}

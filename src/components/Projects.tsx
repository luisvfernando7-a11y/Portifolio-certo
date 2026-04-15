"use client";

const PROJECTS = [
  {
    name: "AgroSense IoT",
    status: "Em andamento · TCC",
    statusColor: "#2DD4A0",
    statusBg: "rgba(45,212,160,0.10)",
    desc: "Sistema IoT completo com análise de drift matemático em tempo real. Aplica machine learning para monitoramento inteligente de umidade do solo e tomada de decisão automática em agricultura de precisão.",
    stack: ["Python", "Machine Learning", "IoT", "MySQL"],
  },

];

export default function Projects() {
  return (
    <section id="projetos" style={{ padding: "5rem 0 4rem" }}>
      <p style={{
        fontFamily: "var(--font-mono)", fontSize: 11,
        color: "var(--text-faint)", textTransform: "uppercase",
        letterSpacing: "0.08em", marginBottom: 8,
      }}>projetos</p>

      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(26px, 4vw, 40px)",
        fontWeight: 700, letterSpacing: "-0.02em",
        color: "var(--text)", marginBottom: 32,
      }}>Trabalhos recentes</h2>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20,
      }}>
        {PROJECTS.map((p) => (
          <div key={p.name} style={{
            background: "var(--bg-surface)",
            border: "0.5px solid var(--border)",
            borderRadius: 8,
            padding: 24,
            display: "flex", flexDirection: "column", gap: 16,
            transition: "all 0.2s",
            cursor: "pointer",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.background = "var(--bg-raised)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--bg-surface)";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 12 }}>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 18, fontWeight: 700,
                color: "var(--text)",
              }}>{p.name}</h3>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: p.statusColor, background: p.statusBg,
                border: `0.5px solid ${p.statusColor}`,
                padding: "3px 10px", borderRadius: 999,
                whiteSpace: "nowrap",
              }}>{p.status}</span>
            </div>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14,
              color: "var(--text-muted)", lineHeight: 1.7,
            }}>{p.desc}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {p.stack.map((t) => (
                <span key={t} style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--text-faint)", background: "var(--bg)",
                  border: "0.5px solid var(--border)",
                  padding: "4px 10px", borderRadius: 4,
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

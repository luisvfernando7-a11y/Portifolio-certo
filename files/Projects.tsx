"use client";

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const PROJECTS = [
  {
    name: "AgroSense IoT",
    status: "Em andamento · TCC",
    statusColor: "#2DD4A0",
    statusBg: "rgba(45,212,160,0.10)",
    statusBorder: "rgba(45,212,160,0.25)",
    problem: "Pequenos agricultores não têm acesso a ferramentas de precisão para monitorar umidade do solo e tomar decisões no momento certo.",
    solution: "Sistema IoT com análise de drift matemático em tempo real. A IA integrada lê os dados do sensor e recomenda produtos e ações específicas para o cenário atual da plantação.",
    stack: ["Python", "IoT", "ML", "LSTM", "Análise de Dados", "Tempo Real"],
    github: null,
  },
  {
    name: "Suite Marketplace",
    status: "Em breve",
    statusColor: "#85B7EB",
    statusBg: "rgba(55,138,221,0.10)",
    statusBorder: "rgba(55,138,221,0.25)",
    problem: "Estruturas de suíte vendidas sem visibilidade — clientes somem e o portfólio não cresce.",
    solution: "Plataforma de vendas onde cada cliente que compra uma estrutura ganha uma vitrine no portfólio. Negócio e portfólio se alimentam mutuamente.",
    stack: ["Next.js", "Supabase", "MySQL", "APIs REST"],
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projetos" style={{ padding: "4rem 0" }}>

      <div style={{ marginBottom: 40 }}>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--text-faint)", textTransform: "uppercase",
          letterSpacing: "0.08em", marginBottom: 8,
        }}>projetos</p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)",
          fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em",
        }}>O que estou construindo</h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 16,
      }}>
        {PROJECTS.map(p => (
          <div
            key={p.name}
            style={{
              background: "var(--bg-surface)",
              border: "0.5px solid var(--border)",
              borderRadius: 12,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 18,
                fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em",
              }}>{p.name}</h3>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: p.statusColor, background: p.statusBg,
                border: `0.5px solid ${p.statusBorder}`,
                padding: "3px 10px", borderRadius: 999, whiteSpace: "nowrap",
              }}>{p.status}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text-faint)", textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}>Problema</p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "var(--text-muted)", lineHeight: 1.7,
              }}>{p.problem}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text-faint)", textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}>Solução</p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "var(--text-muted)", lineHeight: 1.7,
              }}>{p.solution}</p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.stack.map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--accent-light)", background: "var(--accent-dim)",
                  border: "0.5px solid var(--accent-border)",
                  padding: "3px 10px", borderRadius: 999,
                }}>{t}</span>
              ))}
            </div>

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-body)", fontSize: 12,
                  color: "var(--text-muted)",
                  border: "0.5px solid var(--border-hover)",
                  padding: "6px 14px", borderRadius: 999,
                  textDecoration: "none", width: "fit-content",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
              >
                <GitHubIcon /> Ver repositório
              </a>
            )}
          </div>
        ))}

        <div style={{
          background: "var(--bg-surface)",
          border: "0.5px dashed var(--border)",
          borderRadius: 12, padding: 24,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          minHeight: 180, gap: 6,
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-faint)", fontWeight: 500 }}>
            Mais projetos em breve
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>
            acompanhe no GitHub
          </p>
          <a
            href="https://github.com/luisvfernando7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 12,
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-body)", fontSize: 12,
              color: "var(--text-muted)",
              border: "0.5px solid var(--border-hover)",
              padding: "6px 14px", borderRadius: 999,
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            <GitHubIcon /> @luisvfernando7
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

const PROJECTS = [
  {
    name: "AgroSense IoT",
    status: "Em andamento · TCC",
    statusColor: "#1D9E75",
    statusBg: "#E1F5EE",
    desc: "Sistema IoT com análise de drift matemático em tempo real para ajudar o pequeno agricultor a monitorar a umidade do solo e tomar melhores decisões. A IA integrada também auxilia na escolha de produtos agrícolas com base no cenário atual da plantação.",
    stack: ["Python", "IoT", "ML", "Análise de Dados", "Tempo Real"],
  },
  {
    name: "Suite Marketplace",
    status: "Em breve",
    statusColor: "#854F0B",
    statusBg: "#FAEEDA",
    desc: "Plataforma para venda de estruturas de suíte para empresas e lojas. Clientes que comprarem terão sua marca exibida no portfólio — unindo negócio e vitrine de forma criativa.",
    stack: ["Next.js", "Supabase", "MySQL", "APIs"],
  },
];

export default function Projects() {
  return (
    <div className="projects-wrap">
      {PROJECTS.map((p) => (
        <div key={p.name} className="project-card">
          <div className="project-card-top">
            <h3 className="project-name">{p.name}</h3>
            <span className="project-status" style={{ color: p.statusColor, background: p.statusBg }}>
              {p.status}
            </span>
          </div>
          <p className="project-desc">{p.desc}</p>
          <div className="project-stack">
            {p.stack.map((t) => (
              <span key={t} className="stack-chip">{t}</span>
            ))}
          </div>
        </div>
      ))}
      <div className="project-card project-card-empty">
        <p className="project-empty-text">Mais projetos chegando em breve.</p>
        <p className="project-empty-sub">Acompanhe minha evolução.</p>
      </div>
    </div>
  );
}

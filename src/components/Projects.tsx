"use client";

interface Project {
  name: string;
  tag: string;
  desc: string;
  stack: string[];
  github: string;
}

const PROJECTS: Project[] = [
  {
    name: "People CRUD with H2",
    tag: "REST API · Java",
    desc: "API REST com operações CRUD completas (GET, POST, PUT, DELETE), persistência em banco H2 em memória e mapeamento com JPA/Hibernate. Arquitetura Controller → Service → Repository.",
    stack: ["Java", "Spring Boot 3", "H2 Database", "JPA", "Maven"],
    github: "https://github.com/luisvfernando7-a11y/People-CRUD-with-H2",
  },
  {
    name: "CRUD Spring Boot + MySQL",
    tag: "REST API · Docker",
    desc: "CRUD estruturado com Spring Boot e persistência relacional em MySQL. Containerizado com Docker, camadas bem definidas e Spring Data JPA para abstração do banco.",
    stack: ["Java", "Spring Boot", "MySQL", "Docker", "JPA", "Hibernate"],
    github: "https://github.com/luisvfernando7-a11y/crud1-spring-boot",
  },
  {
    name: "Portfolio App",
    tag: "Frontend",
    desc: "Este portfólio. Desenvolvido com foco em UX para recrutadores técnicos, performance no Lighthouse e identidade visual consistente.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/luisvfernando7-a11y/portfolio-app", // placeholder ou link real
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">{"// Repositórios"}</span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          alignItems: "stretch"
        }}>
          {PROJECTS.map((p) => (
            <div key={p.name} className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              
              <div style={{ marginBottom: "24px", flexGrow: 1 }}>
                <span style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "0.875rem", 
                  color: "var(--accent-primary)",
                  display: "block",
                  marginBottom: "12px"
                }}>
                  {p.tag}
                </span>
                
                <h3 style={{ 
                  color: "var(--text-primary)", 
                  fontSize: "1.5rem", 
                  marginBottom: "16px" 
                }}>
                  {p.name}
                </h3>
                
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "auto" }}>
                
                {/* Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {p.stack.map(tech => (
                    <span key={tech} className="badge badge-secondary" style={{ padding: "4px 10px" }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a 
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: 600,
                    width: "fit-content",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent-primary)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-primary)"}
                >
                  Ver no GitHub →
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

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
    github: "https://github.com/luisvfernando7-a11y/portfolio-app",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <span className="font-mono text-accent text-sm">{"// Repositórios"}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PROJECTS.map((p) => (
            <div 
              key={p.name} 
              className="flex flex-col h-full bg-surface border border-border p-8 rounded-xl hover:border-borderHover hover:shadow-[0_0_24px_rgba(100,255,218,0.08)] transition-all duration-300"
            >
              
              <div className="mb-6 flex-grow">
                <span className="font-mono text-xs text-accent block mb-3">
                  {p.tag}
                </span>
                
                <h3 className="font-space text-2xl font-bold text-primary mb-4">
                  {p.name}
                </h3>
                
                <p className="text-muted text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-auto">
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-navy border border-border text-muted text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a 
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-semibold text-primary inline-flex items-center gap-2 w-fit hover:text-accent transition-colors"
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

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
    tag: "REST API · JAVA",
    desc: "API REST com operações CRUD completas, persistência em H2 e mapeamento JPA/Hibernate. Arquitetura robusta Controller-Service-Repository.",
    stack: ["Java 17", "Spring Boot 3", "H2", "JPA"],
    github: "https://github.com/luisvfernando7-a11y/People-CRUD-with-H2",
  },
  {
    name: "CRUD Spring Boot + MySQL",
    tag: "REST API · DOCKER",
    desc: "CRUD estruturado com persistência relacional em MySQL. Containerizado com Docker, garantindo portabilidade e isolamento de dependências.",
    stack: ["Java", "Spring Boot 3", "MySQL", "Docker"],
    github: "https://github.com/luisvfernando7-a11y/crud1-spring-boot",
  },
  {
    name: "Portfolio App",
    tag: "FRONTEND · NEXT.JS",
    desc: "Este portfólio. Foco em UX para recrutadores técnicos, alta performance e identidade visual minimalista de alto impacto.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/luisvfernando7-a11y/portfolio-app",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <p className="font-mono text-xs text-[#4A4A4A] tracking-widest uppercase mb-3">
            // repositórios
          </p>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-white">
            Projetos Selecionados
          </h2>
          <div className="w-12 h-px bg-white/20 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PROJECTS.map((p) => (
            <div 
              key={p.name} 
              className="border border-[#1E1E1E] bg-[#0F0F0F] rounded-sm p-8 flex flex-col justify-between hover:border-[#2A2A2A] hover:bg-[#111] transition-all duration-300 group shadow-card"
            >
              <div className="mb-8">
                <span className="font-mono text-[10px] text-[#4A4A4A] tracking-widest uppercase block mb-4">
                  {p.tag}
                </span>
                
                <h3 className="font-space text-xl font-bold text-white mb-4">
                  {p.name}
                </h3>
                
                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="font-mono text-[10px] text-[#4A4A4A] border border-[#1E1E1E] px-2 py-0.5 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-[#A0A0A0] inline-flex items-center gap-2 w-fit group-hover:text-white transition-colors"
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

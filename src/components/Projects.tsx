'use client'

const projects = [
  {
    tag: 'REST API · Java',
    title: 'People CRUD with H2',
    description: 'API REST com operações CRUD completas (GET, POST, PUT, DELETE), persistência em banco H2 em memória e mapeamento com JPA/Hibernate. Arquitetura Controller → Service → Repository.',
    stack: ['Java','Spring Boot 3','H2 Database','JPA','Maven'],
    url: 'https://github.com/luisvfernando7-a11y/People-CRUD-with-H2',
  },
  {
    tag: 'REST API · Docker',
    title: 'CRUD Spring Boot + MySQL',
    description: 'CRUD estruturado com Spring Boot e persistência relacional em MySQL. Containerizado com Docker, camadas bem definidas e Spring Data JPA para abstração do banco.',
    stack: ['Java','Spring Boot','MySQL','Docker','JPA','Hibernate'],
    url: 'https://github.com/luisvfernando7-a11y/crud1-spring-boote',
  },
  {
    tag: 'Frontend',
    title: 'Portfolio App',
    description: 'Este portfólio. Desenvolvido com Next.js 15, Tailwind CSS e Framer Motion com foco em UX para recrutadores técnicos.',
    stack: ['Next.js 15','TypeScript','Tailwind CSS','Framer Motion'],
    url: 'https://github.com/luisvfernando7-a11y/portfolio-app',
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 bg-[#080C14]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-3">// repositórios</p>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-[#F0F6FC]">Projetos Selecionados</h2>
          <div className="w-8 h-px bg-[#60A5FA] mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => (
            <div
              key={p.title}
              className="border border-[#1E2D45] bg-[#0D1117] rounded-xl p-6 flex flex-col gap-4 hover:border-[#30363D] hover:bg-[#0F1623] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-mono text-[10px] text-[#484F58] uppercase tracking-widest">{p.tag}</span>
              <h3 className="font-space text-lg font-semibold text-[#F0F6FC] leading-snug">{p.title}</h3>
              <p className="text-[#8B949E] text-sm leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(t => (
                  <span key={t} className="font-mono text-[10px] text-[#484F58] border border-[#1E2D45] rounded px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#60A5FA] hover:text-[#93C5FD] transition-colors flex items-center gap-1 w-fit mt-1"
              >
                Ver no GitHub
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

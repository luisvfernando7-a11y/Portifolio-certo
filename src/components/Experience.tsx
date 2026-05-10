const EXPERIENCES = [
  {
    period: "2026 — Em andamento",
    title: "TCC — Sistema IoT de Telemetria e Predição",
    local: "ETEC Jacinto Ferreira de Sá",
    desc: "Arquitetura de microserviços com Java 17 + Spring Boot como API Gateway. Rede ESP32 com Zigbee mesh, serviço de ML em Python para predição de umidade do solo, Docker e Spring Security.",
    badge: "Em Desenvolvimento"
  },
  {
    period: "Atual",
    title: "Jovem Aprendiz Administrativo",
    local: "Colégio Bagozzi",
    desc: "Gestão de processos administrativos, comunicação corporativa e trabalho colaborativo em ambiente profissional.",
  },
  {
    period: "2024 — 2026",
    title: "Ensino Médio Técnico em Informática para Internet",
    local: "ETEC Jacinto Ferreira de Sá",
    desc: "Formação técnica com ênfase em desenvolvimento web, banco de dados e programação orientada a objetos.",
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="font-mono text-accent text-sm">{"// experiência e formação"}</span>
        </div>

        <div className="relative max-w-4xl mx-auto py-4">
          
          {/* Linha Central */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-border -translate-x-1/2"></div>

          {/* Itens */}
          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-16">
                
                {/* Ponto */}
                <div className="absolute left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-accent shadow-[0_0_0_4px_#0E1117] -translate-x-1/2 z-10"></div>

                {/* Conteúdo */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-sm text-accent">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="px-2 py-0.5 border border-accent text-accent text-[0.7rem] uppercase tracking-wider rounded-full">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-primary text-xl font-space font-bold mt-1">
                    {exp.title}
                  </h3>
                  
                  <span className="font-sans text-muted font-medium text-base">
                    {exp.local}
                  </span>
                  
                  <p className="text-muted leading-relaxed mt-2">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

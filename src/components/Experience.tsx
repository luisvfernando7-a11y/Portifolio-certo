const EXPERIENCES = [
  {
    period: "2026 — EM ANDAMENTO",
    title: "TCC — SISTEMA IOT DE TELEMETRIA E PREDIÇÃO",
    local: "ETEC Jacinto Ferreira de Sá",
    desc: "Arquitetura de microserviços com Spring Boot 3 e Java 17. Rede ESP32 com Zigbee mesh, serviço de ML em Python para predição, Docker e orquestração TimescaleDB.",
    badge: "EM DESENVOLVIMENTO"
  },
  {
    period: "ATUAL",
    title: "JOVEM APRENDIZ ADMINISTRATIVO",
    local: "Colégio Bagozzi",
    desc: "Gestão de processos administrativos, comunicação corporativa e maturidade profissional.",
  },
  {
    period: "2024 — 2026",
    title: "ENSINO MÉDIO TÉCNICO EM INFORMÁTICA",
    local: "ETEC Jacinto Ferreira de Sá",
    desc: "Formação técnica focada em algoritmos, banco de dados e engenharia de software.",
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20">
          <p className="font-mono text-xs text-[#4A4A4A] tracking-widest uppercase mb-3">
            // experiência e formação
          </p>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-white">
            Trajetória Técnica
          </h2>
          <div className="w-12 h-px bg-white/20 mt-4" />
        </div>

        <div className="relative max-w-4xl mx-auto py-8">
          
          {/* Linha Central */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-[#1E1E1E]"></div>

          {/* Itens */}
          <div className="flex flex-col gap-16">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-16 group">
                
                {/* Ponto */}
                <div className="absolute left-6 top-2 w-2 h-2 rounded-full bg-white shadow-[0_0_0_4px_#080808] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform"></div>

                {/* Conteúdo */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-mono text-xs text-[#F5F5F5] font-bold">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="font-mono text-[9px] border border-[#2A2A2A] bg-[#0F0F0F] px-2 py-0.5 rounded-full text-[#A0A0A0] tracking-tighter">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-white text-xl font-space font-bold">
                    {exp.title}
                  </h3>
                  
                  <span className="font-mono text-sm text-[#4A4A4A] uppercase tracking-wider">
                    {exp.local}
                  </span>
                  
                  <p className="text-[#A0A0A0] leading-relaxed mt-2 max-w-2xl text-sm">
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

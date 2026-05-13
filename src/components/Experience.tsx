const items = [
  {
    period: '2026 — Em andamento',
    badge: 'Em Desenvolvimento',
    title: 'TCC — Sistema IoT de Telemetria e Predição',
    place: 'ETEC Jacinto Ferreira de Sá',
    desc: 'Arquitetura de microserviços com Java 17 + Spring Boot como API Gateway. Rede ESP32 com Zigbee mesh, serviço de ML em Python para predição de umidade do solo, Docker e Spring Security.',
  },
  {
    period: 'Atual',
    badge: 'Atual',
    title: 'Jovem Aprendiz Administrativo',
    place: 'Colégio Bagozzi',
    desc: 'Gestão de processos administrativos, comunicação corporativa e trabalho colaborativo em ambiente profissional.',
  },
  {
    period: '2024 — 2026',
    badge: null,
    title: 'Ensino Médio Técnico em Informática para Internet',
    place: 'ETEC Jacinto Ferreira de Sá',
    desc: 'Formação técnica com ênfase em desenvolvimento web, banco de dados e programação orientada a objetos.',
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-[#080C14]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-3">// trajetória</p>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-[#F0F6FC]">Experiência e Formação</h2>
          <div className="w-8 h-px bg-[#60A5FA] mt-4" />
        </div>

        <div className="flex flex-col gap-0">
          {items.map((item, i) => (
            <div key={i} className="flex gap-8 group">

              {/* Linha do tempo */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#60A5FA] mt-1.5 shrink-0 group-hover:shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-shadow" />
                {i < items.length - 1 && <div className="w-px flex-1 bg-[#1E2D45] my-2" />}
              </div>

              {/* Conteúdo */}
              <div className="pb-10 flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="font-mono text-xs text-[#484F58]">{item.period}</span>
                  {item.badge && (
                    <span className="font-mono text-[10px] text-[#60A5FA] border border-[#60A5FA]/25 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-space text-lg font-semibold text-[#F0F6FC] mb-0.5">{item.title}</h3>
                <p className="text-[#60A5FA] text-sm font-mono mb-3">{item.place}</p>
                <p className="text-[#8B949E] text-sm leading-relaxed">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-3">// sobre</p>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-[#F0F6FC]">Luis Fernando Galvani Vieira</h2>
          <div className="w-8 h-px bg-[#60A5FA] mt-4" />
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-14">

          <div className="flex flex-col gap-5 text-[#8B949E] leading-relaxed">
            <p>
              Especialista em unir a robustez do{' '}
              <span className="text-[#C9D1D9] font-medium">Java</span> with a inteligência do{' '}
              <span className="text-[#C9D1D9] font-medium">Python</span> para projetar sistemas escaláveis
              orientados a dados. Construo desde pipelines de Machine Learning com PyTorch e FastAPI
              até camadas de orquestração em Spring Boot — com foco em arquiteturas que funcionam em produção.
            </p>
            <p>
              Atualmente no 3º ano do Ensino Médio Técnico em Informática para Internet na{' '}
              <span className="text-[#C9D1D9]">ETEC Jacinto Ferreira de Sá</span>, com conclusão prevista
              para 2026. Atuando como Jovem Aprendiz Administrativo no{' '}
              <span className="text-[#C9D1D9]">Colégio Bagozzi</span>, onde desenvolvo comunicação
              profissional e gestão de processos em ambiente corporativo.
            </p>
            <p>
              Direcionando minha formação para engenharia de software e ciência de dados,
              com interesse em <span className="text-[#C9D1D9]">UTFPR</span> e{' '}
              <span className="text-[#C9D1D9]">UFSCar</span>. Inglês intermediário para leitura técnica.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { label: '// backend', items: ['Java 17','Spring Boot 3','APIs REST','JPA/Hibernate','Spring Security','Flask'] },
              { label: '// dados & ia', items: ['Python','PyTorch','scikit-learn','FastAPI','Pandas','NumPy','LSTM','Monte Carlo'] },
              { label: '// infra', items: ['Docker','Docker Compose','MySQL','PostgreSQL','TimescaleDB','H2','Git','GitHub'] },
            ].map(({ label, items }) => (
              <div key={label}>
                <p className="font-mono text-[10px] text-[#484F58] tracking-[0.15em] uppercase mb-3">{label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(i => (
                    <span key={i} className="font-mono text-xs text-[#8B949E] border border-[#1E2D45] rounded px-2 py-0.5">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

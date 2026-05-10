export default function About() {
  return (
    <section id="sobre" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        
        {/* Coluna Esquerda: Texto (60%) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          <div className="mb-4">
            <span className="font-mono text-accent text-sm block mb-4">{"// sobre"}</span>
            <h2 className="font-space text-4xl lg:text-5xl font-bold text-primary">
              Luis Fernando Galvani Vieira
            </h2>
            <h3 className="font-mono text-accent text-base mt-3 font-medium">
              Backend Developer · 17 anos · Ourinhos, SP
            </h3>
          </div>

          <p className="text-muted text-lg leading-relaxed">
            Especialista em unir a robustez do Java com a inteligência do Python para projetar sistemas escaláveis orientados a dados. Construo desde pipelines de Machine Learning com PyTorch e FastAPI até camadas de orquestração em Spring Boot — com foco em arquiteturas que funcionam em produção.
          </p>
          
          <p className="text-muted text-lg leading-relaxed">
            Atualmente no 3º ano do Ensino Médio Técnico em Informática para Internet na ETEC Jacinto Ferreira de Sá, com conclusão prevista para 2026. Atuando como Jovem Aprendiz Administrativo no Colégio Bagozzi, onde desenvolvo comunicação profissional e gestão de processos em ambiente corporativo.
          </p>

          <p className="text-muted text-lg leading-relaxed">
            Direcionando minha formação para engenharia de software e ciência de dados, com interesse em UTFPR e UFSCar. Inglês intermediário para leitura técnica.
          </p>

        </div>

        {/* Coluna Direita: Habilidades (40%) */}
        <div className="lg:col-span-2 flex flex-col gap-8 bg-surface border border-border p-8 rounded-xl w-full">
          
          {/* Grupo Backend */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-faint text-sm">
              {"// backend"}
            </h4>
            <div className="text-primary font-sans text-base leading-relaxed">
              Java 17 · Spring Boot 3 · APIs REST · JPA/Hibernate · Spring Security · Flask
            </div>
          </div>

          {/* Grupo Dados & IA */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-faint text-sm">
              {"// dados & ia"}
            </h4>
            <div className="text-primary font-sans text-base leading-relaxed">
              Python · PyTorch · scikit-learn · FastAPI · Pandas · NumPy · LSTM · Monte Carlo
            </div>
          </div>

          {/* Grupo Infra */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-faint text-sm">
              {"// infra"}
            </h4>
            <div className="text-primary font-sans text-base leading-relaxed">
              Docker · Docker Compose · MySQL · PostgreSQL · TimescaleDB · H2 · Git · GitHub
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

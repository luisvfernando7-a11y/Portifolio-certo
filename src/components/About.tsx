export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <p className="font-mono text-xs text-[#4A4A4A] tracking-widest uppercase mb-3">
            // sobre
          </p>
          <h2 className="font-space text-3xl lg:text-5xl font-bold text-white">
            Luis Fernando Vieira
          </h2>
          <div className="w-12 h-px bg-white/20 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          {/* Texto */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h3 className="font-mono text-white text-lg font-medium">
              Backend Developer · 17 anos · Ourinhos, SP
            </h3>

            <div className="space-y-6 text-[#A0A0A0] text-lg leading-relaxed">
              <p>
                Especialista em unir a robustez do <span className="text-white">Java</span> com a inteligência do <span className="text-white">Python</span> para projetar sistemas escaláveis. Construo desde pipelines de ML com PyTorch até camadas de orquestração em <span className="text-white">Spring Boot 3</span>.
              </p>
              
              <p>
                Atualmente no 3º ano do Ensino Médio Técnico em Informática na ETEC Jacinto Ferreira de Sá. Atuando como Jovem Aprendiz Administrativo no Colégio Bagozzi, desenvolvendo maturidade profissional em ambiente corporativo.
              </p>

              <p>
                Foco total em engenharia de software e ciência de dados. Almejo graduação na <span className="text-white">UTFPR</span> ou <span className="text-white">UFSCar</span>.
              </p>
            </div>
          </div>

          {/* Habilidades */}
          <div className="lg:col-span-2 space-y-10 bg-[#0F0F0F] border border-[#1E1E1E] p-10 rounded-sm shadow-card">
            
            <div className="space-y-4">
              <p className="font-mono text-[10px] text-[#4A4A4A] tracking-widest uppercase mb-1">// backend</p>
              <p className="text-[#F5F5F5] font-sans text-base leading-relaxed">
                Java 17 · Spring Boot 3 · APIs REST · JPA/Hibernate · Spring Security · Flask
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-[10px] text-[#4A4A4A] tracking-widest uppercase mb-1">// dados & ia</p>
              <p className="text-[#F5F5F5] font-sans text-base leading-relaxed">
                Python · PyTorch · scikit-learn · FastAPI · Pandas · NumPy · LSTM · Monte Carlo
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-[10px] text-[#4A4A4A] tracking-widest uppercase mb-1">// infra</p>
              <p className="text-[#F5F5F5] font-sans text-base leading-relaxed">
                Docker · Docker Compose · MySQL · PostgreSQL · TimescaleDB · H2 · Git
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

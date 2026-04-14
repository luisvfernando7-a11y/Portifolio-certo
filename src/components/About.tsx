"use client";

import Skills from "./Skills";

const TIMELINE = [
  { year: "2024", event: "Início do curso técnico na ETEC Jacinto Ferreira de Sá — Informática para Internet. Primeiros projetos práticos em Python, PHP e C#." },
  { year: "2025", event: "Aprofundamento em Machine Learning, redes neurais e LSTM. MySQL e Supabase no dia a dia. Desenvolvimento do TCC AgroSense IoT." },
  { year: "2026", event: "Conclusão prevista do curso técnico. Aprendendo Java e APIs REST avançadas. Planejamento do Suite Marketplace." },
];

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about-grid">
        <div className="about-left">
          <div className="about-avatar">LF</div>
          <h2 className="about-name">Luis Fernando</h2>
          <p className="about-role">Backend Developer · Machine Learning</p>
          <div className="about-info-list">
            <div className="about-info-row"><span className="about-info-label">Idade</span><span>17 anos</span></div>
            <div className="about-info-row"><span className="about-info-label">Cidade</span><span>Ourinhos, SP</span></div>
            <div className="about-info-row"><span className="about-info-label">Formação</span><span>ETEC Jacinto Ferreira de Sá</span></div>
            <div className="about-info-row"><span className="about-info-label">Curso</span><span>Informática para Internet (2024–2026)</span></div>
            <div className="about-info-row"><span className="about-info-label">Inglês</span><span>Intermediário</span></div>
            <div className="about-info-row"><span className="about-info-label">Email</span><a href="mailto:luisvfernando7@gmail.com" className="about-link">luisvfernando7@gmail.com</a></div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-quote">
            "É a curiosidade que me move. Quando algo me interessa, mergulho fundo até compreender."
          </div>

          <h3 className="section-label">Trajetória</h3>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div key={t.year} className="timeline-row">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-event">{t.event}</div>
              </div>
            ))}
          </div>

          <h3 className="section-label" style={{ marginTop: "2rem" }}>Habilidades</h3>
          <Skills />
        </div>
      </div>
    </div>
  );
}

"use client";

import Skills from "./Skills";

const TIMELINE = [
  { year: "2022", event: "Início na ETEC Jacinto Ferreira de Sá — curso de Informática para Internet." },
  { year: "2023", event: "Aprofundamento em Python, PHP e C#. Primeiros projetos backend." },
  { year: "2024", event: "Mergulhou em Machine Learning, redes neurais e LSTM. MySQL e Supabase no dia a dia." },
  { year: "2025", event: "Desenvolvendo o TCC AgroSense IoT. Aprendendo Java e APIs avançadas. Planejando o Suite Marketplace." },
];

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about-grid">
        <div className="about-left">
          <div className="about-avatar">LF</div>
          <h2 className="about-name">Luís Fernando</h2>
          <p className="about-role">Backend Developer & ML Enthusiast</p>
          <div className="about-info-list">
            <div className="about-info-row"><span className="about-info-label">Idade</span><span>17 anos</span></div>
            <div className="about-info-row"><span className="about-info-label">Cidade</span><span>Ourinhos, SP</span></div>
            <div className="about-info-row"><span className="about-info-label">Formação</span><span>ETEC Jacinto Ferreira de Sá</span></div>
            <div className="about-info-row"><span className="about-info-label">Curso</span><span>Informática para Internet</span></div>
            <div className="about-info-row"><span className="about-info-label">Inglês</span><span>Intermediário</span></div>
            <div className="about-info-row"><span className="about-info-label">Email</span><a href="mailto:luisvfernando7@gmail.com" className="about-link">luisvfernando7@gmail.com</a></div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-quote">
            "É a curiosidade que me move. Quando algo me cativa, mergulho fundo até dominar — e Machine Learning me cativou demais."
          </div>

          <h3 className="section-label">Minha jornada</h3>
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

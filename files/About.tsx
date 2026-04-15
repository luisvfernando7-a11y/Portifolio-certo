"use client";

const TIMELINE = [
  { year: "2022", event: "Início na ETEC Jacinto Ferreira de Sá — Informática para Internet." },
  { year: "2023", event: "Aprofundamento em Python, PHP e C#. Primeiros projetos backend reais." },
  { year: "2024", event: "Mergulhou em Machine Learning, LSTM e redes neurais. MySQL e Supabase no dia a dia." },
  { year: "2025", event: "TCC AgroSense IoT em desenvolvimento. Aprendendo Java e APIs avançadas. Planejando Suite Marketplace." },
];

const SKILLS = [
  { name: "Python", level: 85, cat: "Backend" },
  { name: "PHP", level: 75, cat: "Backend" },
  { name: "C#", level: 70, cat: "Backend" },
  { name: "JavaScript / HTML / CSS", level: 72, cat: "Frontend" },
  { name: "Machine Learning / LSTM", level: 65, cat: "IA & ML" },
  { name: "Redes Neurais", level: 60, cat: "IA & ML" },
  { name: "MySQL", level: 80, cat: "Banco de Dados" },
  { name: "Supabase", level: 70, cat: "Banco de Dados" },
];

const CATS = ["Backend", "Frontend", "IA & ML", "Banco de Dados"];

export default function About() {
  return (
    <section id="sobre" style={{ padding: "4rem 0" }}>
      <div style={{ marginBottom: 40 }}>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--text-faint)", textTransform: "uppercase",
          letterSpacing: "0.08em", marginBottom: 8,
        }}>sobre mim</p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)",
          fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em",
        }}>Trajetória e habilidades</h2>
      </div>

      <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
        <div style={{ width: 200, flexShrink: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: "var(--accent-dim)", border: "0.5px solid var(--accent-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800,
            color: "var(--accent-light)",
          }}>LF</div>

          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--text)" }}>Luís Fernando</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Backend & ML Engineer</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["Idade", "17 anos"],
              ["Cidade", "Ourinhos, SP"],
              ["Escola", "ETEC Jacinto Ferreira de Sá"],
              ["Curso", "Informática para Internet"],
              ["Inglês", "Intermediário"],
            ].map(([label, value]) => (
              <div key={label}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{value}</p>
              </div>
            ))}
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</p>
              <a href="mailto:luisvfernando7@gmail.com" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--accent-light)", textDecoration: "none", marginTop: 2, display: "block" }}>luisvfernando7@gmail.com</a>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", gap: 32 }}>
          <blockquote style={{
            borderLeft: "2px solid var(--accent)",
            paddingLeft: 16, margin: 0,
            fontFamily: "var(--font-body)", fontSize: 15,
            fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.7,
          }}>
            "É a curiosidade que me move. Quando algo me cativa, mergulho fundo até dominar — e Machine Learning me cativou demais."
          </blockquote>

          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>jornada</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {TIMELINE.map((t, i) => (
                <div key={t.year} style={{ display: "flex", gap: 14, paddingBottom: i < TIMELINE.length - 1 ? 20 : 0, position: "relative" }}>
                  {i < TIMELINE.length - 1 && (
                    <div style={{ position: "absolute", left: 42, top: 18, bottom: 0, width: "0.5px", background: "var(--border)" }} />
                  )}
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", minWidth: 36, paddingTop: 2 }}>{t.year}</span>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, marginTop: 6 }} />
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{t.event}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>habilidades</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CATS.map(cat => (
                <div key={cat}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{cat}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {SKILLS.filter(s => s.cat === cat).map(s => (
                      <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", minWidth: 180 }}>{s.name}</span>
                        <div style={{ flex: 1, height: 3, background: "var(--bg-raised)", borderRadius: 2, overflow: "hidden" }}>
                          <div style={{ width: `${s.level}%`, height: "100%", background: "var(--accent)", borderRadius: 2 }} />
                        </div>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", minWidth: 30, textAlign: "right" }}>{s.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

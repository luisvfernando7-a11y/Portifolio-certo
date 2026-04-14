"use client";

const SKILLS = [
  { name: "Python", level: 85, cat: "Backend" },
  { name: "PHP", level: 75, cat: "Backend" },
  { name: "C#", level: 70, cat: "Backend" },
  { name: "JavaScript", level: 72, cat: "Frontend" },
  { name: "HTML / CSS", level: 80, cat: "Frontend" },
  { name: "Machine Learning", level: 65, cat: "IA & ML" },
  { name: "Redes Neurais / LSTM", level: 60, cat: "IA & ML" },
  { name: "MySQL", level: 80, cat: "Banco de Dados" },
  { name: "Supabase", level: 70, cat: "Banco de Dados" },
  { name: "Java", level: 30, cat: "Aprendendo" },
  { name: "APIs REST", level: 65, cat: "Aprendendo" },
];

const CATS = ["Backend", "Frontend", "IA & ML", "Banco de Dados", "Aprendendo"];

export default function Skills() {
  return (
    <div className="skills-wrap">
      {CATS.map((cat) => (
        <div key={cat} className="skill-group">
          <p className="skill-cat-label">{cat}</p>
          {SKILLS.filter((s) => s.cat === cat).map((s) => (
            <div key={s.name} className="skill-row">
              <span className="skill-name">{s.name}</span>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${s.level}%` }} />
              </div>
              <span className="skill-pct">{s.level}%</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

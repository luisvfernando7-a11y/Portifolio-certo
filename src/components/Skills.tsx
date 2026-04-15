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
];

const CATEGORIES = ["Backend", "Frontend", "IA & ML", "Banco de Dados"];

export default function Skills() {
  const allSkills = SKILLS.map(s => s.name);
  
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: 10,
    }}>
      {allSkills.map((skill) => (
        <span key={skill} style={{
          fontFamily: "var(--font-body)", fontSize: 13,
          color: "var(--accent-light)",
          background: "var(--accent-dim)",
          border: "0.5px solid var(--accent-border)",
          padding: "6px 14px",
          borderRadius: 999,
        }}>{skill}</span>
      ))}
    </div>
  );
}

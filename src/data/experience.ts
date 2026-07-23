export type ExperienceItem = {
  period: string
  badge: string | null
  title: string
  place: string
  desc: string
}

export const EXP: ExperienceItem[] = [
  {
    period: '2026 — Presente', badge: 'TCC em andamento',
    title: 'Desenvolvimento do BrainSoil — Telemetria IoT e Predição',
    place: 'Trabalho de Conclusão de Curso · ETEC',
    desc: 'Arquitetura de backend com Java 17 + Spring Boot, modelo preditivo em Python (LSTM) e simulação de sensores ESP32, orquestrados via Docker. Meu primeiro projeto de ponta a ponta.',
  },
  {
    period: '2026', badge: 'Palestrante',
    title: 'Primeiras palestras técnicas sobre Inteligência Artificial',
    place: 'Unifio · ETEC Jacinto Ferreira de Sá',
    desc: 'Duas apresentações sobre IA e o impacto de dados e algoritmos na sociedade, para públicos de 40 a 300+ pessoas.',
  },
  {
    period: '2025', badge: 'Aprofundamento',
    title: 'Estudo de Redes Neurais e Machine Learning',
    place: 'Estudo Independente & ETEC',
    desc: 'Aprofundamento em redes neurais (LSTM) e Machine Learning por conta própria, base que depois usei para propor o BrainSoil como tema de TCC.',
  },
  {
    period: '2024 — 2026', badge: null,
    title: 'Ensino Médio Técnico em Informática para Internet',
    place: 'ETEC Jacinto Ferreira de Sá',
    desc: 'Entrada na ETEC e início da formação técnica: fundamentos de desenvolvimento web, banco de dados e programação orientada a objetos.',
  },
]

export const SKILLS = [
  { label: '// backend', items: ['Java 17', 'Spring Boot 3', 'APIs REST', 'JPA/Hibernate', 'Spring Security', 'Flask'] },
  { label: '// dados & ia', items: ['Python', 'PyTorch', 'scikit-learn', 'FastAPI', 'Pandas', 'NumPy', 'LSTM', 'Monte Carlo'] },
  { label: '// frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'CSS', 'UX'] },
  { label: '// infra', items: ['Docker', 'Docker Compose', 'MySQL', 'PostgreSQL', 'TimescaleDB', 'H2', 'MQTT', 'Git', 'GitHub'] },
]

export const ROLES = [
  'Backend Developer',
  'Engenharia de Dados',
  'Analista de Dados',
  'Estudante — Téc. em Informática (ETEC)',
]

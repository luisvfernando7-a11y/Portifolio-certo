'use client'

import { useState, useEffect, useRef } from 'react'

/* ─── DADOS ─────────────────────────────────── */

const ROLES = [
  'Engenharia de Software Avançada',
  'Ciência de Computação Aplicada',
  'Pesquisa de Modelos · IoT',
  'Divulgação Científica · Tech Speaker',
]

const PROJECTS = [
  {
    tag: 'REST API · Java',
    title: 'People CRUD with H2',
    desc: 'API REST com operações CRUD completas, banco H2 em memória e mapeamento JPA/Hibernate. Arquitetura Controller → Service → Repository.',
    stack: ['Java', 'Spring Boot 3', 'H2 Database', 'JPA', 'Maven'],
    url: 'https://github.com/luisvfernando7-a11y/People-CRUD-with-H2',
  },
  {
    tag: 'REST API · Docker',
    title: 'CRUD Spring Boot + MySQL',
    desc: 'CRUD com Spring Boot e persistência relacional em MySQL. Containerizado com Docker e arquitetura em camadas bem definidas.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'JPA', 'Hibernate'],
    url: 'https://github.com/luisvfernando7-a11y/crud1-spring-boote',
  },
  {
    tag: 'P&D · Eng. de Interface',
    title: 'Soluções Vieira',
    desc: 'Projeto de Pesquisa & Desenvolvimento em Engenharia de Interface. Demonstração de Web Performance Optimization (WPO), arquitetado sob padrões de HTML5 Semântico e conformidade com Acessibilidade Digital (a11y).',
    stack: ['HTML5 Semântico', 'CSS3 Avançado', 'WPO / a11y'],
    url: 'https://github.com/luisvfernando7-a11y/solucoes-vieira-landingpage',
    linkText: 'Acessar Documentação Técnica',
  },
  {
    tag: 'Frontend',
    title: 'Portfolio App',
    desc: 'Este portfólio. Desenvolvido com Next.js 15, Tailwind CSS e foco em UX para recrutadores técnicos.',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
    url: 'https://github.com/luisvfernando7-a11y/portfolio-app',
  },
]

const ARCH = [
  'Ingestão de dados em tempo real via ESP32 + Zigbee mesh',
  'Treinamento e inferência de modelos LSTM com PyTorch',
  'Simulação Monte Carlo para análise probabilística de risco',
  'API REST Spring Boot como camada de orquestração',
  'Orquestração de serviços com Docker Compose',
  'Segregação de bancos: ODS + banco de domínio',
]

const STACK_AGRO = [
  'Python','FastAPI','Spring Boot 3','Java 17',
  'PyTorch','scikit-learn','PostgreSQL','TimescaleDB',
  'Docker','MQTT','ESP32','Spring Security',
]

const SKILLS = [
  { label: '// backend',   items: ['Java 17','Spring Boot 3','APIs REST','JPA/Hibernate','Spring Security','Flask'] },
  { label: '// dados & ia',items: ['Python','PyTorch','scikit-learn','FastAPI','Pandas','NumPy','LSTM','Monte Carlo'] },
  { label: '// infra',     items: ['Docker','Docker Compose','MySQL','PostgreSQL','TimescaleDB','H2','Git','GitHub'] },
]

const EXP = [
  {
    period: '2026 — Presente', badge: 'Pesquisa Ativa',
    title: 'Pesquisador Líder — Sistema IoT de Telemetria e Predição (BrainSoil)',
    place: 'Pesquisa & Desenvolvimento',
    desc: 'Engenharia de arquitetura de microserviços com Java 17 + Spring Boot (API Gateway). Desenvolvimento de redes ESP32 com topologia Zigbee mesh e modelagem de Machine Learning preditiva em Python, orquestrados via Docker.',
  },
  {
    period: '2025 — Presente', badge: 'Speaker',
    title: 'Palestrante de Tecnologia & Divulgador Científico',
    place: 'Comunidade de Desenvolvimento',
    desc: 'Condução de circuitos imersivos de palestras tecnológicas. Destaque para o seminário massivo de 4 horas focado em Engenharia de Software e Sistemas, impactando diretamente mais de 300 membros do setor de tecnologia.',
  },
  {
    period: '2024 — 2026', badge: null,
    title: 'Pesquisa Acadêmica Aplicada',
    place: 'Instituição de Ensino Técnico',
    desc: 'Aprofundamento científico e prático em desenvolvimento de sistemas complexos, estruturação avançada de banco de dados e evolução dos paradigmas de programação orientada a objetos.',
  },
]

/* ─── SVGs ───────────────────────────────────── */

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const EmailIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
)

/* ─── ESTILOS INLINE (garantia total) ──────── */

const C = {
  // fundos
  bg0:  '#0A0F1E',
  bg1:  '#0F1729',
  bg2:  '#131F35',
  bg3:  '#1A2744',
  // texto
  t100: '#F1F5F9',
  t200: '#CBD5E1',
  t400: '#64748B',
  t500: '#475569',
  // bordas
  b1:   '#1E3A5F',
  b2:   '#2A4A7F',
  // accent azul
  a400: '#3B82F6',
  a300: '#60A5FA',
  a200: '#93C5FD',
}

const S = {
  section: (bg: string) => ({
    padding: '96px 0',
    backgroundColor: bg,
  }),
  container: {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '0 32px',
  } as React.CSSProperties,
  sectionLabel: {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '10px',
    color: C.t500,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    marginBottom: '12px',
  },
  h2: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: C.t100,
    lineHeight: 1.2,
  },
  divider: {
    width: '32px',
    height: '2px',
    backgroundColor: C.a400,
    marginTop: '16px',
  },
  card: {
    border: `1px solid ${C.b1}`,
    backgroundColor: C.bg2,
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    transition: 'border-color 0.2s, background-color 0.2s, transform 0.2s',
  },
  badge: {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '10px',
    color: C.t500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
  },
  techPill: {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '10px',
    color: C.t400,
    border: `1px solid ${C.b1}`,
    borderRadius: '4px',
    padding: '2px 8px',
    display: 'inline-block',
  },
  btnPrimary: {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '13px',
    fontWeight: 600,
    backgroundColor: C.a400,
    color: '#0A0F1E',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  },
  btnOutline: {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '13px',
    fontWeight: 500,
    backgroundColor: 'transparent',
    color: C.t200,
    border: `1px solid ${C.b2}`,
    borderRadius: '6px',
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
}

/* ─── COMPONENTE PRINCIPAL ──────────────────── */

export default function Portfolio() {
  const [roleIdx, setRoleIdx]   = useState(0)
  const [roleVis, setRoleVis]   = useState(true)
  const [videoErr, setVideoErr] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Animação de roles
  useEffect(() => {
    const t = setInterval(() => {
      setRoleVis(false)
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length)
        setRoleVis(true)
      }, 350)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  // Vídeo autoplay ao entrar na viewport
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const obs = new IntersectionObserver(
      ([e]) => { e.isIntersecting ? video.play().catch(() => {}) : video.pause() },
      { threshold: 0.3 }
    )
    obs.observe(video)
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ backgroundColor: C.bg0, color: C.t200, fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ── NAVBAR ─────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '56px',
        borderBottom: `1px solid ${C.b1}`,
        backgroundColor: 'rgba(10,15,30,0.92)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ ...S.container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <a href="#" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '14px', fontWeight: 700, color: C.t100, textDecoration: 'none', letterSpacing: '0.2em' }}>
            LG
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {[['Sobre','#sobre'],['Projetos','#projetos'],['Experiência','#experiencia'],['Contato','#contato']].map(([l,h]) => (
              <a key={l} href={h} style={{ fontSize: '13px', color: C.t400, textDecoration: 'none' }}>{l}</a>
            ))}
            <a
              href="/assets/Luis_Galvani_Curriculo.pdf"
              download="Luis_Galvani_Curriculo.pdf"
              style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.a300, border: `1px solid ${C.a300}40`, borderRadius: '6px', padding: '6px 14px', textDecoration: 'none' }}
            >
              Currículo ↓
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────── */}
      <section style={{ ...S.section(C.bg0), paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ ...S.container, display: 'grid', gridTemplateColumns: '1fr 300px', gap: '64px', alignItems: 'center' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: C.a400, display: 'inline-block' }} />
              <span style={{ ...S.sectionLabel, marginBottom: 0 }}>Applied Computer Scientist</span>
            </div>

            <div style={{ lineHeight: 1 }}>
              <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: C.t100, fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', lineHeight: 1 }}>
                Luis
              </div>
              <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: C.b2, fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', lineHeight: 1 }}>
                Galvani
              </div>
            </div>

            <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: C.a300, opacity: roleVis ? 1 : 0, transition: 'opacity 0.3s', height: '20px' }}>
              {ROLES[roleIdx]}
            </p>

            <p style={{ fontSize: '15px', color: C.t400, lineHeight: 1.7, maxWidth: '440px' }}>
              Cientista de Computação Aplicada & Pesquisador. Construo{' '}
              <span style={{ color: C.t200, fontWeight: 500 }}>arquiteturas de alta performance</span>,{' '}
              <span style={{ color: C.t200, fontWeight: 500 }}>pipelines de ML</span> e{' '}
              <span style={{ color: C.t200, fontWeight: 500 }}>ecossistemas IoT</span>{' '}
              na vanguarda do desenvolvimento tecnológico.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#projetos" style={S.btnPrimary}>Ver Projetos</a>
              <a href="/assets/Luis_Galvani_Curriculo.pdf" download="Luis_Galvani_Curriculo.pdf" style={S.btnOutline}>
                Baixar Currículo
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Java 17','Spring Boot 3','Python','FastAPI','Docker','ML'].map(t => (
                <span key={t} style={S.techPill}>{t}</span>
              ))}
            </div>
          </div>

          {/* STATUS CARD */}
          <div style={{ border: `1px solid ${C.b1}`, backgroundColor: C.bg2, borderRadius: '12px', padding: '24px' }}>
            <p style={S.sectionLabel}>// status da pesquisa</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Arquitetura em desenvolvimento — BrainSoil',
                'Pesquisa Aplicada em Modelos IoT',
                'Tech Speaker e Divulgador Científico',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: C.a400, fontSize: '11px', marginTop: '3px', flexShrink: 0 }}>▸</span>
                  <span style={{ fontSize: '13px', color: C.t200, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: `1px solid ${C.b1}`, marginTop: '20px', paddingTop: '16px' }}>
              <p style={S.sectionLabel}>// escopo de atuação</p>
              <p style={{ fontSize: '12px', color: C.t400 }}>Eng. de Software Avançada · Ciência de Dados</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── BRAINSOIL ──────────────────────────── */}
      <section id="brainsoil" style={S.section(C.bg1)}>
        <div style={S.container}>
          <div style={{ marginBottom: '48px' }}>
            <p style={S.sectionLabel}>// laboratório · p&d</p>
            <h2 style={S.h2}>BrainSoil — Predição Agroclimática com IA</h2>
            <p style={{ fontSize: '14px', color: C.t400, marginTop: '8px' }}>
              Arquitetura de microserviços · LSTM + Monte Carlo · IoT ESP32 · API REST
            </p>
            <span style={{
              display: 'inline-block', marginTop: '12px',
              fontFamily: '"JetBrains Mono", monospace', fontSize: '11px',
              color: C.a300, border: `1px solid ${C.a300}30`,
              backgroundColor: `${C.a300}08`, borderRadius: '20px', padding: '4px 12px',
            }}>
              Pesquisa Avançada · Em Desenvolvimento
            </span>
            <div style={S.divider} />
          </div>

          {/* Monitor */}
          <div style={{ maxWidth: '100%', margin: '0 auto' }}>
            <div style={{ border: `2px solid ${C.b2}`, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(59,130,246,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', backgroundColor: C.bg2, borderBottom: `1px solid ${C.b1}` }}>
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: C.t500, marginLeft: '8px' }}>
                  brainsoil-demo · v1.2.0
                </span>
              </div>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', minHeight: '480px', backgroundColor: C.bg0, overflow: 'hidden' }}>
                {!videoErr ? (
                  <video
                    ref={videoRef}
                    src="/assets/agroclima-demo.mp4"
                    autoPlay loop muted playsInline preload="metadata"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#0A0F1E' }}
                    onError={() => setVideoErr(true)}
                  />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: C.t500 }}>// demo em renderização</p>
                    <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: C.a300 }}>brainsoil v1.2.0 — em breve</p>
                  </div>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '20px', backgroundColor: C.b1 }} />
              <div style={{ width: '80px', height: '8px', backgroundColor: C.b1, borderRadius: '4px' }} />
            </div>
            <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: C.t500, textAlign: 'center', marginTop: '12px' }}>
              Execução de inferência LSTM em tempo real with integração IoT — BrainSoil v1.2.0
            </p>
          </div>

          {/* Arch + Stack */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '56px' }}>
            <div>
              <p style={S.sectionLabel}>// o que o sistema faz</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ARCH.map(a => (
                  <li key={a} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.a400, fontSize: '11px', marginTop: '3px', flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '13px', color: C.t400, lineHeight: 1.6 }}>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={S.sectionLabel}>// stack do projeto</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {STACK_AGRO.map(t => (
                  <span key={t} style={{ ...S.techPill, padding: '5px 12px', color: C.t200 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETOS ───────────────────────────── */}
      <section id="projetos" style={S.section(C.bg0)}>
        <div style={S.container}>
          <div style={{ marginBottom: '56px' }}>
            <p style={S.sectionLabel}>// repositórios</p>
            <h2 style={S.h2}>Projetos Selecionados</h2>
            <div style={S.divider} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {PROJECTS.map(p => (
              <div key={p.title} style={S.card}>
                <span style={S.badge}>{p.tag}</span>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '17px', fontWeight: 600, color: C.t100, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: C.t400, lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.stack.map(t => <span key={t} style={S.techPill}>{t}</span>)}
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                   style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.a300, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  {(p as any).linkText || 'Ver no GitHub'} <ArrowIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ──────────────────────────────── */}
      <section id="sobre" style={S.section(C.bg1)}>
        <div style={S.container}>
          <div style={{ marginBottom: '56px' }}>
            <p style={S.sectionLabel}>// sobre</p>
            <h2 style={S.h2}>Luis Fernando Galvani Vieira</h2>
            <p style={{ fontSize: '13px', color: C.a300, fontFamily: '"JetBrains Mono", monospace', marginTop: '6px' }}>
              Cientista de Computação Aplicada · Tech Speaker · Pesquisador
            </p>
            <div style={S.divider} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', color: C.t400, lineHeight: 1.8 }}>
              {[
                <>Especialista na interseção entre a robustez arquitetural do <b style={{ color: C.t200, fontWeight: 500 }}>Java</b> e a inteligência computacional do <b style={{ color: C.t200, fontWeight: 500 }}>Python</b>. O escopo da minha pesquisa engloba desde o treinamento de modelos probabilísticos até a orquestração e deploy de ecossistemas escaláveis orientados a dados.</>,
                <>Como <span style={{ color: C.t200 }}>Cientista de Computação Aplicada</span>, construo soluções na vanguarda tecnológica. Minha atuação centraliza-se no projeto de sistemas complexos de alta performance, pesquisa de algoritmos não-triviais e na estruturação profunda de dados.</>,
                <>Paralelamente à engenharia, atuo ativamente como <span style={{ color: C.t200 }}>Tech Speaker e Divulgador Científico</span>. Um marco recente foi a condução de um circuito técnico imersivo de 4 horas, focado em lógica computacional e evolução de software, impactando diretamente mais de 300 pesquisadores e estudantes no setor de tecnologia.</>,
              ].map((text, i) => <p key={i}>{text}</p>)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {SKILLS.map(({ label, items }) => (
                <div key={label}>
                  <p style={S.sectionLabel}>{label}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {items.map(i => <span key={i} style={S.techPill}>{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIÊNCIA ────────────────────────── */}
      <section id="experiencia" style={S.section(C.bg0)}>
        <div style={S.container}>
          <div style={{ marginBottom: '56px' }}>
            <p style={S.sectionLabel}>// trajetória</p>
            <h2 style={S.h2}>Experiência e Formação</h2>
            <div style={S.divider} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {EXP.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: C.a400, flexShrink: 0, marginTop: '4px', boxShadow: `0 0 12px ${C.a400}60` }} />
                  {i < EXP.length - 1 && <div style={{ width: '1px', flex: 1, backgroundColor: C.b1, margin: '6px 0' }} />}
                </div>
                <div style={{ paddingBottom: '40px', flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: C.t500 }}>{e.period}</span>
                    {e.badge && (
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: C.a300, border: `1px solid ${C.a300}30`, borderRadius: '20px', padding: '2px 10px' }}>
                        {e.badge}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '17px', fontWeight: 600, color: C.t100, marginBottom: '4px' }}>{e.title}</h3>
                  <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.a300, marginBottom: '10px' }}>{e.place}</p>
                  <p style={{ fontSize: '13px', color: C.t400, lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ────────────────────────────── */}
      <section id="contato" style={S.section(C.bg1)}>
        <div style={S.container}>
          <div style={{ marginBottom: '48px' }}>
            <p style={S.sectionLabel}>// contato</p>
            <h2 style={S.h2}>Vamos conversar?</h2>
            <div style={S.divider} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
            {[
              { label: 'GitHub',   href: 'https://github.com/luisvfernando7-a11y',          icon: <GitHubIcon /> },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luisfernandovieira',   icon: <LinkedInIcon /> },
              { label: 'Email',    href: 'mailto:luisvfernando7@gmail.com',                  icon: <EmailIcon /> },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  border: `1px solid ${C.b1}`, backgroundColor: C.bg2,
                  borderRadius: '8px', padding: '12px 20px',
                  color: C.t400, fontSize: '14px', fontWeight: 500,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
              >
                <span style={{ color: C.a400 }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
          <a
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            style={{ ...S.btnPrimary, fontSize: '14px', padding: '12px 24px' }}
          >
            Baixar Currículo — PDF <DownloadIcon />
          </a>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${C.b1}`, backgroundColor: C.bg0, padding: '32px 0' }}>
        <div style={{ ...S.container, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: C.t500 }}>
            Luis Galvani · {new Date().getFullYear()}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: C.t500 }}>
            <a href="https://github.com/luisvfernando7-a11y" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'inherit', textDecoration: 'none' }}>
              <GitHubIcon size={16} />
            </a>
            <a href="https://www.linkedin.com/in/luisfernandovieira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'inherit', textDecoration: 'none' }}>
              <LinkedInIcon size={16} />
            </a>
            <a href="mailto:luisvfernando7@gmail.com" aria-label="Email" style={{ color: 'inherit', textDecoration: 'none' }}>
              <EmailIcon size={16} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}

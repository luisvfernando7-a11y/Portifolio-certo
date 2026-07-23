export type Project = {
  tag: string
  title: string
  desc: string
  stack: string[]
  url: string
  linkText?: string
}

export const PROJECTS: Project[] = [
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
    url: 'https://solucoes-vieira.vercel.app',
    linkText: 'Visualizar Projeto Online',
  },
  {
    tag: 'Frontend',
    title: 'Portfolio App',
    desc: 'Este portfólio. Desenvolvido com Next.js, Tailwind CSS, Framer Motion e foco em UX para recrutadores técnicos.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://github.com/luisvfernando7-a11y/portfolio-app',
  },
]

export const ARCH = [
  'Ingestão de dados em tempo real via ESP32 + Zigbee mesh',
  'Treinamento e inferência de modelos LSTM com PyTorch',
  'Simulação Monte Carlo para análise probabilística de risco',
  'API REST Spring Boot como camada de orquestração',
  'Orquestração de serviços com Docker Compose',
  'Segregação de bancos: ODS + banco de domínio',
]

export const STACK_AGRO = [
  'Python', 'FastAPI', 'Spring Boot 3', 'Java 17',
  'PyTorch', 'scikit-learn', 'PostgreSQL', 'TimescaleDB',
  'Docker', 'MQTT', 'ESP32', 'Spring Security',
]

// Quando o repositório do BrainSoil for aberto, troque este valor pela URL real.
// O componente BrainSoil já está pronto para virar link automaticamente.
export const BRAINSOIL_REPO_URL: string | null = null

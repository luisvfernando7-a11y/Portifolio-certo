export type ClientWork = {
  tag: string
  title: string
  client: string
  desc: string
  highlights: string[]
  stack: string[]
  url: string
}

export const CLIENT_WORK: ClientWork[] = [
  {
    tag: 'Projeto para terceiro · Direito',
    title: 'Landing Page Institucional',
    client: 'Para Thaís Bianca Nogueira — Advocacia',
    desc: 'Site institucional desenvolvido para uma advogada em Ourinhos/SP, focado em credibilidade e facilidade de contato. Meu primeiro projeto entregue para uso real de terceiros.',
    highlights: [
      'SEO técnico (Metadata API, Open Graph, Sitemap, Robots)',
      'Integração com WhatsApp Business',
      'Política de Privacidade e Cookies (LGPD)',
    ],
    stack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS'],
    url: 'https://thaisbianca.vercel.app',
  },
  {
    tag: 'Projeto pessoal',
    title: 'Galvani Studio — Site Próprio',
    client: 'Projeto autoral',
    desc: 'Site do Galvani Studio, onde atuo como Founder desde julho de 2026.',
    highlights: [
      'Design minimalista e consistente',
      'Micro-interações com Framer Motion',
    ],
    stack: ['Next.js 14', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://galvanistudio.vercel.app',
  },
]

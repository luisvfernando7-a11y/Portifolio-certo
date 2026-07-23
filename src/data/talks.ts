export type Talk = {
  title: string
  theme: string
  place: string
  event: string
  date: string
  audience: string
  duration: string
  coSpeaker?: string
  topics: string[]
  mainPhoto: string
  galleryPhotos: string[]
}

export const TALKS: Talk[] = [
  {
    title: 'A Geopolítica do Algoritmo',
    theme: 'A ilusão da tecnologia neutra e o novo colonialismo invisível',
    place: 'ETEC Jacinto Ferreira de Sá',
    event: 'XVI Semana de Ciências Humanas',
    date: 'Maio de 2026',
    audience: '300+ estudantes',
    duration: '4 horas contínuas',
    coSpeaker: 'Kauê Brandão (vertente filosófica, Foucault)',
    topics: [
      'Linha do tempo da computação: de Turing (1950) às LLMs (2022)',
      'Arquitetura de redes neurais LSTM — inputs, outputs e fluxo de dados',
      'Infraestrutura física de Data Centers e o paradoxo da exploração de recursos no Brasil',
      'Paralelo entre domínio tecnológico e soberania nacional',
    ],
    mainPhoto: '/talks/palestra2-principal.jpeg',
    galleryPhotos: ['/talks/palestra2-grupo1.jpeg', '/talks/palestra2-grupo2.jpeg'],
  },
  {
    title: 'Você usa a IA para crescer ou para se esconder?',
    theme: 'Uso crítico e estratégico de Inteligência Artificial no dia a dia profissional',
    place: 'Unifio',
    event: 'Circuito de Palestras Técnicas',
    date: '8 de maio de 2026',
    audience: '~40 pessoas',
    duration: '2 horas',
    coSpeaker: 'Kauê Brandão (reflexão sobre conformismo)',
    topics: [
      'Evolução histórica da IA e conceitos de Machine Learning / LLMs',
      'Bancos de dados, redes, Big Data e Data Centers explicados de forma acessível',
      'Engenharia de prompt aplicada à rotina profissional',
      'IA como ferramenta de crescimento, não como substituição do pensamento crítico',
    ],
    mainPhoto: '/talks/palestra1-principal.jpeg',
    galleryPhotos: ['/talks/palestra1-grupo.jpeg'],
  },
]

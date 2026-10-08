import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/lib/SmoothScroll'

export const metadata: Metadata = {
  title: 'Luis Galvani | Técnico de Suporte de TI | Data Science & Software Engineering',
  description: 'Técnico de Suporte de TI com atuação em desenvolvimento de software e dados. Python, SQL, Machine Learning, Java, Docker e AWS Cloud.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}

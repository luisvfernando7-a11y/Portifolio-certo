import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/lib/SmoothScroll'

export const metadata: Metadata = {
  title: 'Luis Galvani | Backend Developer',
  description: 'Backend developer especializado em Java, Spring Boot, Python e ML.',
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

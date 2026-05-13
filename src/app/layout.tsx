import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luis Galvani | Backend Developer',
  description: 'Backend developer especializado em Java, Spring Boot, Python e ML.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

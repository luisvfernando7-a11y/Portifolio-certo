import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luis Galvani | Backend Developer',
  description: 'Desenvolvedor backend especializado em Java, Spring Boot, Python e ML.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#080C14] text-[#C9D1D9] antialiased">
        {children}
      </body>
    </html>
  )
}

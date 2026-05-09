import type { Metadata } from "next";
import "./globals.css";

/*
  ARQUIVOS NECESSÁRIOS — adicionar na pasta public/assets/:

  1. VÍDEO:
     Arquivo original: WhatsApp_Video_2026-05-09_at_20_04_58.mp4
     Renomear para: agroclima-demo.mp4
     Colocar em: public/assets/agroclima-demo.mp4

  2. CURRÍCULO:
     Converter Luis_Galvani_Curriculo.docx para PDF
     Salvar como: Luis_Galvani_Curriculo.pdf
     Colocar em: public/assets/Luis_Galvani_Curriculo.pdf

  3. DEPLOY:
     Após subir os arquivos no repositório, a Vercel faz deploy automático.
     O vídeo começa a rodar em loop na seção #agroclima.
     O botão "Baixar Currículo" faz download direto do PDF.
*/

export const metadata: Metadata = {
  title: "Luis Galvani | Backend & AI Systems Developer",
  description: "Portfólio de Luis Galvani, desenvolvedor backend especializado em unir a inteligência do Python com a robustez do Java para projetar sistemas escaláveis.",
  keywords: ["desenvolvedor backend", "java", "spring boot", "machine learning", "python", "APIs REST", "docker", "MySQL", "IoT", "estagiário backend", "Ourinhos"],
  openGraph: {
    title: "Luis Galvani | Backend & AI Systems Developer",
    description: "Portfólio de Luis Galvani, desenvolvedor backend com projetos em Java/Spring Boot, Python/ML e IoT.",
    type: "website",
    url: "https://luisgalvani.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

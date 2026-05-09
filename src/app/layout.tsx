import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Galvani | Backend Developer — Java, Spring Boot & Machine Learning",
  description: "Portfólio de Luis Galvani, desenvolvedor backend com foco em Java, Spring Boot, Python e Machine Learning. Projetos com APIs REST, Docker e bancos relacionais.",
  keywords: ["desenvolvedor backend", "java", "spring boot", "machine learning", "python", "APIs REST", "docker", "MySQL", "IoT", "estagiário backend", "Ourinhos"],
  openGraph: {
    title: "Luis Galvani | Backend Developer — Java, Spring Boot & Machine Learning",
    description: "Portfólio de Luis Galvani, desenvolvedor backend com projetos em Java/Spring Boot, Python/ML e IoT.",
    type: "website",
    url: "https://luisgalvani.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

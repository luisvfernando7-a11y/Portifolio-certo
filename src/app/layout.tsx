import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Galvani | Backend Developer & Machine Learning",
  description: "Portfólio de Luis Galvani, desenvolvedor focado em backend, Python e Machine Learning.",
  keywords: ["desenvolvedor backend", "machine learning", "python", "PHP", "C#", "IoT", "Ourinhos"],
  openGraph: {
    title: "Luis Galvani | Backend Developer & Machine Learning",
    description: "Portfólio interativo de Luis Galvani, desenvolvedor backend com foco em Machine Learning e IA.",
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

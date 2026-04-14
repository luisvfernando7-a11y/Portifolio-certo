import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luís Fernando — Backend Developer & ML",
  description: "Portfólio de Luís Fernando — desenvolvedor backend apaixonado por Machine Learning e IA. Projetos de IoT, sistemas preditivos e mais.",
  keywords: ["desenvolvedor backend", "machine learning", "python", "PHP", "C#", "IoT", "Ourinhos"],
  openGraph: {
    title: "Luís Fernando — Backend Developer & ML",
    description: "Portfólio interativo com IA. Converse com a IA do Luís sobre sua trajetória e projetos.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

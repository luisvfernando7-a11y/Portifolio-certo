import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Luis Galvani | Full-Stack Developer",
        template: "%s | Luis Galvani",
    },
    description:
        "Desenvolvedor Full-Stack unindo a robustez do Java (Spring Boot) com a agilidade do React & Next.js. Transformando desafios de negócio em software eficiente.",
    keywords: [
        "Full-Stack Developer",
        "Java",
        "Spring Boot",
        "React",
        "Next.js",
        "Luis Galvani",
        "Portfolio",
        "Software Engineer",
    ],
    authors: [{ name: "Luis Galvani" }],
    creator: "Luis Galvani",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "#", // Update with real URL when deployed
        title: "Luis Galvani | Full-Stack Developer",
        description:
            "Confira meu portfólio com projetos em Java, Spring Boot e Next.js.",
        siteName: "Luis Galvani Portfolio",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <LanguageProvider>
                    <SmoothScroll>
                        <Header />
                        {children}
                        <Footer />
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}

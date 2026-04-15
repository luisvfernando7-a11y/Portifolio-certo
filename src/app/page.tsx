"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

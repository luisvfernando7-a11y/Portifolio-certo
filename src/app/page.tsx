"use client";

import { useState } from "react";
import EntryScreen from "@/components/EntryScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {!hasEntered && (
        <EntryScreen onEnter={() => setHasEntered(true)} />
      )}
      {hasEntered && (
        <>
          <Navbar />
          <main style={{ display: "flex", flexDirection: "column" }}>
            <section style={{ maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 1.25rem", paddingTop: "4rem" }}>
              <Hero />
            </section>
            <section style={{ maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 1.25rem", paddingTop: "6rem", paddingBottom: "4rem" }}>
              <Projects />
            </section>
            <section style={{ maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 1.25rem", paddingTop: "6rem", paddingBottom: "4rem" }}>
              <About />
            </section>
            <section style={{ maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 1.25rem", paddingTop: "6rem", paddingBottom: "4rem" }}>
              <Contact />
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

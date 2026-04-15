"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && (
        <IntroAnimation onFinish={() => setIntroFinished(true)} />
      )}
      {introFinished && (
        <>
          <Navbar />
          <main style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", width: "100%", padding: "0 1.25rem" }}>
              <Hero />
            </div>
            <div style={{ maxWidth: 900, margin: "0 auto", width: "100%", padding: "0 1.25rem" }}>
              <Projects />
            </div>
            <div style={{ maxWidth: 900, margin: "0 auto", width: "100%", padding: "0 1.25rem" }}>
              <About />
            </div>
            <div style={{ maxWidth: 900, margin: "0 auto", width: "100%", padding: "0 1.25rem" }}>
              <Contact />
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

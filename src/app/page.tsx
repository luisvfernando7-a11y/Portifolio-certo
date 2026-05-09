import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgroclimaSection from "@/components/AgroclimaSection";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Navbar />
      <Hero />
      <AgroclimaSection />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

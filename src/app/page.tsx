import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <Education />
            <Projects />
        </main>
    );
}

import { Navbar }     from '@/components/Navbar'
import { Hero }       from '@/components/Hero'
import { AgroClima }  from '@/components/AgroClima'
import { Projects }   from '@/components/Projects'
import { About }      from '@/components/About'
import { Experience } from '@/components/Experience'
import { Contact }    from '@/components/Contact'
import { Footer }     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AgroClima />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

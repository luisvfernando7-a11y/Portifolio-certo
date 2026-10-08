import { C, S } from '@/data/theme'
import ContactLinks from './ContactLinks'

export default function Contact() {
  return (
    <section id="contato" style={S.section(C.bg1)} aria-labelledby="contact-title">
      <div style={S.container}>
        <p style={S.sectionLabel}>CONTATO</p>
        <h2 id="contact-title" style={S.h2}>Vamos conversar?</h2>
        <p style={{ maxWidth: '540px', margin: '16px 0 28px' }}>
          Entre em contato para conversar sobre projetos, desenvolvimento backend e dados.
        </p>
        <ContactLinks />
      </div>
    </section>
  )
}

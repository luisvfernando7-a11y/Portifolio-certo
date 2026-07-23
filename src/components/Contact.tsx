import { C, S } from '@/data/theme'
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from './icons'

export default function Contact() {
  return (
    <section id="contato" style={S.section(C.bg1)}>
      <div style={S.container}>
        <div style={{ marginBottom: '48px' }}>
          <p style={S.sectionLabel}>// contato</p>
          <h2 style={S.h2}>Vamos conversar?</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '520px' }}>
            Estou buscando minha primeira oportunidade em Backend, Engenharia de Dados ou Análise de
            Dados. Se você tem uma vaga, um projeto ou só quer trocar uma ideia sobre tecnologia, me
            chama.
          </p>
          <div style={S.divider} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/luisvfernando7-a11y', icon: <GitHubIcon /> },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luisfernandovieira', icon: <LinkedInIcon /> },
            { label: 'Email', href: 'mailto:luisvfernando7@gmail.com', icon: <EmailIcon /> },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                border: `1px solid ${C.b1}`, backgroundColor: C.bg2,
                borderRadius: '4px', padding: '14px 22px',
                color: C.t300, fontSize: 'var(--fs-small)', fontWeight: 500,
                textDecoration: 'none', transition: 'border-color 0.2s',
              }}
            >
              <span style={{ color: C.t100 }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
        <a
          href="/assets/Luis_Galvani_Curriculo.pdf"
          download="Luis_Galvani_Curriculo.pdf"
          style={{ ...S.btnPrimary, fontSize: '15px', padding: '14px 28px' }}
        >
          Baixar Currículo — PDF <DownloadIcon />
        </a>
      </div>
    </section>
  )
}

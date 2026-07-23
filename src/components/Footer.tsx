import { C, S } from '@/data/theme'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons'

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.b1}`, backgroundColor: C.bg0, padding: '36px 0' }}>
      <div style={S.container} className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0">
        <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.t600 }}>
          Luis Galvani · {new Date().getFullYear()}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', color: C.t500 }}>
          <a href="https://github.com/luisvfernando7-a11y" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'inherit', textDecoration: 'none' }}>
            <GitHubIcon size={17} />
          </a>
          <a href="https://www.linkedin.com/in/luisfernandovieira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'inherit', textDecoration: 'none' }}>
            <LinkedInIcon size={17} />
          </a>
          <a href="mailto:luisvfernando7@gmail.com" aria-label="Email" style={{ color: 'inherit', textDecoration: 'none' }}>
            <EmailIcon size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}

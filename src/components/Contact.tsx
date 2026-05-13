'use client'

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/luisvfernando7-a11y',
    icon: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luisfernandovieira',
    icon: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Email',
    href: 'mailto:luisvfernando7@gmail.com',
    icon: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="mb-12">
          <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-3">// contato</p>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-[#F0F6FC]">Vamos conversar?</h2>
          <div className="w-8 h-px bg-[#60A5FA] mt-4" />
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border border-[#1E2D45] bg-[#080C14] rounded-lg px-5 py-3 text-[#8B949E] text-sm font-medium hover:border-[#30363D] hover:text-[#F0F6FC] hover:bg-[#0F1623] transition-all duration-200"
            >
              <span className="text-[#60A5FA]"><l.icon /></span>
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="/assets/Luis_Galvani_Curriculo.pdf"
          download="Luis_Galvani_Curriculo.pdf"
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold bg-[#60A5FA] text-[#080C14] px-6 py-3 rounded hover:bg-[#93C5FD] transition-colors duration-200"
        >
          Baixar Currículo — PDF
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        </a>

      </div>
    </section>
  )
}

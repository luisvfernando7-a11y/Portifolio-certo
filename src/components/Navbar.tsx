'use client'

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-[#1E2D45] backdrop-blur-xl"
      style={{ backgroundColor: 'rgba(8,12,20,0.92)' }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">

        <a href="#" className="font-mono text-sm font-bold text-[#F0F6FC] tracking-[0.2em] hover:text-[#60A5FA] transition-colors">
          LG
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            ['Sobre',       '#sobre'],
            ['Projetos',    '#projetos'],
            ['Experiência', '#experiencia'],
            ['Contato',     '#contato'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-[#8B949E] hover:text-[#F0F6FC] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/assets/Luis_Galvani_Curriculo.pdf"
          download="Luis_Galvani_Curriculo.pdf"
          className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#60A5FA] border border-[#60A5FA]/30 rounded px-4 py-2 hover:bg-[#60A5FA]/10 hover:border-[#60A5FA]/60 transition-all duration-200"
        >
          Currículo ↓
        </a>

        <button className="md:hidden text-[#8B949E] hover:text-[#F0F6FC]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

      </div>
    </nav>
  )
}

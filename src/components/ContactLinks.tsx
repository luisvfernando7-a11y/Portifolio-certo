import { Linkedin, Mail, Github } from 'lucide-react'
import { CONTACTS } from '@/data/contact'

const ICONS = [Linkedin, Github, Mail]

export default function ContactLinks({ compact = false }: { compact?: boolean }) {
  return (
    <nav aria-label={compact ? 'Contatos rápidos' : 'Links de contato'} className={compact ? 'flex' : 'grid grid-cols-1 gap-4 md:grid-cols-3'}>
      {CONTACTS.map(({ label, href, description, display }, index) => {
        const Icon = ICONS[index]
        return (
          <a key={label} href={href} aria-label={compact ? label : undefined}
            className={compact
              ? 'flex size-11 items-center justify-center rounded-md border border-line bg-white text-muted hover:border-black hover:text-black'
              : 'group flex h-full flex-col gap-4 rounded-lg border border-line bg-white p-6 text-muted transition-colors hover:border-black hover:bg-surface'}>
            <Icon size={20} aria-hidden="true" />
            {!compact && <>
              <span className="text-lg font-semibold text-ink">{label}<span aria-hidden="true" className="ml-2 text-black">↗</span></span>
              <span>{description}</span>
              <span className="mt-auto break-all text-sm text-black">{display}</span>
            </>}
          </a>
        )
      })}
    </nav>
  )
}

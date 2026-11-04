import { useContent } from '@/i18n/useContent'
import { useTranslations } from 'next-intl'
import { Linkedin, Mail, Github } from 'lucide-react'
import { CONTACTS } from '@/data/contact'

const ICONS = [Linkedin, Github, Mail]

export default function ContactLinks({ compact = false }: { compact?: boolean }) {
  const t = useTranslations()
  const content = useContent()
  return (
    <nav aria-label={compact ? t('contact.quick') : t('contact.links')} className={compact ? 'flex' : 'grid grid-cols-1 gap-4 md:grid-cols-3'}>
      {CONTACTS.map(({ label, href, description, display }, index) => {
        const Icon = ICONS[index]
        return (
          <a key={label} href={href} aria-label={compact ? content(label) : undefined}
            className={compact
              ? 'flex size-11 items-center justify-center rounded-md border border-line bg-white text-muted hover:border-black hover:text-black'
              : 'group flex h-full flex-col gap-4 rounded-lg border border-line bg-white p-6 text-muted transition-colors hover:border-black hover:bg-surface'}>
            <Icon size={20} aria-hidden="true" />
            {!compact && <>
              <span className="text-lg font-semibold text-ink">{content(label)}<span aria-hidden="true" className="ml-2 text-black">↗</span></span>
              <span>{content(description)}</span>
              <span className="mt-auto break-all text-sm text-black">{display}</span>
            </>}
          </a>
        )
      })}
    </nav>
  )
}

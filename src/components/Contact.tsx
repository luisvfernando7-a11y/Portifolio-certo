import { useTranslations } from 'next-intl'
import { C, S } from '@/data/theme'
import ContactLinks from './ContactLinks'

export default function Contact() {
  const t = useTranslations()
  return (
    <section id="contato" style={S.section(C.bg1)} aria-labelledby="contact-title">
      <div style={S.container}>
        <p style={S.sectionLabel}>{t('nav.contact').toUpperCase()}</p>
        <h2 id="contact-title" style={S.h2}>{t('contact.title')}</h2>
        <p style={{ maxWidth: '540px', margin: '16px 0 28px' }}>{t('contact.intro')}</p>
        <ContactLinks />
      </div>
    </section>
  )
}

import { useContent } from '@/i18n/useContent'
import { useTranslations } from 'next-intl'
import { C, S } from '@/data/theme'
import { EXP, PROFESSIONAL_EXPERIENCE, type ExperienceItem } from '@/data/experience'

function Entries({ entries, academic = false }: { entries: ExperienceItem[]; academic?: boolean }) {
  const content = useContent()
  const Heading = academic ? 'h4' : 'h3'
  return (
    <ol className="space-y-6 border-l-2 border-line pl-5 sm:pl-8">
      {entries.map(entry => (
        <li key={`${entry.place}-${entry.title}`} className="rounded-lg border border-line bg-white p-5 sm:p-7">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-black">{content(entry.period)}</span>
            {entry.badge && <span style={S.badge}>{content(entry.badge)}</span>}
          </div>
          <Heading className="text-lg font-semibold text-black">{content(entry.title)}</Heading>
          <p className="mt-1 font-medium text-ink">{content(entry.place)}</p>
          <p className="mt-3 max-w-3xl text-muted">{content(entry.desc)}</p>
        </li>
      ))}
    </ol>
  )
}

export default function Timeline() {
  const t = useTranslations()
  return (
    <section id="experiencia" style={S.section(C.bg0)} aria-labelledby="experience-title">
      <div style={S.container}>
        <p style={S.sectionLabel}>{t('timeline.label')}</p>
        <h2 id="experience-title" style={S.h2}>{t('timeline.title')}</h2>
        <div style={{ ...S.divider, marginBottom: '32px' }} />
        <Entries entries={PROFESSIONAL_EXPERIENCE} />
        <h3 className="mb-6 mt-12 text-xl font-semibold text-ink">{t('timeline.education')}</h3>
        <Entries entries={EXP} academic />
      </div>
    </section>
  )
}

'use client'

import {useLocale, useTranslations} from 'next-intl'
import {localePath, routing} from '@/i18n/routing'

const NAMES = {'pt-BR': 'Português', en: 'English', es: 'Español'}
const LABELS = {'pt-BR': 'PT', en: 'EN', es: 'ES'}

export default function LanguageSwitcher() {
  const locale = useLocale()
  const t = useTranslations('nav')
  return <nav aria-label={t('languages')} className="language-switcher flex items-center gap-1">
    {routing.locales.map(value => <a key={value} href={localePath(value)} lang={value}
      hrefLang={value} aria-label={NAMES[value]} aria-current={locale === value ? 'page' : undefined}
      onClick={event => {
        // Keep native links (including open-in-new-tab), adding the current section.
        event.currentTarget.href = `${localePath(value)}${window.location.hash}`
      }}
      className="flex min-h-11 min-w-8 items-center justify-center rounded-md px-1 text-xs text-muted aria-[current=page]:font-bold aria-[current=page]:text-black">
      {LABELS[value]}
    </a>)}
  </nav>
}

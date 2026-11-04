import type {Metadata} from 'next'
import {hasLocale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import {notFound} from 'next/navigation'
import {routing, ORIGIN, localePath} from './routing'

export async function pageMetadata(locale: string): Promise<Metadata> {
  if (!hasLocale(routing.locales, locale)) notFound()
  const t = await getTranslations({locale, namespace: 'seo'})
  const title = t('title')
  const description = t('description')
  const url = `${ORIGIN}${localePath(locale)}`
  const image = {url: '/social-card.png', width: 1200, height: 630, alt: 'Luis Galvani — Java · Python · APIs · Data'}
  return {
    metadataBase: new URL(ORIGIN), title, description,
    alternates: {
      canonical: url,
      languages: {'pt-BR': `${ORIGIN}/`, en: `${ORIGIN}/en`, es: `${ORIGIN}/es`, 'x-default': `${ORIGIN}/`},
    },
    openGraph: {type: 'website', title, description, url, siteName: 'Luis Galvani',
      locale: locale === 'pt-BR' ? 'pt_BR' : locale === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: ['pt_BR', 'en_US', 'es_ES'].filter(value => value !== (locale === 'pt-BR' ? 'pt_BR' : locale === 'en' ? 'en_US' : 'es_ES')),
      images: [image]},
    twitter: {card: 'summary_large_image', title, description, images: [image]},
    robots: {index: true, follow: true},
  }
}


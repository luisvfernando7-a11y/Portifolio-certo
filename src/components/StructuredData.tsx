import {ORIGIN, localePath} from '@/i18n/routing'
import {CONTACTS} from '@/data/contact'

export default function StructuredData({locale, title, description}: {locale: string; title: string; description: string}) {
  const url = `${ORIGIN}${localePath(locale)}`
  const person = `${ORIGIN}/#person`
  const website = `${ORIGIN}/#website`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {'@type': 'Person', '@id': person, name: 'Luis Fernando Galvani Vieira', alternateName: 'Luis Galvani',
        url: `${ORIGIN}/`, sameAs: CONTACTS.filter(value => value.href.startsWith('https:')).map(value => value.href)},
      {'@type': 'WebSite', '@id': website, name: 'Luis Galvani', url: `${ORIGIN}/`,
        inLanguage: ['pt-BR', 'en', 'es'], publisher: {'@id': person}},
      {'@type': 'ProfilePage', '@id': `${url}#profile`, url, name: title, description,
        inLanguage: locale, isPartOf: {'@id': website}, mainEntity: {'@id': person}},
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, '\\u003c')}} />
}

import {notFound} from 'next/navigation'
import LocaleDocument from '@/components/LocaleDocument'
import {pageMetadata} from '@/i18n/metadata'

export const dynamicParams = false
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}]
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  return pageMetadata((await params).locale)
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
  const {locale} = await params
  if (locale !== 'en' && locale !== 'es') notFound()
  return <LocaleDocument locale={locale}>{children}</LocaleDocument>
}

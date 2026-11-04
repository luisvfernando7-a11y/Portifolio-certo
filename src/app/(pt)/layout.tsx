import LocaleDocument from '@/components/LocaleDocument'
import {pageMetadata} from '@/i18n/metadata'

export async function generateMetadata() {
  return pageMetadata('pt-BR')
}

export default function PortugueseLayout({children}: {children: React.ReactNode}) {
  return <LocaleDocument locale="pt-BR">{children}</LocaleDocument>
}

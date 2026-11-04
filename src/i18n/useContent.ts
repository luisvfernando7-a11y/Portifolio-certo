import {useTranslations} from 'next-intl'
import {contentKeys} from './content-keys'

// Data records keep their original Portuguese copy and proper names.
// Explicit keys connect translatable fields to the shared message dictionaries.
export function useContent() {
  const t = useTranslations()
  return (value: string) => contentKeys[value] ? t(contentKeys[value]) : value
}

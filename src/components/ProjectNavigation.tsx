import {useTranslations} from 'next-intl'
import {PROJECTS} from '@/data/projects'
import {CLIENT_WORK} from '@/data/clientwork'

export default function ProjectNavigation() {
  const t = useTranslations('discovery')
  return <nav aria-label={t('label')} className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
    <a className="inline-flex min-h-11 items-center text-ink underline underline-offset-4" href="#brainsoil">{t('featured')}</a>
    <a className="inline-flex min-h-11 items-center text-ink underline underline-offset-4" href="#projetos">{t('study', {count: PROJECTS.length})}</a>
    <a className="inline-flex min-h-11 items-center text-ink underline underline-offset-4" href="#client-work">{t('applied', {count: CLIENT_WORK.length})}</a>
  </nav>
}

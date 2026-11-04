import {NextIntlClientProvider} from 'next-intl'
import {getMessages, setRequestLocale} from 'next-intl/server'
import SmoothScroll from '@/lib/SmoothScroll'
import type {Locale} from '@/i18n/routing'
import '@/app/globals.css'

export default async function LocaleDocument({children, locale}: {children: React.ReactNode; locale: Locale}) {
  setRequestLocale(locale)
  const messages = await getMessages({locale})
  return <html lang={locale}>
    <body><NextIntlClientProvider locale={locale} messages={messages}>
      <SmoothScroll>{children}</SmoothScroll>
    </NextIntlClientProvider></body>
  </html>
}

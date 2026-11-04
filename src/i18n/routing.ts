// Explicit static routes: Portuguese keeps the existing home URL.
// No middleware, automatic language redirects or locale cookies are needed.
export const routing = {
  locales: ['pt-BR', 'en', 'es'] as const,
  defaultLocale: 'pt-BR' as const,
}

export type Locale = (typeof routing.locales)[number]
export const ORIGIN = 'https://luisgalvani.vercel.app'
export const localePath = (locale: string) => locale === 'pt-BR' ? '/' : `/${locale}`

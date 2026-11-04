import Portfolio from '@/components/Portfolio'

export default async function LocalizedPage({params}: {params: Promise<{locale: string}>}) {
  return <Portfolio locale={(await params).locale} />
}

import { notFound } from 'next/navigation'
import ArchitectServicePage from '@/components/architect/ArchitectServicePage'
import { ARCHITECT_SERVICES, getArchitectServiceBySlug } from '@/data/architect'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return ARCHITECT_SERVICES.map((service) => ({ slug: service.id }))
}

export default function ArchitectServiceSlugPage({ params }: Props) {
  const service = getArchitectServiceBySlug(params.slug)
  if (!service) notFound()
  return <ArchitectServicePage service={service} />
}

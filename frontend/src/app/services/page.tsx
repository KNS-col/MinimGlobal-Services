import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/shared/PageHero'
import ServicesOverview from '@/components/home/ServicesOverview'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Media & production, catering & hospitality, architecture & construction, fashion & apparel, and live music & instruments — the services Minim Global Services delivers across Sierra Leone.',
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Professional solutions across media, food, architecture, fashion, and music — delivered by five specialized divisions under one company."
        image="/images/minimglobal-hero.jpg"
      />
      <ServicesOverview />
      <Footer />
    </main>
  )
}

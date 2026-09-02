import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/shared/PageHero'
import BusinessDivisions from '@/components/home/BusinessDivisions'

export const metadata: Metadata = {
  title: 'Our Businesses',
  description:
    'Minim Studios, Minim Foods, Minim Architects, Designers & Engineers, Minim Clothings, and Minim Music — five divisions driving growth across Sierra Leone.',
}

export default function BusinessesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Our Divisions"
        title="Our Businesses"
        subtitle="Driving growth across media, food, architecture, and apparel to build a prosperous future for Sierra Leone."
        image="/images/minimglobal-hero.jpg"
      />
      <BusinessDivisions />
      <Footer />
    </main>
  )
}

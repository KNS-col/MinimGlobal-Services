import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import AboutOverview from '@/components/home/AboutOverview'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Minim Global Services is a diversified Sierra Leonean group spanning media production, food & hospitality, architecture, apparel, and music.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutOverview />
      <Footer />
    </main>
  )
}

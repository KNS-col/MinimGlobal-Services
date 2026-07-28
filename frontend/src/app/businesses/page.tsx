import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/shared/PageHero'
import BusinessDivisions from '@/components/home/BusinessDivisions'

export default function BusinessesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Our Divisions"
        title="Our Businesses"
        subtitle="Driving growth across media, food, architecture, and apparel to build a prosperous future for Sierra Leone."
        image="/images/Hero-4.jpg"
      />
      <BusinessDivisions />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/shared/PageHero'
import BusinessDivisions from '@/components/home/BusinessDivisions'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Choose a service to learn more:"
        image="/images/Hero-4.jpg"
      />
      <BusinessDivisions />
      <Footer />
    </main>
  )
}

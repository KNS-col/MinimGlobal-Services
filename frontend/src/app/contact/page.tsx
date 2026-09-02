import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/shared/PageHero'
import ContactPageContent from '@/components/home/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Minim Global Services for questions, partnership opportunities, or inquiries about any of our divisions.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Contact our team for questions about our services, partnership opportunities, or general inquiries."
        image="/images/minimglobal-hero.jpg"
      />
      <ContactPageContent />
      <Footer />
    </main>
  )
}

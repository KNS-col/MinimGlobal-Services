import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/shared/PageHero'
import ContactPageContent from '@/components/home/ContactPageContent'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you! Whether you have questions about our services, want to collaborate, or simply need more information, our team at Minim Global Services is here to assist you."
        image="/images/Hero-2.jpeg"
      />
      <ContactPageContent />
      <Footer />
    </main>
  )
}

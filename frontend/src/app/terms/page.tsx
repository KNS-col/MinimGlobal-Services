import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/shared/PageHero'
import LegalContent from '@/components/shared/LegalContent'
import { TERMS_SECTIONS } from '@/data/legal'

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The terms that govern your use of the Minim Global Services website."
        image="/images/Hero-6.jpg"
      />
      <section className="legal-page">
        <div className="ahs-container">
          <LegalContent title="Terms of Service" sections={TERMS_SECTIONS} />
        </div>
      </section>
      <Footer />
    </main>
  )
}

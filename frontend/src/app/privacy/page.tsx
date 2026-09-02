import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/shared/PageHero'
import LegalContent from '@/components/shared/LegalContent'
import { PRIVACY_SECTIONS } from '@/data/legal'

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Minim Global Services collects, uses, and protects your information."
        image="/images/minimglobal-hero.jpg"
      />
      <section className="legal-page">
        <div className="ahs-container">
          <LegalContent title="Privacy Policy" sections={PRIVACY_SECTIONS} />
        </div>
      </section>
      <Footer />
    </main>
  )
}

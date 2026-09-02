import LegalContent from '@/components/shared/LegalContent'
import { TERMS_SECTIONS } from '@/data/legal'

export default function ClothingTermsPage() {
  return (
    <>
      <section
        className="mc-page-hero"
        style={{ backgroundImage: "url('/images/minim-clothing.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-page-hero-content">
          <p className="mc-eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p>The terms that govern your use of the Minim Global Services website.</p>
        </div>
      </section>
      <section className="legal-page">
        <div className="mc-container">
          <LegalContent title="Terms of Service" sections={TERMS_SECTIONS} />
        </div>
      </section>
    </>
  )
}

import LegalContent from '@/components/shared/LegalContent'
import { TERMS_SECTIONS } from '@/data/legal'

export default function FoodTermsPage() {
  return (
    <>
      <section
        className="mf-page-hero"
        style={{ backgroundImage: "url('/images/Hero-3.jpg')" }}
      >
        <div className="mf-hero-overlay" />
        <div className="mf-page-hero-content">
          <p className="mf-eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p>The terms that govern your use of the Minim Global Services website.</p>
        </div>
      </section>
      <section className="legal-page">
        <div className="mf-container">
          <LegalContent title="Terms of Service" sections={TERMS_SECTIONS} />
        </div>
      </section>
    </>
  )
}

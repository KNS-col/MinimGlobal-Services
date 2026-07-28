import LegalContent from '@/components/shared/LegalContent'
import { PRIVACY_SECTIONS } from '@/data/legal'

export default function FoodPrivacyPage() {
  return (
    <>
      <section
        className="mf-page-hero"
        style={{ backgroundImage: "url('/images/Hero-3.jpg')" }}
      >
        <div className="mf-hero-overlay" />
        <div className="mf-page-hero-content">
          <p className="mf-eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>How Minim Global Services collects, uses, and protects your information.</p>
        </div>
      </section>
      <section className="legal-page">
        <div className="mf-container">
          <LegalContent title="Privacy Policy" sections={PRIVACY_SECTIONS} />
        </div>
      </section>
    </>
  )
}

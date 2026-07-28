import LegalContent from '@/components/shared/LegalContent'
import { PRIVACY_SECTIONS } from '@/data/legal'

export default function ClothingPrivacyPage() {
  return (
    <>
      <section
        className="mc-page-hero"
        style={{ backgroundImage: "url('/images/Hero-6.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-page-hero-content">
          <p className="mc-eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>How Minim Global Services collects, uses, and protects your information.</p>
        </div>
      </section>
      <section className="legal-page">
        <div className="mc-container">
          <LegalContent title="Privacy Policy" sections={PRIVACY_SECTIONS} />
        </div>
      </section>
    </>
  )
}

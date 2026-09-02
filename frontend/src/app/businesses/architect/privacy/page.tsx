import ArchitectPageHero from '@/components/architect/ArchitectPageHero'
import LegalContent from '@/components/shared/LegalContent'
import { PRIVACY_SECTIONS } from '@/data/legal'

export default function ArchitectPrivacyPage() {
  return (
    <>
      <ArchitectPageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Minim Global Services collects, uses, and protects your information."
        image="/images/minin-architect.jpg"
      />
      <section className="legal-page">
        <div className="ma-container">
          <LegalContent title="Privacy Policy" sections={PRIVACY_SECTIONS} />
        </div>
      </section>
    </>
  )
}

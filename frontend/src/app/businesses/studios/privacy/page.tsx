import StudiosPageHero from '@/components/studios/StudiosPageHero'
import LegalContent from '@/components/shared/LegalContent'
import { PRIVACY_SECTIONS } from '@/data/legal'

export default function StudiosPrivacyPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Minim Global Services collects, uses, and protects your information."
        image="/images/minim-studio.jpg"
      />
      <section className="legal-page">
        <div className="ms-container">
          <LegalContent title="Privacy Policy" sections={PRIVACY_SECTIONS} />
        </div>
      </section>
    </>
  )
}

import MusicPageHero from '@/components/music/MusicPageHero'
import LegalContent from '@/components/shared/LegalContent'
import { PRIVACY_SECTIONS } from '@/data/legal'

export default function MusicPrivacyPage() {
  return (
    <>
      <MusicPageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Minim Global Services collects, uses, and protects your information."
        image="/images/minim-music.jpg"
      />
      <section className="legal-page">
        <div className="mm-container">
          <LegalContent title="Privacy Policy" sections={PRIVACY_SECTIONS} />
        </div>
      </section>
    </>
  )
}

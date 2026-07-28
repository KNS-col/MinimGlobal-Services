import MusicPageHero from '@/components/music/MusicPageHero'
import LegalContent from '@/components/shared/LegalContent'
import { TERMS_SECTIONS } from '@/data/legal'

export default function MusicTermsPage() {
  return (
    <>
      <MusicPageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The terms that govern your use of the Minim Global Services website."
        image="/images/Hero-6.jpg"
      />
      <section className="legal-page">
        <div className="mm-container">
          <LegalContent title="Terms of Service" sections={TERMS_SECTIONS} />
        </div>
      </section>
    </>
  )
}

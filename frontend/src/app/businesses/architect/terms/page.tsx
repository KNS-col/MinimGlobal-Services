import ArchitectPageHero from '@/components/architect/ArchitectPageHero'
import LegalContent from '@/components/shared/LegalContent'
import { TERMS_SECTIONS } from '@/data/legal'

export default function ArchitectTermsPage() {
  return (
    <>
      <ArchitectPageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The terms that govern your use of the Minim Global Services website."
        image="/images/minin-architect.jpg"
      />
      <section className="legal-page">
        <div className="ma-container">
          <LegalContent title="Terms of Service" sections={TERMS_SECTIONS} />
        </div>
      </section>
    </>
  )
}

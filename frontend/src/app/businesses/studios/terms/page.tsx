import StudiosPageHero from '@/components/studios/StudiosPageHero'
import LegalContent from '@/components/shared/LegalContent'
import { TERMS_SECTIONS } from '@/data/legal'

export default function StudiosTermsPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The terms that govern your use of the Minim Global Services website."
        image="/images/minim-studio.jpg"
      />
      <section className="legal-page">
        <div className="ms-container">
          <LegalContent title="Terms of Service" sections={TERMS_SECTIONS} />
        </div>
      </section>
    </>
  )
}

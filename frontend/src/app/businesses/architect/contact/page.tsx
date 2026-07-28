import ArchitectPageHero from '@/components/architect/ArchitectPageHero'
import ArchitectConsultForm from '@/components/architect/ArchitectConsultForm'

export default function ArchitectContactPage() {
  return (
    <>
      <ArchitectPageHero
        eyebrow="Get in Touch"
        title="Contact Minim Architect"
        subtitle="Discuss your project, property evaluation, or renovation goals with our team."
        image="/images/Hero-2.jpeg"
        ctaHref="tel:033883388"
        ctaLabel="Call 033 88 33 88"
      />

      <section className="ma-contact-page">
        <div className="ma-container ma-contact-grid">
          <div>
            <h2>Request a Consultation</h2>
            <p>
              Tell us about your project, property, or renovation goals. We will respond
              to discuss scope, feasibility, and next steps.
            </p>
            <ul className="ma-contact-details">
              <li>
                <strong>Phone</strong>
                <a href="tel:033883388">033 88 33 88</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
              </li>
              <li>
                <strong>Office</strong>
                <span>Freetown, Sierra Leone</span>
              </li>
            </ul>
          </div>
          <ArchitectConsultForm />
        </div>
      </section>
    </>
  )
}

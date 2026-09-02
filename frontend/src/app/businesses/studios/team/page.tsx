import StudiosPageHero from '@/components/studios/StudiosPageHero'
import { studiosTeam } from '@/data/studios-team'

export default function StudiosTeamPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Our team"
        title="The People Behind Minim Studios"
        subtitle="Photographers, filmmakers, sound engineers, lighting techs, and designers the staff who bring every project to life."
        image="/images/minim-studio.jpg"
        ctaHref="/businesses/studios/contact"
        ctaLabel="Work With Us"
      />

      <section className="ms-team">
        <div className="ms-container">
          <div className="ms-section-head ms-section-head-center">
            <p className="ms-eyebrow dark">Staff</p>
            <h2>Meet the Studio Team</h2>
            <p className="ms-team-intro">
              These are the people you work with across our five studios. Reach
              out and we’ll connect you with the right specialist for your
              project.
            </p>
          </div>

          <div className="ms-team-grid">
            {studiosTeam.map((person) => (
              <article key={person.slug} className="ms-team-card">
                <div className="ms-team-photo" aria-hidden={!person.image}>
                  {person.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={person.image} alt={person.name} loading="lazy" />
                  ) : (
                    <span className="ms-team-initials">{person.initials}</span>
                  )}
                </div>
                <div className="ms-team-body">
                  <h3>{person.name}</h3>
                  <p className="ms-team-role">{person.role}</p>
                  <p className="ms-team-specialty">{person.specialty}</p>
                  <p className="ms-team-bio">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ms-cta ms-cta-compact">
        <div className="ms-container ms-section-head ms-section-head-center">
          <p className="ms-eyebrow">Join or collaborate</p>
          <h2>Want to Work With Our Team?</h2>
          <p>
            Tell us about your project and we’ll match you with the right
            studio staff.
          </p>
          <div
            className="ms-hero-actions"
            style={{ justifyContent: 'center', marginTop: 24 }}
          >
            <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

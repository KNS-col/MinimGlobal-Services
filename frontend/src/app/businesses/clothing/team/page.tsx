import { CLOTHING_TEAM } from '@/data/clothing'

export default function ClothingTeamPage() {
  return (
    <>
      <section
        className="mc-page-hero"
        style={{ backgroundImage: "url('/images/minim-clothing.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-page-hero-content">
          <p className="mc-eyebrow">Meet the Team</p>
          <h1>The people behind Minim Clothings</h1>
          <p>
            Design, wholesale, uniforms, and tailoring specialists serving teams
            and families across Freetown.
          </p>
        </div>
      </section>

      <section className="mc-team">
        <div className="mc-container">
          <div className="mc-team-grid">
            {CLOTHING_TEAM.map((person) => (
              <article key={person.name} className="mc-team-card">
                <div className="mc-team-photo">
                  <span>{person.initials}</span>
                </div>
                <div className="mc-team-body">
                  <h3>{person.name}</h3>
                  <p className="mc-team-role">{person.role}</p>
                  <p>{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

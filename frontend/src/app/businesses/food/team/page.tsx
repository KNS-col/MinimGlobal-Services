const team = [
  {
    name: 'Head Chef',
    role: 'Catering Kitchen',
    initials: 'HC',
    bio: 'Leads menu planning and production for weddings, corporate events, and private dining.',
  },
  {
    name: 'Bookings Coordinator',
    role: 'Event Bookings',
    initials: 'BC',
    bio: 'Confirms catering bookings, guest counts, menus, and delivery windows for each event.',
  },
  {
    name: 'Event Supervisor',
    role: 'On Site Catering',
    initials: 'ES',
    bio: 'Manages service staff and setup so catering events run smoothly on the day.',
  },
]

export default function FoodTeamPage() {
  return (
    <>
      <section
        className="mf-page-hero"
        style={{ backgroundImage: "url('/images/Hero-3.jpg')" }}
      >
        <div className="mf-hero-overlay" />
        <div className="mf-page-hero-content">
          <h1>Our catering team</h1>
          <p>The people behind your events and bookings.</p>
        </div>
      </section>

      <section className="mf-team">
        <div className="mf-container">
          <div className="mf-team-grid">
            {team.map((person) => (
              <article key={person.name} className="mf-team-card">
                <div className="mf-team-photo">
                  <span>{person.initials}</span>
                </div>
                <div className="mf-team-body">
                  <h3>{person.name}</h3>
                  <p className="mf-team-role">{person.role}</p>
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

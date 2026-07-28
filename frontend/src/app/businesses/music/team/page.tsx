import MusicPageHero from '@/components/music/MusicPageHero'
import { MUSIC_TEAM } from '@/data/music'

export default function MusicTeamPage() {
  return (
    <>
      <MusicPageHero
        eyebrow="Meet the Team"
        title="The people behind Minim Music"
        subtitle="Production, management, instruments, and booking specialists supporting artists and stages across Freetown."
        image="/images/Hero-4.jpg"
        ctaHref="/businesses/music/contact"
        ctaLabel="Work with us"
        secondaryHref="/businesses/music/services"
        secondaryLabel="Our services"
      />

      <section className="mm-team">
        <div className="mm-container">
          <div className="mm-team-grid">
            {MUSIC_TEAM.map((person) => (
              <article key={person.name} className="mm-team-card">
                <div className="mm-team-photo">
                  <span>{person.initials}</span>
                </div>
                <div className="mm-team-body">
                  <h3>{person.name}</h3>
                  <p className="mm-team-role">{person.role}</p>
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

import MusicPageHero from '@/components/music/MusicPageHero'
import { MUSIC_ARTISTS } from '@/data/music'

export default function MusicArtistsPage() {
  return (
    <>
      <MusicPageHero
        eyebrow="Artist roster"
        title="Artists we manage and book"
        subtitle="From jazz leaders to featured vocalists — talent ready for residencies, festivals, and private stages."
        image="/images/Hero-6.jpg"
        ctaHref="/businesses/music/contact"
        ctaLabel="Book an artist"
        secondaryHref="/businesses/music/services/management"
        secondaryLabel="Artist management"
      />

      <section className="mm-artists">
        <div className="mm-container">
          <div className="mm-section-head">
            <p className="mm-label">In good company</p>
            <h2>Featured artists</h2>
            <p>
              Looking for representation or a booking? Tell us about your project
              and we will match the right artist or management plan.
            </p>
          </div>
          <div className="mm-artists-grid">
            {MUSIC_ARTISTS.map((artist) => (
              <article key={artist.id} className="mm-artist-card">
                <div
                  className="mm-artist-image"
                  style={{ backgroundImage: `url('${artist.image}')` }}
                />
                <div className="mm-artist-body">
                  <h3>{artist.name}</h3>
                  <p className="mm-artist-role">{artist.role}</p>
                  <p>{artist.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mm-cta-band">
        <div className="mm-container mm-cta-band-inner">
          <div>
            <h2>Are you an artist?</h2>
            <p>
              Apply for management support or join our booking roster for live
              jazz and stage work.
            </p>
          </div>
          <a href="/businesses/music/contact" className="mm-btn mm-btn-primary">
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}

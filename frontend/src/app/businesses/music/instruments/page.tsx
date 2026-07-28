import MusicPageHero from '@/components/music/MusicPageHero'
import { MUSIC_INSTRUMENTS } from '@/data/music'

const categoryLabel = {
  sale: 'For sale',
  rental: 'Rental',
  both: 'Sale & rental',
} as const

export default function MusicInstrumentsPage() {
  return (
    <>
      <MusicPageHero
        eyebrow="Outlet & rental"
        title="Musical instruments for stages, schools, and studios"
        subtitle="Buy or rent guitars, keys, drums, brass, and PA packages with practical advice from our team."
        image="/images/Hero-5.jpg"
        ctaHref="/businesses/music/contact"
        ctaLabel="Enquire about gear"
        secondaryHref="/businesses/music/services/instruments"
        secondaryLabel="Service details"
      />

      <section className="mm-instruments">
        <div className="mm-container">
          <div className="mm-section-head">
            <p className="mm-label">Catalogue</p>
            <h2>Popular instruments &amp; packages</h2>
            <p>
              Availability changes with demand. Contact us for current stock,
              rental rates, and multi-day production packages.
            </p>
          </div>
          <div className="mm-instruments-grid">
            {MUSIC_INSTRUMENTS.map((item) => (
              <article key={item.id} className="mm-instrument-card">
                <div
                  className="mm-instrument-image"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="mm-instrument-body">
                  <span className="mm-instrument-tag">
                    {categoryLabel[item.category]}
                  </span>
                  <h3>{item.name}</h3>
                  <p>{item.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mm-cta-band">
        <div className="mm-container mm-cta-band-inner">
          <div>
            <h2>Need a full backline?</h2>
            <p>
              We build rental packages for concerts, church services, school
              programmes, and brand events.
            </p>
          </div>
          <a href="/businesses/music/contact" className="mm-btn mm-btn-primary">
            Request a quote
          </a>
        </div>
      </section>
    </>
  )
}

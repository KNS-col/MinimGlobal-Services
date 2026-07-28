import MusicPageHero from '@/components/music/MusicPageHero'
import { MUSIC_SERVICES } from '@/data/music'

export default function MusicServicesPage() {
  return (
    <>
      <MusicPageHero
        eyebrow="What we do"
        title="Services that open doors for artists and stages"
        subtitle="Live jazz, artist management, full performances, and an instrument outlet with rental."
        image="/images/Hero-1.jpg"
        ctaHref="/businesses/music/contact"
        ctaLabel="Book a consultation"
        secondaryHref="/businesses/music/artists"
        secondaryLabel="View artists"
      />

      <section className="mm-services-hub mm-services-list">
        <div className="mm-container">
          <div className="mm-services-stack">
            {MUSIC_SERVICES.map((service, index) => (
              <article
                key={service.id}
                className={`mm-service-row ${index % 2 === 1 ? 'is-reverse' : ''}`}
              >
                <div
                  className="mm-service-row-media"
                  style={{ backgroundImage: `url('${service.heroImage}')` }}
                />
                <div className="mm-service-row-copy">
                  <p className="mm-label">{service.shortTitle}</p>
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                  <ul className="mm-bullet-list">
                    {service.bullets.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={`/businesses/music${service.path}`}
                    className="mm-btn mm-btn-dark"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

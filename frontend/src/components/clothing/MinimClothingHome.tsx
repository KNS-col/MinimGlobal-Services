import { CLOTHING_SERVICES } from '@/data/clothing'

export default function MinimClothingHome() {
  return (
    <>
      <section
        className="mc-hero"
        style={{ backgroundImage: "url('/images/minim-clothing.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-hero-content">
          <h1>
            Wholesale. Uniforms.
            <br />
            Special &amp; Family Wear.
          </h1>
          <p>
            Bulk apparel, work uniforms, special occasion outfits, and family
            wear, made and delivered across Sierra Leone.
          </p>
          <div className="mc-hero-actions">
            <a href="/businesses/clothing/contact" className="mc-btn mc-btn-primary">
              Request a Quote
            </a>
            <a href="/businesses/clothing/services" className="mc-btn mc-btn-ghost">
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section className="mc-services-band">
        <div className="mc-container">
          <div className="mc-section-head mc-section-head-center">
            <p className="mc-label light">What we do</p>
            <h2>Services &amp; Specials</h2>
          </div>
          <div className="mc-services-grid mc-services-grid-4">
            {CLOTHING_SERVICES.map((service) => (
              <article key={service.id} className="mc-service-card">
                <div
                  className="mc-service-image"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="mc-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <a href="/businesses/clothing/services" className="mc-text-link">
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mc-story">
        <div className="mc-container mc-story-grid">
          <div
            className="mc-story-image"
            style={{ backgroundImage: "url('/images/minim-clothing.jpg')" }}
            role="img"
            aria-label="Minim Clothings tailoring workshop"
          />
          <div>
            <p className="mc-label dark">The Minim Clothings Story</p>
            <h2>
              Built for Teams.
              <br />
              Made for Families.
            </h2>
            <p>
              Minim Clothings serves wholesalers, schools, workplaces, and families
              across Sierra Leone. Contact us for bulk stock, uniforms, special
              occasion wear, and matching family outfits.
            </p>
            <a href="/businesses/clothing/team" className="mc-btn mc-btn-dark">
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      <section className="mc-cta-band">
        <div className="mc-container mc-cta-band-inner">
          <div>
            <h2>Ready to get started?</h2>
            <p>Tell us what you need and we will get back to you with pricing and timelines.</p>
          </div>
          <a href="/businesses/clothing/contact" className="mc-btn mc-btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}

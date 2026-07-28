import { CLOTHING_SERVICES } from '@/data/clothing'

export default function ClothingServicesPage() {
  return (
    <>
      <section
        className="mc-page-hero"
        style={{ backgroundImage: "url('/images/Hero-6.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-page-hero-content">
          <p className="mc-eyebrow">What we do</p>
          <h1>Services &amp; Specials</h1>
          <p>
            Wholesale supply, uniform programmes, special wear, and family wear
            fitted and delivered with care.
          </p>
        </div>
      </section>

      <section className="mc-services-page">
        <div className="mc-container">
          {CLOTHING_SERVICES.map((service, index) => (
            <article
              key={service.id}
              className={`mc-service-feature ${index % 2 === 1 ? 'is-reverse' : ''}`}
            >
              <div
                className="mc-service-feature-image"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <a href="/businesses/clothing/contact" className="mc-btn mc-btn-dark">
                  Request a Quote
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

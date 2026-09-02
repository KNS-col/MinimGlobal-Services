import { cateringPackages, formatLeones } from '@/data/food'

export default function CateringPage() {
  return (
    <>
      <section
        className="mf-page-hero"
        style={{ backgroundImage: "url('/images/minim-food.jpg')" }}
      >
        <div className="mf-hero-overlay" />
        <div className="mf-page-hero-content">
          <p className="mf-eyebrow">Catering</p>
          <h1>Professional catering for every occasion</h1>
          <p>
            Corporate events, weddings, private dining, and outdoor gatherings
            with menus you can trust.
          </p>
          <div className="mf-hero-actions">
            <a href="/businesses/food/contact" className="mf-btn mf-btn-primary">
              Request a catering quote
            </a>
            <a href="/businesses/food/contact" className="mf-btn mf-btn-ghost">
              Book catering
            </a>
          </div>
        </div>
      </section>

      <section className="mf-sheets">
        <div className="mf-container">
          <div className="mf-section-head">
            <p className="mf-label dark">Packages</p>
            <h2>Choose your catering style</h2>
          </div>
          <div className="mf-sheets-grid mf-sheets-grid-2">
            {cateringPackages.map((pack) => (
              <article key={pack.slug} className="mf-sheet-card mf-sheet-card-wide">
                <div
                  className="mf-sheet-media"
                  style={{ backgroundImage: `url('${pack.image}')` }}
                />
                <div className="mf-sheet-body">
                  <h3>{pack.title}</h3>
                  <p>{pack.description}</p>
                  <p className="mf-meta">
                    {pack.guests} · from {formatLeones(pack.priceFrom)}
                  </p>
                  <ul className="mf-includes">
                    {pack.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="/businesses/food/contact" className="mf-btn mf-btn-dark">
                    Book this package
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mf-delivery">
        <div className="mf-container mf-delivery-inner">
          <h2>Need a custom menu?</h2>
          <p>
            Tell us your date, guest count, and style. We will build a catering
            plan that fits your budget.
          </p>
          <a href="/businesses/food/contact" className="mf-btn mf-btn-primary">
            Talk to catering
          </a>
        </div>
      </section>
    </>
  )
}

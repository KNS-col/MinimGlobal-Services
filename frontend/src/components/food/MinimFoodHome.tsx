import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import { cateringPackages, formatLeones } from '@/data/food'

export default function MinimFoodHome() {
  return (
    <>
      <section
        className="mf-hero"
        style={{ backgroundImage: "url('/images/Hero-3.jpg')" }}
      >
        <div className="mf-hero-overlay" />
        <div className="mf-hero-content">
          <h1>Catering for every occasion</h1>
          <p className="mf-hero-sub">
            Book professional catering for corporate events, weddings, private
            dining, and outdoor gatherings across Sierra Leone.
          </p>
          <div className="mf-hero-actions">
            <a href="/businesses/food/catering" className="mf-btn mf-btn-primary">
              <UtensilsCrossed size={16} />
              View Packages
            </a>
            <a href="/businesses/food/contact" className="mf-btn mf-btn-ghost">
              Request a Booking
            </a>
          </div>
        </div>
      </section>

      <section className="mf-split">
        <div className="mf-container mf-split-grid">
          <article className="mf-split-card">
            <h2>Events, offices &amp; celebrations</h2>
            <p>
              From corporate lunches to weddings, Minim Food plans the menu,
              prepares the food, and delivers on time with optional on-site
              service.
            </p>
            <a href="/businesses/food/catering" className="mf-btn mf-btn-dark">
              Browse catering packages <ArrowRight size={16} />
            </a>
          </article>
          <article className="mf-split-card is-accent">
            <h2>Simple booking process</h2>
            <p>
              Share your date, guest count, and style. We build a catering plan
              that fits your occasion and confirm the booking with your team.
            </p>
            <a href="/businesses/food/contact" className="mf-btn mf-btn-primary">
              Start a booking <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <section className="mf-sheets">
        <div className="mf-container">
          <div className="mf-section-head">
            <h2>Popular catering options</h2>
          </div>
          <div className="mf-sheets-grid">
            {cateringPackages.map((pack) => (
              <article key={pack.slug} className="mf-sheet-card">
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
                  <a href="/businesses/food/contact" className="mf-btn mf-btn-dark">
                    Request quote
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mf-delivery">
        <div className="mf-container mf-delivery-inner">
          <h2>Ready when your event is</h2>
          <p>
            Tell us your date, venue, and guest count. We handle menu planning,
            preparation, and delivery so your event runs smoothly.
          </p>
          <a href="/businesses/food/contact" className="mf-btn mf-btn-primary">
            Book catering
          </a>
        </div>
      </section>
    </>
  )
}

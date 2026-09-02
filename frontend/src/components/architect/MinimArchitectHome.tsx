import ArchitectPageHero from '@/components/architect/ArchitectPageHero'
import { ARCHITECT_INTRO, ARCHITECT_LEAD, ARCHITECT_PORTFOLIO, ARCHITECT_SERVICES } from '@/data/architect'

export default function MinimArchitectHome() {
  const featured = ARCHITECT_PORTFOLIO.slice(0, 3)

  return (
    <>
      <ArchitectPageHero
        eyebrow="Minim Architects, Designers & Engineers · Freetown"
        title="Full Service Architecture Firm: Design Services and Project Management"
        subtitle="From pre-purchase evaluation through construction closeout, we guide residential and commercial projects across Sierra Leone."
        image="/images/minim-architect1.jpeg"
        imagePosition="center 45%"
      />

      <section className="ma-intro">
        <div className="ma-container ma-intro-grid">
          <div>
            <p className="ma-lead">{ARCHITECT_LEAD}</p>
            <p>{ARCHITECT_INTRO}</p>
            <div className="ma-hero-actions ma-intro-actions">
              <a href="/businesses/architect/services" className="ma-btn ma-btn-primary">
                Explore Services
              </a>
              <a href="/businesses/architect/portfolio" className="ma-btn ma-btn-outline">
                View Portfolio
              </a>
            </div>
          </div>
          <div
            className="ma-intro-photo"
            style={{ backgroundImage: "url('/images/minin-architect.jpg')" }}
            role="img"
            aria-label="Architectural project in Freetown"
          />
        </div>
      </section>

      <section className="ma-services-hub">
        <div className="ma-container">
          <div className="ma-section-head">
            <p className="ma-label">What we do</p>
            <h2>Architectural Services</h2>
            <p>
              Each phase of our practice is delivered as a dedicated service with its
              own scope, documentation, and project team coordination.
            </p>
          </div>
          <div className="ma-services-grid">
            {ARCHITECT_SERVICES.map((service) => (
              <a key={service.id} href={`/businesses/architect${service.path}`} className="ma-service-card">
                <div
                  className="ma-service-card-image"
                  style={{ backgroundImage: `url('${service.heroImage}')` }}
                />
                <div className="ma-service-card-body">
                  <h3>{service.shortTitle}</h3>
                  <p>{service.summary}</p>
                  <span className="ma-text-link">Read more</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ma-portfolio-preview">
        <div className="ma-container">
          <div className="ma-section-head ma-section-head-row">
            <div>
              <p className="ma-label dark">Selected Works</p>
              <h2>Portfolio</h2>
            </div>
            <a href="/businesses/architect/portfolio" className="ma-text-link">
              View all projects
            </a>
          </div>
          <div className="ma-portfolio-grid">
            {featured.map((item) => (
              <a key={item.id} href="/businesses/architect/portfolio" className="ma-portfolio-card">
                <div
                  className="ma-portfolio-image"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="ma-portfolio-body">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ma-cta-band">
        <div className="ma-container ma-cta-band-inner">
          <div>
            <h2>Request a Consultation</h2>
            <p>
              Tell us about your property, renovation, or new build. We will respond to
              discuss feasibility and next steps.
            </p>
          </div>
          <a href="/businesses/architect/contact" className="ma-btn ma-btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}

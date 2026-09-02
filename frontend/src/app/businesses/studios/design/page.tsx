import StudiosPageHero from '@/components/studios/StudiosPageHero'
import { PenTool, Palette, Type, LayoutTemplate, Package, Smartphone } from 'lucide-react'

const offerings = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Logos, color systems, and visual foundations that make your brand recognizable and consistent.',
  },
  {
    icon: LayoutTemplate,
    title: 'Campaign Creative',
    description:
      'Concept to artwork for ads, launches, and seasonal campaigns across print and digital.',
  },
  {
    icon: Type,
    title: 'Print & Collateral',
    description:
      'Brochures, posters, business systems, and polished print materials ready for production.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description:
      'Product packaging that looks premium on shelf and tells a clear brand story.',
  },
  {
    icon: Smartphone,
    title: 'Digital & Social Design',
    description:
      'Social templates, web graphics, and digital assets built for clarity on every screen.',
  },
  {
    icon: PenTool,
    title: 'Art Direction',
    description:
      'Creative direction that aligns photography, video, and design into one cohesive look.',
  },
]

export default function DesignStudioPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Design Studio"
        title="Design That Builds Brands"
        subtitle="Identity, campaigns, packaging, and digital design concept through final artwork."
        image="/images/minim-studio.jpg"
      />

      <section className="ms-intro">
        <div className="ms-container ms-intro-grid">
          <h2>Look intentional. Feel consistent. Stand out.</h2>
          <div>
            <p>
              Minim Design Studio partners with businesses to shape visuals that
              work in the real world on packaging, in campaigns, across
              screens, and beside photography and video from our other studios.
            </p>
            <div className="ms-hero-actions ms-intro-actions">
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
                Start a Design Project
              </a>
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ms-services">
        <div className="ms-container">
          <div className="ms-section-head ms-section-head-center">
            <p className="ms-eyebrow dark">What we design</p>
            <h2>Design Studio Services</h2>
          </div>
          <div className="ms-services-grid">
            {offerings.map((card) => {
              const Icon = card.icon
              return (
                <article key={card.title} className="ms-service-card">
                  <div className="ms-service-icon">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="/businesses/studios/contact" className="ms-text-link">
                    Inquire
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ms-cta ms-cta-compact">
        <div className="ms-container ms-section-head ms-section-head-center">
          <p className="ms-eyebrow">Get in touch</p>
          <h2>Let’s Design Something Strong</h2>
          <p>
            Tell us about your brand or campaign and we’ll help shape the
            visuals.
          </p>
          <div
            className="ms-hero-actions"
            style={{ justifyContent: 'center', marginTop: 24 }}
          >
            <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

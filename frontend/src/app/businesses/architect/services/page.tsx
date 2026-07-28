import ArchitectPageHero from '@/components/architect/ArchitectPageHero'
import ArchitectServiceNav from '@/components/architect/ArchitectServiceNav'
import { ARCHITECT_SERVICES } from '@/data/architect'

export default function ArchitectServicesIndexPage() {
  return (
    <>
      <ArchitectPageHero
        eyebrow="Full Service Practice"
        title="Architectural Services"
        subtitle="Explore each phase of our integrated design and construction process."
        image="/images/Hero-1.jpg"
      />

      <div className="ma-container ma-service-layout">
        <ArchitectServiceNav />

        <div className="ma-services-index">
          {ARCHITECT_SERVICES.map((service) => (
            <a
              key={service.id}
              href={`/businesses/architect${service.path}`}
              className="ma-services-index-card"
            >
              <div
                className="ma-services-index-image"
                style={{ backgroundImage: `url('${service.heroImage}')` }}
              />
              <div>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <span className="ma-text-link">View service page</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

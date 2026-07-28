import { notFound } from 'next/navigation'
import MusicPageHero from '@/components/music/MusicPageHero'
import {
  getMusicServiceBySlug,
  MUSIC_SERVICES,
} from '@/data/music'

export function generateStaticParams() {
  return MUSIC_SERVICES.map((service) => ({ slug: service.id }))
}

export default function MusicServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = getMusicServiceBySlug(params.slug)
  if (!service) notFound()

  return (
    <>
      <MusicPageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.summary}
        image={service.heroImage}
        ctaHref="/businesses/music/contact"
        ctaLabel="Enquire now"
        secondaryHref="/businesses/music/services"
        secondaryLabel="All services"
      />

      <section className="mm-service-detail">
        <div className="mm-container mm-service-detail-grid">
          <div>
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="mm-bullet-list">
              {service.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mm-hero-actions" style={{ marginTop: 28 }}>
              <a href="/businesses/music/contact" className="mm-btn mm-btn-primary">
                Start your journey
              </a>
            </div>
          </div>
          <div
            className="mm-service-detail-photo"
            style={{ backgroundImage: `url('${service.heroImage}')` }}
            role="img"
            aria-label={service.title}
          />
        </div>
      </section>
    </>
  )
}

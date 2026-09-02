import ArchitectPageHero from '@/components/architect/ArchitectPageHero'
import ArchitectServiceNav from '@/components/architect/ArchitectServiceNav'
import { type ArchitectService } from '@/data/architect'

type Props = {
  service: ArchitectService
}

export default function ArchitectServicePage({ service }: Props) {
  return (
    <>
      <ArchitectPageHero
        eyebrow="Architectural Services"
        title={service.title}
        subtitle={service.summary}
        image={service.heroImage}
      />

      <div className="ma-container ma-service-layout">
        <ArchitectServiceNav current={service} />

        <article className="ma-service-article">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}

          {service.bullets && (
            <ul className="ma-list">
              {service.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {service.images[0] && (
            <figure className="ma-figure">
              <div
                className="ma-figure-image"
                style={{ backgroundImage: `url('${service.images[0].src}')` }}
                role="img"
                aria-label={service.images[0].alt}
              />
              <figcaption>{service.images[0].alt}</figcaption>
            </figure>
          )}

          {service.subsections?.map((sub) => (
            <div key={sub.title} className="ma-subsection">
              <h2>{sub.title}</h2>
              {sub.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              {sub.bullets && (
                <ul className="ma-list">
                  {sub.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {sub.image && (
                <figure className="ma-figure">
                  <div
                    className="ma-figure-image"
                    style={{ backgroundImage: `url('${sub.image}')` }}
                    role="img"
                    aria-label={sub.imageAlt || sub.title}
                  />
                  {sub.imageAlt && <figcaption>{sub.imageAlt}</figcaption>}
                </figure>
              )}
            </div>
          ))}

          {service.images.length > 1 && (
            <div className="ma-gallery">
              {service.images.slice(1).map((img) => (
                <figure key={img.src} className="ma-figure">
                  <div
                    className="ma-figure-image ma-figure-image-sm"
                    style={{ backgroundImage: `url('${img.src}')` }}
                    role="img"
                    aria-label={img.alt}
                  />
                  <figcaption>{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="ma-service-cta">
            <h2>Ready to discuss this phase of your project?</h2>
            <p>
              Speak with Minim Architects, Designers & Engineers about scope, timeline, and how full service
              delivery can support your build.
            </p>
            <a href="/businesses/architect/contact" className="ma-btn ma-btn-primary">
              Request a Consultation
            </a>
          </div>
        </article>
      </div>
    </>
  )
}

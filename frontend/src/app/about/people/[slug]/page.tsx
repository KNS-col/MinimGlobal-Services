import { notFound } from 'next/navigation'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { getAllPersonSlugs, getPersonBySlug } from '@/data/people'

type ProfilePageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPersonSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: ProfilePageProps) {
  const person = getPersonBySlug(params.slug)
  if (!person) return { title: 'Profile | Minim Global Services' }
  return {
    title: `${person.name} | Minim Global Services`,
    description: person.biography,
  }
}

export default function PersonProfilePage({ params }: ProfilePageProps) {
  const person = getPersonBySlug(params.slug)
  if (!person) notFound()

  const paragraphs = person.biography
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <main>
      <Navbar />
      <div className="ahs">
        <section
          className="ahs-bio-hero"
          style={{ backgroundImage: "url('/images/Hero-4.jpg')" }}
          aria-hidden="true"
        >
          <div className="ahs-bio-hero-overlay" />
        </section>

        <section className="ahs-bio-section">
          <div className="ahs-container">
            <article className="ahs-bio-card">
              <div className="ahs-bio-photo">
                {person.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={person.image} alt={person.name} />
                ) : (
                  <div className="ahs-bio-photo-fallback" aria-hidden="true">
                    {person.initials}
                  </div>
                )}
              </div>
              <div className="ahs-bio-copy">
                <h1 className="ahs-bio-name">{person.name}</h1>
                <h2 className="ahs-bio-role">{person.role}</h2>
                <span className="ahs-bio-rule" aria-hidden="true" />
                <div className="ahs-bio-body">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

'use client'

import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { getLeadership } from '@/data/people'

export default function ExecutiveLeadership() {
  const leaders = getLeadership()

  return (
    <div className="ahs">
      <section
        className="ahs-hero"
        style={{ backgroundImage: "url('/images/Hero-4.jpg')" }}
      >
        <div className="ahs-hero-overlay" />
        <div className="ahs-hero-inner">
          <p className="ahs-hero-eyebrow">Our People</p>
          <h1 className="ahs-hero-title">Executive Leadership</h1>
          <p className="ahs-hero-sub">
            The leaders guiding Minim Global Services across strategy, growth,
            and delivery.
          </p>
        </div>
      </section>

      <section className="ahs-team-intro">
        <div className="ahs-container ahs-team-intro-inner">
          <h2 className="ahs-heading">Our Leadership</h2>
          <p className="ahs-team-intro-desc">
            Meet the executives shaping Minim Global Services and driving
            excellence across our divisions.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
      </section>

      <section className="ahs-team-section">
        <div className="ahs-container">
          <div className="ahs-team-grid">
            {leaders.map((leader) => (
              <article key={leader.slug} className="ahs-team-card">
                <div className="ahs-team-photo">
                  {leader.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={leader.image} alt={leader.name} />
                  ) : (
                    <div className="ahs-team-photo-fallback" aria-hidden="true">
                      {leader.initials}
                    </div>
                  )}
                </div>
                <div className="ahs-team-body">
                  <div className="ahs-team-meta">
                    <h3 className="ahs-team-name">
                      <Link href={`/about/people/${leader.slug}`}>
                        {leader.name}
                      </Link>
                    </h3>
                    <p className="ahs-team-role">{leader.role}</p>
                  </div>
                  <p className="ahs-team-desc">{leader.description}</p>
                  <div className="ahs-team-social">
                    <div className="ahs-team-social-inner">
                      <Link
                        href={`/about/people/${leader.slug}`}
                        aria-label={`View biography of ${leader.name}`}
                        className="ahs-team-social-link"
                      >
                        <BookOpen size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

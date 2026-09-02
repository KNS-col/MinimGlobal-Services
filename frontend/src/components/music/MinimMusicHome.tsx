'use client'

import { useEffect, useState } from 'react'
import {
  Guitar,
  Mic2,
  Music2,
  Users,
} from 'lucide-react'
import {
  MUSIC_INTRO,
  MUSIC_LEAD,
  MUSIC_SERVICES,
  MUSIC_TESTIMONIALS,
} from '@/data/music'

const serviceIcons = {
  jazz: Music2,
  management: Users,
  performances: Mic2,
  instruments: Guitar,
} as const

export default function MinimMusicHome() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % MUSIC_TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section
        className="mm-hero"
        style={{ backgroundImage: "url('/images/minim-music.jpg')" }}
      >
        <div className="mm-hero-overlay" />
        <div className="mm-hero-content">
          <p className="mm-brand-mark">Minim Music</p>
          <h1>
            Championing artists across
            <br />
            Jazz, Management &amp; Live Stages
          </h1>
          <p className="mm-page-hero-sub">
            Your gateway to live jazz, artist careers, full performances, and a
            musical instrument outlet with rental.
          </p>
          <div className="mm-hero-actions">
            <a href="/businesses/music/contact" className="mm-btn mm-btn-primary">
              Start your journey
            </a>
            <a href="/businesses/music/services" className="mm-btn mm-btn-ghost">
              What we do
            </a>
          </div>
        </div>
      </section>

      <section className="mm-intro">
        <div className="mm-container mm-intro-grid">
          <div>
            <p className="mm-label">Your gateway to the music industry</p>
            <h2>We believe every artist deserves the stage.</h2>
            <p className="mm-lead">{MUSIC_LEAD}</p>
            <p>{MUSIC_INTRO}</p>
            <div className="mm-hero-actions mm-intro-actions">
              <a href="/businesses/music/services" className="mm-btn mm-btn-dark">
                Explore Services
              </a>
              <a href="/businesses/music/artists" className="mm-btn mm-btn-outline">
                Meet Artists
              </a>
            </div>
          </div>
          <div
            className="mm-intro-photo"
            style={{ backgroundImage: "url('/images/minim-music.jpg')" }}
            role="img"
            aria-label="Live music performance"
          />
        </div>
      </section>

      <section className="mm-services-hub">
        <div className="mm-container">
          <div className="mm-section-head mm-section-head-center">
            <p className="mm-label">What we do</p>
            <h2>Four ways we serve the music</h2>
            <p>
              Live jazz, artist management, full performances, and instruments —
              practical services that open doors for artists and hosts.
            </p>
          </div>
          <div className="mm-services-grid">
            {MUSIC_SERVICES.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
              return (
                <a
                  key={service.id}
                  href={`/businesses/music${service.path}`}
                  className="mm-service-card"
                >
                  <div className="mm-service-icon">
                    <Icon size={32} strokeWidth={1.75} />
                  </div>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.summary}</p>
                  <span className="mm-text-link">Learn more</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mm-quotes">
        <div className="mm-container">
          <p className="mm-label">What our artists say</p>
          <blockquote className="mm-quote" key={testimonialIndex}>
            <p>&ldquo;{MUSIC_TESTIMONIALS[testimonialIndex].quote}&rdquo;</p>
            <footer>
              <strong>{MUSIC_TESTIMONIALS[testimonialIndex].name}</strong>
              <span>{MUSIC_TESTIMONIALS[testimonialIndex].role}</span>
            </footer>
          </blockquote>
          <div className="mm-quote-dots">
            {MUSIC_TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                className={i === testimonialIndex ? 'is-active' : ''}
                onClick={() => setTestimonialIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mm-cta-band">
        <div className="mm-container mm-cta-band-inner">
          <div>
            <h2>No stress, just success</h2>
            <p>
              Book a jazz night, grow an artist career, produce a live show, or
              outfit your stage — let&apos;s get to work.
            </p>
          </div>
          <a href="/businesses/music/contact" className="mm-btn mm-btn-primary">
            Let&apos;s get to work
          </a>
        </div>
      </section>
    </>
  )
}

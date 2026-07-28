'use client'

import { useEffect, useState } from 'react'
import {
  Camera,
  Clapperboard,
  Mic,
  Monitor,
  PenTool,
} from 'lucide-react'
import { STUDIO_DIVISIONS } from '@/data/studios'

const pillarIcons = {
  photography: Camera,
  videography: Clapperboard,
  sound: Mic,
  displays: Monitor,
  design: PenTool,
} as const

const testimonials = [
  {
    quote:
      'Thank you for always helping to tell our story and share beautiful moments you capture so fabulously!',
    name: 'Aminata K.',
    role: 'Brand Director',
  },
  {
    quote:
      'Minim Studios tailored the project across photo, video, and design. Flawless from start to finish.',
    name: 'James T.',
    role: 'Hospitality Group',
  },
  {
    quote:
      'Impeccable attention to detail and the best customer service we could ask for. Highly recommend.',
    name: 'Fatmata S.',
    role: 'Events Lead',
  },
]

export default function MinimStudiosHome() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section
        className="ms-hero"
        style={{ backgroundImage: "url('/images/Hero-1.jpg')" }}
      >
        <div className="ms-hero-overlay" />
        <div className="ms-hero-content">
          <p className="ms-eyebrow">Minim Studios</p>
          <h1>
            Five Studios.
            <br />
            One Creative Home.
          </h1>
          <p className="ms-page-hero-sub" style={{ marginTop: 0, marginBottom: 28 }}>
            Photography, Videography, Sound, Displays, and Design professional
            creative services under one roof.
          </p>
          <div className="ms-hero-actions">
            <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
              Get in Touch
            </a>
            <a href="/businesses/studios/photography" className="ms-btn ms-btn-ghost">
              Explore Our Studios
            </a>
          </div>
        </div>
      </section>

      <section className="ms-intro">
        <div className="ms-container ms-intro-grid">
          <h2>You Need Creative Work That Moves Fast. We Get It.</h2>
          <div>
            <p>
              Whether you need photography, video, audio, displays, or design,
              Minim Studios has a dedicated studio ready to deliver on time,
              and to a professional standard.
            </p>
            <div className="ms-hero-actions ms-intro-actions">
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
                Get in Touch
              </a>
              <a href="/businesses/studios/team" className="ms-btn ms-btn-outline">
                Meet the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ms-pillars">
        <div className="ms-container">
          <div
            className="ms-section-head ms-section-head-center"
            style={{ marginBottom: 40 }}
          >
            <p className="ms-eyebrow dark">Our studios</p>
            <h2>What We Offer</h2>
          </div>
          <div className="ms-pillars-grid ms-pillars-grid-five">
            {STUDIO_DIVISIONS.map((studio) => {
              const Icon = pillarIcons[studio.slug]
              return (
                <a key={studio.slug} href={studio.href} className="ms-pillar-card">
                  <div className="ms-pillar-icon">
                    <Icon size={36} strokeWidth={1.75} />
                  </div>
                  <h3>{studio.fullName}</h3>
                  <p>{studio.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ms-quotes">
        <div className="ms-container">
          <p className="ms-eyebrow dark">Kind words</p>
          <blockquote className="ms-quote" key={testimonialIndex}>
            <p>&ldquo;{testimonials[testimonialIndex].quote}&rdquo;</p>
            <footer>
              <strong>{testimonials[testimonialIndex].name}</strong>
              <span>{testimonials[testimonialIndex].role}</span>
            </footer>
          </blockquote>
          <div className="ms-quote-dots">
            {testimonials.map((_, i) => (
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

      <section className="ms-cta ms-cta-compact">
        <div className="ms-container ms-section-head ms-section-head-center">
          <p className="ms-eyebrow">Get in touch</p>
          <h2>Let’s Get Started!</h2>
          <p>
            Tell us which studio you need photography, video, sound, displays,
            or design and we’ll take it from there.
          </p>
          <div
            className="ms-hero-actions"
            style={{ justifyContent: 'center', marginTop: 24 }}
          >
            <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
              Get in Touch
            </a>
            <a href="/businesses/studios/team" className="ms-btn ms-btn-ghost">
              Meet the Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

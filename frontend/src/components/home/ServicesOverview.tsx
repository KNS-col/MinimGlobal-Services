'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Camera,
  UtensilsCrossed,
  Building2,
  Shirt,
  Music,
} from 'lucide-react'
import { getBusinessPublicUrl, type BusinessSlug } from '@/data/businesses'

const services: Array<{
  slug: BusinessSlug
  icon: typeof Camera
  title: string
  description: string
}> = [
  {
    slug: 'studios',
    icon: Camera,
    title: 'Media & Production',
    description:
      'Photography, videography, audio production, live streaming, and event coverage that capture and amplify your story.',
  },
  {
    slug: 'food',
    icon: UtensilsCrossed,
    title: 'Catering & Hospitality',
    description:
      'Restaurant service, event catering, and custom menu planning for everyday dining and special occasions.',
  },
  {
    slug: 'architect',
    icon: Building2,
    title: 'Architecture & Construction',
    description:
      'Residential and commercial design, construction, project management, and consultancy from concept to completion.',
  },
  {
    slug: 'clothing',
    icon: Shirt,
    title: 'Fashion & Apparel',
    description:
      'Custom and ready-to-wear clothing for men, women, children, and families, plus corporate and batch orders.',
  },
  {
    slug: 'music',
    icon: Music,
    title: 'Live Music & Instruments',
    description:
      'Live jazz and stage performances, artist management, and an instrument outlet with sales and rental.',
  },
]

export default function ServicesOverview() {
  return (
    <div className="ahs">
      <section className="ahs-team-intro">
        <div className="ahs-container ahs-team-intro-inner" style={{ textAlign: 'left', maxWidth: 820 }}>
          <p className="ahs-body">
            Minim Global Services brings together five specialized divisions
            under one roof. Whichever service you need, you get the same
            standard of professionalism, quality, and reliability.
          </p>
        </div>
      </section>

      <section className="ahs-history" style={{ paddingTop: 8 }}>
        <div className="ahs-container">
          <div className="ahs-services-grid services-page-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <a
                  key={service.title}
                  href={getBusinessPublicUrl(service.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ahs-service-card"
                >
                  <div className="ahs-service-icon">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3 className="ahs-service-title">{service.title}</h3>
                  <p className="ahs-service-desc">{service.description}</p>
                  <span className="ahs-service-link">
                    Learn more
                    <ArrowRight size={14} className="ahs-btn-icon" />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ahs-cta-band">
        <div className="ahs-container ahs-cta-band-inner">
          <h2 className="ahs-heading">Not Sure Where to Start?</h2>
          <p className="ahs-body">
            Tell us what you need and we&rsquo;ll connect you with the right
            division &mdash; or bring more than one together for your project.
          </p>
          <Link href="/contact" className="ahs-btn">
            <span className="ahs-btn-text">Get in Touch</span>
            <ArrowRight size={16} className="ahs-btn-icon" />
          </Link>
          <p className="ahs-cta-tagline">
            Your vision. Our expertise. Professional results.
          </p>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  Camera,
  UtensilsCrossed,
  Building2,
  Shirt,
  Music,
} from 'lucide-react'
import {
  getBusinessPublicUrl,
  type BusinessSlug,
} from '@/data/businesses'

const businesses: Array<{
  slug: BusinessSlug
  icon: typeof Camera
  title: string
  meta: string
  description: string
  image: string
}> = [
  {
    slug: 'studios',
    icon: Camera,
    title: 'Minim Studios',
    meta: 'Media / Production / Events',
    description:
      'Photography, videography, live streaming, and creative production that amplify brands and community stories.',
    image: '/images/minim-studio.jpg',
  },
  {
    slug: 'food',
    icon: UtensilsCrossed,
    title: 'Minim Foods',
    meta: 'Catering / Hospitality',
    description:
      'Catering, restaurant operations, and food service solutions delivering quality and reliability every day.',
    image: '/images/minim-food.jpg',
  },
  {
    slug: 'architect',
    icon: Building2,
    title: 'Minim Architects, Designers & Engineers',
    meta: 'Construction / Design',
    description:
      'Architecture, engineering, and project management building durable spaces across Sierra Leone.',
    image: '/images/minin-architect.jpg',
  },
  {
    slug: 'clothing',
    icon: Shirt,
    title: 'Minim Clothings',
    meta: 'Fashion / Apparel',
    description:
      'Corporate wear, family clothing, and custom apparel designed with local craft and contemporary style.',
    image: '/images/minim-clothing.jpg',
  },
  {
    slug: 'music',
    icon: Music,
    title: 'Minim Music',
    meta: 'Live / Artists / Instruments',
    description:
      'Live jazz and performances, artist management, and instrument sales and rental for stages across Sierra Leone.',
    image: '/images/minim-music.jpg',
  },
]

export default function ServiceCards() {
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = rowRef.current?.querySelectorAll<HTMLElement>('.dh-biz-card')
    if (!cards || cards.length === 0) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return

    cards.forEach((card, index) => {
      card.classList.add('dh-biz-card--pending')
      card.style.transitionDelay = `${Math.min(index, 4) * 90}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.remove('dh-biz-card--pending')
          entry.target.classList.add('dh-biz-card--visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="dh-biz">
      <div className="dh-container">
        <div className="dh-section-head dh-section-head-center">
          <h2 className="dh-section-title">Our Businesses</h2>
          <p className="dh-section-sub">
            As a diversified group, our interest across industries reflects our
            commitment to fulfilling essential everyday needs.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
      </div>

      <div className="dh-container">
        <div className="dh-biz-row" ref={rowRef}>
          {businesses.map((biz) => {
            const href = getBusinessPublicUrl(biz.slug)
            const Icon = biz.icon
            return (
              <article key={biz.title} className="dh-biz-card">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dh-biz-media"
                  aria-label={biz.title}
                >
                  <div
                    className="dh-biz-image"
                    style={{ backgroundImage: `url('${biz.image}')` }}
                  />
                </a>
                <span className="dh-biz-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <div className="dh-biz-content">
                  <p className="dh-biz-meta">{biz.meta}</p>
                  <h3 className="dh-biz-title">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {biz.title}
                    </a>
                  </h3>
                  <p className="dh-biz-desc">{biz.description}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dh-biz-link"
                  >
                    Explore
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

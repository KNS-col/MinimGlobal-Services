'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  getBusinessPublicUrl,
  type BusinessSlug,
} from '@/data/businesses'

const businesses: Array<{
  slug: BusinessSlug
  title: string
  meta: string
  description: string
  image: string
}> = [
  {
    slug: 'studios',
    title: 'Minim Studios',
    meta: 'Media / Production / Events',
    description:
      'Photography, videography, live streaming, and creative production that amplify brands and community stories.',
    image: '/images/Hero-1.jpg',
  },
  {
    slug: 'food',
    title: 'Minim Food',
    meta: 'Catering / Hospitality',
    description:
      'Catering, restaurant operations, and food service solutions delivering quality and reliability every day.',
    image: '/images/Hero-3.jpg',
  },
  {
    slug: 'architect',
    title: 'Minim Architect',
    meta: 'Construction / Design',
    description:
      'Architecture, engineering, and project management building durable spaces across Sierra Leone.',
    image: '/images/Hero-4.jpg',
  },
  {
    slug: 'clothing',
    title: 'Minim Clothing',
    meta: 'Fashion / Apparel',
    description:
      'Corporate wear, family clothing, and custom apparel designed with local craft and contemporary style.',
    image: '/images/Hero-5.jpg',
  },
  {
    slug: 'music',
    title: 'Minim Music',
    meta: 'Live / Artists / Instruments',
    description:
      'Live jazz and performances, artist management, and instrument sales and rental for stages across Sierra Leone.',
    image: '/images/Hero-2.jpeg',
  },
]

export default function ServiceCards() {
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

      <div className="dh-biz-row">
        {businesses.map((biz) => {
          const href = getBusinessPublicUrl(biz.slug)
          return (
            <article key={biz.title} className="dh-biz-card">
              <div
                className="dh-biz-image"
                style={{ backgroundImage: `url('${biz.image}')` }}
              />
              <div className="dh-biz-body">
                <div className="dh-biz-top">
                  <h3 className="dh-biz-title">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {biz.title}
                    </a>
                  </h3>
                  <p className="dh-biz-meta">{biz.meta}</p>
                </div>
                <div className="dh-biz-bottom">
                  <span className="dh-biz-rule" />
                  <p className="dh-biz-desc">{biz.description}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ahs-btn dh-biz-btn"
                  >
                    <span className="ahs-btn-text">Read More</span>
                    <ArrowRight size={16} className="ahs-btn-icon" />
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="dh-container">
        <div className="dh-biz-cta">
          <Link href="/businesses" className="ahs-btn">
            <span className="ahs-btn-text">View All Businesses</span>
            <ArrowRight size={16} className="ahs-btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  )
}

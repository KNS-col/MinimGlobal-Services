'use client'

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
  details: string[]
}> = [
  {
    slug: 'studios',
    title: 'Minim Studios',
    meta: 'Media / Production / Events',
    description: 'Explore our professional studio services',
    image: '/images/Hero-1.jpg',
    details: [
      'Photography',
      'Videography',
      'Audio Production',
      'Event Planning',
      'Advertisement',
      'Live Jazz Band',
    ],
  },
  {
    slug: 'food',
    title: 'Minim Food',
    meta: 'Catering / Hospitality',
    description:
      'Catering, restaurant operations, and food service solutions delivering quality and reliability for everyday and special occasions.',
    image: '/images/Hero-3.jpg',
    details: [
      'Restaurant Operations',
      'Catering Services',
      'Event Catering',
      'Menu Planning',
      'Special Events',
      'Catering Bookings',
    ],
  },
  {
    slug: 'architect',
    title: 'Minim Architect Designers & Engineers',
    meta: 'Construction / Design',
    description:
      'Explore our architectural services and discover how we can bring your vision to life.',
    image: '/images/Hero-4.jpg',
    details: [
      'Residential Design',
      'Construction',
      'Real Estate',
      'Project Management',
      'Consultancy',
      'Track Your Expenditure',
    ],
  },
  {
    slug: 'clothing',
    title: 'Minim Clothing',
    meta: 'Fashion / Apparel',
    description:
      'Fashion design, family clothing, corporate wear, and custom apparel solutions.',
    image: '/images/Hero-5.jpg',
    details: [
      'Family',
      'Batch',
      "Men's Clothing",
      "Women's Clothing",
      "Children's Clothing",
    ],
  },
  {
    slug: 'music',
    title: 'Minim Music',
    meta: 'Live / Artists / Instruments',
    description:
      'Live jazz and stage performances, artist management, and a musical instrument outlet with rental.',
    image: '/images/Hero-2.jpeg',
    details: [
      'Live Jazz Performances',
      'Artist Management',
      'Live Performances',
      'Instrument Outlet / Rental',
    ],
  },
]

export default function BusinessDivisions() {
  return (
    <div className="ahs">
      <section className="ahs-team-intro">
        <div className="ahs-container ahs-team-intro-inner">
          <h2 className="ahs-heading">Diversified for Everyday Needs</h2>
          <p className="ahs-team-intro-desc">
            As a diversified group, our interest across industries reflects our
            commitment to fulfilling essential needs for people and businesses
            in Sierra Leone.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
      </section>

      <section className="dp-biz-list">
        <div className="ahs-container">
          <div className="dp-biz-stack">
            {businesses.map((biz, index) => {
              const href = getBusinessPublicUrl(biz.slug)
              return (
                <article
                  key={biz.title}
                  className={`dp-biz-item ${index % 2 === 1 ? 'is-reverse' : ''}`}
                >
                  <div
                    className="dp-biz-media"
                    style={{ backgroundImage: `url('${biz.image}')` }}
                  />
                  <div className="dp-biz-copy">
                    <p className="dp-biz-meta">{biz.meta}</p>
                    <h3 className="ahs-heading">{biz.title}</h3>
                    <p className="ahs-body">{biz.description}</p>
                    <ul className="dp-feature-list">
                      {biz.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ahs-btn"
                    >
                      <span className="ahs-btn-text">Learn More</span>
                      <ArrowRight size={16} className="ahs-btn-icon" />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

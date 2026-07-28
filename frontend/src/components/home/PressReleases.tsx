'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'

const pressReleases = [
  {
    id: 1,
    title: 'Minim Global Services Launches New Construction Project in Freetown',
    date: 'January 15, 2026',
    excerpt:
      'Minim Architect advances community infrastructure with a new construction initiative supporting local jobs and skills.',
    image: '/images/Hero-4.jpg',
    link: '/businesses',
  },
  {
    id: 2,
    title: 'Minim Studios Partners with Local Artists for Cultural Festival',
    date: 'January 10, 2026',
    excerpt:
      'Creative collaboration strengthens Sierra Leone’s cultural calendar through media production and live storytelling.',
    image: '/images/Hero-1.jpg',
    link: '/businesses',
  },
  {
    id: 3,
    title: 'Minim Food Expands Catering Services to Corporate Events',
    date: 'January 5, 2026',
    excerpt:
      'Quality catering grows to serve corporate clients while creating employment across the food services division.',
    image: '/images/Hero-3.jpg',
    link: '/businesses',
  },
  {
    id: 4,
    title: 'Minim Clothing Unveils New Corporate Wear Collection',
    date: 'December 20, 2026',
    excerpt:
      'Local apparel design meets workplace needs with durable, contemporary corporate and family clothing lines.',
    image: '/images/Hero-5.jpg',
    link: '/businesses',
  },
]

export default function PressReleases() {
  const [start, setStart] = useState(0)
  const [visible, setVisible] = useState(3)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setVisible(1)
      else if (w < 992) setVisible(2)
      else setVisible(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    setStart((s) => Math.min(s, Math.max(0, pressReleases.length - visible)))
  }, [visible])

  const maxStart = Math.max(0, pressReleases.length - visible)
  const prev = () => setStart((s) => Math.max(0, s - 1))
  const next = () => setStart((s) => Math.min(maxStart, s + 1))
  const items = pressReleases.slice(start, start + visible)

  return (
    <section className="dh-press">
      <div className="dh-container">
        <div className="dh-section-head">
          <div>
            <h2 className="dh-section-title">Press Releases and News</h2>
            <p className="dh-section-sub">Recent News and Events</p>
            <span className="ahs-underline" aria-hidden="true">
              <span />
            </span>
          </div>
          <div className="dh-press-arrows">
            <button
              type="button"
              className="dh-arrow"
              onClick={prev}
              disabled={start === 0}
              aria-label="Previous news"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="dh-arrow"
              onClick={next}
              disabled={start >= maxStart}
              aria-label="Next news"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div
          className="dh-press-grid"
          style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}
        >
          {items.map((release) => (
            <article key={release.id} className="dh-press-card">
              <div
                className="dh-press-image"
                style={{ backgroundImage: `url('${release.image}')` }}
              />
              <div className="dh-press-body">
                <div className="dh-press-inner">
                  <div className="dh-press-date">
                    <Clock size={15} />
                    {release.date}
                  </div>
                  <h3 className="dh-press-title-hover">
                    <Link href={release.link}>{release.title}</Link>
                  </h3>
                  <p className="dh-press-excerpt">{release.excerpt}</p>
                </div>
                <h3 className="dh-press-title">
                  <Link href={release.link}>{release.title}</Link>
                </h3>
                <Link
                  href={release.link}
                  className="dh-press-more"
                  aria-label={`Read more: ${release.title}`}
                >
                  <ChevronRight size={24} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

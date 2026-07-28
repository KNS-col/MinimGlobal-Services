'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import ArchitectPageHero from '@/components/architect/ArchitectPageHero'
import { ARCHITECT_PORTFOLIO } from '@/data/architect'

export default function ArchitectPortfolioGallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = ARCHITECT_PORTFOLIO.flatMap((item) =>
    item.gallery.map((src) => ({
      src,
      title: item.title,
      description: `${item.category} · ${item.location}`,
    }))
  )

  const openAt = (itemIndex: number) => {
    const offset = ARCHITECT_PORTFOLIO.slice(0, itemIndex).reduce(
      (sum, item) => sum + item.gallery.length,
      0
    )
    setIndex(offset)
    setOpen(true)
  }

  return (
    <>
      <ArchitectPageHero
        eyebrow="Selected Works"
        title="Portfolio"
        subtitle="Residential, commercial, and institutional projects across Freetown and Sierra Leone."
        image="/images/Hero-3.jpg"
        ctaHref="/businesses/architect/contact"
        ctaLabel="Start a Project"
      />

      <section className="ma-portfolio-page">
        <div className="ma-container">
          <div className="ma-portfolio-grid ma-portfolio-grid-full">
            {ARCHITECT_PORTFOLIO.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                className="ma-portfolio-card"
                onClick={() => openAt(itemIndex)}
              >
                <div
                  className="ma-portfolio-image"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="ma-portfolio-body">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                  <p className="ma-portfolio-desc">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
    </>
  )
}

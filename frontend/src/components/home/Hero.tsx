'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/images/Hero-1.jpg',
    title: 'Welcome to Minim Global Services',
    description: 'The future that connects us together!',
    cta: { label: 'Explore Our Businesses', href: '/businesses' },
  },
  {
    image: '/images/Hero-4.jpg',
    title: 'Connecting Sierra Leone Through Service',
    description:
      'Minim Global delivers quality media, food, architecture, and apparel, building local capacity and community opportunity nationwide.',
    cta: { label: 'Explore Our Businesses', href: '/businesses' },
  },
  {
    image: '/images/Hero-6.jpg',
    title: "Powering Sierra Leone's Industrial Transformation",
    description: null as string | null,
    cta: { label: 'Explore Our Businesses', href: '/businesses' },
  },
  {
    image: '/images/Hero-3.jpg',
    title: 'Sustainable Impact. Real Progress',
    description:
      'Minim Global creates ventures that serve stakeholders, communities, and people, socially responsible businesses that meet everyday needs.',
    cta: { label: 'View Sustainability Strategy', href: '/about/history' },
  },
  {
    image: '/images/Hero-5.jpg',
    title: 'Building for Tomorrow, Today',
    description: 'Where everyone has the opportunity to thrive.',
    cta: { label: 'About Minim Global', href: '/about' },
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  const goPrev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setIndex((i) => (i + 1) % slides.length)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 8000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]

  return (
    <section className="dh-hero">
      {slides.map((s, i) => (
        <div
          key={`${s.image}-${s.title}`}
          className={`dh-hero-slide ${i === index ? 'is-active' : ''}`}
          style={{ backgroundImage: `url('${s.image}')` }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="dh-hero-overlay" />

      <button
        type="button"
        className="dh-hero-arrow dh-hero-arrow-left"
        aria-label="Previous hero image"
        onClick={goPrev}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        className="dh-hero-arrow dh-hero-arrow-right"
        aria-label="Next hero image"
        onClick={goNext}
      >
        <ChevronRight size={22} />
      </button>

      <div className="dh-hero-content" key={index}>
        <h1 className="dh-hero-title">{slide.title}</h1>
        {slide.description && (
          <p className="dh-hero-desc">{slide.description}</p>
        )}
        <Link href={slide.cta.href} className="ahs-btn dh-hero-cta">
          <span className="ahs-btn-text">{slide.cta.label}</span>
          <ArrowRight size={16} className="ahs-btn-icon" />
        </Link>
      </div>

      <div className="dh-hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={`dh-hero-dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}

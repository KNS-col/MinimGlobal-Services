'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Building2,
  HeartHandshake,
  Users,
  Layers,
  RefreshCw,
  Target,
  PenLine,
  HardHat,
  UserCog,
  Trophy,
  ArrowRight,
} from 'lucide-react'

const stats = [
  {
    icon: Building2,
    title: 'Since 2018 Building Sierra Leone’s future.',
  },
  {
    icon: HeartHandshake,
    title: 'Presence: Serving communities nationwide',
  },
  {
    icon: Users,
    title: 'Team: Dedicated professionals across divisions',
  },
  {
    icon: Layers,
    title: 'Industries: Studios, Food, Architect, Clothing.',
  },
]

const fancyBoxes = [
  {
    title: 'Our vision',
    icon: RefreshCw,
    image: '/images/Hero-1.jpg',
    description:
      'To be the leading provider of exceptional services, fostering technological advancement and business growth worldwide.',
  },
  {
    title: 'Our Mission',
    icon: Target,
    image: '/images/Hero-2.jpeg',
    description:
      'To empower businesses with innovative solutions that enhance efficiency, connectivity, and sustainability.',
  },
  {
    title: 'Our commitment',
    icon: PenLine,
    image: '/images/Hero-3.jpg',
    description:
      'Minim Global Services is a leading company dedicated to providing top quality services across various industries. Our mission is to innovate and drive growth for businesses through strategic solutions.',
  },
]

const milestones = [
  {
    title: '2018 Minim Studios is founded',
    image: null as string | null,
  },
  {
    title: '2020 Launch of Minim Food catering services',
    image: null as string | null,
  },
  {
    title: '2022 Expansion into Minim Architect',
    image: '/images/Hero-4.jpg',
  },
  {
    title: '2024 Addition of Minim Clothing apparel',
    image: '/images/Hero-5.jpg',
  },
]

const coreValues = [
  'Integrity',
  'Innovation',
  'Excellence',
  'Sustainability',
  'Community Empowerment',
]

export default function HistoryVisionMission() {
  const [statIndex, setStatIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setStatIndex((i) => (i + 1) % stats.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const StatIcon = stats[statIndex].icon

  return (
    <div className="ahs">
      {/* Hero */}
      <section
        className="ahs-hero"
        style={{ backgroundImage: "url('/images/Hero-6.jpg')" }}
      >
        <div className="ahs-hero-overlay" />
        <div className="ahs-hero-inner">
          <p className="ahs-hero-eyebrow">Who We Are</p>
          <h1 className="ahs-hero-title">About Minim Global Services</h1>
          <p className="ahs-hero-sub">
            Minim Global Services is a leading company dedicated to providing
            top quality services across various industries. Our mission is to
            innovate and drive growth for businesses through strategic solutions.
          </p>
        </div>
      </section>

      {/* History and Strategy */}
      <section className="ahs-history">
        <div className="ahs-container ahs-history-grid">
          <div className="ahs-history-copy">
            <h2 className="ahs-heading">History and Strategy</h2>
            <p className="ahs-body">
              Minim Global Services is a leading company dedicated to providing
              top quality services across various industries. Our mission is to
              innovate and drive growth for businesses through strategic solutions.
            </p>
            <Link href="/businesses" className="ahs-btn">
              <span className="ahs-btn-text">Learn About Our Businesses</span>
              <ArrowRight size={16} className="ahs-btn-icon" />
            </Link>
          </div>

          <div className="ahs-stat-carousel">
            <div className="ahs-stat-slide" key={statIndex}>
              <div className="ahs-stat-icon">
                <StatIcon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="ahs-stat-title">{stats[statIndex].title}</h3>
            </div>
            <div className="ahs-stat-dots">
              {stats.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show stat ${i + 1}`}
                  className={`ahs-stat-dot ${i === statIndex ? 'is-active' : ''}`}
                  onClick={() => setStatIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Commitment fancy boxes */}
      <section className="ahs-fancy-section">
        <div className="ahs-container ahs-fancy-grid">
          {fancyBoxes.map((box) => {
            const Icon = box.icon
            return (
              <div
                key={box.title}
                className="ahs-fancy"
                style={{ backgroundImage: `url('${box.image}')` }}
              >
                <div className="ahs-fancy-inner">
                  <div className="ahs-fancy-icon">
                    <Icon size={64} strokeWidth={1.25} />
                  </div>
                  <h3 className="ahs-fancy-title">{box.title}</h3>
                </div>
                <div className="ahs-fancy-overlay">
                  <p>{box.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="ahs-vmv">
        <div className="ahs-container">
          <h2 className="ahs-heading ahs-heading-light ahs-heading-center">
            Vision, Mission & Values
          </h2>
          <div className="ahs-vmv-grid">
            <div className="ahs-icon-box">
              <div className="ahs-icon-box-icon">
                <HardHat size={40} strokeWidth={1.75} />
              </div>
              <h3 className="ahs-icon-box-title">Vision Statement</h3>
              <p className="ahs-icon-box-desc">
                To be the leading provider of exceptional services, fostering
                technological advancement and business growth worldwide.
              </p>
            </div>
            <div className="ahs-icon-box">
              <div className="ahs-icon-box-icon">
                <UserCog size={40} strokeWidth={1.75} />
              </div>
              <h3 className="ahs-icon-box-title">Mission Statement</h3>
              <p className="ahs-icon-box-desc">
                To empower businesses with innovative solutions that enhance
                efficiency, connectivity, and sustainability.
              </p>
            </div>
            <div className="ahs-icon-box">
              <div className="ahs-icon-box-icon ahs-icon-box-icon-accent">
                <Trophy size={40} strokeWidth={1.75} />
              </div>
              <h3 className="ahs-icon-box-title">Core Values</h3>
              <ul className="ahs-values-list">
                {coreValues.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="ahs-milestones">
        <div className="ahs-container ahs-milestones-inner">
          <h2 className="ahs-heading">
            Building Sierra Leone, One Milestone at a Time
          </h2>
          <p className="ahs-body">
            The Minim story began with a vision to transform Sierra Leone’s
            business landscape through media production. Over the years, we have
            grown into a diversified group spanning studios, food, architecture,
            and clothing. Each milestone reflects our commitment to industrial
            growth, self-reliance, and improving quality of life for communities
            we serve.
          </p>
          <p className="ahs-body ahs-body-space">
            Today, Minim Global stands as a symbol of resilience and
            innovation, building enterprises that create jobs and inspire the next
            generation of Sierra Leonean businesses.
          </p>

          <div className="ahs-timeline">
            {milestones.map((item) => (
              <div key={item.title} className="ahs-timeline-item">
                <span className="ahs-pulse-dot">
                  <span className="ahs-pulse ahs-pulse-1" />
                  <span className="ahs-pulse ahs-pulse-2" />
                </span>
                <div className="ahs-timeline-card">
                  {item.image && (
                    <div className="ahs-timeline-image">
                      <img src={item.image} alt="" />
                    </div>
                  )}
                  <div className="ahs-timeline-text">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

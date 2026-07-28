'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const pillars = [
  'Integrity',
  'Innovation',
  'Excellence',
  'Sustainability',
  'Community Empowerment',
  'Local Capacity',
  'Quality Delivery',
]

export default function HomeSustainability() {
  return (
    <section className="dh-sustain">
      <div className="dh-container dh-sustain-grid">
        <div className="dh-sustain-left">
          <p className="dh-sustain-eyebrow">Sustainability</p>
          <h2 className="dh-section-title dh-section-title-light">
            Building prosperity &amp; self sufficiency
          </h2>
          <Link href="/about/history" className="ahs-btn dh-sustain-btn">
            <span className="ahs-btn-text">Get started today!</span>
            <ArrowRight size={16} className="ahs-btn-icon" />
          </Link>
        </div>
        <div className="dh-sustain-right">
          <p>
            At Minim Global, our approach to sustainability goes beyond compliance.
            We are driven to contribute to, and positively impact, the
            development of our host communities and society at large.
          </p>
          <p className="dh-sustain-pillars-label">Our sustainability pillars are:</p>
          <ul className="dh-sustain-list">
            {pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

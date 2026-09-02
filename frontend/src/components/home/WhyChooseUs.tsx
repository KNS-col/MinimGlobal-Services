'use client'

import { useEffect, useState } from 'react'
import { Award, Lightbulb, BadgeCheck, HeartHandshake, Layers, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Professional Approach',
    description: 'We maintain high standards in every project.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    description: 'We turn ideas into unique and practical results.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality First',
    description: 'We are committed to delivering excellent products and services.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focused',
    description: 'Your vision and satisfaction are at the heart of our work.',
  },
  {
    icon: Layers,
    title: 'Versatile Expertise',
    description: 'Our diverse services allow us to meet a wide range of needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity & Reliability',
    description: 'We believe in honest communication and dependable service.',
  },
]

export default function WhyChooseUs() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reasons.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const reason = reasons[index]
  const Icon = reason.icon

  return (
    <section className="dh-why">
      <div className="dh-container dh-why-grid">
        <div className="dh-why-copy">
          <div className="dh-section-head" style={{ marginBottom: 20 }}>
            <h2 className="dh-section-title">Why Choose Minim Global Services?</h2>
          </div>
          <p>
            Professionalism is the foundation of every successful project.
            Minim Global Services delivers quality across media, food,
            architecture, apparel, and music, ensuring dependable results for
            clients and communities across Sierra Leone.
          </p>
          <p>
            Whether you need a single project delivered or an ongoing
            partnership across our divisions, our approach is designed to
            adapt to your needs.
          </p>
        </div>

        <div className="dh-why-carousel">
          <div className="dh-why-slide" key={index}>
            <span className="dh-why-icon">
              <Icon size={26} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="dh-why-title">{reason.title}</h3>
              <p className="dh-why-desc">{reason.description}</p>
            </div>
          </div>
          <div className="dh-why-dots">
            {reasons.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show reason ${i + 1}`}
                className={`dh-why-dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import {
  Megaphone,
  Calendar,
  Newspaper,
  DollarSign,
  Radio,
  Music,
  ArrowRight,
} from 'lucide-react'
import { getBusinessPublicUrl } from '@/data/businesses'

const impactAreas = [
  {
    icon: Megaphone,
    title: 'Media Consultancy',
    description: 'Expert guidance in media strategies and branding.',
    getLink: () => getBusinessPublicUrl('studios'),
  },
  {
    icon: Calendar,
    title: 'Event Planning',
    description: 'Organizing and managing events with precision.',
    getLink: () => getBusinessPublicUrl('studios'),
  },
  {
    icon: Newspaper,
    title: 'Advertisement',
    description: 'Boost your brand visibility through strategic ads.',
    getLink: () => getBusinessPublicUrl('studios'),
  },
  {
    icon: DollarSign,
    title: 'Track Your Expenditure',
    description: 'Monitor and manage your finances effectively.',
    getLink: () => getBusinessPublicUrl('architect'),
  },
  {
    icon: Radio,
    title: 'Live Streaming',
    description: 'Broadcast events in real time with high quality.',
    getLink: () => getBusinessPublicUrl('studios'),
  },
  {
    icon: Music,
    title: 'Live Jazz Band',
    description: 'Experience live jazz music for special occasions.',
    getLink: () => getBusinessPublicUrl('studios'),
  },
]

export default function ImpactSection() {
  return (
    <section className="dh-impact">
      <div className="dh-container">
        <div className="dh-section-head dh-section-head-center" style={{ marginBottom: 40 }}>
          <h2 className="dh-section-title">Our Expertise</h2>
          <p className="dh-section-sub">The future that connects us together!</p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
        <div className="dh-impact-grid">
          {impactAreas.map((area) => {
            const Icon = area.icon
            return (
              <div key={area.title} className="dh-impact-card">
                <div className="dh-impact-overlay" aria-hidden="true" />
                <div className="dh-impact-icon">
                  <Icon size={38} strokeWidth={1.75} />
                </div>
                <div className="dh-impact-content">
                  <h3 className="dh-impact-title">{area.title}</h3>
                  <p className="dh-impact-desc">{area.description}</p>
                </div>
                <div className="dh-impact-btn-wrap">
                  <a
                    href={area.getLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dh-impact-btn"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getBusinessPublicUrl } from '@/data/businesses'

const reports = [
  {
    title: 'Minim Studios Overview',
    description:
      'Media production capabilities, creative services, and partnership opportunities.',
    image: '/images/Hero-1.jpg',
    getHref: () => getBusinessPublicUrl('studios'),
    external: true,
  },
  {
    title: 'Minim Architect Portfolio',
    description:
      "Selected construction and design projects shaping Sierra Leone’s built environment.",
    image: '/images/Hero-4.jpg',
    getHref: () => getBusinessPublicUrl('architect'),
    external: true,
  },
  {
    title: 'Community & Impact Brief',
    description:
      'How Minim Global creates jobs, builds skills, and supports local enterprise.',
    image: '/images/Hero-6.jpg',
    getHref: () => '/about/history',
    external: false,
  },
]

export default function HomeReports() {
  return (
    <section className="dh-reports">
      <div className="dh-container">
        <div className="dh-section-head dh-section-head-center">
          <h2 className="dh-section-title">Reports &amp; Presentations</h2>
          <p className="dh-section-sub">
            Stay connected to Minim Global’s divisions, projects, and progress
            across Sierra Leone.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>

        <div className="dh-reports-grid">
          {reports.map((report) => {
            const href = report.getHref()
            const content = (
              <>
                <div className="dh-report-overlay" />
                <div className="dh-report-content">
                  <h3>{report.title}</h3>
                  <p>{report.description}</p>
                  <span className="dh-report-link">
                    View Details <ArrowRight size={16} />
                  </span>
                </div>
              </>
            )

            if (report.external) {
              return (
                <a
                  key={report.title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dh-report-card"
                  style={{ backgroundImage: `url('${report.image}')` }}
                >
                  {content}
                </a>
              )
            }

            return (
              <Link
                key={report.title}
                href={href}
                className="dh-report-card"
                style={{ backgroundImage: `url('${report.image}')` }}
              >
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Building2, Users, Layers } from 'lucide-react'

const stats = [
  {
    icon: Layers,
    above: '4',
    bellow: 'Business Divisions Nationwide',
  },
  {
    icon: Users,
    above: 'Dedicated Team',
    bellow: 'Professionals Across Sierra Leone',
  },
  {
    icon: Building2,
    above: 'Since 2018',
    bellow: 'Building Sierra Leone’s Future',
  },
]

export default function HomeStats() {
  return (
    <section className="dh-stats-wrap">
      <div className="dh-container">
        <div className="dh-stats">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.bellow} className="dh-stats-item">
                <div className="dh-stats-icon">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div className="dh-stats-text">
                  <div className="dh-stats-above">{stat.above}</div>
                  <div className="dh-stats-bellow">{stat.bellow}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

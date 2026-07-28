import StudiosPageHero from '@/components/studios/StudiosPageHero'
import {
  Lightbulb,
  Sparkles,
  Monitor,
  Projector,
  Theater,
  Wallpaper,
} from 'lucide-react'

const lightingServices = [
  'Stage & theatrical lighting',
  'LED & intelligent moving lights',
  'Atmospheric uplighting',
  'Keynote & speaker lighting',
  'Gala & conference looks',
  'Synchronized lighting effects',
  'Venue transformation & ambiance',
  'Lighting design & programming',
]

const displayServices = [
  'LED walls & LED screens',
  'Video projection & screens',
  'Projection mapping',
  'Digital signage displays',
  'Stage video backdrops',
  'Interactive touch screens',
  'Indoor & outdoor setups',
  'Content playback support',
]

const stagingServices = [
  'Mobile stages & risers',
  'Pipe and drape',
  'Trussing & rigging',
  'Podiums & lecterns',
  'Stage skirting',
  'Power distribution',
  'Load in & on site tech',
  'Full show day operation',
]

const pillars = [
  {
    icon: Lightbulb,
    title: 'Event Lighting',
    description:
      'We use LED and theatrical fixtures with modern control systems to create looks and emotion suited to your event so every gala, conference, or keynote is lit beautifully.',
  },
  {
    icon: Sparkles,
    title: 'Lighting Design',
    description:
      'From subtle ambiance to bold immersive effects, our lighting design transforms the venue. Stage lighting, uplighting, and synchronized visuals that captivate the room.',
  },
  {
    icon: Monitor,
    title: 'LED Walls & Screens',
    description:
      'High impact LED walls and screens for stages, booths, and brand moments indoor or outdoor with setup and playback support.',
  },
  {
    icon: Projector,
    title: 'Video Projection',
    description:
      'Crisp projection for screens of all sizes, multi screen setups, and projection mapping that brings spaces to life.',
  },
  {
    icon: Theater,
    title: 'Staging & Rigging',
    description:
      'Stages, risers, trussing, pipe and drape, and podium setups that give your production a solid, professional foundation.',
  },
  {
    icon: Wallpaper,
    title: 'Show Production Support',
    description:
      'Technicians and production support from load in through showtime so sound, lights, and displays work as one experience.',
  },
]

export default function DisplaysStudioPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Displays Studio"
        title="Lighting, LED & Event Displays"
        subtitle="Event lighting, lighting design, LED walls, projection, and staging technology and talent that make your audience feel the moment."
        image="/images/Hero-4.jpg"
        ctaLabel="Get a Quote"
      />

      <section className="ms-intro">
        <div className="ms-container ms-intro-grid">
          <h2>Turn vision into a world class experience.</h2>
          <div>
            <p>
              Minim Displays Studio delivers exceptional event experiences with
              proven technologies in lighting, LED displays, and staging led
              by technicians and production teams who know how to make the room
              feel right. We help engage your audience and turn your goals into
              reality.
            </p>
            <div className="ms-hero-actions ms-intro-actions">
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
                Talk to Our Team
              </a>
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-outline">
                Need a Quick Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: Lighting (CPR-style emphasis) */}
      <section className="ms-vid-lists">
        <div className="ms-container">
          <div className="ms-section-head" style={{ marginBottom: 40 }}>
            <p className="ms-eyebrow dark">Lighting first</p>
            <h2>Event Lighting and Lighting Design</h2>
            <p
              style={{
                margin: '12px 0 0',
                maxWidth: 720,
                color: 'var(--ms-muted)',
                fontSize: 17,
                lineHeight: 1.7,
              }}
            >
              Elevate your event with dynamic lighting design. From subtle
              ambiance to bold, immersive effects, our lighting solutions
              enhance every moment whether you need stage lighting,
              atmospheric uplighting, or synchronized visuals that transform
              your venue.
            </p>
          </div>
          <div className="ms-vid-lists-grid">
            <div className="ms-vid-list-col">
              <h3>Lighting Services</h3>
              <ul>
                {lightingServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ms-vid-list-col">
              <h3>LED & Display</h3>
              <ul>
                {displayServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ms-vid-list-col">
              <h3>Staging & Production</h3>
              <ul>
                {stagingServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ms-services">
        <div className="ms-container">
          <div className="ms-section-head ms-section-head-center">
            <p className="ms-eyebrow dark">What we deliver</p>
            <h2>Displays Studio Capabilities</h2>
          </div>
          <div className="ms-services-grid">
            {pillars.map((card) => {
              const Icon = card.icon
              return (
                <article key={card.title} className="ms-service-card">
                  <div className="ms-service-icon">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="/businesses/studios/contact" className="ms-text-link">
                    Inquire
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ms-cta ms-cta-compact">
        <div className="ms-container ms-section-head ms-section-head-center">
          <p className="ms-eyebrow">Get in touch</p>
          <h2>Want Your Event to Stand Out?</h2>
          <p>
            Tell us about your next conference, gala, launch, or live show  
            lighting, LED walls, projection, or full stage production and
            we’ll help bring it to life.
          </p>
          <div
            className="ms-hero-actions"
            style={{ justifyContent: 'center', marginTop: 24 }}
          >
            <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

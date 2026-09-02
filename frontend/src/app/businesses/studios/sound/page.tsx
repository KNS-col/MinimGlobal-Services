import StudiosPageHero from '@/components/studios/StudiosPageHero'
import {
  Mic,
  Speaker,
  Headphones,
  Radio,
  Music,
  SlidersHorizontal,
} from 'lucide-react'

const reinforcementServices = [
  'Front of house mixing',
  'Distributed audio systems',
  'Wireless & wired microphones',
  'Keynote & speech reinforcement',
  'Conference & meeting audio',
  'Concert & stage sound',
  'Zone control & delay speakers',
  'On site audio engineers',
]

const studioServices = [
  'Voiceover & narration recording',
  'Music tracking & production',
  'Podcast recording & editing',
  'Mixing & mastering',
  'Sound design & Foley',
  'ADR & post audio',
  'Jingles & brand audio',
  'Delivery ready file formats',
]

const liveSupport = [
  'System design for venue size',
  'Speaker placement & tuning',
  'Monitor mixes for performers',
  'Press & panel mics',
  'Playback & backup systems',
  'Show day operation',
  'Load in & strike',
  'Integration with lighting & video',
]

const pillars = [
  {
    icon: Speaker,
    title: 'Live Sound Reinforcement',
    description:
      'Balanced amplification, even coverage, and accurate sound for every seat. From soft spoken keynotes to full concert riders.',
  },
  {
    icon: Mic,
    title: 'Speech & Conference Audio',
    description:
      'Clear, intelligible speech for galas, conferences, meetings, and panels so every word reaches the room.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Mixing & Engineering',
    description:
      'Audio engineers using professional speakers, microphones, and mixing technology to minimize distortion and maximize clarity.',
  },
  {
    icon: Headphones,
    title: 'Studio Recording',
    description:
      'Controlled recording for voiceovers, podcasts, music, and branded audio in a dedicated sound studio environment.',
  },
  {
    icon: Music,
    title: 'Music & Brand Audio',
    description:
      'Tracking, arrangement, jingles, and soundtrack work that fits campaigns, ads, and live moments.',
  },
  {
    icon: Radio,
    title: 'Sound Design & Post',
    description:
      'Custom soundscapes, effects, ADR, and post audio polish for film, ads, and immersive brand experiences.',
  },
]

export default function SoundStudioPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Sound Studio"
        title="Audio & Sound Reinforcement"
        subtitle="Crystal clear sound for live events, conferences, and studio productions. Every word, note, and effect heard with precision."
        image="/images/minim-sound2.jpeg"
        imagePosition="center 55%"
        ctaLabel="Get a Quote"
      />

      <section className="ms-intro">
        <div className="ms-container ms-intro-grid">
          <h2>The right sound is critical to any event.</h2>
          <div>
            <p>
              Balanced amplification, even distribution, and accurate rendition
              make the difference between a room that works and a room that
              fails. We handle soft spoken keynote speakers and full blown
              concerts with the same care. Sound design and execution are
              critical to an immersive experience.
            </p>
            <div className="ms-hero-actions ms-intro-actions">
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
                Talk to Our Engineers
              </a>
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-outline">
                Need a Quick Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ms-vid-lists">
        <div className="ms-container">
          <div className="ms-section-head" style={{ marginBottom: 40 }}>
            <p className="ms-eyebrow dark">Live & studio</p>
            <h2>Professional Live Event Audio</h2>
            <p
              style={{
                margin: '12px 0 0',
                maxWidth: 720,
                color: 'var(--ms-muted)',
                fontSize: 17,
                lineHeight: 1.7,
              }}
            >
              Deliver crystal clear sound with professional live event audio.
              High quality systems ensure every word, note, and effect is heard
              with precision, whether you are hosting a corporate event,
              concert, or meeting. From intimate gatherings to large scale
              productions, we tailor reinforcement to your venue and audience
              size.
            </p>
          </div>
          <div className="ms-vid-lists-grid">
            <div className="ms-vid-list-col">
              <h3>Sound Reinforcement</h3>
              <ul>
                {reinforcementServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ms-vid-list-col">
              <h3>Studio Production</h3>
              <ul>
                {studioServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ms-vid-list-col">
              <h3>Show Support</h3>
              <ul>
                {liveSupport.map((item) => (
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
            <h2>Sound Studio Capabilities</h2>
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
          <h2>Want Your Event To Sound Right?</h2>
          <p>
            Tell us about your conference, gala, concert, podcast, or studio
            session and we will design the audio that keeps your audience
            engaged.
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

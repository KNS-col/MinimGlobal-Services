import StudiosPageHero from '@/components/studios/StudiosPageHero'
import { ArrowRight } from 'lucide-react'

const preProduction = [
  'Concept Development',
  'Creative Direction',
  'Storyboard & Shot List Creation',
  'Script Supervision or Writing',
  'Set Design & Planning',
  'Scheduling & Project Management',
  'Location Scouting',
  'Costume Design',
  'Styling',
  'Makeup & Hair',
  'Prop Planning & Acquisition',
  'Art Direction',
]

const production = [
  'Directing & Producing',
  'Camera Operation & Cinematography',
  'Video Lighting',
  'Sound Recording',
  'Multi Camera Angles',
  'Time Lapse Video',
  '4K Video Quality',
  'Green Screen',
  'In Studio or On Location Shoots',
  'Drone & Aerial Cinematography',
  'Live Event Coverage',
  'Travel Across Sierra Leone',
  'Insurance & Permits',
]

const postProduction = [
  'Professional Video Editing',
  'Voice Overs',
  'Custom Animation & Motion Graphics',
  'Video Titles & Subtitles',
  'Coloring & Grading',
  'Multiple Format Delivery',
  'Backup, Storage & Archiving',
  'Password Protected Proofing',
  'Private Online Client Review',
]

const serviceColumns = [
  { title: 'Pre Production Services', items: preProduction },
  { title: 'Production Services', items: production },
  { title: 'Post Production & Delivery', items: postProduction },
]

const videoTypes = [
  {
    title: 'Brand Launch Film',
    type: 'Broadcast Commercial',
    image: '/images/minim-studio.jpg',
  },
  {
    title: 'Website Banner Video',
    type: 'Web & Digital',
    image: '/images/minim-studio.jpg',
  },
  {
    title: 'Grand Opening Video',
    type: 'Event Film',
    image: '/images/minim-studio.jpg',
  },
  {
    title: 'Product Demo',
    type: 'Product Film',
    image: '/images/minim-studio.jpg',
  },
  {
    title: 'Branding Video',
    type: 'Brand Story',
    image: '/images/minim-studio.jpg',
  },
  {
    title: 'Gala Appeal Video',
    type: 'Fundraising',
    image: '/images/minim-studio.jpg',
  },
  {
    title: 'Community Promo',
    type: 'Location Film',
    image: '/images/minim-studio.jpg',
  },
  {
    title: 'Social Campaign Cut',
    type: 'Social Media',
    image: '/images/minim-studio.jpg',
  },
  {
    title: 'Corporate Story',
    type: 'Brand Documentary',
    image: '/images/minim-studio.jpg',
  },
]

export default function VideographyPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Videography Studio"
        title="Commercial Videography"
        subtitle="Full service video production from concept to delivery."
        image="/images/minim-sound3.jpeg"
        ctaHref="/businesses/studios/contact"
        ctaLabel="Get in Touch"
      />

      {/* Video Storytelling */}
      <section className="ms-intro">
        <div className="ms-container ms-intro-grid">
          <h2>Video Storytelling</h2>
          <div>
            <p>
              It’s no secret that storytelling with video has become the most
              effective and powerful way to connect with your customers. As a
              full service video team, we’ll help with the entire process,
              taking your project from concept to reality.
            </p>
            <div className="ms-hero-actions ms-intro-actions">
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
                Inquire for a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pre / Production / Post lists frphoto layout */}
      <section className="ms-vid-lists">
        <div className="ms-container">
          <div className="ms-vid-lists-grid">
            {serviceColumns.map((col) => (
              <div key={col.title} className="ms-vid-list-col">
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of videos */}
      <section className="ms-vid-types">
        <div className="ms-container">
          <div className="ms-vid-types-head">
            <div>
              <p className="ms-eyebrow dark">Videography</p>
              <h2>Types Of Videos We Help Produce</h2>
            </div>
            <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
              Inquire for a Quote
            </a>
          </div>
          <p className="ms-vid-types-copy">
            Video is now the most viewed format online and attention spans are
            at an all time low. You have a lot of distractions to compete with
            and a short window to grab someone’s attention. A short, well
            planned, and direct message is key. We can help craft your message
            so your video gets just the results you want.
          </p>
        </div>

        <div className="ms-cases-grid">
          {videoTypes.map((video) => (
            <a
              key={video.title}
              href="/businesses/studios/contact"
              className="ms-case-card"
            >
              <div
                className="ms-case-image"
                style={{ backgroundImage: `url('${video.image}')` }}
              />
              <div className="ms-case-body">
                <span>{video.type}</span>
                <h3>{video.title}</h3>
                <span className="ms-text-link">
                  Inquire <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Let’s Get Started */}
      <section className="ms-cta ms-cta-compact">
        <div className="ms-container ms-section-head ms-section-head-center">
          <p className="ms-eyebrow">Get in touch</p>
          <h2>Let’s Get Started!</h2>
          <p>
            Ready to produce a commercial, brand film, or event video? Tell us
            about your project and we’ll get back to you quickly.
          </p>
          <div
            className="ms-hero-actions"
            style={{ justifyContent: 'center', marginTop: 24 }}
          >
            <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

import StudiosPageHero from '@/components/studios/StudiosPageHero'
import {
  Camera,
  Package,
  Megaphone,
  Calendar,
  Home,
  MapPin,
  Users,
  Plane,
  Check,
} from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Campaigns & Promotional',
    description:
      'We will help you communicate your marketing message with clarity and authenticity. We can develop a rough concept or collaborate with your creative team.',
  },
  {
    icon: Calendar,
    title: 'Event Photography',
    description:
      'Our team can capture every moment of your event. We work in difficult lighting, tight spaces, and crowded rooms. We have seen it all.',
  },
  {
    icon: Package,
    title: 'Product Photography',
    description:
      'Whether you need a clean in studio session or something on location, we will capture your products beautifully for catalog, web, and ads.',
  },
  {
    icon: Users,
    title: 'At Work / Behind The Scenes',
    description:
      'Showcasing your team at work is one of the most effective ways to share your company story. People love a good look behind the scenes.',
  },
  {
    icon: Plane,
    title: 'Drone / Aerial',
    description:
      'Available for daytime and golden hour, drone shots are a stunning way to capture buildings, events, and panoramic views across Freetown.',
  },
  {
    icon: Home,
    title: 'Architecture / Spaces',
    description:
      'From offices and hotels to restaurants and retail, we show off your space using creative angles, lighting, and composition.',
  },
]

const studioCapabilities = [
  'Concept Development & Creative Direction',
  'Photography Sessions',
  'Backdrop & Set Design',
  'Prop Planning',
  'Lighting Design',
  'Makeup & Hair Stylist Sourcing',
]

const locationCapabilities = [
  'Location Scouting',
  'Concept Development & Creative Direction',
  'Photography Sessions',
  'Lighting Design',
  'Prop Planning',
  'Model & Talent Support',
]

const headshotPerks = [
  'Flexible Dates, Fast & Easy Scheduling',
  'Your Choice of an In Studio or On Location Session',
  'Select Your Favorite Photos During Your Session',
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description:
      'First we take the time to learn about you, your project, and the who, what, where, when, and why behind it. We are here to help you plan and execute your vision.',
  },
  {
    step: '02',
    title: 'Photoshoot Day',
    description:
      'Our favorite part. We use experience to guide the session and creative problem solve on the fly. We joke and laugh and make you feel totally at ease in front of the camera.',
  },
  {
    step: '03',
    title: 'Deliver & Enjoy',
    description:
      'Before you know it, your photos will be ready to share with the world. Digital files delivered with optional finished prints and albums.',
  },
]

const samples = [
  {
    title: 'Brand Campaign Shoot',
    category: 'Campaigns',
    image: '/images/Hero-1.jpg',
  },
  {
    title: 'Product Catalog Session',
    category: 'Product',
    image: '/images/Hero-5.jpg',
  },
  {
    title: 'Corporate Event Coverage',
    category: 'Events',
    image: '/images/Hero-3.jpg',
  },
  {
    title: 'Hospitality Spaces',
    category: 'Architecture',
    image: '/images/Hero-4.jpg',
  },
]

export default function PhotographyPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Photography"
        title="Professional Imagery To Grow Your Company"
        subtitle="Commercial photography for brands, products, events, and spaces delivered on time."
        image="/images/Hero-1.jpg"
        ctaHref="/businesses/studios/contact"
        ctaLabel="Get in Touch"
        secondaryHref="#services"
        secondaryLabel="See Our Services"
      />

      <section className="ms-intro">
        <div className="ms-container ms-intro-grid">
          <h2>
            You Need Awesome Imagery. And You Need It Like…Yesterday. We Get It.
          </h2>
          <div>
            <p>
              Whether you need campaign photos, product shots, event coverage, or
              headshots, we have an expert team member ready to deliver exactly
              what you need, on time.
            </p>
            <div className="ms-hero-actions ms-intro-actions">
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
                Get in Touch
              </a>
              <a href="#services" className="ms-btn ms-btn-outline">
                See Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ms-photo-help">
        <div className="ms-container ms-photo-help-inner">
          <p className="ms-eyebrow dark">How We Help</p>
          <h2>Marketing photography that moves goals forward</h2>
          <div className="ms-photo-help-copy">
            <p>
              We have captured imagery for enterprises, non profits, marketing
              firms, and small local businesses across Sierra Leone. We love
              collaborating with other creatives to develop a unique concept for
              your campaign, whether that is your agency, an internal team, or a
              solo entrepreneur.
            </p>
            <p>
              Our team is passionate about understanding your organization&apos;s
              mission and goals. Because of that, we create content that
              accomplishes your marketing goals and stays totally on brand.
            </p>
          </div>
          <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
            Inquire for a Quote
          </a>
        </div>
      </section>

      <section className="ms-photo-split">
        <div className="ms-container">
          <article className="ms-photo-split-card">
            <div
              className="ms-photo-split-media"
              style={{ backgroundImage: "url('/images/Hero-5.jpg')" }}
            />
            <div className="ms-photo-split-body">
              <div className="ms-photo-split-icon">
                <Camera size={28} strokeWidth={1.75} />
              </div>
              <h2>In Studio Sessions</h2>
              <p>
                Our Freetown studio is equipped for a wide variety of session
                types. We can accommodate full teams of art directors, models,
                and stylists, or keep it simple.
              </p>
              <p className="ms-photo-split-label">In Studio Capabilities Include:</p>
              <ul className="ms-checklist">
                {studioCapabilities.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
                Inquire for a Quote
              </a>
            </div>
          </article>

          <article className="ms-photo-split-card is-reverse">
            <div
              className="ms-photo-split-media"
              style={{ backgroundImage: "url('/images/Hero-6.jpg')" }}
            />
            <div className="ms-photo-split-body">
              <div className="ms-photo-split-icon">
                <MapPin size={28} strokeWidth={1.75} />
              </div>
              <h2>On Location Sessions</h2>
              <p>
                Some stories are better told outside the studio. We will bring
                our setup to you and create beautiful imagery in any environment
                across Sierra Leone.
              </p>
              <p className="ms-photo-split-label">On Location Capabilities Include:</p>
              <ul className="ms-checklist">
                {locationCapabilities.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/businesses/studios/contact" className="ms-btn ms-btn-dark">
                Inquire for a Quote
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="services" className="ms-services">
        <div className="ms-container">
          <div className="ms-section-head ms-section-head-center">
            <p className="ms-eyebrow dark">Some of our services</p>
            <h2>Photography Services</h2>
          </div>
          <div className="ms-services-grid">
            {services.map((card) => {
              const Icon = card.icon
              return (
                <article key={card.title} className="ms-service-card">
                  <div className="ms-service-icon">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="/businesses/studios/contact" className="ms-text-link">
                    Learn More
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ms-headshots">
        <div className="ms-container ms-headshots-grid">
          <div
            className="ms-headshots-media"
            style={{ backgroundImage: "url('/images/Hero-2.jpeg')" }}
          />
          <div className="ms-headshots-copy">
            <p className="ms-eyebrow dark">Our services</p>
            <h2>Professional Headshots &amp; Branding Sessions</h2>
            <p>
              Need a nice photo of yourself? Or maybe your whole team. Perfect
              for the busy professional, our express headshots are easy and
              painless. We will joke and chat and make you feel at ease in front
              of the camera. You don&apos;t have to be a model. You just have to
              be yourself.
            </p>
            <ul className="ms-checklist">
              {headshotPerks.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
              Schedule a Session
            </a>
          </div>
        </div>
      </section>

      <section className="ms-cases">
        <div className="ms-container">
          <div className="ms-section-head ms-section-head-center">
            <p className="ms-eyebrow dark">Selected work</p>
            <h2>Some Stories Of How We Helped Our Clients</h2>
          </div>
          <div className="ms-cases-grid">
            {samples.map((item) => (
              <a key={item.title} href="/businesses/studios/contact" className="ms-case-card">
                <div
                  className="ms-case-image"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="ms-case-body">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <span className="ms-text-link">View Project</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ms-process">
        <div className="ms-container">
          <div className="ms-section-head ms-section-head-center">
            <p className="ms-eyebrow dark">The experience</p>
            <h2>What You Can Expect From Our Expert Team</h2>
          </div>
          <div className="ms-process-grid">
            {process.map((item) => (
              <article key={item.step} className="ms-process-card">
                <span className="ms-process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ms-cta">
        <div className="ms-container ms-cta-inner">
          <div>
            <p className="ms-eyebrow">Get in touch</p>
            <h2>Let&apos;s Get Started!</h2>
            <p>
              Tell us about your shoot, timeline, and goals. We will respond with
              availability and a clear next step.
            </p>
          </div>
          <a href="/businesses/studios/contact" className="ms-btn ms-btn-primary">
            Book Photography
          </a>
        </div>
      </section>
    </>
  )
}

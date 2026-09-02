'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Megaphone,
  UtensilsCrossed,
  Shirt,
  CheckCircle2,
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import { getBusinessPublicUrl } from '@/data/businesses'

const services = [
  {
    icon: Building2,
    title: 'Architecture & Design',
    description:
      'We transform ideas into functional, beautiful, and purposeful spaces. Our architectural and design services combine creativity, practicality, and attention to detail to create environments that reflect the vision and needs of our clients.',
    href: getBusinessPublicUrl('architect'),
  },
  {
    icon: Megaphone,
    title: 'Media',
    description:
      'We bring ideas and stories to life through creative media. From visual content to branding and digital communication, we help individuals and businesses communicate their message professionally and effectively.',
    href: getBusinessPublicUrl('studios'),
  },
  {
    icon: UtensilsCrossed,
    title: 'Food',
    description:
      'We are passionate about delivering quality food and memorable experiences. Our food services focus on excellent presentation, great taste, quality ingredients, and professional service.',
    href: getBusinessPublicUrl('food'),
  },
  {
    icon: Shirt,
    title: 'Clothing',
    description:
      'Our clothing services reflect creativity, style, and individuality. We are committed to providing clothing and fashion solutions that combine quality, confidence, and contemporary design.',
    href: getBusinessPublicUrl('clothing'),
  },
]

const whyChooseUs = [
  {
    title: 'Professional Approach',
    description: 'We maintain high standards in every project.',
  },
  {
    title: 'Creative Solutions',
    description: 'We turn ideas into unique and practical results.',
  },
  {
    title: 'Quality First',
    description: 'We are committed to delivering excellent products and services.',
  },
  {
    title: 'Customer Focused',
    description: 'Your vision and satisfaction are at the heart of our work.',
  },
  {
    title: 'Versatile Expertise',
    description: 'Our diverse services allow us to meet a wide range of needs.',
  },
  {
    title: 'Integrity & Reliability',
    description: 'We believe in honest communication and dependable service.',
  },
]

export default function AboutOverview() {
  return (
    <div className="ahs">
      <PageHero
        title="About Minim Global Services"
        subtitle="At Minim Global Services, we believe professionalism is the foundation of every successful project. We are a dynamic and creative company providing quality services across Architecture & Design, Media, Food, and Clothing."
        image="/images/minimglobal-hero.jpg"
      />

      <section className="ahs-history">
        <div className="ahs-container">
          <div className="ahs-team-intro-inner" style={{ textAlign: 'left', maxWidth: 820 }}>
            <p className="ahs-body">
              Our diverse areas of expertise allow us to bring creativity,
              functionality, and excellence together to deliver experiences
              and solutions that meet the needs of our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="ahs-team-intro">
        <div className="ahs-container ahs-team-intro-inner" style={{ textAlign: 'left', maxWidth: 820 }}>
          <h2 className="ahs-heading">Who We Are</h2>
          <p className="ahs-body">
            Minim Global Services is built on the values of professionalism,
            creativity, quality, integrity, and customer satisfaction.
          </p>
          <p className="ahs-body ahs-body-space">
            We approach every project with attention to detail and a
            commitment to excellence. Whether we are designing a space,
            creating media content, providing food services, or developing
            clothing and fashion concepts, our goal remains the same: to
            deliver work that speaks for itself.
          </p>
        </div>
      </section>

      <section className="ahs-history" style={{ paddingTop: 24 }}>
        <div className="ahs-container">
          <div className="ahs-team-intro-inner" style={{ marginBottom: 40 }}>
            <h2 className="ahs-heading">Our Services</h2>
          </div>
          <div className="ahs-services-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <a
                  key={service.title}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ahs-service-card"
                >
                  <div className="ahs-service-icon">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3 className="ahs-service-title">{service.title}</h3>
                  <p className="ahs-service-desc">{service.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ahs-team-intro" style={{ paddingBottom: 72 }}>
        <div className="ahs-container ahs-team-intro-inner" style={{ textAlign: 'left', maxWidth: 820 }}>
          <h2 className="ahs-heading">Our Commitment</h2>
          <p className="ahs-body">
            At Minim Global Services, we don&rsquo;t simply provide
            services&mdash;we build relationships and create value.
          </p>
          <p className="ahs-body ahs-body-space">
            We understand that every client is different, which is why we
            take the time to understand your vision and deliver solutions
            tailored to your needs. Our commitment to professionalism means
            that we value quality, reliability, timely delivery, and customer
            satisfaction in everything we do.
          </p>
        </div>
      </section>

      <section className="ahs-why">
        <div className="ahs-container">
          <h2 className="ahs-heading ahs-heading-light ahs-heading-center">
            Why Choose Minim Global Services?
          </h2>
          <div className="ahs-why-grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="ahs-why-item">
                <span className="ahs-why-icon">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </span>
                <div className="ahs-why-text">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ahs-cta-band">
        <div className="ahs-container ahs-cta-band-inner">
          <h2 className="ahs-heading">Let&rsquo;s Create Something Exceptional</h2>
          <p className="ahs-body">
            Whether you have a new space to design, a story to tell, a brand
            to promote, food to celebrate with, or a style to bring to life,
            Minim Global Services is ready to work with you.
          </p>
          <Link href="/contact" className="ahs-btn">
            <span className="ahs-btn-text">Get in Touch</span>
            <ArrowRight size={16} className="ahs-btn-icon" />
          </Link>
          <p className="ahs-cta-tagline">
            Your vision. Our expertise. Professional results.
          </p>
        </div>
      </section>
    </div>
  )
}

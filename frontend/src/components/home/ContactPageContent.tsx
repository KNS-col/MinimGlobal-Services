'use client'

import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/icons/BrandIcons'
import ContactForm from '@/components/home/ContactForm'
import Link from 'next/link'

const channels = [
  {
    title: 'Phone',
    detail: 'Call us during working hours',
    value: '033 88 33 88',
    href: 'tel:033883388',
  },
  {
    title: 'Email',
    detail: 'Send us a message anytime',
    value: 'info@minimglobal.com',
    href: 'mailto:info@minimglobal.com',
  },
  {
    title: 'Businesses',
    detail: 'Explore our divisions',
    value: 'View Our Businesses',
    href: '/businesses',
  },
]

export default function ContactPageContent() {
  return (
    <div className="ahs">
      <section className="ahs-team-intro">
        <div className="ahs-container ahs-team-intro-inner">
          <h2 className="ahs-heading">Contact Our Team</h2>
          <p className="ahs-team-intro-desc">
            Our team is available to answer questions about our services,
            discuss partnership opportunities, or provide information about
            any of our divisions.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
      </section>

      <section className="dp-section">
        <div className="ahs-container">
          <div className="dp-contact-channels">
            {channels.map((channel) => (
              <div key={channel.title} className="dp-channel-card">
                <h3>{channel.title}</h3>
                <p>{channel.detail}</p>
                {channel.href.startsWith('/') ? (
                  <Link href={channel.href}>{channel.value}</Link>
                ) : (
                  <a href={channel.href}>{channel.value}</a>
                )}
              </div>
            ))}
          </div>

          <div className="dp-contact-grid">
            <div>
              <h2 className="ahs-heading">Visit Us</h2>
              <p className="ahs-body" style={{ marginBottom: 24 }}>
                Use the details below or the form to contact us directly.
                Our office in Freetown welcomes visitors during working
                hours.
              </p>
              <div className="dp-contact-info">
                <div>
                  <MapPin size={22} />
                  <div>
                    <h4>Location</h4>
                    <p>Freetown, Sierra Leone</p>
                  </div>
                </div>
                <div>
                  <Mail size={22} />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
                  </div>
                </div>
                <div>
                  <Phone size={22} />
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:033883388">033 88 33 88</a>
                  </div>
                </div>
              </div>

              <div className="dp-contact-social">
                <h4>Follow Us</h4>
                <div>
                  <a href="https://www.tiktok.com/@minim_studios" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <TikTokIcon size={16} />
                  </a>
                  <a href="https://www.facebook.com/share/1PUGMhUyWw/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FacebookIcon size={16} />
                  </a>
                  <a href="https://www.instagram.com/studiosminim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <InstagramIcon size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="ahs-heading">Send us a Message</h2>
              <ContactForm embedded />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/icons/BrandIcons'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="dh-footer">
      <div className="dh-container dh-footer-grid">
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/images/logo.png"
              alt="Minim Global"
              width={180}
              height={50}
              className="object-contain"
            />
          </Link>
          <p className="dh-footer-copy">
            Minim Global Services is a leading company dedicated to providing
            top quality services across various industries.
          </p>
          <div className="dh-footer-social">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="dh-footer-heading">Quick Links</h4>
          <ul className="dh-footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/businesses">Our Businesses</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="dh-footer-heading">Contact Company</h4>
          <ul className="dh-footer-contact">
            <li>
              <MapPin size={18} />
              <span>Freetown, Sierra Leone</span>
            </li>
            <li>
              <Phone size={18} />
              <a href="tel:033883388">033 88 33 88</a>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="dh-footer-heading">Newsletter</h4>
          <p className="dh-footer-copy">
            Subscribe to our newsletter &amp; events to stay updated.
          </p>
          <form onSubmit={handleSubscribe} className="dh-footer-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="dh-footer-bottom">
        <div className="dh-container dh-footer-bottom-inner">
          <p>&copy; 2026 Minim Global Services. All rights reserved.</p>
          <div className="dh-footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

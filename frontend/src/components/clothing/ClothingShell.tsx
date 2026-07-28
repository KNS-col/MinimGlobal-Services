'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { getApexPublicUrl, getDivisionHref } from '@/data/businesses'
import { CLOTHING_NAV, CLOTHING_PROMO } from '@/data/clothing'

export default function ClothingShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const apexUrl = getApexPublicUrl()
  const href = (path: string) => getDivisionHref('clothing', path, pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const publicPath = pathname.replace(/^\/businesses\/clothing/, '') || '/'

  const isActive = (href: string) => {
    if (href === '/') return publicPath === '/'
    return publicPath === href || publicPath.startsWith(`${href}/`)
  }

  return (
    <div className="mc-site">
      <div className="mc-promo">
        <div className="mc-container">{CLOTHING_PROMO}</div>
      </div>

      <header
        className={`mc-nav ${scrolled || publicPath !== '/' ? 'is-scrolled' : ''} ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        <div className="mc-nav-top">
          <div className="mc-container mc-nav-top-inner">
            <a href="tel:033883388">033 88 33 88</a>
            <a href="mailto:info@minimglobal.com">wardrobe@minimglobal.com</a>
          </div>
        </div>
        <div className="mc-nav-inner">
          <a href={href('/')} className="mc-nav-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Minim Clothing"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          <nav className="mc-nav-links" aria-label="Primary">
            {CLOTHING_NAV.map((link) => (
              <a
                key={link.href}
                href={href(link.href)}
                className={`mc-nav-link ${isActive(link.href) ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mc-nav-actions">
            <button
              type="button"
              className="mc-nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`mc-nav-mobile ${menuOpen ? 'is-open' : ''}`}>
          {CLOTHING_NAV.map((link) => (
            <a key={link.href} href={href(link.href)} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {children}

      <footer className="mc-footer">
        <div className="mc-container mc-footer-grid">
          <div>
            <h4>Store Location</h4>
            <p>Freetown, Sierra Leone</p>
            <p>
              <a href="tel:033883388">033 88 33 88</a>
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {CLOTHING_NAV.map((link) => (
                <li key={link.href}>
                  <a href={href(link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <p>
              <a href={apexUrl}>Part of Minim Global</a>
            </p>
            <p>
              <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
            </p>
          </div>
        </div>
        <div className="mc-footer-bottom">
          <div className="mc-container footer-bottom-row">
            <p>&copy; {new Date().getFullYear()} Minim Clothing. All rights reserved.</p>
            <div className="legal-links">
              <a href={href('/privacy')}>Privacy Policy</a>
              <a href={href('/terms')}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

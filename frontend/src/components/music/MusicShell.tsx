'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { getApexPublicUrl, getDivisionHref } from '@/data/businesses'

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
] as const

const directoryLinks = [
  { href: '/artists', label: 'Artists' },
  { href: '/instruments', label: 'Instruments' },
] as const

const secondaryLinks = [
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
] as const

export default function MusicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [directoryOpen, setDirectoryOpen] = useState(false)
  const apexUrl = getApexPublicUrl()
  const href = (path: string) => getDivisionHref('music', path, pathname)

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
    setDirectoryOpen(false)
  }, [pathname])

  const publicPath = pathname.replace(/^\/businesses\/music/, '') || '/'

  const isActive = (linkHref: string) => {
    if (linkHref === '/') return publicPath === '/'
    return publicPath === linkHref || publicPath.startsWith(`${linkHref}/`)
  }

  const isDirectoryActive = directoryLinks.some((link) => isActive(link.href))

  return (
    <div className="mm-site">
      <header
        className={`mm-nav ${scrolled || publicPath !== '/' ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}
      >
        <div className="mm-nav-inner">
          <a href={href('/')} className="mm-nav-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/Logo.png"
              alt="Minim Music"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          <nav className="mm-nav-links" aria-label="Primary">
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={href(link.href)}
                className={`mm-nav-link ${isActive(link.href) ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <div className="mm-nav-item">
              <a
                href={href(directoryLinks[0].href)}
                className={`mm-nav-link ${isDirectoryActive ? 'is-active' : ''}`}
              >
                Artists &amp; Instruments
                <ChevronDown size={14} />
              </a>
              <div className="mm-nav-dropdown">
                {directoryLinks.map((link) => (
                  <a
                    key={link.href}
                    href={href(link.href)}
                    className={isActive(link.href) ? 'is-active' : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                href={href(link.href)}
                className={`mm-nav-link ${isActive(link.href) ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="mm-nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mm-nav-mobile ${menuOpen ? 'is-open' : ''}`}>
          {primaryLinks.map((link) => (
            <a key={link.href} href={href(link.href)} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="mm-nav-mobile-row">
            <a href={href(directoryLinks[0].href)} onClick={() => setMenuOpen(false)}>
              Artists &amp; Instruments
            </a>
            <button
              type="button"
              aria-label="Toggle Artists and Instruments submenu"
              aria-haspopup="menu"
              aria-expanded={directoryOpen}
              onClick={() => setDirectoryOpen(!directoryOpen)}
            >
              <ChevronDown size={16} className={directoryOpen ? 'rotate-180' : ''} />
            </button>
          </div>
          {directoryOpen && (
            <div className="mm-nav-mobile-sub" role="menu">
              {directoryLinks.map((link) => (
                <a key={link.href} href={href(link.href)} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
          {secondaryLinks.map((link) => (
            <a key={link.href} href={href(link.href)} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {children}

      <footer className="mm-footer">
        <div className="mm-container mm-footer-grid">
          <div>
            <h4>Minim Music</h4>
            <p>Live jazz, artist management, performances, and instruments.</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>
              <a href="tel:033883388">033 88 33 88</a>
            </p>
          </div>
          <div>
            <h4>Email</h4>
            <p>
              <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <p>
              <a href={href('/team')}>Team</a>
            </p>
            <p>
              <a href={apexUrl}>Part of Minim Global</a>
            </p>
          </div>
        </div>
        <div className="mm-footer-bottom">
          <div className="mm-container footer-bottom-row">
            <p>&copy; {new Date().getFullYear()} Minim Music. All rights reserved.</p>
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

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { getApexPublicUrl, getDivisionHref } from '@/data/businesses'
import { ARCHITECT_NAV } from '@/data/architect'

export default function ArchitectShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const apexUrl = getApexPublicUrl()
  const href = (path: string) => getDivisionHref('architect', path, pathname)

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

  const publicPath = pathname.replace(/^\/businesses\/architect/, '') || '/'

  const isActive = (href: string) => {
    if (href === '/') return publicPath === '/'
    return publicPath === href || publicPath.startsWith(`${href}/`)
  }

  return (
    <div className="ma-site">
      <header className={`ma-nav ${scrolled || publicPath !== '/' ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
        <div className="ma-nav-top">
          <div className="ma-container ma-nav-top-inner">
            <a href="tel:033883388">033 88 33 88</a>
            <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
          </div>
        </div>
        <div className="ma-nav-inner">
          <a href={href('/')} className="ma-nav-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/Logo.png"
              alt="Minim Architects, Designers & Engineers"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          <nav className="ma-nav-links" aria-label="Primary">
            {ARCHITECT_NAV.map((link) => (
              <a
                key={link.href}
                href={href(link.href)}
                className={`ma-nav-link ${isActive(link.href) ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="ma-nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`ma-nav-mobile ${menuOpen ? 'is-open' : ''}`}>
          {ARCHITECT_NAV.map((link) => (
            <a key={link.href} href={href(link.href)} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {children}

      <footer className="ma-footer">
        <div className="ma-container ma-footer-grid">
          <div>
            <h4>Address</h4>
            <p>Freetown, Sierra Leone</p>
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
              <a href={apexUrl}>Part of Minim Global</a>
            </p>
          </div>
        </div>
        <div className="ma-footer-bottom">
          <div className="ma-container footer-bottom-row">
            <p>&copy; {new Date().getFullYear()} Minim Architects, Designers & Engineers. All rights reserved.</p>
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

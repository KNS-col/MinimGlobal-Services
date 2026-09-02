'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { getApexPublicUrl, getDivisionHref } from '@/data/businesses'
import { FOOD_NAV } from '@/data/food'

export default function FoodShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const apexUrl = getApexPublicUrl()
  const href = (path: string) => getDivisionHref('food', path, pathname)

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

  const publicPath = pathname.replace(/^\/businesses\/food/, '') || '/'

  return (
    <div className="mf-site">
      <header
        className={`mf-nav ${scrolled || publicPath !== '/' ? 'is-scrolled' : ''} ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        <div className="mf-nav-top">
          <div className="mf-container mf-nav-top-inner">
            <a href="tel:033883388">033 88 33 88</a>
            <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
          </div>
        </div>
        <div className="mf-nav-inner">
          <a href={href('/')} className="mf-nav-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/Logo.png"
              alt="Minim Foods"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          <nav className="mf-nav-links" aria-label="Primary">
            {FOOD_NAV.map((link) => (
              <a
                key={link.href}
                href={href(link.href)}
                className={`mf-nav-link ${
                  publicPath === link.href ||
                  (link.href !== '/' && publicPath.startsWith(link.href))
                    ? 'is-active'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mf-nav-actions">
            <button
              type="button"
              className="mf-nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`mf-nav-mobile ${menuOpen ? 'is-open' : ''}`}>
          {FOOD_NAV.map((link) => (
            <a key={link.href} href={href(link.href)} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {children}

      <footer className="mf-footer">
        <div className="mf-container mf-footer-grid">
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
        <div className="mf-footer-bottom">
          <div className="mf-container footer-bottom-row">
            <p>
              &copy; {new Date().getFullYear()} Minim Foods. All rights reserved.
            </p>
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

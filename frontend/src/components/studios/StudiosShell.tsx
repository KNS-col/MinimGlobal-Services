'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { getApexPublicUrl, getDivisionHref } from '@/data/businesses'

export default function StudiosShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)
  const apexUrl = getApexPublicUrl()
  const href = (path: string) => getDivisionHref('studios', path, pathname)
  const publicPath = pathname.replace(/^\/businesses\/studios/, '') || '/'
  const mediaLinks = [
    { href: '/photography', label: 'Photography' },
    { href: '/videography', label: 'Videography' },
    { href: '/sound', label: 'Sound' },
    { href: '/displays', label: 'Displays' },
  ] as const
  const primaryLinks = [
    { href: '/design', label: 'Design' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Get in Touch' },
  ] as const
  const isMediaActive = mediaLinks.some((link) => link.href === publicPath)

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
    setMediaOpen(false)
  }, [pathname])

  return (
    <div className="ms-site">
      <header
        className={`ms-nav ${scrolled || publicPath !== '/' ? 'is-scrolled' : ''} ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        <div className="ms-nav-inner">
          <a href={href('/')} className="ms-nav-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/Logo.png"
              alt="Minim Studios"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          <nav className="ms-nav-links" aria-label="Primary">
            <div className="ms-nav-item">
              <a
                href={href('/photography')}
                className={`ms-nav-link ${isMediaActive ? 'is-active' : ''}`}
              >
                Media &amp; Production
                <ChevronDown size={14} />
              </a>
              <div className="ms-nav-dropdown">
                {mediaLinks.map((link) => (
                  <a
                    key={link.href}
                    href={href(link.href)}
                    className={publicPath === link.href ? 'is-active' : ''}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={href(link.href)}
                className={`ms-nav-link ${publicPath === link.href ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="ms-nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`ms-nav-mobile ${menuOpen ? 'is-open' : ''}`}>
          <div className="ms-nav-mobile-row">
            <a href={href('/photography')} onClick={() => setMenuOpen(false)}>
              Media &amp; Production
            </a>
            <button
              type="button"
              aria-label="Toggle Media and Production submenu"
              aria-haspopup="menu"
              aria-expanded={mediaOpen}
              onClick={() => setMediaOpen(!mediaOpen)}
            >
              <ChevronDown size={16} className={mediaOpen ? 'rotate-180' : ''} />
            </button>
          </div>
          {mediaOpen && (
            <div className="ms-nav-mobile-sub" role="menu">
              {mediaLinks.map((link) => (
                <a key={link.href} href={href(link.href)} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
          {primaryLinks.map((link) => (
            <a key={link.href} href={href(link.href)} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {children}

      <footer className="ms-footer">
        <div className="ms-container ms-footer-grid">
          <div>
            <Image
              src="/images/Logo.png"
              alt="Minim Studios"
              width={160}
              height={44}
              className="object-contain mb-4"
            />
            <p>Based in Freetown, available nationwide</p>
            <p className="ms-footer-meta">
              Freetown, Sierra Leone
              <br />
              Studio: 033 88 33 88
              <br />
              <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
            </p>
          </div>
          <div>
            <h4>Our Studios</h4>
            <ul>
              <li>
                <a href={href('/photography')}>Photography Studio</a>
              </li>
              <li>
                <a href={href('/videography')}>Videography Studio</a>
              </li>
              <li>
                <a href={href('/sound')}>Sound Studio</a>
              </li>
              <li>
                <a href={href('/displays')}>Displays Studio</a>
              </li>
              <li>
                <a href={href('/design')}>Design Studio</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href={href('/team')}>Team</a>
              </li>
              <li>
                <a href={href('/contact')}>Contact Us</a>
              </li>
              <li>
                <a href={apexUrl}>Part of Minim Global</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ms-footer-bottom">
          <div className="ms-container footer-bottom-row">
            <p>
              &copy; {new Date().getFullYear()} Minim Studios. All rights reserved.
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

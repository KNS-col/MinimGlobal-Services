'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { getBusinessPublicUrl, type BusinessSlug } from '@/data/businesses'

type NavSubLink = {
  href: string
  label: string
  slug?: BusinessSlug
}

type NavLinkItem = {
  href: string
  label: string
  dropdownKey?: 'businesses' | 'about'
  subLinks?: NavSubLink[]
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<'businesses' | 'about', boolean>
  >({
    businesses: false,
    about: false,
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen)
    return () => document.body.classList.remove('nav-open')
  }, [isOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const businessSubLinks: NavSubLink[] = [
    { href: '/businesses/studios', label: 'Minim Studios', slug: 'studios' },
    { href: '/businesses/food', label: 'Minim Food', slug: 'food' },
    { href: '/businesses/architect', label: 'Minim Architect', slug: 'architect' },
    { href: '/businesses/clothing', label: 'Minim Clothing', slug: 'clothing' },
    { href: '/businesses/music', label: 'Minim Music', slug: 'music' },
  ]

  const aboutSubLinks: NavSubLink[] = [
    { href: '/about/history', label: 'History, Mission & Vision' },
    { href: '/about/leadership', label: 'Executive Leadership' },
  ]

  const navLinks: NavLinkItem[] = [
    { href: '/', label: 'Home' },
    {
      href: '/businesses',
      label: 'Our Businesses',
      dropdownKey: 'businesses',
      subLinks: businessSubLinks,
    },
    {
      href: '/about',
      label: 'About Us',
      dropdownKey: 'about',
      subLinks: aboutSubLinks,
    },
    { href: '/contact', label: 'Contact' },
  ]

  function toggleMobileDropdown(key: 'businesses' | 'about') {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  function closeMobileMenu() {
    setIsOpen(false)
    setMobileDropdowns({
      businesses: false,
      about: false,
    })
  }

  return (
    <nav className={`dh-nav ${scrolled ? 'is-scrolled' : ''} ${isOpen ? 'is-open' : ''}`}>
      <div className="dh-nav-inner">
        <Link href="/" className="dh-nav-logo" onClick={closeMobileMenu}>
          <Image
            src="/images/logo.png"
            alt="Minim Global"
            width={140}
            height={40}
            className="object-contain dh-nav-logo-img"
            priority
          />
        </Link>

        <div className="dh-nav-links">
          {navLinks.map((link) => (
            <div key={link.href} className="dh-nav-item">
              <Link href={link.href} className="dh-nav-link">
                {link.label}
                {link.subLinks && <ChevronDown size={14} />}
              </Link>
              {link.subLinks && (
                <div className="dh-nav-dropdown">
                  {link.subLinks.map((subLink) => {
                    const href = subLink.slug
                      ? getBusinessPublicUrl(subLink.slug)
                      : subLink.href

                    if (subLink.slug) {
                      return (
                        <a
                          key={subLink.href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {subLink.label}
                        </a>
                      )
                    }

                    return (
                      <Link key={subLink.href} href={subLink.href}>
                        {subLink.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="dh-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`dh-nav-mobile ${isOpen ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <div key={link.href}>
            <div className="dh-nav-mobile-row">
              <Link
                href={link.href}
                className="flex-1"
                onClick={() => {
                  if (!link.subLinks) closeMobileMenu()
                }}
              >
                {link.label}
              </Link>
              {link.dropdownKey && link.subLinks && (
                <button
                  type="button"
                  aria-label={`Toggle ${link.label} submenu`}
                  aria-haspopup="menu"
                  aria-expanded={mobileDropdowns[link.dropdownKey]}
                  onClick={() => toggleMobileDropdown(link.dropdownKey!)}
                >
                  <ChevronDown
                    size={16}
                    className={mobileDropdowns[link.dropdownKey] ? 'rotate-180' : ''}
                  />
                </button>
              )}
            </div>
            {link.dropdownKey &&
              link.subLinks &&
              mobileDropdowns[link.dropdownKey] && (
              <div
                className="dh-nav-mobile-sub"
                id={`submenu-${link.dropdownKey}`}
                role="menu"
              >
                {link.subLinks.map((subLink) => {
                  const href = subLink.slug
                    ? getBusinessPublicUrl(subLink.slug)
                    : subLink.href

                  if (subLink.slug) {
                    return (
                      <a
                        key={subLink.href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                      >
                        {subLink.label}
                      </a>
                    )
                  }

                  return (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      onClick={closeMobileMenu}
                    >
                      {subLink.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

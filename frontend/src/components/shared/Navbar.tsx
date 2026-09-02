'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Camera,
  UtensilsCrossed,
  Building2,
  Shirt,
  Music,
  BookOpen,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { getBusinessPublicUrl, type BusinessSlug } from '@/data/businesses'

type NavSubLink = {
  href: string
  label: string
  description: string
  icon: LucideIcon
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
    {
      href: '/businesses/studios',
      label: 'Minim Studios',
      description: 'Media, production & events',
      icon: Camera,
      slug: 'studios',
    },
    {
      href: '/businesses/food',
      label: 'Minim Foods',
      description: 'Catering & hospitality',
      icon: UtensilsCrossed,
      slug: 'food',
    },
    {
      href: '/businesses/architect',
      label: 'Minim Architects, Designers & Engineers',
      description: 'Architecture & construction',
      icon: Building2,
      slug: 'architect',
    },
    {
      href: '/businesses/clothing',
      label: 'Minim Clothings',
      description: 'Fashion & apparel',
      icon: Shirt,
      slug: 'clothing',
    },
    {
      href: '/businesses/music',
      label: 'Minim Music',
      description: 'Live music & entertainment',
      icon: Music,
      slug: 'music',
    },
  ]

  const aboutSubLinks: NavSubLink[] = [
    {
      href: '/about/history',
      label: 'History, Mission & Vision',
      description: 'Our story and direction',
      icon: BookOpen,
    },
    {
      href: '/about/leadership',
      label: 'Executive Leadership',
      description: 'Meet our leaders',
      icon: Users,
    },
  ]

  const navLinks: NavLinkItem[] = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    {
      href: '/about',
      label: 'About Us',
      dropdownKey: 'about',
      subLinks: aboutSubLinks,
    },
    {
      href: '/businesses',
      label: 'Our Businesses',
      dropdownKey: 'businesses',
      subLinks: businessSubLinks,
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
            src="/images/Logo.png"
            alt="Minim Global"
            width={130}
            height={37}
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
                  <p className="dh-nav-dropdown-heading">
                    {link.dropdownKey === 'businesses' ? 'Our Divisions' : 'About Minim Global'}
                  </p>
                  <div className="dh-nav-dropdown-list">
                    {link.subLinks.map((subLink) => {
                      const href = subLink.slug
                        ? getBusinessPublicUrl(subLink.slug)
                        : subLink.href
                      const Icon = subLink.icon

                      const content = (
                        <>
                          <span className="dh-nav-dropdown-icon">
                            <Icon size={17} strokeWidth={1.75} />
                          </span>
                          <span className="dh-nav-dropdown-text">
                            <span className="dh-nav-dropdown-label">{subLink.label}</span>
                            <span className="dh-nav-dropdown-desc">{subLink.description}</span>
                          </span>
                          {subLink.slug ? (
                            <ArrowUpRight size={14} className="dh-nav-dropdown-caret" />
                          ) : (
                            <ChevronRight size={14} className="dh-nav-dropdown-caret" />
                          )}
                        </>
                      )

                      if (subLink.slug) {
                        return (
                          <a
                            key={subLink.href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {content}
                          </a>
                        )
                      }

                      return (
                        <Link key={subLink.href} href={subLink.href}>
                          {content}
                        </Link>
                      )
                    })}
                  </div>
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

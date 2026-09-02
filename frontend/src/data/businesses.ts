export type BusinessSlug = 'studios' | 'food' | 'architect' | 'clothing' | 'music'

export type BusinessNavLink = {
  href: string
  label: string
}

export type Business = {
  slug: BusinessSlug
  subdomain: string
  name: string
  path: string
  navLinks: BusinessNavLink[]
  /** Flip to true once a division's subdomain/site is ready for public traffic. */
  live: boolean
}

/** DNS: point studios/food/architect/clothing/music (or *) at the same host as the apex site. */
export const businesses: Business[] = [
  {
    slug: 'studios',
    subdomain: 'studios',
    name: 'Minim Studios',
    path: '/businesses/studios',
    live: false,
    navLinks: [
      { href: '/photography', label: 'Photography' },
      { href: '/videography', label: 'Videography' },
      { href: '/sound', label: 'Sound' },
      { href: '/displays', label: 'Displays' },
      { href: '/design', label: 'Design' },
      { href: '/team', label: 'Team' },
      { href: '/contact', label: 'Get in Touch' },
    ],
  },
  {
    slug: 'food',
    subdomain: 'food',
    name: 'Minim Foods',
    path: '/businesses/food',
    live: false,
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/catering', label: 'Catering' },
      { href: '/team', label: 'Team' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    slug: 'architect',
    subdomain: 'architect',
    name: 'Minim Architects, Designers & Engineers',
    path: '/businesses/architect',
    live: false,
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/services', label: 'Services' },
      { href: '/expenditure', label: 'Expenditure' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    slug: 'clothing',
    subdomain: 'clothing',
    name: 'Minim Clothings',
    path: '/businesses/clothing',
    live: false,
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/services', label: 'Services' },
      { href: '/team', label: 'Team' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    slug: 'music',
    subdomain: 'music',
    name: 'Minim Music',
    path: '/businesses/music',
    live: false,
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/services', label: 'Services' },
      { href: '/artists', label: 'Artists' },
      { href: '/instruments', label: 'Instruments' },
      { href: '/team', label: 'Team' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export const BUSINESS_SLUGS = businesses.map((b) => b.slug)

export function getRootDomain(): string {
  return (process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost').toLowerCase()
}

export function isLocalRootDomain(root = getRootDomain()): boolean {
  return root === 'localhost' || root.endsWith('.localhost')
}

/** True when a real production domain is configured (not localhost). */
export function hasConfiguredPublicDomain(root = getRootDomain()): boolean {
  return Boolean(root) && !isLocalRootDomain(root)
}

/**
 * Apex → subdomain redirects only for local `*.localhost` or when the
 * request host matches a configured production root domain.
 * Prevents `/businesses/studios` → `studios.localhost` on Vercel.
 */
export function shouldRedirectApexToSubdomain(hostHeader: string): boolean {
  const host = hostHeader.split(':')[0].toLowerCase()
  const root = getRootDomain()

  if (host === 'localhost' || host === '127.0.0.1') return true

  if (hasConfiguredPublicDomain(root)) {
    return host === root || host === `www.${root}`
  }

  return false
}

/** Whether the current browser host should use subdomain public URLs. */
export function shouldUseSubdomainPublicUrls(hostname?: string): boolean {
  const host =
    hostname ||
    (typeof window !== 'undefined' ? window.location.hostname : '')
  const root = getRootDomain()

  if (!host) return hasConfiguredPublicDomain(root)

  if (host === 'localhost' || host.endsWith('.localhost')) return true

  if (hasConfiguredPublicDomain(root)) {
    return (
      host === root ||
      host === `www.${root}` ||
      host.endsWith(`.${root}`)
    )
  }

  return false
}

/** Path on the apex site for a division route (`/businesses/studios/contact`). */
export function getBusinessPath(slug: BusinessSlug, path = '/'): string {
  const rest =
    !path || path === '/'
      ? ''
      : path.startsWith('/')
        ? path
        : `/${path}`
  return `/businesses/${slug}${rest}`
}

/**
 * Division-relative href that works on both subdomain hosts and apex paths.
 * Short paths (`/contact`) stay short on subdomains; get prefixed on apex.
 */
export function getDivisionHref(
  slug: BusinessSlug,
  path: string,
  pathname?: string
): string {
  const current =
    pathname ||
    (typeof window !== 'undefined' ? window.location.pathname : '')
  const onApexPath = current.startsWith(`/businesses/${slug}`)
  if (onApexPath || !shouldUseSubdomainPublicUrls()) {
    return getBusinessPath(slug, path)
  }
  if (!path || path === '/') return '/'
  return path.startsWith('/') ? path : `/${path}`
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug)
}

export function getBusinessBySubdomain(subdomain: string): Business | undefined {
  return businesses.find((b) => b.subdomain === subdomain.toLowerCase())
}

export function getBusinessByHost(hostHeader: string): Business | undefined {
  const host = hostHeader.split(':')[0].toLowerCase()
  const root = getRootDomain()

  if (host === root || host === `www.${root}`) return undefined

  // Local: studios.localhost
  if (host.endsWith('.localhost')) {
    const sub = host.slice(0, -'.localhost'.length)
    if (!sub || sub.includes('.')) return undefined
    return getBusinessBySubdomain(sub)
  }

  if (!hasConfiguredPublicDomain(root)) return undefined

  const suffix = `.${root}`
  if (!host.endsWith(suffix)) return undefined

  const sub = host.slice(0, -suffix.length)
  if (!sub || sub.includes('.')) return undefined

  return getBusinessBySubdomain(sub)
}

function buildOrigin(subOrHost: string, port?: string): string {
  const root = getRootDomain()
  const isLocal = isLocalRootDomain(root)
  const protocol = isLocal ? 'http' : 'https'
  const portSuffix =
    port && port !== '80' && port !== '443' ? `:${port}` : isLocal ? ':3000' : ''
  return `${protocol}://${subOrHost}${portSuffix}`
}

/** Public shareable URL for a division (subdomain when available, else path). */
export function getBusinessPublicUrl(slug: BusinessSlug, requestPort?: string): string {
  const biz = getBusinessBySlug(slug)
  if (!biz) return `/businesses/${slug}`

  // Division site isn't ready for public traffic yet — send visitors to an
  // in-app "under development" page instead of a dead subdomain or WIP content.
  if (!biz.live) {
    return `/coming-soon?business=${slug}`
  }

  if (typeof window !== 'undefined') {
    if (!shouldUseSubdomainPublicUrls(window.location.hostname)) {
      return getBusinessPath(slug)
    }
    const { protocol, port } = window.location
    const portSuffix = port && port !== '80' && port !== '443' ? `:${port}` : ''
    return `${protocol}//${biz.subdomain}.${getRootDomain()}${portSuffix}`
  }

  // SSR / build: prefer apex paths unless a real public domain is configured
  if (!hasConfiguredPublicDomain()) {
    return getBusinessPath(slug)
  }

  return buildOrigin(`${biz.subdomain}.${getRootDomain()}`, requestPort)
}

export function getApexPublicUrl(requestPort?: string): string {
  const root = getRootDomain()

  if (typeof window !== 'undefined') {
    const { protocol, hostname, port } = window.location
    const portSuffix = port && port !== '80' && port !== '443' ? `:${port}` : ''
    const business = getBusinessByHost(hostname)

    if (business) {
      if (isLocalRootDomain(root)) {
        return `${protocol}//localhost${portSuffix}`
      }
      if (hasConfiguredPublicDomain(root)) {
        return `${protocol}//${root}${portSuffix}`
      }
    }

    // Already on apex (e.g. *.vercel.app) — stay on this host
    return `${protocol}//${hostname}${portSuffix}`
  }

  if (!hasConfiguredPublicDomain(root)) {
    return '/'
  }

  return buildOrigin(root, requestPort)
}

import { NextRequest, NextResponse } from 'next/server'
import {
  BUSINESS_SLUGS,
  getBusinessByHost,
  getBusinessBySlug,
  getRootDomain,
  shouldRedirectApexToSubdomain,
  type BusinessSlug,
} from '@/data/businesses'
import { isStudiosPublicPath } from '@/data/studios'
import { isFoodPublicPath } from '@/data/food'
import { isArchitectPublicPath } from '@/data/architect'
import { isClothingPublicPath } from '@/data/clothing'
import { isMusicPublicPath } from '@/data/music'

const BUSINESS_HEADER = 'x-business-slug'

function getRequestPort(request: NextRequest): string | undefined {
  const host = request.headers.get('host') || ''
  const match = host.match(/:(\d+)$/)
  return match?.[1]
}

function divisionOrigin(subdomain: string, request: NextRequest): string {
  const root = getRootDomain()
  const port = getRequestPort(request)
  const isLocal = root === 'localhost' || root.endsWith('.localhost')
  const portSuffix =
    port && port !== '80' && port !== '443'
      ? `:${port}`
      : isLocal && !port
        ? ':3000'
        : port
          ? `:${port}`
          : ''
  const proto =
    request.headers.get('x-forwarded-proto') || (isLocal ? 'http' : 'https')
  return `${proto}://${subdomain}.${root}${portSuffix}`
}

function isAssetPath(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname === '/favicon.ico' ||
    /\.\w{2,5}$/.test(pathname)
  )
}

function withBusinessHeader(
  request: NextRequest,
  slug: string,
  rewritePath: string
) {
  const rewriteUrl = request.nextUrl.clone()
  rewriteUrl.pathname = rewritePath
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set(BUSINESS_HEADER, slug)
  return NextResponse.rewrite(rewriteUrl, {
    request: { headers: requestHeaders },
  })
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const { pathname } = request.nextUrl
  const business = getBusinessByHost(host)

  // Apex: redirect /businesses/{slug}[/...] to subdomain when routing is enabled
  // (local *.localhost, or configured production domain). Skip on *.vercel.app.
  if (!business) {
    const match = pathname.match(/^\/businesses\/([^/]+)(?:\/(.*))?\/?$/)
    if (
      match &&
      BUSINESS_SLUGS.includes(match[1] as BusinessSlug) &&
      shouldRedirectApexToSubdomain(host)
    ) {
      const slug = match[1] as BusinessSlug
      const biz = getBusinessBySlug(slug)
      if (biz) {
        const rest = match[2] ? `/${match[2].replace(/\/$/, '')}` : '/'
        // Multi-page divisions: preserve subpath. Clothing/other single-page: home only.
        const multiPage =
          slug === 'studios' ||
          slug === 'food' ||
          slug === 'architect' ||
          slug === 'clothing' ||
          slug === 'music'
        const destPath =
          multiPage
            ? rest === '/' || rest === ''
              ? '/'
              : rest
            : '/'
        if (
          slug === 'studios' &&
          rest !== '/' &&
          rest !== '' &&
          !isStudiosPublicPath(rest)
        ) {
          return NextResponse.redirect(
            new URL('/', divisionOrigin(biz.subdomain, request)),
            308
          )
        }
        if (
          slug === 'food' &&
          rest !== '/' &&
          rest !== '' &&
          !isFoodPublicPath(rest)
        ) {
          return NextResponse.redirect(
            new URL('/', divisionOrigin(biz.subdomain, request)),
            308
          )
        }
        if (
          slug === 'architect' &&
          rest !== '/' &&
          rest !== '' &&
          !isArchitectPublicPath(rest)
        ) {
          return NextResponse.redirect(
            new URL('/', divisionOrigin(biz.subdomain, request)),
            308
          )
        }
        if (
          slug === 'clothing' &&
          rest !== '/' &&
          rest !== '' &&
          !isClothingPublicPath(rest)
        ) {
          return NextResponse.redirect(
            new URL('/', divisionOrigin(biz.subdomain, request)),
            308
          )
        }
        if (
          slug === 'music' &&
          rest !== '/' &&
          rest !== '' &&
          !isMusicPublicPath(rest)
        ) {
          return NextResponse.redirect(
            new URL('/', divisionOrigin(biz.subdomain, request)),
            308
          )
        }
        const url = new URL(destPath, divisionOrigin(biz.subdomain, request))
        return NextResponse.redirect(url, 308)
      }
    }
    return NextResponse.next()
  }

  if (isAssetPath(pathname)) {
    const res = NextResponse.next()
    res.headers.set(BUSINESS_HEADER, business.slug)
    return res
  }

  // Studios subdomain — multi-page site
  if (business.slug === 'studios') {
    if (pathname.startsWith('/businesses/studios')) {
      const rest = pathname.replace(/^\/businesses\/studios/, '') || '/'
      const clean = rest === '' ? '/' : rest
      return NextResponse.redirect(new URL(clean, request.url), 308)
    }

    if (pathname.startsWith('/businesses')) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    if (!isStudiosPublicPath(pathname)) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    const rewritePath =
      pathname === '/' ? '/businesses/studios' : `/businesses/studios${pathname}`
    return withBusinessHeader(request, business.slug, rewritePath)
  }

  // Food subdomain — multi-page stock sheets site
  if (business.slug === 'food') {
    if (pathname.startsWith('/businesses/food')) {
      const rest = pathname.replace(/^\/businesses\/food/, '') || '/'
      const clean = rest === '' ? '/' : rest
      return NextResponse.redirect(new URL(clean, request.url), 308)
    }

    if (pathname.startsWith('/businesses')) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    if (!isFoodPublicPath(pathname)) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    const rewritePath =
      pathname === '/' ? '/businesses/food' : `/businesses/food${pathname}`
    return withBusinessHeader(request, business.slug, rewritePath)
  }

  // Architect subdomain — multi-page site
  if (business.slug === 'architect') {
    if (pathname.startsWith('/businesses/architect')) {
      const rest = pathname.replace(/^\/businesses\/architect/, '') || '/'
      const clean = rest === '' ? '/' : rest
      return NextResponse.redirect(new URL(clean, request.url), 308)
    }

    if (pathname.startsWith('/businesses')) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    if (!isArchitectPublicPath(pathname)) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    const rewritePath =
      pathname === '/'
        ? '/businesses/architect'
        : `/businesses/architect${pathname}`
    return withBusinessHeader(request, business.slug, rewritePath)
  }

  // Clothing subdomain — multi-page storefront
  if (business.slug === 'clothing') {
    if (pathname.startsWith('/businesses/clothing')) {
      const rest = pathname.replace(/^\/businesses\/clothing/, '') || '/'
      const clean = rest === '' ? '/' : rest
      return NextResponse.redirect(new URL(clean, request.url), 308)
    }

    if (pathname.startsWith('/businesses')) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    if (!isClothingPublicPath(pathname)) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    const rewritePath =
      pathname === '/'
        ? '/businesses/clothing'
        : `/businesses/clothing${pathname}`
    return withBusinessHeader(request, business.slug, rewritePath)
  }

  // Music subdomain — multi-page music services site
  if (business.slug === 'music') {
    if (pathname.startsWith('/businesses/music')) {
      const rest = pathname.replace(/^\/businesses\/music/, '') || '/'
      const clean = rest === '' ? '/' : rest
      return NextResponse.redirect(new URL(clean, request.url), 308)
    }

    if (pathname.startsWith('/businesses')) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    if (!isMusicPublicPath(pathname)) {
      return NextResponse.redirect(new URL('/', request.url), 308)
    }

    const rewritePath =
      pathname === '/' ? '/businesses/music' : `/businesses/music${pathname}`
    return withBusinessHeader(request, business.slug, rewritePath)
  }

  // Other division subdomains — single home page only
  if (pathname.startsWith('/businesses')) {
    return NextResponse.redirect(new URL('/', request.url), 308)
  }

  if (pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url), 308)
  }

  return withBusinessHeader(request, business.slug, business.path)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}

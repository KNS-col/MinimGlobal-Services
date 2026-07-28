export const STUDIO_DIVISIONS = [
  {
    slug: 'photography',
    href: '/photography',
    label: 'Photography',
    fullName: 'Photography Studio',
    description:
      'Professional photo sessions for brands, products, events, and people in studio or on location.',
    image: '/images/Hero-1.jpg',
  },
  {
    slug: 'videography',
    href: '/videography',
    label: 'Videography',
    fullName: 'Videography Studio',
    description:
      'Full service video production from concept to delivery: commercials, brand films, and events.',
    image: '/images/Hero-6.jpg',
  },
  {
    slug: 'sound',
    href: '/sound',
    label: 'Sound',
    fullName: 'Sound Studio',
    description:
      'Live sound reinforcement, studio recording, mixing, and sound design for events, podcasts, ads, and film.',
    image: '/images/Hero-2.jpeg',
  },
  {
    slug: 'displays',
    href: '/displays',
    label: 'Displays',
    fullName: 'Displays Studio',
    description:
      'Event lighting, LED walls, staging, and visual production that transforms venues and captivates audiences.',
    image: '/images/Hero-4.jpg',
  },
  {
    slug: 'design',
    href: '/design',
    label: 'Design',
    fullName: 'Design Studio',
    description:
      'Creative design for brands, campaigns, packaging, and digital, concept through final artwork.',
    image: '/images/Hero-5.jpg',
  },
] as const

/** Primary nav: the five studios + company links */
export const STUDIOS_NAV = [
  ...STUDIO_DIVISIONS.map((s) => ({ href: s.href, label: s.label })),
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Get in Touch' },
] as const

/** Public paths allowed on the studios subdomain (rewritten under /businesses/studios). */
export const STUDIOS_PUBLIC_PATHS = [
  '/',
  '/photography',
  '/videography',
  '/sound',
  '/displays',
  '/design',
  '/team',
  '/contact',
  '/privacy',
  '/terms',
  // legacy
  '/headshots',
] as const

export type StudiosPublicPath = (typeof STUDIOS_PUBLIC_PATHS)[number]

export function isStudiosPublicPath(pathname: string): boolean {
  return (STUDIOS_PUBLIC_PATHS as readonly string[]).includes(pathname)
}

export type ClothingNavLink = {
  href: string
  label: string
}

export const CLOTHING_NAV: ClothingNavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export type ClothingService = {
  id: string
  title: string
  summary: string
  description: string
  image: string
}

const IMAGES = {
  h1: '/images/Hero-1.jpg',
  h2: '/images/Hero-2.jpeg',
  h3: '/images/Hero-3.jpg',
  h4: '/images/Hero-4.jpg',
  h5: '/images/Hero-5.jpg',
  h6: '/images/Hero-6.jpg',
} as const

export const CLOTHING_PROMO =
  'Wholesale, uniforms, special wear, and family wear made and delivered across Sierra Leone.'

export const CLOTHING_SERVICES: ClothingService[] = [
  {
    id: 'wholesale',
    title: 'Wholesale Supply',
    summary:
      'Bulk pricing for retailers, NGOs, schools, and corporate buyers across Sierra Leone.',
    description:
      'Minim Clothing supplies wholesale apparel for shops, institutions, and organisations. Tell us your quantities, branding needs, and delivery timeline and we will prepare a quote for cartons, packs, and custom-labelled stock.',
    image: IMAGES.h3,
  },
  {
    id: 'uniforms',
    title: 'Uniform Programmes',
    summary:
      'School, corporate, hospitality, security, and medical uniforms measured and delivered as a set.',
    description:
      'From school batches to bank and hospitality uniforms, we manage measurement, production, branding, and delivery so every team looks consistent and work-ready.',
    image: IMAGES.h4,
  },
  {
    id: 'special',
    title: 'Special Wear & Events',
    summary:
      'Wedding parties, graduations, choir robes, and cultural ceremony outfits made for the occasion.',
    description:
      'Special wear is crafted for moments that matter. We design and tailor wedding parties, graduation looks, church and choir garments, and cultural outfits with fittings and group coordination.',
    image: IMAGES.h6,
  },
  {
    id: 'family',
    title: 'Family Wear & Tailoring',
    summary:
      'Matching family sets, kidswear, and custom fittings for everyday and celebrations.',
    description:
      'Family wear covers matching sets, kids essentials, and tailored pieces for parents. Bring the whole family for fittings or send sizes for batch production ahead of holidays and events.',
    image: IMAGES.h5,
  },
]

export type ClothingTeamMember = {
  name: string
  role: string
  initials: string
  bio: string
}

export const CLOTHING_TEAM: ClothingTeamMember[] = [
  {
    name: 'Mariama Bah',
    role: 'Fashion Designer',
    initials: 'MB',
    bio: 'Leads design for special wear, family collections, and custom ceremonial outfits.',
  },
  {
    name: 'Wholesale Lead',
    role: 'Bulk & Partner Orders',
    initials: 'WL',
    bio: 'Coordinates carton pricing, retailer packs, and corporate wholesale deliveries.',
  },
  {
    name: 'Uniform Supervisor',
    role: 'School & Workplace Kits',
    initials: 'US',
    bio: 'Manages measurements, branding, and delivery for school and staff uniform programmes.',
  },
  {
    name: 'Tailoring Manager',
    role: 'Fit & Alterations',
    initials: 'TM',
    bio: 'Oversees fittings, alterations, and made-to-measure finishing for special and family wear.',
  },
]

export const CLOTHING_PUBLIC_PATHS = [
  '/',
  '/services',
  '/team',
  '/contact',
  '/privacy',
  '/terms',
] as const

export function isClothingPublicPath(pathname: string): boolean {
  return (CLOTHING_PUBLIC_PATHS as readonly string[]).includes(pathname)
}

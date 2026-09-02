export type MusicService = {
  id: string
  path: string
  title: string
  shortTitle: string
  summary: string
  heroImage: string
  paragraphs: string[]
  bullets: string[]
}

export type MusicArtist = {
  id: string
  name: string
  role: string
  blurb: string
  image: string
}

export type MusicInstrument = {
  id: string
  name: string
  category: 'sale' | 'rental' | 'both'
  blurb: string
  image: string
}

export type MusicTestimonial = {
  quote: string
  name: string
  role: string
}

const IMAGES = {
  h1: '/images/minim-music.jpg',
  h2: '/images/minim-music.jpg',
  h3: '/images/minim-music.jpg',
  h4: '/images/minim-music.jpg',
  h5: '/images/minim-music.jpg',
  h6: '/images/minim-music.jpg',
} as const

export const MUSIC_LEAD =
  'Minim Music is your gateway to live jazz, professional stage performances, artist career support, and a trusted instrument outlet with rental for venues, schools, and working musicians.'

export const MUSIC_INTRO =
  'In a scene where stages and careers need real support, we open doors for artists and event hosts across Freetown and Sierra Leone — from intimate jazz nights to full live productions.'

export const MUSIC_SERVICES: MusicService[] = [
  {
    id: 'jazz',
    path: '/services/jazz',
    title: 'Live Jazz Performances',
    shortTitle: 'Live Jazz',
    summary:
      'Intimate and festival-ready jazz sets for hotels, corporate events, private dinners, and cultural nights.',
    heroImage: IMAGES.h2,
    paragraphs: [
      'Our live jazz programme brings polished ensembles and featured soloists to venues that want atmosphere with real musical craft.',
      'From cocktail hours to headline sets, we match the lineup, repertoire, and production level to your room, audience, and schedule.',
    ],
    bullets: [
      'Trio to full ensemble bookings',
      'Hotel lounge and dinner jazz',
      'Corporate and VIP entertainment',
      'Custom set lists and guest features',
      'Sound and stage coordination',
    ],
  },
  {
    id: 'management',
    path: '/services/management',
    title: 'Artist Management',
    shortTitle: 'Management',
    summary:
      'Career guidance, booking support, and day-to-day representation so artists can focus on the music.',
    heroImage: IMAGES.h1,
    paragraphs: [
      'We manage emerging and established artists with clear strategy — bookings, brand presentation, release timing, and partner relationships.',
      'Whether you need full representation or project-based support, Minim Music acts as a practical partner between the artist and the industry.',
    ],
    bullets: [
      'Booking and calendar management',
      'Contract and fee negotiation',
      'Press and profile support',
      'Tour and event planning',
      'Brand and partnership introductions',
    ],
  },
  {
    id: 'performances',
    path: '/services/performances',
    title: 'Live Performances',
    shortTitle: 'Performances',
    summary:
      'Full live production for concerts, festivals, brand activations, and private celebrations.',
    heroImage: IMAGES.h6,
    paragraphs: [
      'Beyond jazz, we produce and book live performances across genres for stages that need reliable talent and smooth delivery.',
      'Our team coordinates artists, run-of-show, and technical needs so hosts get a memorable night without the operational stress.',
    ],
    bullets: [
      'Concert and festival bookings',
      'Brand and product launches',
      'Wedding and private events',
      'Multi-act lineups',
      'On-site performance coordination',
    ],
  },
  {
    id: 'instruments',
    path: '/services/instruments',
    title: 'Musical Instrument Outlet & Rental',
    shortTitle: 'Instruments',
    summary:
      'Buy, rent, and outfit stages with guitars, keys, drums, brass, and PA essentials.',
    heroImage: IMAGES.h5,
    paragraphs: [
      'Our outlet serves musicians, schools, churches, and event producers who need quality instruments without long import delays.',
      'Rental packages cover short gigs through multi-day productions, with guidance on setup and care.',
    ],
    bullets: [
      'Sales of new and select used gear',
      'Short and long-term rental',
      'Stage and rehearsal packages',
      'School and church supply',
      'Basic setup and advice',
    ],
  },
]

export const MUSIC_ARTISTS: MusicArtist[] = [
  {
    id: '1',
    name: 'Amadu Sesay',
    role: 'Jazz Guitar / Band Leader',
    blurb:
      'Leads intimate jazz nights and hotel residencies with a repertoire spanning standards and West African colour.',
    image: IMAGES.h2,
  },
  {
    id: '2',
    name: 'Isatu Cole',
    role: 'Vocalist',
    blurb:
      'Soul and jazz vocals for live dinners, brand events, and festival stages across Freetown.',
    image: IMAGES.h1,
  },
  {
    id: '3',
    name: 'The Harbour Quartet',
    role: 'Jazz Ensemble',
    blurb:
      'Four-piece jazz unit built for lounges, receptions, and evening programmes that need polish and presence.',
    image: IMAGES.h6,
  },
  {
    id: '4',
    name: 'Kai Bundu',
    role: 'Keys / Composer',
    blurb:
      'Keyboardist and composer supporting live sets, studio sessions, and artist development projects.',
    image: IMAGES.h5,
  },
]

export const MUSIC_INSTRUMENTS: MusicInstrument[] = [
  {
    id: 'acoustic-guitar',
    name: 'Acoustic Guitar',
    category: 'both',
    blurb: 'Stage-ready acoustics for sale or short rental.',
    image: IMAGES.h1,
  },
  {
    id: 'electric-keys',
    name: 'Electric Keyboard',
    category: 'both',
    blurb: 'Weighted and portable keys for rehearsals and gigs.',
    image: IMAGES.h5,
  },
  {
    id: 'drum-kit',
    name: 'Drum Kit',
    category: 'rental',
    blurb: 'Full kits for concerts, studios, and multi-day events.',
    image: IMAGES.h6,
  },
  {
    id: 'trumpet',
    name: 'Trumpet',
    category: 'sale',
    blurb: 'Brass instruments for students and working players.',
    image: IMAGES.h2,
  },
  {
    id: 'pa-system',
    name: 'PA System Package',
    category: 'rental',
    blurb: 'Speakers, mixer, and mics sized for small to mid venues.',
    image: IMAGES.h3,
  },
  {
    id: 'bass-guitar',
    name: 'Bass Guitar',
    category: 'both',
    blurb: 'Electric bass options for bands and rental backline.',
    image: IMAGES.h4,
  },
]

export const MUSIC_TESTIMONIALS: MusicTestimonial[] = [
  {
    quote:
      'Minim Music made our hotel jazz nights feel world-class. The band was sharp, professional, and the guests still talk about it.',
    name: 'Mariama K.',
    role: 'Hospitality Manager',
  },
  {
    quote:
      'Having real management support changed how I book and present my work. I finally feel like I have a team behind me.',
    name: 'Daniel T.',
    role: 'Recording Artist',
  },
  {
    quote:
      'We rented a full backline for a brand launch and everything arrived on time and ready. No stress, just a great show.',
    name: 'Fatmata S.',
    role: 'Events Producer',
  },
]

export type MusicTeamMember = {
  name: string
  role: string
  initials: string
  bio: string
}

export const MUSIC_TEAM: MusicTeamMember[] = [
  {
    name: 'Stage Director',
    role: 'Live Productions',
    initials: 'SD',
    bio: 'Coordinates lineups, run-of-show, and on-site delivery for jazz nights, concerts, and private stages.',
  },
  {
    name: 'Artist Manager',
    role: 'Representation & Bookings',
    initials: 'AM',
    bio: 'Supports careers with calendar management, fee negotiation, and partner introductions for working artists.',
  },
  {
    name: 'Instruments Lead',
    role: 'Sales & Rental',
    initials: 'IL',
    bio: 'Advises on gear, packages stages for events, and keeps the outlet stocked for musicians and venues.',
  },
  {
    name: 'Events Coordinator',
    role: 'Client Experience',
    initials: 'EC',
    bio: 'Matches hosts with the right talent and production level so every booking feels polished and practical.',
  },
]

export const MUSIC_PUBLIC_PATHS = [
  '/',
  '/services',
  '/artists',
  '/instruments',
  '/team',
  '/contact',
  '/privacy',
  '/terms',
] as const

export function getMusicServiceBySlug(slug: string): MusicService | undefined {
  return MUSIC_SERVICES.find((s) => s.id === slug)
}

export function isMusicPublicPath(pathname: string): boolean {
  if ((MUSIC_PUBLIC_PATHS as readonly string[]).includes(pathname)) return true
  const match = pathname.match(/^\/services\/([^/]+)$/)
  if (match && getMusicServiceBySlug(match[1])) return true
  return false
}

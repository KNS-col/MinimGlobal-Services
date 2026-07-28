export type ArchitectNavLink = {
  href: string
  label: string
}

export const ARCHITECT_NAV: ArchitectNavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/expenditure', label: 'Expenditure' },
  { href: '/contact', label: 'Contact' },
]

export type ArchitectSubsection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  image?: string
  imageAlt?: string
}

export type ArchitectService = {
  id: string
  path: string
  title: string
  shortTitle: string
  summary: string
  heroImage: string
  paragraphs: string[]
  bullets?: string[]
  subsections?: ArchitectSubsection[]
  images: { src: string; alt: string }[]
}

export type ArchitectPortfolioItem = {
  id: string
  slug: string
  title: string
  category: string
  location: string
  description: string
  image: string
  gallery: string[]
}

export const ARCHITECT_LEAD =
  'A full service architecture firm manages the complete architectural process, including pre-design analysis, architectural design, interior design, engineering coordination, construction documents, permitting, construction administration, and project closeout.'

export const ARCHITECT_INTRO =
  'There are many types of architectural firms, and the services they provide can vary significantly. A full service architecture firm provides both design and technical expertise, guiding a project from the earliest planning stages through construction and completion.'

const IMAGES = {
  h1: '/images/Hero-1.jpg',
  h2: '/images/Hero-2.jpeg',
  h3: '/images/Hero-3.jpg',
  h4: '/images/Hero-4.jpg',
  h5: '/images/Hero-5.jpg',
  h6: '/images/Hero-6.jpg',
} as const

export const ARCHITECT_SERVICES: ArchitectService[] = [
  {
    id: 'types-of-firms',
    path: '/services/types-of-firms',
    title: 'Types of Architectural Firms and Services',
    shortTitle: 'Firm Types',
    summary:
      'How design-focused, technical, and full service practices differ and what integrated delivery means for your project.',
    heroImage: IMAGES.h4,
    paragraphs: [
      'Architecture combines creative design, technical coordination, regulatory knowledge, and construction documentation. Different firms structure their services differently depending on their expertise and project types.',
      'Some architecture firms focus primarily on conceptual and aesthetic design. These firms may develop the overall vision, layouts, and material concepts for a project while relying on another architect or executive architect to produce the technical construction drawings and manage permitting.',
      'Other firms specialize in technical execution, construction documents, code compliance, and consultant coordination. These firms may support projects that originate with outside designers or design architects.',
      'A full service architecture firm integrates both design and technical execution within one practice. This allows the architect to maintain continuity throughout the project while coordinating the architectural, regulatory, and construction requirements from start to finish.',
    ],
    images: [
      { src: IMAGES.h1, alt: 'Architectural design studio workspace' },
      { src: IMAGES.h5, alt: 'Design drawings and material samples' },
    ],
  },
  {
    id: 'pre-purchase',
    path: '/services/pre-purchase',
    title: 'Pre-Purchase Property Evaluation and Acquisition Consulting',
    shortTitle: 'Pre-Purchase',
    summary:
      'Evaluate a property before you buy to understand feasibility, constraints, and renovation potential.',
    heroImage: IMAGES.h3,
    paragraphs: [
      'One of the most valuable services a full service architecture firm can provide is pre-purchase consulting before a property is acquired. Evaluating a property with an architect prior to purchase can help identify opportunities, limitations, construction complexity, zoning constraints, and overall project feasibility before a major financial commitment is made.',
      'Architectural pre-purchase consulting allows homeowners and buyers to make more informed decisions regarding apartments, townhouses, development sites, and residential properties. In Freetown and across Sierra Leone, site conditions, structural limitations, building systems, and local regulations can significantly impact the scope, cost, and feasibility of a project.',
    ],
    bullets: [
      'Zoning and code analysis',
      'Feasibility studies',
      'Preliminary layout studies',
      'Building and site analysis',
      'Structural considerations',
      'Renovation potential evaluation',
      'Addition and expansion potential',
      'Budget and construction complexity review',
      'Building systems assessment coordination',
      'Preliminary project strategy',
    ],
    images: [
      { src: IMAGES.h4, alt: 'Residential property evaluation before purchase' },
      { src: IMAGES.h6, alt: 'Site walkthrough and building assessment' },
      { src: IMAGES.h2, alt: 'Property feasibility review meeting' },
    ],
  },
  {
    id: 'pre-design',
    path: '/services/pre-design',
    title: 'Pre-Design',
    shortTitle: 'Pre-Design',
    summary:
      'Establish project goals, site analysis, programming, and the foundation for every phase that follows.',
    heroImage: IMAGES.h5,
    paragraphs: [
      'Pre-design is the preliminary analysis phase of a project. This stage establishes the foundation for the entire architectural process and is especially important for larger or more complex projects.',
      'During pre-design, we work closely with our clients to understand how they live, what is important to them, and how they want the home or building to function on a daily basis. This early phase helps establish the organizational framework for the project, including circulation, adjacencies, lifestyle priorities, entertaining needs, storage requirements, and long-term goals for the residence.',
    ],
    bullets: [
      'Feasibility studies',
      'Zoning analysis',
      'Existing conditions analysis',
      'Budget planning',
      'Programming',
      'Building code review',
      'Site evaluation',
      'Project scheduling',
    ],
    images: [
      { src: IMAGES.h1, alt: 'Pre-design site analysis' },
      { src: IMAGES.h3, alt: 'Programming and space planning session' },
    ],
  },
  {
    id: 'schematic-design',
    path: '/services/schematic-design',
    title: 'Schematic Design and Design Development',
    shortTitle: 'Design',
    summary:
      'From first layouts and massing through refined details, materials, and coordinated interiors.',
    heroImage: IMAGES.h6,
    paragraphs: [
      'Schematic Design and Design Development are the first two phases of the architectural design process.',
    ],
    subsections: [
      {
        title: 'Schematic Design',
        paragraphs: [
          'Schematic Design establishes the overall direction of the project. The goal is to develop a clear architectural direction that aligns with the client\'s goals, budget, and project constraints.',
        ],
        bullets: [
          'Space planning',
          'Layouts',
          'Circulation',
          'Massing',
          'Initial material concepts',
          'Preliminary architectural character',
        ],
        image: IMAGES.h5,
        imageAlt: 'Schematic design floor plan study',
      },
      {
        title: 'Design Development',
        paragraphs: [
          'Design Development refines the approved schematic design into a more coordinated and technically developed architectural proposal. This phase creates the framework for the technical construction documents that follow.',
        ],
        bullets: [
          'Architectural detailing',
          'Material selections',
          'Millwork concepts',
          'Lighting coordination',
          'Structural coordination',
          'Mechanical coordination',
          'Kitchen and bathroom layouts',
          'Interior architectural detailing',
        ],
        image: IMAGES.h4,
        imageAlt: 'Design development interior rendering',
      },
    ],
    images: [
      { src: IMAGES.h2, alt: 'Architectural model and elevation study' },
      { src: IMAGES.h1, alt: 'Material palette and finish selection' },
    ],
  },
  {
    id: 'interior',
    path: '/services/interior',
    title: 'Interior Architecture and Interior Design',
    shortTitle: 'Interior',
    summary:
      'Kitchens, bathrooms, millwork, finishes, and furniture layouts coordinated with the architecture.',
    heroImage: IMAGES.h2,
    paragraphs: [
      'Many full service architecture firms also provide interior architecture and interior design services. This creates a more cohesive relationship between the architecture and interiors of the home or building.',
      'At Minim Architect, we provide interior design services as part of our architectural process. Integrating architecture and interior design within one cohesive process allows us to maintain continuity throughout the project, from the overall architectural concept down to interior details.',
      'Our design process involves coordination and refinement throughout every stage of the project. We work closely with fabricators and suppliers to develop custom samples, finishes, and details before fabrication begins.',
    ],
    bullets: [
      'Kitchen design',
      'Bathroom design',
      'Custom millwork',
      'Built-in furniture',
      'Material selection',
      'Lighting coordination',
      'Interior detailing',
      'Finish coordination',
      'Furniture layouts',
      'Fixture and hardware coordination',
    ],
    images: [
      { src: IMAGES.h3, alt: 'Luxury interior renovation' },
      { src: IMAGES.h6, alt: 'Custom kitchen and millwork design' },
      { src: IMAGES.h5, alt: 'Interior finish and lighting coordination' },
    ],
  },
  {
    id: 'engineering',
    path: '/services/engineering',
    title: 'Engineering Consultant Coordination',
    shortTitle: 'Engineering',
    summary:
      'Structural, MEP, civil, and specialty consultants coordinated as one integrated project team.',
    heroImage: IMAGES.h1,
    paragraphs: [
      'Most architectural projects require engineering consultants, including structural, mechanical, electrical, plumbing, and civil engineers, along with specialty consultants when needed.',
      'Project teams can be structured in different ways. Sometimes the client hires consultants directly, while in other cases the architect coordinates the consultants as part of the architectural services.',
      'At Minim Architect, we often coordinate engineering consultants directly to maintain continuity throughout the project. When comparing architectural proposals, it is important to understand which consultant services are included and how the project team will be managed.',
    ],
    bullets: [
      'Structural engineers',
      'Mechanical engineers',
      'Electrical engineers',
      'Plumbing engineers',
      'Civil engineers',
      'Specialty consultants',
      'Lighting design',
      'Acoustic design',
    ],
    images: [
      { src: IMAGES.h4, alt: 'Engineering coordination meeting' },
      { src: IMAGES.h3, alt: 'Structural and MEP drawing review' },
    ],
  },
  {
    id: 'construction-documents',
    path: '/services/construction-documents',
    title: 'Construction Documents',
    shortTitle: 'Documents',
    summary:
      'Detailed drawings and specifications contractors can price, permit, and build from.',
    heroImage: IMAGES.h3,
    paragraphs: [
      'Construction Documents are the technical drawings and specifications used for permitting and construction. This is typically the largest and most detailed phase of the architectural process.',
      'This phase transforms the design into a fully coordinated technical set of drawings that contractors can price and build from. Technical expertise is one of the defining characteristics of a full service architecture firm.',
    ],
    bullets: [
      'Architectural plans',
      'Demolition plans',
      'Sections and elevations',
      'Construction details',
      'Coordination drawings',
      'Finish schedules',
      'Notes and specifications',
      'Consultant coordination',
    ],
    images: [
      { src: IMAGES.h5, alt: 'Construction document set review' },
      { src: IMAGES.h1, alt: 'Technical architectural drawings' },
      { src: IMAGES.h6, alt: 'Detail drawings and specifications' },
    ],
  },
  {
    id: 'permitting',
    path: '/services/permitting',
    title: 'Filing and Permitting',
    shortTitle: 'Permitting',
    summary:
      'Navigate local authority filings, code compliance, and plan review through approval.',
    heroImage: IMAGES.h4,
    paragraphs: [
      'Filing and permitting can be highly technical and jurisdiction-specific. Architectural permitting services help navigate local authority requirements and keep projects moving through approval stages.',
    ],
    bullets: [
      'Permit applications',
      'Local authority filings',
      'Zoning compliance documentation',
      'Construction code coordination',
      'Responses to plan examiner objections',
      'Permit revisions and amendments',
    ],
    images: [
      { src: IMAGES.h2, alt: 'Permit submission documentation' },
      { src: IMAGES.h3, alt: 'Code compliance review' },
    ],
  },
  {
    id: 'construction-admin',
    path: '/services/construction-admin',
    title: 'Construction Administration',
    shortTitle: 'Construction Admin',
    summary:
      'Site visits, contractor coordination, shop drawing review, and quality control during build.',
    heroImage: IMAGES.h6,
    paragraphs: [
      'Construction Administration refers to the architect\'s role during construction. The architect helps maintain alignment between the approved construction documents and the work being built. Construction administration also supports quality control and coordination throughout construction.',
    ],
    bullets: [
      'Visit the project site',
      'Review construction progress',
      'Answer contractor questions',
      'Issue clarifications',
      'Review shop drawings',
      'Coordinate with consultants',
      'Evaluate completed work',
      'Address field conditions',
    ],
    images: [
      { src: IMAGES.h4, alt: 'Architect reviewing construction progress on site' },
      { src: IMAGES.h1, alt: 'Construction site walkthrough' },
      { src: IMAGES.h5, alt: 'Quality review during construction phase' },
    ],
  },
  {
    id: 'closeout',
    path: '/services/closeout',
    title: 'Certificate of Occupancy and Project Closeout',
    shortTitle: 'Closeout',
    summary:
      'Final inspections, sign-offs, and occupancy coordination to complete your project.',
    heroImage: IMAGES.h2,
    paragraphs: [
      'At the completion of construction, projects often require inspections, approvals, and final sign-offs before completion. A full service architecture firm helps coordinate these final stages to support project completion and occupancy.',
    ],
    bullets: [
      'Final inspections',
      'Progress inspections',
      'Special inspections',
      'Sign-offs',
      'Closeout documentation',
      'Occupancy coordination',
    ],
    images: [
      { src: IMAGES.h3, alt: 'Final project walkthrough' },
      { src: IMAGES.h6, alt: 'Completed residential project' },
    ],
  },
  {
    id: 'full-service',
    path: '/services/full-service',
    title: 'Full Service Architectural Firms',
    shortTitle: 'Full Service',
    summary:
      'Continuity from concept through construction completion under one architectural practice.',
    heroImage: IMAGES.h1,
    paragraphs: [
      'A full service architecture firm provides continuity from concept through construction completion. Integrating design, technical documentation, consultant coordination, permitting, and construction administration within one architectural practice creates a more coordinated and efficient process for complex residential and commercial projects.',
      'At Minim Architect, we approach architecture as a fully integrated process that combines design, technical expertise, and construction coordination to deliver high quality projects throughout Freetown and Sierra Leone.',
    ],
    images: [
      { src: IMAGES.h4, alt: 'Completed Minim Architect project exterior' },
      { src: IMAGES.h2, alt: 'Integrated design and construction delivery' },
      { src: IMAGES.h5, alt: 'Full service architecture team at work' },
    ],
  },
]

export const ARCHITECT_PORTFOLIO: ArchitectPortfolioItem[] = [
  {
    id: '1',
    slug: 'hillcrest-residence',
    title: 'Hillcrest Residence',
    category: 'Residential',
    location: 'Hill Station, Freetown',
    description:
      'A full renovation and interior redesign of a hillside home with expanded living areas, custom millwork, and panoramic views.',
    image: IMAGES.h4,
    gallery: [IMAGES.h4, IMAGES.h2, IMAGES.h5],
  },
  {
    id: '2',
    slug: 'lumley-beach-villa',
    title: 'Lumley Beach Villa',
    category: 'Residential',
    location: 'Aberdeen, Freetown',
    description:
      'New coastal villa design with open plan living, natural ventilation, and a material palette suited to the seaside climate.',
    image: IMAGES.h6,
    gallery: [IMAGES.h6, IMAGES.h3, IMAGES.h1],
  },
  {
    id: '3',
    slug: 'central-plaza-offices',
    title: 'Central Plaza Offices',
    category: 'Commercial',
    location: 'Central Freetown',
    description:
      'Office fit-out and facade refresh for a multi-tenant commercial building, including lobby redesign and tenant coordination.',
    image: IMAGES.h3,
    gallery: [IMAGES.h3, IMAGES.h4, IMAGES.h6],
  },
  {
    id: '4',
    slug: 'regent-road-townhouse',
    title: 'Regent Road Townhouse',
    category: 'Renovation',
    location: 'Regent, Freetown',
    description:
      'Historic townhouse restoration with structural reinforcement, updated MEP systems, and period-sensitive interior detailing.',
    image: IMAGES.h5,
    gallery: [IMAGES.h5, IMAGES.h1, IMAGES.h2],
  },
  {
    id: '5',
    slug: 'brokie-community-center',
    title: 'Brokie Community Center',
    category: 'Institutional',
    location: 'Brookie, Freetown',
    description:
      'Community hall and learning space with flexible partitions, accessible entries, and durable finishes for daily public use.',
    image: IMAGES.h1,
    gallery: [IMAGES.h1, IMAGES.h3, IMAGES.h4],
  },
  {
    id: '6',
    slug: 'peninsula-retreat',
    title: 'Peninsula Retreat',
    category: 'Residential',
    location: 'Western Area Peninsula',
    description:
      'Low-impact retreat home integrated into a forested site, emphasizing natural light, local materials, and passive cooling.',
    image: IMAGES.h2,
    gallery: [IMAGES.h2, IMAGES.h6, IMAGES.h5],
  },
]

export const ARCHITECT_PUBLIC_PATHS = [
  '/',
  '/portfolio',
  '/services',
  '/contact',
  '/expenditure',
  '/privacy',
  '/terms',
] as const

export function getArchitectServiceBySlug(slug: string): ArchitectService | undefined {
  return ARCHITECT_SERVICES.find((s) => s.id === slug)
}

export function isArchitectPublicPath(pathname: string): boolean {
  if ((ARCHITECT_PUBLIC_PATHS as readonly string[]).includes(pathname)) return true
  const match = pathname.match(/^\/services\/([^/]+)$/)
  if (match && getArchitectServiceBySlug(match[1])) return true
  return false
}

/** @deprecated use ARCHITECT_SERVICES */
export const ARCHITECT_SECTIONS = ARCHITECT_SERVICES

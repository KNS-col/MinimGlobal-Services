export type FoodProduct = {
  id: string
  name: string
  description: string
  price: number
  unit: string
  category: 'meals' | 'pantry' | 'drinks' | 'party' | 'equipment'
  image: string
}

export type CateringPackage = {
  slug: string
  title: string
  description: string
  guests: string
  priceFrom: number
  image: string
  includes: string[]
}

export const cateringPackages: CateringPackage[] = [
  {
    slug: 'corporate',
    title: 'Corporate Catering',
    description:
      'Breakfasts, lunches, and refreshments for meetings, workshops, and office events.',
    guests: '10 to 200 guests',
    priceFrom: 150000,
    image: '/images/Hero-3.jpg',
    includes: [
      'Menu planning with your team',
      'Delivery & setup',
      'Disposable or plated service',
      'On site staff option',
    ],
  },
  {
    slug: 'weddings-events',
    title: 'Weddings & Events',
    description:
      'Full catering for weddings, birthdays, and celebrations with Sierra Leonean and continental menus.',
    guests: '50 to 500 guests',
    priceFrom: 500000,
    image: '/images/Hero-1.jpg',
    includes: [
      'Custom tasting menu',
      'Buffet or plated service',
      'Service staff',
      'Table setup support',
    ],
  },
  {
    slug: 'private',
    title: 'Private Dining',
    description:
      'Intimate catered meals for homes, VIP gatherings, and small celebrations.',
    guests: '5 to 40 guests',
    priceFrom: 250000,
    image: '/images/Hero-5.jpg',
    includes: [
      'Chef led menu',
      'Delivery or on site cook',
      'Serving ware options',
      'Flexible scheduling',
    ],
  },
  {
    slug: 'outdoor',
    title: 'Outdoor & Picnic',
    description:
      'Packed meals, BBQ, and picnic catering for outdoor events and staff days.',
    guests: '20 to 300 guests',
    priceFrom: 200000,
    image: '/images/Hero-4.jpg',
    includes: [
      'Packed or buffet options',
      'Grill packages available',
      'Cooler & packing',
      'On time delivery',
    ],
  },
]

/** Products available to buy online. Prices in Leones. */
export const foodProducts: FoodProduct[] = [
  {
    id: 'jollof-tray',
    name: 'Jollof Rice Party Tray',
    description: 'Feeds about 8 to 10 people. Classic Minim jollof.',
    price: 180000,
    unit: 'tray',
    category: 'meals',
    image: '/images/Hero-3.jpg',
  },
  {
    id: 'cassava-tray',
    name: 'Cassava Leaves Tray',
    description: 'Rich palava style cassava leaves with protein add on options.',
    price: 160000,
    unit: 'tray',
    category: 'meals',
    image: '/images/Hero-1.jpg',
  },
  {
    id: 'grilled-chicken',
    name: 'Grilled Chicken Platter',
    description: 'Seasoned grilled chicken pieces for sharing.',
    price: 220000,
    unit: 'platter',
    category: 'meals',
    image: '/images/Hero-4.jpg',
  },
  {
    id: 'fried-plantain',
    name: 'Fried Plantain Pack',
    description: 'Crisp sweet plantain ready to serve.',
    price: 45000,
    unit: 'pack',
    category: 'meals',
    image: '/images/Hero-5.jpg',
  },
  {
    id: 'spice-mix',
    name: 'Minim Jollof Spice Mix',
    description: 'House spice blend for home cooking.',
    price: 35000,
    unit: '500g',
    category: 'pantry',
    image: '/images/Hero-2.jpeg',
  },
  {
    id: 'palm-oil',
    name: 'Premium Palm Oil',
    description: 'Quality palm oil for kitchens and home use.',
    price: 55000,
    unit: '2L',
    category: 'pantry',
    image: '/images/Hero-6.jpg',
  },
  {
    id: 'rice-bag',
    name: 'Parboiled Rice',
    description: 'Restaurant grade rice for catering and home.',
    price: 280000,
    unit: '25kg',
    category: 'pantry',
    image: '/images/Hero-3.jpg',
  },
  {
    id: 'stew-base',
    name: 'Minim Stew Base',
    description: 'Ready base for tomato stew and sauces.',
    price: 40000,
    unit: '1kg',
    category: 'pantry',
    image: '/images/Hero-1.jpg',
  },
  {
    id: 'sobolo',
    name: 'Sobolo Drink Pack',
    description: 'Chilled hibiscus drink for events and homes.',
    price: 30000,
    unit: '2L',
    category: 'drinks',
    image: '/images/Hero-5.jpg',
  },
  {
    id: 'ginger-drink',
    name: 'Ginger Drink Pack',
    description: 'Fresh ginger drink, lightly sweetened.',
    price: 28000,
    unit: '2L',
    category: 'drinks',
    image: '/images/Hero-2.jpeg',
  },
  {
    id: 'snack-pack',
    name: 'Party Snack Mix',
    description: 'Assorted snacks for meetings and parties.',
    price: 75000,
    unit: 'box',
    category: 'party',
    image: '/images/Hero-4.jpg',
  },
  {
    id: 'cutlery-pack',
    name: 'Disposable Cutlery Set',
    description: 'Forks, spoons, knives, and napkins for 50 guests.',
    price: 85000,
    unit: 'set of 50',
    category: 'equipment',
    image: '/images/Hero-6.jpg',
  },
]

export const FOOD_NAV = [
  { href: '/', label: 'Home' },
  { href: '/catering', label: 'Catering' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
] as const

export const FOOD_PUBLIC_PATHS = [
  '/',
  '/catering',
  '/team',
  '/contact',
  '/privacy',
  '/terms',
] as const

export function formatLeones(amount: number) {
  return `Le ${amount.toLocaleString()}`
}

export function getProductsByCategory(category: FoodProduct['category'] | 'all') {
  if (category === 'all') return foodProducts
  return foodProducts.filter((p) => p.category === category)
}

export function isFoodPublicPath(pathname: string): boolean {
  return (FOOD_PUBLIC_PATHS as readonly string[]).includes(pathname)
}

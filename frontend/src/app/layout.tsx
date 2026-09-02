import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import ReduxProvider from '@/components/shared/ReduxProvider'
import { Toaster } from 'react-hot-toast'
import PageLoader from '@/components/shared/PageLoader'

// Same geometric-sans family as the "MINIM GLOBAL SERVICES" logotype, used
// site-wide so headings and body copy read as one consistent brand voice.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-brand',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://minimglobal.com'),
  title: {
    default: 'Minim Global Services | Diversified Group, Sierra Leone',
    template: '%s | Minim Global Services',
  },
  description:
    'Minim Global Services is a diversified Sierra Leonean group spanning media production, food & hospitality, architecture & construction, apparel, and music — building local capacity and community opportunity nationwide.',
  keywords:
    'Minim Global, Minim Global Services, Media Studios, Food Services, Architecture, Engineering, Clothing, Music, Sierra Leone, Freetown',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Minim Global Services',
    title: 'Minim Global Services | Diversified Group, Sierra Leone',
    description:
      'A diversified Sierra Leonean group spanning media production, food & hospitality, architecture & construction, apparel, and music.',
    images: ['/images/Logo.png'],
  },
  twitter: {
    card: 'summary',
    title: 'Minim Global Services',
    description:
      'A diversified Sierra Leonean group spanning media production, food & hospitality, architecture & construction, apparel, and music.',
    images: ['/images/Logo.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#001F3F',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <PageLoader />
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}

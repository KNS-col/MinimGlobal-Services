import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import ReduxProvider from '@/components/shared/ReduxProvider'
import { Toaster } from 'react-hot-toast'
import PageLoader from '@/components/shared/PageLoader'

export const metadata: Metadata = {
  title: 'Home Minim Global Services',
  description:
    'Minim Global Services is a leading company dedicated to providing top quality services across various industries. The future that connects us together!',
  keywords:
    'Minim Global, Media Studios, Food Services, Architecture, Engineering, Clothing, Sierra Leone',
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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Construction } from 'lucide-react'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { getBusinessBySlug } from '@/data/businesses'

type ComingSoonPageProps = {
  searchParams: { business?: string }
}

function resolveBusinessName(slug?: string): string | undefined {
  if (!slug) return undefined
  return getBusinessBySlug(slug)?.name
}

export function generateMetadata({ searchParams }: ComingSoonPageProps): Metadata {
  const businessName = resolveBusinessName(searchParams.business)
  return {
    title: '404: Site Under Development',
    description: businessName
      ? `${businessName} is still under development. Check back soon.`
      : 'This site is still under development. Check back soon.',
  }
}

export default function ComingSoonPage({ searchParams }: ComingSoonPageProps) {
  const businessName = resolveBusinessName(searchParams.business)

  return (
    <main>
      <Navbar />
      <section className="coming-soon-page ahs">
        <div className="coming-soon-orb coming-soon-orb-a" aria-hidden="true" />
        <div className="coming-soon-orb coming-soon-orb-b" aria-hidden="true" />
        <div className="ahs-container">
          <div className="coming-soon-card">
            <span className="coming-soon-badge">
              <Construction size={32} strokeWidth={1.75} />
            </span>
            <p className="coming-soon-status">
              <span className="coming-soon-status-dot" aria-hidden="true" />
              Under Development
            </p>
            <p className="coming-soon-code">404</p>
            <h1 className="ahs-heading">
              {businessName ? `${businessName} is still in development` : 'This site is still in development'}
            </h1>
            <p className="ahs-body">
              We&apos;re putting the finishing touches on this site. Please check
              back later. In the meantime, take a look at the rest of Minim
              Global Services.
            </p>
            <div className="coming-soon-actions">
              <Link href="/businesses" className="ahs-btn">
                <span className="ahs-btn-text">Explore Our Businesses</span>
                <ArrowRight size={16} className="ahs-btn-icon" />
              </Link>
            </div>
            <Link href="/" className="coming-soon-link">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

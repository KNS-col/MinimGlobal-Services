import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="dh-hero">
      <div
        className="dh-hero-slide"
        style={{ backgroundImage: "url('/images/minimglobal-hero.jpg')" }}
        aria-hidden="true"
      />
      <div className="dh-hero-overlay" />

      <div className="dh-hero-figure" aria-hidden="true">
        <img
          src="/images/minimglobal-sideImg.png"
          alt=""
          width={433}
          height={577}
        />
      </div>

      <div className="dh-hero-content">
        <h1 className="dh-hero-title">Welcome to Minim Global Services</h1>
        <p className="dh-hero-desc">
          Minim Global delivers quality media, food, architecture, apparel,
          and music, building local capacity and community opportunity
          nationwide across Sierra Leone.
        </p>
        <Link href="/businesses" className="ahs-btn dh-hero-cta">
          <span className="ahs-btn-text">Explore Our Businesses</span>
          <ArrowRight size={16} className="ahs-btn-icon" />
        </Link>
      </div>
    </section>
  )
}

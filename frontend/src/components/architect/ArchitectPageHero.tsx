type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
  ctaHref?: string
  ctaLabel?: string
}

export default function ArchitectPageHero({
  eyebrow,
  title,
  subtitle,
  image = '/images/Hero-4.jpg',
  ctaHref = '/businesses/architect/contact',
  ctaLabel = 'Request a Consultation',
}: Props) {
  return (
    <section className="ma-page-hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="ma-hero-overlay" />
      <div className="ma-page-hero-content">
        {eyebrow && <p className="ma-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="ma-page-hero-sub">{subtitle}</p>}
        <div className="ma-hero-actions">
          <a href={ctaHref} className="ma-btn ma-btn-primary">
            {ctaLabel}
          </a>
          <a href="/businesses/architect/portfolio" className="ma-btn ma-btn-ghost">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}

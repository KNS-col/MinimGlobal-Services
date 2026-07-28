type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
  ctaHref?: string
  ctaLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function MusicPageHero({
  eyebrow,
  title,
  subtitle,
  image = '/images/Hero-2.jpeg',
  ctaHref = '/businesses/music/contact',
  ctaLabel = 'Start your journey',
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <section className="mm-page-hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="mm-hero-overlay" />
      <div className="mm-page-hero-content">
        {eyebrow && <p className="mm-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="mm-page-hero-sub">{subtitle}</p>}
        <div className="mm-hero-actions">
          <a href={ctaHref} className="mm-btn mm-btn-primary">
            {ctaLabel}
          </a>
          {secondaryHref && secondaryLabel && (
            <a href={secondaryHref} className="mm-btn mm-btn-ghost">
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

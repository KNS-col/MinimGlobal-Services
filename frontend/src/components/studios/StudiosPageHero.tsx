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

export default function StudiosPageHero({
  eyebrow,
  title,
  subtitle,
  image = '/images/Hero-1.jpg',
  ctaHref = '/businesses/studios/contact',
  ctaLabel = 'Get in Touch',
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <section className="ms-page-hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="ms-hero-overlay" />
      <div className="ms-page-hero-content">
        {eyebrow && <p className="ms-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="ms-page-hero-sub">{subtitle}</p>}
        <div className="ms-hero-actions">
          <a href={ctaHref} className="ms-btn ms-btn-primary">
            {ctaLabel}
          </a>
          {secondaryHref && secondaryLabel && (
            <a href={secondaryHref} className="ms-btn ms-btn-ghost">
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

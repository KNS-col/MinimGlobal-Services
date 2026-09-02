type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image = '/images/minimglobal-hero.jpg',
}: PageHeroProps) {
  return (
    <section className="ahs-hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="ahs-hero-overlay" />
      <div className="ahs-hero-inner">
        {eyebrow && <p className="ahs-hero-eyebrow">{eyebrow}</p>}
        <h1 className="ahs-hero-title">{title}</h1>
        {subtitle && <p className="ahs-hero-sub">{subtitle}</p>}
      </div>
    </section>
  )
}

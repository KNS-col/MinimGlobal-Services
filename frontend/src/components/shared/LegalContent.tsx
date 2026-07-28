import { LEGAL_LAST_UPDATED, type LegalSection } from '@/data/legal'

type Props = {
  title: string
  sections: LegalSection[]
}

export default function LegalContent({ title, sections }: Props) {
  return (
    <article className="legal-content">
      <h1>{title}</h1>
      <p className="legal-updated">Last updated: {LEGAL_LAST_UPDATED}</p>
      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </section>
      ))}
    </article>
  )
}

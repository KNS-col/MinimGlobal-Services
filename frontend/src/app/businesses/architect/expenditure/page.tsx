import ArchitectPageHero from '@/components/architect/ArchitectPageHero'
import ExpenditureTracker from '@/components/architect/ExpenditureTracker'

export default function ArchitectExpenditurePage() {
  return (
    <>
      <ArchitectPageHero
        eyebrow="Project Transparency"
        title="Track Your Expenditure"
        subtitle="We track all expenditure prior to work done with precision, ensuring transparency in your construction project."
        image="/images/minin-architect.jpg"
        ctaHref="/businesses/architect/contact"
        ctaLabel="Discuss Your Project"
      />
      <div className="ma-tracker">
        <ExpenditureTracker />
      </div>
    </>
  )
}

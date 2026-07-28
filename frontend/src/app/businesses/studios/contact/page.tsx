import StudiosPageHero from '@/components/studios/StudiosPageHero'
import BookingForm from '@/components/studios/BookingForm'

export default function ContactPage() {
  return (
    <>
      <StudiosPageHero
        eyebrow="Get in touch"
        title="Let’s Get Started!"
        subtitle="Tell us about your project photography, videography, sound, displays, or design and we’ll get back to you quickly."
        image="/images/Hero-1.jpg"
        ctaHref="#booking-form"
        ctaLabel="Send an Inquiry"
      />

      <section id="booking-form" className="ms-cta">
        <BookingForm service="Minim Studios" />
      </section>
    </>
  )
}

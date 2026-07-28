import ClothingOrderForm from '@/components/clothing/ClothingOrderForm'

export default function ClothingContactPage() {
  return (
    <>
      <section
        className="mc-page-hero"
        style={{ backgroundImage: "url('/images/Hero-1.jpg')" }}
      >
        <div className="mc-hero-overlay" />
        <div className="mc-page-hero-content">
          <p className="mc-eyebrow">Customer Care</p>
          <h1>Contact Us</h1>
          <p>
            Send a message if you need help with sizes, branding, bulk pricing,
            or delivery.
          </p>
        </div>
      </section>

      <section className="mc-contact-page">
        <div className="mc-container mc-contact-grid">
          <div>
            <h2>Need help?</h2>
            <p>
              For custom branding, bulk orders, or large programme questions,
              message us here and we will follow up with pricing and timelines.
            </p>
            <ul className="mc-contact-details">
              <li>
                <strong>Phone</strong>
                <a href="tel:033883388">033 88 33 88</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
              </li>
              <li>
                <strong>Location</strong>
                <span>Freetown, Sierra Leone</span>
              </li>
            </ul>
          </div>
          <div>
            <h2>Send a Message</h2>
            <ClothingOrderForm />
          </div>
        </div>
      </section>
    </>
  )
}

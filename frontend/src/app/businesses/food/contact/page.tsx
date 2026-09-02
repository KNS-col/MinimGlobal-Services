'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function FoodContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Message sent. We will get back to you soon.')
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <>
      <section
        className="mf-page-hero"
        style={{ backgroundImage: "url('/images/minim-food.jpg')" }}
      >
        <div className="mf-hero-overlay" />
        <div className="mf-page-hero-content">
          <p className="mf-eyebrow">Contact Us</p>
          <h1>Book catering for your event</h1>
          <p>
            Share your date, guest count, and style. We will prepare a catering
            quote and confirm your booking.
          </p>
        </div>
      </section>

      <section className="mf-contact">
        <div className="mf-container mf-contact-grid">
          <div>
            <h2>Get in touch</h2>
            <ul className="mf-contact-details">
              <li>
                <strong>Address</strong>
                <span>Freetown, Sierra Leone</span>
              </li>
              <li>
                <strong>Phone</strong>
                <a href="tel:033883388">033 88 33 88</a>
              </li>
              <li>
                <strong>Bookings &amp; Email</strong>
                <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
              </li>
            </ul>
          </div>

          <form className="mf-form" onSubmit={onSubmit}>
            <label>
              Full Name
              <input
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label>
              Phone
              <input
                name="phone"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
            <label>
              Company / Venue
              <input
                name="company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="submit" className="mf-btn mf-btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

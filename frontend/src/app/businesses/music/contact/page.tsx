'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import MusicPageHero from '@/components/music/MusicPageHero'

export default function MusicContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Live Jazz',
    message: '',
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Message sent. We will get back to you soon.')
    setForm({
      name: '',
      email: '',
      phone: '',
      interest: 'Live Jazz',
      message: '',
    })
  }

  return (
    <>
      <MusicPageHero
        eyebrow="Contact"
        title="Let's get to work"
        subtitle="Book a performance, enquire about management, or ask about instrument sales and rental."
        image="/images/minim-music.jpg"
        ctaHref="tel:033883388"
        ctaLabel="Call 033 88 33 88"
      />

      <section className="mm-contact">
        <div className="mm-container mm-contact-grid">
          <div>
            <h2>Get in touch</h2>
            <p>
              Tell us about your event, artist career goals, or instrument needs.
              We will respond with next steps.
            </p>
            <ul className="mm-contact-details">
              <li>
                <strong>Phone</strong>
                <a href="tel:033883388">033 88 33 88</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:info@minimglobal.com">info@minimglobal.com</a>
              </li>
              <li>
                <strong>Office</strong>
                <span>Freetown, Sierra Leone</span>
              </li>
            </ul>
          </div>

          <form className="mm-form" onSubmit={onSubmit}>
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
              Interest
              <select
                name="interest"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
              >
                <option>Live Jazz</option>
                <option>Artist Management</option>
                <option>Live Performances</option>
                <option>Instrument Outlet / Rental</option>
                <option>Other</option>
              </select>
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
            <button type="submit" className="mm-btn mm-btn-primary">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

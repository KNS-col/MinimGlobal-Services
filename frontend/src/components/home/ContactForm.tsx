'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

type ContactFormProps = {
  embedded?: boolean
}

export default function ContactForm({ embedded = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      const res = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Request failed')

      toast.success('Message sent successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch {
      toast.error('We could not send your message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const form = (
    <form onSubmit={handleSubmit} className="dp-form">
      <div className="dp-form-row">
        <div className="dp-field">
          <label htmlFor="firstName">First Name *</label>
          <input
            id="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="dp-field">
          <label htmlFor="lastName">Last Name *</label>
          <input
            id="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="dp-field">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="dp-field">
        <label htmlFor="subject">Subject *</label>
        <select
          id="subject"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        >
          <option value="">Select a subject</option>
          <option value="Minim Studios">Minim Studios</option>
          <option value="Minim Foods">Minim Foods</option>
          <option value="Minim Architects, Designers & Engineers">
            Minim Architects, Designers &amp; Engineers
          </option>
          <option value="Minim Clothings">Minim Clothings</option>
          <option value="Minim Music">Minim Music</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="dp-field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Your message..."
        />
      </div>

      <button type="submit" className="ahs-btn dp-form-submit" disabled={submitting}>
        <span className="ahs-btn-text">
          {submitting ? 'Sending…' : 'Send Message'}
        </span>
      </button>
    </form>
  )

  if (embedded) return form

  return (
    <section className="dp-section dp-section-muted">
      <div className="dh-container" style={{ maxWidth: 760 }}>
        <div className="dh-section-head dh-section-head-center">
          <h2 className="dh-section-title">Send Us a Message</h2>
          <p className="dh-section-sub">
            We&apos;ll get back to you as soon as possible.
          </p>
          <span className="ahs-underline" aria-hidden="true">
            <span />
          </span>
        </div>
        {form}
      </div>
    </section>
  )
}

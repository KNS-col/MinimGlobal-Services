'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function ArchitectConsultForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Consultation request sent. We will be in touch shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <form className="ma-form" onSubmit={onSubmit}>
      <label>
        Name
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <label>
        Message
        <textarea
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>
      <button type="submit" className="ma-btn ma-btn-primary">
        Request a Consultation
      </button>
    </form>
  )
}

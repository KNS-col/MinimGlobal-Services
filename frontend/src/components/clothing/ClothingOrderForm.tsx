'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function ClothingOrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    items: '',
    sizes: '',
    specialRequests: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Message sent. We will get back to you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      items: '',
      sizes: '',
      specialRequests: '',
    })
  }

  return (
    <form className="mc-form" onSubmit={handleSubmit}>
      <div className="mc-form-row">
        <label>
          Full Name *
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
          />
        </label>
        <label>
          Email *
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
          />
        </label>
      </div>
      <div className="mc-form-row">
        <label>
          Phone Number *
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+232 XX XXX XXX"
          />
        </label>
        <label>
          Delivery Address *
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Your delivery address"
          />
        </label>
      </div>
      <div className="mc-form-row">
        <label>
          Items to Order *
          <textarea
            rows={3}
            required
            value={formData.items}
            onChange={(e) => setFormData({ ...formData, items: e.target.value })}
            placeholder="List the items you want to order..."
          />
        </label>
        <label>
          Sizes *
          <textarea
            rows={3}
            required
            value={formData.sizes}
            onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
            placeholder="Specify sizes for each item..."
          />
        </label>
      </div>
      <label>
        Special Requests
        <textarea
          rows={3}
          value={formData.specialRequests}
          onChange={(e) =>
            setFormData({ ...formData, specialRequests: e.target.value })
          }
          placeholder="Any customizations or special instructions..."
        />
      </label>
      <button type="submit" className="mc-btn mc-btn-primary">
        Send Message
      </button>
    </form>
  )
}

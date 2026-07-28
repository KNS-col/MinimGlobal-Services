'use client'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface BookingFormProps {
  service: string
}

export default function BookingForm({ service }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // API call would go here
    toast.success('Booking inquiry submitted successfully!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      date: '',
      message: '',
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Book Our Services</h2>
          <p className="section-subtitle">Send us an inquiry and we'll get back to you</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                placeholder="+232 XX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-text-dark mb-2">
              Service Type *
            </label>
            <select
              required
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent"
            >
              <option value="">Select a studio</option>
              <option value="photography">Photography Studio</option>
              <option value="videography">Videography Studio</option>
              <option value="sound">Sound Studio</option>
              <option value="displays">Displays Studio</option>
              <option value="design">Design Studio</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-text-dark mb-2">
              Additional Details
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent"
              placeholder="Tell us more about your requirements..."
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

'use client'
import { useState } from 'react'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

export default function AdminServices() {
  const [searchTerm, setSearchTerm] = useState('')

  const services = [
    { id: 1, name: 'Minim Studios', description: 'Media production services', status: 'Active' },
    { id: 2, name: 'Minim Foods', description: 'Catering and restaurant services', status: 'Active' },
    { id: 3, name: 'Minim Architects, Designers & Engineers', description: 'Construction and design services', status: 'Active' },
    { id: 4, name: 'Minim Clothings', description: 'Fashion and apparel services', status: 'Active' },
    { id: 5, name: 'Minim Music', description: 'Live performances, artist management, and instruments', status: 'Active' },
  ]

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Services</h1>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
          <Plus size={20} />
          Add Service
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                <p className="text-gray-600 mt-1">{service.description}</p>
              </div>
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                {service.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <Edit size={18} />
                Edit
              </button>
              <button className="text-red-600 hover:text-red-800 flex items-center gap-1">
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

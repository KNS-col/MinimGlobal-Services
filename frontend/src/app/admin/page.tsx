'use client'
import { Building2, Users, FileText, MessageSquare, ImageIcon, DollarSign } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { label: 'Services', value: '5', icon: Building2, color: 'bg-blue-500' },
    { label: 'Team Members', value: '10', icon: Users, color: 'bg-green-500' },
    { label: 'Blog Posts', value: '6', icon: FileText, color: 'bg-purple-500' },
    { label: 'Contact Messages', value: '12', icon: MessageSquare, color: 'bg-orange-500' },
    { label: 'Portfolio Items', value: '8', icon: ImageIcon, color: 'bg-pink-500' },
    { label: 'Expenditure Records', value: '15', icon: DollarSign, color: 'bg-yellow-500' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
              N
            </div>
            <div>
              <p className="font-semibold text-slate-900">New contact message received</p>
              <p className="text-sm text-gray-600">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
              B
            </div>
            <div>
              <p className="font-semibold text-slate-900">New blog post published</p>
              <p className="text-sm text-gray-600">1 hour ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
              S
            </div>
            <div>
              <p className="font-semibold text-slate-900">Service updated</p>
              <p className="text-sm text-gray-600">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

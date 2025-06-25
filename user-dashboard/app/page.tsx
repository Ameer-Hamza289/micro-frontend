import { DashboardNav } from '@/components/DashboardNav'
import { ProfileSummary } from '@/components/ProfileSummary'
import { RecentOrders } from '@/components/RecentOrders'
import { QuickActions } from '@/components/QuickActions'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your account today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <ProfileSummary />
            <RecentOrders />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <QuickActions />
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-gray-600">Total Orders</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-2xl font-bold text-green-600">$2,847</div>
                <div className="text-sm text-gray-600">Total Spent</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <div className="text-sm text-gray-600">Wishlist Items</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-2xl font-bold text-orange-600">4.8</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="http://localhost:3001" className="block text-blue-600 hover:text-blue-700">
                  Browse Products
                </a>
                <a href="http://localhost:3002" className="block text-blue-600 hover:text-blue-700">
                  View Cart
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-700">
                  Track Orders
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-700">
                  Manage Addresses
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-700">
                  Payment Methods
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 
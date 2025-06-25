export function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-blue-600 text-sm">📋</span>
          </div>
          <span className="text-sm font-medium">View Orders</span>
        </button>
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-green-600 text-sm">❤️</span>
          </div>
          <span className="text-sm font-medium">Wishlist</span>
        </button>
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-purple-600 text-sm">⚙️</span>
          </div>
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-orange-600 text-sm">📞</span>
          </div>
          <span className="text-sm font-medium">Support</span>
        </button>
      </div>
    </div>
  )
} 
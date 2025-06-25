export function RecentOrders() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Orders</h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b">
          <div>
            <p className="font-medium">#12345</p>
            <p className="text-sm text-gray-600">March 15, 2024</p>
          </div>
          <div className="text-right">
            <p className="font-medium">$89.99</p>
            <p className="text-sm text-green-600">Delivered</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <div>
            <p className="font-medium">#12344</p>
            <p className="text-sm text-gray-600">March 10, 2024</p>
          </div>
          <div className="text-right">
            <p className="font-medium">$45.50</p>
            <p className="text-sm text-blue-600">Processing</p>
          </div>
        </div>
      </div>
    </div>
  )
} 
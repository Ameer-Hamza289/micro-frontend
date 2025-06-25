export function ProfileSummary() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Summary</h2>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-medium text-lg">JD</span>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
          <p className="text-gray-600">john.doe@example.com</p>
          <p className="text-sm text-gray-500">Member since March 2024</p>
        </div>
      </div>
    </div>
  )
} 
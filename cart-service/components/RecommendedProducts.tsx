export function RecommendedProducts() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">Recommended Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <div className="bg-gray-200 h-32 rounded mb-2"></div>
          <h4 className="font-medium">Product 1</h4>
          <p className="text-gray-600">$29.99</p>
        </div>
        <div className="border rounded-lg p-4">
          <div className="bg-gray-200 h-32 rounded mb-2"></div>
          <h4 className="font-medium">Product 2</h4>
          <p className="text-gray-600">$39.99</p>
        </div>
      </div>
    </div>
  )
} 
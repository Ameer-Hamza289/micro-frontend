import { Search, Filter } from 'lucide-react'

export function ProductSearch() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
      
      <div className="flex gap-2">
        <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
        
        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home & Garden</option>
          <option>Sports</option>
        </select>
      </div>
    </div>
  )
} 
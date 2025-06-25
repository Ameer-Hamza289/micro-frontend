'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const categories = [
  { name: 'Electronics', count: 324 },
  { name: 'Fashion', count: 156 },
  { name: 'Home & Garden', count: 89 },
  { name: 'Sports', count: 67 },
  { name: 'Books', count: 45 },
]

const brands = [
  { name: 'Apple', count: 45 },
  { name: 'Samsung', count: 32 },
  { name: 'Nike', count: 28 },
  { name: 'Adidas', count: 24 },
  { name: 'Sony', count: 19 },
]

const priceRanges = [
  { label: 'Under $25', min: 0, max: 25 },
  { label: '$25 - $50', min: 25, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: 'Over $200', min: 200, max: 99999 },
]

export function ProductFilters() {
  const [openSections, setOpenSections] = useState({
    categories: true,
    brands: true,
    price: true,
    rating: true,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button className="text-sm text-brand-600 hover:text-brand-700">
          Clear All
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <button
            onClick={() => toggleSection('categories')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="font-medium text-gray-900">Categories</h3>
            {openSections.categories ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
          
          {openSections.categories && (
            <div className="mt-3 space-y-2">
              {categories.map((category) => (
                <label key={category.name} className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {category.name} ({category.count})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brands */}
        <div>
          <button
            onClick={() => toggleSection('brands')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="font-medium text-gray-900">Brands</h3>
            {openSections.brands ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
          
          {openSections.brands && (
            <div className="mt-3 space-y-2">
              {brands.map((brand) => (
                <label key={brand.name} className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {brand.name} ({brand.count})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div>
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="font-medium text-gray-900">Price Range</h3>
            {openSections.price ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
          
          {openSections.price && (
            <div className="mt-3 space-y-2">
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center">
                  <input
                    type="radio"
                    name="price-range"
                    className="w-4 h-4 text-brand-600 border-gray-300 focus:ring-brand-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Rating */}
        <div>
          <button
            onClick={() => toggleSection('rating')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="font-medium text-gray-900">Customer Rating</h3>
            {openSections.rating ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
          
          {openSections.rating && (
            <div className="mt-3 space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 flex items-center">
                    {rating}+ stars
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 
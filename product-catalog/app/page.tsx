import { ProductGrid } from '../components/ProductGrid'
import { ProductFilters } from '../components/ProductFilters'
import { ProductSearch } from '../components/ProductSearch'

export default function ProductCatalogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Product Catalog
        </h1>
        <ProductSearch />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters />
        </div>
        <div className="lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  )
} 
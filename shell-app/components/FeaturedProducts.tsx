import { Star, ShoppingCart } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'Wireless Headphones Pro',
    price: 299,
    originalPrice: 399,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    price: 199,
    originalPrice: 249,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 89,
    badge: 'New',
    badgeColor: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Ergonomic Laptop Stand',
    price: 79,
    originalPrice: 99,
    image: '/api/placeholder/300/300',
    rating: 4.9,
    reviews: 203,
    badge: 'Top Rated',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 4,
    name: 'USB-C Hub Ultimate',
    price: 49,
    originalPrice: 69,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 156,
    badge: 'Deal',
    badgeColor: 'bg-red-500'
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked products with the best deals and highest ratings from our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-w-1 aspect-h-1">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Product Image</span>
                </div>
                <div className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                  {product.badge}
                </div>
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingCart className="h-4 w-4 text-gray-700" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="bg-success-50 text-success-600 text-xs px-2 py-1 rounded-full font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                
                <button className="w-full btn-primary group-hover:bg-brand-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import { Product } from 'shared/types'

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    category: "Electronics",
    inStock: true,
    stockQuantity: 15,
    isNew: false,
    isSale: true,
    brand: "AudioTech",
    sku: "AT-WBH-001"
  },
  {
    id: 2,
    name: "Premium Coffee Maker",
    price: 149.99,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
    category: "Home & Kitchen",
    inStock: true,
    stockQuantity: 8,
    isNew: true,
    isSale: false,
    brand: "BrewMaster"
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.3,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    category: "Wearables",
    inStock: true,
    isNew: false,
    isSale: true
  }
]

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  onAddToWishlist: (productId: number) => void
}

function ProductCard({ product, onAddToCart, onAddToWishlist }: ProductCardProps) {
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false)

  const handleWishlistToggle = (): void => {
    setIsInWishlist(!isInWishlist)
    onAddToWishlist(product.id)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
          )}
        </div>

        <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full transition-colors ${
              isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2 bg-white text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
          <h3 className="font-medium text-gray-900 line-clamp-2">{product.name}</h3>
          {product.brand && (
            <p className="text-sm text-gray-600">by {product.brand}</p>
          )}
        </div>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>

        <button 
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors ${
            product.inStock 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>
      </div>
    </div>
  )
}

export function ProductGrid() {
  const handleAddToWishlist = (productId: number): void => {
    console.log('Added to wishlist:', productId)
  }

  const handleAddToCart = (product: Product): void => {
    console.log('Adding to cart:', product)
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sampleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      ))}
    </div>
  )
} 
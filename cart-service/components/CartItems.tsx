'use client'

import { useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { CartItem } from 'shared/types'

const sampleCartItems: CartItem[] = [
  {
    id: 1,
    productId: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    color: "Black",
    inStock: true,
    maxQuantity: 15
  },
  {
    id: 2,
    productId: 3,
    name: "Smart Fitness Watch", 
    price: 199.99,
    originalPrice: 249.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
    color: "Silver",
    size: "42mm",
    inStock: true,
    maxQuantity: 10
  }
]

interface CartItemComponentProps {
  item: CartItem
  onUpdateQuantity: (itemId: number, quantity: number) => void
  onRemove: (itemId: number) => void
}

function CartItemComponent({ item, onUpdateQuantity, onRemove }: CartItemComponentProps) {
  const handleQuantityChange = (newQuantity: number): void => {
    if (newQuantity >= 1 && newQuantity <= (item.maxQuantity || 999)) {
      onUpdateQuantity(item.id, newQuantity)
    }
  }

  const itemTotal: number = item.price * item.quantity
  const savings: number = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0

  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            {item.color && <span>Color: {item.color}</span>}
            {item.size && <span>Size: {item.size}</span>}
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
            {item.originalPrice && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  ${item.originalPrice.toFixed(2)}
                </span>
                <span className="text-sm text-green-600 font-medium">
                  Save ${(item.originalPrice - item.price).toFixed(2)}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="p-1 hover:bg-gray-100 rounded"
            disabled={item.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-2 min-w-[2rem] text-center">{item.quantity}</span>
          <button 
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded"
            disabled={!item.inStock || item.quantity >= (item.maxQuantity || 999)}
          >
            <Plus className="h-4 w-4" />
          </button>
          <button 
            onClick={() => onRemove(item.id)}
            className="p-1 hover:bg-gray-100 rounded text-red-600 ml-2"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3 pt-3 border-t">
        <span className="text-sm text-gray-600">Item total:</span>
        <div className="text-right">
          <span className="text-lg font-bold text-gray-900">${itemTotal.toFixed(2)}</span>
          {savings > 0 && (
            <div className="text-sm text-green-600">You save ${savings.toFixed(2)}</div>
          )}
        </div>
      </div>
    </div>
  )
}

interface EmptyCartProps {
  onContinueShopping: () => void
}

function EmptyCart({ onContinueShopping }: EmptyCartProps) {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
      <p className="text-gray-600 mb-6">Add some products to get started!</p>
      <button 
        onClick={onContinueShopping}
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
      >
        Continue Shopping
      </button>
    </div>
  )
}

export function CartItems() {
  const [cartItems, setCartItems] = useState<CartItem[]>(sampleCartItems)

  const updateQuantity = (itemId: number, newQuantity: number): void => {
    setCartItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (itemId: number): void => {
    setCartItems(items => items.filter(item => item.id !== itemId))
  }

  const handleContinueShopping = (): void => {
    window.location.href = 'http://localhost:3001'
  }

  const subtotal: number = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalSavings: number = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity)
    }
    return sum
  }, 0)
  const totalItems: number = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (cartItems.length === 0) {
    return <EmptyCart onContinueShopping={handleContinueShopping} />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
        <span className="text-gray-600">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItemComponent
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal ({totalItems} items)</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          {totalSavings > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">You save</span>
              <span className="font-medium text-green-600">-${totalSavings.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button 
          onClick={handleContinueShopping}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Continue Shopping
        </button>
        <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
} 
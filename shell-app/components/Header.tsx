'use client'

import Link from 'next/link'
import { ShoppingCart, User, Search, Menu } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

interface NavigationLink {
  href: string
  label: string
  external?: boolean
}

interface HeaderProps {
  className?: string
}

const navigationLinks: NavigationLink[] = [
  { href: 'http://localhost:3001', label: 'Products', external: true },
  { href: 'http://localhost:3002', label: 'Cart', external: true },
  { href: 'http://localhost:3003', label: 'Dashboard', external: true }
]

export function Header({ className = "" }: HeaderProps) {
  const { items, itemCount } = useCartStore()

  const handleSearchClick = (): void => {
    console.log('Search clicked')
    // Implement search functionality
  }

  const handleMenuToggle = (): void => {
    console.log('Mobile menu toggled')
    // Implement mobile menu toggle
  }

  const handleNavigation = (href: string): void => {
    // Implement navigation functionality
  }

  return (
    <header className={`bg-white shadow-sm border-b sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              MicroMart
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/micro-frontend-demo" className="text-gray-600 hover:text-gray-900 transition-colors font-medium bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              🚀 Micro Frontend Demo
            </Link>
            <button 
              onClick={() => handleNavigation('http://localhost:3001')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavigation('http://localhost:3003')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Dashboard
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleSearchClick}
              className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
              aria-label="Search products"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link 
              href="http://localhost:3002" 
              className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>
            
            <Link 
              href="http://localhost:3003" 
              className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
              aria-label="User dashboard"
            >
              <User className="h-5 w-5" />
            </Link>

            <button 
              onClick={handleMenuToggle}
              className="md:hidden p-2 text-gray-400 hover:text-gray-500 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 
import Link from 'next/link'
import { Smartphone, Shirt, Home, Dumbbell, Book, GamepadIcon } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Latest gadgets and tech',
    icon: Smartphone,
    href: '/categories/electronics',
    color: 'from-blue-500 to-purple-600',
    productCount: '2,500+',
  },
  {
    id: 2,
    name: 'Fashion',
    description: 'Trendy clothes and accessories',
    icon: Shirt,
    href: '/categories/fashion',
    color: 'from-pink-500 to-rose-600',
    productCount: '1,800+',
  },
  {
    id: 3,
    name: 'Home & Garden',
    description: 'Everything for your home',
    icon: Home,
    href: '/categories/home-garden',
    color: 'from-green-500 to-emerald-600',
    productCount: '3,200+',
  },
  {
    id: 4,
    name: 'Sports & Fitness',
    description: 'Fitness and outdoor gear',
    icon: Dumbbell,
    href: '/categories/sports',
    color: 'from-orange-500 to-red-600',
    productCount: '1,200+',
  },
  {
    id: 5,
    name: 'Books & Media',
    description: 'Books, movies, and music',
    icon: Book,
    href: '/categories/books',
    color: 'from-indigo-500 to-blue-600',
    productCount: '950+',
  },
  {
    id: 6,
    name: 'Gaming',
    description: 'Games and gaming accessories',
    icon: GamepadIcon,
    href: '/categories/gaming',
    color: 'from-purple-500 to-pink-600',
    productCount: '800+',
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover thousands of products across our carefully curated categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <category.icon className="h-8 w-8" />
                  <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {category.productCount}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-200 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-white/90 text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center text-sm font-medium">
                  <span>Shop Now</span>
                  <svg 
                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 
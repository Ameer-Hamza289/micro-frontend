// Product Types
export interface Product {
  id: number
  name: string
  description?: string
  price: number
  originalPrice?: number
  category: string
  image: string
  images?: string[]
  rating: number
  reviews: number
  inStock: boolean
  stockQuantity?: number
  isNew?: boolean
  isSale?: boolean
  tags?: string[]
  brand?: string
  sku?: string
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
  }
}

// Cart Types
export interface CartItem {
  id: number
  productId: number
  name: string
  price: number
  originalPrice?: number
  quantity: number
  image: string
  color?: string
  size?: string
  inStock: boolean
  maxQuantity?: number
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  isLoading?: boolean
  error?: string
}

export interface CartActions {
  addItem: (product: Product, quantity?: number, options?: ProductOptions) => void
  removeItem: (itemId: number) => void
  updateQuantity: (itemId: number, quantity: number) => void
  clearCart: () => void
  getItemById: (itemId: number) => CartItem | undefined
}

// User Types
export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  fullName: string
  phone?: string
  avatar?: string
  dateJoined: string
  isVerified: boolean
  preferences?: UserPreferences
  addresses?: Address[]
  paymentMethods?: PaymentMethod[]
}

export interface UserPreferences {
  newsletter: boolean
  notifications: boolean
  theme: 'light' | 'dark' | 'auto'
  language: string
  currency: string
}

export interface Address {
  id: number
  type: 'home' | 'work' | 'other'
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
  isDefault: boolean
}

export interface PaymentMethod {
  id: number
  type: 'card' | 'paypal' | 'bank'
  last4?: string
  brand?: string
  expiryMonth?: number
  expiryYear?: number
  isDefault: boolean
  nickname?: string
}

// Order Types
export interface Order {
  id: number
  orderNumber: string
  userId: number
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
  shippingAddress: Address
  billingAddress?: Address
  paymentMethod: PaymentMethod
  createdAt: string
  updatedAt: string
  estimatedDelivery?: string
  trackingNumber?: string
  notes?: string
}

export interface OrderItem {
  id: number
  productId: number
  name: string
  price: number
  quantity: number
  image: string
  color?: string
  size?: string
  sku?: string
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

// Product Options
export interface ProductOptions {
  color?: string
  size?: string
  quantity?: number
}

// Filter Types
export interface ProductFilters {
  category?: string[]
  priceRange?: {
    min: number
    max: number
  }
  rating?: number
  inStock?: boolean
  brand?: string[]
  tags?: string[]
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest' | 'popularity'
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  errors?: string[]
  meta?: {
    page?: number
    limit?: number
    total?: number
    totalPages?: number
  }
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Component Props Types
export interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product, options?: ProductOptions) => void
  onAddToWishlist?: (productId: number) => void
  onQuickView?: (productId: number) => void
  showQuickActions?: boolean
  className?: string
}

export interface CartItemProps {
  item: CartItem
  onUpdateQuantity: (itemId: number, quantity: number) => void
  onRemove: (itemId: number) => void
  onMoveToWishlist?: (itemId: number) => void
  showActions?: boolean
  className?: string
}

// Dashboard Types
export interface DashboardStats {
  totalOrders: number
  totalSpent: number
  wishlistItems: number
  averageRating: number
  recentOrders: Order[]
  favoriteCategories: string[]
}

// Wishlist Types
export interface WishlistItem {
  id: number
  userId: number
  productId: number
  product: Product
  addedAt: string
  notes?: string
}

// Search Types
export interface SearchFilters extends ProductFilters {
  query?: string
}

export interface SearchResult {
  products: Product[]
  totalResults: number
  suggestions?: string[]
  filters: {
    categories: Array<{ name: string; count: number }>
    brands: Array<{ name: string; count: number }>
    priceRanges: Array<{ min: number; max: number; count: number }>
  }
}

// Event Types for Micro Frontend Communication
export interface MicroFrontendEvent<T = any> {
  type: string
  source: 'shell' | 'products' | 'cart' | 'dashboard'
  data: T
  timestamp: number
}

export interface CartUpdateEvent extends MicroFrontendEvent<{
  action: 'add' | 'remove' | 'update' | 'clear'
  item?: CartItem
  itemId?: number
  quantity?: number
}> {
  type: 'cart:update'
}

export interface UserUpdateEvent extends MicroFrontendEvent<Partial<User>> {
  type: 'user:update'
}

export interface NavigationEvent extends MicroFrontendEvent<{
  route: string
  params?: Record<string, any>
}> {
  type: 'navigation:change'
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>> 
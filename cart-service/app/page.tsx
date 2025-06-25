import { CartItems } from '@/components/CartItems'

export default function CartPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <CartItems />
    </div>
  )
} 